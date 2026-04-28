"use client";

import { motion, AnimatePresence } from "motion/react";
import { IoChevronDown } from "react-icons/io5";
import { useEffect, useState } from "react";
import Image from "next/image";
import Confetti from "react-confetti";
import { isValidEmailOrMobile } from "@/lib/utils";

interface SchoolFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SchoolFormModal({ isOpen, onClose }: SchoolFormModalProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [contactError, setContactError] = useState("");
    const [formValues, setFormValues] = useState({
        name: "",
        designation: "",
        schoolName: "",
        emailPhone: ""
    });

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

        if (!isValidEmailOrMobile(formValues.emailPhone)) {
            setContactError("Please enter a valid email address or mobile number.");
            return;
        }

        setContactError("");
        setIsSubmitted(true);
    };

    const handleClose = () => {
        onClose();
    };

    const getSelectClass = (value: string) =>
        `w-full px-[11px] py-3 rounded-lg border border-[#1C4CC3]/24 bg-[#1C4CC3]/4 focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all appearance-none text-[16px] leading-[1.4] ${value === "" ? "text-[#000000A3] font-normal" : "text-gray-700 font-medium"
        }`;

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
                        className={`relative w-full ${isSubmitted ? "max-w-[420px] rounded-[24px]" : "max-w-[540px] rounded-2xl lg:rounded-[24px]"} bg-white shadow-2xl overflow-hidden`}
                    >
                        {/* Header */}
                        {!isSubmitted && (
                            <div className="p-4 lg:px-6 lg:pt-6 lg:pb-4 relative">
                                <div className="space-y-2 ">
                                    <h2 className="text-[18px] pr-12 font-medium font-poppins text-[#1C4CC3] leading-[1.4] lg:text-2xl lg:font-bold">
                                        <span className="font-bold">Bring AcadAlly</span> to your school
                                    </h2>
                                    <p className="text-xs font-medium text-gray-700 lg:pr-12 leading-[1.4] lg:text-sm">
                                        <span className="font-bold">Partner with us and transform</span> how your
                                        students learn. Share your details and we&apos;ll take it from there.
                                    </p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleClose}
                                    className="absolute right-4 top-4 lg:right-6 lg:top-6 shrink-0"
                                >
                                    <Image
                                        className="cursor-pointer w-8 h-8 lg:w-10 lg:h-10"
                                        src="/form-close.svg"
                                        alt="Close"
                                        width={40}
                                        height={40}
                                    />
                                </motion.button>
                            </div>
                        )}

                        {!isSubmitted && <hr className="border-gray-100 mx-4 lg:mx-6" />}

                        {/* Form or Thank You Section */}
                        <div className={`p-4 lg:px-6 lg:py-6 ${!isSubmitted ? "max-h-[70vh] overflow-y-auto custom-scrollbar" : ""}`}>
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full px-6 py-8 flex flex-col items-center justify-center text-center space-y-8 relative"
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
                                        <div className="relative w-[150px] h-[150px]">
                                            <Image
                                                src="/submission-success-check-mark.svg"
                                                alt="Success"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-[32px] font-semibold text-[#666666] leading-[36px]">
                                                Thank You!
                                            </h2>
                                            <p className="text-gray-600 text-[16px] font-normal max-w-[320px] mx-auto leading-none text-center">
                                                Your details has been successfully submitted
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center">
                                        <motion.button
                                            whileHover={{ scale: 1.05, backgroundColor: "#163ea8" }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleClose}
                                            className="w-full bg-[#1C4CC3] text-white font-bold py-3 px-14 rounded-[71px] transition-all text-sm  tracking-wider shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                                        >
                                            Okay
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ) : (
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    {/* Name */}
                                    <div className="space-y-1">
                                        <label className="text-[12px] font-medium leading-[1.4] text-gray-600 block">
                                            Name<span className="text-red-500 font-bold">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            value={formValues.name}
                                            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                                            className="placeholder:text-base placeholder:font-normal placeholder:leading-[1.4] placeholder:text-[#000000A3] w-full px-[11px] py-3 rounded-lg border border-[#1C4CC3]/24 bg-[#1C4CC3]/4 focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all text-gray-700 font-medium"
                                            required
                                        />
                                    </div>

                                    {/* Designation */}
                                    <div className="space-y-1 relative">
                                        <label className="text-[12px] font-medium leading-[1.4] text-gray-600 block">
                                            Designation
                                        </label>

                                        <div className="relative">
                                            <select
                                                className={getSelectClass(formValues.designation)}
                                                value={formValues.designation}
                                                onChange={(e) => setFormValues({ ...formValues, designation: e.target.value })}
                                            >
                                                <option value="">Designation</option>
                                                <option value="Principal">Principal</option>
                                                <option value="Director">Director</option>
                                                <option value="Teacher">Teacher</option>
                                                <option value="Other">Other</option>
                                            </select>

                                            <IoChevronDown
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1C4CC3] pointer-events-none"
                                                size={20}
                                            />
                                        </div>
                                    </div>

                                    {/* School Name */}
                                    <div className="space-y-1">
                                        <label className="text-xs font-medium leading-[1.4] text-gray-600 block">
                                            School Name<span className="text-red-500 font-bold">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter School Name"
                                            value={formValues.schoolName}
                                            onChange={(e) => setFormValues({ ...formValues, schoolName: e.target.value })}
                                            className="placeholder:text-base placeholder:font-normal placeholder:leading-[1.4] placeholder:text-[#000000A3] w-full px-[11px] py-3 rounded-lg border border-[#1C4CC3]/24 bg-[#1C4CC3]/4 focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all text-gray-700 font-medium"
                                            required
                                        />
                                    </div>

                                    {/* Email & Mobile */}
                                    <div className="space-y-1">
                                        <label className="text-[12px] font-medium leading-[1.4] text-gray-600 block">
                                            Email & Mobile<span className="text-red-500 font-bold">*</span>
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter Email or Mobile"
                                            value={formValues.emailPhone}
                                            onChange={(e) => {
                                                setFormValues({ ...formValues, emailPhone: e.target.value });
                                                if (contactError) {
                                                    setContactError("");
                                                }
                                            }}
                                            className="placeholder:text-base placeholder:font-normal placeholder:leading-[1.4] placeholder:text-[#000000A3] w-full px-[11px] py-3 rounded-lg border border-[#1C4CC3]/24 bg-[#1C4CC3]/4 focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all text-gray-700 font-medium"
                                            required
                                        />
                                        {contactError && (
                                            <p className="text-xs text-red-500 font-medium">{contactError}</p>
                                        )}
                                    </div>

                                    <div className="pt-4 flex justify-end pb-2">
                                        <motion.button
                                            whileHover={{ scale: 1.02, backgroundColor: "#163ea8" }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            className="w-full bg-[#1C4CC3] text-white font-bold py-3 px-14 rounded-[71px] transition-all text-[16px] leading-[24px] tracking-[0.02em] flex items-center justify-center gap-2  shadow-xl shadow-blue-100"
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