import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import { Blog } from '@/models/Blog';

const isImageUrl = (value: string) => /^https?:\/\/.+/.test(value);
const isBase64Image = (value: string) => /^data:image\/[a-zA-Z]+;base64,/.test(value);

function parseCoverImage(value: unknown): string {
  if (value === undefined || value === null) return '';
  if (typeof value !== 'string') {
    throw new Error('coverImage must be a URL or base64 image string');
  }

  const trimmed = value.trim();
  if (!trimmed) return '';
  if (isImageUrl(trimmed) || isBase64Image(trimmed)) {
    return trimmed;
  }

  throw new Error('coverImage must be a valid image URL or base64 image string');
}

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const includeDeleted = req.nextUrl.searchParams.get('includeDeleted') === 'true';
    const includeDraft = req.nextUrl.searchParams.get('includeDraft') === 'true';
    const activeDeletedQuery = { $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }] };
    const draftQuery = includeDraft ? {} : { isDraft: false };
    const query = includeDeleted
      ? draftQuery
      : { $and: [activeDeletedQuery, draftQuery] };
    const blogs = await Blog.find(query).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: blogs });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectToDatabase();
    
    // Auto-generate slug if not provided
    if (!body.slug && body.title) {
        body.slug = body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    if (body.coverImage !== undefined) {
      body.coverImage = parseCoverImage(body.coverImage);
    }
    
    const blog = await Blog.create(body);
    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
