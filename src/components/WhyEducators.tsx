"use client";
import Image from "next/image";
import { motion } from "motion/react";

interface CardProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
    isHoverCard?: boolean;
    delay?: number;
}

function WhyCard({ title, description, children, className, isHoverCard = false, delay = 0 }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className={`group bg-white rounded-lg p-3 md:p-5 lg:py-6 lg:px-8 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] border border-[#F0F4FF] flex flex-col gap-2 overflow-hidden ${className}`}>
            <div className={`text-left lg:text-center transition-transform duration-500 ease-in-out ${isHoverCard ? 'translate-y-16 md:translate-y-20 lg:translate-y-24 group-hover:translate-y-0 lg:mb-6' : 'lg:mb-6'}`}>
                <h3 className="text-base md:text-xl font-semibold text-[#393091] mb-1 leading-tight">
                    {title}
                </h3>
                <p className="text-[11px] md:text-sm text-[#515151] leading-relaxed opacity-80">
                    {description}
                </p>
            </div>

            <div className={`flex-1 flex flex-col items-start lg:items-center justify-end transition-all duration-500 ease-in-out ${isHoverCard ? 'opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0' : ''}`}>
                {children}
            </div>
        </motion.div>
    );
}

export default function WhyEducators() {
    const icons = ["/nep-aligned-assessments-icon.svg", "/learning-gap-analysis-icon.svg", "/ai-content-adjustment-icon.svg", "/real-time-growth-analytics-icon.svg"];

    const teachSmarter = (
        <WhyCard
            title="Teach Smarter"
            description="Access NEP-aligned, ready-to-use assessments and interactive resources."
            className="w-full min-h-[180px] lg:min-h-0 lg:col-start-2 lg:row-start-1"
            isHoverCard={true}
            delay={0.2}
        >
            <div className="flex justify-start lg:justify-between items-center w-full mt-2 opacity-50 gap-2">
                {icons.map((icon, i) => (
                    <Image key={i} src={icon} alt="icon" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                ))}
            </div>
        </WhyCard>
    );

    const reachEveryStudent = (
        <WhyCard
            title="Reach Every Student"
            description="Identify learning gaps by chapter or concept with instant performance insights."
            className="w-full lg:col-start-1 lg:row-span-2 h-full"
            delay={0.1}
        >
            {/* Compact mobile image container */}
            <div className="relative mt-1 -mb-2 lg:-mb-8 flex justify-center w-full max-h-[200px] lg:max-h-none overflow-hidden">
                <Image
                    src="/teacher-dashboard-mobile-view.svg"
                    alt="Reach Every Student - Teacher Dashboard Mobile View"
                    width={300}
                    height={400}
                    className="hidden lg:block w-full max-w-[240px] md:max-w-[280px] h-auto object-contain"
                />
                <Image
                    src="/teacher-support-dashboard.svg"
                    alt="Reach Every Student - Teacher Support Dashboard"
                    width={300}
                    height={400}
                    className="lg:hidden w-full max-w-[160px] h-auto object-contain"
                />
            </div>
        </WhyCard>
    );

    const dataDrivenResults = (
        <WhyCard
            title="Data-Driven Results"
            description="AI auto-adjusts content to student levels, freeing you to focus on instruction."
            className="w-full lg:col-start-3 lg:row-span-2 h-full"
            delay={0.4}
        >
            {/* Compact mobile image container */}
            <div className="relative mt-1 -mb-2 lg:-mb-8 flex justify-center w-full max-h-[200px] lg:max-h-none overflow-hidden">
                <Image
                    src="/teacher-analytics-mobile-view.svg"
                    alt="Data-Driven Results - Teacher Analytics Mobile View"
                    width={300}
                    height={400}
                    className="hidden lg:block w-full max-w-[240px] md:max-w-[280px] h-auto object-contain"
                />
                <Image
                    src="/teacher-performance-insights.svg"
                    alt="Data-Driven Results - Teacher Performance Insights"
                    width={300}
                    height={400}
                    className="lg:hidden w-full max-w-[160px] h-auto object-contain"
                />
            </div>
        </WhyCard>
    );

    const personalizationAtScale = (
        <WhyCard
            title="Personalization at Scale"
            description="Monitor growth in real-time with analytics that trigger early intervention."
            className="w-full min-h-[180px] lg:min-h-0 lg:col-start-2 lg:row-start-2"
            isHoverCard={true}
            delay={0.3}
        >
            <div className="flex justify-start lg:justify-between items-center w-full mt-2 opacity-50 gap-2">
                {icons.map((icon, i) => (
                    <Image key={i} src={icon} alt="icon" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                ))}
            </div>
        </WhyCard>
    );

    return (
        <section className="px-6 py-12 lg:px-20 lg:py-20 bg-[#F8FAFF]">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 lg:mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Why Educators Choose <span className="text-[#1C4CC3]">AcadAlly</span>
                    </h2>
                </motion.div>

                {/* Mobile View */}
                <div className="flex lg:hidden gap-4">
                    <div className="flex-1 flex flex-col gap-4">
                        {teachSmarter}
                        {reachEveryStudent}
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        {dataDrivenResults}
                        {personalizationAtScale}
                    </div>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:grid lg:grid-cols-[0.8fr_1.4fr_0.8fr] gap-6">
                    {reachEveryStudent}
                    {teachSmarter}
                    {dataDrivenResults}
                    {personalizationAtScale}
                </div>
            </div>
        </section>
    );
}