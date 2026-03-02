"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import PaddingWrapper from "@/components/PaddingWrapper";
import { FiFileText, FiCpu, FiBookOpen, FiSearch, FiCheckCircle } from "react-icons/fi";

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState<"yearly" | "quarterly">("yearly");

    return (
        <div className="min-h-screen bg-white font-sans pb-20 overflow-hidden relative">
            <PaddingWrapper>
                <Navbar />
            </PaddingWrapper>

            <main className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 pt-16 md:pt-28 pb-12 relative z-10 text-center">

                {/* Floating ambient icons */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    {/* Top Left Document Icon */}
                    <div className="absolute top-[5%] left-[15%] w-16 h-16 md:w-20 md:h-20 bg-[#F9FAFB] rounded-2xl flex items-center justify-center -rotate-12 opacity-80 backdrop-blur-sm">
                        <FiFileText className="text-[#1C4CC3] text-opacity-30 text-2xl md:text-3xl" />
                    </div>
                    {/* Top Right CPU Icon */}
                    <div className="absolute top-[10%] right-[15%] w-14 h-14 md:w-16 md:h-16 bg-[#F9FAFB] rounded-2xl flex items-center justify-center rotate-12 opacity-80 backdrop-blur-sm">
                        <FiCpu className="text-[#1C4CC3] text-opacity-30 text-2xl" />
                    </div>
                    {/* Bottom Left Book Icon */}
                    <div className="absolute top-[60%] left-[10%] w-16 h-16 md:w-20 md:h-20 bg-[#F9FAFB] rounded-2xl flex items-center justify-center -rotate-6 opacity-80 backdrop-blur-sm">
                        <FiBookOpen className="text-[#1C4CC3] text-opacity-30 text-2xl md:text-3xl" />
                    </div>
                    {/* Bottom Right Search Icon */}
                    <div className="absolute top-[55%] right-[10%] w-16 h-16 md:w-20 md:h-20 bg-[#F9FAFB] rounded-2xl flex items-center justify-center rotate-6 opacity-80 backdrop-blur-sm">
                        <FiSearch className="text-[#1C4CC3] text-opacity-30 text-2xl md:text-3xl" />
                    </div>
                </div>

                {/* Hero Content */}
                <div className="flex flex-col items-center justify-center relative z-10 w-full max-w-[800px] mx-auto gap-6 sm:gap-8">

                    {/* Pill Badge */}
                    <div className="bg-[#EEF2FC] text-[#1C4CC3] font-bold text-sm md:text-base px-6 py-2 rounded-full inline-flex tracking-tight">
                        #1 AI Learning Platform 2025
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-[2rem] sm:text-4xl md:text-[3.5rem] font-bold text-[#333333] tracking-tight leading-tight md:leading-[1.1]">
                        Invest in Your Future with <span className="text-[#1C4CC3]">AcadAlly</span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-base sm:text-lg md:text-[1.125rem] text-[#515151] font-medium leading-relaxed max-w-[700px]">
                        Choose the plan that fits your learning pace. Whether you're looking for essential tools or a smarter, AI-driven experience, we have a seat for you.
                    </p>
                </div>

                {/* Pricing Toggle */}
                <div className="flex justify-center mt-12 mb-16 relative z-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                    <div className="bg-[#EEF2FC] p-1 rounded-full inline-flex items-center">
                        <button
                            className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${billingCycle === 'yearly' ? 'bg-[#1C4CC3] text-white shadow-md' : 'text-[#1C4CC3] hover:bg-white/50'}`}
                            onClick={() => setBillingCycle('yearly')}
                        >
                            Yearly
                        </button>
                        <button
                            className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${billingCycle === 'quarterly' ? 'bg-[#1C4CC3] text-white shadow-md' : 'text-[#1C4CC3] hover:bg-white/50'}`}
                            onClick={() => setBillingCycle('quarterly')}
                        >
                            Quarterly
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 relative z-10 w-full max-w-[1000px] mx-auto text-left mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">

                    {/* AcadAlly Smart Card */}
                    <div className="flex-1 bg-white border-2 border-[#1C4CC3] rounded-2xl flex flex-col relative shadow-[0_8px_30px_rgb(28,76,195,0.08)] overflow-hidden border-b-8">
                        {/* Most Popular Badge */}
                        <div className="absolute top-[88px] right-0 bg-[#1C4CC3] text-white text-xs font-bold px-4 py-1.5 rounded-l-md z-10 shadow-sm">
                            Most Popular
                        </div>

                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-[#8E54E9] to-[#F17565] p-6 lg:p-8 flex justify-between items-center relative overflow-hidden group">
                            {/* Decorative stars */}
                            <div className="absolute top-4 left-auto right-[35%] w-3 h-3 text-[#FFD700] opacity-80 rotate-12">✦</div>
                            <div className="absolute bottom-4 right-6 w-4 h-4 text-[#FFD700] opacity-80 -rotate-12">✦</div>

                            <h2 className="text-3xl font-bold text-white relative z-10 leading-tight">
                                AcadAlly<br />Smart
                            </h2>
                            {/* Brain Image/Badge Placeholder */}
                            <div className="relative z-10 bg-white/20 backdrop-blur-sm p-3 rounded-2xl border border-white/30 transform group-hover:scale-105 transition-transform duration-300">
                                <div className="w-16 h-12 bg-[#FF8DA1] rounded-[40%] flex items-center justify-center opacity-90 drop-shadow-md relative overflow-hidden">
                                    {/* Simple brain-like CSS shapes */}
                                    <div className="absolute w-8 h-8 rounded-full bg-[#FF748C] -top-1 -left-2"></div>
                                    <div className="absolute w-10 h-10 rounded-full bg-[#FF748C] top-0 left-3"></div>
                                    <div className="absolute w-8 h-8 rounded-full bg-[#FF748C] top-1 -right-2"></div>
                                    {/* Face */}
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 items-end z-10">
                                        <div className="w-1.5 h-1.5 bg-[#515151] rounded-full"></div>
                                        <div className="w-3 h-1.5 border-b-2 border-[#515151] rounded-full mt-1"></div>
                                        <div className="w-1.5 h-1.5 bg-[#515151] rounded-full"></div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#FF6B6B] text-white text-[10px] font-bold px-3 py-0.5 rounded-full border border-white whitespace-nowrap hidden lg:block">Smart</div>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6 lg:p-8 flex-1 flex flex-col bg-white">
                            {/* Price */}
                            <div className="flex items-end gap-3 mb-4">
                                <span className="text-[2.5rem] font-bold text-[#FF6B6B] leading-none">
                                    ₹{billingCycle === 'yearly' ? '3,249' : '3,999'}
                                </span>
                                <span className="text-lg text-gray-400 font-medium line-through decoration-2 mb-1">
                                    ₹{billingCycle === 'yearly' ? '4,999' : '5,999'}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-[#333333] font-medium text-[0.95rem] mb-6 min-h-[48px]">
                                Our most popular choice for advanced, personalized learning.
                            </p>

                            {/* Features Container */}
                            <div className="bg-[#F8FAFC] rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden border border-gray-100 mt-auto">
                                {/* Watermark */}
                                <div className="absolute -bottom-8 -right-8 opacity-5 pointer-events-none transform -rotate-12">
                                    <svg viewBox="0 0 100 100" className="w-48 h-48 fill-[#FF6B6B]"><path d="M50 10c15 0 28 8 35 20 8-3 15 2 15 10 0 10-8 15-15 15v5c0 15-15 30-35 30S15 75 15 60v-5C8 55 0 50 0 40c0-8 7-13 15-10 7-12 20-20 35-20z" /></svg>
                                </div>

                                <div className="flex items-center gap-3 relative z-10">
                                    <FiCheckCircle className="text-[#00C896] text-xl flex-shrink-0 bg-white rounded-full" />
                                    <span className="text-[#333333] font-medium text-sm">Everything in Core</span>
                                </div>
                                <div className="flex items-center gap-3 relative z-10">
                                    <FiCheckCircle className="text-[#00C896] text-xl flex-shrink-0 bg-white rounded-full" />
                                    <span className="text-[#333333] font-medium text-sm">AI learning insights</span>
                                </div>
                                <div className="flex items-center gap-3 relative z-10">
                                    <FiCheckCircle className="text-[#00C896] text-xl flex-shrink-0 bg-white rounded-full" />
                                    <span className="text-[#333333] font-medium text-sm">Adaptive mock tests</span>
                                </div>
                                <div className="flex items-center gap-3 relative z-10">
                                    <FiCheckCircle className="text-[#00C896] text-xl flex-shrink-0 bg-white rounded-full" />
                                    <span className="text-[#333333] font-medium text-sm">Deep performance analytics</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AcadAlly Core Card */}
                    <div className="flex-1 bg-[#F3F4F6] border-2 border-transparent rounded-2xl flex flex-col overflow-hidden border-b-[#A78BFA] border-b-8 relative group hover:shadow-lg transition-shadow duration-300">

                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-[#A78BFA] to-[#6366F1] p-6 lg:p-8 flex justify-between items-center relative overflow-hidden group-hover:from-[#9370DB] group-hover:to-[#4F46E5] transition-colors duration-500">
                            {/* Decorative stars */}
                            <div className="absolute top-4 left-auto right-[35%] w-3 h-3 text-[#FFD700] opacity-80 rotate-12">✦</div>
                            <div className="absolute bottom-4 right-6 w-4 h-4 text-[#FFD700] opacity-80 -rotate-12">✦</div>

                            <h2 className="text-3xl font-bold text-white relative z-10 leading-tight">
                                AcadAlly<br />Core
                            </h2>
                            {/* Shield Badge Placeholder */}
                            <div className="relative z-10 bg-white/20 backdrop-blur-sm p-3 rounded-2xl border border-white/30 transform group-hover:scale-105 transition-transform duration-300">
                                <div className="w-14 h-16 flex items-center justify-center pt-1 drop-shadow-md">
                                    <svg viewBox="0 0 24 24" fill="#3730A3" className="w-14 h-16"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" /></svg>
                                    {/* Fake 'A' inside shield */}
                                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white font-bold text-sm">A</div>
                                </div>
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#4F46E5] text-white text-[10px] font-bold px-4 py-0.5 rounded-full border border-white whitespace-nowrap hidden lg:block">Core</div>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6 lg:p-8 flex-1 flex flex-col bg-[#F3F4F6]">
                            {/* Price */}
                            <div className="flex items-end gap-3 mb-4">
                                <span className="text-[2.5rem] font-bold text-[#3730A3] leading-none">
                                    ₹{billingCycle === 'yearly' ? '2,249' : '2,999'}
                                </span>
                                <span className="text-lg text-gray-400 font-medium line-through decoration-2 mb-1">
                                    ₹{billingCycle === 'yearly' ? '2,999' : '3,999'}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-[#333333] font-medium text-[0.95rem] mb-6 min-h-[48px]">
                                The essential foundation for academic your excellence.
                            </p>

                            {/* Features Container */}
                            <div className="bg-white rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden border border-gray-100 mt-auto">
                                {/* Watermark */}
                                <div className="absolute -bottom-8 -right-8 opacity-5 pointer-events-none transform -rotate-12">
                                    <svg viewBox="0 0 24 24" fill="#3730A3" className="w-48 h-48"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
                                </div>

                                <div className="flex items-center gap-3 relative z-10">
                                    <FiCheckCircle className="text-[#00C896] text-xl flex-shrink-0 bg-white rounded-full" />
                                    <span className="text-[#333333] font-medium text-sm">Everything in Core</span>
                                </div>
                                <div className="flex items-center gap-3 relative z-10">
                                    <FiCheckCircle className="text-[#00C896] text-xl flex-shrink-0 bg-white rounded-full" />
                                    <span className="text-[#333333] font-medium text-sm">AI learning insights</span>
                                </div>
                                <div className="flex items-center gap-3 relative z-10">
                                    <FiCheckCircle className="text-[#00C896] text-xl flex-shrink-0 bg-white rounded-full" />
                                    <span className="text-[#333333] font-medium text-sm">Adaptive mock tests</span>
                                </div>
                                <div className="flex items-center gap-3 relative z-10">
                                    <FiCheckCircle className="text-[#00C896] text-xl flex-shrink-0 bg-white rounded-full" />
                                    <span className="text-[#333333] font-medium text-sm">Deep performance analytics</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* AcadAlly for Schools Section */}
                <div className="w-full max-w-[1008px] mx-auto bg-[#E8EDF5] rounded-2xl p-8 md:p-12 text-left relative overflow-hidden mt-8 mb-16 shadow-sm">
                    {/* Background faint logo watermark */}
                    <div className="absolute right-[-10%] bottom-[-20%] opacity-20 pointer-events-none scale-150 transform -rotate-12 z-0 hidden md:block">
                        <svg viewBox="0 0 24 24" fill="#ffffff" className="w-[450px] h-[450px]"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-[#1C4CC3] text-2xl md:text-3xl font-bold mb-2 tracking-tight">AcadAlly for Schools</h2>
                        <p className="text-[#333333] font-medium mb-8">Empower your entire institution with cutting-edge educational tools.</p>

                        <div className="bg-white rounded-xl p-6 md:p-8 flex flex-col gap-6 shadow-sm w-full relative overflow-hidden">
                            {/* Inner Watermark */}
                            <div className="absolute right-[-4%] bottom-[0%] opacity-5 pointer-events-none scale-150 z-0">
                                <svg viewBox="0 0 24 24" fill="#1C4CC3" className="w-48 h-48"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" /></svg>
                            </div>

                            <div className="relative z-10 flex flex-col gap-6">
                                {/* Feature 1 */}
                                <div className="flex items-start gap-3 w-full">
                                    <FiCheckCircle className="text-[#00C896] text-xl flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-[#1C4CC3] font-bold text-[1.05rem] mb-0.5">Custom Integration</h4>
                                        <p className="text-[#515151] font-medium text-[0.95rem]">Tailored solutions for classrooms, departments, or entire school districts.</p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex items-start gap-3 w-full">
                                    <FiCheckCircle className="text-[#00C896] text-xl flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-[#1C4CC3] font-bold text-[1.05rem] mb-0.5">Admin Dashboard</h4>
                                        <p className="text-[#515151] font-medium text-[0.95rem]">Custom Comprehensive oversight of student progress and teacher engagement.:</p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex items-start gap-3 w-full">
                                    <FiCheckCircle className="text-[#00C896] text-xl flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-[#1C4CC3] font-bold text-[1.05rem] mb-0.5">Bulk Licensing</h4>
                                        <p className="text-[#515151] font-medium text-[0.95rem]">Competitive volume pricing designed to fit institutional budgets.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
