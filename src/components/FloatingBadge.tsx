"use client";
import { motion } from "motion/react";
import { IconType } from "react-icons";

interface FloatingBadgeProps {
    icon: IconType;
    title: string;
    subtitle: string;
    className?: string;
    animateY?: [number, number, number];
    duration?: number;
    delay?: number;
}

export default function FloatingBadge({
    icon: Icon,
    title,
    subtitle,
    className = "",
    animateY = [0, -10, 0],
    duration = 3,
    delay = 0
}: FloatingBadgeProps) {
    return (
        <motion.div
            className={`absolute flex items-center gap-3 bg-white/40 backdrop-blur-md shadow-[0_8px_32px_rgba(28,76,195,0.08)] p-3 pr-6 rounded-[24px] z-20 border border-white/20 ${className}`}
            animate={{ y: animateY }}
            transition={{ duration: duration, delay: delay, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E2E8F9] text-[#1C4CC3]">
                <Icon size={22} className="shrink-0" />
            </div>
            <div className="flex flex-col">
                <p className="text-[#1C4CC3] font-bold text-base leading-tight">{title}</p>
                <p className="text-[#555555] text-xs font-medium">{subtitle}</p>
            </div>
        </motion.div>
    );
}
