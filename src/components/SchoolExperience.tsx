"use client"
import Image from "next/image";
import { HiOutlineUserGroup, HiOutlineChartBar, HiOutlineAcademicCap, HiOutlineLightBulb } from "react-icons/hi2";
import { motion } from "motion/react";

export default function SchoolExperience() {
    return (
        <section className="px-6 py-12 lg:px-20 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 lg:mb-16">
                    <h2 className="text-[24px] md:text-4xl font-semibold text-faded-text leading-tight">
                        Smart Leadership for <span className="text-main-page-secondary">Smarter Learning</span>
                    </h2>
                    <p className="mt-4 md:mt-6 text-[12px] md:text-base text-faded-text/80 max-w-4xl mx-auto font-normal md:font-medium leading-relaxed text-center">
                        Transforming the way leadership drives outcomes. <span className="text-main-page-secondary text-[12px] md:text-base font-bold leading-relaxed">AcadAlly</span> understands that visionary leadership is about driving student success with purpose and clarity.
                    </p>
                </motion.div>
 
                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Features */}
                    <div className="space-y-6 md:space-y-6">
                        <ExperienceItem
                            icon={<Image src="/school_build.svg" alt="Build" width={32} height={32} className="w-4 h-4 md:w-8 md:h-8" />}
                            title="Built for Visionary Leaders"
                            description="Move beyond basic management to inspired, data-backed institutional growth."
                            delay={0.1}
                        />
                        <ExperienceItem
                            icon={<Image src="/school_track.svg" alt="Track" width={32} height={32} className="w-4 h-4 md:w-8 md:h-8" />}
                            title="Track What Truly Matters"
                            description="Go deep with analytics that uncover the &quot;why&quot; behind performance at the student, teacher, and topic level."
                            delay={0.2}
                        />
                        <ExperienceItem
                            icon={<Image src="/school_advance.svg" alt="Advance" width={32} height={32} className="w-4 h-4 md:w-8 md:h-8" />}
                            title="Advance Student Ownership"
                            description="Foster a culture of competency-based learning where students take charge of their own academic journey."
                            delay={0.3}
                        />
                        <ExperienceItem
                            icon={<Image src="/school_student.svg" alt="Team" width={32} height={32} className="w-4 h-4 md:w-8 md:h-8" />}
                            title="Align Teams with a Shared Vision"
                            description="Empower educators with clear insights to drive measurable learning outcomes."
                            delay={0.4}
                        />
                    </div>

                    {/* Right: Dashboard Preview Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[600px] rounded-xl overflow-hidden shadow-2xl border border-black/5">
                            <video
                                src="/4.0 Dashboard Ongoing Chapter.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto object-contain"
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className="flex items-start gap-4 md:gap-6">
            <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-main-page-secondary/10 rounded-lg flex items-center p-2 justify-center text-main-page-secondary">
                {icon}
            </div>
            <div className="flex flex-col">
                <h3 className="text-[12px] md:text-lg font-bold text-main-page-secondary leading-tight mb-0.5 md:mb-1">
                    {title}
                </h3>
                <p className="text-[12px] md:text-sm font-normal text-faded-text/80 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
