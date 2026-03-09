"use client";
import About from "@/components/About";
import Catalogue from "@/components/Catalogue";
import ClassroomFeatures from "@/components/ClassroomFeatures";
import Navbar from "@/components/Navbar";
import PaddingWrapper from "@/components/PaddingWrapper";
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
        <>
            <PaddingWrapper>
                <Navbar />
                <TeachersMain onOpenDemo={() => setIsDemoModalOpen(true)} />
            </PaddingWrapper>
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
        </>
    );
}


