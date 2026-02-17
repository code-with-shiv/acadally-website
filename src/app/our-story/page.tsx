import Both from "@/components/Both";
import Founders from "@/components/Founders";
import Navbar from "@/components/Navbar";
import OurStoryMain from "@/components/OurStoryMain";
import Quote from "@/components/Quote";
import Roller from "@/components/Roller";
import Transform from "@/components/Transform";
import Uses from "@/components/Uses";

export default function OurStory() {
    return (
        < >
            <div className="px-6 py-2 lg:px-20 lg:py-5">
                <Navbar />
                <OurStoryMain />
            </div>
            <Both />
            <div className="px-6 py-2 lg:px-20 lg:py-5">
                <Founders />
            </div>
            <Roller />
            <Uses />
            <Quote />
            <Transform />

        </>
    );
}