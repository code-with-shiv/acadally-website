"use client";
import Heading from "./Heading";
import BelowHeading from "./BelowHeading";
import { motion } from "motion/react";

export default function FaqMain() {
    return (
        // <section className="relative w-full py-10 lg:py-20">
        //     <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        //         {/* Badge */}
        //         <motion.div
        //             initial={{ opacity: 0, y: 20 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             viewport={{ once: true, margin: "-50px" }}
        //             transition={{ duration: 0.5 }}
        //             className="bg-[#EBF2FF] text-[#1C4CC3] px-7 py-2 rounded-full text-sm font-bold mb-4 md:mb-6 shadow-sm border border-[#1C4CC3]/10 tracking-wide">
        //             AcadAlly Events
        //         </motion.div>

        //         {/* Main Heading */}
        //         <motion.div
        //             initial={{ opacity: 0, y: 20 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             viewport={{ once: true, margin: "-50px" }}
        //             transition={{ duration: 0.5, delay: 0.1 }}
        //             className="mb-4 md:mb-6">
        //             <Heading
        //                 element={
        //                     <h1 className="text-[#1C4CC3] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
        //                         AcadAlly Events
        //                     </h1>
        //                 }
        //             />
        //         </motion.div>

        //         {/* Subheading */}
        //         <motion.div
        //             initial={{ opacity: 0, y: 20 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             viewport={{ once: true, margin: "-50px" }}
        //             transition={{ duration: 0.5, delay: 0.2 }}
        //             className="max-w-4xl">
        //             <BelowHeading>
        //                 <span className="text-base md:text-xl lg:text-xl font-medium leading-relaxed">
        //                     Be part of our learning community through <span className="text-[#1C4CC3] font-bold">interactive events</span> and <span className="text-[#1C4CC3] font-bold">educational experiences.</span>
        //                 </span>
        //             </BelowHeading>
        //         </motion.div>
        //     </div>
        // </section>
        <div className="w-full py-10 flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center gap-6">
                {/* badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="py-2 px-4 lg:py-2 lg:px-4 rounded-full bg-[#1C4CC31A] text-[#1C4CC3] text-center align-middle inline-block font-medium text-[10px] leading-[20px] lg:font-semibold lg:text-[16px] lg:leading-[24px] lg:tracking-[0.04em] lg:font-['Poppins']">
                    Acadally FAQ
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
