"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TextRotatorItem {
    text: string;
    className: string;
}

interface TextRotatorProps {
    items: TextRotatorItem[];
}

export default function TextRotator({ items }: TextRotatorProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [items.length]);

    const longestWord = items.reduce((a, b) => (a.text.length > b.text.length ? a : b), { text: "", className: "" }).text;

    return (
        <span className="inline-flex relative h-[1.2em] w-auto ml-1 align-baseline overflow-hidden text-left">
            {/* Invisible text to set width and baseline */}
            <span className="invisible opacity-0 font-bold">{longestWord}</span>

            <AnimatePresence mode="wait">
                <motion.span
                    key={items[index].text}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`absolute top-0 left-0 font-bold w-full ${items[index].className}`}
                >
                    {items[index].text}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
