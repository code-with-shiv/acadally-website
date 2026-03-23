"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Uses() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const categories = [
        {
            title: "For Teachers",
            description: "A co-pilot that flags learning gaps and automates routine tasks.",
            color: "#393091", // var(--purple-primary)
            bgColor: "rgba(57, 48, 145, 0.08)", // 8% opacity
            href: "/teachers"
        },
        {
            title: "For Students",
            description: "A companion that adapts to their pace and style.",
            color: "#FF8A00", // var(--orange-primary)
            bgColor: "rgba(255, 138, 0, 0.08)", // 8% opacity
            href: "/students"
        },
        {
            title: "For Schools",
            description: "A command center for school leaders to track performance and drive growth with data.",
            color: "#1C4CC3", // var(--main-page-secondary)
            bgColor: "rgba(28, 76, 195, 0.08)", // 8% opacity
            href: "/schools"
        }
    ];

    return (
        <section className="bg-white py-12 md:py-14 lg:pb-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-[20px] md:text-5xl font-semibold md:font-bold text-gray-800 mb-6 leading-[24px] md:leading-tight text-center">
                        Built for the Real World
                    </h2>
                    <p className="text-gray-600 text-[12px] md:text-lg font-normal leading-[140%] md:leading-relaxed text-center">
                        <span className="text-main-page-secondary font-bold">AcadAlly</span> is a response to the pulse of the classroom. Our platform was shaped through thousands of school visits, direct teacher feedback, and deep classroom observations.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-8 max-w-6xl mx-auto">
                    {categories.map((item, index) => {
                        const isHovered = hoveredIndex === index;
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="rounded-[16px] p-[16px] md:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer h-full min-h-[160px] backdrop-blur-[48px]"
                                style={{
                                    border: "1px solid #7676801F",
                                    backgroundColor: isHovered ? item.color : item.bgColor,
                                    boxShadow: isHovered ? "0 20px 40px -12px rgba(28, 76, 195, 0.15)" : "0px 0px 12px 0px #00000014"
                                }}
                            >
                                <div>
                                    <p
                                        className="text-[16px] font-normal leading-[24px] md:text-base mb-4 md:leading-relaxed transition-colors duration-300"
                                        style={{ color: isHovered ? "white" : "#374151" }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mt-auto">
                                    <h3
                                        className="text-[18px] font-bold leading-[140%] md:text-xl md:font-semibold md:leading-normal transition-all duration-300"
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
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
