import StudentsMain from "@/components/StudentsMain";
import WhyStudents from "@/components/WhyStudents";
import StudentExperience from "@/components/StudentExperience";
import WhatStudentsLove from "@/components/WhatStudentsLove";
import StudentAchievements from "@/components/StudentAchievements";
import Transform from "@/components/Transform";
import Navbar from "@/components/Navbar";
import { HiOutlineSearch, HiOutlineClipboardCheck } from "react-icons/hi";
import { HiOutlineBookOpen, HiOutlineBeaker } from "react-icons/hi2";

export default function Students() {
    return (
        <>
            <div className="relative bg-white overflow-hidden lg:min-h-screen">
                {/* Center Glowing Gradient */}
                <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[var(--orange-primary)] opacity-15 rounded-full blur-[100px] pointer-events-none"></div>

                {/* Background Pattern (Concentric Circles) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                    <div className="relative w-full h-[80vh] flex items-center justify-center">
                        <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] border border-orange-200 rounded-full" />
                        <div className="absolute w-[560px] h-[560px] md:w-[800px] md:h-[800px] border border-orange-200 rounded-full" />
                        <div className="absolute w-[840px] h-[840px] md:w-[1200px] md:h-[1200px] border border-orange-200 rounded-full" />
                    </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[20%] left-[10%] lg:left-[15%] text-orange-200 transform -rotate-12 bg-white/50 p-2 rounded-xl border border-orange-100 backdrop-blur-sm">
                        <HiOutlineSearch size={32} />
                    </div>
                    <div className="absolute top-[20%] right-[10%] lg:right-[15%] text-orange-200 transform rotate-12 bg-white/50 p-2 rounded-xl border border-orange-100 backdrop-blur-sm">
                        <HiOutlineBookOpen size={32} />
                    </div>
                    <div className="absolute bottom-[25%] left-[10%] lg:left-[15%] text-orange-200 transform rotate-[-15deg] bg-white/50 p-2 rounded-xl border border-orange-100 backdrop-blur-sm">
                        <HiOutlineBeaker size={32} />
                    </div>
                    <div className="absolute bottom-[25%] right-[10%] lg:right-[15%] text-orange-200 transform rotate-[15deg] bg-white/50 p-2 rounded-xl border border-orange-100 backdrop-blur-sm">
                        <HiOutlineClipboardCheck size={32} />
                    </div>
                </div>

                <div className="relative z-10 flex flex-col px-6 py-2 lg:px-20 lg:py-5">
                    <Navbar />
                    <StudentsMain />
                </div>
            </div>
            <WhyStudents />

            <StudentExperience />

            <WhatStudentsLove />


            <StudentAchievements />
            <Transform />
        </>
    );
}
