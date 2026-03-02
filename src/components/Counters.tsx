"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface CounterItemProps {
    target: number;
    label: string;
    color: string;
    index: number;
}

const CounterItem: React.FC<CounterItemProps> = ({ target, label, color, index }) => {
    const [count, setCount] = useState<number>(0);
    const ref = useRef<HTMLDivElement | null>(null);
    const speed = 200; // Higher number = slower count

    useEffect(() => {
        let started = false;
        let animationFrameId: number;
        const currentRef = ref.current;

        const animateCount = () => {
            setCount(prev => {
                const increment = Math.ceil(target / speed);
                if (prev + increment >= target) return target;
                return prev + increment;
            });
            if (count < target) {
                animationFrameId = requestAnimationFrame(animateCount);
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    started = true;
                    animateCount();
                }
            },
            { threshold: 0.5 } // Trigger when 50% visible
        );

        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
            cancelAnimationFrame(animationFrameId);
        };
    }, [target, count]);

    return (
        <motion.div
            ref={ref}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
        >
            <div className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-2 ${color}`}>
                {count.toLocaleString()}+
            </div>
            <div className="text-sm  md:text-base lg:text-lg font-medium text-faded-text">{label}</div>
        </motion.div>
    );
};

const Counters: React.FC = () => {
    return (
        <div className="relative w-full py-10 md:py-16 overflow-hidden">
            {/* Left Side Gradient */}
            <div className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-main-page-secondary/15 via-main-page-secondary/5 to-transparent pointer-events-none z-10" />

            {/* Right Side Gradient */}
            <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-main-page-secondary/15 via-main-page-secondary/5 to-transparent pointer-events-none z-10" />

            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 text-center">
                    <CounterItem target={500} label="Happy Teachers" color="text-[#30159E]" index={0} />
                    <CounterItem target={200} label="Satisfied Schools" color="text-[#1C4CC3]" index={1} />
                    <CounterItem target={100000} label="Engaged Students" color="text-[#FF8A00]" index={2} />
                    <CounterItem target={20} label="Cities" color="text-[#76A74F]" index={3} />
                </div>
            </div>
        </div>
    );
};

export default Counters;
