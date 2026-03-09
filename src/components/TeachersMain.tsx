'use client'
import { HiOutlineSearch, HiOutlineClipboardCheck } from "react-icons/hi";
import { HiOutlineBookOpen, HiOutlineBeaker } from "react-icons/hi2";
import AboveHeading from "./AboveHeading";
import BelowHeading from "./BelowHeading";
import Button from "./Button";
import Heading from "./Heading";
import { StatCard } from "./StatCard";
import { motion } from "motion/react";

export default function TeachersMain({ onOpenDemo }: { onOpenDemo?: () => void }) {
    return (
        <div className="relative lg:min-h-screen bg-white overflow-hidden">
            {/* Background Background Pattern (Concentric Circles) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] border border-blue-200 rounded-full" />
                    <div className="absolute w-[560px] h-[560px] md:w-[800px] md:h-[800px] border border-blue-200 rounded-full" />
                    <div className="absolute w-[840px] h-[840px] md:w-[1200px] md:h-[1200px] border border-blue-200 rounded-full" />
                </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[15%] left-[15%] text-blue-100 transform -rotate-12 bg-white p-2 rounded-xl shadow-sm border border-blue-50">
                    <HiOutlineSearch size={32} />
                </div>
                <div className="absolute top-[15%] right-[15%] text-blue-100 transform rotate-12 bg-white p-2 rounded-xl shadow-sm border border-blue-50">
                    <HiOutlineBookOpen size={32} />
                </div>
                <div className="absolute bottom-[40%] left-[15%] text-blue-100 transform rotate-[-15deg] bg-white p-2 rounded-xl shadow-sm border border-blue-50">
                    <HiOutlineBeaker size={32} />
                </div>
                <div className="absolute bottom-[40%] right-[15%] text-blue-100 transform rotate-[15deg] bg-white p-2 rounded-xl shadow-sm border border-blue-50">
                    <HiOutlineClipboardCheck size={32} />
                </div>
            </div>

            <main className="relative z-10 max-w-4xl mx-auto px-6 pt-8 md:pt-16 pb-20 flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#E9E7F6] text-[#393091] px-6 py-2 rounded-full text-sm font-bold mb-10 shadow-sm">
                    #1 AI Learning Platform {new Date().getFullYear()}
                </motion.div>

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-4xl flex flex-col gap-1 md:gap-2 mb-6 px-2">

                    <AboveHeading>
                        <span className="text-black font-medium text-2xl md:text-3xl lg:text-4xl tracking-tight opacity-90">
                            India&apos;s First AI Engine for
                        </span>
                    </AboveHeading>

                    <Heading
                        element={
                            <h1 className="text-purple-student text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight lg:leading-[1.1] font-semibold">
                                Insight-Driven Teaching
                            </h1>
                        }
                    />
                </motion.div>

                {/* Subheading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-10">
                    <BelowHeading className="font-medium">
                        Great teaching deserves great tools. Let AI handle the heavy lifting.
                    </BelowHeading>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col mt-2 sm:flex-row gap-4 mb-14 w-full justify-center px-4">
                    <Button
                        text="Teachers: Sign In"
                        classes="bg-purple-student text-white font-normal px-8 md:px-10 py-2 rounded-3xl text-base md:text-lg w-full sm:w-auto shadow-lg shadow-blue-900/20"
                    />
                    <Button
                        onClick={onOpenDemo}
                        text="Schools: Schedule a Demo"
                        classes="bg-white text-purple-student/80 border-2 border-purple-student/60 font-normal px-8 md:px-10 py-2 rounded-3xl text-base md:text-lg w-full sm:w-auto"
                    />
                </motion.div>

                {/* Stat Cards */}
                <div className="grid grid-cols-3 gap-2 md:gap-10 w-[calc(100%+1.5rem)] -mx-3 md:mx-0 md:w-full max-w-5xl">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                        <StatCard value="500+" label="Educators" color="var(--purple-primary)" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
                        <StatCard value="25%" label="Faster Assessments" color="var(--purple-primary)" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                        <StatCard value="40%" label="Time Saved" color="var(--purple-primary)" />
                    </motion.div>
                </div>
            </main>
        </div>
    )
}