"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, } from "motion/react";
import { RadialText } from "./RadialText";
import BelowHeading from "./BelowHeading";

const testimonials = {
    "School Leaders": [
        {
            id: 1,
            name: "Ms. Anitha Bijesh",
            role: "Principal",
            school: "Delhi Public School Bangalore South",
            quote: "Acadally bridges learning gaps in Math and Science through engaging, tech-driven experiences—empowering students, supporting teachers, and even involving parents in the journey.",
            rating: 4.5,
            videoUrl: "https://youtu.be/MErLjmPbaos?si=Qu3enKarNa3WMeoO",
            videoThumbnail: "/anitha-educator.png"
        }, {
            id: 2,
            name: "Dr. Manila Carvalho",
            role: "Principal",
            school: "Delhi Public School Bangalore East",
            quote: "Acadally transforms education - empowering teachers to teach creatively, students to learn effectively, and leaders to make smarter decisions.",
            rating: 4,
            videoUrl: "https://youtu.be/K6yPm-FSr14?si=6usCOfAwUOOM6ywD",
            videoThumbnail: "/manila-educator.png"
        },
        {
            id: 3,
            name: "Dr. Anupama Ramachandra",
            role: "Principal",
            school: "Delhi Public School E-City",
            quote: "From identifying learning gaps to enabling progress, Acadally makes learning smarter and more effective.",
            rating: 5,
            videoUrl: "https://youtu.be/16zkqPoKp64?si=lYlYrM_ntRfW3CHO",
            videoThumbnail: "/anupama-educator.png"
        },
        {
            id: 4,
            name: "Dr. Manju Lakhanpal",
            role: "Principal",
            school: "Delhi Public School Lucknow",
            quote: "Acadally gives us clear visibility into student progress while making learning more interactive and effective.",
            rating: 4.5,
            videoUrl: "https://youtu.be/2OcSEOWnQYk?si=I4nVvN90MkBnV-5a",
            videoThumbnail: "/manju-educator.png"
        },
        {
            id: 5,
            name: "Dr. A.K. Sinha",
            role: "Principal",
            school: "Delhi Public School Vadodara",
            quote: "Acadally is a powerful, data-driven solution that enhances both teaching and learning while giving us clear visibility into student progress.",
            rating: 4,
            videoUrl: "https://youtu.be/iyPbKdhDce4?si=qxIuLnafzW6WewU5",
            videoThumbnail: "/A.k.-educator.png"
        },
        {
            id: 6,
            name: "Ms. Deepali Sekhon",
            role: "Principal",
            school: "Delhi Public School Harni Vadodara",
            quote: "Acadally has transformed our classrooms - making learning more interactive, joyful, and driven by clear insights.",
            rating: 4.5,
            videoUrl: "https://youtu.be/Ecv4wYpJmb8?si=ao38WnkUw4yqxfoR",
            videoThumbnail: "/deepali-educator.png"
        },
        {
            id: 7,
            name: "Ms. Sangeeta Dhamija",
            role: "Principal",
            school: "Delhi Public School Gurugram 67A",
            quote: "Acadally isn’t just a platform - it’s an ally that empowers students, supports teachers, and gives leaders meaningful insights to guide growth.",
            rating: 5,
            videoUrl: "https://youtu.be/azQI86AWf5k?si=5JTeEQ7YNjKT1wUl",
            videoThumbnail: "/sangeeta-educator.png"
        },
        {
            id: 8,
            name: "Ms. Jyoti Gupta",
            role: "Principal",
            school: "KR Mangalam World School Delhi",
            quote: "Using Acadally has been a dream come true in making learning more supportive and student-friendly.",
            rating: 4,
            videoUrl: "https://youtu.be/vxU5Vqu4fjU?si=ytIcA3TyklIOAz0V",
            videoThumbnail: "/jyoti-educator.png"
        },
    ],
    Teachers: [
        {
            id: 1,
            name: "Ms. Jyoti Gupta",
            role: "Principal",
            school: "KR Mangalam World School Delhi",
            quote: "Using Acadally has been a dream come true in making learning more supportive and student-friendly.",
            rating: 4,
            videoUrl: "https://youtu.be/vxU5Vqu4fjU?si=ytIcA3TyklIOAz0V",
            videoThumbnail: "/jyoti-educator.png"
        },
        {
            id: 2,
            name: "Ms. Jyoti Gupta",
            role: "Principal",
            school: "KR Mangalam World School Delhi",
            quote: "Using Acadally has been a dream come true in making learning more supportive and student-friendly.",
            rating: 4,
            videoUrl: "https://youtu.be/vxU5Vqu4fjU?si=ytIcA3TyklIOAz0V",
            videoThumbnail: "/jyoti-educator.png"
        },
        {
            id: 3,
            name: "Ms. Jyoti Gupta",
            role: "Principal",
            school: "KR Mangalam World School Delhi",
            quote: "Using Acadally has been a dream come true in making learning more supportive and student-friendly.",
            rating: 4,
            videoUrl: "https://youtu.be/vxU5Vqu4fjU?si=ytIcA3TyklIOAz0V",
            videoThumbnail: "/jyoti-educator.png"
        },
    ],
    Students: [
        {
            id: 1,
            name: "Abeer Khalra",
            role: "Student Class VI",
            school: "KR Mangalam World School",
            quote: "Acadally helped me turn mistakes into learning moments, and that’s what truly improved my grades.",
            rating: 4.5,
            videoUrl: "https://youtu.be/pieBIXtbW3E?si=UrNzRASEopEd0y7p",
            videoThumbnail: "/abeer-student.png"
        },
        {
            id: 2,
            name: "Stuti Adam",
            role: "Student Class VII",
            school: "DPS Bangalore",
            quote: "AcadAlly makes learning interactive, helps me understand concepts better, and ensures my teachers can guide me based on my progress.",
            rating: 5,
            videoUrl: "https://youtu.be/VArWtufmkx8?si=G-8syczufpzwyGhG",
            videoThumbnail: "/stuti-student.png"
        },
        {
            id: 3,
            name: "Anirudh Mishra",
            role: "Student Class VII",
            school: "DPS Gurugram",
            quote: "Acadally helps me learn better with quizzes and videos, while keeping my teachers updated on my progress.",
            rating: 5,
            videoUrl: "https://youtu.be/qrpm0XaY8RY?si=j_3s4gBpaG3m3Ax-",
            videoThumbnail: "/anirudh-student.png"
        },

    ]
};

export default function Testimonials() {
    const [activeTab, setActiveTab] = useState<"School Leaders" | "Teachers" | "Students">("School Leaders");
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
        if (scrollRef.current) {
            const { scrollLeft, offsetWidth, scrollWidth } = scrollRef.current;
            const isLast = Math.ceil(scrollLeft + offsetWidth) >= scrollWidth;
            
            if (isLast) {
                scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: offsetWidth, behavior: 'smooth' });
            }
        }
    }, []);

    const prevTestimonial = useCallback(() => {
        if (scrollRef.current) {
            const { scrollLeft, offsetWidth, scrollWidth } = scrollRef.current;
            const isFirst = scrollLeft <= 0;
            
            if (isFirst) {
                scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: -offsetWidth, behavior: 'smooth' });
            }
        }
    }, []);

    // Auto-scroll every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 10000);
        return () => clearInterval(interval);
    }, [nextTestimonial]);

    // Update currentIndex based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
                if (index !== currentIndex) {
                    setCurrentIndex(index);
                }
            }
        };
        const el = scrollRef.current;
        if (el) {
            el.addEventListener('scroll', handleScroll);
        }
        return () => el?.removeEventListener('scroll', handleScroll);
    }, [currentIndex]);

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
                        Students, Parents, Teachers, and Schools share how <span className="text-main-page-secondary font-bold">AcadAlly</span> is transforming the way they learn, teach, and grow together
                    </p>
                </motion.div>

                {/* 2. The Tab and Card */}
                <div className="flex flex-col gap-6 lg:gap-0">
                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-0 lg:mb-12 px-2">
                        <div className="flex bg-[#EBF2FF] rounded-[32px] p-2 w-full max-w-lg lg:rounded-full lg:p-1.5 md:max-w-xl">
                            {(["School Leaders", "Students", "Teachers"] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative cursor-pointer flex items-center justify-center flex-1 py-1 px-1 rounded-full text-xs font-semibold leading-5 text-center transition-colors duration-300 md:py-3 md:px-6 lg:text-base lg:font-bold lg:leading-tight z-10 ${activeTab === tab
                                        ? "text-white"
                                        : "text-[#8EACF3] hover:text-main-page-secondary"
                                        }`}
                                >
                                    {tab}
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
                        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 gap-6 md:gap-8 mb-0 lg:mb-12 scroll-smooth"
                    >
                        {currentTestimonials.map((testimonial: any, index: number) => {
                            return (
                                <motion.div
                                    key={`${activeTab}-${testimonial.id}-${index}`}
                                    className={`flex-shrink-0 snap-start transition-all duration-500 ${itemsPerPage === 1 ? 'w-full' : itemsPerPage === 2 ? 'w-[calc(50%-16px)]' : 'w-[calc(33.33%-21.33px)]'
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
                                    onClick={() => {
                                        setCurrentIndex(index);
                                        if (scrollRef.current) {
                                            scrollRef.current.scrollTo({
                                                left: index * scrollRef.current.offsetWidth,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
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
        videoUrl: string;
    }
}) {
    return (
        <div
            className="bg-white rounded-2xl p-4 border-[0.5px] border-[#D1D1D1] flex flex-col h-full transition-all duration-300 hover:border-main-page-secondary/20 lg:rounded-xl lg:border lg:border-[#E9EFFD] cursor-pointer"
            style={{
                boxShadow: "none"
            }}
            onClick={() => window.open(testimonial.videoUrl, '_blank')}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 30px -10px rgba(28, 76, 195, 0.12)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            {/* Video Thumbnail */}
            <div className="relative mb-4 rounded-[12px] overflow-hidden h-[120px] lg:h-auto lg:aspect-video lg:rounded-lg group">
                <Image
                    src={testimonial.videoThumbnail}
                    alt={testimonial.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
