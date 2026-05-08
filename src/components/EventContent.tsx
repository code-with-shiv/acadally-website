"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { useState, useEffect, useRef, useCallback } from "react";
import { RadialText } from "./RadialText";

import { eventsData as allEventsData, EventType } from "@/data/eventsData";

export default function EventContent({ event }: { event: EventType }) {
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const galleryScrollRef = useRef<HTMLDivElement>(null);

    const [exploreIndex, setExploreIndex] = useState(0);
    const exploreScrollRef = useRef<HTMLDivElement>(null);
    
    const eventImages = event?.otherImages?.map((img, index) => ({
        src: img,
        alt: `${event.title} image ${index + 1}`
    })) || [];

    // Fallback if no images are present
    if (eventImages.length === 0) {
        eventImages.push({ src: "/Event1.svg", alt: "Event image" });
    }

    const relatedEvents = allEventsData.filter(e => e.id !== event.id);

    // Group images into sets of 6 (3 on top, 3 on bottom)
    const galleryItemsPerPage = 6;
    const galleryChunks = [];
    for (let i = 0; i < eventImages.length; i += galleryItemsPerPage) {
        galleryChunks.push(eventImages.slice(i, i + galleryItemsPerPage));
    }

    const totalGalleryPages = galleryChunks.length;
    const totalExplorePages = Math.ceil(relatedEvents.length / itemsPerPage);

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

    const nextGallery = useCallback(() => {
        if (galleryScrollRef.current) {
            const { scrollLeft, offsetWidth, scrollWidth } = galleryScrollRef.current;
            const isLast = Math.ceil(scrollLeft + offsetWidth) >= scrollWidth;
            if (isLast) {
                galleryScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                galleryScrollRef.current.scrollBy({ left: offsetWidth, behavior: 'smooth' });
            }
        }
    }, []);

    const prevGallery = useCallback(() => {
        if (galleryScrollRef.current) {
            const { scrollLeft, offsetWidth, scrollWidth } = galleryScrollRef.current;
            const isFirst = scrollLeft <= 0;
            if (isFirst) {
                galleryScrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
            } else {
                galleryScrollRef.current.scrollBy({ left: -offsetWidth, behavior: 'smooth' });
            }
        }
    }, []);

    const nextExplore = useCallback(() => {
        if (exploreScrollRef.current) {
            const { scrollLeft, offsetWidth, scrollWidth } = exploreScrollRef.current;
            const isLast = Math.ceil(scrollLeft + offsetWidth) >= scrollWidth;
            if (isLast) {
                exploreScrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                exploreScrollRef.current.scrollBy({ left: offsetWidth, behavior: 'smooth' });
            }
        }
    }, []);

    const prevExplore = useCallback(() => {
        if (exploreScrollRef.current) {
            const { scrollLeft, offsetWidth, scrollWidth } = exploreScrollRef.current;
            const isFirst = scrollLeft <= 0;
            if (isFirst) {
                exploreScrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
            } else {
                exploreScrollRef.current.scrollBy({ left: -offsetWidth, behavior: 'smooth' });
            }
        }
    }, []);

    // Auto-scroll gallery every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextGallery();
        }, 5000);
        return () => clearInterval(interval);
    }, [nextGallery]);

    // Update galleryIndex based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (galleryScrollRef.current) {
                const index = Math.round(galleryScrollRef.current.scrollLeft / galleryScrollRef.current.offsetWidth);
                if (index !== galleryIndex && index >= 0 && index < totalGalleryPages) {
                    setGalleryIndex(index);
                }
            }
        };
        const el = galleryScrollRef.current;
        if (el) el.addEventListener('scroll', handleScroll);
        return () => el?.removeEventListener('scroll', handleScroll);
    }, [galleryIndex, totalGalleryPages]);

    // Update exploreIndex based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (exploreScrollRef.current) {
                const index = Math.round(exploreScrollRef.current.scrollLeft / exploreScrollRef.current.offsetWidth);
                if (index !== exploreIndex && index >= 0 && index < totalExplorePages) {
                    setExploreIndex(index);
                }
            }
        };
        const el = exploreScrollRef.current;
        if (el) el.addEventListener('scroll', handleScroll);
        return () => el?.removeEventListener('scroll', handleScroll);
    }, [exploreIndex, totalExplorePages]);

    return (
        <section className="bg-white py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Text Content */}
                <div className="space-y-6 text-[#333333] mb-12 lg:mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[14px] lg:text-[18px] leading-[1.6] lg:leading-[1.8] font-light"
                    >
                        Education is changing fast, and with technology like the AI powered learning app for students, 
                        choosing between customised and standard evaluations is a big topic. Customised assessments, 
                        offered by platforms like AcadAlly, use the learning AI app for students to create tests that 
                        fit each student&apos;s needs, leading to better results.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[14px] lg:text-[18px] leading-[1.6] lg:leading-[1.8] font-light"
                    >
                        Standard assessments follow the same format for everyone. This blog compares both to show how 
                        the online learning app for students like AcadAlly makes a difference. Let’s explore which 
                        is better for students and why the online AI learning app is improving education.
                    </motion.p>
                </div>
                {/* Standardized Horizontal Side Scroll Gallery with 6 images (3x2 grid) per slide */}
                <div className="relative">
                    <div
                        ref={galleryScrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-12 scroll-smooth"
                    >
                        {galleryChunks.map((chunk, chunkIndex) => (
                            <motion.div
                                key={`chunk-${chunkIndex}`}
                                className="flex-shrink-0 w-full snap-start transition-all duration-500"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                                    {chunk.map((image, index) => (
                                        <div 
                                            key={`${image.src}-${index}`}
                                            className="relative aspect-[4/3] rounded-[16px] lg:rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-100"
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Gallery Navigation Controls */}
                    <div className="flex items-center justify-between mt-8">
                        <div className="flex items-center gap-3 lg:gap-6">
                            <span className="text-[#1C4CC3] font-bold text-sm min-w-[40px] lg:text-lg lg:min-w-[60px]">
                                {galleryIndex + 1} <span className="text-[#535353]">of {totalGalleryPages}</span>
                            </span>
                            <div className="flex gap-2">
                                {Array.from({ length: totalGalleryPages }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            if (galleryScrollRef.current) {
                                                galleryScrollRef.current.scrollTo({
                                                    left: index * galleryScrollRef.current.offsetWidth,
                                                    behavior: 'smooth'
                                                });
                                            }
                                        }}
                                        className={`h-2.5 rounded-full transition-all cursor-pointer ${index === galleryIndex
                                            ? "w-8 bg-[#1C4CC3]"
                                            : "w-2.5 bg-[#B3B3B3]"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={prevGallery}
                                className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-[#1C4CC3] flex items-center justify-center text-[#1C4CC3] hover:bg-[#1C4CC3] transition-all cursor-pointer group"
                            >
                                <Image src="/slider-previous-button-icon.svg" alt="Previous" width={24} height={24} className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-transform" />
                            </button>
                            <button
                                onClick={nextGallery}
                                className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-[#1C4CC3] flex items-center justify-center text-[#1C4CC3] hover:bg-[#1C4CC3] transition-all cursor-pointer group"
                            >
                                <Image src="/slider-next-button-icon.svg" alt="Next" width={24} height={24} className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Explore More Section */}
                <div className="mt-16 lg:mt-24 mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <RadialText as="h2" className="text-[24px] lg:text-[40px] leading-tight font-bold text-[#333333]" text="Explore More From Our Events" />
                    </motion.div>
                    
                    {/* Related Events Grid */}
                    {/* Standardized Horizontal Side Scroll for related events */}
                    <div className="relative">
                        <div
                            ref={exploreScrollRef}
                            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 lg:gap-8 mb-12 scroll-smooth"
                        >
                            {relatedEvents.map((relatedEvent, index) => (
                                <motion.div
                                    key={`${relatedEvent.id}-${index}`}
                                    className={`flex-shrink-0 snap-start transition-all duration-500 ${itemsPerPage === 1 ? 'w-full' : itemsPerPage === 2 ? 'w-[calc(50%-12px)]' : 'w-[calc(33.33%-21.33px)]'
                                        }`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <EventCard event={relatedEvent} />
                                </motion.div>
                            ))}
                        </div>

                        {/* Explore More Navigation Controls */}
                        <div className="flex items-center justify-between mt-8">
                            <div className="flex items-center gap-3 lg:gap-6">
                                <span className="text-[#1C4CC3] font-bold text-sm min-w-[40px] lg:text-lg lg:min-w-[60px]">
                                    {exploreIndex + 1} <span className="text-[#535353]">of {totalExplorePages}</span>
                                </span>
                                <div className="flex gap-2">
                                    {Array.from({ length: totalExplorePages }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                if (exploreScrollRef.current) {
                                                    exploreScrollRef.current.scrollTo({
                                                        left: index * exploreScrollRef.current.offsetWidth,
                                                        behavior: 'smooth'
                                                    });
                                                }
                                            }}
                                            className={`h-2.5 rounded-full transition-all cursor-pointer ${index === exploreIndex
                                                ? "w-8 bg-[#1C4CC3]"
                                                : "w-2.5 bg-[#B3B3B3]"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={prevExplore}
                                    className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-[#1C4CC3] flex items-center justify-center text-[#1C4CC3] hover:bg-[#1C4CC3] transition-all cursor-pointer group"
                                >
                                    <Image src="/slider-previous-button-icon.svg" alt="Previous" width={24} height={24} className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-transform" />
                                </button>
                                <button
                                    onClick={nextExplore}
                                    className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-[#1C4CC3] flex items-center justify-center text-[#1C4CC3] hover:bg-[#1C4CC3] transition-all cursor-pointer group"
                                >
                                    <Image src="/slider-next-button-icon.svg" alt="Next" width={24} height={24} className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function EventCard({ event }: { event: any }) {
    return (
        <div className="bg-white rounded-[24px] overflow-hidden border border-[#1C4CC314] shadow-[0_10px_30px_rgba(28,76,195,0.05)] hover:shadow-[0_20px_50px_rgba(28,76,195,0.12)] transition-all duration-300 flex flex-col h-full group">
            {/* Image Section */}
            <div className="relative h-[200px] lg:h-[240px] w-full overflow-hidden">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Badge */}
                {/* <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 font-['Poppins']">
                    {event.type}
                </div> */}
            </div>

            {/* Content Section */}
            <div className="p-5 lg:p-6 flex-1 flex flex-col">
                <h3 className="text-[18px] lg:text-[20px] font-bold text-[#383838] mb-2 font-['Poppins']">
                    {event.title}
                </h3>
                <p className="text-gray-500 text-[12px] lg:text-[14px] font-medium mb-6 line-clamp-2 font-['Poppins']">
                    {event.description}
                </p>

                <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                            <Image src="/event-location-pin-icon.svg" alt="Location" width={16} height={16} />
                        </div>
                        <span className="text-gray-600 text-[13px] lg:text-[14px] font-medium font-['Poppins']">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                            <Image src="/event-date-calendar-icon.svg" alt="Calendar" width={16} height={16} />
                        </div>
                        <span className="text-gray-600 text-[13px] lg:text-[14px] font-medium font-['Poppins']">{event.date}</span>
                    </div>
                </div>

                {/* Footer Link */}
                <Link
                    href={`/event?id=${event.id}`}
                    className="mt-auto py-3 bg-[#1C4CC30D] -mx-5 lg:-mx-6 -mb-5 lg:-mb-6 px-5 lg:px-6 border-t border-[#1C4CC3]/10 group-hover:bg-[#1C4CC3] transition-colors duration-300 flex items-center justify-between text-[#1C4CC3] font-bold text-[14px] lg:text-[15px] group-hover:text-white font-['Poppins']"
                >
                    Read More
                    <FiArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
            </div>
        </div>
    );
}
