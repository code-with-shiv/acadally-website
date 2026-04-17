"use client";

import React, { useState, useEffect } from "react";
import PaddingWrapper from "@/components/PaddingWrapper";
import { FiMapPin, FiBriefcase, FiClock, FiCreditCard, FiUpload } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import Confetti from "react-confetti";

// For demo purposes, we will display generic content based on the Product Manager role.
export default function JobDetailsPage() {
    const [isApplying, setIsApplying] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans pb-20 overflow-hidden relative">

            <main className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-12 relative z-10 text-left">

                {/* Header Section */}
                <div className="mb-10 w-full">
                    <h1 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#333333] mb-6 tracking-tight">
                        Product Manager (EdTech & AI)
                    </h1>

                    {/* Meta Info Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 w-full">
                        {/* Location */}
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-2 text-[#9CA3AF] font-medium text-xs md:text-sm">
                                <FiMapPin className="text-[1rem]" /> Location
                            </div>
                            <span className="text-[#1C4CC3] font-bold text-sm md:text-base">Okhla, New Delhi</span>
                        </div>

                        {/* Department */}
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-2 text-[#9CA3AF] font-medium text-xs md:text-sm">
                                <FiBriefcase className="text-[1rem]" /> Department
                            </div>
                            <span className="text-[#1C4CC3] font-bold text-sm md:text-base">Product</span>
                        </div>

                        {/* Type */}
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-2 text-[#9CA3AF] font-medium text-xs md:text-sm">
                                <FiClock className="text-[1rem]" /> Type
                            </div>
                            <span className="text-[#1C4CC3] font-bold text-sm md:text-base">Full-Time</span>
                        </div>

                        {/* Salary */}
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center gap-2 text-[#9CA3AF] font-medium text-xs md:text-sm">
                                <FiCreditCard className="text-[1rem]" /> Salary
                            </div>
                            <span className="text-[#1C4CC3] font-bold text-sm md:text-base">Not Disclosed</span>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-200 w-full mb-10" />

                {/* Job Details Content */}
                <div className="flex flex-col gap-8 text-gray-600 font-medium text-sm md:text-base leading-relaxed w-full">

                    <p>
                        We are seeking a visionary Product Manager to take the helm of our core product strategy. This is a high-impact role where you will sit at the intersection of technology, pedagogy, and business, turning complex educational challenges into seamless digital experiences.
                    </p>

                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-[#333333] mb-3">The Role</h2>
                        <p>
                            As a Product Manager at AcadAlly, you will own the product lifecycle end-to-end. You aren't just managing tasks; you are defining the roadmap that will dictate how 100k+ students learn every day. You will collaborate directly with our founders and cross-functional teams to ensure our AI-powered tools are both technically robust and educationally sound.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-[#333333] mb-5">What You'll Do</h2>
                        <ul className="flex flex-col gap-4 pl-1 md:pl-2">
                            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#515151] flex-shrink-0"></span>
                                <span><strong className="text-gray-600 font-bold">Strategic Roadmap Ownership:</strong> Define and execute a product vision that aligns with long-term business goals and tangible student learning outcomes.</span>
                            </li>
                            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#515151] flex-shrink-0"></span>
                                <span><strong className="text-gray-600 font-bold">Data-Driven Iteration:</strong> Leverage advanced analytics (Mixpanel, GA, SQL) to decode user behavior, conducting A/B tests and cohort analyses to refine features.</span>
                            </li>
                            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#515151] flex-shrink-0"></span>
                                <span><strong className="text-gray-600 font-bold">Cross-Functional Leadership:</strong> Act as the bridge between Engineering, UI/UX Design, and our Academic Experts to ensure every feature is pedagogically grounded.</span>
                            </li>
                            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#515151] flex-shrink-0"></span>
                                <span><strong className="text-gray-600 font-bold">User Advocacy:</strong> Spend time with the "boots on the ground"-teachers, students, and school administrators-to translate their pain points into detailed PRDs and user stories.</span>
                            </li>
                            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#515151] flex-shrink-0"></span>
                                <span><strong className="text-gray-600 font-bold">Lifecycle Management:</strong> Oversee the transition of features from conceptual wireframes to full-scale deployment and post-launch optimization.</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-[#333333] mb-5 mt-4">What We're Looking For</h2>
                        <ul className="flex flex-col gap-4 pl-1 md:pl-2">
                            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#515151] flex-shrink-0"></span>
                                <span><strong className="text-gray-600 font-bold">Experience:</strong> 4-5 years in Product Management, specifically within the EdTech ecosystem.</span>
                            </li>
                            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#515151] flex-shrink-0"></span>
                                <span><strong className="text-gray-600 font-bold">Technical Literacy:</strong> A firm grasp of AI/ML concepts and how they can be applied to personalization, automated assessments, and predictive analytics.</span>
                            </li>
                            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#515151] flex-shrink-0"></span>
                                <span><strong className="text-gray-600 font-bold">Analytical Rigor:</strong> The ability to move beyond "gut feelings" by using data to justify every product decision.</span>
                            </li>
                            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#515151] flex-shrink-0"></span>
                                <span><strong className="text-gray-600 font-bold">Agile Mastery:</strong> Experience leading Scrum teams and managing sprints in a fast-paced startup environment.</span>
                            </li>
                            <li className="flex items-start gap-3 md:gap-4 text-sm md:text-base">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#515151] flex-shrink-0"></span>
                                <span><strong className="text-gray-600 font-bold">Education Focus:</strong> A deep understanding of B2B or B2B2C educational dynamics and the nuances of institutional sales/adoption.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-gray-200 mt-8 mb-6 w-full" />

                {/* Apply Actions */}
                {/* Apply Actions */}
                <div className="flex justify-end w-full pb-8">
                    <button
                        onClick={() => {
                            if (!isApplying) {
                                setIsApplying(true);
                                setIsSubmitted(false);
                                setCurrentStep(1);
                                setTimeout(() => {
                                    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            } else {
                                setIsApplying(false);
                            }
                        }}
                        className={`${isApplying ? 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 bg-opacity-90' : 'bg-[#1C4CC3] hover:bg-[#153B98] text-white shadow-md'} font-bold py-2.5 px-6 rounded-full transition-all active:scale-95 text-sm flex items-center justify-center gap-2`}>
                        {isApplying ? 'Close Application' : 'Apply for this Job'}
                        {!isApplying && <BsChevronDown strokeWidth={0.8} />}
                    </button>
                </div>

                {isApplying && (
                    /* Application Form Container */
                    <div id="application-form" className="w-full mx-auto border border-gray-200 rounded-2xl p-6 md:p-10 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.02)] mt-8 mb-12 relative scroll-mt-24">

                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center py-20 px-4 animate-in zoom-in duration-500 rounded-2xl relative overflow-hidden bg-white w-full border border-gray-100">
                                {/* React Confetti */}
                                <div className="absolute inset-0 z-0 pointer-events-none">
                                    {windowSize.width > 0 && (
                                        <Confetti
                                            width={windowSize.width}
                                            height={windowSize.height}
                                            recycle={false}
                                            numberOfPieces={400}
                                            gravity={0.15}
                                        />
                                    )}
                                </div>

                                {/* Success Badge */}
                                <div className="w-28 h-28 bg-[#68D391] rounded-full flex items-center justify-center mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.1)] z-10 relative">
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-14 h-14 text-white stroke-[3.5]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>

                                <h3 className="text-[2rem] font-bold text-[#1C4CC3] mb-4 z-10 relative tracking-tight">Congratulations!</h3>
                                <p className="text-[#515151] font-medium text-center z-10 relative text-lg mb-8">
                                    You have successfully applied for <br /> <strong className="text-[#333333]">Sr Product Manager</strong>
                                </p>
                            </div>
                        ) : (
                            <>
                                {/* Progress Stepper */}
                                <div className="flex items-center justify-between mb-12 relative w-full max-w-[600px] mx-auto">
                                    {/* Line connecting circles */}
                                    <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-[#C4C4C4] z-0 rounded overflow-hidden">
                                        <div className={`h-full bg-[#93C926] transition-all duration-300 ${currentStep === 1 ? 'w-0' : currentStep === 2 ? 'w-1/2' : 'w-full'}`}></div>
                                    </div>

                                    {/* Step 1 */}
                                    <div className="flex flex-col items-center relative z-10">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[1rem] ${currentStep > 1 ? 'bg-[#93C926] text-white' : currentStep === 1 ? 'bg-[#1C4CC3] text-white shadow-md' : 'bg-[#C4C4C4] text-white'} transition-all`}>
                                            1
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex flex-col items-center relative z-10">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[1rem] ${currentStep > 2 ? 'bg-[#93C926] text-white' : currentStep === 2 ? 'bg-[#1C4CC3] text-white shadow-md' : 'bg-[#C4C4C4] text-white'} transition-all`}>
                                            2
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="flex flex-col items-center relative z-10">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[1rem] ${currentStep > 3 ? 'bg-[#93C926] text-white' : currentStep === 3 ? 'bg-[#1C4CC3] text-white shadow-md' : 'bg-[#C4C4C4] text-white'} transition-all`}>
                                            3
                                        </div>
                                    </div>
                                </div>

                                {/* Step 1 Content */}
                                {currentStep === 1 && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h3 className="text-xl md:text-[22px] font-bold text-[#333333] mb-2 tracking-tight">Personal Information</h3>
                                        <p className="text-[#9CA3AF] text-[0.95rem] mb-10 font-medium">Let's start with the basics - how can we reach you?</p>

                                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full">
                                            {/* Full Name */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-[#515151]">
                                                    Full Name <span className="text-[#E02424]">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Eg. Priya Sharma"
                                                    className="w-full border border-gray-200 rounded-[10px] px-4 py-[14px] text-[0.95rem] focus:outline-none focus:border-[#1C4CC3] focus:ring-1 focus:ring-[#1C4CC3] transition-colors placeholder-[#D1D5DB] font-medium text-[#333333]"
                                                />
                                            </div>

                                            {/* Email Address */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-[#515151]">
                                                    Email Address <span className="text-[#E02424]">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="priya@example.com"
                                                    className="w-full border border-gray-200 rounded-[10px] px-4 py-[14px] text-[0.95rem] focus:outline-none focus:border-[#1C4CC3] focus:ring-1 focus:ring-[#1C4CC3] transition-colors placeholder-[#D1D5DB] font-medium text-[#333333]"
                                                />
                                            </div>

                                            {/* Phone Number */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-[#515151]">
                                                    Phone Number <span className="text-[#E02424]">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    placeholder="83927XXXX729"
                                                    className="w-full border border-gray-200 rounded-[10px] px-4 py-[14px] text-[0.95rem] focus:outline-none focus:border-[#1C4CC3] focus:ring-1 focus:ring-[#1C4CC3] transition-colors placeholder-[#D1D5DB] font-medium text-[#333333]"
                                                />
                                            </div>

                                            {/* LinkedIn */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-[#515151]">
                                                    LinkedIn Profile URL
                                                </label>
                                                <input
                                                    type="url"
                                                    placeholder="https://linkedin.yourprofile"
                                                    className="w-full border border-gray-200 rounded-[10px] px-4 py-[14px] text-[0.95rem] focus:outline-none focus:border-[#1C4CC3] focus:ring-1 focus:ring-[#1C4CC3] transition-colors placeholder-[#D1D5DB] font-medium text-[#333333]"
                                                />
                                            </div>

                                            {/* Country Dropdown */}
                                            <div className="flex flex-col gap-2 relative">
                                                <label className="text-sm font-bold text-[#515151]">
                                                    Select Country <span className="text-[#E02424]">*</span>
                                                </label>
                                                <select
                                                    className="w-full border border-gray-200 rounded-[10px] px-4 py-[14px] text-[0.95rem] focus:outline-none focus:border-[#1C4CC3] focus:ring-1 focus:ring-[#1C4CC3] transition-colors text-[#9CA3AF] focus:text-[#333333] font-medium appearance-none cursor-pointer bg-white"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled hidden>India</option>
                                                    <option value="in" className="text-[#333333]">India</option>
                                                    <option value="us" className="text-[#333333]">United States</option>
                                                    <option value="uk" className="text-[#333333]">United Kingdom</option>
                                                </select>
                                                <div className="absolute right-4 top-[2.7rem] pointer-events-none text-[#1C4CC3]">
                                                    <BsChevronDown strokeWidth={1} />
                                                </div>
                                            </div>

                                            {/* City Dropdown */}
                                            <div className="flex flex-col gap-2 relative">
                                                <label className="text-sm font-bold text-[#515151]">
                                                    Select City <span className="text-[#E02424]">*</span>
                                                </label>
                                                <select
                                                    className="w-full border border-gray-200 rounded-[10px] px-4 py-[14px] text-[0.95rem] focus:outline-none focus:border-[#1C4CC3] focus:ring-1 focus:ring-[#1C4CC3] transition-colors text-[#9CA3AF] focus:text-[#333333] font-medium appearance-none cursor-pointer bg-white"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled hidden>Delhi</option>
                                                    <option value="delhi" className="text-[#333333]">Delhi</option>
                                                    <option value="bangalore" className="text-[#333333]">Bangalore</option>
                                                    <option value="mumbai" className="text-[#333333]">Mumbai</option>
                                                </select>
                                                <div className="absolute right-4 top-[2.7rem] pointer-events-none text-[#1C4CC3]">
                                                    <BsChevronDown strokeWidth={1} />
                                                </div>
                                            </div>

                                            {/* Next Button Container */}
                                            <div className="col-span-1 md:col-span-2 flex justify-end mt-8">
                                                <button
                                                    type="button"
                                                    onClick={() => setCurrentStep(2)}
                                                    className="bg-[#1C4CC3] hover:bg-[#153B98] text-white font-bold py-3 px-12 rounded-full transition-all active:scale-95 text-[0.95rem] shadow-[0_4px_12px_rgba(28,76,195,0.2)]"
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )}

                                {/* Step 2 Content */}
                                {currentStep === 2 && (
                                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                        <h3 className="text-xl md:text-[22px] font-bold text-[#333333] mb-2 tracking-tight">Background</h3>
                                        <p className="text-[#9CA3AF] text-[0.95rem] mb-10 font-medium">Tell us about your experience and when you can start.</p>

                                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full mb-10">
                                            {/* Current Job Title */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-[#515151]">
                                                    Current Job Title <span className="text-[#E02424]">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Eg. Sr Product Manager"
                                                    className="w-full border border-gray-200 rounded-[10px] px-4 py-[14px] text-[0.95rem] focus:outline-none focus:border-[#1C4CC3] focus:ring-1 focus:ring-[#1C4CC3] transition-colors placeholder-[#D1D5DB] font-medium text-[#333333]"
                                                />
                                            </div>

                                            {/* Total Years of Experience */}
                                            <div className="flex flex-col gap-2 relative">
                                                <label className="text-sm font-bold text-[#515151]">
                                                    Total Years of Experience <span className="text-[#E02424]">*</span>
                                                </label>
                                                <select
                                                    className="w-full border border-gray-200 rounded-[10px] px-4 py-[14px] text-[0.95rem] focus:outline-none focus:border-[#1C4CC3] focus:ring-1 focus:ring-[#1C4CC3] transition-colors text-[#9CA3AF] focus:text-[#333333] font-medium appearance-none cursor-pointer bg-white"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled hidden>Select Range</option>
                                                    <option value="0-2" className="text-[#333333]">0-2 Years</option>
                                                    <option value="3-5" className="text-[#333333]">3-5 Years</option>
                                                    <option value="5-10" className="text-[#333333]">5-10 Years</option>
                                                    <option value="10+" className="text-[#333333]">10+ Years</option>
                                                </select>
                                                <div className="absolute right-4 top-[2.7rem] pointer-events-none text-[#1C4CC3]">
                                                    <BsChevronDown strokeWidth={1} />
                                                </div>
                                            </div>

                                            {/* Highest Education Level */}
                                            <div className="flex flex-col gap-2 relative">
                                                <label className="text-sm font-bold text-[#515151]">
                                                    Highest Education Level <span className="text-[#E02424]">*</span>
                                                </label>
                                                <select
                                                    className="w-full border border-gray-200 rounded-[10px] px-4 py-[14px] text-[0.95rem] focus:outline-none focus:border-[#1C4CC3] focus:ring-1 focus:ring-[#1C4CC3] transition-colors text-[#9CA3AF] focus:text-[#333333] font-medium appearance-none cursor-pointer bg-white"
                                                    defaultValue=""
                                                >
                                                    <option value="" disabled hidden>Select level</option>
                                                    <option value="bachelors" className="text-[#333333]">Bachelor's Degree</option>
                                                    <option value="masters" className="text-[#333333]">Master's Degree</option>
                                                    <option value="phd" className="text-[#333333]">PhD</option>
                                                    <option value="diploma" className="text-[#333333]">Diploma</option>
                                                    <option value="other" className="text-[#333333]">Other</option>
                                                </select>
                                                <div className="absolute right-4 top-[2.7rem] pointer-events-none text-[#1C4CC3]">
                                                    <BsChevronDown strokeWidth={1} />
                                                </div>
                                            </div>

                                            {/* Notice Period */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-[#515151]">
                                                    Notice Period <span className="text-[#E02424]">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Eg. 30 Days"
                                                    className="w-full border border-gray-200 rounded-[10px] px-4 py-[14px] text-[0.95rem] focus:outline-none focus:border-[#1C4CC3] focus:ring-1 focus:ring-[#1C4CC3] transition-colors placeholder-[#D1D5DB] font-medium text-[#333333]"
                                                />
                                            </div>

                                            {/* Current CTC */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-[#515151]">
                                                    Current CTC (in LPA) <span className="text-[#E02424]">*</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    placeholder="Eg. 7"
                                                    className="w-full border border-gray-200 rounded-[10px] px-4 py-[14px] text-[0.95rem] focus:outline-none focus:border-[#1C4CC3] focus:ring-1 focus:ring-[#1C4CC3] transition-colors placeholder-[#D1D5DB] font-medium text-[#333333]"
                                                />
                                            </div>

                                            {/* Expected CTC */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-[#515151]">
                                                    Expected CTC (in LPA) <span className="text-[#E02424]">*</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    placeholder="Eg. 7"
                                                    className="w-full border border-gray-200 rounded-[10px] px-4 py-[14px] text-[0.95rem] focus:outline-none focus:border-[#1C4CC3] focus:ring-1 focus:ring-[#1C4CC3] transition-colors placeholder-[#D1D5DB] font-medium text-[#333333]"
                                                />
                                            </div>
                                        </form>

                                        <div className="flex justify-between mt-auto">
                                            <button
                                                type="button"
                                                onClick={() => setCurrentStep(1)}
                                                className="bg-white hover:bg-gray-50 text-[#1C4CC3] border border-[#1C4CC3] font-bold py-3 px-10 rounded-full transition-all active:scale-95 text-[0.95rem]"
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setCurrentStep(3)}
                                                className="bg-[#1C4CC3] hover:bg-[#153B98] text-white font-bold py-3 px-12 rounded-full transition-all active:scale-95 text-[0.95rem] shadow-[0_4px_12px_rgba(28,76,195,0.2)]"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3 Content */}
                                {currentStep === 3 && (
                                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                        <h3 className="text-xl md:text-[22px] font-bold text-[#333333] mb-2 tracking-tight">Documents & Portfolio</h3>
                                        <p className="text-[#9CA3AF] text-[0.95rem] mb-10 font-medium">Upload your resume and any supporting materials.</p>

                                        <div className="flex flex-col gap-8 w-full mb-10">
                                            {/* Upload Resume */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-[#515151]">
                                                    Upload your Resume / CV <span className="text-[#E02424]">*</span>
                                                </label>
                                                <div className="w-full border-2 border-dashed border-[#D1D5DB] rounded-xl flex flex-col items-center justify-center py-10 bg-[#F9FAFB] hover:bg-gray-100 transition-colors cursor-pointer group">
                                                    <FiUpload className="text-gray-400 group-hover:text-[#1C4CC3] mb-3 text-2xl transition-colors" />
                                                    <p className="text-[#9CA3AF] text-[0.95rem] font-medium mb-2">
                                                        <span className="text-[#1C4CC3] font-bold underline decoration-2 underline-offset-2">Click to Upload</span> or Drag and Drop
                                                    </p>
                                                    <p className="text-gray-400 text-xs">PDF, DOC, DOCX - Max 5MB</p>
                                                </div>
                                            </div>

                                            {/* Upload Cover Letter */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-[#515151]">
                                                    Upload Cover Letter (Optional)
                                                </label>
                                                <div className="w-full border-2 border-dashed border-[#D1D5DB] rounded-xl flex flex-col items-center justify-center py-10 bg-[#F9FAFB] hover:bg-gray-100 transition-colors cursor-pointer group">
                                                    <FiUpload className="text-gray-400 group-hover:text-[#1C4CC3] mb-3 text-2xl transition-colors" />
                                                    <p className="text-[#9CA3AF] text-[0.95rem] font-medium mb-2">
                                                        <span className="text-[#1C4CC3] font-bold underline decoration-2 underline-offset-2">Click to Upload</span> or Drag and Drop
                                                    </p>
                                                    <p className="text-gray-400 text-xs">PDF, DOC, DOCX - Max 5MB</p>
                                                </div>
                                            </div>

                                            {/* Links */}
                                            <div className="flex flex-col gap-2">
                                                <label className="text-sm font-bold text-[#515151]">
                                                    Share links to relevant work samples or projects (if any)
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Paste it here"
                                                    className="w-full border border-gray-200 rounded-[10px] px-4 py-[14px] text-[0.95rem] focus:outline-none focus:border-[#1C4CC3] focus:ring-1 focus:ring-[#1C4CC3] transition-colors placeholder-[#D1D5DB] font-medium text-[#333333]"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex justify-between mt-auto">
                                            <button
                                                type="button"
                                                onClick={() => setCurrentStep(2)}
                                                className="bg-white hover:bg-gray-50 text-[#1C4CC3] border border-[#1C4CC3] font-bold py-3 px-10 rounded-full transition-all active:scale-95 text-[0.95rem]"
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setIsSubmitted(true);
                                                }}
                                                className="bg-[#1C4CC3] hover:bg-[#153B98] text-white font-bold py-3 px-12 rounded-full transition-all active:scale-95 text-[0.95rem] shadow-[0_4px_12px_rgba(28,76,195,0.2)]"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}
