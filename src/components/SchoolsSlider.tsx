"use client";
import Image from "next/image";
import { motion, MotionProps } from "motion/react";
import BlueText from "./BlueText";

const schools = [
    { id: 1, name: "Delhi Public School Gaya", logo: "/DPS-GAYA.svg" },
    { id: 2, name: "Billabong High International School", logo: "/Billabong.svg" },
    { id: 3, name: "National Public School Jayanagar", logo: "/NPS-JAYANAGAR.svg" },
    { id: 4, name: "Mount Abu Public School", logo: "/MOUNT-ABU.svg" },
    { id: 5, name: "K.R Manglam World School Greater Kailash II ", logo: "/KRMANGLAM.svg" },
    { id: 6, name: "The Newton School", logo: "/newtonschool.svg" },
];

export default function SchoolsSlider({ highlightColor = "text-main-page-secondary" }: { highlightColor?: string }) {
    return (
        <div className="my-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-8">
                {/* Heading Section */}
                <motion.div
                    className="flex-shrink-0 sm:w-[30%]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <div className="flex flex-col gap-1 text-faded-text text-lg md:text-lg lg:text-xl font-normal text-center sm:text-left">
                        <div>Partnering with <BlueText text={"leading Private & Government schools"} /> <span className="hidden lg:block">across India</span></div>
                        <div className="lg:hidden">across India</div>
                    </div>
                </motion.div>

                {/* Scrolling Schools Section */}
                <motion.div
                    className="flex-1 sm:w-[70%] relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    {/* Fade edges - All screen sizes */}
                    <div className="absolute left-0 w-4 lg:w-8 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 w-4 lg:w-8 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="sm:border-l sm:pl-6 sm:border-gray-300">
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
            </div>

        </div>
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
            className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center cursor-pointer"
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