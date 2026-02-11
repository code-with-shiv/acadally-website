"use client"
import { useEffect, useRef, useState } from "react";

interface CounterItemProps {
    target: number;
    label: string;
    color: string;
}

const CounterItem: React.FC<CounterItemProps> = ({ target, label, color }) => {
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
        <div ref={ref} className="flex flex-col items-center">
            <div className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-2 ${color}`}>
                {count.toLocaleString()}+
            </div>
            <div className="text-sm  md:text-base lg:text-lg font-semibold text-faded-text">{label}</div>
        </div>
    );
};

const Counters: React.FC = () => {
    return (
        <div className="py-8 md:py-12 lg:py-16 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 text-center">
                    <CounterItem target={500} label="Happy Teachers" color="text-[#30159E]" />
                    <CounterItem target={200} label="Satisfied Schools" color="text-[#1C4CC3]" />
                    <CounterItem target={100000} label="Engaged Students" color="text-[#FF8A00]" />
                    <CounterItem target={20} label="Cities" color="text-[#76A74F]" />
                </div>
            </div>
        </div>
    );
};

export default Counters;
