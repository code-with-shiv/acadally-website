"use client";

import { useState } from "react";
import PricingMain from "@/components/PricingMain";
import PricingCards from "@/components/PricingCards";
import Transform from "@/components/Transform";
import DemoFormModal from "@/components/Main/DemoFormModal";

export default function PricingPage() {
    const [plan, setPlan] = useState<"yearly" | "quarterly">("yearly");
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-white">
            <div className="relative bg-white overflow-hidden lg:min-h-screen">

                <div className="relative z-10 flex flex-col py-2 lg:py-5">
                    <div className="mt-2 md:mt-8">
                        <PricingMain plan={plan} setPlan={setPlan} />
                    </div>
                </div>

                <div>
                    <PricingCards plan={plan} />
                </div>

                <Transform onOpenDemo={() => setIsDemoModalOpen(true)} />

                <DemoFormModal
                    isOpen={isDemoModalOpen}
                    onClose={() => setIsDemoModalOpen(false)}
                />
            </div>
        </main>
    );
}