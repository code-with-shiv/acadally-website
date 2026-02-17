import { HiOutlineSearch, HiOutlineClipboardCheck } from "react-icons/hi";
import { HiOutlineBookOpen, HiOutlineBeaker } from "react-icons/hi2";
import AboveHeading from "./AboveHeading";
import BelowHeading from "./BelowHeading";
import Button from "./Button";
import Heading from "./Heading";
import { StatCard } from "./StatCard";

export default function TeachersMain() {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
            {/* Background Background Pattern (Concentric Circles) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute w-[400px] h-[400px] border border-blue-200 rounded-full" />
                    <div className="absolute w-[800px] h-[800px] border border-blue-200 rounded-full" />
                    <div className="absolute w-[1200px] h-[1200px] border border-blue-200 rounded-full" />
                </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[15%] left-[15%] text-blue-100 transform -rotate-12 bg-white p-2 rounded-xl shadow-sm border border-blue-50">
                    <HiOutlineSearch size={32} />
                </div>
                <div className="absolute top-[15%] right-[15%] text-blue-100 transform rotate-12 bg-white p-2 rounded-xl shadow-sm border border-blue-50">
                    <HiOutlineBookOpen size={32} />
                </div>
                <div className="absolute bottom-[40%] left-[15%] text-blue-100 transform rotate-[-15deg] bg-white p-2 rounded-xl shadow-sm border border-blue-50">
                    <HiOutlineBeaker size={32} />
                </div>
                <div className="absolute bottom-[40%] right-[15%] text-blue-100 transform rotate-[15deg] bg-white p-2 rounded-xl shadow-sm border border-blue-50">
                    <HiOutlineClipboardCheck size={32} />
                </div>
            </div>

            <main className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20 flex flex-col items-center text-center">
                {/* Badge */}
                <div className="bg-[#E9E7F6] text-[#393091] px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                    #1 AI Learning Platform 2025
                </div>

                {/* Heading */}
                <div className="max-w-4xl flex flex-col gap-1 md:gap-2 mb-4 px-2">

                    <AboveHeading>
                        <span className="text-purple-student font-medium text-xl md:text-2xl lg:text-3xl tracking-tight opacity-90">
                            India&apos;s First AI Engine for
                        </span>
                    </AboveHeading>

                    <Heading
                        element={
                            <h1 className="text-purple-student text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight lg:leading-[1.1]">
                                Insight-Driven<br />Teaching
                            </h1>
                        }
                    />
                </div>

                {/* Subheading */}
                <div className="mb-6">
                    <BelowHeading>
                        Great teaching deserves great tools. Let AI handle the heavy lifting.
                    </BelowHeading>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col mt-2 sm:flex-row gap-4 mb-10 w-full justify-center px-4">
                    <Button
                        text="Teachers: Sign In"
                        classes="bg-[#393091] text-white px-8 md:px-10 py-4 md:py-5 rounded-3xl text-lg md:text-xl w-full sm:w-auto shadow-lg shadow-blue-900/20"
                    />
                    <Button
                        text="Schools: Schedule a Demo"
                        classes="bg-white text-[#393091] border-2 border-[#393091] px-8 md:px-10 py-4 md:py-5 rounded-3xl text-lg md:text-xl w-full sm:w-auto"
                    />
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-3 gap-2 md:gap-6 w-full max-w-5xl">
                    <StatCard value="500+" label="Educators" />
                    <StatCard value="25%" label="Faster Assessments" />
                    <StatCard value="40%" label="Time Saved" />
                </div>
            </main>
        </div>
    )
}