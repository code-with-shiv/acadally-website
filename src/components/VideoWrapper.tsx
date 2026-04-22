"use client";
import { useState, useEffect, useRef } from "react";
import { RadialText } from "./RadialText";
import Video from "./Video";

export default function VideoWrapper() {
    const [shouldAutoplay, setShouldAutoplay] = useState(false);
    const videoSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShouldAutoplay(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (videoSectionRef.current) {
            observer.observe(videoSectionRef.current);
        }

        return () => {
            if (videoSectionRef.current) {
                observer.unobserve(videoSectionRef.current);
            }
        };
    }, []);

    return (
        <section className="flex flex-col gap-6 items-center justify-center py-10 px-4 lg:gap-8 lg:py-10 lg:px-0 max-w-[1400px] mx-auto" ref={videoSectionRef}>
            <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto">
                <div className="flex flex-row items-baseline justify-center gap-x-1 flex-wrap text-center w-full">
                    <h2 className="text-base font-medium leading-6 lg:text-4xl lg:leading-tight lg:font-medium flex flex-row items-baseline justify-center gap-x-1 flex-wrap text-center w-full">
                        Transform Learning with <RadialText as="span" className="text-base font-medium leading-6 lg:leading-normal lg:font-semibold lg:text-4xl pb-1 lg:pb-2" text="AcadAlly" />
                    </h2>
                </div>
                <div className="flex items-center justify-center text-center w-full">
                    <p className="text-xs font-normal leading-[1.4] lg:text-lg lg:leading-normal text-[#5F5F5F] text-center w-full">
                        Empowering the next generation of learners through smart, AI-powered education - only with <span className="text-main-page-secondary font-bold">AcadAlly</span>
                    </p>
                </div>
            </div>

            <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-[9.16px] lg:rounded-[48px] shadow-2xl border border-gray-100 overflow-hidden">
                {shouldAutoplay ? (
                    <Video className="w-full h-full" />
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-[9.16px] lg:rounded-[48px]">
                        <div className="text-gray-500">Loading video...</div>
                    </div>
                )}
            </div>
        </section>
    )
}