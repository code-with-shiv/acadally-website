import About from "@/components/About";
import Catalogue from "@/components/Catalogue";
import ClassroomFeatures from "@/components/ClassroomFeatures";
import Navbar from "@/components/Navbar";
import PaddingWrapper from "@/components/PaddingWrapper";
import TeachersMain from "@/components/TeachersMain";
import Transform from "@/components/Transform";
import WhyEducators from "@/components/WhyEducators";

export default function Teachers() {
    return (
        <>
            <PaddingWrapper>
                <Navbar />
                <TeachersMain />
            </PaddingWrapper>
            <WhyEducators />
            <ClassroomFeatures />
            <Catalogue />
            <About />
            <Transform />
        </>
    );
}


