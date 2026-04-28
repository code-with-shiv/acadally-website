import AboveHeading from "./AboveHeading";
import BelowHeading from "./BelowHeading";
import Button from "./Button";
import Heading from "./Heading";
import { StatCard } from "./StatCard";
import { HiOutlineSearch, HiOutlineClipboardCheck } from "react-icons/hi";
import { HiOutlineBookOpen, HiOutlineBeaker, HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlinePuzzlePiece, HiOutlinePresentationChartLine } from "react-icons/hi2";
import { motion } from "motion/react";

export default function SchoolsMain({ onOpenDemo }: { onOpenDemo?: () => void }) {
    return (
        <main className="relative z-10 mx-auto pt-8 md:pt-16 pb-10 flex flex-col items-center text-center">
            {/* Background Effects specifically for Badge, Heading, Subheading */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
                {/* Center Glowing Gradient */}
                <div className="hidden md:block absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[var(--main-page-secondary)] opacity-15 rounded-full blur-[80px]"></div>

                {/* Concentric Circles */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] border border-blue-200 rounded-full" />
                        <div className="absolute w-[560px] h-[560px] md:w-[800px] md:h-[800px] border border-blue-200 rounded-full" />
                        <div className="absolute w-[840px] h-[840px] md:w-[1200px] md:h-[1200px] border border-blue-200 rounded-full" />
                    </div>
                </div>

                {/* Floating Icons positioned relative to the heading area */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Inner Orbit (Radius ~200px) */}
                    <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                        <motion.div
                            animate={{ rotate: [-45, 315] }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                <motion.div
                                    animate={{ 
                                        rotate: [45, -315],
                                        y: [0, -8, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
                                    transition={{ 
                                        rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                                        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                        scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="text-blue-200 bg-white/50 p-1.5 md:p-2 rounded-lg md:rounded-xl border border-blue-100 backdrop-blur-sm cursor-default shadow-sm"
                                >
                                    <HiOutlineAcademicCap className="w-5 h-5 md:w-7 md:h-7" />
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div
                            animate={{ rotate: [135, 495] }}
                            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                <motion.div
                                    animate={{ 
                                        rotate: [-135, -495],
                                        y: [0, 8, 0],
                                        scale: [1, 1.03, 1]
                                    }}
                                    whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
                                    transition={{ 
                                        rotate: { duration: 35, repeat: Infinity, ease: "linear" },
                                        y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                                        scale: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="text-blue-200 bg-white/50 p-1.5 md:p-2 rounded-lg md:rounded-xl border border-blue-100 backdrop-blur-sm cursor-default shadow-sm"
                                >
                                    <HiOutlineLightBulb className="w-5 h-5 md:w-7 md:h-7" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Middle Orbit (Radius ~400px) */}
                    <div className="absolute w-[560px] h-[560px] md:w-[800px] md:h-[800px]">
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                <motion.div
                                    animate={{
                                        rotate: [0, -360],
                                        y: [0, -12, 0],
                                        scale: [1, 1.04, 1]
                                    }}
                                    whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
                                    transition={{
                                        rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                        scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="text-blue-200 bg-white/50 p-1.5 md:p-2 rounded-lg md:rounded-xl border border-blue-100 backdrop-blur-sm cursor-default"
                                >
                                    <HiOutlineSearch className="w-5 h-5 md:w-7 md:h-7" />
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div
                            animate={{ rotate: [180, 540] }}
                            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                <motion.div
                                    animate={{
                                        rotate: [-180, -540],
                                        y: [0, 10, 0],
                                        scale: [1, 1.06, 1]
                                    }}
                                    whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
                                    transition={{
                                        rotate: { duration: 45, repeat: Infinity, ease: "linear" },
                                        y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                                        scale: { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="text-blue-200 bg-white/50 p-1.5 md:p-2 rounded-lg md:rounded-xl border border-blue-100 backdrop-blur-sm cursor-default"
                                >
                                    <HiOutlineBookOpen className="w-5 h-5 md:w-7 md:h-7" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Outer Orbit (Radius ~600px) */}
                    <div className="absolute w-[840px] h-[840px] md:w-[1200px] md:h-[1200px]">
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                <motion.div
                                    animate={{ 
                                        rotate: [0, -360],
                                        y: [0, -12, 0],
                                        scale: [1, 1.04, 1]
                                    }}
                                    whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
                                    transition={{ 
                                        rotate: { duration: 50, repeat: Infinity, ease: "linear" },
                                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                        scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="text-blue-200 bg-white/50 p-1.5 md:p-2 rounded-lg md:rounded-xl border border-blue-100 backdrop-blur-sm cursor-default shadow-sm"
                                >
                                    <HiOutlinePuzzlePiece className="w-5 h-5 md:w-7 md:h-7" />
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div
                            animate={{ rotate: [90, 450] }}
                            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                <motion.div
                                    animate={{ 
                                        rotate: [-90, -450],
                                        y: [0, -10, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
                                    transition={{ 
                                        rotate: { duration: 55, repeat: Infinity, ease: "linear" },
                                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="text-blue-200 bg-white/50 p-1.5 md:p-2 rounded-lg md:rounded-xl border border-blue-100 backdrop-blur-sm cursor-default shadow-sm"
                                >
                                    <HiOutlineBeaker className="w-5 h-5 md:w-7 md:h-7" />
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div
                            animate={{ rotate: [180, 540] }}
                            transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                <motion.div
                                    animate={{ 
                                        rotate: [-180, -540],
                                        y: [0, 9, 0],
                                        scale: [1, 1.06, 1]
                                    }}
                                    whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
                                    transition={{ 
                                        rotate: { duration: 58, repeat: Infinity, ease: "linear" },
                                        y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                                        scale: { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="text-blue-200 bg-white/50 p-1.5 md:p-2 rounded-lg md:rounded-xl border border-blue-100 backdrop-blur-sm cursor-default shadow-sm"
                                >
                                    <HiOutlinePresentationChartLine className="w-5 h-5 md:w-7 md:h-7" />
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div
                            animate={{ rotate: [270, 630] }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                <motion.div
                                    animate={{ 
                                        rotate: [-270, -630],
                                        y: [0, 8, 0],
                                        scale: [1, 1.03, 1]
                                    }}
                                    whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
                                    transition={{ 
                                        rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                                        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                        scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                    className="text-blue-200 bg-white/50 p-1.5 md:p-2 rounded-lg md:rounded-xl border border-blue-100 backdrop-blur-sm cursor-default shadow-sm"
                                >
                                    <HiOutlineClipboardCheck className="w-5 h-5 md:w-7 md:h-7" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Badge */}
            <div className="bg-[color-mix(in_srgb,var(--main-page-secondary),transparent_92%)] text-main-page-secondary px-4 py-2 md:px-8 md:py-2 rounded-[32px] md:rounded-[120px] text-[10px] md:text-[16px] font-medium md:font-semibold leading-[20px] md:leading-[24px] md:tracking-[0.04em] mb-4 md:mb-10">
                #1 AI Learning Platform {new Date().getFullYear()}
            </div>

            {/* Heading */}
            <div className=" flex flex-col gap-1 md:gap-2 mb-2 md:mb-6 px-2">

                <AboveHeading>
                    <span className="text-main-page-secondary font-medium text-[20px] md:text-[48px] lg:text-[48px] tracking-tight leading-[30px] md:leading-[120%]">
                        AcadAlly: <br className=" md:hidden" /> <span><span className="md:text-black">The Pioneering AI Platform for</span></span>
                    </span>
                </AboveHeading>

                <Heading
                    element={
                        <h1 className="text-main-page-secondary text-[32px] md:text-[48px] lg:text-[48px] font-bold md:font-semibold tracking-tight leading-[40px] md:leading-[120%] text-center">
                            Global School Leaders
                        </h1>
                    }
                />
            </div>

            {/* Subheading */}
            <div className="mb-4 md:max-w-4xl mt-0 md:mt-2">
                <p className="text-[12px] md:text-[20px] font-normal leading-[140%] text-[#000000A6] md:text-faded-text text-center">
                    Empower your institution with real-time data. Support strategic decision-making with instant insights into student, teacher, and school-wide performance.
                </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col mt-2 sm:flex-row gap-4 mb-4 justify-center">
                <Button
                    onClick={onOpenDemo}
                    text="Educators: Schedule a Demo"
                    classes="bg-main-page-secondary text-white font-semibold px-6 py-3 md:px-14 md:py-4 rounded-[32px] md:rounded-[120px] text-[12px] md:text-lg leading-[20px] md:leading-normal w-full sm:w-auto hover:opacity-90 transition-colors outline-none focus:outline-none focus:ring-0"
                />
            </div>

            <div className="mt-2 mb-8">
                <p className="text-main-page-secondary font-medium md:font-medium text-[16px] md:text-[24px] leading-[120%] md:leading-[100%] text-center">Driving Excellence Through Data</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-2 md:gap-10 w-[calc(100%+1.5rem)] -mx-3 md:mx-0 md:w-full max-w-5xl">
                <StatCard value="3X" label="Faster Analytics" color="var(--main-page-secondary)" index={0} />
                <StatCard value="45%" label="Improved Performance" color="var(--main-page-secondary)" index={1} />
                <StatCard value="60%" label="Less Admin Work" color="var(--main-page-secondary)" index={2} />
            </div>
        </main>
    )
}
