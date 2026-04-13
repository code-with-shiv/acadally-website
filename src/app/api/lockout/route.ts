import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import { Lockout } from '@/models/Lockout';
import { headers } from 'next/headers';

export async function GET() {
  try {
    const headersList = await headers();
    const forwarded = headersList.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : '127.0.0.1';

    await connectToDatabase();
    const lockout = await Lockout.findOne({ ip, expiresAt: { $gt: new Date() } });

    return NextResponse.json({ 
      locked: !!lockout,
      remaining: lockout ? Math.max(0, lockout.expiresAt.getTime() - Date.now()) : 0 
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST() {
  try {
    const headersList = await headers();
    const forwarded = headersList.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : '127.0.0.1';

    await connectToDatabase();
    
    // Set lockout for 1 hour
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
    
    await Lockout.findOneAndUpdate(
      { ip },
      { expiresAt },
      { upsert: true, new: true }
    );

    return NextResponse.json({ success: true, expiresAt });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
