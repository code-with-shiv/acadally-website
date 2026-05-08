"use client";

import Transform from "@/components/Transform";
import { useState } from "react";
import DemoFormModal from "@/components/Main/DemoFormModal";
import EventMain from "@/components/EventMain";
import EventContent from "@/components/EventContent";

export default function Blog() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    return (
        <>
            <main className="min-h-screen bg-white">
                <div className="relative bg-white overflow-hidden">
                    {/* Soft Background Glows matching the FAQ page */}
                    <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(28,76,195,0.45),transparent_70%)] blur-[60px]" />
                        <div className="absolute top-[-15%] right-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(28,76,195,0.45),transparent_70%)] blur-[60px]" />
                    </div>

                    <div className="relative z-10 flex flex-col py-2 lg:py-10">
                        <EventMain />
                    </div>
                </div>
                <EventContent />
                <Transform onOpenDemo={() => setIsDemoModalOpen(true)} />
                <DemoFormModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
            </main>
        </>
    )
}