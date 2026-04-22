"use client";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "motion/react";

export default function BlogHighlight() {
    return (
        <section className="bg-transparent">
            <div className="mx-auto md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-[#1C4CC3]/40 shadow-[0_0_50px_rgba(28,76,195,0.15)] group">
                    <div className="lg:w-1/2 relative min-h-[220px] lg:min-h-[290px]">
                        <Image
                            src="/blog-main2.svg"
                            alt="Customised Assessments vs Standard Assessments"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="lg:w-1/2 flex flex-col bg-white">
                        <div className="p-5 md:p-8 flex-1 text-xs md:text-sm">
                            <p className="hidden md:block text-[#1C4CC3] font-bold mb-3 tracking-tight lg:text-[18px] lg:leading-[24px]">Read our latest blog</p>

                            <hr className="hidden md:block border-t border-[#EDEDED] mb-4" />

                            <h2 className="text-[20px] leading-[36px] font-semibold text-[#383838] md:text-[32px] md:leading-[36px] md:font-semibold md:text-[#383838] mb-3 tracking-tight">
                                Customised Assessments vs Standard Assessments
                            </h2>

                            <p className="text-gray-600 text-[12px] leading-[140%] font-normal md:text-sm md:font-medium md:leading-relaxed mb-4">
                                Discover how personalized assessments help learners improve outcomes faster than one-size-fits-all testing methods.
                            </p>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                                        <Image src="/event-date-calendar-icon.svg" alt="Date" width={14} height={14} />
                                    </div>
                                    <span className="text-[#535353] text-[14px] leading-[24px] font-normal md:text-gray-600 md:font-normal truncate">07 February, 2024</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                                        <Image src="/clock.svg" alt="Read Time" width={14} height={14} />
                                    </div>
                                    <span className="text-[#535353] text-[14px] leading-[24px] font-normal md:text-gray-600 md:font-normal">6 Min Read</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#1C4CC314] p-3 md:px-8 md:py-3 flex justify-end items-center border-t border-[#1C4CC3]/10 transition-colors duration-300 w-full mt-auto group-hover:bg-[#1C4CC3]">
                            <button className="flex items-center gap-2 text-[#1C4CC3] font-bold transition-all duration-300 text-xs md:text-sm group-hover:text-white">
                                Read More <FiArrowUpRight className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </button>
                        </div>

                    </div>

                </motion.div>
            </div>
        </section>
    );
}
