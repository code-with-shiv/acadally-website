"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function StudentAchievements() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imagesPerSlide, setImagesPerSlide] = useState(1);

    // Array of images for the gallery section (reusing from About.tsx as per screenshot)
    const galleryImages = [
        "/teacher-about2.svg",
        "/teacher-about3.svg",
        "/teacher-about4.svg",
        "/teacher-about5.svg",
        "/teacher-about3.svg",
        "/teacher-about2.svg",
        "/teacher-about4.svg",
        "/teacher-about5.svg",
        "/teacher-about2.svg",
        "/teacher-about3.svg",
        "/teacher-about5.svg",
        "/teacher-about4.svg"
    ];

    const getImagesPerSlide = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 1024) return 1; // Mobile/Tablet: 1 image
            return 3; // Desktop: 3 images
        }
        return 1;
    };

    useEffect(() => {
        const updateImagesPerSlide = () => {
            setImagesPerSlide(getImagesPerSlide());
            setCurrentSlide(0); // Reset to first slide when screen size changes
        };

        updateImagesPerSlide();
        window.addEventListener('resize', updateImagesPerSlide);
        return () => window.removeEventListener('resize', updateImagesPerSlide);
    }, []);

    const totalSlides = Math.ceil(galleryImages.length / imagesPerSlide);

    // Get current images based on slide and screen size
    const getCurrentImages = () => {
        const startIndex = currentSlide * imagesPerSlide;
        const endIndex = startIndex + imagesPerSlide;
        return galleryImages.slice(startIndex, endIndex);
    };

    return (
        <div className="relative overflow-hidden bg-white">
            <div className="relative min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-27 py-8 sm:py-12 md:py-16 flex flex-col gap-8 sm:gap-12 md:gap-16">
                {/* Top Section: Banner and Text */}
                <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch">
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                        <div className="relative w-full h-full min-h-[300px] lg:min-h-0">
                            <Image
                                src="/teacher-about1.svg"
                                alt="Student Achievements Banner"
                                fill
                                className="object-cover rounded-2xl shadow-sm"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left justify-center py-4 lg:py-8"
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            Student <span className="text-[var(--orange-primary)]">Achievements</span> & Milestones
                        </h2>
                        <p className="text-faded-text font-medium text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                            Celebrating the brilliance, creativity, and &quot;Aha!&quot; moments of the AcadAlly.ai community.
                        </p>
                        <div className="flex justify-center lg:justify-start mt-2">
                            <button className="bg-[var(--orange-primary)] text-white font-semibold px-10 py-4 rounded-2xl hover:bg-[var(--orange-primary)]/95 transition-all shadow-md hover:shadow-lg text-base sm:text-lg">
                                Students: Start Your Journey
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Gallery Section */}
                <div className="relative w-full">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {getCurrentImages().map((imageSrc, index) => {
                            const isThirdImage = index === 2;
                            return (
                                <div
                                    key={`${currentSlide}-${index}`}
                                    className={`flex justify-center h-full ${isThirdImage ? "lg:col-span-2" : "lg:col-span-1"
                                        }`}
                                >
                                    <div className="relative w-full aspect-video lg:h-[250px] lg:aspect-auto">
                                        <Image
                                            src={imageSrc}
                                            alt={`Gallery Image ${index + 1}`}
                                            fill
                                            className="object-cover rounded-2xl shadow-sm"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Pagination Dots - Positioned bottom right on desktop */}
                    {totalSlides > 1 && (
                        <div className="flex justify-center lg:justify-end items-center gap-2 mt-6 lg:mt-8">
                            <div className="flex gap-2">
                                {Array.from({ length: totalSlides }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                                            ? 'w-10 bg-[var(--orange-primary)]'
                                            : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
