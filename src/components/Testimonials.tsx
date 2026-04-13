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
            videoThumbnail: "/Educators.svg"
        },
        {
            id: 2,
            name: "Priya Sharma",
            role: "Principal",
            school: "Delhi Public School",
            quote: "AcadAlly's personalized approach has transformed how my students engage with mathematics. The 3D visualizations make complex concepts accessible.",
            rating: 5,
            videoThumbnail: "/Educators.svg"
        },
        {
            id: 3,
            name: "Priya Sharma",
            role: "Principal",
            school: "Delhi Public School",
            quote: "AcadAlly's personalized approach has transformed how my students engage with mathematics. The 3D visualizations make complex concepts accessible.",
            rating: 5,
            videoThumbnail: "/Educators.svg"
        },
        {
            id: 4,
            name: "Priya Sharma",
            role: "Principal",
            school: "Delhi Public School",
            quote: "AcadAlly's personalized approach has transformed how my students engage with mathematics. The 3D visualizations make complex concepts accessible.",
            rating: 5,
            videoThumbnail: "/Educators.svg"
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
            videoThumbnail: "/Teachers.svg"
        },
        {
            id: 4,
            name: "Anita Desai",
            role: "Math Teacher",
            school: "St. Mary's School",
            quote: "The predictive analytics help me identify struggling students early and provide targeted support. It's a game-changer for educators.",
            rating: 5,
            videoThumbnail: "/Teachers.svg"
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
            videoThumbnail: "/Students.svg"
        },
        {
            id: 4,
            name: "Arjun Patel",
            role: "Grade 10 Student",
            school: "Kendriya Vidyalaya",
            quote: "Learning with AcadAlly is so much fun! The AI tutor explains things in a way I actually understand, and my grades have improved.",
            rating: 5,
            videoThumbnail: "/Students.svg"
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
        <section aria-label="Testimonials" className="lg:px-20 lg:py-5">
            <div className="flex flex-col gap-6 py-10 px-4  mx-auto lg:my-6 lg:py-0 lg:px-0 lg:block lg:gap-0">
                {/* 1. Heading and Description */}
                <motion.div
                    className="text-center mb-0 lg:mb-12 md:mb-8 flex flex-col items-center gap-4 lg:gap-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <RadialText as="h2" className="text-base font-bold leading-[1.2] lg:text-4xl lg:font-bold lg:leading-tight" text="Testimonials" />
                    <p className="text-[12px] font-normal leading-[1.4] text-center text-faded-text lg:text-base lg:leading-relaxed lg:mt-4 lg:font-normal">
                        Students, Parents, Teachers, and Schools share how <span className="text-main-page-secondary font-bold">AcadAlly</span> is transforming the way they learn, teach, and grow together.
                    </p>
                </motion.div>

                {/* 2. The Tab and Card */}
                <div className="flex flex-col gap-6 lg:gap-0">
                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-0 lg:mb-12 px-2">
                        <div className="flex bg-[#EBF2FF] rounded-[32px] p-2 w-full max-w-lg lg:rounded-full lg:p-1.5 md:max-w-xl">
                            {(["educators", "students", "teachers"] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative cursor-pointer flex items-center justify-center flex-1 py-1 px-1 rounded-full text-xs font-semibold leading-5 text-center transition-colors duration-300 md:py-3 md:px-6 lg:text-base lg:font-bold lg:leading-tight z-10 ${activeTab === tab
                                        ? "text-white"
                                        : "text-[#8EACF3] hover:text-main-page-secondary"
                                        }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-main-page-secondary rounded-full -z-10 shadow-md"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Testimonial Container */}
                    <div
                        ref={scrollRef}
                        className={`flex ${itemsPerPage === 1 ? 'overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4' : 'overflow-hidden'} gap-6 md:gap-8 mb-0 lg:mb-12 transition-all duration-500`}
                    >
                        {currentTestimonials.map((testimonial, index) => {
                            // On desktop/tablet, only show the relevant slice
                            const isVisible = itemsPerPage === 1 || (index >= currentIndex * itemsPerPage && index < (currentIndex + 1) * itemsPerPage);

                            if (!isVisible) return null;

                            return (
                                <motion.div
                                    key={`${activeTab}-${testimonial.id}-${index}`}
                                    className={`flex-shrink-0 snap-center transition-all duration-500 ${itemsPerPage === 1 ? 'w-full' : itemsPerPage === 2 ? 'w-[calc(50%-16px)]' : 'w-[calc(33.33%-21.33px)]'
                                        }`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <TestimonialCard testimonial={testimonial} />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* 3. Navigation */}
                <div className="flex items-center justify-between mt-0 lg:mt-16">
                    <div className="flex items-center gap-3 lg:gap-6">
                        <span className="text-main-page-secondary font-bold text-sm min-w-[40px] lg:text-lg lg:min-w-[60px]">
                            {currentIndex + 1} <span className="text-[#535353]">of {totalPages}</span>
                        </span>
                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2.5 rounded-full transition-all cursor-pointer ${index === currentIndex
                                        ? "w-8 bg-main-page-secondary"
                                        : "w-2.5 bg-[#B3B3B3]"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={prevTestimonial}
                            className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-main-page-secondary flex items-center justify-center text-main-page-secondary hover:bg-main-page-secondary transition-all cursor-pointer group"
                        >
                            <Image src="/slider-previous-button-icon.svg" alt="Previous" width={24} height={24} className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-transform" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-main-page-secondary flex items-center justify-center text-main-page-secondary hover:bg-main-page-secondary transition-all cursor-pointer group"
                        >
                            <Image src="/slider-next-button-icon.svg" alt="Next" width={24} height={24} className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
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
        <div
            className="bg-white rounded-2xl p-4 border-[0.5px] border-[#D1D1D1] flex flex-col h-full transition-all duration-300 hover:border-main-page-secondary/20 lg:rounded-xl lg:border lg:border-[#E9EFFD]"
            style={{
                boxShadow: "none"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 30px -10px rgba(28, 76, 195, 0.12)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            {/* Video Thumbnail */}
            <div className="relative mb-4 rounded-[12px] overflow-hidden h-[120px] lg:h-auto lg:aspect-video lg:rounded-lg group cursor-pointer">
                <Image
                    src={testimonial.videoThumbnail}
                    alt={testimonial.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-main-page-secondary/10 group-hover:bg-main-page-secondary/5 transition-colors z-10" />

                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md border border-white/50 group-hover:scale-110 transition-transform shadow-xl">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-0.5">
                            <path d="M8 5V19L19 12L8 5Z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Quote Icon */}
            <div className="mb-3">
                <svg
                    viewBox="0 0 28 20"
                    fill="none"
                    className="text-main-page-secondary rotate-180 w-8 h-8 lg:w-6 lg:h-5"
                >
                    <path
                        d="M0 11.2353C0 4.14502 5.09453 0 10.3284 0V4.31373C7.42289 4.31373 5.45274 5.92157 5.45274 8.78431H10.3284V20H0V11.2353ZM17.6716 11.2353C17.6716 4.14502 22.7662 0 28 0V4.31373C25.0945 4.31373 23.1244 5.92157 23.1244 8.78431H28V20H17.6716V11.2353Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < testimonial.rating ? "#FFD700" : "#D1D9E6"}>
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                ))}
            </div>

            {/* Quote */}
            <p className="text-faded-text text-[12px] font-normal leading-4 mb-3 flex-1 lg:text-[11px] lg:leading-normal">
                &quot;{testimonial.quote}&quot;
            </p>

            {/* Author */}
            <div className="pt-3 border-t border-[#F0F4FF] mt-auto">
                <h3 className="font-bold text-main-page-secondary text-[14px] leading-5 mb-0.5">{testimonial.name}</h3>
                <p className="text-faded-text text-[11px] font-medium">
                    {testimonial.role} <span className="mx-1.5 text-[#D1D9E6]">|</span> {testimonial.school}
                </p>
            </div>
        </div>
    );
}
