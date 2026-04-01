"use client"
import Image from "next/image";
import { motion } from "motion/react";

interface CardProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
    delay?: number;
    isHoverCard?: boolean;
}

function WhyCard({ title, description, children, className, delay = 0, isHoverCard = false }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className={`group bg-white rounded-lg p-3 md:p-5 lg:py-6 lg:px-8 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] border border-[color-mix(in_srgb,var(--main-page-secondary),transparent_92%)] flex flex-col gap-2 overflow-hidden ${className}`}>
            <div className={`text-center transition-transform duration-500 ease-in-out w-full ${isHoverCard ? (description ? 'lg:translate-y-16 lg:group-hover:translate-y-4 lg:mb-4' : 'lg:translate-y-12 lg:group-hover:translate-y-0 lg:mb-1') : (description ? 'lg:mb-6' : 'lg:mb-1')}`}>
                <h3 className="text-sm md:text-lg font-semibold text-main-page-secondary mb-0 leading-tight">
                    {title}
                </h3>
                {description && (
                    <p className="text-[11px] md:text-sm text-[#515151] leading-relaxed opacity-80">
                        {description}
                    </p>
                )}
            </div>

            <div className={`flex-1 flex flex-col items-start lg:items-center justify-end transition-all duration-500 ease-in-out ${isHoverCard ? 'lg:opacity-0 lg:translate-y-8 lg:group-hover:opacity-100 lg:group-hover:translate-y-0' : ''}`}>
                {children}
            </div>
        </motion.div>
    );
}

export default function WhySchools() {
    const cardTopMid = (
        <WhyCard
            title="Make Informed Decisions, Faster"
            description="Access real-time data reports to simplify complex strategic planning."
            className="w-full min-h-[140px] lg:min-h-0 lg:col-start-2 lg:row-start-1"
            delay={0.2}
            isHoverCard={true}
        >
            <div className="hidden md:flex justify-start lg:justify-between items-center w-full mt-2 opacity-50 gap-2">
                <Image src="/nep-aligned-assessments-icon.svg" alt="NEP Aligned Assessments" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                <Image src="/learning-gap-analysis-icon.svg" alt="Learning Gap Analysis" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                <Image src="/ai-content-adjustment-icon.svg" alt="AI Content Adjustment" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                <Image src="/real-time-growth-analytics-icon.svg" alt="Real-time Growth Analytics" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
            </div>
            <div className="md:hidden">
                <Image
                    src="/schools-b-4.svg"
                    alt="Decision insights"
                    width={300}
                    height={200}
                    className="w-full h-auto object-contain"
                />
            </div>
        </WhyCard>
    );

    const cardLeft = (
        <WhyCard
            title="See the Full Picture, Instantly"
            description=""
            className="w-full lg:col-start-1 lg:row-span-2 h-full"
            delay={0.1}
        >
            <div className="relative mt-0 -mb-2 lg:-mb-18 flex justify-center w-full max-h-[550px] lg:max-h-none rounded-t-[20px] md:rounded-t-[32px] overflow-hidden aspect-9/18 border-t-[6px] md:border-t-8 border-x-[6px] md:border-x-8 border-gray-900 shadow-2xl bg-gray-900">
                {/* <video
                    src="/Teacher level-1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-top rounded-t-[18px] md:rounded-t-[32px]"
                /> */}
            </div>
        </WhyCard>
    );

    const cardRight = (
        <WhyCard
            title="Support Teachers with Precision"
            description=""
            className="w-full lg:col-start-3 lg:row-span-2 h-full"
            delay={0.4}
        >
            <div className="relative mt-0 -mb-2 lg:-mb-18 flex justify-center w-full max-h-[550px] lg:max-h-none overflow-hidden rounded-t-[20px] md:rounded-t-[32px] aspect-9/18 border-t-[6px] md:border-t-8 border-x-[6px] md:border-x-8 border-gray-900 shadow-2xl bg-gray-900">
                {/* <video
                    src="/Teacher level-1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-top rounded-t-[18px] md:rounded-t-[32px]"
                /> */}
            </div>
        </WhyCard>
    );

    const cardBotMid = (
        <WhyCard
            title="Empower Student Agency"
            description="Provide learners with personalized tools to lead their own academic journey."
            className="w-full min-h-[140px] lg:min-h-0 lg:col-start-2 lg:row-start-2"
            delay={0.3}
            isHoverCard={true}
        >
            <div className="hidden md:flex justify-start lg:justify-between items-center w-full mt-2 opacity-50 gap-2">
                <Image src="/nep-aligned-assessments-icon.svg" alt="NEP Aligned Assessments" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                <Image src="/learning-gap-analysis-icon.svg" alt="Learning Gap Analysis" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                <Image src="/ai-content-adjustment-icon.svg" alt="AI Content Adjustment" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                <Image src="/real-time-growth-analytics-icon.svg" alt="Real-time Growth Analytics" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
            </div>
            <div className="md:hidden">
                <Image
                    src="/schools-b-1.svg"
                    alt="AcadAlly Teacher Dashboard Mobile View"
                    width={300}
                    height={400}
                    className="lg:hidden w-full h-auto object-contain"
                />
            </div>
        </WhyCard>
    );

    return (
        <section className="px-6 py-8 lg:px-20 lg:py-12 bg-[color-mix(in_srgb,var(--main-page-secondary),transparent_95%)]">
            <div className="max-w-7xl mx-auto w-full">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 lg:mb-16">
                    <h2 className="text-[24px] md:text-4xl leading-[120%] md:leading-tight font-medium md:font-semibold text-faded-text">
                        Empowering Leadership with <span className="text-main-page-secondary font-semibold">Real-Time Insights</span>
                    </h2>
                    <p className="mt-4 md:mt-6 text-[12px] md:text-base font-normal md:font-medium leading-[140%] md:leading-relaxed text-faded-text/80 max-w-4xl mx-auto text-center">
                        Strategic leadership requires more than just intuition; it requires clarity. <span className="text-main-page-secondary text-[12px] md:text-base font-bold leading-[140%] md:leading-relaxed">AcadAlly</span> tracks performance across all levels, enabling faster, smarter decision-making to drive academic success.
                    </p>
                </motion.div>

                {/* Mobile View */}
                <div className="flex lg:hidden gap-4">
                    <div className="flex-1 flex flex-col gap-4">
                        {cardTopMid}
                        {cardLeft}
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        {cardRight}
                        {cardBotMid}
                    </div>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:grid lg:grid-cols-[0.8fr_1.4fr_0.8fr] gap-4">
                    {cardLeft}
                    {cardTopMid}
                    {cardRight}
                    {cardBotMid}
                </div>
            </div>
        </section>
    );
}
