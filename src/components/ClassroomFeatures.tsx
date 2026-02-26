"use client";
import Image from "next/image";
import { HiOutlineChartBar, HiOutlineLightBulb, HiOutlineAcademicCap, HiOutlineClipboardCheck } from "react-icons/hi";
import { motion } from "motion/react";

export default function ClassroomFeatures() {
    return (
        <section className="bg-white px-6 py-12 lg:px-20 lg:py-14">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16">
                        <span className="text-purple-primary">Intelligent</span>{" "}
                        <span className="text-faded-text">Classroom</span>
                        <br className="md:hidden" />
                        <span className="text-faded-text"> Features</span>
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left: Features */}
                    <div className="space-y-4 md:space-y-6">
                        <FeatureItem
                            icon={<HiOutlineChartBar className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Predictive Analytics"
                            description="Unlock data-driven teaching that anticipates student needs"
                            delay={0.1}
                        />
                        <FeatureItem
                            icon={<HiOutlineLightBulb className="w-8 h-8 md:w-10 md:h-10" />}
                            title="NEP-First Pedagogy"
                            description="Seamlessly implement Flipped, Blended, and Project-Based learning."
                            delay={0.2}
                        />
                        <FeatureItem
                            icon={<HiOutlineAcademicCap className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Mastery-Based Learning"
                            description="Tailored remediation strategies based on individual student patterns."
                            delay={0.3}
                        />
                        <FeatureItem
                            icon={<HiOutlineClipboardCheck className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Gap Detection"
                            description="Prior-knowledge checks to uncover misconceptions before they hinder progress."
                            delay={0.4}
                        />
                    </div>

                    {/* Right: Stats Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative w-full flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[600px]">
                            <Image
                                src="/stats.svg"
                                alt="Classroom Analytics Dashboard"
                                width={600}
                                height={400}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function FeatureItem({ icon, title, description, delay = 0 }: { icon: React.ReactNode, title: string, description: string, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className="flex items-start gap-4 md:gap-6">
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#30159E]/10 rounded-sm flex items-center p-4 justify-center text-purple-primary">
                {icon}
            </div>
            <div className="flex flex-col">
                <h3 className="text-base md:text-lg font-bold text-purple-primary">
                    {title}
                </h3>
                <p className="text-sm text-faded-text">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}


