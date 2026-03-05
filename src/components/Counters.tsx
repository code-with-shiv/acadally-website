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
    const [hasStarted, setHasStarted] = useState(false);
    const duration = 2000; // All counters will finish in 2 seconds

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
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            onViewportEnter={() => setHasStarted(true)}
            transition={{ duration: 0.5, delay: index * 0.15 }}
        >
            <p className={`text-base sm:text-lg md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 ${color}`}>
                {count.toLocaleString()}+
            </p>
            <h3 className="text-[10px] sm:text-xs md:text-base font-medium text-faded-text leading-tight">{label}</h3>
        </motion.div>
    );
};

const Counters: React.FC = () => {
    return (
        <section aria-label="Impact Statistics" className="relative w-full pb-6 md:pb-10 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-0">
                <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8 lg:gap-12 text-center w-full">
                    <CounterItem target={500} label="Happy Teachers" color="text-[#30159E]" index={0} />
                    <CounterItem target={200} label="Satisfied Schools" color="text-[#1C4CC3]" index={1} />
                    <CounterItem target={100000} label="Engaged Students" color="text-[#FF8A00]" index={2} />
                    <CounterItem target={20} label="Serviceable Cities" color="text-[#76A74F]" index={3} />
                </div>
            </div>
        </section>
    );
};

export default Counters;
