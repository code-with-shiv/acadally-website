"use client";

import { motion, AnimatePresence } from "motion/react";
import { IoChevronDown } from "react-icons/io5";
import { useEffect, useState } from "react";
import Image from "next/image";
import Confetti from "react-confetti";

interface SchoolFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SchoolFormModal({ isOpen, onClose }: SchoolFormModalProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            // Reset submission state when modal closes
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

    const selectClass =
        "w-full px-3 py-2.5 rounded-lg border border-main-page-secondary/24 bg-[#F1F4FD] focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all appearance-none text-gray-400 text-base font-normal";

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-1000 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
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
                                <div className="space-y-2 ">
                                    <h2 className="text-2xl pr-12 font-bold text-[#1C4CC3] leading-[140%]">
                                        Bring AcadAlly <span className="text-[#1C4CC3]">to your school</span>
                                    </h2>
                                    <p className="text-sm text-gray-700 lg:pr-12  leading-[140%]">
                                        <span className="font-bold">Partner with us and transform</span> how your
                                        students learn. Share your details and we&apos;ll take it from there.
                                    </p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleClose}
                                    className="absolute right-6 top-6 shrink-0"
                                >
                                    <Image
                                        className="cursor-pointer w-[40px] h-[40px]"
                                        src="/modal-close-button-icon.svg"
                                        alt="Close"
                                        width={40}
                                        height={40}
                                    />
                                </motion.button>
                            </div>
                        )}

                        {!isSubmitted && <hr className="border-gray-100 mx-6" />}

                        {/* Form or Thank You Section */}
                        <div className={`px-6 py-6 ${!isSubmitted ? "max-h-[70vh] overflow-y-auto custom-scrollbar" : ""}`}>
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full py-2 flex flex-col items-center justify-center text-center space-y-5 relative"
                                >
                                    {isSubmitted && (
                                        <Confetti
                                            width={420}
                                            height={438}
                                            recycle={false}
                                            numberOfPieces={200}
                                            gravity={0.2}
                                            colors={["#1C4CC3", "#F1F4FD", "#FFFFFF", "#FFD700"]}
                                            style={{ position: "absolute", top: 0, left: 0, zIndex: 10 }}
                                        />
                                    )}
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="relative w-[194px] h-[196px]">
                                            <Image
                                                src="/submission-success-check-mark.svg"
                                                alt="Success"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-[32px] font-semibold text-[#444444] leading-[36px]">
                                                Thank You!
                                            </h2>
                                            <p className="text-gray-600 text-[16px] font-medium max-w-[320px] mx-auto leading-[140%]">
                                                Your details has been successfully submitted
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center">
                                        <motion.button
                                            whileHover={{ scale: 1.05, backgroundColor: "#163ea8" }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleClose}
                                            className="w-[203px] h-[48px] py-3 px-14 flex items-center justify-center gap-2 bg-[#1C4CC3] text-white font-bold rounded-[71px] transition-all text-sm uppercase tracking-wider shadow-lg shadow-blue-200"
                                        >
                                            Okay
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    {/* School Details */}
                                    <div className="space-y-5">
                                        <div className="space-y-2.5">
                                            <label className="text-sm font-medium text-gray-600 block">
                                                School Name<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter School Name"
                                                className="placeholder:text-base placeholder:font-normal w-full px-3 py-2.5 rounded-lg border border-main-page-secondary/24 bg-[#F1F4FD] focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all placeholder:text-gray-400 text-gray-700 font-medium"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-2.5 relative">
                                                <label className="text-sm font-medium text-gray-600 block">
                                                    State<span className="text-red-500">*</span>
                                                </label>

                                                <div className="relative">
                                                    <select className={selectClass} required>
                                                        <option value="">Enter State</option>
                                                        <option value="Delhi">Delhi</option>
                                                        <option value="Maharashtra">Maharashtra</option>
                                                        <option value="Karnataka">Karnataka</option>
                                                    </select>

                                                    <IoChevronDown
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1C4CC3] pointer-events-none"
                                                        size={20}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2.5 relative">
                                                <label className="text-sm font-medium text-gray-600 block">
                                                    City<span className="text-red-500">*</span>
                                                </label>

                                                <div className="relative">
                                                    <select className={selectClass} required>
                                                        <option value="">Enter City</option>
                                                        <option value="New Delhi">New Delhi</option>
                                                        <option value="Mumbai">Mumbai</option>
                                                        <option value="Bangalore">Bangalore</option>
                                                    </select>

                                                    <IoChevronDown
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1C4CC3] pointer-events-none"
                                                        size={20}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Point of Contact */}
                                    <div className="space-y-5">
                                        <h3 className="text-lg font-bold text-main-page-secondary">Point of Contact</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-2.5">
                                                <label className="text-sm font-medium text-gray-600 block">
                                                    Contact Person Name<span className="text-red-500">*</span>
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    className="placeholder:text-base placeholder:font-normal w-full px-3 py-2.5 rounded-lg border border-main-page-secondary/24 bg-[#F1F4FD] focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all placeholder:text-gray-400 text-gray-700 font-medium"
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2.5 relative">
                                                <label className="text-sm font-medium text-gray-600 block">
                                                    Designation<span className="text-red-500">*</span>
                                                </label>

                                                <div className="relative">
                                                    <select className={selectClass} required>
                                                        <option value="">Designation</option>
                                                        <option value="Principal">Principal</option>
                                                        <option value="Director">Director</option>
                                                        <option value="Teacher">Teacher</option>
                                                    </select>

                                                    <IoChevronDown
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1C4CC3] pointer-events-none"
                                                        size={20}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-2.5">
                                                <label className="text-sm font-medium text-gray-600 block">
                                                    Email Address<span className="text-red-500">*</span>
                                                </label>

                                                <input
                                                    type="email"
                                                    placeholder="Enter Address"
                                                    className="placeholder:text-base placeholder:font-normal w-full px-3 py-2.5 rounded-lg border border-main-page-secondary/24 bg-[#F1F4FD] focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all placeholder:text-gray-400 text-gray-700 font-medium"
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2.5">
                                                <label className="text-sm font-medium text-gray-600 block">
                                                    Phone Number<span className="text-red-500">*</span>
                                                </label>

                                                <input
                                                    type="tel"
                                                    placeholder="Enter Phone Number"
                                                    className="placeholder:text-base placeholder:font-normal w-full px-3 py-2.5 rounded-lg border border-main-page-secondary/24 bg-[#F1F4FD] focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all placeholder:text-gray-400 text-gray-700 font-medium"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* About School */}
                                    <div className="space-y-5">
                                        <h3 className="text-lg font-bold text-main-page-secondary">About Your School</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-2.5 relative">
                                                <label className="text-sm font-medium text-gray-600 block">
                                                    Number of Students
                                                </label>

                                                <div className="relative">
                                                    <select className={selectClass}>
                                                        <option value="">Approx. Students</option>
                                                        <option value="< 500">&lt; 500</option>
                                                        <option value="500-1000">500-1000</option>
                                                        <option value="> 1000">&gt; 1000</option>
                                                    </select>

                                                    <IoChevronDown
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1C4CC3] pointer-events-none"
                                                        size={20}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2.5 relative">
                                                <label className="text-sm font-medium text-gray-600 block">
                                                    Board Curriculum
                                                </label>

                                                <div className="relative">
                                                    <select className={selectClass}>
                                                        <option value="">Select Curriculum</option>
                                                        <option value="CBSE">CBSE</option>
                                                        <option value="ICSE">ICSE</option>
                                                        <option value="State Board">State Board</option>
                                                    </select>

                                                    <IoChevronDown
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1C4CC3] pointer-events-none"
                                                        size={20}
                                                    />
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
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}