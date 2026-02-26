"use client";
import Heading from "./Heading";
import BelowHeading from "./BelowHeading";
import { motion } from "motion/react";

export default function EventsMain() {
    return (
        <section className="relative w-full py-10 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#EBF2FF] text-[#1C4CC3] px-7 py-2 rounded-full text-sm font-bold mb-4 md:mb-6 shadow-sm border border-[#1C4CC3]/10 tracking-wide">
                    AcadAlly Events
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-4 md:mb-6">
                    <Heading
                        element={
                            <h1 className="text-[#1C4CC3] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                                AcadAlly Events
                            </h1>
                        }
                    />
                </motion.div>

                {/* Subheading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-4xl">
                    <BelowHeading>
                        <span className="text-base md:text-xl lg:text-xl font-medium leading-relaxed">
                            Be part of our learning community through <span className="text-[#1C4CC3] font-bold">interactive events</span> and <span className="text-[#1C4CC3] font-bold">educational experiences.</span>
                        </span>
                    </BelowHeading>
                </motion.div>
            </div>
        </section>
    );
}
