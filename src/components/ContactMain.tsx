"use client";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

export default function ContactMain() {
    return (
        <section className="relative overflow-hidden bg-transparent pb-4 md:pt-20 md:pb-8 lg:pt-14 lg:pb-0">

            <div className=" mx-auto relative z-10 flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#1C4CC31A] md:bg-[#1C4CC31F] text-[#1C4CC3] px-4 py-2 rounded-[32px] md:rounded-[120px] text-[10px] md:text-[16px] font-medium md:font-semibold leading-5 md:leading-6 mb-4 md:mb-12 inline-flex items-center justify-center tracking-wide md:tracking-[0.04em] text-center md:gap-[10px]">
                    AcadAlly Customer support
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-4 md:mb-12">

                    <h1 className="text-[#1C4CC3] text-[32px] md:text-[64px] font-semibold tracking-tighter  leading-[120%]">
                        Get in Touch
                    </h1>


                </motion.div>

                {/* Subheading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-4 md:mb-12">
                    <p className="text-black/80 text-[12px] md:text-[20px] font-normal leading-[140%] md:leading-[150%] text-center">
                        We&apos;re here to help you <span className="text-[#1C4CC3] font-semibold">transform learning</span> and support your <span className="text-[#1C4CC3] font-semibold">educational journey.</span>
                    </p>
                </motion.div>

                {/* Contact Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 w-full">
                    <a href="tel:+919289373365" className="w-full md:w-auto flex items-center gap-4 bg-[#EBF2FF] md:bg-[#1C4CC314] p-2 md:p-4 rounded-[8px] md:rounded-[12px] border border-[#1C4CC3]/10  transition-all">
                        <div className="w-6 h-6 md:w-12 md:h-12 bg-[#1C4CC3] rounded-[4px] md:rounded-[8px] flex items-center justify-center text-white shrink-0 p-1 md:p-2">
                            <FiPhone className="w-full h-full" />
                        </div>
                        <span className="text-[#1C4CC3] font-semibold text-sm md:text-[18px] leading-6 underline decoration-solid">
                            +91 92893 73365
                        </span>
                    </a>

                    <a href="mailto:Info@acadally.com" className="w-full md:w-auto flex items-center gap-4 bg-[#EBF2FF] md:bg-[#1C4CC314] p-2 md:p-4 rounded-[8px] md:rounded-[12px] border border-[#1C4CC3]/10 transition-all">
                        <div className="w-6 h-6 md:w-12 md:h-12 bg-[#1C4CC3] rounded-[4px] md:rounded-[8px] flex items-center justify-center text-white shrink-0 p-1 md:p-2">
                            <FiMail className="w-full h-full" />
                        </div>
                        <span className="text-[#1C4CC3] font-semibold text-sm md:text-[18px] leading-6 underline decoration-solid">
                            Info@acadally.com
                        </span>
                    </a>

                    <a href="https://wa.me/919289373365" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto flex items-center gap-4 bg-[#EBF2FF] md:bg-[#1C4CC314] p-2 md:p-4 rounded-[8px] md:rounded-[12px] border border-[#1C4CC3]/10 transition-all">
                        <div className="w-6 h-6 md:w-12 md:h-12 bg-[#1C4CC3] rounded-[4px] md:rounded-[8px] flex items-center justify-center text-white shrink-0 p-1 md:p-2">
                            <FaWhatsapp className="w-full h-full" />
                        </div>
                        <span className="text-[#1C4CC3] font-semibold text-sm md:text-[18px] leading-6 underline decoration-solid">
                            Whatsapp Us
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

