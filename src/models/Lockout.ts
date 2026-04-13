import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILockout extends Document {
  ip: string;
  expiresAt: Date;
}

const LockoutSchema: Schema = new Schema(
  {
    ip: { type: String, required: true, index: true },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

// TTL index to automatically remove expired lockouts
LockoutSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const Lockout: Model<ILockout> = mongoose.models.Lockout || mongoose.model<ILockout>('Lockout', LockoutSchema);
