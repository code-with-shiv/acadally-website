"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// Testimonial Data Array
const testimonials = [
    {
        id: 1,
        quote: "As a Senior Designer at AcadAlly, I'm proud to be part of a team that consistently pushes the boundaries of innovation. The collaborative environment, coupled with our mission to impact education, makes every day a rewarding experience. We're not just designing products; we're shaping the future of learning for millions of students.",
        name: "Md. Suhel",
        title: "Senior Designer",
        department: "Product (Ex Employee)",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 2,
        quote: "Working here has given me the opportunity to rethink how technology can bridge the educational gap. Every project feels like a step towards a more equitable learning environment for students across the country.",
        name: "Aisha Khan",
        title: "Lead Engineer",
        department: "Technology",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 3,
        quote: "The culture here is incredible. We are encouraged to experiment and learn from our failures. It's rare to find a place that balances high-performance expectations with such deep empathy for its team members.",
        name: "Rahul Verma",
        title: "Product Manager",
        department: "Product",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 4,
        quote: "Being part of the mission to revolutionize education is deeply fulfilling. The leadership team is transparent, and the cross-functional collaboration is the best I've experienced in my career.",
        name: "Priya Sharma",
        title: "Marketing Lead",
        department: "Growth",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    }
];

export default function TeamTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="w-full py-10 md:py-14 bg-white font-sans max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <h2 className="text-center text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-[#333333] mb-6 md:mb-10 tracking-tight">
                Hear from <span className="text-[#1C4CC3]">our Team</span>
            </h2>

            {/* Testimonial Card Container */}
            <div className="w-full bg-[#FAFBFF] rounded-[2rem] p-6 md:p-8 lg:p-10 flex flex-col items-center">

                <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 relative">

                    {/* Left Side: Image Profile with graphical blobs */}
                    <div className="relative w-full lg:w-[40%] flex justify-center items-center h-[200px] sm:h-[240px] md:h-[280px]">
                        {/* Decorative Background Circles */}
                        <div className="absolute top-[5%] left-[10%] w-10 h-10 rounded-full bg-[#1C4CC3]/15"></div>
                        <div className="absolute bottom-[0%] left-[15%] w-20 h-20 rounded-full bg-[#1C4CC3]/25 z-0"></div>
                        <div className="absolute bottom-[10%] right-[10%] w-12 h-12 rounded-full bg-[#1C4CC3]/15 z-0"></div>

                        {/* Thin gray circular border around image */}
                        <div className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] border border-gray-300 rounded-full z-0"></div>

                        {/* Profile Image (Clipped inside a circle) */}
                        <div className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden shadow-sm z-10 border-[6px] border-[#FAFBFF]">
                            <Image
                                src={currentTestimonial.image}
                                alt={currentTestimonial.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="w-full lg:w-[60%] flex flex-col items-start text-left mt-4 lg:mt-0">
                        {/* Large Quote Icon */}
                        <div className="text-[#1C4CC3] mb-4">
                            <FaQuoteLeft className="text-[2rem] md:text-[3rem]" />
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-[#515151] text-sm md:text-base leading-relaxed mb-4 font-medium">
                            “{currentTestimonial.quote}”
                        </p>

                        {/* Name & Title */}
                        <div className="flex flex-col">
                            <h4 className="text-[#1C4CC3] text-lg font-bold mb-1">
                                {currentTestimonial.name}
                            </h4>
                            <p className="text-[#515151] font-medium text-xs md:text-sm">
                                <span className="font-bold text-[#333333]">{currentTestimonial.title}</span> <span className="mx-2 text-gray-300">|</span> {currentTestimonial.department}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Controls (Outside Card) */}
            <div className="w-full bg-white flex flex-col sm:flex-row items-center justify-between mt-4 md:mt-6 px-2 sm:px-4">

                {/* Pagination Indicators */}
                <div className="flex items-center gap-3">
                    <span className="text-[#1C4CC3] font-bold text-sm">
                        {currentIndex + 1} <span className="text-[#515151] font-normal mx-1">of</span> {testimonials.length}
                    </span>

                    <div className="flex items-center gap-2 ml-4">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex ? "w-6 bg-[#1C4CC3]" : "w-2.5 bg-gray-300"}`}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Arrow Navigation */}
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1C4CC3] flex items-center justify-center text-[#1C4CC3] hover:bg-[#1C4CC3] hover:text-white transition-all active:scale-95"
                        aria-label="Previous Testimonial"
                    >
                        <BsArrowLeft className="text-xl md:text-xl" strokeWidth={0.5} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1C4CC3] flex items-center justify-center text-[#1C4CC3] hover:bg-[#1C4CC3] hover:text-white transition-all active:scale-95"
                        aria-label="Next Testimonial"
                    >
                        <BsArrowRight className="text-xl md:text-xl" strokeWidth={0.5} />
                    </button>
                </div>

            </div>
        </section>
    );
}
