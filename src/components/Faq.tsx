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
        <section aria-label="Frequently Asked Questions" className="bg-white lg:py-8 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 py-10 px-4 lg:px-20 lg:py-5 lg:block lg:gap-0">
                {/* 1. Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-left lg:mb-12">
                    <Heading
                        as="h2"
                        className="font-medium text-[32px] leading-[1.2] lg:font-semibold lg:text-4xl lg:leading-tight"
                        text={"Frequently Asked Questions"}
                    />
                </motion.div>

                <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">

                    {/* 2. FAQs List (Order 2 on mobile, Right on desktop) */}
                    <div className="flex flex-col order-2 lg:order-2">
                        <div className="flex flex-col gap-4 mb-4 lg:mb-8">
                            {faqData.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`rounded-lg transition-all duration-300 overflow-hidden lg:rounded-2xl ${openIndex === index
                                        ? "bg-main-page-secondary text-white shadow-lg"
                                        : "bg-[#F3F7FF] text-faded-text"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between p-3 md:p-7 text-left focus:outline-none"
                                    >
                                        <span className={`text-xs font-semibold leading-[1.2] lg:text-lg lg:md:text-xl lg:font-medium lg:leading-snug ${openIndex === index ? "text-white" : "text-[#0000007A]"
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <motion.span
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0 ml-4 w-6 h-6"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
                                                <div className="px-3 pb-3 md:px-7 md:pb-8 text-[10px] leading-[1.4] font-normal md:text-sm lg:text-base md:leading-relaxed opacity-90">
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
                            <Link href="/faq" className="flex items-center gap-2 text-main-page-secondary font-bold text-[14px] leading-[20px] lg:text-lg underline underline-offset-4 hover:opacity-80 transition-opacity group align-middle">
                                View all FAQs
                                <svg className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* 3. Search / Still have questions (Order 3 on mobile, Left on desktop) */}
                    <div className="flex flex-col order-3 lg:order-1 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="rounded-xl p-4 md:p-10 relative lg:rounded-3xl"
                            style={{
                                background: "linear-gradient(227.74deg, #F5F8FF -17.95%, #FFFFFF 73.81%) padding-box, linear-gradient(102.44deg, #C5D1EF -4.29%, #FFFFFF 94.58%) border-box",
                                border: "1px solid transparent",
                                boxShadow: "0px 0px 8px 0px #0000001F"
                            }}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h3 className="text-base font-semibold leading-[1.2] lg:text-4xl lg:font-semibold text-main-page-secondary mb-2 lg:mb-4">
                                        Still have questions?
                                    </h3>
                                    <p className="text-[12px] leading-[16px] font-normal text-[#000000CC] lg:text-[#000000CC] lg:text-base md:text-md opacity-80">
                                        Can&apos;t find the answers to your Questions? Drop your Question here and we will get to you as soon as possible!
                                    </p>
                                </div>

                            <div className="relative">
                                <div className="flex items-center bg-white rounded-[30px] border border-[#1C4CC3]/20 h-12 lg:h-auto lg:p-1.5 lg:pl-6 focus-within:border-main-page-secondary transition-all overflow-hidden px-4">
                                    <input
                                        type="text"
                                        placeholder="What's on your mind?"
                                        value={userQuestion}
                                        onChange={(e) => setUserQuestion(e.target.value)}
                                        className="w-full bg-transparent text-[#2D2D2D] placeholder-[#9CA3AF] py-2 focus:outline-none text-xs lg:text-base"
                                    />
                                    <a
                                        href={`mailto:Info@acadally.com?subject=${encodeURIComponent(userQuestion || "Question from AcadAlly Website")}`}
                                        className="bg-main-page-secondary text-white p-2 lg:p-3 rounded-full hover:bg-main-page-secondary/90 transition-colors ml-2 flex-shrink-0"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
