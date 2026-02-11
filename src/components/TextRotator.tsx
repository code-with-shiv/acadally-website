"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

interface TextRotatorProps {
    words: string[];
}

export default function TextRotator({ words }: TextRotatorProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [words.length]);

    const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");

    return (
        <span className="inline-flex relative h-[1.2em] w-auto ml-1 align-text-bottom overflow-hidden mt-1 text-left">
            {/* Invisible text to set width and baseline */}
            <span className="invisible opacity-0 font-bold">{longestWord}</span>

            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute top-0 left-0 text-main-page-secondary font-bold w-full"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
