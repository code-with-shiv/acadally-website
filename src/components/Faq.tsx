"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Heading from "./Heading";

const faqData = [
    {
        question: "What is AcadAlly.ai?",
        answer: "AcadAlly.ai is an AI-powered personalized learning and practice platform designed to improve learning outcomes for school students through diagnostic assessments, adaptive practice, and AI-assisted academic support. It works alongside classroom teaching to strengthen conceptual understanding and exam readiness."
    },
    {
        question: "Which classes does AcadAlly.ai support?",
        answer: "AcadAlly.ai supports a wide range of classes, typically from primary to high school levels, ensuring age-appropriate content and learning paths for every student."
    },
    {
        question: "Which subjects are available on AcadAlly.ai?",
        answer: "Currently, we offer core subjects like Mathematics, Science (Physics, Chemistry, Biology), and English, with more subjects being added continuously to provide a comprehensive learning experience."
    },
    {
        question: "Who can use AcadAlly.ai?",
        answer: "AcadAlly.ai is designed for students seeking personalized learning, parents wanting to track progress, and educators looking to supplement their teaching with AI-driven insights."
    }
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="bg-white py-12 md:py-20 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Column: Heading + Still Have Questions */}
                    <div className="flex flex-col gap-10">
                        <div className="text-left">
                            <Heading
                                text={"Frequently Asked Questions"}
                            />
                        </div>

                        <div className="bg-[#F3F7FF] rounded-[2rem] p-8 md:p-10 border border-[#E9EFFD]">
                            <h3 className="text-2xl md:text-3xl font-bold text-[var(--main-page-secondary)] mb-4">
                                Still have questions?
                            </h3>
                            <p className="text-[var(--faded-text)] text-base md:text-lg mb-8 opacity-80">
                                Can&apos;t find the answers to your Questions? Drop your Question here and we will get to you as soon as possible!
                            </p>

                            <div className="relative">
                                <div className="flex items-center bg-white rounded-full border border-[#E1E8F5] p-1.5 pl-6 focus-within:border-[#1C4CC3] transition-all shadow-sm">
                                    <input
                                        type="text"
                                        placeholder="What's on your mind?"
                                        className="w-full bg-transparent text-[#2D2D2D] placeholder-[#9CA3AF] py-3 focus:outline-none text-base"
                                    />
                                    <button className="bg-[var(--main-page-secondary)] text-white p-3 rounded-full hover:bg-[#153a9e] transition-colors ml-2 flex-shrink-0">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: FAQ List + View All */}
                    <div className="flex flex-col">
                        <div className="space-y-4 mb-8">
                            {faqData.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === index
                                        ? "bg-[var(--main-page-secondary)] text-white shadow-lg"
                                        : "bg-[#F3F7FF] text-[var(--faded-text)]"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between p-6 md:p-7 text-left focus:outline-none"
                                    >
                                        <span className={`text-lg md:text-xl font-bold leading-snug ${openIndex === index ? "text-white" : "text-[var(--faded-text)]"
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <motion.span
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0 ml-4"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </motion.span>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 md:px-7 pb-8 text-sm md:text-base leading-relaxed opacity-90">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* View All Link */}
                        <div className="flex justify-end mt-auto">
                            <button className="flex cursor-pointer items-center gap-2 text-[var(--main-page-secondary)] font-bold text-lg hover:underline group">
                                View all FAQs
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
