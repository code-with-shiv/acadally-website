"use client";
import Image from "next/image";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "motion/react";

const blogs = [
    {
        id: 1,
        title: "Customised Assessments vs Standard Assessments",
        description: "How personalization improves student outcomes at scale.",
        location: "AcadAlly Insights",
        date: "07 February, 2024",
        image: "/Event2.svg",
        badge: "Featured"
    },
    {
        id: 2,
        title: "AI in Classrooms: What Actually Works",
        description: "Practical applications educators can adopt today.",
        location: "AcadAlly Insights",
        date: "15 March, 2024",
        image: "/Event2.svg",
        badge: "Trending"
    },
    {
        id: 3,
        title: "Building Better Study Habits with AI",
        description: "Simple strategies for consistency and retention.",
        location: "AcadAlly Insights",
        date: "20 April, 2024",
        image: "/Event2.svg",
        badge: "Popular"
    },
    {
        id: 4,
        title: "Beyond Marks: Measuring Real Learning",
        description: "Rethinking assessment with actionable learning data.",
        location: "AcadAlly Insights",
        date: "28 April, 2024",
        image: "/Event2.svg",
        badge: "New"
    },
    {
        id: 5,
        title: "The Teacher + AI Collaboration Model",
        description: "How educators and AI tools can work together effectively.",
        location: "AcadAlly Insights",
        date: "05 May, 2024",
        image: "/Event2.svg",
        badge: "Editor Pick"
    },
    {
        id: 6,
        title: "Reducing Test Anxiety with Adaptive Prep",
        description: "A student-first approach to calmer exam readiness.",
        location: "AcadAlly Insights",
        date: "12 May, 2024",
        image: "/Event2.svg",
        badge: "Must Read"
    }
];

export default function BlogsExplore() {
    return (
        <section className="px-6 lg:px-20 py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-[16px] leading-[24px] font-semibold text-[#383838] md:text-4xl md:font-bold md:text-gray-800 text-center mb-8 md:mb-16 tracking-tight">
                    Explore More From Our Blogs
                </motion.h2>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                            className="bg-white rounded-[8px] md:rounded-[16px] overflow-hidden border border-[#1C4CC33D] md:border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(28,76,195,0.08)] transition-all duration-300 flex flex-col group"
                        >
                            {/* Image Section */}
                            <div className="relative h-[136px] md:h-60 w-full overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-500"
                                />
                                {/* Badge */}
                                <div className="hidden md:block absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {blog.badge}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-2 md:p-6 flex-1 flex flex-col gap-3 md:gap-0">
                                <h3 className="text-[12px] leading-[17px] font-semibold tracking-[-0.016em] md:text-xl md:font-semibold md:tracking-normal text-gray-800 md:mb-2">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-500 text-[10px] leading-[17px] tracking-[-0.016em] md:text-sm font-medium md:mb-6">
                                    {blog.description}
                                </p>

                                <div className="space-y-2 md:mb-8">
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div className="w-4 h-4 md:w-8 md:h-8 rounded-sm md:rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                                            <Image src="/event-location-pin-icon.svg" alt="Category" width={16} height={16} className="w-2.5 h-2.5 md:w-4 md:h-4" />
                                        </div>
                                        <span className="text-gray-600 text-[10px] leading-[16px] font-normal md:text-sm md:font-semibold truncate">{blog.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <div className="w-4 h-4 md:w-8 md:h-8 rounded-sm md:rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                                            <Image src="/event-date-calendar-icon.svg" alt="Date" width={16} height={16} className="w-2.5 h-2.5 md:w-4 md:h-4" />
                                        </div>
                                        <span className="text-gray-600 text-[10px] leading-[16px] font-normal md:text-sm md:font-semibold">{blog.date}</span>
                                    </div>

                                </div>

                                {/* Card Footer */}
                                <div className="hidden md:block mt-auto py-4 bg-[#EBF2FF] -mx-6 -mb-6 px-6 border-t border-[#1C4CC3]/10 group-hover:bg-[#1C4CC3] transition-colors duration-300">
                                    <button className="flex items-center justify-between w-full text-[#1C4CC3] font-bold text-sm group-hover:text-white transition-colors duration-300">
                                        Read More <FiArrowUpRight className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* Pagination */}
                <div className="mt-16 flex justify-center items-center gap-2">
                    {/* Previous Button */}
                    <button className="w-10 h-10 rounded-lg bg-[#EBF2FF] flex items-center justify-center text-[#1C4CC3] hover:bg-[#1C4CC3] hover:text-white transition-colors">
                        <FiChevronLeft size={20} />
                    </button>

                    {/* Page Numbers */}
                    <button className="w-10 h-10 rounded-lg border-2 border-[#1C4CC3] flex items-center justify-center text-[#1C4CC3] font-bold">
                        1
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-[#EBF2FF] flex items-center justify-center text-white font-bold hover:bg-[#1C4CC3] transition-colors">
                        2
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-[#EBF2FF] flex items-center justify-center text-white font-bold hover:bg-[#1C4CC3] transition-colors">
                        3
                    </button>

                    {/* Next Button */}
                    <button className="w-10 h-10 rounded-lg bg-[#1C4CC3] flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                        <FiChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
