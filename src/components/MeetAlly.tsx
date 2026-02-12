import Heading from "./Heading";
import BelowHeading from "./BelowHeading";
import Image from "next/image";
import { HiSparkles, HiArrowRight } from "react-icons/hi2";
import { RadialText } from "./RadialText";

export default function MeetAlly() {
    return (
        <div
            className="flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center py-24 px-6 lg:px-12 rounded-[60px]"
            style={{
                background: `
                    radial-gradient(circle at 5% 5%, rgba(255, 138, 0, 0.05) 0%, transparent 40%),
                    radial-gradient(circle at 95% 25%, rgba(96, 99, 171, 0.07) 0%, transparent 50%),
                    radial-gradient(circle at 50% 95%, rgba(28, 76, 195, 0.03) 0%, transparent 40%),
                    #ffffff
                `
            }}
        >
            {/* Left Column: Text Content */}
            <div className="flex flex-col gap-6 lg:gap-8 w-full lg:max-w-2xl">
                <div className="flex flex-col gap-3">
                    <RadialText text="Meet Ally" />
                    <Heading text="Your Secure AI Learning Partner" />
                </div>
                <BelowHeading>
                    Instant Answers. Focused Learning. Ally is India’s first secure AI Tutor designed to support your academic growth. Get instant, accurate guidance on any subject, anytime — personalized for your learning journey.
                </BelowHeading>
            </div>

            {/* Right Column: Interactive Chat Interface */}
            <div className="flex flex-col gap-8 w-full max-w-[550px] lg:max-w-none">
                {/* Robot Header with Speech Bubble */}
                <div className="flex items-end justify-between px-4">
                    <div className="bg-white px-8 py-4 rounded-[40px] rounded-bl-none shadow-[0px_10px_30px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center">
                        <p className="text-[#FF8A00] font-bold text-xl flex items-center gap-2">
                            Hello there! <Image src="/hi.svg" alt="hi" width={24} height={24} />
                        </p>
                        <p className="text-[#FF8A00] text-sm">Check out the below demo</p>
                    </div>
                    <div className="flex-shrink-0">
                        <Image src="/Ally.svg" alt="Robot" width={180} height={180} priority />
                    </div>
                </div>

                {/* Main Chat Interface Container */}
                <div className="flex flex-col gap-6 p-6 rounded-[32px] bg-gradient-to-b from-[#FF8A00]/10 to-[#FF8A00]/[0.02] border border-[#FF8A00]/10 shadow-sm">
                    {/* Active Demo Badge row */}
                    <div className="w-full flex justify-end">
                        <div className="flex items-center gap-2 border border-[#56c596] bg-white rounded-full px-4 py-1.5 w-max text-[#56c596] font-semibold text-sm shadow-sm">
                            <div className="relative flex items-center justify-center">
                                <div className="absolute w-3 h-3 bg-[#56c596] rounded-full blur-sm opacity-60 animate-pulse"></div>
                                <div className="relative w-3 h-3 bg-[#56c596] rounded-full"></div>
                            </div>
                            Active Demo
                        </div>
                    </div>

                    {/* Chat Bubble row */}
                    <div className="flex items-center gap-2">
                        <div className="flex-shrink-0">
                            <Image src="/ally_icon.svg" alt="Ally" width={48} height={48} />
                        </div>
                        <div className="relative bg-white text-[#5F5F5F] px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-[#E8E8E8]">
                            <p className="text-base font-medium">Hey, wanna ask a question?</p>
                        </div>
                    </div>

                    {/* Suggestion Chips row */}
                    <div className="flex flex-wrap gap-2 px-4 lg:px-12">
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
        </div>
    )
}


