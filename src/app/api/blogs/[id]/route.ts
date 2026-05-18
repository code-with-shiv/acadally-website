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

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const includeDeleted = req.nextUrl.searchParams.get('includeDeleted') === 'true';
    const includeDraft = req.nextUrl.searchParams.get('includeDraft') === 'true';

    // Check if id is a valid ObjectId, otherwise it might be a slug
    const baseQuery = id.match(/^[0-9a-fA-F]{24}$/)
        ? { _id: id }
        : { slug: id };

    const activeDeletedQuery = { $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }] };
    const draftQuery = includeDraft ? {} : { isDraft: false };
    const query = includeDeleted
      ? { ...baseQuery, ...draftQuery }
      : { $and: [baseQuery, activeDeletedQuery, draftQuery] };

    const blog = await Blog.findOne(query);

    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: blog });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const body = await req.json();
    
    // Auto-generate slug if not provided and title changes
    if (!body.slug && body.title) {
        body.slug = body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    if (body.coverImage !== undefined) {
      body.coverImage = parseCoverImage(body.coverImage);
    }

    const blog = await Blog.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: blog });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const blog = await Blog.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true }
    );

    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: blog });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
