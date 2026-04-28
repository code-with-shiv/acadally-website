"use client";

import { useState } from "react";
import Transform from "@/components/Transform";
import DemoFormModal from "@/components/Main/DemoFormModal";

export default function AboutClient() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    return (
        <>
            <Transform onOpenDemo={() => setIsDemoModalOpen(true)} />

            <DemoFormModal
                isOpen={isDemoModalOpen}
                onClose={() => setIsDemoModalOpen(false)}
            />
        </>
    );
}
