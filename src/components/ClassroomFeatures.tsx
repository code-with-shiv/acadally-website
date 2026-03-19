"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function ClassroomFeatures() {
    return (
        <section className="bg-white py-6 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-0">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 md:mb-10"
                >
                    <h2 className="text-[24px] md:text-[40px] font-medium md:font-medium leading-[120%] md:leading-[36px]">
                        <span className="text-[var(--purple-primary)] font-semibold md:font-bold">Intelligent</span>{" "}
                        <span className="text-faded-text">Classroom Features</span>
                    </h2>
                    <p className="mt-4 md:mt-6 text-[12px] md:text-base text-faded-text/80 max-w-4xl mx-auto font-normal md:font-medium leading-[140%] md:leading-relaxed text-center">
                        Transforming the way educators teach and insights are derived. <span className="text-[var(--purple-primary)] text-[12px] md:text-base font-bold leading-[140%] md:leading-relaxed">AcadAlly</span> provides the tools to make data-driven decisions in real-time.
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-0 lg:px-6">
                    {/* Left: Features */}
                    <div className="space-y-6 md:space-y-10">
                        <FeatureItem
                            icon={<Image src="/teachers-d-9.svg" alt="User Icon" width={32} height={32} className="w-4 h-4 md:w-8 md:h-8" />}
                            title="Predictive Analytics"
                            description="Unlock data-driven teaching that anticipates student needs"
                            delay={0.1}
                        />
                        <FeatureItem
                            icon={<Image src="/teachers-d-10.svg" alt="Check Badge Icon" width={32} height={32} className="w-4 h-4 md:w-8 md:h-8" />}
                            title="NEP-First Pedagogy"
                            description="Seamlessly implement Flipped, Blended, and Project-Based learning."
                            delay={0.2}
                        />
                        <FeatureItem
                            icon={<Image src="/teachers-d-11.svg" alt="Trophy Icon" width={32} height={32} className="w-4 h-4 md:w-8 md:h-8" />}
                            title="Mastery-Based Learning"
                            description="Tailored remediation strategies based on individual student patterns."
                            delay={0.3}
                        />
                        <FeatureItem
                            icon={<Image src="/teachers-d-12.svg" alt="User Group Icon" width={32} height={32} className="w-4 h-4 md:w-8 md:h-8" />}
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
            <div className="flex-shrink-0 w-8 h-8 md:w-[72px] md:h-[72px] bg-[color-mix(in_srgb,var(--purple-primary),transparent_92%)] rounded-[3.2px] md:rounded-[5px] flex items-center p-2 md:p-[20px] justify-center text-[var(--purple-primary)]">
                {icon}
            </div>
            <div className="flex flex-col">
                <h3 className="text-[12px] md:text-[20px] font-bold text-[var(--purple-primary)] leading-[16px] md:leading-[120%] mb-0.5 md:mb-1">
                    {title}
                </h3>
                <p className="text-[12px] md:text-[16px] font-normal text-[#666666] md:text-faded-text leading-[14px] md:leading-[20px]">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}


