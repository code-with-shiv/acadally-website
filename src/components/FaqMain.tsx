"use client";
import { motion } from "motion/react";

export default function FaqMain() {
    return (
        <div className="w-full py-10 flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center gap-6">
                {/* badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="py-2 px-4 lg:py-2 lg:px-4 rounded-full bg-[#1C4CC31A] text-[#1C4CC3] text-center align-middle inline-block font-medium text-[10px] leading-[20px] lg:font-semibold lg:text-[16px] lg:leading-[24px] lg:tracking-[0.04em] lg:font-['Poppins']">
                    AcadAlly FAQ
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-semibold text-[32px] lg:text-[64px] leading-[1.2] text-center text-[#1C4CC3] font-['Poppins']">
                    Frequently Asked Questions
                </motion.h1>
            </div>

            {/* Description */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-normal text-xs lg:text-[20px] leading-[1.4] lg:leading-[1.5] text-center">
                Quickly find answers to common questions about how <span className="font-bold text-[#1C4CC3]">AcadAlly</span> transforms the learning experience for students, parents, and educators.
            </motion.div>
        </div>
    );
}
