import StudentsMain from "@/components/StudentsMain";
import WhyStudents from "@/components/WhyStudents";
import StudentExperience from "@/components/StudentExperience";
import WhatStudentsLove from "@/components/WhatStudentsLove";
import StudentAchievements from "@/components/StudentAchievements";
import Transform from "@/components/Transform";

export default function Students() {
    return (
        <>
            <div className="flex flex-col px-6 py-2 lg:px-20 lg:py-5">
                <StudentsMain />
                <WhyStudents />
                <StudentExperience />
                <WhatStudentsLove />
            </div>
            <StudentAchievements />
            <Transform color="var(--orange-primary)" />
        </>
    );
}
