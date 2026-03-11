"use client";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "motion/react";

export default function EventHighlight() {
    return (
        <section className="bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden border border-[#1C4CC3]/40 shadow-[0_0_50px_rgba(28,76,195,0.15)] group">
                    {/* ... (image section remains unchanged) */}
                    <div className="lg:w-1/2 relative min-h-[220px] lg:min-h-[290px]">
                        <Image
                            src="/educational-ai-summit-highlights.svg"
                            alt="EDU - AI Conference 2024"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 flex flex-col">
                        <div className="p-5 md:p-8 flex-1 text-xs md:text-sm">
                            {/* Latest Tag */}
                            <p className="text-[#1C4CC3] font-bold mb-3 tracking-tight">Read about our Latest event</p>

                            <hr className="border-t border-gray-100 mb-4" />

                            <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-3 tracking-tight">
                                EDU – AI Conference 2024
                            </h2>

                            <p className="text-gray-600 font-medium leading-relaxed mb-4">
                                <span className="text-[#1C4CC3] font-bold">AcadAlly</span>, in partnership with EDU - AI Conference 2024 Dehradun, Uttarakhand on 07 February 2024. This event delved into the fore...
                            </p>

                            {/* Details with Icons */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                                        <Image src="/event-location-pin-icon.svg" alt="Location" width={14} height={14} />
                                    </div>
                                    <span className="text-gray-600 font-semibold truncate">Dehradun, Uttarakhand</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                                        <Image src="/event-date-calendar-icon.svg" alt="Calendar" width={14} height={14} />
                                    </div>
                                    <span className="text-gray-600 font-semibold">07 February, 2024</span>
                                </div>
                            </div>
                        </div>

                        {/* Footer Section */}
                        <div className="bg-[#EBF2FF] p-3 md:px-8 md:py-3 flex justify-end items-center border-t border-[#1C4CC3]/10 group-hover:bg-[#1C4CC3] transition-colors duration-300 w-full mt-auto">
                            <button className="flex items-center gap-2 text-[#1C4CC3] font-bold group-hover:text-white transition-all duration-300 text-xs md:text-sm">
                                Read More <FiArrowUpRight className="text-base" />
                            </button>
                        </div>

                    </div>

                </motion.div>
            </div>
        </section>
    );
}
