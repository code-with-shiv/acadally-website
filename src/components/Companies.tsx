"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Heading from "./Heading";
import { RadialText } from "./RadialText";

export default function Companies() {
    const companies = [
        { src: "/Tedx.svg", alt: "TEDx", width: 120, height: 60 },
        { src: "/gslc.svg", alt: "GSLC", width: 100, height: 60 },
        { src: "/forbes.svg", alt: "Forbes", width: 120, height: 60 },
        { src: "/startups.svg", alt: "World's Top Startups", width: 120, height: 60 },
        { src: "/woman.svg", alt: "Woman Leaders Forum", width: 140, height: 70 },
        { src: "/et.svg", alt: "ET Inspiring Leaders", width: 150, height: 70 },
        { src: "/fortune.svg", alt: "Fortune Under 40", width: 120, height: 70 },
        { src: "/under40.svg", alt: "40 Under 40", width: 120, height: 70 },
        { src: "/foxstory.svg", alt: "Foxstory India", width: 140, height: 70 },
    ];

    return (
        <section className="relative py-10 lg:py-14 overflow-hidden bg-white">
            {/* Background Gradient Layer - more subtle linear gradient */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg, #F0F7FF 0%, #FFFFFF 100%)" }} />

            <div className="relative flex gap-3 items-center justify-center mx-auto px-4 mb-8 lg:mb-10 text-center">
                <Heading text={"Award &  "} /> <RadialText text={"Recognition"} />
            </div>

            <div className="relative flex overflow-hidden">

                <motion.div
                    className="flex gap-8 lg:gap-12 px-4 lg:px-6 shrink-0"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Double the list for seamless loop */}
                    {[...companies, ...companies].map((company, index) => (
                        <div key={index} className="flex shrink-0 items-center justify-center">
                            <Image
                                src={company.src}
                                alt={company.alt}
                                width={company.width}
                                height={company.height}
                                draggable={false}
                                className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}