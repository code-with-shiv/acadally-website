import Heading from "./Heading";
import BelowHeading from "./BelowHeading";
import Image from "next/image";
import { HiSparkles, HiArrowRight } from "react-icons/hi2";
import { motion } from "motion/react";
import { RadialText } from "./RadialText";

export default function MeetAlly() {
    return (
        <section
            className="flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center py-4 px-6 lg:pb-12 lg:px-20 animate-diagonal"
            style={{
                background: `linear-gradient(135deg, rgba(96, 99, 171, 0.1) 0%, rgba(96, 99, 171, 0.05) 40%, rgba(255, 138, 0, 0.05) 60%, rgba(255, 138, 0, 0.1) 100%)`,
                backgroundColor: '#ffffff'
            }}
        >
            {/* Left Column: Text Content */}
            <div className="flex flex-col gap-6 lg:gap-8 w-full lg:max-w-2xl">
                <div className="flex flex-col gap-3">
                    <RadialText as="h2" className="lg:font-bold lg:text-4xl" text="Meet Ally" />
                    <Heading as="h3" className="font-medium" text="Your Secure AI Learning Partner" />
                </div>
                <BelowHeading className="font-normal text-sm">
                    Instant Answers. Focused Learning. Ally is India’s first secure AI Tutor designed to support your academic growth. Get instant, accurate guidance on any subject, anytime — personalized for your learning journey.
                </BelowHeading>
            </div>

            {/* Right Column: Interactive Chat Interface */}
            <div className="flex flex-col gap-8 w-full max-w-[550px] lg:max-w-none">
                {/* Robot Header with Speech Bubble */}
                <div className="flex items-end justify-between lg:justify-end lg:gap-8 px-0 lg:px-4">

                    {/* Speech bubble */}
                    <div className="bg-white px-4 lg:px-8 py-2 lg:py-3 rounded-[30px] lg:rounded-[40px] rounded-tr-none mb-1 lg:mb-4 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center w-[68%] lg:w-auto">
                        <div className="flex items-center gap-2 text-[#FF8A00] font-bold text-lg lg:text-xl">
                            Hello there! <Image src="/waving-hand-emoji-icon.svg" alt="Waving hand emoji icon" width={24} height={24} className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <p className="text-[#FF8A00] text-xs lg:text-sm whitespace-nowrap">Check out the below demo</p>
                    </div>

                    {/* Robot */}
                    <div className="flex-shrink-0 w-[30%] flex justify-end">
                        <Image
                            src="/Ally.svg"
                            alt="Robot"
                            width={180}
                            height={180}
                            priority
                            className="w-full h-auto max-w-[180px]"
                        />
                    </div>

                </div>

                {/* Main Chat Interface Container */}
                <div className="flex flex-col gap-4 p-5 rounded-[32px] bg-gradient-to-b from-[#FF8A00]/10 to-[#FF8A00]/[0.02] border border-[#FF8A00]/10 shadow-sm">
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

                    {/* Chat Bubble row */}
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                            <Image src="/ally-ai-assistant-avatar.svg" alt="Ally AI Assistant Avatar" width={48} height={48} />
                        </div>
                        <div className="relative bg-white text-[#5F5F5F] px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-[#E8E8E8]">
                            <p className="text-base font-medium">Hey, wanna ask a question?</p>
                        </div>
                    </div>

                    {/* Suggestion Chips row */}
                    <div className="flex flex-wrap gap-2 px-4">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-[#FF8A00] to-[#FFB054] text-white px-4 py-2 rounded-full border border-white/50 shadow-sm text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity">
                            <HiSparkles className="w-4 h-4" />
                            How does ally work?
                        </button>
                        <button className="flex items-center gap-2 bg-gradient-to-r from-[#FF8A00] to-[#FFB054] text-white px-4 py-2 rounded-full border border-white/50 shadow-sm text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity">
                            <HiSparkles className="w-4 h-4" />
                            How can i sign up?
                        </button>
                    </div>

                    {/* Chat Input row */}
                    <div className="flex items-center bg-white border border-[#FF8A00] rounded-full p-1 pl-4 lg:pl-6 shadow-sm relative overflow-hidden">
                        <input
                            type="text"
                            placeholder="What's on your mind?"
                            className="min-w-0 flex-1 bg-transparent border-none outline-none text-[#5F5F5F] placeholder:text-[#A0A0A0] text-base lg:text-lg py-2"
                        />
                        <button className="flex-shrink-0 bg-[#FF8A00] text-white rounded-full p-2.5 lg:p-3 flex items-center justify-center hover:bg-[#e67e00] transition-colors cursor-pointer">
                            <HiArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}


