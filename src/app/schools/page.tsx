import SchoolsMain from "@/components/SchoolsMain";
import WhySchools from "@/components/WhySchools";
import SchoolExperience from "@/components/SchoolExperience";
import WhatSchoolsLove from "@/components/WhatSchoolsLove";
import LeadershipExcellence from "@/components/LeadershipExcellence";
import Transform from "@/components/Transform";

export default function SchoolsPage() {
    return (
        <main className="min-h-screen bg-white">
            <SchoolsMain />
            <div className="space-y-20 lg:space-y-32">
                <WhySchools />
                <SchoolExperience />
                <WhatSchoolsLove />
                <LeadershipExcellence />
            </div>
            <div className="mt-20">
                <Transform color="var(--main-page-secondary)" />
            </div>
        </main>
    );
}
