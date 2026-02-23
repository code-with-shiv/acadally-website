import EventsMain from "@/components/EventsMain";
import EventHighlight from "@/components/EventHighlight";
import EventsExplore from "@/components/EventsExplore";
import Transform from "@/components/Transform";

export default function Events() {
    return (
        <main className="min-h-screen bg-white">
            <EventsMain />
            <EventHighlight />
            <EventsExplore />
            <Transform />
        </main>
    )
}

