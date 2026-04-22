"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "motion/react";
import { RadialText } from "./RadialText";

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
        image: "/events1.svg",
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
        <section className="bg-[#1C4CC3]/4 lg:px-20 lg:py-5 overflow-hidden">
            <div className="mx-auto flex flex-col gap-6 py-10 px-4 lg:my-6 lg:py-0 lg:px-0 lg:block lg:gap-0">
                {/* Header */}
                <motion.div
                    className="text-center mb-0 md:mb-8 lg:mb-12 flex flex-col items-center gap-4 lg:gap-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <RadialText as="h2" className="text-base font-medium leading-6 text-center lg:font-bold lg:text-4xl lg:leading-tight" text="Events & Success Stories" />
                    <p className="text-xs font-normal leading-[1.4] text-center text-gray-500 lg:text-lg lg:font-normal lg:leading-normal lg:mt-4">
                        Discover our journey through educational conferences and transformative learning experiences that shape the future of education
                    </p>
                </motion.div>

                {/* Event Cards Container */}
                <div
                    ref={scrollRef}
                    className={`flex ${itemsPerPage === 1 ? 'overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4' : 'overflow-hidden'} gap-6 md:gap-8 mb-0 lg:mb-12`}
                >
                    {eventsData.map((event, index) => {
                        const isVisible = itemsPerPage === 1 || (index >= currentIndex * itemsPerPage && index < (currentIndex + 1) * itemsPerPage);
                        if (!isVisible) return null;

                        return (
                            <motion.div
                                key={`${event.id}-${index}`}
                                className={`shrink-0 snap-center transition-all duration-500 ${itemsPerPage === 1 ? 'w-full' : itemsPerPage === 2 ? 'w-[calc(50%-16px)]' : 'w-[calc(33.33%-21.33px)]'
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
                <div className="flex flex-col gap-4 mt-0 lg:mt-16 lg:flex-row lg:justify-between lg:items-center lg:gap-6">
                    <div className="flex items-center justify-between lg:justify-start lg:gap-6">
                        <div className="flex items-center gap-3 lg:gap-6">
                            <span className="text-main-page-secondary font-bold text-sm min-w-[40px] lg:text-lg lg:min-w-[60px]">
                                {currentIndex + 1} <span className="text-[#535353]">of {totalPages}</span>
                            </span>
                            <div className="flex gap-2">
                                {Array.from({ length: totalPages }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToPage(index)}
                                        className={`h-2.5 rounded-full transition-all cursor-pointer ${index === currentIndex
                                            ? "w-8 bg-main-page-secondary"
                                            : "w-2.5 bg-[#B3B3B3]"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Arrows for mobile - shown next to dots */}
                        <div className="flex gap-3 lg:hidden">
                            <button
                                onClick={prevPage}
                                className="w-10 h-10 rounded-full border-2 border-main-page-secondary flex items-center justify-center text-main-page-secondary hover:bg-main-page-secondary transition-all cursor-pointer group"
                            >
                                <Image src="/slider-previous-button-icon.svg" alt="Previous" width={24} height={24} className="w-5 h-5 group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-transform" />
                            </button>
                            <button
                                onClick={nextPage}
                                className="w-10 h-10 rounded-full border-2 border-main-page-secondary flex items-center justify-center text-main-page-secondary hover:bg-main-page-secondary transition-all cursor-pointer group"
                            >
                                <Image src="/slider-next-button-icon.svg" alt="Next" width={24} height={24} className="w-5 h-5 group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* View all Events - Below on mobile, Right on desktop */}
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <Link href="/events" className="flex items-center justify-start gap-2 text-main-page-secondary font-bold text-sm lg:text-lg underline underline-offset-4 hover:opacity-80 transition-opacity whitespace-nowrap order-2 lg:order-1">
                            View all Events
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mb-0.5 w-4 h-4 lg:w-5 lg:h-5">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </Link>

                        {/* Arrows for Desktop - shown after View all link or at the end */}
                        <div className="hidden lg:flex gap-4 order-1 lg:order-2">
                            <button
                                onClick={prevPage}
                                className="w-14 h-14 rounded-full border-2 border-main-page-secondary flex items-center justify-center text-main-page-secondary hover:bg-main-page-secondary transition-all cursor-pointer group"
                            >
                                <Image src="/slider-previous-button-icon.svg" alt="Previous" width={24} height={24} className="group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-transform" />
                            </button>
                            <button
                                onClick={nextPage}
                                className="w-14 h-14 rounded-full border-2 border-main-page-secondary flex items-center justify-center text-main-page-secondary hover:bg-main-page-secondary transition-all cursor-pointer group"
                            >
                                <Image src="/slider-next-button-icon.svg" alt="Next" width={24} height={24} className="group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function EventCard({ event }: { event: EventType }) {
    return (
        <div
            className="bg-white rounded-[16px] overflow-hidden border border-[#1C4CC33D] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(28,76,195,0.08)] transition-all duration-300 flex flex-col h-full group"
        >
            {/* Image Section */}
            <div className="relative h-[136px] lg:h-auto lg:aspect-video w-full overflow-hidden cursor-pointer">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                    {event.type}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-[14px] leading-[1.4] lg:text-xl font-bold text-gray-800 mb-2">
                    {event.title}
                </h3>
                <p className="text-gray-500 text-[11px] lg:text-sm font-medium mb-4 line-clamp-2">
                    {event.description}
                </p>

                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                            <Image src="/event-location-pin-icon.svg" alt="Location" width={16} height={16} className="w-4 h-4" />
                        </div>
                        <span className="text-gray-600 text-[11px] lg:text-sm font-semibold truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                            <Image src="/event-date-calendar-icon.svg" alt="Calendar" width={16} height={16} className="w-4 h-4" />
                        </div>
                        <span className="text-gray-600 text-[11px] lg:text-sm font-semibold">{event.date}</span>
                    </div>
                </div>

                {/* Card Footer */}
                <Link
                    href="/events"
                    className="mt-auto py-3 bg-[#EBF2FF] -mx-4 -mb-4 px-4 border-t border-[#1C4CC3]/10 group-hover:bg-[#1C4CC3] transition-colors duration-300 flex items-center justify-between text-[#1C4CC3] font-bold text-sm group-hover:text-white"
                >
                    Read More 
                    <FiArrowUpRight className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}

