'use client'
import Image from "next/image";
import { HiOutlineUser, HiOutlineCheckBadge, HiOutlineTrophy, HiOutlineUserGroup } from "react-icons/hi2";
import { motion } from "motion/react";

export default function StudentExperience() {
    return (
        <section className="bg-white  py-12 lg:py-14">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16">
                        <span className="text-[var(--faded-text)]">The</span>{" "}
                        <span className="text-[var(--orange-primary)]">AcadAlly</span>{" "}
                        <span className="text-[var(--faded-text)]">Experience</span>
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left: Features */}
                    <div className="space-y-4 md:space-y-6">
                        <ExperienceItem
                            icon={<HiOutlineUser className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Your Learning, Your Way"
                            description="Ditch the &quot;one-size-fits-all&quot; grind. Get a custom roadmap that respects your pace and focuses on your goals."
                            delay={0.1}
                        />
                        <ExperienceItem
                            icon={<HiOutlineCheckBadge className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Mastery Through Feedback"
                            description="Our AI doesn't just grade you—it guides you. It spots your hurdles and provides instant explanations to clear them."
                            delay={0.2}
                        />
                        <ExperienceItem
                            icon={<HiOutlineTrophy className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Turn Effort Into Achievement"
                            description="Persistence pays off. Earn badges, certificates, and coins as you hit your milestones. Because learning is winning."
                            delay={0.3}
                        />
                        <ExperienceItem
                            icon={<HiOutlineUserGroup className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Always in Sync"
                            description="Stay supported with real-time feedback that keeps you, your parents, and your teachers on the same page."
                            delay={0.4}
                        />
                    </div>

                    {/* Right: Stats Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[600px]">
                            <Image
                                src="/Students.svg"
                                alt="Student Experience Dashboard"
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

function ExperienceItem({ icon, title, description, delay = 0 }: { icon: React.ReactNode, title: string, description: string, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className="flex items-start gap-4 md:gap-6">
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[color-mix(in_srgb,var(--orange-primary),transparent_92%)] rounded-sm flex items-center p-4 justify-center text-[var(--orange-primary)]">
                {icon}
            </div>
            <div className="flex flex-col">
                <h3 className="text-base md:text-lg font-bold text-[var(--orange-primary)]">
                    {title}
                </h3>
                <p className="text-sm text-faded-text">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
