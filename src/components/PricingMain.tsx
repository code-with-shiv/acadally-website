"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface PricingMainProps {
    plan: "yearly" | "quarterly";
    setPlan: (plan: "yearly" | "quarterly") => void;
}

export default function PricingMain({ plan, setPlan }: PricingMainProps) {

    return (
        <section className="relative w-full flex flex-col items-center justify-center text-center py-5 px-4 md:py-10 md:px-6 overflow-hidden">
            {/* Background Rings - Matching the subtle concentric circles in the image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Inner Ring */}
                    <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] border border-main-page-secondary opacity-[0.08] rounded-full" />
                    {/* Middle Ring */}
                    <div className="absolute w-[550px] h-[550px] md:w-[800px] md:h-[800px] border border-main-page-secondary opacity-[0.06] rounded-full" />
                    {/* Outer Ring */}
                    <div className="absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] border border-main-page-secondary opacity-[0.04] rounded-full" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-8 z-10 w-full">
                {/* Badge */}
                <div className="bg-[#1C4CC31A] text-main-page-secondary  px-4 py-2 md:px-8 md:py-2 rounded-[32px] md:rounded-[120px] text-[10px] md:text-[16px] font-medium md:font-semibold leading-[20px] md:leading-[24px] md:tracking-[0.04em] shadow-sm transition-all  cursor-default text-center">
                    #1 AI Learning Platform 2025
                </div>

                {/* Heading Content */}
                <h1 className="text-center tracking-tight flex flex-col md:flex-row md:items-center md:justify-center md:gap-2">
                    <span className="text-[20px] md:text-[48px] font-medium text-[#000000CC] md:text-[#333333] leading-[30px] md:leading-[120%]">
                        Invest in Your Future with
                    </span>
                    <span className="text-[32px] md:text-[48px] font-bold text-main-page-secondary leading-[40px] md:leading-[120%]">
                        AcadAlly
                    </span>
                </h1>

                {/* Description */}
                <p className="text-[12px] md:text-[20px] max-w-3xl leading-[140%] md:leading-[140%] font-normal text-[#000000A6] md:text-[#000000CC] text-center">
                    Choose the plan that fits your learning pace. Whether you&apos;re looking for essential tools or a smarter, AI-driven experience, we have a seat for you.
                </p>

                {/* Pricing Toggle - Matching the image exactly */}
                <div className="mt-4 md:mt-2">
                    <div className="bg-[#1C4CC30D] p-1 rounded-full flex items-center w-fit shadow-sm border border-[#1C4CC31A] relative">
                        <button
                            onClick={() => setPlan("yearly")}
                            className={cn(
                                "relative px-8 py-2 md:px-12 md:py-3 rounded-full text-sm md:text-lg font-bold transition-colors duration-300 z-10 cursor-pointer",
                                plan === "yearly" ? "text-white" : "text-[#1C4CC3]"
                            )}
                        >
                            Yearly
                            {plan === "yearly" && (
                                <motion.div
                                    layoutId="activePlan"
                                    className="absolute inset-0 bg-[#1C4CC3] rounded-full -z-10 shadow-md"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                        <button
                            onClick={() => setPlan("quarterly")}
                            className={cn(
                                "relative px-8 py-2 md:px-12 md:py-3 rounded-full text-sm md:text-lg font-bold transition-colors duration-300 z-10 cursor-pointer",
                                plan === "quarterly" ? "text-white" : "text-[#1C4CC3]"
                            )}
                        >
                            Quarterly
                            {plan === "quarterly" && (
                                <motion.div
                                    layoutId="activePlan"
                                    className="absolute inset-0 bg-[#1C4CC3] rounded-full -z-10 shadow-md"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}



