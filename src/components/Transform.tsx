"use client";
import { motion } from "motion/react";

export default function Transform() {
    return (
        <section className="relative overflow-hidden py-10 md:py-16 lg:py-20 bg-white">
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-blue-50/50 to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[80%] bg-[radial-gradient(circle_at_bottom_left,_rgba(255,138,0,0.05),_transparent_70%)]" />
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
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--main-page-secondary)] leading-[1.2] mb-4 tracking-tight">
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
                        <button className="bg-[var(--main-page-secondary)] text-white font-bold text-base md:text-lg px-8 py-4 rounded-full shadow-lg hover:bg-[#153a9e] transition-all hover:scale-[1.05] active:scale-[0.95] min-w-[220px]">
                            Download the App
                        </button>
                        <button className="bg-[#EBF2FF] text-[var(--main-page-secondary)] font-bold text-base md:text-lg px-8 py-4 rounded-full border-2 border-[#1C4CC3]/20 hover:border-[var(--main-page-secondary)] hover:bg-white transition-all hover:scale-[1.05] active:scale-[0.95] min-w-[220px]">
                            Schedule a Demo
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
