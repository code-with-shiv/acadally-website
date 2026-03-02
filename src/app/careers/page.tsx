import React from "react";
import Navbar from "@/components/Navbar";
import CareersHero from "@/components/CareersHero";
import WhyJoinUs from "@/components/WhyJoinUs";
import LifeAtAcadAlly from "@/components/LifeAtAcadAlly";
import TeamTestimonials from "@/components/TeamTestimonials";
import PaddingWrapper from "@/components/PaddingWrapper";

export default function CareersPage() {
    return (
        <>
            <PaddingWrapper>
                <Navbar />
            </PaddingWrapper>
            <CareersHero />
            <WhyJoinUs />
            <LifeAtAcadAlly />
            <TeamTestimonials />
        </>
    );
}
