"use client";
import EventsMain from "@/components/EventsMain";
import EventHighlight from "@/components/EventHighlight";
import EventsExplore from "@/components/EventsExplore";
import Transform from "@/components/Transform";
import { useState } from "react";
import DemoFormModal from "@/components/Main/DemoFormModal";
import PaddingWrapper from "@/components/PaddingWrapper";

export default function Events() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    return (
        <main className="min-h-screen bg-white">
            <div className="relative bg-white overflow-hidden lg:min-h-screen">
                {/* Soft Background Glows matching the screenshot */}
                <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(28,76,195,0.45),_transparent_70%)] blur-[60px]" />
                    <div className="absolute top-[-15%] right-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(28,76,195,0.45),_transparent_70%)] blur-[60px]" />
                </div>

                <div className="relative z-10 flex flex-col px-4 py-2 lg:px-20 lg:py-5">
                    <EventsMain />
                    <EventHighlight />
                </div>
            </div>

            <EventsExplore />
            <Transform onOpenDemo={() => setIsDemoModalOpen(true)} />
            <DemoFormModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
        </main>
    )
}
