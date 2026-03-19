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
            className={`group bg-white rounded-lg p-3 md:p-5 lg:py-6 lg:px-8 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] border border-[color-mix(in_srgb,var(--purple-primary),transparent_92%)] flex flex-col gap-2 overflow-hidden ${className}`}>
            <div className={`text-left lg:text-center transition-transform duration-500 ease-in-out ${isHoverCard ? 'lg:translate-y-24 lg:group-hover:translate-y-0 lg:mb-6' : 'lg:mb-6'}`}>
                <h3 className="text-base md:text-xl font-semibold text-[var(--purple-primary)] mb-1 leading-tight">
                    {title}
                </h3>
                <p className="text-[11px] md:text-sm text-[#515151] leading-relaxed opacity-80">
                    {description}
                </p>
            </div>

            <div className={`flex-1 flex flex-col items-start lg:items-center justify-end transition-all duration-500 ease-in-out ${isHoverCard ? 'lg:opacity-0 lg:translate-y-8 lg:group-hover:opacity-100 lg:group-hover:translate-y-0' : ''}`}>
                {children}
            </div>
        </motion.div>
    );
}

export default function WhyEducators() {
    const icons = ["/teachers-d-1.svg", "/teachers-d-2.svg", "/teachers-d-3.svg", "/teachers-d-4.svg"];
    const icons2 = ["/teachers-d-5.svg", "/teachers-d-6.svg", "/teachers-d-7.svg", "/teachers-d-8.svg"];

    const teachSmarter = (
        <WhyCard
            title="Teach Smarter"
            description="Access NEP-aligned, ready-to-use assessments and interactive resources."
            className="w-full min-h-[240px] lg:min-h-0 lg:col-start-2 lg:row-start-1"
            isHoverCard={true}
            delay={0.2}
        >
            <div className="flex justify-between lg:justify-between items-center w-full mt-2 opacity-50 gap-2">
                {icons.map((icon, i) => (
                    <Image key={i} src={icon} alt="icon" width={32} height={32} className="w-6 md:w-14 h-auto" />
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
            className="w-full min-h-[240px] lg:min-h-0 lg:col-start-2 lg:row-start-2"
            isHoverCard={true}
            delay={0.3}
        >
            <div className="flex justify-between lg:justify-between items-center w-full mt-2 opacity-50 gap-2">
                {icons2.map((icon, i) => (
                    <Image key={i} src={icon} alt="icon" width={32} height={32} className="w-6 md:w-14 h-auto" />
                ))}
            </div>
        </WhyCard>
    );

    return (
        <section className="px-6 py-12 lg:px-20 lg:py-20 bg-[color-mix(in_srgb,var(--purple-primary),transparent_95%)]">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 lg:mb-16">
                    <h2 className="text-[24px] md:text-4xl leading-[120%] md:leading-tight font-medium md:font-semibold text-faded-text">
                        Why Educators Choose <span className="text-[var(--purple-primary)] font-semibold">AcadAlly</span>
                    </h2>
                    <p className="mt-4 md:mt-6 text-[12px] md:text-base font-normal md:font-medium leading-[140%] md:leading-relaxed text-faded-text/80 max-w-4xl mx-auto text-center">
                        Personalized learning is no longer a luxury; it&apos;s a necessity. <span className="text-[var(--purple-primary)] text-[12px] md:text-base font-bold leading-[140%] md:leading-relaxed">AcadAlly</span> adapts to your teaching style, helping you deliver impact with more confidence.
                    </p>
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