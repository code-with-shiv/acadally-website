"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function LeadershipExcellence() {
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
            <div className="relative min-h-[80vh] px-6 md:px-12 lg:px-24 py-16 flex flex-col gap-16">
                {/* Top Section: Banner and Text */}
                <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-center">
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative w-full aspect-[4/3] max-w-[500px] mx-auto lg:mx-0">
                            <Image
                                src="/teacher-about1.svg" // Reusing representative asset
                                alt="Leadership Excellence Banner"
                                fill
                                className="object-cover rounded-3xl shadow-xl"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left justify-center"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            <span className="text-[var(--main-page-secondary)]">Leadership Excellence</span> in Action
                        </h2>
                        <p className="text-[var(--faded-text)] font-medium text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-80">
                            Our partner school leaders exemplify vision, integrity, and transformational leadership. This gallery captures the heart of the <span className="text-[var(--main-page-secondary)] font-bold">AcadAlly.ai</span> community: strategic planning, community engagement, and student mentorship in action.
                        </p>
                        <div className="flex justify-center lg:justify-start mt-4">
                            <button className="bg-[var(--main-page-secondary)] text-white font-bold px-10 py-4 rounded-3xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl text-lg">
                                Teachers: Sign in
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Gallery Grid */}
                <div className="relative w-full">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {getCurrentImages().map((imageSrc, index) => (
                            <div
                                key={`${currentSlide}-${index}`}
                                className="relative w-full aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-md group"
                            >
                                <Image
                                    src={imageSrc}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Pagination Dots */}
                    {totalSlides > 1 && (
                        <div className="flex justify-center lg:justify-end items-center gap-2 mt-10">
                            <div className="flex gap-2">
                                {Array.from({ length: totalSlides }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                                            ? 'w-10 bg-[var(--main-page-secondary)]'
                                            : 'w-2.5 bg-gray-200 hover:bg-gray-300'
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
