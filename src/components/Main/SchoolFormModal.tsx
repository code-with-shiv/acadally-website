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
    const [formValues, setFormValues] = useState({
        state: "",
        city: "",
        designation: "",
        students: "",
        curriculum: ""
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
                                            className="w-full bg-[#1C4CC3] text-white font-bold py-3 px-14 rounded-[71px] transition-all text-sm uppercase tracking-wider shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                                        >
                                            Okay
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ) : (
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    {/* School Details */}
                                    <div className="space-y-2">
                                        <div className="space-y-1">
                                            <label className="text-xs font-medium leading-[1.4] text-gray-600 block">
                                                School Name<span className="text-red-500 font-bold">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter School Name"
                                                className="placeholder:text-base placeholder:font-normal placeholder:leading-[1.4] placeholder:text-[#000000A3] w-full px-[11px] py-3 rounded-lg border border-[#1C4CC3]/24 bg-[#1C4CC3]/4 focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all text-gray-700 font-medium"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <div className="space-y-1 relative">
                                                <label className="text-[12px] font-medium leading-[1.4] text-gray-600 block">
                                                    State<span className="text-red-500 font-bold">*</span>
                                                </label>

                                                <div className="relative">
                                                    <select
                                                        className={getSelectClass(formValues.state)}
                                                        value={formValues.state}
                                                        onChange={(e) => setFormValues({ ...formValues, state: e.target.value })}
                                                        required
                                                    >
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

                                            <div className="space-y-1 relative">
                                                <label className="text-[12px] font-medium leading-[1.4] text-gray-600 block">
                                                    City<span className="text-red-500 font-bold">*</span>
                                                </label>

                                                <div className="relative">
                                                    <select
                                                        className={getSelectClass(formValues.city)}
                                                        value={formValues.city}
                                                        onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
                                                        required
                                                    >
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
                                    <div className="space-y-2">
                                        <h3 className="text-[16px] font-bold text-main-page-secondary leading-[1.4]">Point of Contact</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <div className="space-y-1">
                                                <label className="text-[12px] font-medium leading-[1.4] text-gray-600 block">
                                                    Contact Person Name<span className="text-red-500 font-bold">*</span>
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    className="placeholder:text-base placeholder:font-normal placeholder:leading-[1.4] placeholder:text-[#000000A3] w-full px-[11px] py-3 rounded-lg border border-[#1C4CC3]/24 bg-[#1C4CC3]/4 focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all text-gray-700 font-medium"
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1 relative">
                                                <label className="text-[12px] font-medium leading-[1.4] text-gray-600 block">
                                                    Designation<span className="text-red-500 font-bold">*</span>
                                                </label>

                                                <div className="relative">
                                                    <select
                                                        className={getSelectClass(formValues.designation)}
                                                        value={formValues.designation}
                                                        onChange={(e) => setFormValues({ ...formValues, designation: e.target.value })}
                                                        required
                                                    >
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

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <div className="space-y-1">
                                                <label className="text-[12px] font-medium leading-[1.4] text-gray-600 block">
                                                    Email Address<span className="text-red-500 font-bold">*</span>
                                                </label>

                                                <input
                                                    type="email"
                                                    placeholder="Enter Address"
                                                    className="placeholder:text-base placeholder:font-normal placeholder:leading-[1.4] placeholder:text-[#000000A3] w-full px-[11px] py-3 rounded-lg border border-[#1C4CC3]/24 bg-[#1C4CC3]/4 focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all text-gray-700 font-medium"
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[12px] font-medium leading-[1.4] text-gray-600 block">
                                                    Phone Number<span className="text-red-500 font-bold">*</span>
                                                </label>

                                                <input
                                                    type="tel"
                                                    placeholder="Enter Phone Number"
                                                    className="placeholder:text-base placeholder:font-normal placeholder:leading-[1.4] placeholder:text-[#000000A3] w-full px-[11px] py-3 rounded-lg border border-[#1C4CC3]/24 bg-[#1C4CC3]/4 focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all text-gray-700 font-medium"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* About School */}
                                    <div className="space-y-2">
                                        <h3 className="text-[16px] font-bold text-main-page-secondary leading-[1.4]">About Your School</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <div className="space-y-1 relative">
                                                <label className="text-[12px] font-medium leading-[1.4] text-gray-600 block">
                                                    Number of Students
                                                </label>

                                                <div className="relative">
                                                    <select
                                                        className={getSelectClass(formValues.students)}
                                                        value={formValues.students}
                                                        onChange={(e) => setFormValues({ ...formValues, students: e.target.value })}
                                                    >
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

                                            <div className="space-y-1 relative">
                                                <label className="text-[12px] font-medium leading-[1.4] text-gray-600 block">
                                                    Board Curriculum
                                                </label>

                                                <div className="relative">
                                                    <select
                                                        className={getSelectClass(formValues.curriculum)}
                                                        value={formValues.curriculum}
                                                        onChange={(e) => setFormValues({ ...formValues, curriculum: e.target.value })}
                                                    >
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
                                            className="w-full bg-[#1C4CC3] text-white font-bold py-3 px-14 rounded-[71px] transition-all text-[16px] leading-[24px] tracking-[0.02em] flex items-center justify-center gap-2 uppercase shadow-xl shadow-blue-100"
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