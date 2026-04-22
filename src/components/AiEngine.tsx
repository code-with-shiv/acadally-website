"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { RadialText } from "./RadialText";
import Image from "next/image";

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

interface StatCounterProps {
    target: number;
    label: string;
    suffix: string;
    index: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ target, label, suffix, index }) => {
    const [count, setCount] = useState<number>(0);
    const [hasStarted, setHasStarted] = useState(false);
    const duration = 2000;

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number | null = null;
        let animationFrameId: number;

        const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            setCount(Math.floor(progress * target));

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animateCount);
            }
        };

        animationFrameId = requestAnimationFrame(animateCount);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [hasStarted, target]);

    return (
        <motion.div
            className="bg-orange-primary/10 rounded-lg p-3 text-center border border-orange-primary/5 md:p-6 md:rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            onViewportEnter={() => setHasStarted(true)}
            transition={{ duration: 0.5, delay: index * 0.15 }}
        >
            <p className="text-base font-bold leading-[1.2] text-orange-primary md:text-4xl">
                {count}{suffix}
            </p>
            <p className="text-[10px] font-medium leading-[1.4] text-[#515151] mt-1 md:text-sm">{label}</p>
        </motion.div>
    );
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="group relative z-10 border border-[#1C4CC31F] rounded-lg p-3 bg-white flex flex-col h-full transition-all duration-300 hover:bg-main-page-secondary overflow-hidden lg:rounded-2xl lg:p-6">
            <div className="flex flex-row items-start gap-4 lg:flex-col lg:items-start lg:gap-4">
                <div className="bg-[#EFF4FF] p-3 rounded-xl w-fit transition-colors group-hover:bg-white relative z-20 shrink-0">
                    <Image src={icon} alt={title} width={32} height={32} className="relative z-30 w-8 h-8 rounded-[4px]" />
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-xs lg:text-xl font-bold text-[#1C4CC3] leading-4 lg:leading-tight transition-colors group-hover:text-white lg:mb-1">
                        {title}
                    </h3>
                    <p className="text-xs font-normal leading-[14px] text-[#515151] transition-colors group-hover:text-white lg:text-sm lg:leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

const features = [
    {
        icon: "/cloud.svg",
        title: "Adaptive Learning Paths",
        description: "Tailors your learning journey, adjusting in real-time to your progress and needs."
    },
    {
        icon: "/chart-box-ai-line.svg",
        title: "Predictive Analytics",
        description: "Anticipates learning challenges and provides proactive support."
    },
    {
        icon: "/pencil.svg",
        title: "Content Optimization",
        description: "Tailors your learning journey, adjusting in real-time to your progress and needs."
    },
    {
        icon: "/ai-brain.svg",
        title: "Intelligent Recommendations",
        description: "Receive personalized study tips, practice problems, and resources based on your needs."
    }
];

export default function AiEngine() {
    return (
        <section aria-label="AI Engine Features" className="flex flex-col bg-main-page-secondary/4 gap-6 py-10 px-4 lg:gap-12 lg:px-20 lg:py-10">
            {/* Top Responsive Section */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                {/* Left Content Column */}
                <div className="w-full lg:w-[55%] flex flex-col gap-2 text-left lg:gap-6">
                    <div>
                        <RadialText as="h2" className="text-base font-bold leading-[1.2] lg:font-bold lg:text-4xl lg:leading-tight" text="AI Engine - LEAP™" />
                    </div>
                    <div>
                        <p className="text-xs leading-[1.4] text-[#515151] lg:text-lg lg:font-normal lg:leading-normal">
                            <span className="font-bold">LEAP™ (Learning Engine for Assessments and Progress)</span> is our powerful AI engine that adapts to your unique learning style, delivering a personalized experience tailored just for you.
                        </p>
                    </div>

                    {/* Statistics Row */}
                    <div className="grid grid-cols-3 gap-1 mt-2 lg:gap-4">
                        <StatCounter target={40} label="Faster Learning" suffix="%" index={0} />
                        <StatCounter target={95} label="Accuracy Rate" suffix="%" index={1} />
                        <motion.div
                            className="bg-orange-primary/10 rounded-lg p-3 text-center border border-orange-primary/5 md:p-6 md:rounded-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <p className="text-base font-bold leading-[1.2] text-orange-primary md:text-4xl">24/7</p>
                            <p className="text-[10px] font-medium leading-[1.4] text-[#515151] mt-1 md:text-sm">AI Support</p>
                        </motion.div>
                    </div>
                </div>

                {/* Right Image Column */}
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[500px] h-[249px] lg:h-auto overflow-hidden">
                        <Image
                            src="/ai-engine-bg.svg"
                            alt="Background Decoration"
                            width={500}
                            height={500}
                            className="absolute inset-0 w-full h-full lg:h-auto object-contain opacity-70"
                        />
                        <Image
                            src="/leap.svg"
                            alt="LEAP AI Engine Visualization"
                            width={500}
                            height={500}
                            className="relative w-full h-full lg:h-auto object-contain drop-shadow-xl"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Feature Cards Grid - 4 Columns on lg screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    )
}