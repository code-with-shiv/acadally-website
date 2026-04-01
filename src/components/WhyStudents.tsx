'use client';
import Image from "next/image";
import AboveHeading from "./AboveHeading";
import Heading from "./Heading";
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
            className={`group bg-white rounded-lg p-3 md:p-5 lg:py-5 lg:px-6 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] border border-[color-mix(in_srgb,var(--orange-primary),transparent_92%)] flex flex-col gap-2 overflow-hidden ${className}`}>
            <div className={`text-left lg:text-center transition-transform duration-500 ease-in-out ${isHoverCard ? 'lg:translate-y-16 lg:group-hover:translate-y-0 lg:mb-4' : 'lg:mb-4'}`}>
                <h3 className="text-base md:text-xl font-semibold text-[var(--orange-primary)] mb-1 leading-tight">
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

export default function WhyStudents() {
    const icons1 = ["/students-d-3.png", "/students-d-4.svg", "/students-d-5.svg", "/students-d-6.png"];
    const icons2 = ["/students-d-7.svg", "/students-d-8.png", "/students-d-9.svg", "/students-d-10.svg"];

    const card1 = (
        <WhyCard
            title="Discover Your Academic Superpower"
            description="Unlock hidden strengths with AI that adapts to how you learn, turning your toughest subjects into your greatest victories."
            className="w-full min-h-[240px] lg:min-h-0 lg:col-start-2 lg:row-start-1"
            isHoverCard={true}
            delay={0.2}
        >
            <div className="flex justify-between lg:justify-between items-center w-full mt-2 opacity-50 gap-2">
                {icons1.map((icon, i) => (
                    <Image key={i} src={icon} alt="icon" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                ))}
            </div>
        </WhyCard>
    );

    const card2 = (
        <WhyCard
            title="Learn With Joy, Free from Judgement"
            description="Step into a supportive space where 'I don't know' is just the beginning. Every mistake is a stepping stone, and every effort is celebrated."
            className="w-full lg:col-start-1 lg:row-span-2 h-full"
            delay={0.1}
        >
            <div className="relative mt-4 -mb-2 lg:-mb-8 flex justify-center w-full max-h-[350px] lg:max-h-[320px] rounded-t-[20px] md:rounded-t-[32px] overflow-hidden h-full border-t-[6px] md:border-t-8 border-x-[6px] md:border-x-8 border-gray-900 shadow-2xl bg-gray-900">
                {/* <video
                    src="/Acadally 3.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-top rounded-t-[18px] md:rounded-t-[32px]"
                /> */}
            </div>
        </WhyCard>
    );

    const card3 = (
        <WhyCard
            title="Grow Smarter, One Day at a Time"
            description="Build a daily habit of excellence. Our micro-learning approach ensures you're always moving forward without the burnout."
            className="w-full lg:col-start-3 lg:row-span-2 h-full"
            delay={0.4}
        >
            <div className="relative mt-4 -mb-2 lg:-mb-8 flex justify-center w-full max-h-[350px] lg:max-h-[320px] overflow-hidden rounded-t-[20px] md:rounded-t-[32px] h-full border-t-[6px] md:border-t-8 border-x-[6px] md:border-x-8 border-gray-900 shadow-2xl bg-gray-900">
                {/* <video
                    src="/2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-top rounded-t-[18px] md:rounded-t-[32px]"
                /> */}
            </div>
        </WhyCard>
    );

    const card4 = (
        <WhyCard
            title="Learn at Your Own Pace, Your Own Way"
            description="No pressure. No comparisons. AcadAlly adapts to your speed—so you can pause, revise, or race ahead with confidence, not anxiety."
            className="w-full min-h-[240px] lg:min-h-0 lg:col-start-2 lg:row-start-2"
            isHoverCard={true}
            delay={0.3}
        >
            <div className="flex justify-between lg:justify-between items-center w-full mt-2 opacity-50 gap-2">
                {icons2.map((icon, i) => (
                    <Image key={i} src={icon} alt="icon" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                ))}
            </div>
        </WhyCard>
    );

    return (
        <section className="px-6 py-12 lg:px-12 lg:py-6 bg-[color-mix(in_srgb,var(--orange-primary),transparent_95%)] lg:h-[calc(100vh-4rem)] lg:max-h-[850px] flex flex-col justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 lg:mb-6 flex flex-col items-center gap-2">
                    
                    <AboveHeading>
                        <span className="text-[var(--orange-primary)] font-medium">Why Choose AcadAlly?</span>
                    </AboveHeading>

                    <Heading
                        element={
                            <h2 className="text-[24px] md:text-4xl leading-[120%] md:leading-tight font-semibold text-faded-text">
                                Why Students Love Learning with <span className="text-[var(--orange-primary)]">AcadAlly</span>
                            </h2>
                        }
                    />
                    
                    <p className="mt-1 text-[12px] md:text-base font-normal md:font-medium leading-[140%] md:leading-relaxed text-faded-text/80 max-w-3xl mx-auto text-center">
                        Personalized learning is no longer a luxury; it&apos;s a necessity. AcadAlly adapts to your unique style, helping you master concepts faster and with more confidence.
                    </p>
                </motion.div>

                {/* Mobile View */}
                <div className="flex lg:hidden gap-4">
                    <div className="flex-1 flex flex-col gap-4">
                        {card1}
                        {card2}
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        {card3}
                        {card4}
                    </div>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:grid lg:grid-cols-[0.8fr_1.4fr_0.8fr] gap-4 xl:gap-6 flex-1 min-h-0 items-stretch">
                    {card2}
                    {card1}
                    {card3}
                    {card4}
                </div>
            </div>
        </section>
    );
}
