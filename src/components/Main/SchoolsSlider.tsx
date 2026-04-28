"use client";
import Image from "next/image";
import { motion, MotionProps } from "motion/react";
import BlueText from "../BlueText";

const schools = [
    { id: 1, name: "National Public School", logo: "/logo1.svg" },
    { id: 2, name: "Sattva Vikas School", logo: "/logo2.svg" },  
    { id: 3, name: "Billabong High International School", logo: "/logo3.svg" },  
    { id: 4, name: "St. Paul International School", logo: "/logo4.svg" },
    { id: 5, name: "Cygnus International School", logo: "/logo5.svg" },
    { id: 6, name: "Golden Era Millennium School", logo: "/logo6.svg" },
    { id: 7, name: "School of India", logo: "/logo7.svg" },
    { id: 8, name: "KSM Higher Secondary School", logo: "/logo8.svg" },
    { id: 9, name: "Mount Abu School", logo: "/logo9.svg" },  
    { id: 10, name: "Parevartan School", logo: "/logo10.svg" },  
    { id: 11, name: "St. Michael's School", logo: "/logo11.svg" },
    { id: 12, name: "DPS Mysore School", logo: "/logo12.svg" },
    { id: 13, name: "DPS Varodara", logo: "/logo13.svg" },
    { id: 14, name: "Delhi Public School", logo: "/logo14.svg" },
    { id: 15, name: "Gobindnagar Public School", logo: "/logo15.svg" },
    { id: 16, name: "Sattva Vikas School", logo: "/logo16.svg" },  
    { id: 17, name: "DPS Gurugram", logo: "/logo17.svg" },  
    { id: 18, name: "DPS Banglore South", logo: "/logo18.svg" },
    { id: 19, name: "International School of Hyderabad", logo: "/logo19.svg" },
    { id: 20, name: "Bishop Scott Senior Secondary Girl's School", logo: "/logo20.svg" },
    { id: 21, name: "Delhi Public School", logo: "/logo21.svg" },
    { id: 22, name: "Cambridge Innovative School", logo: "/logo22.svg" },
    { id: 23, name: "Avalon World School Dabhoi", logo: "/logo23.svg" },  
    { id: 24, name: "Avalon World School Waghodia", logo: "/logo24.svg" },  
];

export default function SchoolsSlider({ highlightColor = "text-main-page-secondary" }: { highlightColor?: string }) {
    return (
        <section aria-label="Partner Schools" className="my-2 mt-10 md:mt-0">
            <div className="flex flex-row items-center gap-4 sm:gap-6 lg:gap-4">
                {/* Heading Section */}
                <motion.div
                    className="shrink-0 w-fit lg:max-w-[32%] "
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
                    className="flex-1 relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    {/* Fade edges - All screen sizes */}
                    <div className="absolute left-0 w-4 lg:w-8 h-full bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 w-4 lg:w-8 h-full bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

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
            className="shrink-0 w-11 h-11 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center cursor-pointer"
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