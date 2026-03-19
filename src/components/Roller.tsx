"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RadialText } from "./RadialText";

interface Question {
    id: number;
    text: string;
}

const questions: Question[] = [
    {
        id: 1,
        text: "What if students received personalized support at the exact moment they hit a roadblock?",
    },
    {
        id: 2,
        text: "What if data could lift the administrative weight off teachers, allowing them to focus on what they do best—teaching?",
    },
    {
        id: 3,
        text: "What if data could lift the administrative weight off teachers, allowing them to focus on what they do best—teaching?",
    },
];

export default function Roller() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleQuestionClick = (index: number) => {
        setActiveIndex(index);
    };

    // Auto-play timeout for continuous looping (resets on user interaction)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveIndex((current) => (current + 1) % questions.length);
        }, 4500); // 4.5 seconds for a slower pace
        return () => clearTimeout(timeout);
    }, [activeIndex]);

    return (
        <div
            className="bg-gradient-to-br from-gray-50 to-white py-8 md:py-12 lg:py-16 relative overflow-hidden border-t-2 md:border-t-4"
            style={{
                borderTopStyle: "solid",
                borderImageSource: "linear-gradient(270deg, rgba(28, 76, 195, 0) 0%, #1C4CC3 50%, rgba(28, 76, 195, 0) 100%)",
                borderImageSlice: 1
            }}
        >
            {/* Decorative Background Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 text-gray-200 opacity-30">
                <svg viewBox="0 0 100 100" fill="currentColor">
                    <text x="50" y="70" fontSize="80" fontWeight="bold" textAnchor="middle">?</text>
                </svg>
            </div>

            <div className="absolute bottom-20 left-10 w-24 h-24 text-gray-200 opacity-20">
                <svg viewBox="0 0 100 100" fill="currentColor">
                    <text x="50" y="70" fontSize="80" fontWeight="bold" textAnchor="middle">?</text>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
                    {/* Left Side - Heading */}
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2 md:gap-2">
                            <h2 className="font-bold text-3xl lg:text-4xl leading-tight">
                                <RadialText text="The Questions" className="text-[16px] md:text-3xl lg:text-4xl font-bold leading-[120%] md:leading-tight" />
                            </h2>
                            <h3 className="text-black/70 font-semibold md:font-bold text-[16px] md:text-3xl lg:text-4xl leading-[20px] md:leading-tight">
                                That Changed Everything
                            </h3>
                        </div>
                        <p className="text-gray-600 text-[12px] md:text-base lg:text-lg leading-[140%] md:leading-relaxed max-w-md font-normal">
                            We stopped asking how to make education faster and started asking how to make it{" "}
                            <span className="text-main-page-secondary font-bold">better.</span>
                        </p>
                    </div>

                    {/* Right Side - Vertical 3D Carousel with Framer Motion */}
                    <div className="relative h-[350px] md:h-[400px] flex items-center justify-center" style={{ perspective: "1200px" }}>
                        <AnimatePresence mode="sync">
                            {questions.map((question, index) => {
                                const isActive = index === activeIndex;

                                // Infinite wrap-around math
                                let offset = index - activeIndex;
                                if (offset > questions.length / 2) offset -= questions.length;
                                if (offset < -questions.length / 2) offset += questions.length;

                                // Calculate vertical position based on offset
                                const translateY = offset * 95; // Increased spacing to move cards further apart
                                const translateZ = isActive ? 0 : -40 - Math.abs(offset) * 20;
                                const rotateX = offset * -6;
                                const scale = isActive ? 1 : 0.92 - Math.abs(offset) * 0.03;

                                return (
                                    <motion.div
                                        key={question.id}
                                        onClick={() => handleQuestionClick(index)}
                                        initial={false}
                                        animate={{
                                            rotateX,
                                            translateZ,
                                            translateY,
                                            scale,
                                            opacity: isActive ? 1 : 0.45, // Reduced opacity as requested
                                            zIndex: 10 - Math.abs(offset),
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 40, // Much lower stiffness for a relaxed glide
                                            damping: 24, // Optimized damping to minimize bounce
                                            mass: 1,
                                            restDelta: 0.001 // More precise end state
                                        }}
                                        className={`
                                        absolute w-full max-w-[500px] rounded-2xl p-4 md:p-6 cursor-pointer
                      ${isActive
                                                ? "shadow-2xl"
                                                : "border-2 border-gray-200/60 bg-white/80 shadow-md hover:shadow-lg hover:opacity-70"
                                            }
                    `}
                                        style={{
                                            transformStyle: "preserve-3d",
                                            backfaceVisibility: "hidden",
                                            willChange: "transform, opacity",
                                            ...(isActive && {
                                                background: "linear-gradient(135deg, #1C4CC3, #FF8A00, #FFCA28, #1C4CC3)",
                                                padding: "2px",
                                            }),
                                        }}
                                    >
                                        {isActive ? (
                                            // Active card with gradient border
                                            <div
                                                className="rounded-2xl p-4 md:p-6 h-full"
                                                style={{
                                                    background: "radial-gradient(circle at top left, #FFFFFF 0%, #E8F0FE 100%)",
                                                }}
                                            >
                                                {/* Question Icon */}
                                                <motion.div
                                                    animate={{
                                                        backgroundColor: "#1C4CC3",
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-4 shadow-md"
                                                >
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-white"
                                                    >
                                                        <path
                                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M12 17H12.01"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </motion.div>

                                                {/* Question Text */}
                                                <motion.p
                                                    animate={{
                                                        color: "#1C4CC3",
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-[16px] md:text-lg lg:text-xl font-medium md:font-semibold leading-[140%] md:leading-relaxed"
                                                >
                                                    {question.text}
                                                </motion.p>
                                            </div>
                                        ) : (
                                            // Inactive card
                                            <>
                                                {/* Question Icon */}
                                                <motion.div
                                                    animate={{
                                                        backgroundColor: "#D1D5DB",
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-4 shadow-md"
                                                >
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="text-gray-500"
                                                    >
                                                        <path
                                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M12 17H12.01"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </motion.div>

                                                {/* Question Text */}
                                                <motion.p
                                                    animate={{
                                                        color: "#9CA3AF",
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-[16px] md:text-lg lg:text-xl font-medium md:font-semibold leading-[140%] md:leading-relaxed"
                                                >
                                                    {question.text}
                                                </motion.p>
                                            </>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
