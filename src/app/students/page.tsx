"use client";
import StudentsMain from "@/components/StudentsMain";
import WhyStudents from "@/components/WhyStudents";
import StudentExperience from "@/components/StudentExperience";
import WhatStudentsLove from "@/components/WhatStudentsLove";
import StudentAchievements from "@/components/StudentAchievements";
import Transform from "@/components/Transform";
import { useState } from "react";
import SchoolFormModal from "@/components/Main/SchoolFormModal";
import DemoFormModal from "@/components/Main/DemoFormModal";

export default function Students() {
    const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-white">
            <div className="relative bg-white overflow-hidden ">
                <div className="relative z-10 flex flex-col px-6 py-2 lg:px-20 lg:py-5">
                    <StudentsMain onOpenDemo={() => setIsDemoModalOpen(true)} />
                </div>
            </div>
            <WhyStudents />
            {/* <div className="mt-10"></div> */}
            <StudentExperience />
            <WhatStudentsLove />
            <StudentAchievements />
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
    );
}
