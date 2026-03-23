import AuthGuard from '@/components/admin/AuthGuard';
import BlogEditor from '@/components/admin/BlogEditor';

export default function NewBlogPage() {
  return (
    <AuthGuard>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Create New Blog</h1>
      </div>
      <BlogEditor />
    </AuthGuard>
  );
}
