"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";

const studentTestimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "7th Grade Student",
        school: "Delhi Public School",
        quote: "AcadAlly.ai's personalized approach has transformed how I engage with mathematics. The 3D visualizations make complex concepts accessible.",
        rating: 5,
        videoThumbnail: "/Educators.svg"
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "7th Grade Student",
        school: "Delhi Public School",
        quote: "AcadAlly.ai's personalized approach has transformed how I engage with mathematics. The 3D visualizations make complex concepts accessible.",
        rating: 5,
        videoThumbnail: "/Educators.svg"
    },
    {
        id: 3,
        name: "Priya Sharma",
        role: "7th Grade Student",
        school: "Delhi Public School",
        quote: "AcadAlly.ai's personalized approach has transformed how I engage with mathematics. The 3D visualizations make complex concepts accessible.",
        rating: 5,
        videoThumbnail: "/Educators.svg"
    },
    {
        id: 4,
        name: "Priya Sharma",
        role: "7th Grade Student",
        school: "Delhi Public School",
        quote: "AcadAlly.ai's personalized approach has transformed how I engage with mathematics. The 3D visualizations make complex concepts accessible.",
        rating: 5,
        videoThumbnail: "/Educators.svg"
    },
];

export default function WhatStudentsLove() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalItems = studentTestimonials.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const nextItem = useCallback(() => {
        if (itemsPerPage === 1 && scrollRef.current) {
            const isLast = currentIndex === totalPages - 1;
            if (isLast) {
                scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: 'smooth' });
            }
        } else {
            setCurrentIndex((prev) => (prev + 1) % totalPages);
        }
    }, [itemsPerPage, totalPages, currentIndex]);

    const prevItem = useCallback(() => {
        if (itemsPerPage === 1 && scrollRef.current) {
            const isFirst = currentIndex === 0;
            if (isFirst) {
                scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: 'smooth' });
            }
        } else {
            setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
        }
    }, [itemsPerPage, totalPages, currentIndex]);

    // Auto-scroll every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextItem();
        }, 10000);
        return () => clearInterval(interval);
    }, [nextItem]);

    // Update currentIndex based on scroll position for mobile
    useEffect(() => {
        const handleScroll = () => {
            if (itemsPerPage === 1 && scrollRef.current) {
                const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
                if (index !== currentIndex) {
                    setCurrentIndex(index);
                }
            }
        };
        const el = scrollRef.current;
        if (el && itemsPerPage === 1) {
            el.addEventListener('scroll', handleScroll);
        }
        return () => el?.removeEventListener('scroll', handleScroll);
    }, [itemsPerPage, currentIndex]);

    // Reset index when items per page changes
    useEffect(() => {
        if (currentIndex !== 0) setCurrentIndex(0);
        if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    }, [itemsPerPage]);

    return (
        <div className="bg-[#FFF9F2] py-12 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        What Our <span className="text-[var(--orange-primary)]">Learners Love</span>
                    </h2>
                </motion.div>

                {/* Catalogue Container */}
                <div
                    ref={scrollRef}
                    className={`flex ${itemsPerPage === 1 ? 'overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4' : 'overflow-hidden'} gap-6 md:gap-8 mb-12 transition-all duration-500`}
                >
                    {studentTestimonials.map((item, index) => {
                        const isVisible = itemsPerPage === 1 || (index >= currentIndex * itemsPerPage && index < (currentIndex + 1) * itemsPerPage);

                        if (!isVisible) return null;

                        return (
                            <motion.div
                                key={`student-love-${item.id}-${index}`}
                                className={`flex-shrink-0 snap-center transition-all duration-500 ${itemsPerPage === 1 ? 'w-full' : itemsPerPage === 2 ? 'w-[calc(50%-12px)]' : 'w-[calc(33.33%-16px)]'
                                    }`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <TestimonialCard item={item} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Pagination and Arrows */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8 md:mt-16 px-4">
                    <div className="flex items-center gap-6">
                        <span className="text-[var(--orange-primary)] font-bold text-lg min-w-[60px]">
                            {currentIndex + 1} of {totalPages}
                        </span>
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2.5 rounded-full transition-all cursor-pointer ${index === currentIndex
                                        ? "w-8 bg-[var(--orange-primary)]"
                                        : "w-2.5 bg-[#FFE0B2]"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prevItem}
                            className="w-14 h-14 rounded-full border-2 border-[#FFE0B2] flex items-center justify-center text-[var(--orange-primary)] hover:border-[var(--orange-primary)] transition-all cursor-pointer group"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={nextItem}
                            className="w-14 h-14 rounded-full border-2 border-[#FFE0B2] flex items-center justify-center text-[var(--orange-primary)] hover:border-[var(--orange-primary)] transition-all cursor-pointer group"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform">
                                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TestimonialCard({ item }: {
    item: {
        rating: number;
        quote: string;
        name: string;
        role: string;
        school: string;
        videoThumbnail: string;
    }
}) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[color-mix(in_srgb,var(--orange-primary),transparent_92%)] flex flex-col h-full hover:shadow-lg transition-all border-b-4 border-b-transparent hover:border-b-[var(--orange-primary)]">
            {/* Video Thumbnail */}
            <div className="relative mb-6 rounded-xl overflow-hidden aspect-video group cursor-pointer">
                <Image
                    src={item.videoThumbnail}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--orange-primary),transparent_90%)] group-hover:bg-[color-mix(in_srgb,var(--orange-primary),transparent_95%)] transition-colors z-10" />

                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md border border-white/50 group-hover:scale-110 transition-transform shadow-xl">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1">
                            <path d="M8 5V19L19 12L8 5Z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Quote Icon */}
            <div className="mb-4 text-[var(--orange-primary)]">
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
                    <path d="M0 11.2353C0 4.14502 5.09453 0 10.3284 0V4.31373C7.42289 4.31373 5.45274 5.92157 5.45274 8.78431H10.3284V20H0V11.2353ZM17.6716 11.2353C17.6716 4.14502 22.7662 0 28 0V4.31373C25.0945 4.31373 23.1244 5.92157 23.1244 8.78431H28V20H17.6716V11.2353Z" fill="currentColor" />
                </svg>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < item.rating ? "#FFD700" : "#D1D9E6"}>
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                ))}
            </div>

            {/* Quote */}
            <p className="text-faded-text text-base leading-relaxed mb-8 flex-1 italic">
                &quot;{item.quote}&quot;
            </p>

            {/* Author */}
            <div className="pt-6 border-t border-[color-mix(in_srgb,var(--orange-primary),transparent_92%)]">
                <h4 className="font-bold text-[var(--orange-primary)] text-lg mb-0.5">{item.name}</h4>
                <p className="text-[var(--faded-text)] text-sm font-medium uppercase tracking-wider">
                    {item.role} <span className="mx-2 text-[#FFE0B2]">|</span> {item.school}
                </p>
            </div>
        </div>
    );
}
