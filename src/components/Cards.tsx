"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function Cards() {
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
            <div className="space-y-6 md:space-y-8 relative">
                <Card1 scrollY={scrollY} index={0} />
                <Card2 scrollY={scrollY} index={1} />
                <Card3 scrollY={scrollY} index={2} />
                <Card4 scrollY={scrollY} index={3} />
            </div>
        </div>
    );
}

/** Shared type for Card props */
type CardProps = {
    scrollY: number;
    index: number;
};

export function Card1({ scrollY: _scrollY, index: _index }: CardProps) {
    const scale = 1;
    const translateY = 0;
    const zIndex = 10;

    return (
        <div
            className="sticky top-4 rounded-[40px] px-6 pt-8 pb-0 md:px-10 lg:px-12 transition-all duration-300 ease-out overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)",
                transform: `translateY(${translateY}px) scale(${scale})`,
                zIndex,
                transformOrigin: "center top",
            }}
        >
            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-12 relative h-full">
                {/* Left Content */}
                <motion.div
                    className="flex-1 lg:max-w-xl z-20 text-center lg:text-left pb-8 md:pb-10 lg:pb-12"
                    initial={{ opacity: 0, x: -120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    {/* Header Badge */}
                    <motion.div
                        className="flex items-center justify-center lg:justify-start gap-4 mb-4"
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                    >
                        <span className="bg-[#E2E8F9] text-[#1C4CC3] px-6 py-2 rounded-full font-bold text-lg">
                            AcadAlly.ai
                        </span>
                        <span className="text-[#1C4CC3] font-bold text-xl">
                            for Students
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-[#333333] text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight"
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
                    >
                        Personalized Education for Every Learner
                    </motion.h2>

                    <motion.div
                        className="text-[#555555] text-base md:text-lg space-y-3 mb-6 max-w-lg"
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
                    >
                        <p>
                            AcadAlly.ai turns learning into a game — with badges,
                            boosters, and rewards that truly help you grow.
                            Stuck on a topic? Don&apos;t worry — we&apos;ve got your back.
                        </p>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
                    >
                        <button className="flex justify-center items-center bg-[#1C4CC3] text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                            Download the App
                        </button>
                        <button className="flex justify-center items-center bg-transparent border-2 border-[#1C4CC3] text-[#1C4CC3] font-bold text-lg px-10 py-4 rounded-full hover:bg-blue-50 transition-all">
                            Know more
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Content - Phone with floating badges */}
                <motion.div
                    className="relative z-10 lg:w-[450px]"
                    initial={{ opacity: 0, x: 120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <div className="relative">
                        {/* Floating Labels */}
                        <motion.div
                            className="absolute -left-12 top-10 bg-white/90 backdrop-blur shadow-xl p-4 rounded-2xl z-20 border border-blue-50"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <p className="text-[#1C4CC3] font-bold text-sm">10 MILLION+</p>
                            <p className="text-gray-500 text-xs">Learning Attempts</p>
                        </motion.div>
                        <motion.div
                            className="absolute -right-8 top-32 bg-white/90 backdrop-blur shadow-xl p-4 rounded-2xl z-20 border border-blue-50"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <p className="text-[#1C4CC3] font-bold text-sm">50,000+</p>
                            <p className="text-gray-500 text-xs">Active Students</p>
                        </motion.div>
                        <motion.div
                            className="absolute -right-8 bottom-20 bg-white/90 backdrop-blur shadow-xl p-4 rounded-2xl z-20 border border-blue-50"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <p className="text-[#1C4CC3] font-bold text-sm">500,000+</p>
                            <p className="text-gray-500 text-xs">Minutes of Learning</p>
                        </motion.div>

                        <Image
                            src="/card1.svg"
                            alt="AcadAlly Student App Interface"
                            width={350}
                            height={500}
                            className="w-full max-w-[350px] h-auto object-contain mx-auto drop-shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Stacking Decoration Layers */}
            <div className="absolute bottom-0 left-[2.5%] right-[2.5%] h-6 bg-blue-100/40 backdrop-blur-sm rounded-b-[40px] transform translate-y-2 -z-10 shadow-sm border-x border-b border-blue-200/20" />
            <div className="absolute bottom-0 left-[5%] right-[5%] h-6 bg-blue-100/20 backdrop-blur-sm rounded-b-[40px] transform translate-y-4 -z-20 shadow-sm border-x border-b border-blue-200/10" />
        </div>
    );
}

export function Card2({ scrollY, index }: CardProps) {
    const cardTrigger = (index - 1) * 400;
    const offset = Math.max(0, scrollY - cardTrigger);
    const progress = Math.min(1, offset / 400);

    const translateY = Math.max(0, 100 - progress * 100);
    const scale = 0.95 + progress * 0.05;
    const zIndex = 20;

    return (
        <div
            className="sticky top-4 rounded-[40px] px-6 pt-8 pb-0 md:px-10 lg:px-12 transition-all duration-300 ease-out overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)",
                transform: `translateY(${translateY}px) scale(${scale})`,
                zIndex,
                transformOrigin: "center top",
            }}
        >
            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-12 relative h-full">
                {/* Left Content - Image with badges */}
                <motion.div
                    className="relative z-10 lg:w-[450px] order-2 lg:order-1"
                    initial={{ opacity: 0, x: -120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <div className="relative">
                        {/* Floating Labels */}
                        <motion.div
                            className="absolute -left-8 top-10 bg-white/90 backdrop-blur shadow-xl p-4 rounded-2xl z-20 border border-blue-50"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <p className="text-[#1C4CC3] font-bold text-sm">5,000+</p>
                            <p className="text-gray-500 text-xs">Teacher Hours Saved</p>
                        </motion.div>
                        <motion.div
                            className="absolute -right-4 bottom-16 bg-white/90 backdrop-blur shadow-xl p-4 rounded-2xl z-20 border border-blue-50"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <p className="text-[#1C4CC3] font-bold text-sm">Instant</p>
                            <p className="text-gray-500 text-xs">Remediation</p>
                        </motion.div>

                        <div className="relative z-10">
                            <Image
                                src="/card1.svg"
                                alt="AcadAlly Student App Interface"
                                width={350}
                                height={500}
                                className="w-full max-w-[350px] h-auto object-contain mx-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    className="flex-1 lg:max-w-xl lg:ml-auto z-20 text-center lg:text-left order-1 lg:order-2 pb-8 md:pb-10 lg:pb-12"
                    initial={{ opacity: 0, x: 120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <motion.div
                        className="flex items-center justify-center lg:justify-start gap-4 mb-4"
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                    >
                        <span className="bg-[#E2E8F9] text-[#1C4CC3] px-6 py-2 rounded-full font-bold text-lg">
                            AcadAlly.ai
                        </span>
                        <span className="text-[#1C4CC3] font-bold text-xl">
                            for Teachers
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-[#333333] text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight"
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
                    >
                        Smarter Teaching Powered by Real-Time Insights
                    </motion.h2>

                    <motion.div
                        className="text-[#555555] text-base md:text-lg space-y-3 mb-6 max-w-lg"
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
                    >
                        <p>
                            With India&apos;s first AI-powered solution in education, AcadAlly
                            gives you real-time insights into who&apos;s falling behind, who
                            needs support, and when to step in. Assign quizzes in seconds,
                            track proficiency instantly, and let AcadAlly take care of
                            remediation — so you can focus on what matters most: teaching.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex justify-center lg:justify-start"
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
                    >
                        <button className="flex justify-center items-center bg-[#1C4CC3] text-white font-bold text-lg px-10 py-3 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                            Sign in
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Stacking Decoration Layers */}
            <div className="absolute bottom-0 left-[2.5%] right-[2.5%] h-6 bg-blue-100/40 backdrop-blur-sm rounded-b-[40px] transform translate-y-2 -z-10 shadow-sm border-x border-b border-blue-200/20" />
            <div className="absolute bottom-0 left-[5%] right-[5%] h-6 bg-blue-100/20 backdrop-blur-sm rounded-b-[40px] transform translate-y-4 -z-20 shadow-sm border-x border-b border-blue-200/10" />
        </div>
    );
}

export function Card3({ scrollY, index }: CardProps) {
    const cardTrigger = (index - 1) * 400;
    const offset = Math.max(0, scrollY - cardTrigger);
    const progress = Math.min(1, offset / 400);

    const translateY = Math.max(0, 100 - progress * 100);
    const scale = 0.95 + progress * 0.05;
    const zIndex = 30;

    return (
        <div
            className="sticky top-4 rounded-[40px] px-6 pt-8 pb-0 md:px-10 lg:px-12 transition-all duration-300 ease-out overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)",
                transform: `translateY(${translateY}px) scale(${scale})`,
                zIndex,
                transformOrigin: "center top",
            }}
        >
            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-12 relative h-full">
                {/* Left Content */}
                <motion.div
                    className="flex-1 lg:max-w-xl z-20 text-center lg:text-left pb-8 md:pb-10 lg:pb-12"
                    initial={{ opacity: 0, x: -120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <motion.div
                        className="flex items-center justify-center lg:justify-start gap-4 mb-4"
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                    >
                        <span className="bg-[#E2E8F9] text-[#1C4CC3] px-6 py-2 rounded-full font-bold text-lg">
                            AcadAlly.ai
                        </span>
                        <span className="text-[#1C4CC3] font-bold text-xl">
                            for Parents
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-[#333333] text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight"
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
                    >
                        Stay Informed. Support Smart. Celebrate Growth.
                    </motion.h2>

                    <motion.div
                        className="text-[#555555] text-base md:text-lg space-y-3 mb-6 max-w-lg"
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
                    >
                        <p>
                            Know exactly how your child is doing — no more guessing. From quiz
                            results to learning gaps to achievement badges, you get real-time
                            updates that help you support your child at just the right moment.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex justify-center lg:justify-start"
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
                    >
                        <button className="flex justify-center items-center bg-[#1C4CC3] text-white font-bold text-lg px-10 py-3 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                            Sign Up For your Child
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    className="relative z-10 lg:w-[450px]"
                    initial={{ opacity: 0, x: 120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <div className="relative">
                        {/* Floating Labels */}
                        <motion.div
                            className="absolute -left-6 top-10 bg-white/90 backdrop-blur shadow-xl p-4 rounded-2xl z-20 border border-blue-50"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <p className="text-[#1C4CC3] font-bold text-sm">Real-time</p>
                            <p className="text-gray-500 text-xs">Progress Alerts</p>
                        </motion.div>
                        <motion.div
                            className="absolute -right-4 bottom-12 bg-white/90 backdrop-blur shadow-xl p-4 rounded-2xl z-20 border border-blue-50"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <p className="text-[#1C4CC3] font-bold text-sm">98%</p>
                            <p className="text-gray-500 text-xs">Parental Satisfaction</p>
                        </motion.div>

                        <div className="relative z-10">
                            <Image
                                src="/card1.svg"
                                alt="AcadAlly Student App Interface"
                                width={350}
                                height={500}
                                className="w-full max-w-[350px] h-auto object-contain mx-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Stacking Decoration Layers */}
            <div className="absolute bottom-0 left-[2.5%] right-[2.5%] h-6 bg-blue-100/40 backdrop-blur-sm rounded-b-[40px] transform translate-y-2 -z-10 shadow-sm border-x border-b border-blue-200/20" />
            <div className="absolute bottom-0 left-[5%] right-[5%] h-6 bg-blue-100/20 backdrop-blur-sm rounded-b-[40px] transform translate-y-4 -z-20 shadow-sm border-x border-b border-blue-200/10" />
        </div>
    );
}

export function Card4({ scrollY, index }: CardProps) {
    const cardTrigger = (index - 1) * 400;
    const offset = Math.max(0, scrollY - cardTrigger);
    const progress = Math.min(1, offset / 400);

    const translateY = Math.max(0, 100 - progress * 100);
    const scale = 0.95 + progress * 0.05;
    const zIndex = 40;

    return (
        <div
            className="sticky top-4 rounded-[40px] px-6 pt-8 pb-0 md:px-10 lg:px-12 transition-all duration-300 ease-out overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)",
                transform: `translateY(${translateY}px) scale(${scale})`,
                zIndex,
                transformOrigin: "center top",
            }}
        >
            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-12 relative h-full">
                {/* Left Content - Image with badges */}
                <motion.div
                    className="relative z-10 lg:w-[450px] order-2 lg:order-1"
                    initial={{ opacity: 0, x: -120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <div className="relative">
                        {/* Floating Labels */}
                        <motion.div
                            className="absolute -left-4 top-4 bg-white/90 backdrop-blur shadow-xl p-4 rounded-2xl z-20 border border-blue-50"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <p className="text-[#1C4CC3] font-bold text-sm">360°</p>
                            <p className="text-gray-500 text-xs">School Analytics</p>
                        </motion.div>
                        <motion.div
                            className="absolute -right-8 bottom-10 bg-white/90 backdrop-blur shadow-xl p-4 rounded-2xl z-20 border border-blue-50"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <p className="text-[#1C4CC3] font-bold text-sm">40%</p>
                            <p className="text-gray-500 text-xs">Efficiency Boost</p>
                        </motion.div>

                        <div className="relative z-10">
                            <Image
                                src="/card1.svg"
                                alt="AcadAlly Student App Interface"
                                width={350}
                                height={500}
                                className="w-full max-w-[350px] h-auto object-contain mx-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    className="flex-1 lg:max-w-xl lg:ml-auto z-20 text-center lg:text-left order-1 lg:order-2 pb-8 md:pb-10 lg:pb-12"
                    initial={{ opacity: 0, x: 120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <motion.div
                        className="flex items-center justify-center lg:justify-start gap-4 mb-4"
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                    >
                        <span className="bg-[#E2E8F9] text-[#1C4CC3] px-6 py-2 rounded-full font-bold text-lg">
                            AcadAlly.ai
                        </span>
                        <span className="text-[#1C4CC3] font-bold text-xl">
                            for Schools
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-[#333333] text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight"
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
                    >
                        Drive Outcomes With Data That Matters
                    </motion.h2>

                    <motion.div
                        className="text-[#555555] text-base md:text-lg space-y-3 mb-6 max-w-lg"
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
                    >
                        <p>
                            Monitor progress across classes, subjects, and grades with data
                            that actually makes sense.
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
                    >
                        <button className="flex justify-center items-center bg-[#1C4CC3] text-white font-bold text-lg px-10 py-3 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                            Sign in
                        </button>
                        <button className="flex justify-center items-center bg-transparent border-2 border-[#1C4CC3] text-[#1C4CC3] font-bold text-lg px-10 py-3 rounded-full hover:bg-blue-50 transition-all">
                            Book a Demo
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Stacking Decoration Layers */}
            <div className="absolute bottom-0 left-[2.5%] right-[2.5%] h-6 bg-blue-100/40 backdrop-blur-sm rounded-b-[40px] transform translate-y-2 -z-10 shadow-sm border-x border-b border-blue-200/20" />
            <div className="absolute bottom-0 left-[5%] right-[5%] h-6 bg-blue-100/20 backdrop-blur-sm rounded-b-[40px] transform translate-y-4 -z-20 shadow-sm border-x border-b border-blue-200/10" />
        </div>
    );
}
