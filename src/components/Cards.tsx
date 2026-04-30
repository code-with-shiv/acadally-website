"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import FloatingBadge from "./FloatingBadge";
import { handleAppDownload } from "@/utils/redirection";
import Link from "next/link";
import {
    PiBookOpenBold,
    PiStudentBold,
    PiTimerBold,
    PiUsersThreeBold,
    PiLightningBold,
    PiGraphBold,
    PiChartLineUpBold
} from "react-icons/pi";

type CardsProps = {
    onOpenDemo?: () => void;
};

export default function Cards({ onOpenDemo }: CardsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className="py-8 relative bg-white"
        >
            {/* All Screen Sizes: Stacking Animation */}
            <div className="space-y-20 mb-10 relative">
                <Card1 scrollY={scrollY} index={0} />
                <Card2 scrollY={scrollY} index={1} />
                {/* <Card3 scrollY={scrollY} index={2} /> */}
                <Card4 scrollY={scrollY} index={3} onOpenDemo={onOpenDemo} />
            </div>
        </div>
    );
}

/** Shared type for Card props */
type CardProps = {
    scrollY: number;
    index: number;
    onOpenDemo?: () => void;
};

export function Card1({ scrollY, index: _index }: CardProps) {
    const scale = 1;
    const translateY = 0;
    const zIndex = 10;

    return (
        <div
            className="sticky top-[clamp(0.5rem,calc(50vh-100px),8rem)] rounded-[40px] border border-slate-200/30 md:border-slate-200/60 border-[0.5px] md:border md:border-solid px-3 pt-6 pb-0 md:px-10 lg:px-12 transition-all duration-300 ease-out flex flex-col min-h-[450px] md:min-h-fit"
            style={{
                background: "linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)",
                transform: `translateY(${translateY}px) scale(${scale})`,
                zIndex,
                transformOrigin: "center top",
            }}
        >
            <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-6 lg:gap-10 relative h-full">
                {/* Left Content */}
                <motion.div
                    className="flex-1 lg:max-w-xl z-20 text-left pb-5 md:pb-6 lg:pb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    {/* Header Badge */}
                    <motion.div
                        className="flex items-center justify-start lg:justify-start gap-1 md:gap-2 mb-3 md:mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                    >
                        <span className="bg-[#E2E8F9] text-[#1C4CC3] px-4 py-1.5 md:px-5 md:py-2 rounded-full font-bold text-sm md:text-base">
                            AcadAlly
                        </span>
                        <span className="text-[#1C4CC3] font-bold text-sm md:text-lg">
                            for Students
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-[#383838] text-[16px] leading-[20px] font-semibold md:text-2xl lg:text-3xl md:leading-[1.2] mb-3 md:mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
                    >
                        Personalized Education for Every Learner
                    </motion.h2>

                    <motion.div
                        className="text-[#555555] text-[12px] leading-[1.4] font-normal text-justify md:text-[15px] lg:text-base md:leading-relaxed mb-4 md:mb-8 max-w-lg mx-auto lg:mx-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
                    >
                        <p>
                            AcadAlly turns learning into a game - with badges, boosters, and rewards that truly help you grow.
                            Stuck on a topic? Don&apos;t worry - we&apos;ve got your back.
                        </p>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-row items-center gap-3 justify-start w-full md:gap-4 lg:justify-start"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
                    >
                        <button
                            onClick={handleAppDownload}
                            className="flex-1 md:flex-none flex justify-center items-center bg-[#1C4CC3] text-white font-semibold text-[11px] min-[380px]:text-xs sm:text-sm md:text-base px-6 py-2 md:px-8 md:py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 cursor-pointer"
                        >
                            Download the App
                        </button>
                        <Link
                            href="/students"
                            className="flex-1 md:flex-none flex justify-center items-center bg-transparent border-2 border-[#1C4CC3] text-[#1C4CC3] font-semibold text-[11px] min-[380px]:text-xs sm:text-sm md:text-base px-6 py-2 md:px-8 md:py-2.5 rounded-full hover:bg-blue-50 transition-all cursor-pointer"
                        >
                            Know more
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Content - Phone with floating badges */}
                <motion.div
                    className="relative z-10 lg:w-[450px] lg:shrink-0 lg:ml-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <div className="relative">
                        <FloatingBadge
                            icon={PiBookOpenBold}
                            title="10 MILLION+"
                            subtitle="Learning Attempts"
                            className="-left-12 top-10"
                            animateY={[0, -10, 0]}
                            duration={3}
                        />
                        <FloatingBadge
                            icon={PiStudentBold}
                            title="50,000+"
                            subtitle="Active Students"
                            className="-right-8 top-32"
                            animateY={[0, 10, 0]}
                            duration={4}
                            delay={0.5}
                        />
                        <FloatingBadge
                            icon={PiTimerBold}
                            title="500,000+"
                            subtitle="Minutes of Learning"
                            className="-right-8 bottom-20"
                            animateY={[0, -8, 0]}
                            duration={3.5}
                            delay={1}
                        />

                        <div className="w-full max-w-[280px] mx-auto drop-shadow-2xl text-center">
                            {/* Phone Frame (top only) */}
                            <div className="bg-gray-800/80 pt-[6px] px-[6px] pb-0 rounded-t-[24px] md:rounded-t-[44px] rounded-b-none border-t border-x border-b-0 border-gray-900 mx-auto w-fit">
                                {/* Screen */}
                                <div className="overflow-hidden rounded-t-[20px] md:rounded-t-[40px] rounded-b-none max-w-[248px] md:max-w-[268px] mx-auto">
                                    <div className="relative h-0 pb-[150%] flex items-start w-[240px] md:w-[260px]">
                                        <video
                                            src="/Acadally 3.mp4"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="absolute top-0 left-0 w-full h-[133.33%] object-cover object-top"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    );
}

export function Card2({ scrollY, index }: CardProps) {
    const cardTrigger = (index - 1) * 400;
    const offset = Math.max(0, scrollY - cardTrigger);
    const progress = Math.min(1, offset / 400);

    const translateY = Math.max(0, 100 - progress * 100);
    const scale = 1;
    const zIndex = 20;

    return (
        <div
            className="sticky top-[clamp(0.5rem,calc(50vh-100px),8rem)] rounded-[40px] border border-slate-200/30 md:border-slate-200/60 border-[0.5px] md:border md:border-solid px-3 pt-6 pb-0 md:px-10 lg:px-12 transition-all duration-300 ease-out flex flex-col min-h-[450px] md:min-h-fit"
            style={{
                background: "linear-gradient(238.47deg, rgba(48, 21, 158, 0.08) 1.26%, rgba(255, 255, 255, 0.08) 128.14%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
                transform: `translateY(${translateY}px) scale(${scale})`,
                zIndex,
                transformOrigin: "center top",
            }}
        >
            <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-6 lg:gap-10 relative h-full">
                {/* Left Content */}
                <motion.div
                    className="flex-1 lg:max-w-xl z-20 text-left order-1 lg:order-1 pb-5 md:pb-6 lg:pb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <motion.div
                        className="flex items-center justify-start lg:justify-start gap-1 md:gap-2 mb-3 md:mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                    >
                        <span className="bg-[#EBE9FF] text-[#30159E] px-4 py-1.5 md:px-5 md:py-2 rounded-full font-bold text-sm md:text-base">
                            AcadAlly
                        </span>
                        <span className="text-[#30159E] font-bold text-sm md:text-lg">
                            for Teachers
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-[#383838] text-[16px] leading-[20px] font-semibold md:text-2xl lg:text-3xl md:leading-[1.2] mb-3 md:mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
                    >
                        Smarter Teaching Powered by Real-Time Insights
                    </motion.h2>

                    <motion.div
                        className="text-[#555555] text-[12px] leading-[1.4] font-normal text-justify md:text-[15px] lg:text-base md:leading-relaxed mb-4 md:mb-8 max-w-lg mx-auto lg:mx-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
                    >
                        <p>
                            Empowering educators with the first AI-powered tool in education -
                            offering actionable insights and professional development opportunities
                            to enhance teaching effectiveness.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-row items-center gap-3 justify-start w-full md:gap-4 lg:justify-start"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
                    >
                        <button
                            onClick={handleAppDownload}
                            className="flex-1 md:flex-none flex justify-center items-center bg-[#30159E] text-white font-semibold text-[11px] min-[380px]:text-xs sm:text-sm md:text-base px-6 py-2 md:px-8 md:py-2.5 rounded-full hover:bg-indigo-900 transition-all shadow-lg hover:shadow-indigo-100 cursor-pointer"
                        >
                            Download the App
                        </button>
                        <Link
                            href="/teachers"
                            className="flex-1 md:flex-none flex justify-center items-center bg-transparent border-2 border-[#30159E] text-[#30159E] font-semibold text-[11px] min-[380px]:text-xs sm:text-sm md:text-base px-6 py-2 md:px-8 md:py-2.5 rounded-full hover:bg-indigo-50 transition-all cursor-pointer"
                        >
                            Know more
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Content - Phone with floating badges */}
                <motion.div
                    className="relative z-10 lg:w-[450px] lg:shrink-0 lg:ml-auto order-2 lg:order-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <div className="relative">
                        {/* Floating Labels matching image */}
                        <FloatingBadge
                            icon={PiBookOpenBold}
                            title="84,190"
                            subtitle="Learning Gaps Bridged"
                            className="-left-12 top-10"
                            titleColorClassName="text-[#30159E]"
                            animateY={[0, -10, 0]}
                            duration={3}
                        />
                        <FloatingBadge
                            icon={PiUsersThreeBold}
                            title="1,89,889"
                            subtitle="Topics Mastered"
                            className="-right-8 top-32"
                            titleColorClassName="text-[#30159E]"
                            animateY={[0, 10, 0]}
                            duration={4}
                            delay={0.5}
                        />
                        <FloatingBadge
                            icon={PiLightningBold}
                            title="1,36,95,609"
                            subtitle="Questions Attempted"
                            className="-right-8 bottom-20"
                            titleColorClassName="text-[#30159E]"
                            animateY={[0, -8, 0]}
                            duration={3.5}
                            delay={1}
                        />

                        <div className="w-full max-w-[280px] mx-auto drop-shadow-2xl text-center">
                            {/* Phone Frame (top only) */}
                            <div className="bg-gray-800/80 pt-[6px] px-[6px] pb-0 rounded-t-[24px] md:rounded-t-[44px] rounded-b-none border-t border-x border-b-0 border-gray-900 mx-auto w-fit">
                                {/* Screen */}
                                <div className="overflow-hidden rounded-t-[20px] md:rounded-t-[40px] rounded-b-none max-w-[248px] md:max-w-[268px] mx-auto">
                                    <div className="relative h-0 pb-[150%] flex items-start w-[240px] md:w-[260px]">
                                        <video
                                            src="/Acadally.mp4"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="absolute top-0 left-0 w-full h-[133.33%] object-cover object-top"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export function Card4({ scrollY, index, onOpenDemo }: CardProps) {
    const cardTrigger = (index - 1) * 400;
    const offset = Math.max(0, scrollY - cardTrigger);
    const progress = Math.min(1, offset / 400);

    const translateY = Math.max(0, 100 - progress * 100);
    const scale = 1;
    const zIndex = 40;

    return (
        <div
            className="sticky top-[clamp(0.5rem,calc(50vh-100px),8rem)] rounded-[40px] border border-slate-200/30 md:border-slate-200/60 border-[0.5px] md:border md:border-solid px-3 pt-6 pb-0 md:px-10 lg:px-12 transition-all duration-300 ease-out flex flex-col min-h-[450px] md:min-h-fit"
            style={{
                background: "linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)",
                transform: `translateY(${translateY}px) scale(${scale})`,
                zIndex,
                transformOrigin: "center top",
            }}
        >
            <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-6 lg:gap-10 relative h-full">
                {/* Left Content */}
                <motion.div
                    className="flex-1 lg:max-w-xl z-20 text-left order-1 lg:order-1 pb-5 md:pb-6 lg:pb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <motion.div
                        className="flex items-center justify-start lg:justify-start gap-1 md:gap-2 mb-3 md:mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                    >
                        <span className="bg-[#E2E8F9] text-[#1C4CC3] px-4 py-1.5 md:px-5 md:py-2 rounded-full font-bold text-sm md:text-base">
                            AcadAlly
                        </span>
                        <span className="text-[#1C4CC3] font-bold text-sm md:text-lg">
                            for Schools
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-[#383838] text-[16px] leading-[20px] font-semibold md:text-2xl lg:text-3xl md:leading-[1.2] mb-3 md:mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
                    >
                        Drive Outcomes With Data That Matters
                    </motion.h2>

                    <motion.div
                        className="text-[#555555] text-[12px] leading-[1.4] font-normal text-justify md:text-[15px] lg:text-base md:leading-relaxed mb-4 md:mb-8 max-w-lg mx-auto lg:mx-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
                    >
                        <p>
                            Monitor progress across classes, subjects, and grades with data
                            that actually makes sense.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-row items-center gap-3 justify-start w-full md:gap-4 lg:justify-start"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
                    >
                        <Link href="" className="flex-1">
                            <button className="w-full flex justify-center items-center bg-[#1C4CC3] text-white font-semibold text-[11px] min-[380px]:text-xs sm:text-sm md:text-base px-6 py-2 md:px-8 md:py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 cursor-pointer">
                                Sign in
                            </button>
                        </Link>
                        <button
                            onClick={onOpenDemo}
                            className="flex-1 w-full flex justify-center items-center bg-transparent border-2 border-[#1C4CC3] text-[#1C4CC3] font-semibold text-[11px] min-[380px]:text-xs sm:text-sm md:text-base px-6 py-2 md:px-8 md:py-2.5 rounded-full hover:bg-blue-50 transition-all cursor-pointer"
                        >
                            Book a Demo
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Content - Phone with floating badges */}
                <motion.div
                    className="relative z-10 lg:w-[450px] lg:shrink-0 lg:ml-auto order-2 lg:order-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <div className="relative">
                        <FloatingBadge
                            icon={PiGraphBold}
                            title="360°"
                            subtitle="School Analytics"
                            className="-left-4 top-4"
                            animateY={[0, -8, 0]}
                            duration={3.2}
                        />
                        <FloatingBadge
                            icon={PiChartLineUpBold}
                            title="40%"
                            subtitle="Efficiency Boost"
                            className="-right-8 bottom-10"
                            animateY={[0, 8, 0]}
                            duration={4}
                            delay={0.5}
                        />

                        <div className="w-full max-w-[280px] mx-auto drop-shadow-2xl text-center">
                            {/* Phone Frame (top only) */}
                            <div className="bg-gray-800/80 pt-[6px] px-[6px] pb-0 rounded-t-[24px] md:rounded-t-[44px] rounded-b-none border-t border-x border-b-0 border-gray-900 mx-auto w-fit">
                                {/* Screen */}
                                <div className="overflow-hidden rounded-t-[20px] md:rounded-t-[40px] rounded-b-none max-w-[248px] md:max-w-[268px] mx-auto">
                                    <div className="relative h-0 pb-[150%] flex items-start w-[240px] md:w-[260px]">
                                        <video
                                            src="/Teacher level-1.mp4"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="absolute top-0 left-0 w-full h-[133.33%] object-cover object-top"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
