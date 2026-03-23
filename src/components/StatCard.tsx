'use client'
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function StatCard({ value, label, color = "var(--purple-primary)", index = 0 }: { value: string; label: string; color?: string; index?: number }) {
    const [count, setCount] = useState<number>(0);
    const [hasStarted, setHasStarted] = useState(false);
    
    // Extract number and suffix (e.g., "500+" -> 500, "+")
    const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const suffix = value.replace(/[0-9]/g, '');
    
    const duration = 2000;

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number | null = null;
        let animationFrameId: number;

        const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            setCount(Math.floor(progress * numericValue));

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
    }, [hasStarted, numericValue]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onViewportEnter={() => setHasStarted(true)}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border rounded-lg md:rounded-[11.05px] p-3 md:p-6 shadow-sm flex flex-col items-center justify-center gap-1 md:gap-4 transition-all hover:shadow-md min-w-0 h-full"
            style={{ borderColor: `color-mix(in srgb, ${color}, transparent 85%)` }}
        >
            <h3
                className="text-lg sm:text-2xl md:text-[32px] font-semibold md:font-bold md:leading-[100%] md:tracking-[0.04em] md:uppercase"
                style={{ color: color }}
            >
                {count.toLocaleString()}{suffix}
            </h3>
            <p className="text-faded-text font-normal md:font-medium text-[8px] sm:text-sm md:text-[16px] text-center leading-tight md:leading-[100%] md:tracking-[0.04em]">
                {label}
            </p>
        </motion.div>
    );
}