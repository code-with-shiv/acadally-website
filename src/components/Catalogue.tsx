"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";

const catalogueItems = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Math Teacher",
        school: "Delhi Public School",
        quote: "AcadAlly's personalized approach has transformed how my students engage with mathematics. The 3D visualizations make complex concepts accessible.",
        rating: 5,
        videoThumbnail: "/Educators.svg"
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "Math Teacher",
        school: "Delhi Public School",
        quote: "AcadAlly's personalized approach has transformed how my students engage with mathematics. The 3D visualizations make complex concepts accessible.",
        rating: 5,
        videoThumbnail: "/Educators.svg"
    },
    {
        id: 3,
        name: "Priya Sharma",
        role: "Math Teacher",
        school: "Delhi Public School",
        quote: "AcadAlly's personalized approach has transformed how my students engage with mathematics. The 3D visualizations make complex concepts accessible.",
        rating: 5,
        videoThumbnail: "/Educators.svg"
    },
    {
        id: 4,
        name: "Priya Sharma",
        role: "Math Teacher",
        school: "Delhi Public School",
        quote: "AcadAlly's personalized approach has transformed how my students engage with mathematics. The 3D visualizations make complex concepts accessible.",
        rating: 5,
        videoThumbnail: "/Educators.svg"
    },
];

export default function Catalogue() {
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

    const totalItems = catalogueItems.length;
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
        <div className="bg-[#F5F3FF] px-6 py-12 lg:px-20 lg:py-14">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-[24px] md:text-[40px] font-medium md:font-medium text-center mb-3 leading-[120%] md:leading-[36px]">
                        What Our <span className="text-[var(--purple-primary)] font-semibold md:font-bold">Teachers Love</span>
                    </h2>
                </motion.div>

                {/* Catalogue Container */}
                <div
                    ref={scrollRef}
                    className={`flex ${itemsPerPage === 1 ? 'overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4' : 'overflow-hidden'} gap-6 md:gap-8 mb-0 lg:mb-12 transition-all duration-500`}
                >
                    {catalogueItems.map((item, index) => {
                        const isVisible = itemsPerPage === 1 || (index >= currentIndex * itemsPerPage && index < (currentIndex + 1) * itemsPerPage);

                        if (!isVisible) return null;

                        return (
                            <motion.div
                                key={`catalogue-${item.id}-${index}`}
                                className={`shrink-0 snap-center transition-all duration-500 ${itemsPerPage === 1 ? 'w-full' : itemsPerPage === 2 ? 'w-[calc(50%-16px)]' : 'w-[calc(33.33%-21.33px)]'
                                    }`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <CatalogueCard item={item} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Pagination and Arrows */}
                <div className="flex items-center justify-between mt-0 lg:mt-16">
                    <div className="flex items-center gap-3 lg:gap-6">
                        <span className="text-[var(--purple-primary)] font-bold text-sm min-w-[40px] lg:text-lg lg:min-w-[60px]">
                            {currentIndex + 1} <span className="text-[#535353]">of {totalPages}</span>
                        </span>
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        if (itemsPerPage === 1 && scrollRef.current) {
                                            scrollRef.current.scrollTo({
                                                left: index * scrollRef.current.offsetWidth,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                    className={`h-2.5 rounded-full transition-all cursor-pointer ${index === currentIndex
                                        ? "w-8 bg-[var(--purple-primary)]"
                                        : "w-2.5 bg-[#E9E7F6]"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={prevItem}
                            className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-[var(--purple-primary)] flex items-center justify-center text-[var(--purple-primary)] hover:bg-[var(--purple-primary)] transition-all cursor-pointer group"
                        >
                            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[var(--purple-primary)] group-hover:bg-white group-hover:scale-110 transition-transform" style={{ maskImage: "url('/slider-previous-button-icon.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/slider-previous-button-icon.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                        </button>
                        <button
                            onClick={nextItem}
                            className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-[var(--purple-primary)] flex items-center justify-center text-[var(--purple-primary)] hover:bg-[var(--purple-primary)] transition-all cursor-pointer group"
                        >
                            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[var(--purple-primary)] group-hover:bg-white group-hover:scale-110 transition-transform" style={{ maskImage: "url('/slider-next-button-icon.svg')", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url('/slider-next-button-icon.svg')", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CatalogueCard({ item }: {
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
        <div
            className="bg-white rounded-2xl p-4 border-[0.5px] border-[#E9E7F6] flex flex-col h-full transition-all duration-300 hover:border-[var(--purple-primary)]/20 lg:rounded-xl lg:border lg:border-[#F5F3FF]"
            style={{
                boxShadow: "none"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 30px -10px rgba(57, 48, 145, 0.12)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            {/* Video Thumbnail */}
            <div className="relative mb-4 rounded-[12px] overflow-hidden h-[120px] lg:h-auto lg:aspect-video lg:rounded-lg group cursor-pointer">
                <Image
                    src={item.videoThumbnail}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--purple-primary),transparent_90%)] group-hover:bg-[color-mix(in_srgb,var(--purple-primary),transparent_95%)] transition-colors z-10" />

                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md border border-white/50 group-hover:scale-110 transition-transform shadow-xl">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-0.5">
                            <path d="M8 5V19L19 12L8 5Z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Quote Icon */}
            <div className="mb-3">
                <svg
                    viewBox="0 0 28 20"
                    fill="none"
                    className="text-[var(--purple-primary)] rotate-180 w-8 h-8 lg:w-6 lg:h-5"
                >
                    <path
                        d="M0 11.2353C0 4.14502 5.09453 0 10.3284 0V4.31373C7.42289 4.31373 5.45274 5.92157 5.45274 8.78431H10.3284V20H0V11.2353ZM17.6716 11.2353C17.6716 4.14502 22.7662 0 28 0V4.31373C25.0945 4.31373 23.1244 5.92157 23.1244 8.78431H28V20H17.6716V11.2353Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < item.rating ? "#FFD700" : "#D1D9E6"}>
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                ))}
            </div>

            {/* Quote */}
            <p className="text-faded-text text-[12px] font-normal leading-4 mb-3 flex-1 lg:text-[11px] lg:leading-normal">
                &quot;{item.quote}&quot;
            </p>

            {/* Author */}
            <div className="pt-3 border-t border-[var(--purple-primary)]/10 mt-auto">
                <h3 className="font-bold text-[var(--purple-primary)] text-[14px] leading-5 mb-0.5">{item.name}</h3>
                <p className="text-faded-text text-[11px] font-medium">
                    {item.role} <span className="mx-1.5 text-[#D1D9E6]">|</span> {item.school}
                </p>
            </div>
        </div>
    );
}
