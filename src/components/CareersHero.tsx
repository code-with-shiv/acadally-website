import React from "react";
import Link from "next/link";
import { FiBookOpen, FiClipboard, FiCpu, FiSearch, FiFileText } from "react-icons/fi";
import { MdOutlineScience } from "react-icons/md";
import { IoSparklesOutline } from "react-icons/io5";

export default function CareersHero() {
    return (
        <div className="relative px-6 py-2 lg:px-20 lg:py-5 flex flex-col items-center justify-center py-10 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-[#E6EFFF] via-white to-white w-full font-sans">
            {/* Background Floating Icons - Hidden on mobile, smaller on tablet, normal on desktop */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">
                {/* Top-left: Document with stars/sparkles */}
                <div className="absolute top-[5%] md:top-[10%] left-[5%] md:left-[18%] opacity-30 transform -rotate-12 bg-[#F8FAFC] p-3 md:p-4 rounded-2xl border border-[#E2E8F0] scale-75 lg:scale-100">
                    <div className="relative text-[#3b82f6]">
                        <FiFileText size={36} strokeWidth={1.5} />
                        <IoSparklesOutline className="absolute -top-2 -left-2 text-[#60a5fa]" size={16} />
                    </div>
                </div>

                {/* Mid-left: Open Book */}
                <div className="absolute top-[45%] left-[2%] md:left-[8%] opacity-30 transform -rotate-[15deg] bg-[#F8FAFC] p-4 md:p-5 rounded-2xl border border-[#E2E8F0] scale-75 lg:scale-100">
                    <FiBookOpen size={48} className="text-[#6366f1]" strokeWidth={1.5} />
                </div>

                {/* Bottom-left: Clipboard */}
                <div className="absolute bottom-[5%] md:bottom-[10%] left-[5%] md:left-[12%] opacity-30 transform rotate-12 bg-[#F8FAFC] p-3 md:p-4 rounded-2xl border border-[#E2E8F0] scale-75 lg:scale-100">
                    <FiClipboard size={40} className="text-[#3b82f6]" strokeWidth={1.5} />
                </div>

                {/* Top-right: CPU/Chip */}
                <div className="absolute top-[8%] md:top-[12%] right-[5%] md:right-[15%] opacity-30 transform rotate-[10deg] bg-[#F8FAFC] p-3 md:p-4 rounded-full border border-[#E2E8F0] scale-75 lg:scale-100">
                    <FiCpu size={40} className="text-[#94a3b8]" strokeWidth={1.5} />
                </div>

                {/* Mid-right: Search */}
                <div className="absolute top-[40%] right-[2%] md:right-[8%] opacity-30 transform rotate-[20deg] bg-[#F8FAFC] p-4 md:p-6 rounded-3xl border border-[#E2E8F0] scale-75 lg:scale-100">
                    <FiSearch size={42} className="text-[#818cf8]" strokeWidth={1.5} />
                </div>

                {/* Bottom-right: Flask/Science */}
                <div className="absolute bottom-[10%] md:bottom-[15%] right-[5%] md:right-[18%] opacity-30 transform -rotate-12 bg-[#F8FAFC] p-3 md:p-4 rounded-2xl border border-[#E2E8F0] scale-75 lg:scale-100">
                    <MdOutlineScience size={44} className="text-[#cbd5e1]" />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-5xl px-4 sm:px-6 md:px-8 text-center">

                {/* Top Pill */}
                <div className="bg-[#EEF2FF] text-[#1C4CC3] font-semibold text-xs sm:text-sm md:text-base px-5 md:px-6 py-2 rounded-full mb-6 md:mb-8 tracking-wide shadow-sm border border-[#E0E7FF] whitespace-nowrap">
                    Join the Team Behind AcadAlly
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-6xl font-extrabold text-[#2D2D2D] mb-4 md:mb-6 tracking-tight leading-tight px-2">
                    Careers at <span className="text-[#1C4CC3]">AcadAlly</span>
                </h1>

                {/* Subtitle */}
                <p className="text-gray-600 text-base sm:text-lg md:text-[1.35rem] mb-8 md:mb-12 max-w-[95%] sm:max-w-[90%] md:max-w-3xl font-medium px-4">
                    Be part of a team transforming education for millions of students across India
                </p>

                {/* Search Section */}
                <div className="w-full max-w-full sm:max-w-[90%] md:max-w-[50rem] relative flex items-center mb-4 md:mb-5">
                    <div className="flex-1 h-14 sm:h-[4rem] md:h-[4.5rem] rounded-[16px] md:rounded-[20px] border-[1.5px] border-[#8BA7FF] bg-white flex items-center p-1.5 md:p-2 overflow-hidden shadow-[0_4px_12px_rgb(0,0,0,0.03)] transition-all focus-within:ring-4 focus-within:ring-[#1C4CC3]/10 focus-within:border-[#1C4CC3]">
                        <input
                            type="text"
                            placeholder="Search Jobs Openings"
                            className="w-full h-full outline-none text-[#2D2D2D] bg-transparent text-base sm:text-lg placeholder:text-[#9CA3AF] font-medium px-3 md:px-4"
                        />
                        {/* Search Button */}
                        <button className="h-full w-12 sm:w-[4rem] md:w-[4.5rem] lg:w-[5.5rem] rounded-[10px] md:rounded-[14px] bg-[#1C4CC3] hover:bg-[#153B98] transition-colors flex items-center justify-center text-white shadow-md flex-shrink-0 cursor-pointer active:scale-95">
                            <FiSearch size={22} className="sm:hidden" strokeWidth={2.5} />
                            <FiSearch size={24} className="hidden sm:block md:hidden" strokeWidth={2.5} />
                            <FiSearch size={26} className="hidden md:block" strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                {/* Explore Link */}
                <div className="w-full max-w-full sm:max-w-[90%] md:max-w-[50rem] flex justify-end pr-1 sm:pr-2 md:pr-0">
                    <Link
                        href="/careers/openings"
                        className="text-[#1C4CC3] font-bold text-sm sm:text-base md:text-lg hover:underline underline-offset-4 flex items-center gap-1 sm:gap-1.5 group transition-all"
                    >
                        Explore all Openings
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
