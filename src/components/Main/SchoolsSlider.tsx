"use client";
import Image from "next/image";
import { motion, MotionProps } from "motion/react";
import BlueText from "../BlueText";

const schools = [
    { id: 1, name: "Delhi Public School Gaya", logo: "/DPS-GAYA.svg" },
    { id: 2, name: "Billabong High International School", logo: "/billabong-high-international-school-logo.png" },
    { id: 3, name: "National Public School Kudlu", logo: "/NPS-KUDLU.jpeg" },
    { id: 4, name: "Mount Abu Public School", logo: "/MOUNT-ABU.svg" },
    { id: 5, name: "K.R Manglam World School Greater Kailash II ", logo: "/KRMANGLAM.svg" },
    { id: 6, name: "The Newton School", logo: "/newtonschool.svg" },
];

export default function SchoolsSlider({ highlightColor = "text-main-page-secondary" }: { highlightColor?: string }) {
    return (
        <section aria-label="Partner Schools" className="my-8 mt-14 md:mt-0">
            <div className="flex flex-row items-center gap-4 sm:gap-6 lg:gap-8 ">
                {/* Heading Section */}
                <motion.div
                    className="flex-shrink-0 w-[35%] "
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <div className="flex flex-col text-faded-text text-[10px] sm:text-base font-normal text-left">
                        <h2>Partnering with <BlueText text={"leading Private "} /> & <br /> <BlueText text={"Government schools"} /> <span className="hidden lg:inline"> across India</span></h2>
                        <span className="lg:hidden">across India</span>
                    </div>
                </motion.div>

                {/* Scrolling Schools Section */}
                <motion.div
                    className="flex-1 w-[65%] relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    {/* Fade edges - All screen sizes */}
                    <div className="absolute left-0 w-4 lg:w-8 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 w-4 lg:w-8 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="border-l pl-4 md:pl-6 border-gray-300">
                        {/* All Screen Sizes: Continuous scroll */}
                        <div className="overflow-hidden py-2">
                            <div
                                className="flex items-center gap-4 md:gap-6 animate-scroll"
                                style={{
                                    width: "200%",
                                }}
                            >
                                {/* First set of schools */}
                                {schools.map((school) => (
                                    <SchoolLogo key={`first-${school.id}`} school={school} />
                                ))}
                                {/* Duplicate set for seamless loop */}
                                {schools.map((school) => (
                                    <SchoolLogo key={`second-${school.id}`} school={school} />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div >

        </section >
    )
}

type School = { id: number; name: string; logo: string };

// Merge school prop with motion.div props
type SchoolLogoProps = {
    school: School;
} & MotionProps;

function SchoolLogo({ school, ...motionProps }: SchoolLogoProps) {
    return (
        <motion.div
            {...motionProps} // spread motion props (className, whileHover, etc.)
            className="flex-shrink-0 w-11 h-11 lg:w-24 lg:h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center cursor-pointer"
            title={school.name}
            whileHover={{
                filter: "brightness(1.1)",
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
        >
            <Image
                src={school.logo}
                alt={school.name}
                width={112}
                height={112}
                className="w-full h-full object-contain"
            />
        </motion.div>
    );
}