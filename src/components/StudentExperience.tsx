'use client'
import Image from "next/image";
import { HiOutlineUser, HiOutlineCheckBadge, HiOutlineTrophy, HiOutlineUserGroup } from "react-icons/hi2";
import { motion } from "motion/react";

export default function StudentExperience() {
    return (
        <section className="bg-white py-6 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-0">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 md:mb-10">
                    <h2 className="text-[24px] md:text-[40px] font-medium md:font-medium leading-[120%] md:leading-[36px]">
                        The <span className="text-[var(--orange-primary)] font-semibold md:font-bold">AcadAlly Experience</span>
                    </h2>
                    <p className="mt-4 md:mt-6 text-[12px] md:text-base text-faded-text/80 max-w-4xl mx-auto font-normal md:font-medium leading-[140%] md:leading-relaxed text-center">
                        Transforming the way students learn and achieve. <span className="text-[var(--orange-primary)] text-[12px] md:text-base font-bold leading-[140%] md:leading-relaxed">AcadAlly</span> understands that every learner is unique and deserves a personalized path to success.
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-0 lg:px-6">
                    {/* Left: Features */}
                    <div className="space-y-6 md:space-y-10">
                        <ExperienceItem
                            icon={<HiOutlineUser className="w-4 h-4 md:w-8 md:h-8" />}
                            title="Your Learning, Your Way"
                            description="Ditch the &quot;one-size-fits-all&quot; grind. Get a custom roadmap that respects your pace and focuses on your goals."
                            delay={0.1}
                        />
                        <ExperienceItem
                            icon={<HiOutlineCheckBadge className="w-4 h-4 md:w-8 md:h-8" />}
                            title="Mastery Through Feedback"
                            description="Our AI doesn't just grade you—it guides you. It spots your hurdles and provides instant explanations to clear them."
                            delay={0.2}
                        />
                        <ExperienceItem
                            icon={<HiOutlineTrophy className="w-4 h-4 md:w-8 md:h-8" />}
                            title="Turn Effort Into Achievement"
                            description="Persistence pays off. Earn badges, certificates, and coins as you hit your milestones. Because learning is winning."
                            delay={0.3}
                        />
                        <ExperienceItem
                            icon={<HiOutlineUserGroup className="w-4 h-4 md:w-8 md:h-8" />}
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
            <div className="flex-shrink-0 w-8 h-8 md:w-[72px] md:h-[72px] bg-[color-mix(in_srgb,var(--orange-primary),transparent_92%)] rounded-[3.2px] md:rounded-[5px] flex items-center p-2 md:p-[20px] justify-center text-[var(--orange-primary)]">
                {icon}
            </div>
            <div className="flex flex-col">
                <h3 className="text-[12px] md:text-[20px] font-bold text-[var(--orange-primary)] leading-[16px] md:leading-[120%] mb-0.5 md:mb-1">
                    {title}
                </h3>
                <p className="text-[12px] md:text-[16px] font-normal text-[#666666] md:text-faded-text leading-[14px] md:leading-[20px]">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
