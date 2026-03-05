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
        <section className="flex flex-col gap-6 lg:gap-8 items-center justify-center py-4 lg:py-10 max-w-[1400px] mx-auto">
            <div className="flex flex-col gap-4">
                <div className="flex flex-row items-baseline justify-center gap-x-2 flex-wrap text-center">
                    <Heading as="h2" className="lg:font-medium flex flex-row items-baseline justify-center gap-x-2 flex-wrap text-center" element={
                        <>Transform Learning with <RadialText as="span" className="lg:font-semibold lg:text-4xl" text="AcadAlly" /></>
                    } />
                </div>
                <div className="flex items-center justify-center text-center">
                    <BelowHeading className="font-normal text-lg">
                        Empowering the next generation of learners through smart, AI-powered education — only with <BlueText text="AcadAlly" />.
                    </BelowHeading>
                </div>
            </div>

            <div
                onClick={() => setIsVideoOpen(true)}
                className="relative w-full max-w-5xl mx-auto group cursor-pointer"
            >
                <div className="overflow-hidden rounded-3xl lg:rounded-[48px] shadow-2xl border border-gray-100">
                    <Image
                        src="/video.svg"
                        className="w-full h-auto object-contain transition-transform duration-700"
                        alt="video preview"
                        width={1400}
                        height={700}
                        priority
                    />
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src="/video-play-btn.svg"
                        alt="play button"
                        width={48}
                        height={48}
                        className="w-8 h-8 lg:w-45 lg:h-45 ml-1 lg:ml-2"
                    />
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
        </section>
    )
}