'use client'
import Image from "next/image";
import { motion } from "motion/react";

export default function StudentExperience() {
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
                        The <span className="text-[var(--orange-primary)]">AcadAlly Experience</span>
                    </h2>
                    <p className="mt-4 md:mt-6 text-[12px] md:text-base text-faded-text/80 max-w-4xl mx-auto font-normal md:font-medium leading-relaxed text-center">
                        Transforming the way students learn and achieve. <span className="text-[var(--orange-primary)] text-[12px] md:text-base font-bold leading-relaxed">AcadAlly</span> understands that every learner is unique and deserves a personalized path to success.
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Features */}
                    <div className="space-y-6 md:space-y-8">
                        <ExperienceItem
                            icon={<Image src="/students-d-11.svg" alt="User Icon" width={32} height={32} className="w-4 h-4 md:w-8 md:h-8" />}
                            title="Your Learning, Your Way"
                            description="Ditch the &quot;one-size-fits-all&quot; grind. Get a custom roadmap that respects your pace and focuses on your goals."
                            delay={0.1}
                        />
                        <ExperienceItem
                            icon={<Image src="/students-d-12.svg" alt="Check Badge Icon" width={32} height={32} className="w-4 h-4 md:w-8 md:h-8" />}
                            title="Mastery Through Feedback"
                            description="Our AI doesn't just grade you-it guides you. It spots your hurdles and provides instant explanations to clear them."
                            delay={0.2}
                        />
                        <ExperienceItem
                            icon={<Image src="/students-d-13.svg" alt="Trophy Icon" width={32} height={32} className="w-4 h-4 md:w-8 md:h-8" />}
                            title="Turn Effort Into Achievement"
                            description="Persistence pays off. Earn badges, certificates, and coins as you hit your milestones. Because learning is winning."
                            delay={0.3}
                        />
                        <ExperienceItem
                            icon={<Image src="/students-d-14.svg" alt="User Group Icon" width={32} height={32} className="w-4 h-4 md:w-8 md:h-8" />}
                            title="Always in Sync"
                            description="Stay supported with real-time feedback that keeps you, your parents, and your teachers on the same page."
                            delay={0.4}
                        />
                    </div>

                    {/* Right: Stats Video */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[600px] rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl border border-black/5">
                            <video
                                src="/student-main.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto object-contain rounded-xl lg:rounded-2xl"
                                aria-label="Student Experience Video"
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
            <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-[color-mix(in_srgb,var(--orange-primary),transparent_92%)] rounded-lg flex items-center p-2 justify-center text-[var(--orange-primary)]">
                {icon}
            </div>
            <div className="flex flex-col">
                <h3 className="text-[12px] md:text-lg font-bold text-[var(--orange-primary)] leading-tight mb-0.5 md:mb-1">
                    {title}
                </h3>
                <p className="text-[12px] md:text-sm font-normal text-faded-text/80 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
