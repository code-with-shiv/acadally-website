"use client"
import Button from "../Button";
import Heading from "../Heading";
import TextRotator from "../TextRotator";
import BelowHeading from "../BelowHeading";
import BlueText from "../BlueText";
import Image from "next/image";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function Main({ onOpenModal }: { onOpenModal: () => void }) {
    const router = useRouter();
    return (
        <section className="flex px-4 lg:px-20 lg:pt-6 lg:mt-10 lg:pb-5 flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 mb-2 lg:mb-0">
            <div className="flex flex-col gap-4 lg:gap-6 md:w-1/2">
                <div className="mt-4">
                    <h1 className="w-fit h-6 md:h-auto flex items-center justify-center gap-1 rounded-4xl md:rounded-full bg-main-page-secondary/10 px-4 md:px-5 py-2 md:py-2 font-medium md:font-semibold text-xs md:text-sm leading-5 md:leading-normal text-center hover:opacity-90 transition-opacity text-main-page-secondary">
                        #1 AI Learning Platform {new Date().getFullYear()}
                    </h1>
                </div>
                <div>
                    <Heading as="h1" className="text-3xl leading-[1.2] font-medium md:text-3xl md:leading-tight" element={<>India&apos;s First AI-Powered Personalized Learning Evolution for <span className="relative inline-block"><TextRotator items={[
                        { text: "Parents", className: "text-main-page-secondary" },
                        { text: "Students", className: "text-orange-primary" },
                        { text: "Schools", className: "text-purple-student" }
                    ]} />
                        <Image src="/hand-drawn-underline-decoration.svg" className="absolute -bottom-2 lg:-bottom-4  -right-10 md:-right-14 w-full h-3 lg:h-4" alt="Hand-drawn underline decoration" width={20} height={20} />
                    </span></>} />
                </div>
                <div className="max-w-md">
                    <BelowHeading className="text-[12px] leading-[1.4] font-normal text-justify md:text-sm md:font-medium md:leading-relaxed">
                        Get 1:1 AI tutoring, instant doubt clarification, real-time diagnostic assessments, adaptive learning paths, and personalized remediation—all powered by <BlueText text="AcadAlly" className="text-[12px] leading-[1.4] font-bold md:text-sm md:leading-relaxed md:font-semibold lg:text-base" />  to <BlueText text="deliver 40% better learning outcomes" className="text-[12px] leading-[1.4] font-bold md:text-sm md:leading-relaxed md:font-semibold lg:text-base" />.
                    </BelowHeading>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full">
                    <Button
                        onClick={onOpenModal}
                        text="Want it for school?"
                        classes={"cursor-pointer bg-main-page-secondary text-white w-full h-8 px-4 py-3 gap-1 rounded-[32px] md:h-auto md:py-2.5 md:px-4 md:rounded-full flex items-center justify-center whitespace-nowrap text-[11px] min-[380px]:text-xs sm:text-sm md:text-base"}
                    />
                    <Button
                        onClick={() => { router.push("/students") }}
                        text="For students"
                        classes={"cursor-pointer bg-white border border-main-page-secondary text-main-page-secondary border-2 w-full h-8 px-4 py-3 gap-1 rounded-[32px] md:h-auto md:py-2.5 md:px-4 md:rounded-full flex items-center justify-center whitespace-nowrap text-[11px] min-[380px]:text-xs sm:text-sm md:text-base"}
                    />
                </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                <div className="absolute md:hidden inset-0 overflow-hidden pointer-events-none -z-10">
                    <Image src="/hero-section-background-pattern.svg" alt="AcadAlly Hero Section Background Pattern" width={840} height={723} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[160%] md:w-[180%] max-w-none opacity-40 md:opacity-70" />
                </div>
                <div className="relative z-10 w-full flex justify-center md:justify-end">
                    <Image src="/acadally-platform-overview-hero.png" alt="AcadAlly AI Platform Overview Hero Image" width={1200} height={800} priority className="w-[247px] h-[247px] md:w-full md:h-auto object-contain" />
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-19 lg:top-30 left-0"
                    >
                        <Image src="/ai-tutor-feature-icon.svg" alt="AcadAlly AI Tutor Feature Icon" width={120} height={120} priority className="w-30 h-30 object-contain" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-50 lg:top-80 left-0"
                    >
                        <Image src="/adaptive-learning-path-icon.svg" alt="Adaptive Learning Path and Personalized Curriculum Icon" width={160} height={160} priority className="w-34 h-34 lg:w-40 lg:h-40 object-contain" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-40 lg:top-70 left-0"
                    >
                        <Image src="/instant-doubt-clarification-icon.svg" alt="Instant Doubt Clarification and Resolution Icon" width={80} height={80} priority className="w-16 h-16 lg:w-20 lg:h-20 object-contain" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -18, 0] }}
                        transition={{ duration: 4.5, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-40 lg:top-70 right-0"
                    >
                        <Image src="/real-time-assessment-icon.svg" alt="Real-time Diagnostic Assessment and Analytics Icon" width={180} height={180} priority className="w-34 h-34 lg:w-44 lg:h-44 object-contain" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}