"use client";

import BlogsMain from "@/components/BlogsMain";
import BlogsContent from "./BlogsContent";
import Transform from "@/components/Transform";
import { useState, useEffect, Suspense } from "react";
import DemoFormModal from "@/components/Main/DemoFormModal";
import { useSearchParams } from "next/navigation";

type BlogSection = {
    id: string;
    title: string;
    content: {
        subHeading: string;
        text: string;
    }[];
};

type BlogPage = {
    _id: string;
    title: string;
    author: string;
    coverImage: string;
    excerpt: string;
    date: string;
    views: number;
    sections: BlogSection[];
};

function BlogContentWithParams() {
    const searchParams = useSearchParams();
    const qid = searchParams ? searchParams.get("id") : null;

    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const [blog, setBlog] = useState<BlogPage | null>(null);
    const [relatedBlogs, setRelatedBlogs] = useState<BlogPage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const res = await fetch('/api/blog/single', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ qid })
                });
                const data = await res.json();

                if (data.success) {
                    setBlog(data.data);
                    setRelatedBlogs(data.relatedBlogs || []);
                }
            } catch (error) {
                console.error('Failed to fetch blog content', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogData();
    }, [qid]);

    return (
        <main className="min-h-screen bg-white">
            <div className="relative bg-white overflow-hidden">
                <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(28,76,195,0.45),transparent_70%)] blur-[60px]" />
                    <div className="absolute top-[-15%] right-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(28,76,195,0.45),transparent_70%)] blur-[60px]" />
                </div>

                <div className="relative z-10 flex flex-col py-2 lg:py-10">
                    <BlogsMain blog={blog} />
                </div>
            </div>
            <BlogsContent blog={blog} relatedBlogs={relatedBlogs} loading={loading} />
            <Transform onOpenDemo={() => setIsDemoModalOpen(true)} />
            <DemoFormModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
        </main>
    );
}

export default function Blog() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <BlogContentWithParams />
        </Suspense>
    );
}