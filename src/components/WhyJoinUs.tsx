import React from "react";
import { FaHandshake } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { BiBrain } from "react-icons/bi";
import { IoStar } from "react-icons/io5";

export default function WhyJoinUs() {
    return (
        <section className="relative px-6 py-2 lg:px-20 lg:py-5 py-6 md:py-10 w-full bg-gradient-to-b from-[#E6EFFF] via-white to-white font-sans overflow-hidden">
            {/* Background Floating Stars */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Huge top-left star */}
                <div className="absolute -top-10 -left-10 md:top-[5%] md:left-[2%] opacity-[0.02] text-[#1C4CC3]">
                    <IoStar className="text-[12rem] md:text-[20rem] transform -rotate-12" />
                </div>

                {/* Small top-left star */}
                <div className="absolute top-[15%] left-[18%] md:top-[20%] md:left-[22%] opacity-[0.03] text-[#1C4CC3]">
                    <IoStar className="text-[3rem] md:text-[5rem] transform rotate-12" />
                </div>

                {/* Medium top-right star */}
                <div className="absolute top-[5%] right-[25%] md:top-[8%] md:right-[30%] opacity-[0.03] text-[#1C4CC3]">
                    <IoStar className="text-[4rem] md:text-[6rem] transform -rotate-[20deg]" />
                </div>

                {/* Huge middle-right star */}
                <div className="absolute top-[30%] -right-10 md:top-[20%] md:-right-[5%] opacity-[0.02] text-[#1C4CC3]">
                    <IoStar className="text-[10rem] md:text-[16rem] transform rotate-[15deg]" />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                {/* Heading */}
                <h2 className="text-2xl md:text-[2.25rem] font-bold text-[#2D2D2D] mb-2 md:mb-3 tracking-tight">
                    Why <span className="text-[#1C4CC3]">Join Us?</span>
                </h2>

                {/* Subtext */}
                <p className="text-[#515151] text-sm md:text-base mb-3 md:mb-5 font-medium">
                    We believe the best innovations happen when brilliant minds work together.
                </p>

                {/* Bold Statement */}
                <p className="text-[#2D2D2D] text-base md:text-xl font-bold max-w-3xl mx-auto leading-relaxed mb-5 md:mb-6">
                    We're re-engineering the DNA of education. In just two years, our AI has reached 200+ schools and 100,000+ students, delivering real academic breakthroughs.
                </p>

                {/* Divider Line */}
                <div className="w-full max-w-xs md:max-w-sm mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#1C4CC3]/20 to-transparent mb-6 md:mb-8"></div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 w-full max-w-5xl">

                    {/* Team Card (Orange) */}
                    <div className="flex flex-col items-center p-6 md:p-8 rounded-[1.5rem] border border-[#FFDAB9]/80 bg-[#FFF9F2] hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 rounded-[1rem] bg-[#FFE4C4] flex items-center justify-center mb-4 text-[#FF8A00]">
                            <FaHandshake size={30} />
                        </div>
                        <h3 className="text-[#FF8A00] text-lg md:text-xl font-bold mb-2">
                            Team
                        </h3>
                        <p className="text-[#515151] text-sm md:text-base font-medium leading-relaxed">
                            Passionate, Collaborative<br className="hidden md:block" /> Colleagues
                        </p>
                    </div>

                    {/* Mission Impact Card (Purple) */}
                    <div className="flex flex-col items-center p-6 md:p-8 rounded-[1.5rem] border border-[#E6E6FA] bg-[#F8F8FF] hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 rounded-[1rem] bg-[#EBEBFF] flex items-center justify-center mb-4 text-[#393091]">
                            <FiTarget size={32} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[#393091] text-lg md:text-xl font-bold mb-2">
                            Mission Impact
                        </h3>
                        <p className="text-[#515151] text-sm md:text-base font-medium leading-relaxed">
                            Transform education<br className="hidden md:block" /> for millions
                        </p>
                    </div>

                    {/* Learning Card (Green) */}
                    <div className="flex flex-col items-center p-6 md:p-8 rounded-[1.5rem] border border-[#E8F5E9] bg-[#F6FDF3] hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 rounded-[1rem] bg-[#E2F7E1] flex items-center justify-center mb-4 text-[#8AB424]">
                            <BiBrain size={34} />
                        </div>
                        <h3 className="text-[#8AB424] text-lg md:text-xl font-bold mb-2">
                            Learning
                        </h3>
                        <p className="text-[#515151] text-sm md:text-base font-medium leading-relaxed">
                            Continuous Skill<br className="hidden md:block" /> development
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
