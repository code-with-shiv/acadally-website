"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function EventMain() {
    return (
        <div className="w-full py-10 lg:pt-16 lg:pb-0">
            <div className="max-w-7xl mx-auto px-0 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                {/* Left Content Area */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-0 lg:w-[55%] gap-6 lg:gap-[42px]">
                    {/* badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="py-2 px-4 lg:py-[8px] lg:px-[16px] rounded-full lg:rounded-[120px] bg-[#1C4CC31A] text-[#1C4CC3] inline-block font-medium text-[10px] leading-[20px] lg:font-semibold lg:text-[16px] lg:leading-[24px] lg:tracking-[0.04em]">
                        AcadAlly Event
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-semibold text-[20px] lg:text-[40px] leading-[30px] lg:leading-[1.2] text-[#1C4CC3] font-['Poppins']">
                        EDU - AI Conference 2024
                    </motion.h1>

                    {/* Meta Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center justify-center lg:justify-start gap-4 lg:gap-6 text-[#1C4CC3] font-['Poppins']"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px] bg-[#1C4CC31A] rounded-[5px] lg:rounded-[4px] flex items-center justify-center">
                                <Image
                                    src="/event-location-pin-icon.svg"
                                    alt="Location"
                                    width={24}
                                    height={24}
                                    className="w-[12px] h-[12px] lg:w-5 lg:h-5"
                                />
                            </div>
                            <span className="text-[14px] lg:text-[18px] font-medium leading-none lg:leading-[24px] lg:text-center flex items-center">
                                <span className="lg:hidden">Dehradun, Uttarakhand</span>
                                <span className="hidden lg:inline">Dehradun, Uttarakhand</span>
                            </span>
                        </div>

                        <div className="h-4 lg:h-8 w-[1.5px] bg-[#1C4CC34D]"></div>

                        <div className="flex items-center gap-2">
                            <div className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px] bg-[#1C4CC31A] rounded-[5px] lg:rounded-[4px] flex items-center justify-center">
                                <Image
                                    src="/event-date-calendar-icon.svg"
                                    alt="Date"
                                    width={24}
                                    height={24}
                                    className="w-[12px] h-[12px] lg:w-5 lg:h-5"
                                />
                            </div>
                            <span className="text-[14px] lg:text-[18px] font-medium leading-none lg:leading-[24px] lg:text-center flex items-center">
                                07 February, 2024
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Image Area */}
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-end px-0 lg:px-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-4/3 rounded-none lg:rounded-[24px] overflow-hidden lg:shadow-[0_20px_50px_rgba(28,76,195,0.15)] bg-gray-50"
                    >
                        <Image
                            src="/blogs-main.svg"
                            alt="Blog Main"
                            fill
                            className="object-cover transition-transform duration-700"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}