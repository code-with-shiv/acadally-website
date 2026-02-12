"use client";
import { useState, useEffect } from "react";
import Heading from "./Heading";
import { RadialText } from "./RadialText";
import BelowHeading from "./BelowHeading";
import BlueText from "./BlueText";
import Image from "next/image";
import { HiPlay, HiXMark } from "react-icons/hi2";
import Video from "./Video";

export default function VideoWrapper() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    useEffect(() => {
        if (isVideoOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isVideoOpen]);

    return (
        <div className="flex flex-col gap-8 lg:gap-12 items-center justify-center py-12 lg:py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
            <div className="flex flex-row items-baseline justify-center gap-x-2 flex-wrap text-center">
                <Heading text="Transform Learning with " />
                <RadialText text="AcadAlly.ai" />
            </div>
            <div className="flex items-center justify-center text-center max-w-4xl">
                <BelowHeading>
                    <p>Empowering the next generation of learners through smart, AI-powered education — only with <BlueText text="AcadAlly.ai" />.</p>
                </BelowHeading>
            </div>

            <div
                onClick={() => setIsVideoOpen(true)}
                className="relative w-full group cursor-pointer"
            >
                <div className="overflow-hidden rounded-3xl lg:rounded-[48px] shadow-2xl border border-gray-100">
                    <Image
                        src="/video.svg"
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                        alt="video preview"
                        width={1400}
                        height={700}
                        priority
                    />
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-2xl group-hover:scale-110 transition-all duration-300">
                        <div className="w-16 h-16 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center shadow-inner group-hover:bg-gray-50 transition-colors">
                            <HiPlay className="w-8 h-8 lg:w-12 lg:h-12 text-[#FF8A00] ml-1 lg:ml-2" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal Popup */}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 lg:p-24 backdrop-blur-sm"
                    onClick={() => setIsVideoOpen(false)}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsVideoOpen(false);
                        }}
                        className="absolute top-6 right-6 lg:top-12 lg:right-12 text-white/70 hover:text-white transition-colors z-[110]"
                    >
                        <HiXMark className="w-10 h-10 lg:w-14 lg:h-14" />
                    </button>

                    <div
                        className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Video className="w-full h-full" />
                    </div>
                </div>
            )}
        </div>
    )
}