"use client"
import Image from "next/image";
import { HiOutlineUserGroup, HiOutlineChartBar, HiOutlineAcademicCap, HiOutlineLightBulb } from "react-icons/hi2";
import { motion } from "motion/react";

export default function SchoolExperience() {
    return (
        <section className="bg-white py-14 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-0">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                        Smart Leadership for <span className="text-[var(--main-page-secondary)]">Smarter Learning</span>
                    </h2>
                    <p className="mt-4 md:mt-6 text-sm md:text-base text-[var(--faded-text)] max-w-4xl mx-auto font-medium leading-relaxed opacity-80">
                        Transforming the way leadership drives outcomes. <span className="text-[var(--main-page-secondary)] font-bold">AcadAlly</span> understands that visionary leadership is about driving student success with purpose and clarity.
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-0 lg:px-6">
                    {/* Left: Features */}
                    <div className="space-y-4 md:space-y-6">
                        <ExperienceItem
                            icon={<HiOutlineAcademicCap className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Built for Visionary Leaders"
                            description="Move beyond basic management to inspired, data-backed institutional growth."
                            delay={0.1}
                        />
                        <ExperienceItem
                            icon={<HiOutlineChartBar className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Track What Truly Matters"
                            description="Go deep with analytics that uncover the &quot;why&quot; behind performance at the student, teacher, and topic level."
                            delay={0.2}
                        />
                        <ExperienceItem
                            icon={<HiOutlineLightBulb className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Advance Student Ownership"
                            description="Foster a culture of competency-based learning where students take charge of their own academic journey."
                            delay={0.3}
                        />
                        <ExperienceItem
                            icon={<HiOutlineUserGroup className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Align Teams with a Shared Vision"
                            description="Empower educators with clear insights to drive measurable learning outcomes."
                            delay={0.4}
                        />
                    </div>

                    {/* Right: Dashboard Preview Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[600px]">
                            {/* Reusing the students dashboard image as it matches the layout in the screenshot */}
                            <Image
                                src="/Students.svg"
                                alt="Analytics Dashboard"
                                width={600}
                                height={400}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ExperienceItem({ icon, title, description, delay = 0 }: { icon: React.ReactNode, title: string, description: string, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className="flex items-start gap-4 md:gap-6">
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[color-mix(in_srgb,var(--main-page-secondary),transparent_92%)] rounded-sm flex items-center p-4 justify-center text-[var(--main-page-secondary)]">
                {icon}
            </div>
            <div className="flex flex-col">
                <h3 className="text-base md:text-lg font-bold text-[var(--main-page-secondary)]">
                    {title}
                </h3>
                <p className="text-sm text-[var(--faded-text)]">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
