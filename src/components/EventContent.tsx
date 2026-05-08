"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const eventImages = [
    { src: "/Event1.svg", alt: "Speaker sharing insights" },
    { src: "/Event2.svg", alt: "Award recognition ceremony" },
    { src: "/Event1.svg", alt: "Expert panel discussion" }, // Reusing/Fallback if not enough
    { src: "/Event3.svg", alt: "Networking session" },
    { src: "/Event2.svg", alt: "Collaborative workshop" },
    { src: "/Event3.svg", alt: "Group success photo" },
];

const eventsData = [
    {
        id: 1,
        type: "AI Summit",
        title: "EDU - AI Conference 2024",
        description: "Future of AI in education with leading experts.",
        location: "Dehradun, Uttarakhand",
        date: "07 February, 2024",
        image: "/Event1.svg",
    },
    {
        id: 2,
        type: "AI Summit",
        title: "EDU - AI Conference 2024",
        description: "Future of AI in education with leading experts.",
        location: "Dehradun, Uttarakhand",
        date: "07 February, 2024",
        image: "/Event2.svg",
    },
    {
        id: 3,
        type: "AI Summit",
        title: "EDU - AI Conference 2024",
        description: "Future of AI in education with leading experts.",
        location: "Dehradun, Uttarakhand",
        date: "07 February, 2024",
        image: "/Event3.svg",
    },
];

const relatedEvents = [
    {
        id: 1,
        title: "Future of AI in Education Summit 2024",
        description: "Join industry leaders to discuss the next wave of AI-driven educational transformation and tools.",
        image: "/Event1.svg"
    },
    {
        id: 2,
        title: "Adaptive Learning Workshop for Educators",
        description: "A hands-on workshop focused on implementing adaptive learning strategies in modern classrooms.",
        image: "/Event2.svg"
    },
    {
        id: 3,
        title: "AcadAlly Global Innovation Fair",
        description: "Showcasing the latest student achievements and technological breakthroughs from across the globe.",
        image: "/Event3.svg"
    }
];

export default function EventContent() {
    return (
        <section className="bg-white py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Text Content */}
                <div className="space-y-6 text-[#333333] mb-12 lg:mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[14px] lg:text-[18px] leading-[1.6] lg:leading-[1.8] font-light"
                    >
                        Education is changing fast, and with technology like the AI powered learning app for students, 
                        choosing between customised and standard evaluations is a big topic. Customised assessments, 
                        offered by platforms like AcadAlly, use the learning AI app for students to create tests that 
                        fit each student&apos;s needs, leading to better results.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[14px] lg:text-[18px] leading-[1.6] lg:leading-[1.8] font-light"
                    >
                        Standard assessments follow the same format for everyone. This blog compares both to show how 
                        the online learning app for students like AcadAlly makes a difference. Let’s explore which 
                        is better for students and why the online AI learning app is improving education.
                    </motion.p>
                </div>

                {/* Image Layout */}
                <div className="block lg:hidden">
                    {/* Mobile Specific Layout: 1 big + 3 small in a row */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-gray-200"
                        >
                            <Image
                                src={eventImages[0].src}
                                alt={eventImages[0].alt}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <div className="grid grid-cols-3 gap-3">
                            {eventImages.slice(1, 4).map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative aspect-square rounded-[12px] overflow-hidden bg-gray-200"
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hidden lg:grid grid-cols-3 gap-6">
                    {/* Desktop Layout: 3x2 Grid */}
                    {eventImages.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-gray-100"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Explore More Section */}
                <div className="mt-16 lg:mt-24 mb-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center text-[24px] lg:text-[40px] leading-tight mb-12 font-['Poppins'] font-bold text-[#333333]"
                    >
                        <span className="text-[#1C4CC3]">Explore More</span> From Our Events
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {eventsData.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <EventCard event={event} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-2 mt-12 lg:mt-16">
                        <button className="w-10 h-10 rounded-lg bg-[#EBF2FF] flex items-center justify-center text-[#1C4CC3] hover:bg-[#1C4CC3] hover:text-white transition-colors cursor-pointer">
                            <FiChevronLeft size={20} />
                        </button>
                        <button className="w-10 h-10 rounded-lg border-2 border-[#1C4CC3] text-[#1C4CC3] font-bold flex items-center justify-center cursor-pointer">
                            1
                        </button>
                        <button className="w-10 h-10 rounded-lg bg-[#EBF2FF] text-[#535353] font-medium flex items-center justify-center hover:bg-[#1C4CC3]/10 cursor-pointer">
                            2
                        </button>
                        <button className="w-10 h-10 rounded-lg bg-[#EBF2FF] text-[#535353] font-medium flex items-center justify-center hover:bg-[#1C4CC3]/10 cursor-pointer">
                            3
                        </button>
                        <button className="w-10 h-10 rounded-lg bg-[#1C4CC3] flex items-center justify-center text-white cursor-pointer">
                            <FiChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function EventCard({ event }: { event: any }) {
    return (
        <div className="bg-white rounded-[24px] overflow-hidden border border-[#1C4CC314] shadow-[0_10px_30px_rgba(28,76,195,0.05)] hover:shadow-[0_20px_50px_rgba(28,76,195,0.12)] transition-all duration-300 flex flex-col h-full group">
            {/* Image Section */}
            <div className="relative h-[200px] lg:h-[240px] w-full overflow-hidden">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 font-['Poppins']">
                    {event.type}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 lg:p-6 flex-1 flex flex-col">
                <h3 className="text-[18px] lg:text-[20px] font-bold text-[#383838] mb-2 font-['Poppins']">
                    {event.title}
                </h3>
                <p className="text-gray-500 text-[12px] lg:text-[14px] font-medium mb-6 line-clamp-2 font-['Poppins']">
                    {event.description}
                </p>

                <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                            <Image src="/event-location-pin-icon.svg" alt="Location" width={16} height={16} />
                        </div>
                        <span className="text-gray-600 text-[13px] lg:text-[14px] font-medium font-['Poppins']">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EBF2FF] flex items-center justify-center shrink-0">
                            <Image src="/event-date-calendar-icon.svg" alt="Calendar" width={16} height={16} />
                        </div>
                        <span className="text-gray-600 text-[13px] lg:text-[14px] font-medium font-['Poppins']">{event.date}</span>
                    </div>
                </div>

                {/* Footer Link */}
                <Link
                    href="/event"
                    className="mt-auto py-3 bg-[#1C4CC30D] -mx-5 lg:-mx-6 -mb-5 lg:-mb-6 px-5 lg:px-6 border-t border-[#1C4CC3]/10 group-hover:bg-[#1C4CC3] transition-colors duration-300 flex items-center justify-between text-[#1C4CC3] font-bold text-[14px] lg:text-[15px] group-hover:text-white font-['Poppins']"
                >
                    Read More
                    <FiArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
            </div>
        </div>
    );
}
