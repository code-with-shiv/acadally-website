"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { RadialText } from "./RadialText";
import BelowHeading from "./BelowHeading";

type EventType = {
    id: number;
    type: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
};

const eventsData: EventType[] = [
    {
        id: 1,
        type: "AI Summit",
        title: "EDU - AI Conference 2024",
        description: "Future of AI in education with leading experts.",
        location: "Dehradun, Uttarakhand",
        date: "07 February, 2024",
        image: "/Event1.svg",
    },
    {
        id: 2,
        type: "AI Exposition",
        title: "EducationWorld Learning Exposition 2023",
        description: "Innovative learning methodologies showcase.",
        location: "IIT, New Delhi",
        date: "16 December, 2023",
        image: "/Event2.svg",
    },
    {
        id: 3,
        type: "AI Summit",
        title: "EDU - AI Conference 2024",
        description: "Worldwide educators sharing teaching practices.",
        location: "Dehradun, Uttarakhand",
        date: "07 February, 2024",
        image: "/Event3.svg",
    },
    {
        id: 4,
        type: "AI Workshop",
        title: "AI Integration Workshop 2024",
        description: "Practical hands-on session on AI tools for classrooms.",
        location: "Mumbai, Maharashtra",
        date: "12 March, 2024",
        image: "/card4.svg",
    },
];

export default function Events() {
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

    const totalPages = Math.ceil(eventsData.length / itemsPerPage);

    const goToPage = useCallback((index: number) => {
        if (itemsPerPage === 1 && scrollRef.current) {
            scrollRef.current.scrollTo({
                left: index * scrollRef.current.offsetWidth,
                behavior: 'smooth'
            });
        } else {
            setCurrentIndex(index);
        }
    }, [itemsPerPage]);

    const nextPage = useCallback(() => {
        const nextIndex = (currentIndex + 1) % totalPages;
        if (itemsPerPage === 1 && scrollRef.current) {
            if (currentIndex === totalPages - 1) {
                scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: 'smooth' });
            }
        } else {
            setCurrentIndex(nextIndex);
        }
    }, [currentIndex, totalPages, itemsPerPage]);

    const prevPage = useCallback(() => {
        const prevIndex = (currentIndex - 1 + totalPages) % totalPages;
        if (itemsPerPage === 1 && scrollRef.current) {
            if (currentIndex === 0) {
                scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: 'smooth' });
            }
        } else {
            setCurrentIndex(prevIndex);
        }
    }, [currentIndex, totalPages, itemsPerPage]);

    // Auto-scroll every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextPage();
        }, 10000);
        return () => clearInterval(interval);
    }, [nextPage]);

    // Update currentIndex based on scroll position for mobile
    useEffect(() => {
        const handleScroll = () => {
            if (itemsPerPage === 1 && scrollRef.current) {
                const scrollPos = scrollRef.current.scrollLeft;
                const cardWidth = scrollRef.current.offsetWidth;
                if (cardWidth > 0) {
                    const index = Math.round(scrollPos / cardWidth);
                    if (index !== currentIndex && index >= 0 && index < totalPages) {
                        setCurrentIndex(index);
                    }
                }
            }
        };
        const el = scrollRef.current;
        if (el && itemsPerPage === 1) {
            el.addEventListener('scroll', handleScroll, { passive: true });
        }
        return () => el?.removeEventListener('scroll', handleScroll);
    }, [itemsPerPage, currentIndex, totalPages]);

    // Reset index when items per page changes (e.g., window resize)
    useEffect(() => {
        setCurrentIndex(0);
        if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    }, [itemsPerPage]);

    return (
        <div className="bg-white py-12 md:py-20 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <RadialText text="Events & Success Stories" />
                    <BelowHeading>
                        Discover our journey through educational conferences and transformative learning experiences that shape the future of education.
                    </BelowHeading>
                </motion.div>

                {/* Event Cards Container */}
                <div
                    ref={scrollRef}
                    className={`flex ${itemsPerPage === 1 ? 'overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 -mx-4 px-4' : 'overflow-hidden'} gap-6 md:gap-8 mb-8`}
                >
                    {eventsData.map((event, index) => {
                        const isVisible = itemsPerPage === 1 || (index >= currentIndex * itemsPerPage && index < (currentIndex + 1) * itemsPerPage);
                        if (!isVisible) return null;

                        return (
                            <motion.div
                                key={`${event.id}-${index}`}
                                className={`flex-shrink-0 snap-center transition-all duration-500 ${itemsPerPage === 1 ? 'w-full' : itemsPerPage === 2 ? 'w-[calc(50%-12px)]' : 'w-[calc(33.33%-16px)]'
                                    }`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <EventCard event={event} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Pagination and Arrows */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8 md:mt-16">
                    <div className="flex items-center gap-6">
                        <span className="text-[#1C4CC3] font-bold text-lg min-w-[60px]">
                            {currentIndex + 1} of {totalPages}
                        </span>
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToPage(index)}
                                    className={`h-2.5 rounded-full transition-all cursor-pointer ${index === currentIndex
                                        ? "w-8 bg-[#1C4CC3]"
                                        : "w-2.5 bg-[#D1D9E6]"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prevPage}
                            className="w-14 h-14 rounded-full border-2 border-[#D1D9E6] flex items-center justify-center text-[#1C4CC3] hover:border-[#1C4CC3] transition-all cursor-pointer group"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={nextPage}
                            className="w-14 h-14 rounded-full border-2 border-[#D1D9E6] flex items-center justify-center text-[#1C4CC3] hover:border-[#1C4CC3] transition-all cursor-pointer group"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function EventCard({ event }: { event: EventType }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-[#E9EFFD] shadow-sm hover:shadow-lg transition-all flex flex-col h-full h-full">
            {/* Event Image */}
            <div className="relative h-64 overflow-hidden group cursor-pointer">
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-lg text-sm font-semibold z-10 border border-white/20">
                    {event.type}
                </div>
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Event Content */}
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#1C4CC3] mb-2">
                    {event.title}
                </h3>
                <p className="text-gray-500 text-base mb-6 line-clamp-2">
                    {event.description}
                </p>

                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#EFF4FF] flex items-center justify-center flex-shrink-0 text-[#1C4CC3]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <span className="text-gray-600 font-medium">{event.location}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#EFF4FF] flex items-center justify-center flex-shrink-0 text-[#1C4CC3]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                        </div>
                        <span className="text-gray-600 font-medium">{event.date}</span>
                    </div>
                </div>

                {/* Read More bar */}
                <Link href="/events" className="mt-auto -mx-6 -mb-6 bg-[#EFF4FF] py-4 px-6 flex items-center justify-between text-[#1C4CC3] font-bold hover:bg-[#E0EAFF] transition-colors">
                    Read More
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

