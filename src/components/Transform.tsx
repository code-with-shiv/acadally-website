"use client";
import { motion } from "motion/react";
import { handleAppDownload } from "@/utils/redirection";

export default function Transform({ color = "var(--main-page-secondary)", onOpenDemo }: { color?: string, onOpenDemo?: () => void }) {
    return (
        <section className="relative overflow-hidden py-7 px-4 md:py-16 lg:py-20 lg:px-0 bg-white">
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Center Pink/Peach Glow */}
                <div
                    className="absolute inset-0 opacity-80"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, rgba(255, 138, 0, 0.25) 0%, transparent 75%)`,
                    }}
                />
                {/* Left Blue Fade */}
                <div
                    className="absolute top-0 left-0 w-1/3 h-full opacity-60"
                    style={{
                        background: `linear-gradient(to right, color-mix(in srgb, ${color}, transparent 80%), transparent)`,
                    }}
                />
                {/* Right Blue Fade */}
                <div
                    className="absolute top-0 right-0 w-1/3 h-full opacity-60"
                    style={{
                        background: `linear-gradient(to left, color-mix(in srgb, ${color}, transparent 80%), transparent)`,
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center gap-8 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full flex flex-col items-center"
                    >
                        <h2
                            className="text-[18px] font-semibold leading-[1.4] md:text-4xl lg:text-5xl lg:font-medium lg:leading-tight mb-2 lg:mb-4 tracking-tight"
                            style={{ color: color }}
                        >
                            Ready to Transform Learning with <span className="font-bold">AcadAlly</span>?
                        </h2>
                        <p className="text-[12px] font-normal leading-[1.4] text-[var(--faded-text)] md:text-md lg:text-lg lg:font-medium lg:leading-relaxed max-w-xl px-4 opacity-90">
                            Join <span className="font-bold text-[#1F2937]">Lakhs</span> of students and educators who are already experiencing the future of education.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-row gap-2 md:gap-4 w-full"
                    >
                        <button
                            onClick={handleAppDownload}
                            className="text-white font-semibold text-[10px] sm:text-sm md:text-base px-3 py-3 rounded-[32px] lg:px-8 lg:py-2 lg:rounded-full shadow-md transition-all hover:scale-[1.05] active:scale-[0.95] flex-1 lg:min-w-[180px]"
                            style={{ backgroundColor: color }}
                        >
                            Download the App
                        </button>

                        <button
                            onClick={onOpenDemo}
                            className="font-semibold text-[10px] sm:text-sm md:text-base px-3 py-3 rounded-[32px] lg:px-8 lg:py-2 lg:rounded-full border transition-all hover:scale-[1.05] active:scale-[0.95] flex-1 lg:min-w-[180px]"
                            style={{
                                backgroundColor: `color-mix(in srgb, ${color}, transparent 95%)`,
                                color: color,
                                borderColor: `color-mix(in srgb, ${color}, transparent 80%)`
                            }}
                        >
                            Schedule a Demo
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
