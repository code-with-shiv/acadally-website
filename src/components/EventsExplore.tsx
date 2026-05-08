"use client";
import Image from "next/image";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";
import { eventsData } from "@/data/eventsData";
import Link from "next/link";
import { useState } from "react";


export default function EventsExplore() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(eventsData.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentEvents = eventsData.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            // Optional: scroll to top of section
            document.getElementById("events-grid")?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="events-grid" className="px-6 lg:px-20 py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-[16px] leading-[24px] font-semibold text-[#383838] md:text-4xl md:font-bold md:text-gray-800 text-center mb-8 md:mb-16 tracking-tight">
                    Explore More From Our Events
                </motion.h2>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentPage}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="col-span-full grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8"
                        >
                            {currentEvents.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                                    className="bg-white rounded-[8px] md:rounded-[16px] overflow-hidden border border-[#1C4CC33D] md:border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(28,76,195,0.08)] transition-all duration-300 flex flex-col group h-full"
                                >
                                    {/* Image Section */}
                                    <div className="relative h-[136px] md:h-60 w-full overflow-hidden">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover transition-transform duration-500"
                                        />
                                        {/* Badge */}
                                        {/* <div className="hidden md:block absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {event.type}
                                        </div> */}
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1 flex flex-col">
                                        <div className="p-2 md:p-6 flex-1 flex flex-col gap-3 md:gap-0">
                                            <h3 className="text-[12px] leading-[17px] font-semibold tracking-[-0.016em] md:text-xl md:font-semibold md:tracking-normal text-gray-800 md:mb-2 line-clamp-1">
                                                {event.title}
                                            </h3>
                                            <p className="text-gray-500 text-[10px] leading-[17px] tracking-[-0.016em] md:text-sm font-medium md:mb-6 line-clamp-2">
                                                {event.description}
                                            </p>

                                            <div className="space-y-2 md:mb-8">
                                                <div className="flex items-center gap-2 md:gap-3">
                                                    <div className="w-4 h-4 md:w-8 md:h-8 rounded-sm md:rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                                                        <Image src="/event-location-pin-icon.svg" alt="Location" width={16} height={16} className="w-2.5 h-2.5 md:w-4 md:h-4" />
                                                    </div>
                                                    <span className="text-gray-600 text-[10px] leading-[16px] font-normal md:text-sm md:font-semibold truncate">{event.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 md:gap-3">
                                                    <div className="w-4 h-4 md:w-8 md:h-8 rounded-sm md:rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                                                        <Image src="/event-date-calendar-icon.svg" alt="Calendar" width={16} height={16} className="w-2.5 h-2.5 md:w-4 md:h-4" />
                                                    </div>
                                                    <span className="text-gray-600 text-[10px] leading-[16px] font-normal md:text-sm md:font-semibold">{event.date}</span>
                                                </div>

                                            </div>
                                        </div>

                                        {/* Card Footer */}
                                        <Link 
                                            href={`/event?id=${event.id}`}
                                            className="hidden md:flex mt-auto py-4 bg-[#EBF2FF] px-6 border-t border-[#1C4CC3]/10 group-hover:bg-[#1C4CC3] transition-colors duration-300 items-center justify-between w-full text-[#1C4CC3] font-bold text-sm group-hover:text-white"
                                        >
                                            Read More <FiArrowUpRight className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-16 flex justify-center items-center gap-2">
                        {/* Previous Button */}
                        <button 
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${currentPage === 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-[#EBF2FF] text-[#1C4CC3] hover:bg-[#1C4CC3] hover:text-white"}`}
                        >
                            <FiChevronLeft size={20} />
                        </button>

                        {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 rounded-lg font-bold flex items-center justify-center transition-all ${
                                    currentPage === page 
                                        ? "border-2 border-[#1C4CC3] text-[#1C4CC3]" 
                                        : "bg-[#EBF2FF] text-gray-500 hover:bg-[#1C4CC3] hover:text-white"
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button 
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${currentPage === totalPages ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-[#1C4CC3] text-white hover:bg-[#1C4CC3]/90"}`}
                        >
                            <FiChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

