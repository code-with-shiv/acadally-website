"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function ContactForm() {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 xl:px-27">
            {/* Background decorative elements */}

            <div className="relative z-10 py-8 sm:py-12 md:py-16">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4 leading-tight">
                        Fill Our Form to <span className="text-[#1C4CC3]">Hear from us</span>
                    </h1>
                    <p className="text-base  text-gray-600 max-w-3xl mx-auto px-2">
                        We&apos;re here to help you transform your learning experience. Choose the best way to <span className="text-black/60 font-bold">reach us below.</span>
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Left Column - Contact Options */}
                    <div className="flex flex-col justify-between gap-6 order-2 lg:order-1 h-full">
                        {/* Book Demo Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-[#EBF2FF] rounded-2xl p-6 border border-blue-100 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#1C4CC3] rounded-xl p-4 flex-shrink-0">
                                    <Image src="/contact-play.svg" alt="Play" width={32} height={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1C4CC3] mb-1">Book a Demo with us</h3>
                                    <p className="text-base text-gray-500">See <span className="font-bold text-[#1C4CC3]">AcadAlly</span> in action! Schedule a personalized demo.</p>
                                </div>
                            </div>
                            <div className="text-[#1C4CC3] font-bold text-xl flex-shrink-0 ml-4">
                                <Image src="/right-bracket.svg" alt="Arrow" width={10} height={10} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>

                        {/* Technical Support Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-[#EBF2FF] rounded-2xl p-6 border border-blue-100 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#1C4CC3] rounded-xl p-4 flex-shrink-0">
                                    <Image src="/contact-customer.svg" alt="Support" width={32} height={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1C4CC3] mb-1">Technical Support</h3>
                                    <p className="text-base text-gray-500">Need help with the platform? Our technical support team is ready to assist you.</p>
                                </div>
                            </div>
                            <div className="text-[#1C4CC3] font-bold text-xl flex-shrink-0 ml-4">
                                <Image src="/right-bracket.svg" alt="Arrow" width={10} height={10} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>

                        {/* Partnership Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-[#EBF2FF] rounded-2xl p-6 border border-blue-100 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#1C4CC3] rounded-xl p-4 flex-shrink-0">
                                    <Image src="/contact-partnership.svg" alt="Partnership" width={32} height={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1C4CC3] mb-1">Partnership</h3>
                                    <p className="text-base text-gray-500">Interested in partnering with <span className="font-bold text-[#1C4CC3]">AcadAlly</span>? Let&apos;s explore collaboration opportunities.</p>
                                </div>
                            </div>
                            <div className="text-[#1C4CC3] font-bold text-xl flex-shrink-0 ml-4">
                                <Image src="/right-bracket.svg" alt="Arrow" width={10} height={10} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>

                        {/* QR Code Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-[#EAFBF0] rounded-2xl p-6 border border-green-50 px-8 relative overflow-hidden h-full flex flex-col justify-center">
                            <div className="flex items-center gap-8 relative z-10">
                                <div className="bg-white rounded-2xl p-4 shadow-sm flex-shrink-0">
                                    <Image src="/QR.svg" alt="QR Code" width={110} height={110} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-[#1C3626] mb-1">Scan this QR code</h3>
                                    <p className="text-[#1C3626]/70 mb-6 text-lg">To Connect directly through</p>
                                    <button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg shadow-green-200">
                                        <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
                                        WhatsApp
                                        <Image src="/white-up-arrow.svg" alt="arrow" width={18} height={18} className="translate-x-1" />
                                    </button>
                                </div>
                            </div>
                            {/* Decorative element background */}
                            <div className="absolute right-[-20px] bottom-[-20px]">
                                <Image src="/whatsapp-bg.svg" alt="bg" width={150} height={150} />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#F1F4FD] rounded-3xl p-8 sm:p-10 border border-blue-50 order-1 lg:order-2 flex flex-col h-full shadow-sm">
                        <form className="space-y-5 flex-1 flex flex-col justify-between">
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="peer w-full px-5 py-4 rounded-xl border-none bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-gray-700 shadow-sm"
                                />
                                <label htmlFor="name" className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                                    Name <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="relative group">
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder=" "
                                    className="peer w-full px-5 py-4 rounded-xl border-none bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-gray-700 shadow-sm"
                                />
                                <label htmlFor="phone" className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="designation"
                                    placeholder=" "
                                    className="peer w-full px-5 py-4 rounded-xl border-none bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-gray-700 shadow-sm"
                                />
                                <label htmlFor="designation" className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                                    Designation/ Role <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="institute"
                                    placeholder=" "
                                    className="peer w-full px-5 py-4 rounded-xl border-none bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-gray-700 shadow-sm"
                                />
                                <label htmlFor="institute" className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                                    Institute/ School Name <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="city"
                                    placeholder=" "
                                    className="peer w-full px-5 py-4 rounded-xl border-none bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-gray-700 shadow-sm"
                                />
                                <label htmlFor="city" className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                                    City <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="relative group">
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder=" "
                                    className="peer w-full px-5 py-4 rounded-xl border-none bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-gray-700 shadow-sm resize-none"
                                />
                                <label htmlFor="message" className="absolute left-5 top-4 text-gray-400 pointer-events-none transition-all peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                                    Message (Optional)
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#1C4CC3] hover:bg-[#163ea8] text-white font-bold py-5 rounded-full transition-all text-lg shadow-lg shadow-blue-200 mt-4"
                            >
                                Submit
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
