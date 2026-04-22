"use client";
import Image from "next/image";
import { motion } from "motion/react";
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
        <section className="relative flex flex-col gap-4 py-8 overflow-hidden bg-white lg:py-10 lg:gap-0">
            {/* Background Gradient Layer */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(90deg, #1C4CC31f 0%, #FFFFFF00 50%, #FF8A001f 100%)" }} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="relative flex gap-3 items-center justify-center mx-auto px-4 mb-0 lg:mb-10 text-center">
                <h2 className="text-base font-medium leading-6 lg:text-4xl lg:font-medium flex flex-row items-baseline justify-center gap-1 flex-wrap text-center">
                    Awards and <RadialText as="span" className="text-base font-medium leading-6 lg:text-4xl lg:font-semibold lg:leading-tight" text={"Recognition"} />
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex overflow-hidden">

                <motion.div
                    className="flex gap-[5.18px] lg:gap-12 px-4 lg:px-6 shrink-0"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Double the list for seamless loop */}
                    {[...companies, ...companies].map((company, index) => (
                        <div key={index} className="flex border-[0.52px] border-main-page-secondary/20 p-3 rounded-[4.14px] shrink-0 items-center justify-center w-[130px] h-[75px] bg-white lg:border lg:p-6 lg:rounded-lg lg:w-64 lg:h-32">
                            <Image
                                src={company.src}
                                alt={company.alt}
                                width={200}
                                height={100}
                                draggable={false}
                                className="max-w-full max-h-full object-contain transition-transform duration-300"
                            />
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}