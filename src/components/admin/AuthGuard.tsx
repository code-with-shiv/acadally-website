"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuth(true);
    } else {
      router.push('/admin');
    }
  }, [router]);

  if (!isAuth) {
    return null; // or a spinner
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <nav className="w-full md:w-64 bg-white border-r border-gray-200 flex-shrink-0 min-h-screen p-4">
        <h2 className="text-xl font-bold mb-6 text-[#1C4CC3]">Admin Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <a href="/admin/dashboard" className="block px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium">Blogs</a>
          </li>
          <li>
            <a href="/admin/blogs/new" className="block px-4 py-2 rounded hover:bg-gray-100 text-gray-700 font-medium">Create New</a>
          </li>
          <li>
            <button 
              onClick={() => {
                localStorage.removeItem('admin_auth');
                router.push('/admin');
              }} 
              className="w-full text-left px-4 py-2 rounded hover:bg-red-50 text-red-600 font-medium mt-8"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
      
      <main className="flex-1 p-6 md:p-10">
        {children}
      </main>
    </div>
  );
}
