import mongoose from 'mongoose';
import dns from 'dns';
import { promisify } from 'util';

// Force Node.js C-ares resolver to use Google & Cloudflare DNS
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  console.warn('MONGODB_URI is not defined; database connection will fail at runtime if attempted.');
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

const resolve4 = promisify(dns.resolve4);

/**
 * Custom lookup function that uses the C-ares resolver (dns.resolve4)
 * instead of the default OS resolver (dns.lookup).
 * This respects dns.setServers() and bypasses ISP DNS issues.
 */
function customLookup(
  hostname: string,
  options: any,
  callback: (err: Error | null, address: any, family?: number) => void
): void {
  // Check if this is an SRV record request (MongoDB driver uses this for +srv URIs)
  if (hostname.startsWith('_mongodb._tcp.')) {
    dns.resolveSrv(hostname, (err, addresses) => {
      if (err || !addresses || addresses.length === 0) {
        console.warn(`[DB] DNS resolveSrv failed for ${hostname}: ${err?.message}`);
        return dns.lookup(hostname, options, callback);
      }
      // SRV records return an array of objects { name, port, priority, weight }
      // MongoDB driver expects these to be handled correctly
      callback(null, addresses);
    });
    return;
  }

  // Standard A record request
  dns.resolve4(hostname, (err, addresses) => {
    if (err || !addresses || addresses.length === 0) {
      console.warn(`[DB] DNS resolve4 failed for ${hostname}: ${err?.message}`);
      return dns.lookup(hostname, options, callback);
    }
    callback(null, addresses[0], 4);
  });
}

async function connectToDatabase() {
  if (cached.conn) {
    // Verify the existing connection is still alive
    if (mongoose.connection.readyState === 1) {
      return cached.conn;
    }
    // Connection dropped, reset cache
    console.warn('[DB] Stale connection detected, reconnecting...');
    cached.conn = null;
    cached.promise = null;
  }

  if (!cached.promise) {
    if (!MONGODB_URI) {
      throw new Error('Please define the MONGODB_URI environment variable inside .env');
    }

    const connectionString = MONGODB_URI as string; // Moved this line up to be available for logging
    console.log('[DB] Connecting to URI:', connectionString.split('@')[1] || connectionString);

    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      family: 4,
      // Use our custom DNS lookup that goes through Google DNS
      lookup: (hostname: string, options: any, callback: any) => {
        // If it's a localhost or doesn't look like a mongo host, use standard lookup
        if (hostname === 'localhost' || !hostname.includes('mongodb.net')) {
          return dns.lookup(hostname, options, callback);
        }
        return customLookup(hostname, options, callback);
      },
    };

    console.log('[DB] Connecting to MongoDB...');

    cached.promise = mongoose.connect(connectionString, opts).then((mongooseInstance) => {
      console.log('[DB] MongoDB Connected Successfully!');
      return mongooseInstance;
    }).catch((err) => {
      console.error('[DB] MongoDB Connection Failed:', err.message);
      cached.promise = null;
      throw err;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectToDatabase;
