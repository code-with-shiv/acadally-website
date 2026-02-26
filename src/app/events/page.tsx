import EventsMain from "@/components/EventsMain";
import EventHighlight from "@/components/EventHighlight";
import EventsExplore from "@/components/EventsExplore";
import Transform from "@/components/Transform";
import Navbar from "@/components/Navbar";
import PaddingWrapper from "@/components/PaddingWrapper";

export default function Events() {
    return (
        <PaddingWrapper>
            <Navbar />
            <EventsMain />
            <EventHighlight />
            <EventsExplore />
            <Transform />
        </PaddingWrapper>
    )
}

