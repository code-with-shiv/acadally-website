"use client";
import { motion } from "motion/react";

export default function Transform({ color = "var(--main-page-secondary)" }: { color?: string }) {
    return (
        <section className="relative overflow-hidden py-10 md:py-16 lg:py-20 bg-white">
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-[50%] h-[100%] opacity-60"
                    style={{ background: `linear-gradient(to left, color-mix(in srgb, ${color}, transparent 95%), transparent)` }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[40%] h-[80%]"
                    style={{ background: `radial-gradient(circle at bottom left, color-mix(in srgb, ${color}, transparent 95%), transparent 70%)` }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center gap-6 md:gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl flex flex-col items-center"
                    >
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.2] mb-4 tracking-tight"
                            style={{ color: color }}
                        >
                            Ready to Transform Learning with AcadAlly.ai?
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl text-[var(--faded-text)] font-medium leading-relaxed max-w-xl px-4 opacity-90">
                            Join <span className="font-bold text-[#1F2937]">Lakhs</span> of students and educators who are already experiencing the future of education.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 md:gap-5"
                    >
                        <button
                            className="text-white font-bold text-base md:text-lg px-8 py-4 rounded-full shadow-lg transition-all hover:scale-[1.05] active:scale-[0.95] min-w-[220px]"
                            style={{ backgroundColor: color }}
                        >
                            Download the App
                        </button>
                        <button
                            className="font-bold text-base md:text-lg px-8 py-4 rounded-full border-2 transition-all hover:scale-[1.05] active:scale-[0.95] min-w-[220px]"
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
