"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Uses() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const categories = [
        {
            title: "For Teachers",
            description: "A co-pilot that flags learning gaps and automates routine tasks.",
            color: "#393091", // var(--purple-primary)
            bgColor: "rgba(57, 48, 145, 0.08)", // 8% opacity
        },
        {
            title: "For Students",
            description: "A companion that adapts to their pace and style.",
            color: "#FF8A00", // var(--orange-primary)
            bgColor: "rgba(255, 138, 0, 0.08)", // 8% opacity
        },
        {
            title: "For Parents",
            description: "A window into their child's progress with meaningful, actionable insights.",
            color: "#8AB424", // var(--green-primary)
            bgColor: "rgba(138, 180, 36, 0.08)", // 8% opacity
        }
    ];

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                        Built for the Real World
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        <span className="text-main-page-secondary font-bold">AcadAlly.ai</span> is a response to the pulse of the classroom. Our platform was shaped through thousands of school visits, direct teacher feedback, and deep classroom observations.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {categories.map((item, index) => {
                        const isHovered = hoveredIndex === index;
                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="rounded-3xl p-6 md:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer h-full min-h-[160px]"
                                style={{
                                    backgroundColor: isHovered ? item.color : item.bgColor,
                                }}
                            >
                                <div>
                                    <p
                                        className="text-base md:text-lg font-medium mb-6 leading-relaxed transition-colors duration-300"
                                        style={{ color: isHovered ? "white" : "#374151" }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mt-auto">
                                    <h3
                                        className="text-xl md:text-2xl font-bold transition-all duration-300"
                                        style={{ color: isHovered ? "white" : item.color }}
                                    >
                                        {item.title}
                                    </h3>
                                    <div
                                        className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300"
                                        style={{
                                            backgroundColor: isHovered ? "white" : item.color,
                                            transform: isHovered ? "scale(1.1)" : "scale(1)"
                                        }}
                                    >
                                        <FaArrowRight
                                            className="w-5 h-5 transition-all duration-300"
                                            style={{ color: isHovered ? item.color : "white" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
