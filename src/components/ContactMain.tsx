"use client";
import Heading from "./Heading";
import BelowHeading from "./BelowHeading";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

export default function ContactMain() {
    return (
        <section className="relative overflow-hidden bg-transparent pt-12 pb-10 md:pt-20 md:pb-16 lg:py-14">

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#EBF2FF] text-[#1C4CC3] px-7 py-2 rounded-full text-sm font-bold mb-6 md:mb-8 shadow-sm border border-[#1C4CC3]/10 tracking-wide">
                    Contact AcadAlly
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6 md:mb-8">
                    <Heading
                        element={
                            <h1 className="text-[#1C4CC3] text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tighter leading-tight">
                                Get in Touch with us
                            </h1>
                        }
                    />
                </motion.div>

                {/* Subheading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-4xl mb-8 md:mb-12">
                    <BelowHeading className="text-gray-600">
                        <span className="text-base font-normal md:text-xl lg:text-2xl leading-relaxed">
                            We&apos;re here to help you <span className="text-[#1C4CC3] font-semibold">transform learning</span> and support your <span className="text-[#1C4CC3] font-semibold">educational journey.</span>
                        </span>
                    </BelowHeading>
                </motion.div>

                {/* Contact Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-6">
                    <a href="tel:+919289373365" className="flex items-center gap-4 bg-[#EBF2FF] p-2 pr-6 rounded-2xl border border-[#1C4CC3]/10 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-[#1C4CC3] rounded-xl flex items-center justify-center text-white shrink-0">
                            <FiPhone size={24} />
                        </div>
                        <span className="text-[#1C4CC3] font-semibold text-sm md:text-base border-b border-[#1C4CC3] pb-0.5">
                            +91 92893 73365
                        </span>
                    </a>

                    <a href="mailto:Info@acadally.com" className="flex items-center gap-4 bg-[#EBF2FF] p-2 pr-6 rounded-2xl border border-[#1C4CC3]/10 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-[#1C4CC3] rounded-xl flex items-center justify-center text-white shrink-0">
                            <FiMail size={24} />
                        </div>
                        <span className="text-[#1C4CC3] font-semibold text-sm md:text-base border-b border-[#1C4CC3] pb-0.5">
                            Info@acadally.com
                        </span>
                    </a>

                    <a href="https://wa.me/919289373365" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#EBF2FF] p-2 pr-6 rounded-2xl border border-[#1C4CC3]/10 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-[#1C4CC3] rounded-xl flex items-center justify-center text-white shrink-0">
                            <FaWhatsapp size={24} />
                        </div>
                        <span className="text-[#1C4CC3] font-semibold text-sm md:text-base border-b border-[#1C4CC3] pb-0.5">
                            Whatsapp Us
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

