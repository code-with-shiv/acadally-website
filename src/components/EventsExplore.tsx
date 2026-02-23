import Image from "next/image";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";


const events = [
    {
        id: 1,
        title: "EDU – AI Conference 2024",
        description: "Future of AI in education with leading experts.",
        location: "Dehradun, Uttarakhand",
        date: "07 February, 2024",
        image: "/events1.svg",
        badge: "AI Summit"
    },
    {
        id: 2,
        title: "EDU – AI Conference 2024",
        description: "Future of AI in education with leading experts.",
        location: "Dehradun, Uttarakhand",
        date: "07 February, 2024",
        image: "/events1.svg",
        badge: "AI Summit"
    },
    {
        id: 3,
        title: "EDU – AI Conference 2024",
        description: "Future of AI in education with leading experts.",
        location: "Dehradun, Uttarakhand",
        date: "07 February, 2024",
        image: "/events1.svg",
        badge: "AI Summit"
    },
    {
        id: 4,
        title: "EDU – AI Conference 2024",
        description: "Future of AI in education with leading experts.",
        location: "Dehradun, Uttarakhand",
        date: "07 February, 2024",
        image: "/events1.svg",
        badge: "AI Summit"
    },
    {
        id: 5,
        title: "EDU – AI Conference 2024",
        description: "Future of AI in education with leading experts.",
        location: "Dehradun, Uttarakhand",
        date: "07 February, 2024",
        image: "/events1.svg",
        badge: "AI Summit"
    },
    {
        id: 6,
        title: "EDU – AI Conference 2024",
        description: "Future of AI in education with leading experts.",
        location: "Dehradun, Uttarakhand",
        date: "07 February, 2024",
        image: "/events1.svg",
        badge: "AI Summit"
    }
];

export default function EventsExplore() {
    return (
        <section className="py-16 md:py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-black text-gray-800 text-center mb-16 tracking-tight">
                    Explore More From Our Events
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(28,76,195,0.08)] transition-all duration-300 flex flex-col group"
                        >
                            {/* Image Section */}
                            <div className="relative h-60 w-full overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Badge */}
                                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {event.badge}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-black text-gray-800 mb-2 truncate">
                                    {event.title}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium mb-6 line-clamp-2">
                                    {event.description}
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                                            <Image src="/location.svg" alt="Location" width={16} height={16} />
                                        </div>
                                        <span className="text-gray-600 text-sm font-semibold truncate">{event.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                                            <Image src="/calender.svg" alt="Calendar" width={16} height={16} />
                                        </div>
                                        <span className="text-gray-600 text-sm font-semibold">{event.date}</span>
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="mt-auto py-4 bg-[#EBF2FF] -mx-6 px-6 border-t border-[#1C4CC3]/10">
                                    <button className="flex items-center justify-between w-full text-[#1C4CC3] font-bold text-sm">
                                        Read More <FiArrowUpRight className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                {/* Pagination */}
                <div className="mt-16 flex justify-center items-center gap-2">
                    {/* Previous Button */}
                    <button className="w-10 h-10 rounded-lg bg-[#EBF2FF] flex items-center justify-center text-[#1C4CC3] hover:bg-[#1C4CC3] hover:text-white transition-colors">
                        <FiChevronLeft size={20} />
                    </button>

                    {/* Page Numbers */}
                    <button className="w-10 h-10 rounded-lg border-2 border-[#1C4CC3] flex items-center justify-center text-[#1C4CC3] font-bold">
                        1
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-[#EBF2FF] flex items-center justify-center text-white font-bold hover:bg-[#1C4CC3] transition-colors">
                        2
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-[#EBF2FF] flex items-center justify-center text-white font-bold hover:bg-[#1C4CC3] transition-colors">
                        3
                    </button>

                    {/* Next Button */}
                    <button className="w-10 h-10 rounded-lg bg-[#1C4CC3] flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                        <FiChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}

