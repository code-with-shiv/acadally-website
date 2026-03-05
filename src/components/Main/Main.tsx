"use client"
import Button from "../Button";
import Heading from "../Heading";
import TextRotator from "../TextRotator";
import BelowHeading from "../BelowHeading";
import BlueText from "../BlueText";
import Image from "next/image";
import { motion } from "motion/react";

export default function Main({ onOpenModal }: { onOpenModal: () => void }) {

    return (
        <section className="flex px-6 lg:px-20 flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 mb-10">
            <div className="flex flex-col gap-6 md:w-1/2">
                <div className="mt-4">
                    <button className="rounded-full px-4 md:px-5 py-2 font-semibold text-sm hover:opacity-90 transition-opacity bg-main-page-secondary/10 text-main-page-secondary">
                        #1 AI Learning Platform 2025
                    </button>
                </div>
                <div>
                    <Heading as="h1" className="font-medium" element={<>India&apos;s First AI-Powered Personalized Learning Evolution for <span className="relative inline-block"><TextRotator items={[
                        { text: "Parents", className: "text-main-page-secondary" },
                        { text: "Students", className: "text-orange-primary" },
                        { text: "Schools", className: "text-purple-student" }
                    ]} />
                        <Image src="/dash.svg" className="absolute -bottom-2 lg:-bottom-4  -right-10 md:-right-14 w-full h-3 lg:h-4" alt="dash" width={20} height={20} />
                    </span></>} />
                </div>
                <div className="max-w-md">
                    <BelowHeading className="font-medium text-justify">
                        Get 1:1 AI tutoring, instant doubt clarification, real-time diagnostic assessments, adaptive learning paths, and personalized remediation—all powered by <BlueText text="AcadAlly" />  to <BlueText text="deliver 40% better learning outcomes" />.
                    </BelowHeading>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full">
                    <Button
                        onClick={onOpenModal}
                        text="Want it for school?"
                        classes={"bg-main-page-secondary text-white w-full py-2.5 sm:py-3 whitespace-nowrap text-[11px] min-[380px]:text-xs sm:text-sm md:text-base px-1 sm:px-4"}
                    />
                    <Button text="For students" classes={"bg-white border border-main-page-secondary text-main-page-secondary border-2 w-full py-2.5 sm:py-3 whitespace-nowrap text-[11px] min-[380px]:text-xs sm:text-sm md:text-base px-1 sm:px-4"} />
                </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                <div className="absolute md:hidden inset-0 overflow-hidden pointer-events-none -z-10">
                    <Image src="/main-bg.svg" alt="Background decoration" width={840} height={723} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[160%] md:w-[180%] max-w-none opacity-40 md:opacity-70" />
                </div>
                <div className="relative z-10 w-full flex justify-center md:justify-end">
                    <Image src="/main.png" alt="Header Image" width={1200} height={800} priority className="w-[90%] md:w-full h-auto object-contain" />
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-19 lg:top-30 left-0"
                    >
                        <Image src="/main1.svg" alt="Frame" width={120} height={120} priority className="w-30 h-30 object-contain" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-50 lg:top-80 left-0"
                    >
                        <Image src="/main2.svg" alt="Frame" width={160} height={160} priority className="w-34 h-34 lg:w-40 lg:h-40 object-contain" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-40 lg:top-70 left-0"
                    >
                        <Image src="/main3.svg" alt="Frame" width={80} height={80} priority className="w-16 h-16 lg:w-20 lg:h-20 object-contain" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -18, 0] }}
                        transition={{ duration: 4.5, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-40 lg:top-70 right-0"
                    >
                        <Image src="/main4.svg" alt="Frame" width={180} height={180} priority className="w-34 h-34 lg:w-44 lg:h-44 object-contain" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -18, 0] }}
                        transition={{ duration: 4.5, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute hidden lg:block top-100 lg:top-105 -right-10"
                    >
                        <Image src="/Whatsapp-main.svg" alt="Frame" width={40} height={40} priority className="w-10 h-10 lg:w-20 lg:h-20 object-contain" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}