import Both from "@/components/Both";
import Founders from "@/components/Founders";
import Navbar from "@/components/Navbar";
import OurStoryMain from "@/components/OurStoryMain";
import PaddingWrapper from "@/components/PaddingWrapper";
import Quote from "@/components/Quote";
import Roller from "@/components/Roller";
import Transform from "@/components/Transform";
import Uses from "@/components/Uses";

export default function OurStory() {
    return (
        < >
            <div className="relative w-full">
                <img src="/ourstorymainleft.svg" alt="background left" className="absolute top-0 left-0 -z-10 pointer-events-none w-[70%] md:w-[50%] xl:w-[40%]" />
                <img src="/ourstorymaintopright.svg" alt="background right" className="absolute top-0 right-0 -z-10 pointer-events-none w-[70%] md:w-[50%] xl:w-[40%]" />
                <PaddingWrapper>
                    <Navbar />
                    <OurStoryMain />
                </PaddingWrapper>
            </div>
            <Both />
            <PaddingWrapper>
                <Founders />
            </PaddingWrapper>
            <Roller />
            <Uses />
            <Quote />
            <Transform />

        </>
    );
}