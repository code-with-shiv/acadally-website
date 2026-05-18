"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "motion/react";
import Image from "next/image";

type BlogItem = {
    _id: string;
    title: string;
    excerpt?: string;
    author?: string;
    date?: string;
    coverImage?: string;
    sections?: Array<{
        id: string;
        title: string;
        content: Array<{
            subHeading: string;
            text: string;
            _id: string;
        }>;
        _id: string;
    }>;
};
function CleanHtml({
  html,
  words,
}: {
  html: string;
  words?: number;
}) {
  const cleanedHtml = html
    .replace(/&nbsp;/g, " ")
    .replace(/<p[^>]*>\s*<\/p>/g, "");

  // Create plain text version for word limiting
  const plainText = cleanedHtml
    .replace(/<[^>]+>/g, "") // remove HTML tags
    .replace(/\s+/g, " ") // normalize spaces
    .trim();

  if (words !== undefined) {
    const wordsArray = plainText.split(" ");

    if (wordsArray.length > words) {
      return <div>{wordsArray.slice(0, words).join(" ")}...</div>;
    }
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: cleanedHtml }}
    />
  );
}

export default function BlogsExplore() {
    const router = useRouter();
    const [blogs, setBlogs] = useState<BlogItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch('/api/blogs');
                const data = await res.json();
                if (data.success && Array.isArray(data.data) && data.data.length > 0) {
                    setBlogs(data.data);
                } else {
                    setError(true);
                }
            } catch (error) {
                console.error('Failed to load blogs', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    useEffect(() => {
        if (!error) return;
        const timeout = setTimeout(() => {
            router.push('/');
        }, 5000);
        return () => clearTimeout(timeout);
    }, [error, router]);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const visibleBlogs = blogs.slice(startIndex, endIndex);

    if (loading) {
        return (
            <section className="px-6 lg:px-20 py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="h-10 md:h-12 w-2/3 mx-auto rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 mb-12 md:mb-16 animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
                    
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="bg-white rounded-[8px] md:rounded-[16px] overflow-hidden border border-[#1C4CC33D] md:border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                                {/* Image Shimmer */}
                                <div className="h-[136px] md:h-60 w-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
                                
                                {/* Content Shimmer */}
                                <div className="p-2 md:p-6 flex-1 flex flex-col gap-3 md:gap-0">
                                    {/* Title */}
                                    <div className="h-6 w-full rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 mb-2 animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
                                    
                                    {/* Description */}
                                    <div className="space-y-2 mb-6">
                                        <div className="h-4 w-full rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
                                        <div className="h-4 w-4/5 rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
                                    </div>
                                    
                                    {/* Meta Info */}
                                    <div className="space-y-2 md:mb-8">
                                        <div className="h-4 w-48 rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
                                        <div className="h-4 w-40 rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 2s infinite' }} />
                                    </div>
                                </div>
                            </div>
                        ))}
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

    if (error) {
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
        <section className="px-6 lg:px-20 py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-[16px] leading-[24px] font-semibold text-[#383838] md:text-4xl md:font-bold md:text-gray-800 text-center mb-8 md:mb-16 tracking-tight"
                >
                    Explore More From Our Blogs
                </motion.h2>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                        {visibleBlogs.map((blog, index) => (
                            <motion.div
                                key={blog._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                                className="bg-white rounded-[8px] md:rounded-[16px] overflow-hidden border border-[#1C4CC33D] md:border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(28,76,195,0.08)] transition-all duration-300 flex flex-col group"
                            >
                                <div className="relative h-[136px] md:h-60 w-full overflow-hidden bg-gray-100">
                                    {blog.coverImage ? (
                                        <img
                                            src={blog.coverImage}
                                            alt={blog.title}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : null}
                                </div>

                                <div className="p-2 md:p-6 flex-1 flex flex-col gap-3 md:gap-0">
                                    <h3 className="text-[12px] leading-[24px] font-semibold  md:text-xl md:font-semibold md:tracking-normal text-gray-800 md:mb-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-500 text-[10px] leading-[17px]  md:text-sm font-medium md:mb-6">
                                        {CleanHtml({ html: blog.sections?.[0]?.content?.[0]?.text || 'Read the latest insights from AcadAlly on personalized learning and education.', words: 20 })}
                                    </p>

                                    <div className="space-y-2 md:mb-8">
                                        {/* <div className="flex items-center gap-2 md:gap-3">
                                            <div className="w-4 h-4 md:w-8 md:h-8 rounded-sm md:rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                                                <Image
                                                    src="/event-location-pin-icon.svg"
                                                    alt="Location"
                                                    width={16}
                                                    height={16}
                                                />
                                            </div>
                                            <span className="text-gray-600 text-[10px] leading-[16px] font-normal md:text-sm md:font-semibold truncate">
                                                {blog.author || 'AcadAlly Insights'}
                                            </span>
                                        </div> */}
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <div className="w-4 h-4 md:w-8 md:h-8 rounded-sm md:rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                                                <Image
                                                    src="/event-date-calendar-icon.svg"
                                                    alt="Date"
                                                    width={16}
                                                    height={16}
                                                />

                                            </div>
                                            <span className="text-gray-600 text-[10px] leading-[16px] font-normal md:text-sm md:font-semibold">
                                                {blog.date ? new Date(blog.date).toLocaleDateString() : 'Unpublished'}
                                            </span>
                                        </div>
                                    </div>

                    <div className="hidden md:block mt-auto py-4 bg-[#EBF2FF] -mx-6 -mb-6 px-6 border-t border-[#1C4CC3]/10 group-hover:bg-[#1C4CC3] transition-colors duration-300">
                                        <Link href={`/blog/${blog._id}`} className="flex items-center justify-between w-full text-[#1C4CC3] font-bold text-sm group-hover:text-white transition-colors duration-300">
                                            Read More <FiArrowUpRight className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                <div className="mt-16 flex justify-center items-center gap-2">
                    <button 
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="w-10 h-10 rounded-lg bg-[#EBF2FF] flex items-center justify-center text-[#1C4CC3] hover:bg-[#1C4CC3] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FiChevronLeft size={20} />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-colors ${
                                currentPage === page
                                    ? 'border-2 border-[#1C4CC3] text-[#1C4CC3] bg-white'
                                    : 'bg-[#EBF2FF] text-[#1C4CC3] hover:bg-[#1C4CC3] hover:text-white'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button 
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 rounded-lg bg-[#1C4CC3] flex items-center justify-center text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FiChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
