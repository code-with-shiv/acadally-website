import Heading from "./Heading";
import BelowHeading from "./BelowHeading";
import Image from "next/image";
import { HiSparkles, HiArrowRight } from "react-icons/hi2";
import { motion } from "motion/react";
import { RadialText } from "./RadialText";

export default function MeetAlly() {
    return (
        <section
            className="flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-center py-10 lg:pt-4 lg:pb-12 px-4 lg:px-20 animate-diagonal"
            style={{
                background: `linear-gradient(135deg, rgba(96, 99, 171, 0.1) 0%, rgba(96, 99, 171, 0.05) 40%, rgba(255, 138, 0, 0.05) 60%, rgba(255, 138, 0, 0.1) 100%)`,
                backgroundColor: '#ffffff'
            }}
        >
            {/* Left Column: Text Content */}
            <div className="flex flex-col gap-2 lg:gap-8 w-full lg:max-w-2xl">
                <div className="flex flex-col gap-2 lg:gap-3">
                    <RadialText as="h2" className="font-bold text-base leading-[1.2] lg:font-bold lg:text-4xl lg:leading-tight" text="Meet Ally" />
                    <Heading as="h3" className="font-medium text-[32px] leading-[1.2] lg:text-4xl lg:leading-tight" text="Your Secure AI Learning Partner" />
                </div>
                <BelowHeading className="font-normal text-xs leading-[1.4] lg:text-sm lg:leading-relaxed">
                    Instant Answers. Focused Learning. Ally is India’s first secure AI Tutor designed to support your academic growth. Get instant, accurate guidance on any subject, anytime — personalized for your learning journey.
                </BelowHeading>
            </div>

            {/* Right Column: Interactive Chat Interface */}
            <div className="flex flex-col gap-8 w-full max-w-[550px] lg:max-w-none">
                {/* Robot Header with Speech Bubble */}
                <div className="flex items-end justify-between lg:justify-end lg:gap-8 px-0 lg:px-4">

                    {/* Speech bubble */}
                    <div className="bg-white p-3 lg:px-8 lg:py-3 gap-[11.38px] rounded-none rounded-tr-[23px] rounded-bl-[23px] lg:rounded-[40px] lg:rounded-tr-none mb-1 lg:mb-4 border border-[#FF8A0033] lg:border-gray-50 shadow-[inset_0_0_5.69px_#F7B24729] lg:shadow-[0px_10px_30px_rgba(0,0,0,0.05)] flex flex-col items-center w-[68%] lg:w-auto">
                        <div className="flex items-center gap-2 text-[#FF8A00] font-bold text-[14px] leading-[1.4] text-center justify-center lg:text-xl lg:leading-tight lg:text-left lg:justify-start">
                            Hello there! <Image src="/waving-hand-emoji-icon.svg" alt="Waving hand emoji icon" width={24} height={24} className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <p className="text-[#FF8A00] text-[12px] font-normal leading-[1.4] text-center lg:text-sm lg:text-left">Check out the below demo</p>
                    </div>

                    {/* Robot */}
                    <div className="flex-shrink-0 w-[113px] h-[107px] flex justify-end lg:w-auto lg:h-auto">
                        <Image
                            src="/ally.svg"
                            alt="Robot"
                            width={180}
                            height={180}
                            priority
                            className="w-full h-full lg:w-full lg:h-auto lg:max-w-[180px]"
                        />
                    </div>

                </div>

                {/* Main Chat Interface Container */}
                <div
                    className="flex flex-col gap-4 p-5 rounded-[32px]"
                    style={{ background: 'linear-gradient(0deg, rgba(255, 138, 0, 0.2) 0%, rgba(255, 138, 0, 0) 100%), linear-gradient(0deg, rgba(255, 138, 0, 0.08), rgba(255, 138, 0, 0.08)), #FFFFFF' }}
                >
                    {/* Active Demo Badge row */}
                    <div className="w-full flex justify-end">
                        <div className="flex items-center gap-2 border border-[#56c596] bg-white rounded-full px-4 py-1.5 w-max text-[#56c596] font-semibold text-sm shadow-sm">
                            <div className="relative flex items-center justify-center">
                                {/* Intense blooming glow layer 1 */}
                                <motion.div
                                    animate={{
                                        scale: [1, 2.5, 1],
                                        opacity: [0.5, 0, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeOut"
                                    }}
                                    className="absolute w-4 h-4 bg-[#56c596] rounded-full blur-xl"
                                />
                                {/* Intense blooming glow layer 2 */}
                                <motion.div
                                    animate={{
                                        scale: [1, 4, 1],
                                        opacity: [0.3, 0, 0.3]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeOut",
                                        delay: 0.5
                                    }}
                                    className="absolute w-4 h-4 bg-[#56c596] rounded-full blur-2xl"
                                />
                                {/* The main glowing dot */}
                                <motion.div
                                    animate={{
                                        boxShadow: [
                                            "0 0 2px rgba(86, 197, 150, 0.5)",
                                            "0 0 15px rgba(86, 197, 150, 1)",
                                            "0 0 25px rgba(86, 197, 150, 0.8)",
                                            "0 0 2px rgba(86, 197, 150, 0.5)"
                                        ],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="relative w-2.5 h-2.5 bg-[#56c596] rounded-full z-10"
                                />
                            </div>
                            Active Demo
                        </div>
                    </div>

                    <div className="flex flex-col items-left gap-8 lg:gap-4">
                        {/* Chat Bubble row */}
                        <div className="flex items-center gap-3 lg:gap-2">
                            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                                <Image
                                    src="/ally-ai-assistant-avatar.svg"
                                    alt="Ally AI Assistant Avatar"
                                    width={48}
                                    height={48}
                                    className="w-14 h-14 lg:w-12 lg:h-12"
                                />
                            </div>
                            <div className="relative bg-white text-[#5F5F5F] p-4 rounded-none rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] border border-[#EDEDED] shadow-[0_0_4px_0_rgba(0,0,0,0.12)] lg:px-4 lg:py-3 lg:rounded-tl-none lg:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-bl-2xl lg:border-[#E8E8E8] lg:shadow-sm">
                                <p className="text-[14px] font-normal leading-4 lg:text-base lg:font-medium">Hey, wanna ask a question?</p>
                            </div>
                        </div>

                        {/* Redesigned Suggestion Box */}
                        <div className="bg-white border rounded-2xl border-[#FF8A00] pt-4 pb-4 pl-4 pr-2 gap-[18px] lg:p-5 lg:gap-4 flex flex-col shadow-sm">
                            <div className="flex items-center gap-2 text-[#4A4A4A] font-normal text-xs lg:text-sm">
                                Try asking Ally something <span className="text-xs lg:text-sm">👇</span>
                            </div>

                            <div className="flex flex-col gap-2.5">
                                <button
                                    className="group flex items-center gap-2 text-white px-4 py-2 rounded-full border-white border shadow-[0_2px_10px_rgba(255,138,0,0.12)] text-xs lg:text-sm font-semibold cursor-pointer hover:shadow-[0_4px_12px_rgba(255,138,0,0.2)] hover:scale-[1.01] transition-all duration-300 w-fit"
                                    style={{
                                        background: 'radial-gradient(196.88% 599.76% at 42.49% 15.62%, #FF8A00 0%, #FFC177 100%)',
                                        boxShadow: '0px 0px 4px 0px #FF8A0066'
                                    }}
                                >
                                    <HiSparkles className="w-3.5 h-3.5 text-white animate-pulse" />
                                    <span className="text-left leading-tight">If 53x-1 ÷ 25 = 125, find the value of x</span>
                                </button>

                                <button
                                    className="group flex items-center gap-2 text-white px-4 py-2 rounded-full border-white border shadow-[0_2px_10px_rgba(255,138,0,0.12)] text-xs lg:text-sm font-semibold cursor-pointer hover:shadow-[0_4px_12px_rgba(255,138,0,0.2)] hover:scale-[1.01] transition-all duration-300 w-fit"
                                    style={{
                                        background: 'radial-gradient(196.88% 599.76% at 42.49% 15.62%, #FF8A00 0%, #FFC177 100%)',
                                        boxShadow: '0px 0px 4px 0px #FF8A0066'
                                    }}
                                >
                                    <HiSparkles className="w-3.5 h-3.5 text-white animate-pulse" />
                                    <span className="text-left leading-tight">Why don’t birds get shocked on power lines?</span>
                                </button>

                                <button
                                    className="group flex items-center gap-2 text-white px-4 py-2 rounded-full border-white border shadow-[0_2px_10px_rgba(255,138,0,0.12)] text-xs lg:text-sm font-semibold cursor-pointer hover:shadow-[0_4px_12px_rgba(255,138,0,0.2)] hover:scale-[1.01] transition-all duration-300 w-fit"
                                    style={{
                                        background: 'radial-gradient(196.88% 599.76% at 42.49% 15.62%, #FF8A00 0%, #FFC177 100%)',
                                        boxShadow: '0px 0px 4px 0px #FF8A0066'
                                    }}
                                >
                                    <HiSparkles className="w-3.5 h-3.5 text-white animate-pulse" />
                                    <span className="text-left leading-tight">Why do acids not show acidity in dry form?</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


