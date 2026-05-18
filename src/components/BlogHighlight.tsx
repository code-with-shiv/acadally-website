"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "motion/react";
import Image from "next/image";

type BlogItem = {
    _id: string;
    title: string;
    excerpt?: string;
    date?: string;
    coverImage?: string;
};

export default function BlogHighlight() {
    const router = useRouter();
    const [blog, setBlog] = useState<BlogItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchLatestBlog = async () => {
            try {
                const res = await fetch('/api/blogs');
                const data = await res.json();
                if (data.success && Array.isArray(data.data) && data.data.length > 0) {
                    setBlog(data.data[0]);
                } else {
                    setError(true);
                }
            } catch (error) {
                console.error('Failed to load blog highlight', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchLatestBlog();
    }, []);

    useEffect(() => {
        if (!error) return;
        const timeout = setTimeout(() => {
            router.push('/');
        }, 5000);
        return () => clearTimeout(timeout);
    }, [error, router]);

    if (loading) {
        return (
            <section className="bg-transparent">
                <div className="mx-auto md:px-8">
                    <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-[#1C4CC3]/40 bg-white shadow-[0_0_50px_rgba(28,76,195,0.15)]">
                        {/* Image Shimmer */}
                        <div className="lg:w-1/2 h-[220px] lg:h-[290px] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
                        
                        {/* Content Shimmer */}
                        <div className="lg:w-1/2 p-5 md:p-8 flex flex-col">
                            {/* Label */}
                            <div className="hidden md:block h-6 w-32 rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 mb-4 animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
                            
                            {/* Title */}
                            <div className="h-10 w-full rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 mb-4 animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
                            
                            {/* Paragraph Lines */}
                            <div className="space-y-3 mb-6">
                                <div className="h-4 w-full rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
                                <div className="h-4 w-5/6 rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
                            </div>
                            
                            {/* Meta Info */}
                            <div className="space-y-2 mb-6">
                                <div className="h-4 w-48 rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
                                <div className="h-4 w-40 rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
                            </div>
                        </div>
                    </div>
                    
                    <style jsx>{`
                        @keyframes shimmer {
                            0% { background-position: -200% 0; }
                            100% { background-position: 200% 0; }
                        }
                    `}</style>
                </div>
            </section>
        );
    }

    if (error || !blog) {
        return (
            <section className="min-h-[60vh] flex items-center justify-center bg-white px-6">
                <div className="max-w-xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1C4CC3] md:text-sm">Error</p>
                    <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                        We are unable to fetch the blogs at current moment.
                    </h2>
                    <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-500 md:text-base">
                        Redirecting you to the home page in a few seconds.
                    </p>
                    <div className="mx-auto mt-8 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-[#EBF2FF]">
                        <div className="h-full w-full rounded-full bg-[#1C4CC3]" style={{ animation: 'progress 5s linear forwards' }} />
                    </div>
                    <style jsx>{`
                        @keyframes progress {
                            0% { width: 0; }
                            100% { width: 100%; }
                        }
                    `}</style>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-transparent">
            <div className="mx-auto md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-[#1C4CC3]/40 shadow-[0_0_50px_rgba(28,76,195,0.15)] group"
                >
                    <div className="lg:w-1/2 relative min-h-[220px] lg:min-h-[290px] bg-gray-100 overflow-hidden">
                        {blog.coverImage ? (
                            <img
                                src={blog.coverImage}
                                alt={blog.title}
                                className="object-cover w-full h-full"
                            />
                        ) : null}
                    </div>

                    <div className="lg:w-1/2 flex flex-col bg-white">
                        <div className="p-5 md:p-8 flex-1 text-xs md:text-sm">
                            <p className="hidden md:block text-[#1C4CC3] font-bold mb-3 tracking-tight lg:text-[18px] lg:leading-[24px]">Read our latest blog</p>

                            <hr className="hidden md:block border-t border-[#EDEDED] mb-4" />

                            <h2 className="text-[20px] leading-[36px] font-semibold text-[#383838] md:text-[32px] md:leading-[36px] md:font-semibold md:text-[#383838] mb-3 tracking-tight">
                                {blog.title}
                            </h2>

                            <p className="text-gray-600 text-[12px] leading-[140%] font-normal md:text-sm md:font-medium md:leading-relaxed mb-4">
                                {blog.excerpt || 'Discover how personalized assessments help learners improve outcomes faster than one-size-fits-all testing methods.'}
                            </p>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                                        <Image
                                            src="/event-date-calendar-icon.svg"
                                            alt="Date"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                    <span className="text-[#535353] text-[14px] leading-[24px] font-normal md:text-gray-600 md:font-normal truncate">
                                        {blog.date ? new Date(blog.date).toLocaleDateString() : 'No date available'}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                                        <Image
                                            src="/clock.svg"
                                            alt="Read Time"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                    <span className="text-[#535353] text-[14px] leading-[24px] font-normal md:text-gray-600 md:font-normal">6 Min Read</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#1C4CC314] p-3 md:px-8 md:py-3 flex justify-end items-center border-t border-[#1C4CC3]/10 transition-colors duration-300 w-full mt-auto group-hover:bg-[#1C4CC3]">
                            <Link href={`/blog/${blog._id}`} className="flex items-center gap-2 text-[#1C4CC3] font-bold transition-all duration-300 text-xs md:text-sm group-hover:text-white">
                                Read More <FiArrowUpRight className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
