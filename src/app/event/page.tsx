"use client";

import Transform from "@/components/Transform";
import { useState, Suspense } from "react";
import DemoFormModal from "@/components/Main/DemoFormModal";
import EventMain from "@/components/EventMain";
import EventContent from "@/components/EventContent";
import { useSearchParams } from "next/navigation";
import { eventsData } from "@/data/eventsData";

function EventPageContent() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    
    // Find event by ID, fallback to first event if not found
    const event = eventsData.find(e => e.id === Number(id)) || eventsData[0];

    return (
        <main className="min-h-screen bg-white">
            <div className="relative bg-white overflow-hidden">
                {/* Soft Background Glows matching the FAQ page */}
                <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(28,76,195,0.45),transparent_70%)] blur-[60px]" />
                    <div className="absolute top-[-15%] right-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(28,76,195,0.45),transparent_70%)] blur-[60px]" />
                </div>

                <div className="relative z-10 flex flex-col py-2 lg:py-10">
                    <EventMain event={event} />
                </div>
            </div>
            <EventContent event={event} />
            <Transform onOpenDemo={() => setIsDemoModalOpen(true)} />
            <DemoFormModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
        </main>
    );
}

export default function Blog() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <EventPageContent />
        </Suspense>
    );
}