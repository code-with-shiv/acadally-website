import About from "@/components/About";
import Catalogue from "@/components/Catalogue";
import ClassroomFeatures from "@/components/ClassroomFeatures";
import TeachersMain from "@/components/TeachersMain";
import Transform from "@/components/Transform";
import WhyEducators from "@/components/WhyEducators";

export default function Teachers() {
    return (
        <>
            <div className="flex flex-col px-6 py-2 lg:px-20 lg:py-5">
                <TeachersMain />
                <WhyEducators />
                <ClassroomFeatures />
                <Catalogue />
            </div>
            <About />
            <Transform />
        </>
    );
}


