import Both from "@/components/Both";
import Navbar from "@/components/Navbar";
import OurStoryMain from "@/components/OurStoryMain";

export default function OurStory() {
    return (
        < >
            <div className="relative z-10 px-6 py-2 lg:px-20 lg:py-5">
                <Navbar />
                <OurStoryMain />
            </div>
            <Both />
        </>
    );
}