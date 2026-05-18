"use client";

import BlogsMain from "@/components/BlogsMain";
import BlogsContent from "../BlogsContent";
import Transform from "@/components/Transform";
import { useState, useEffect, use } from "react";
import DemoFormModal from "@/components/Main/DemoFormModal";

type BlogSection = {
    id: string;
    title: string;
    content: {
        subHeading: string;
        text: string;
    }[];
};

type BlogData = {
    _id: string;
    title: string;
    author: string;
    date: string;
    coverImage: string;
    excerpt: string;
    views: number;
    sections: BlogSection[];
};

export default function BlogDetail({ params }: { params: Promise<{ id: string }> | { id: string } }) {
    // In Next 15+, params is a Promise. We safely unwrap it using `use` if it's a promise, otherwise use directly.
    const resolvedParams = params instanceof Promise ? use(params) : params as { id: string };
    const id = resolvedParams.id;
    
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const [blog, setBlog] = useState<BlogData | null>(null);
    const [relatedBlogs, setRelatedBlogs] = useState<BlogData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch('/api/blog/single', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ qid: id })
                });
                
                const data = await res.json();
                
                if (data.success) {
                    setBlog(data.data);
                    setRelatedBlogs(data.relatedBlogs || []);
                }
            } catch (error) {
                console.error('Failed to fetch blog', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    return (
        <>
            <main className="min-h-screen bg-white">
                <div className="relative bg-white overflow-hidden lg:min-h-screen">
                    {/* Soft Background Glows */}
                    <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(28,76,195,0.45),_transparent_70%)] blur-[60px]" />
                        <div className="absolute top-[-15%] right-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(28,76,195,0.45),_transparent_70%)] blur-[60px]" />
                    </div>

                    <div className="relative z-10 flex flex-col px-4 py-2 lg:px-20 lg:py-5">
                        <BlogsMain blog={blog} />
                    </div>
                </div>
                <BlogsContent blog={blog} relatedBlogs={relatedBlogs} loading={loading} />
                <Transform onOpenDemo={() => setIsDemoModalOpen(true)} />
                <DemoFormModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
            </main>
        </>
    );
}
