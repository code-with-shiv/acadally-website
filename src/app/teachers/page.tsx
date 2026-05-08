"use client";
import About from "@/components/About";
import Catalogue from "@/components/Catalogue";
import ClassroomFeatures from "@/components/ClassroomFeatures";
import TeachersMain from "@/components/TeachersMain";
import Transform from "@/components/Transform";
import WhyEducators from "@/components/WhyEducators";
import { useState } from "react";
import SchoolFormModal from "@/components/Main/SchoolFormModal";
import DemoFormModal from "@/components/Main/DemoFormModal";

export default function Teachers() {
    const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-white">
            <div className="relative bg-white overflow-hidden ">
                <div className="relative z-10 flex flex-col px-6 py-2 lg:px-20 lg:py-5">
                    <TeachersMain onOpenDemo={() => setIsDemoModalOpen(true)} />
                </div>
            </div>
            <WhyEducators />
            <ClassroomFeatures />
            <Catalogue />
            <About />
            <Transform onOpenDemo={() => setIsDemoModalOpen(true)} />
            <SchoolFormModal
                isOpen={isSchoolModalOpen}
                onClose={() => setIsSchoolModalOpen(false)}
            />
            <DemoFormModal
                isOpen={isDemoModalOpen}
                onClose={() => setIsDemoModalOpen(false)}
            />
        </main>
    )
}


