"use client";
import { motion } from "motion/react";

export default function BlogsListMain() {
    return (
        <section className="relative w-full py-10 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#EBF2FF] text-[#1C4CC3] px-4 py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 rounded-[32px] md:rounded-[120px] text-[10px] md:text-sm font-medium md:font-bold leading-5 mb-4 md:mb-6 shadow-sm border border-[#1C4CC3]/10 tracking-wide">
                    AcadAlly Blogs
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-4 md:mb-6">
                    <h1 className="text-[#1C4CC3] text-[32px] md:text-5xl lg:text-[64px] font-semibold tracking-tight leading-[120%] lg:leading-[120%]">
                        AcadAlly Blogs
                    </h1>
                </motion.div>

                {/* Subheading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-4xl">
                    <p className="text-[#000000CC] text-[12px] md:text-xl lg:text-xl font-normal md:font-normal leading-[140%] md:leading-relaxed text-center">
                        Explore our latest insights on <span className="text-[#1C4CC3] font-bold">education technology</span>, <span className="text-[#1C4CC3] font-bold">AI-powered learning</span>, and <span className="text-[#1C4CC3] font-bold">student success.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
