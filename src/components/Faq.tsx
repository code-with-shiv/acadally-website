"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Heading from "./Heading";
import Link from "next/link";

const faqData = [
    {
        question: "What is AcadAlly?",
        answer: "AcadAlly is an AI-powered personalized learning and practice platform designed to improve learning outcomes for school students through diagnostic assessments, adaptive practice, and AI-assisted academic support. It works alongside classroom teaching to strengthen conceptual understanding and exam readiness."
    },
    {
        question: "Which classes does AcadAlly support?",
        answer: "AcadAlly supports a wide range of classes, typically from primary to high school levels, ensuring age-appropriate content and learning paths for every student."
    },
    {
        question: "Which subjects are available on AcadAlly?",
        answer: "Currently, we offer core subjects like Mathematics, Science (Physics, Chemistry, Biology), and English, with more subjects being added continuously to provide a comprehensive learning experience."
    },
    {
        question: "Who can use AcadAlly?",
        answer: "AcadAlly is designed for students seeking personalized learning, parents wanting to track progress, and educators looking to supplement their teaching with AI-driven insights."
    }
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [userQuestion, setUserQuestion] = useState("");

    return (
        <section aria-label="Frequently Asked Questions" className="bg-white py-8 md:py-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Column: Heading + Still Have Questions */}
                    <div className="flex flex-col gap-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="text-left">
                            <Heading
                                as="h2"
                                className="font-semibold"
                                text={"Frequently Asked Questions"}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="rounded-3xl p-8 md:p-10 relative"
                            style={{
                                background: "linear-gradient(#F5F8FF, #FFFFFF) padding-box, linear-gradient(to bottom, #C5D1EF, #FFFFFF) border-box",
                                border: "1px solid transparent"
                            }}>
                            <h3 className="text-2xl md:text-4xl font-semibold text-main-page-secondary mb-4 leading-tight">
                                Still have questions?
                            </h3>
                            <p className="text-faded-text text-base md:text-md mb-8 opacity-80">
                                Can&apos;t find the answers to your Questions? Drop your Question here and we will get to you as soon as possible!
                            </p>

                            <div className="relative">
                                <div className="flex items-center bg-white rounded-full border border-[#D1D9E6] p-1.5 pl-6 focus-within:border-main-page-secondary transition-all">
                                    <input
                                        type="text"
                                        placeholder="What's on your mind?"
                                        value={userQuestion}
                                        onChange={(e) => setUserQuestion(e.target.value)}
                                        className="w-full bg-transparent text-[#2D2D2D] placeholder-[#9CA3AF] py-3 focus:outline-none text-base"
                                    />
                                    <a
                                        href={`mailto:Info@acadally.com?subject=${encodeURIComponent(userQuestion || "Question from AcadAlly Website")}`}
                                        className="bg-main-page-secondary text-white p-3 rounded-full hover:bg-main-page-secondary/90 transition-colors ml-2 flex-shrink-0"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: FAQ List + View All */}
                    <div className="flex flex-col">
                        <div className="space-y-4 mb-8">
                            {faqData.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === index
                                        ? "bg-main-page-secondary text-white shadow-lg"
                                        : "bg-[#F3F7FF] text-faded-text"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between p-6 md:p-7 text-left focus:outline-none"
                                    >
                                        <span className={`text-lg md:text-xl font-medium leading-snug ${openIndex === index ? "text-white" : "text-faded-text"
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
                                </motion.div>
                            ))}
                        </div>

                        {/* View All Link */}
                        <div className="flex justify-end mt-auto">
                            <Link href="/faq" className="flex items-center gap-2 text-main-page-secondary font-bold text-lg underline underline-offset-4 hover:opacity-80 transition-opacity group">
                                View all FAQs
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
