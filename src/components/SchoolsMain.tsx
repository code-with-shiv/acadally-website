import AboveHeading from "./AboveHeading";
import BelowHeading from "./BelowHeading";
import Button from "./Button";
import Heading from "./Heading";
import { StatCard } from "./StatCard";

export default function SchoolsMain() {
    return (
        <main className="relative z-10 max-w-4xl mx-auto pt-8 md:pt-16 pb-20 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="bg-[color-mix(in_srgb,var(--main-page-secondary),transparent_92%)] text-[var(--main-page-secondary)] px-6 py-2 rounded-full text-sm font-bold mb-10">
                #1 AI Learning Platform 2025
            </div>

            {/* Heading */}
            <div className="max-w-4xl flex flex-col gap-1 md:gap-2 mb-6 px-2">

                <AboveHeading>
                    <span className="text-[var(--main-page-secondary)] font-bold text-4xl md:text-4xl lg:text-4xl tracking-tight leading-tight">
                        AcadAlly.ai: <span className="text-[var(--faded-text)]">The Pioneering AI Platform for</span>
                    </span>
                </AboveHeading>

                <Heading
                    element={
                        <h1 className="text-[var(--main-page-secondary)] text-4xl md:text-5xl lg:text-5xl font-bold tracking-tighter leading-tight">
                            Global School Leaders
                        </h1>
                    }
                />
            </div>

            {/* Subheading */}
            <div className="mb-10 mt-2">
                <BelowHeading className="font-medium">
                    Empower your institution with real-time data. Support strategic decision-making with instant insights into student, teacher, and school-wide performance.
                </BelowHeading>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col mt-2 sm:flex-row gap-4 mb-14 w-full justify-center px-4">
                <Button
                    text="Educators: Schedule a Demo"
                    classes="bg-[var(--main-page-secondary)] text-white font-semibold px-8 md:px-10 py-3 rounded-full text-base md:text-lg w-full sm:w-auto hover:opacity-90 transition-colors outline-none focus:outline-none focus:ring-0"
                />
            </div>

            <div className="mt-4 mb-12">
                <p className="text-[var(--main-page-secondary)] font-bold text-lg md:text-2xl">Driving Excellence Through Data</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-2 md:gap-10 w-[calc(100%+1.5rem)] -mx-3 md:mx-0 md:w-full max-w-5xl">
                <StatCard value="3X" label="Faster Analytics" color="var(--main-page-secondary)" />
                <StatCard value="45%" label="Improved Performance" color="var(--main-page-secondary)" />
                <StatCard value="60%" label="Less Admin Work" color="var(--main-page-secondary)" />
            </div>
        </main>
    )
}
