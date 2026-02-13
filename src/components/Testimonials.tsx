"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, } from "motion/react";
import { RadialText } from "./RadialText";
import BelowHeading from "./BelowHeading";

const testimonials = {
    educators: [
        {
            id: 1,
            name: "Priya Sharma",
            role: "Principal",
            school: "Delhi Public School",
            quote: "AcadAlly's personalized approach has transformed how my students engage with mathematics. The 3D visualizations make complex concepts accessible.",
            rating: 5,
            videoThumbnail: "/Educators.jpg"
        },
        {
            id: 2,
            name: "Priya Sharma",
            role: "Principal",
            school: "Delhi Public School",
            quote: "AcadAlly's personalized approach has transformed how my students engage with mathematics. The 3D visualizations make complex concepts accessible.",
            rating: 5,
            videoThumbnail: "/Educators.jpg"
        },
        {
            id: 3,
            name: "Priya Sharma",
            role: "Principal",
            school: "Delhi Public School",
            quote: "AcadAlly's personalized approach has transformed how my students engage with mathematics. The 3D visualizations make complex concepts accessible.",
            rating: 5,
            videoThumbnail: "/Educators.jpg"
        },
        {
            id: 4,
            name: "Priya Sharma",
            role: "Principal",
            school: "Delhi Public School",
            quote: "AcadAlly's personalized approach has transformed how my students engage with mathematics. The 3D visualizations make complex concepts accessible.",
            rating: 5,
            videoThumbnail: "/Educators.jpg"
        },
    ],
    teachers: [
        {
            id: 3,
            name: "Anita Desai",
            role: "Math Teacher",
            school: "St. Mary's School",
            quote: "The predictive analytics help me identify struggling students early and provide targeted support. It's a game-changer for educators.",
            rating: 5,
            videoThumbnail: "/teachers.svg"
        },
        {
            id: 4,
            name: "Anita Desai",
            role: "Math Teacher",
            school: "St. Mary's School",
            quote: "The predictive analytics help me identify struggling students early and provide targeted support. It's a game-changer for educators.",
            rating: 5,
            videoThumbnail: "/teachers.svg"
        }
    ],
    students: [
        {
            id: 4,
            name: "Arjun Patel",
            role: "Grade 10 Student",
            school: "Kendriya Vidyalaya",
            quote: "Learning with AcadAlly is so much fun! The AI tutor explains things in a way I actually understand, and my grades have improved.",
            rating: 5,
            videoThumbnail: "/students.svg"
        },
        {
            id: 4,
            name: "Arjun Patel",
            role: "Grade 10 Student",
            school: "Kendriya Vidyalaya",
            quote: "Learning with AcadAlly is so much fun! The AI tutor explains things in a way I actually understand, and my grades have improved.",
            rating: 5,
            videoThumbnail: "/students.svg"
        }
    ]
};

export default function Testimonials() {
    const [activeTab, setActiveTab] = useState<"educators" | "teachers" | "students">("educators");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const currentTestimonials = testimonials[activeTab];
    const totalTestimonials = currentTestimonials.length;
    const totalPages = Math.ceil(totalTestimonials / itemsPerPage);

    const nextTestimonial = useCallback(() => {
        if (itemsPerPage === 1 && scrollRef.current) {
            const isLast = currentIndex === totalPages - 1;
            if (isLast) {
                scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: 'smooth' });
            }
        } else {
            setCurrentIndex((prev) => (prev + 1) % totalPages);
        }
    }, [itemsPerPage, totalPages, currentIndex]);

    const prevTestimonial = useCallback(() => {
        if (itemsPerPage === 1 && scrollRef.current) {
            const isFirst = currentIndex === 0;
            if (isFirst) {
                scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: 'smooth' });
            }
        } else {
            setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
        }
    }, [itemsPerPage, totalPages, currentIndex]);

    // Auto-scroll every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 10000);
        return () => clearInterval(interval);
    }, [nextTestimonial]);

    // Update currentIndex based on scroll position for mobile
    useEffect(() => {
        const handleScroll = () => {
            if (itemsPerPage === 1 && scrollRef.current) {
                const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
                if (index !== currentIndex) { // Only update if index has actually changed
                    setCurrentIndex(index);
                }
            }
        };
        const el = scrollRef.current;
        if (el && itemsPerPage === 1) {
            el.addEventListener('scroll', handleScroll);
        }
        return () => el?.removeEventListener('scroll', handleScroll);
    }, [itemsPerPage, currentIndex]); // currentIndex is needed here to ensure handleScroll uses the latest state

    // Reset index when tab or items per page changes
    useEffect(() => {
        if (currentIndex !== 0) setCurrentIndex(0);
        if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    }, [activeTab, itemsPerPage]); // Don't include currentIndex in deps to avoid infinite loop as noted by user feedback previously


    return (
        <div className="bg-[#F8FBFF] py-12 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12 xl:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <RadialText text="Testimonials" />
                    <BelowHeading>
                        Students, Parents, Teachers, and Schools share how <span className="text-main-page-secondary">AcadAlly.ai</span> is transforming the way they learn, teach, and grow together.
                    </BelowHeading>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12 px-2">
                    <div className="flex bg-[#EBF2FF] rounded-full p-1 md:p-1.5 w-full max-w-lg md:max-w-xl">
                        {(["educators", "students", "teachers"] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 py-2 md:py-3 px-2 md:px-6 rounded-full font-bold text-xs sm:text-sm md:text-base transition-all ${activeTab === tab
                                    ? "bg-main-page-secondary text-white shadow-md"
                                    : "text-[#8EACF3] hover:text-main-page-secondary"
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Testimonial Container */}
                <div
                    ref={scrollRef}
                    className={`flex ${itemsPerPage === 1 ? 'overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4' : 'overflow-hidden'} gap-6 md:gap-8 mb-12 transition-all duration-500`}
                >
                    {currentTestimonials.map((testimonial, index) => {
                        // On desktop/tablet, only show the relevant slice
                        const isVisible = itemsPerPage === 1 || (index >= currentIndex * itemsPerPage && index < (currentIndex + 1) * itemsPerPage);

                        if (!isVisible) return null;

                        return (
                            <motion.div
                                key={`${activeTab}-${testimonial.id}-${index}`}
                                className={`flex-shrink-0 snap-center transition-all duration-500 ${itemsPerPage === 1 ? 'w-full' : itemsPerPage === 2 ? 'w-[calc(50%-12px)]' : 'w-[calc(33.33%-16px)]'
                                    }`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <TestimonialCard testimonial={testimonial} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Pagination and Arrows */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8 md:mt-16">
                    <div className="flex items-center gap-6">
                        <span className="text-main-page-secondary font-bold text-lg min-w-[60px]">
                            {currentIndex + 1} of {totalPages}
                        </span>
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2.5 rounded-full transition-all cursor-pointer ${index === currentIndex
                                        ? "w-8 bg-main-page-secondary"
                                        : "w-2.5 bg-[#D1D9E6]"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prevTestimonial}
                            className="w-14 h-14 rounded-full border-2 border-[#D1D9E6] flex items-center justify-center text-main-page-secondary hover:border-main-page-secondary transition-all cursor-pointer group"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="w-14 h-14 rounded-full border-2 border-[#D1D9E6] flex items-center justify-center text-main-page-secondary hover:border-main-page-secondary transition-all cursor-pointer group"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform">
                                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TestimonialCard({ testimonial }: {
    testimonial: {
        rating: number;
        quote: string;
        name: string;
        role: string;
        school: string;
        videoThumbnail: string;
    }
}) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E9EFFD] flex flex-col h-full hover:shadow-lg transition-all border-b-4 border-b-transparent hover:border-b-main-page-secondary">
            {/* Video Thumbnail */}
            <div className="relative mb-6 rounded-xl overflow-hidden aspect-video group cursor-pointer">
                <Image
                    src={testimonial.videoThumbnail}
                    alt={testimonial.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-main-page-secondary/20 group-hover:bg-main-page-secondary/10 transition-colors z-10" />

                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-14 h-14 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md border border-white/50 group-hover:scale-110 transition-transform shadow-xl">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1">
                            <path d="M8 5V19L19 12L8 5Z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Quote Icon */}
            <div className="mb-4">
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="text-main-page-secondary">
                    <path d="M0 11.2353C0 4.14502 5.09453 0 10.3284 0V4.31373C7.42289 4.31373 5.45274 5.92157 5.45274 8.78431H10.3284V20H0V11.2353ZM17.6716 11.2353C17.6716 4.14502 22.7662 0 28 0V4.31373C25.0945 4.31373 23.1244 5.92157 23.1244 8.78431H28V20H17.6716V11.2353Z" fill="currentColor" />
                </svg>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < testimonial.rating ? "#FFD700" : "#D1D9E6"}>
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                ))}
            </div>

            {/* Quote */}
            <p className="text-faded-text text-base leading-relaxed mb-8 flex-1 italic">
                &quot;{testimonial.quote}&quot;
            </p>

            {/* Author */}
            <div className="pt-6 border-t border-[#F0F4FF]">
                <h4 className="font-bold text-main-page-secondary text-lg mb-0.5">{testimonial.name}</h4>
                <p className="text-faded-text text-sm font-medium uppercase tracking-wider">
                    {testimonial.role} <span className="mx-2 text-[#D1D9E6]">|</span> {testimonial.school}
                </p>
            </div>
        </div>
    );
}
