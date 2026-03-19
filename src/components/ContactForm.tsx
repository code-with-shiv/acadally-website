"use client";
import Image from "next/image";
import Link from "next/link";
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
                    <h1 className="text-gray-800 text-[28px] md:text-[40px] font-medium mb-2 md:mb-8 leading-[120%] text-center">
                        Fill Our Form to <br className="md:hidden" /><span className="text-[#1C4CC3] font-bold">Hear from us</span>
                    </h1>
                    <p className="text-gray-600 text-[14px] md:text-base leading-6 md:leading-normal max-w-3xl mx-auto px-2 text-center">
                        We&apos;re here to help you transform your learning experience. Choose the best way to <span className="text-black/60 font-bold">reach us below.</span>
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Left Column - Contact Options */}
                    <div className="flex flex-col justify-between gap-4 lg:gap-6 h-full">
                        {/* Book Demo Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-[#1C4CC314] rounded-[8px] lg:rounded-[12px] p-3 lg:p-6 border border-[#1C4CC329] flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#1C4CC3]  rounded-[3.12px] lg:rounded-xl p-4 flex-shrink-0 border-[0.39px] border-white/20 lg:border lg:border-[#1C4CC3] lg:w-[82px] lg:h-[82px] flex items-center justify-center">
                                    <Image src="/watch-demo-video-play-button.svg" alt="Play" width={32} height={32} className="lg:w-10 lg:h-10" />
                                </div>
                                <div>
                                    <h3 className="text-[12px] lg:text-xl font-bold text-[#1C4CC3] mb-0.5 leading-[16px] lg:leading-tight">Book a Demo with us</h3>
                                    <p className="text-[12px] lg:text-base text-gray-500 leading-[140%] md:leading-normal">See <span className="font-bold text-[#1C4CC3]">AcadAlly</span> in action! Schedule a personalized demo.</p>
                                </div>
                            </div>
                            <div className="text-[#1C4CC3] font-bold text-xl flex-shrink-0 ml-4">
                                <Image src="/form-submit-arrow-icon.svg" alt="Arrow" width={10} height={10} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>

                        {/* Technical Support Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-[#1C4CC314] rounded-[8px] lg:rounded-[12px] p-3 lg:p-6 border border-[#1C4CC329] flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#1C4CC3] rounded-[3.12px] lg:rounded-xl p-4 flex-shrink-0 border-[0.39px] border-white/20 lg:border lg:border-[#1C4CC3] lg:w-[82px] lg:h-[82px] flex items-center justify-center">
                                    <Image src="/headset.svg" alt="Support" width={32} height={32} className="lg:w-10 lg:h-10" />
                                </div>
                                <div>
                                    <h3 className="text-[12px] lg:text-xl font-bold text-[#1C4CC3] mb-0.5 leading-[16px] lg:leading-tight">Technical Support</h3>
                                    <p className="text-[12px] lg:text-base text-gray-500 leading-[140%] md:leading-normal">Need help with the platform? Our technical support team is ready to assist you.</p>
                                </div>
                            </div>
                            <div className="text-[#1C4CC3] font-bold text-xl flex-shrink-0 ml-4">
                                <Image src="/form-submit-arrow-icon.svg" alt="Arrow" width={10} height={10} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>

                        {/* Partnership Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-[#1C4CC314] rounded-[8px] lg:rounded-[12px] p-3 lg:p-6 border border-[#1C4CC329] flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                            <div className="flex items-center gap-4">
                                <div className="bg-[#1C4CC3] rounded-[3.12px] lg:rounded-xl p-4 flex-shrink-0 border-[0.39px] border-white/20 lg:border lg:border-[#1C4CC3] lg:w-[82px] lg:h-[82px] flex items-center justify-center">
                                    <Image src="/contact-partnership.svg" alt="Partnership" width={32} height={32} className="lg:w-10 lg:h-10" />
                                </div>
                                <div>
                                    <h3 className="text-[12px] lg:text-xl font-bold text-[#1C4CC3] mb-0.5 leading-[16px] lg:leading-tight">Partnership</h3>
                                    <p className="text-[12px] lg:text-base text-gray-500 leading-[140%] md:leading-normal">Interested in partnering with <span className="font-bold text-[#1C4CC3]">AcadAlly</span>? Let&apos;s explore collaboration opportunities.</p>
                                </div>
                            </div>
                            <div className="text-[#1C4CC3] font-bold text-xl flex-shrink-0 ml-4">
                                <Image src="/form-submit-arrow-icon.svg" alt="Arrow" width={10} height={10} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>

                        {/* QR Code Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-[#25D36629] lg:bg-[#25D36629] rounded-[8px] lg:rounded-[16px] p-3 lg:p-6 border border-[#25D3663D] relative overflow-hidden h-full flex flex-col">
                            <div className="relative z-10">
                                <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-8">
                                    {/* Top Row for Mobile / Left Section for Desktop: QR and Text */}
                                    <div className="flex items-center gap-4 lg:gap-8 flex-1">
                                        <div className="bg-white rounded-[3.35px] lg:rounded-[8px] p-1 lg:p-2 shadow-sm shrink-0 w-[65px] h-[65px] lg:w-[155px] lg:h-[155px] border-[0.42px] lg:border border-[#C9C9C9] flex items-center justify-center">
                                            <Image src="/QR.svg" alt="QR Code" width={110} height={110} className="w-full h-full" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-[18px] lg:text-[24px] font-bold text-[#383838] lg:text-[#383838] mb-1 leading-[30px] lg:leading-[30px]">Scan this QR code</h3>
                                            <div className="h-px w-full bg-[#1C36261A] my-2" />
                                            <p className="text-[#383838] lg:text-[#383838] text-[14px] lg:text-[16px] font-medium lg:font-medium leading-[20px] lg:leading-[20px]">To Connect directly through</p>

                                            {/* Button for Desktop - Inside the right column */}
                                            <div className="hidden lg:block mt-6">
                                                <Link href="https://wa.me/919289373365" target="_blank" rel="noopener noreferrer">
                                                    <button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-10 rounded-full flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-200 border border-[#25D366]">
                                                        <Image src="/whatsapp.svg" alt="WhatsApp" width={32} height={32} />
                                                        <span className="text-[20px]">WhatsApp</span>
                                                        <Image src="/white-up-arrow.svg" alt="arrow" width={22} height={22} className="translate-x-1" />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Button for Mobile - Spanning full width at the bottom */}
                                    <div className="lg:hidden mt-1">
                                        <Link href="https://wa.me/919289373365" target="_blank" rel="noopener noreferrer" className="block w-full">
                                            <button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-[32px] flex items-center justify-center gap-1 transition-all shadow-lg shadow-green-200 border border-[#25D366]">
                                                <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} className="w-6 h-6" />
                                                <span className="text-xl">WhatsApp</span>
                                                <Image src="/white-up-arrow.svg" alt="arrow" width={18} height={18} className="translate-x-1" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative element background */}
                            <div className="absolute right-[-20px] bottom-[-20px] opacity-20 lg:opacity-100">
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
                        className="bg-[#1C4CC314] lg:bg-[#1C4CC314] rounded-[12px] lg:rounded-[12px] p-3 lg:p-8 border border-[#1C4CC329] lg:border-[#1C4CC329] flex flex-col h-full shadow-sm">
                        <form className="space-y-4 lg:space-y-6 flex-1 flex flex-col justify-between">
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="peer w-full p-3 lg:p-4 rounded-[4px] lg:rounded-[8px] border-none bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-gray-700 shadow-sm"
                                />
                                <label htmlFor="name" className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                                    Name <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="relative group">
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder=" "
                                    className="peer w-full p-3 lg:p-4 rounded-[4px] lg:rounded-[8px] border-none bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-gray-700 shadow-sm"
                                />
                                <label htmlFor="phone" className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="designation"
                                    placeholder=" "
                                    className="peer w-full p-3 lg:p-4 rounded-[4px] lg:rounded-[8px] border-none bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-gray-700 shadow-sm"
                                />
                                <label htmlFor="designation" className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                                    Designation/ Role <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="institute"
                                    placeholder=" "
                                    className="peer w-full p-3 lg:p-4 rounded-[4px] lg:rounded-[8px] border-none bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-gray-700 shadow-sm"
                                />
                                <label htmlFor="institute" className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                                    Institute/ School Name <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="relative group">
                                <input
                                    type="text"
                                    id="city"
                                    placeholder=" "
                                    className="peer w-full p-3 lg:p-4 rounded-[4px] lg:rounded-[8px] border-none bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-gray-700 shadow-sm"
                                />
                                <label htmlFor="city" className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                                    City <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="relative group">
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder=" "
                                    className="peer w-full p-3 lg:p-4 rounded-[4px] lg:rounded-[8px] border-none bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-gray-700 shadow-sm resize-none"
                                />
                                <label htmlFor="message" className="absolute left-3 lg:left-4 top-3 lg:top-4 text-gray-400 pointer-events-none transition-all peer-focus:opacity-0 peer-[:not(:placeholder-shown)]:opacity-0">
                                    Message (Optional)
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full lg:w-full bg-[#1C4CC3] hover:bg-[#163ea8] text-white font-bold py-4 lg:py-5 px-14 lg:px-0 rounded-[120px] lg:rounded-full transition-all text-lg shadow-lg shadow-blue-200 mt-4"
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
