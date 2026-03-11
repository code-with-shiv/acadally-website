"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { IoClose, IoChevronDown } from "react-icons/io5";
import Confetti from "react-confetti";

interface DemoFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DemoFormModal({ isOpen, onClose }: DemoFormModalProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            const timer = setTimeout(() => setIsSubmitted(false), 300);
            return () => clearTimeout(timer);
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-1000 flex items-center justify-center p-4 backdrop-blur-sm bg-black/40">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className={`relative w-full ${isSubmitted ? "max-w-[420px] h-[438px]" : "max-w-[540px]"} bg-white rounded-[24px] shadow-2xl overflow-hidden`}
                    >
                        {/* Header */}
                        {!isSubmitted && (
                            <div className="px-6 pt-6 pb-4 relative">
                                <div className="space-y-2">
                                    <h2 className="text-2xl pr-12 font-bold text-[#1C4CC3] leading-[140%]">
                                        Book a live demo <span className="text-[#1C4CC3]">for your school</span>
                                    </h2>
                                    <p className="text-sm text-gray-700 lg:pr-12 leading-[140%]">
                                        <span className="font-bold text-gray-700">AcadAlly only teaches grades from</span> <span className="text-[#FF8A00] font-bold">6th till 10th</span>
                                    </p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onClose}
                                    className="absolute right-6 top-6 shrink-0"
                                >
                                    <Image
                                        className="cursor-pointer w-[40px] h-[40px]"
                                        src="/form-close.svg"
                                        alt="Close"
                                        width={40}
                                        height={40}
                                    />
                                </motion.button>
                            </div>
                        )}

                        {!isSubmitted && <hr className="border-gray-100 mx-6" />}

                        {/* Form padding matching SchoolFormModal */}
                        <div className={`px-6 py-6 ${!isSubmitted ? "max-h-[70vh] overflow-y-auto custom-scrollbar" : ""}`}>
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            {/* Your Name */}
                                            <div className="space-y-2.5">
                                                <label className="text-sm font-medium text-gray-600 block">Your Name<span className="text-red-500">*</span></label>
                                                <input type="text" placeholder="Enter Your Name" className="placeholder:text-base placeholder:font-normal w-full px-3 py-2.5 rounded-lg border border-main-page-secondary/24 bg-[#F1F4FD] focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all placeholder:text-gray-400 text-gray-700 font-medium" required />
                                            </div>
                                            {/* School Name */}
                                            <div className="space-y-2.5">
                                                <label className="text-sm font-medium text-gray-600 block">School Name<span className="text-red-500">*</span></label>
                                                <input type="text" placeholder="Enter School Name" className="placeholder:text-base placeholder:font-normal w-full px-3 py-2.5 rounded-lg border border-main-page-secondary/24 bg-[#F1F4FD] focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all placeholder:text-gray-400 text-gray-700 font-medium" required />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            {/* Email Address */}
                                            <div className="space-y-2.5">
                                                <label className="text-sm font-medium text-gray-600 block">Email Address<span className="text-red-500">*</span></label>
                                                <input type="email" placeholder="Enter Email Address" className="placeholder:text-base placeholder:font-normal w-full px-3 py-2.5 rounded-lg border border-main-page-secondary/24 bg-[#F1F4FD] focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all placeholder:text-gray-400 text-gray-700 font-medium" required />
                                            </div>
                                            {/* Phone Number */}
                                            <div className="space-y-2.5">
                                                <label className="text-sm font-medium text-gray-600 block">Phone Number<span className="text-red-500">*</span></label>
                                                <input type="tel" placeholder="Enter Phone Number" className="placeholder:text-base placeholder:font-normal w-full px-3 py-2.5 rounded-lg border border-main-page-secondary/24 bg-[#F1F4FD] focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all placeholder:text-gray-400 text-gray-700 font-medium" required />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            {/* Pick a Date */}
                                            <div className="space-y-2.5">
                                                <label className="text-sm font-medium text-gray-600 block">Pick a Date for Demo<span className="text-red-500">*</span></label>
                                                <input type="text" placeholder="dd/mm/yy" className="placeholder:text-base placeholder:font-normal w-full px-3 py-2.5 rounded-lg border border-main-page-secondary/24 bg-[#F1F4FD] focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all placeholder:text-gray-400 text-gray-700 font-medium" required />
                                            </div>
                                            {/* Pick Time Slot */}
                                            <div className="space-y-2.5 relative">
                                                <label className="text-sm font-medium text-gray-600 block">Pick Time Slot for Demo<span className="text-red-500">*</span></label>
                                                <div className="relative">
                                                    <select className="w-full px-3 py-2.5 rounded-lg border border-main-page-secondary/24 bg-[#F1F4FD] focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all appearance-none text-gray-400 text-base font-normal" required defaultValue="">
                                                        <option value="" disabled>Pick Time Slot</option>
                                                        <option value="morning">Morning (9 AM - 12 PM)</option>
                                                        <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                                                        <option value="evening">Evening (3 PM - 6 PM)</option>
                                                    </select>
                                                    <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1C4CC3] pointer-events-none" size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 flex justify-end pb-2">
                                        <motion.button
                                            whileHover={{ scale: 1.02, backgroundColor: "#163ea8" }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            className="w-[203px] h-[48px] bg-[#1C4CC3] text-white font-bold py-3 px-[56px] rounded-[71px] transition-all text-base shadow-xl shadow-blue-100 flex items-center justify-center uppercase tracking-wide"
                                        >
                                            Submit
                                        </motion.button>
                                    </div>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full py-2 flex flex-col items-center justify-center text-center space-y-5 relative"
                                >
                                    <Confetti width={420} height={438} recycle={false} numberOfPieces={200} gravity={0.2} colors={["#1C4CC3", "#F1F4FD", "#FFFFFF", "#FFD700"]} style={{ position: "absolute", top: 0, left: 0, zIndex: 10 }} />
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="relative w-[194px] h-[196px]">
                                            <Image src="/submission-success-check-mark.svg" alt="Success" fill className="object-contain" />
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-[32px] font-semibold text-[#444444] leading-[36px]">Thank You!</h2>
                                            <p className="text-gray-600 text-[16px] font-medium max-w-[320px] mx-auto leading-[140%]">
                                                Your details has been successfully submitted
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center">
                                        <motion.button
                                            whileHover={{ scale: 1.05, backgroundColor: "#163ea8" }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={onClose}
                                            className="w-[203px] h-[48px] py-3 px-14 flex items-center justify-center gap-2 bg-[#1C4CC3] text-white font-bold rounded-[71px] transition-all text-sm uppercase tracking-wider shadow-lg shadow-blue-200"
                                        >
                                            Okay
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
