"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import PricingMain from "@/components/PricingMain";
import PricingCards from "@/components/PricingCards";

export default function PricingPage() {
    const [plan, setPlan] = useState<"yearly" | "quarterly">("yearly");

    return (
        <>
            <main className="min-h-screen bg-white pb-20">
                <div className="relative bg-white overflow-hidden lg:min-h-screen">
                    {/* Soft Background Glows matching the FAQ page */}
                    {/* <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(28,76,195,0.45),transparent_70%)] blur-[60px]" />
                        <div className="absolute top-[-15%] right-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(28,76,195,0.45),transparent_70%)] blur-[60px]" />
                    </div> */}

                    <div className="relative z-10 flex flex-col py-2 lg:py-5">
                        <div className="px-6 lg:px-20">
                            <Navbar />
                        </div>

                        <div className="mt-8">
                            <PricingMain plan={plan} setPlan={setPlan} />
                        </div>



                    </div>
                    <div className="">
                        <PricingCards plan={plan} />
                    </div>
                </div>

            </main>
        </>
    )
}
