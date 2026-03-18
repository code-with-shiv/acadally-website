import AboveHeading from "./AboveHeading";
import BelowHeading from "./BelowHeading";
import Button from "./Button";
import Heading from "./Heading";
import { StatCard } from "./StatCard";
import { HiOutlineSearch, HiOutlineClipboardCheck } from "react-icons/hi";
import { HiOutlineBookOpen, HiOutlineBeaker } from "react-icons/hi2";

export default function StudentsMain({ onOpenDemo }: { onOpenDemo?: () => void }) {
    return (
        <main className="relative z-10 mx-auto pt-8 md:pt-16 pb-10 flex flex-col items-center text-center">
            {/* Background Effects specifically for Badge, Heading, Subheading */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
                {/* Center Glowing Gradient */}
                <div className="hidden md:block absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[var(--orange-primary)] opacity-15 rounded-full blur-[100px] pointer-events-none"></div>

                {/* Background Pattern (Concentric Circles) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                    <div className="relative w-full h-[80vh] flex items-center justify-center">
                        <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] border border-orange-200 rounded-full" />
                        <div className="absolute w-[560px] h-[560px] md:w-[800px] md:h-[800px] border border-orange-200 rounded-full" />
                        <div className="absolute w-[840px] h-[840px] md:w-[1200px] md:h-[1200px] border border-orange-200 rounded-full" />
                    </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] md:left-[10%] text-orange-200 transform -rotate-12 bg-white/50 p-1.5 md:p-2 rounded-lg md:rounded-xl border border-orange-100 backdrop-blur-sm">
                        <HiOutlineSearch className="w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <div className="absolute top-[10%] right-[5%] md:right-[10%] text-orange-200 transform rotate-12 bg-white/50 p-1.5 md:p-2 rounded-lg md:rounded-xl border border-orange-100 backdrop-blur-sm">
                        <HiOutlineBookOpen className="w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <div className="absolute bottom-[20%] left-[5%] md:left-[10%] text-orange-200 transform rotate-[-15deg] bg-white/50 p-1.5 md:p-2 rounded-lg md:rounded-xl border border-orange-100 backdrop-blur-sm">
                        <HiOutlineBeaker className="w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <div className="absolute bottom-[20%] right-[5%] md:right-[10%] text-orange-200 transform rotate-[15deg] bg-white/50 p-1.5 md:p-2 rounded-lg md:rounded-xl border border-orange-100 backdrop-blur-sm">
                        <HiOutlineClipboardCheck className="w-5 h-5 md:w-7 md:h-7" />
                    </div>
                </div>
            </div>

            {/* Badge */}
            <div className="bg-[#FFF0E0] text-[var(--orange-primary)] px-4 py-2 md:px-8 md:py-2 rounded-[32px] md:rounded-[120px] text-[10px] md:text-[16px] font-medium md:font-semibold mb-4 md:mb-10">
                #1 AI Learning Platform {new Date().getFullYear()}
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-1 md:gap-2 mb-2 md:mb-6 px-2">
                <AboveHeading>
                    <span className="text-[var(--orange-primary)] font-medium text-[20px] md:text-[48px] lg:text-[48px] tracking-tight leading-[30px] md:leading-[120%]">
                        AcadAlly: <br className="md:hidden" /> <span className="text-black md:text-black">India&apos;s First</span>
                    </span>
                </AboveHeading>

                <Heading
                    element={
                        <h1 className="text-[var(--orange-primary)] text-[32px] md:text-[48px] lg:text-[48px] font-bold md:font-semibold tracking-tight leading-[40px] md:leading-[120%] text-center">
                            AI Ally for Learners
                        </h1>
                    }
                />
            </div>

            {/* Subheading */}
            <div className="mb-4 md:max-w-4xl mt-0 md:mt-2">
                <p className="text-[12px] md:text-[20px] font-normal leading-[140%] text-[#000000A6] md:text-faded-text text-center">
                    Master every concept at your own pace—one breakthrough at a time.
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col mt-2 sm:flex-row gap-4 mb-4 justify-center">
                <Button
                    text="Students: Start Learning"
                    classes="bg-[var(--orange-primary)] text-white font-semibold px-6 py-3 md:px-14 md:py-4 rounded-[32px] md:rounded-[120px] text-[12px] md:text-lg leading-[20px] md:leading-normal w-full sm:w-auto hover:opacity-90 transition-colors outline-none focus:outline-none focus:ring-0"
                />
                <Button
                    onClick={onOpenDemo}
                    text="Educators: Schedule a Demo"
                    classes="bg-white text-[var(--orange-primary)] border-2 border-[var(--orange-primary)] font-semibold px-6 py-3 md:px-14 md:py-4 rounded-[32px] md:rounded-[120px] text-[12px] md:text-lg leading-[20px] md:leading-normal w-full sm:w-auto hover:bg-orange-50 transition-colors outline-none focus:outline-none focus:ring-0"
                />
            </div>

            <div className="mt-2 mb-8">
                <p className="text-[var(--orange-primary)] font-medium md:font-medium text-[16px] md:text-[24px] leading-[120%] md:leading-[100%] text-center">Driving Excellence Through Data</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-2 md:gap-10 w-[calc(100%+1.5rem)] -mx-3 md:mx-0 md:w-full max-w-5xl">
                <StatCard value="500+" label="Educators" color="var(--orange-primary)" />
                <StatCard value="25%" label="Faster Assessments" color="var(--orange-primary)" />
                <StatCard value="40%" label="Time Saved" color="var(--orange-primary)" />
            </div>
        </main>
    )
}
