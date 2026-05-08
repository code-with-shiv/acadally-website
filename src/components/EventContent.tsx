"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState, useEffect } from "react";

import { eventsData as allEventsData, EventType } from "@/data/eventsData";

export default function EventContent({ event }: { event: EventType }) {
    const [startIndex, setStartIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    
    const eventImages = event?.otherImages?.map((img, index) => ({
        src: img,
        alt: `${event.title} image ${index + 1}`
    })) || [];

    // Fallback if no images are present
    if (eventImages.length === 0) {
        eventImages.push({ src: "/Event1.svg", alt: "Event image" });
    }

    // Rotation logic
    useEffect(() => {
        const threshold = window.innerWidth < 1024 ? 4 : 6;
        if (eventImages.length <= threshold) return;
        
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev + threshold) % eventImages.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, [eventImages.length]);

    // Get visible images for desktop (6)
    const getVisibleDesktop = () => {
        const visible = [];
        const count = Math.min(6, eventImages.length);
        for (let i = 0; i < 6; i++) {
            // Fill 6 slots even if fewer images, but user said "dont show more than 6"
            // If we have fewer than 6, we just show what we have and don't rotate?
            // Actually, let's just make it exactly 6 as requested.
            visible.push(eventImages[(startIndex + i) % eventImages.length]);
        }
        return visible;
    };

    // Get visible images for mobile (1 big + 3 small)
    const getVisibleMobile = () => {
        const visible = [];
        for (let i = 0; i < 4; i++) {
            visible.push(eventImages[(startIndex + i) % eventImages.length]);
        }
        return visible;
    };

    const desktopVisible = getVisibleDesktop();
    const mobileVisible = getVisibleMobile();

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

                {/* Image Layout */}
                <div className="block lg:hidden">
                    {/* Mobile Specific Layout: 1 big + 3 small in a row */}
                    <div className="space-y-4">
                        <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-200">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${mobileVisible[0].src}-0`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={mobileVisible[0].src}
                                        alt={mobileVisible[0].alt}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {[1, 2, 3].map((slotIndex) => (
                                <div key={slotIndex} className="relative aspect-square rounded-[12px] overflow-hidden bg-gray-200">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`${mobileVisible[slotIndex].src}-${slotIndex}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.8 }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={mobileVisible[slotIndex].src}
                                                alt={mobileVisible[slotIndex].alt}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hidden lg:grid grid-cols-3 gap-6">
                    {/* Desktop Layout: Fixed 6 slots with individual rotation */}
                    {[0, 1, 2, 3, 4, 5].map((slotIndex) => (
                        <div 
                            key={slotIndex} 
                            className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-gray-100"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${desktopVisible[slotIndex].src}-${slotIndex}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={desktopVisible[slotIndex].src}
                                        alt={desktopVisible[slotIndex].alt}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    ))}
                </div>                {/* Explore More Section */}
                <div className="mt-16 lg:mt-24 mb-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center text-[24px] lg:text-[40px] leading-tight mb-12 font-['Poppins'] font-bold text-[#333333]"
                    >
                        <span className="text-[#1C4CC3]">Explore More</span> From Our Events
                    </motion.h2>
                    
                    {/* Related Events Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[450px]">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={currentPage}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                            >
                                {allEventsData
                                    .filter(e => e.id !== event.id)
                                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                                    .map((relatedEvent, index) => (
                                        <motion.div
                                            key={relatedEvent.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <EventCard event={relatedEvent} />
                                        </motion.div>
                                    ))
                                }
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    {Math.ceil((allEventsData.length - 1) / itemsPerPage) > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-12 lg:mt-16">
                            <button 
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                                    currentPage === 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-[#EBF2FF] text-[#1C4CC3] hover:bg-[#1C4CC3] hover:text-white"
                                }`}
                            >
                                <FiChevronLeft size={20} />
                            </button>
                            
                            {Array.from({ length: Math.ceil((allEventsData.length - 1) / itemsPerPage) }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-10 h-10 rounded-lg font-bold flex items-center justify-center transition-all cursor-pointer ${
                                        currentPage === i + 1 
                                            ? "border-2 border-[#1C4CC3] text-[#1C4CC3]" 
                                            : "bg-[#EBF2FF] text-[#535353] font-medium hover:bg-[#1C4CC3]/10"
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button 
                                onClick={() => setCurrentPage(prev => Math.min(Math.ceil((allEventsData.length - 1) / itemsPerPage), prev + 1))}
                                disabled={currentPage === Math.ceil((allEventsData.length - 1) / itemsPerPage)}
                                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                                    currentPage === Math.ceil((allEventsData.length - 1) / itemsPerPage) 
                                        ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                                        : "bg-[#1C4CC3] text-white"
                                }`}
                            >
                                <FiChevronRight size={20} />
                            </button>
                        </div>
                    )}
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
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 font-['Poppins']">
                    {event.type}
                </div>
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
