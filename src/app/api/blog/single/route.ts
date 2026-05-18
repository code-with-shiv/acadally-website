import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import { Blog } from '@/models/Blog';

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const { qid } = body;

    let blog = null;

    if (qid) {
      // Find the specific blog
      blog = await Blog.findById(qid);
    } else {
      // If no qid is passed, get the most recent blog
      blog = await Blog.findOne({ isDeleted: false, isDraft: false }).sort({ date: -1 });
    }

    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog not found' }, { status: 404 });
    }

    // Fetch up to 3 related blogs (blogs other than the current one)
    const relatedBlogs = await Blog.find({ 
      _id: { $ne: blog._id },
      isDeleted: false, 
      isDraft: false 
    }).limit(3);

    return NextResponse.json({ 
      success: true, 
      data: blog,
      relatedBlogs: relatedBlogs
    });
    
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
