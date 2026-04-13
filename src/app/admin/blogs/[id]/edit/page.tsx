"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import AuthGuard from '@/components/admin/AuthGuard';
import BlogEditor from '@/components/admin/BlogEditor';

export default function EditBlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setBlog(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  return (
    <AuthGuard>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Edit Blog</h1>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : blog ? (
        <BlogEditor initialData={blog} />
      ) : (
        <p>Blog not found</p>
      )}
    </AuthGuard>
  );
}
