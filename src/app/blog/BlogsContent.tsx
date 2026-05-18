"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronDown, FiArrowUpRight } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import DOMPurify from "dompurify";

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

type BlogsContentProps = {
    blog: BlogPage | null;
    relatedBlogs: BlogPage[];
    loading: boolean;
};

export default function BlogsContent({ blog, relatedBlogs, loading }: BlogsContentProps) {
    const [activeSection, setActiveSection] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (!blog || !blog.sections || blog.sections.length === 0) return;
        setActiveSection(blog.sections[0].id);
    }, [blog]);

    useEffect(() => {
        if (!blog || !blog.sections) return;

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        observer.current = new IntersectionObserver(handleIntersect, {
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        });

        blog.sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.current?.observe(el);
        });

        return () => observer.current?.disconnect();
    }, [blog]);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const tocSections = useMemo(() => blog?.sections ?? [], [blog]);

    if (loading) {
        return <div className="py-20 text-center text-gray-500 font-bold">Loading blog content...</div>;
    }

    if (!blog) {
        return <div className="py-20 text-center text-gray-500 font-bold">No blog content available.</div>;
    }

    return (
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-32 py-10 lg:pb-20">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#1C4CC3] rounded-full flex items-center justify-center p-1.5 lg:p-2 shadow-md">
                    <Image src="/acadally-favicon-logo.svg" alt="AcadAlly Logo" width={24} height={24} className="w-full h-full brightness-0 invert" />
                </div>
                <span className="text-[16px] lg:text-[20px] font-bold text-[#1C4CC3] font-['Poppins']">
                    By {blog.author || "AcadAlly"}
                </span>
            </div>


            

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                <div className="flex-1 lg:order-first">
                    <div className="w-full h-[1px] bg-gray-200 mb-8 lg:mb-12 hidden lg:block" />

                    <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-sm py-4 -mx-6 px-6 mb-8 border-b border-gray-100 mt-4">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-between px-6 py-4 bg-[#F0F5FF] text-[#1C4CC3] rounded-[12px] font-bold text-[16px] shadow-sm border border-[#1C4CC31A] cursor-pointer"
                        >
                            <span>{tocSections.find((section) => section.id === activeSection)?.title || "Table of Contents"}</span>
                            <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                <FiChevronDown size={24} />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-[12px] shadow-xl z-30 overflow-hidden"
                                >
                                    {tocSections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => {
                                                scrollToSection(section.id);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-6 py-4 transition-colors font-medium text-[16px] cursor-pointer ${activeSection === section.id ? "bg-[#F0F5FF] text-[#1C4CC3]" : "text-gray-500 hover:bg-gray-50"
                                                }`}
                                        >
                                            {section.title}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="space-y-6 lg:space-y-8">
                        {blog.sections.map((section) => (
                            <div key={section.id} id={section.id} className="scroll-mt-28 lg:scroll-mt-32">
                                <div className="space-y-6 lg:space-y-8">
                                    {section.content.map((item, index) => (
                                        <motion.div
                                            key={`${section.id}-${index}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="flex flex-col gap-3 lg:gap-4"
                                        >
                                            {item.subHeading && (
                                                <h2 className="text-[20px] lg:text-[24px] font-bold text-[#333333] lg:text-[#535353] font-['Poppins'] leading-tight lg:leading-[30px]">
                                                    {item.subHeading}
                                                </h2>
                                            )}
                                            <div
                                                className="font-['Poppins'] text-[16px] leading-[1.8] text-gray-500 lg:text-[#949494] font-normal"
                                                style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                                            >
                                                <div
                                                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.text) }}
                                                    className="blog-content"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 lg:mt-20 pt-8 lg:pt-10 border-t border-gray-100 flex gap-6 lg:gap-6">
                        <SocialLink href="#" icon={<FaLinkedinIn className="text-[14px] lg:text-[22px]" />} />
                        <SocialLink href="#" icon={<FaInstagram className="text-[14px] lg:text-[22px]" />} />
                        <SocialLink href="#" icon={<FaFacebookF className="text-[14px] lg:text-[22px]" />} />
                        <SocialLink href="#" icon={<FaYoutube className="text-[14px] lg:text-[22px]" />} />
                    </div>
                </div>

                <div className="hidden lg:flex flex-col gap-10 w-1/3 sticky top-24 self-start">
                    <div>
                        <h3 className="text-[20px] font-bold text-[#535353] font-['Poppins'] mb-8 leading-[26px] tracking-[-0.016em]">Table of Contents</h3>
                        <div className="flex flex-col">
                            {tocSections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`relative flex items-center py-3 px-6 text-left transition-all duration-300 border-l-2 cursor-pointer ${activeSection === section.id ? "border-[#1C4CC3] text-[#1C4CC3]" : "border-transparent text-[#848484] hover:text-gray-600"
                                        }`}
                                >
                                    <span className={`text-[14px] leading-[20px] font-['Poppins'] transition-all duration-300 ${activeSection === section.id ? "font-bold" : "font-medium"}`}>
                                        {section.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 lg:mt-24">
                <h3 className="text-[20px] lg:text-[32px] font-bold text-[#383838] mb-8 lg:mb-12 font-['Poppins']">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {relatedBlogs.length === 0 ? (
                        <div className="col-span-full text-center text-gray-500">No related blogs found.</div>
                    ) : (
                        relatedBlogs.map((relatedBlog) => (
                            <motion.div
                                key={relatedBlog._id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-[#F8FAFF] rounded-[14px] p-4 lg:p-3 border border-gray-100 flex flex-col gap-3 lg:gap-4 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                                <div className="flex gap-3 lg:gap-4">
                                    <div className="w-[100px] h-[70px] lg:w-[120px] lg:h-[85px] rounded-[12px] overflow-hidden shrink-0 relative">
                                        {relatedBlog.coverImage ? (
                                            <img src={relatedBlog.coverImage} alt={relatedBlog.title} className="object-cover w-full h-full" />
                                        ) : null}
                                    </div>
                                    <h3 className="text-[13px] lg:text-[15px] font-bold text-[#383838] leading-[1.3] font-['Poppins'] line-clamp-3">
                                        {relatedBlog.title}
                                    </h3>
                                </div>
                                <p className="text-[#5A5A5A] text-[11px] lg:text-[13px] leading-relaxed font-['Poppins'] line-clamp-2">
                                    {relatedBlog.excerpt || 'Explore this featured story from AcadAlly.'}
                                </p>
                                <div className="mt-auto flex justify-end">
                                    <Link href={`/blog?id=${relatedBlog._id}`} className="flex items-center gap-1.5 text-[#1C4CC3] font-bold text-[13px] lg:text-[15px] group-hover:underline">
                                        Read Article <FiArrowUpRight className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>

            <style jsx global>{`
                .blog-content p {
                    display: block;
                    margin-bottom: 1rem;
                }
                .blog-content br {
                    display: block;
                    content: "";
                    margin-bottom: 0.5rem;
                }
                .blog-content strong, .blog-content b {
                    font-weight: 700;
                    color: #535353;
                }
                .blog-content a {
                    color: #1C4CC3;
                    text-decoration: underline;
                }
                .blog-content ul, .blog-content ol {
                    padding-left: 1.5rem;
                    margin-bottom: 1rem;
                }
                .blog-content li {
                    margin-bottom: 0.4rem;
                }
            `}</style>
        </div>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 lg:w-[50px] lg:h-[50px] rounded-[8px] lg:rounded-[12px] bg-[#1C4CC333] lg:bg-[#1C4CC31A] flex items-center justify-center text-[#1C4CC3] hover:bg-[#1C4CC3] hover:text-white transition-all duration-300"
        >
            {icon}
        </a>
    );
}
