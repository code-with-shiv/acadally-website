import AboveHeading from "./AboveHeading";
import BelowHeading from "./BelowHeading";
import Button from "./Button";
import Heading from "./Heading";
import { StatCard } from "./StatCard";

export default function StudentsMain({ onOpenDemo }: { onOpenDemo?: () => void }) {
    return (
        <main className="relative z-10 max-w-4xl mx-auto pt-8 md:pt-16 pb-20 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="bg-[#FFF0E0] text-[var(--orange-primary)] px-6 py-2 rounded-full text-sm font-bold mb-10">
                #1 AI Learning Platform {new Date().getFullYear()}
            </div>

            {/* Heading */}
            <div className="max-w-4xl flex flex-col gap-1 md:gap-2 mb-6 px-2">

                <AboveHeading>
                    <span className="text-[var(--orange-primary)] font-bold text-4xl md:text-5xl lg:text-5xl tracking-tight leading-tight">
                        AcadAlly: <span className="text-gray-800">India&apos;s First</span>
                    </span>
                </AboveHeading>

                <Heading
                    element={
                        <h1 className="text-[var(--orange-primary)] text-4xl md:text-5xl lg:text-5xl font-bold tracking-tighter leading-tight">
                            AI Ally for Learners
                        </h1>
                    }
                />
            </div>

            {/* Subheading */}
            <div className="mb-10 mt-2">
                <BelowHeading className="font-medium text-gray-700">
                    Master every concept at your own pace—one breakthrough at a time.
                </BelowHeading>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col mt-2 sm:flex-row gap-4 mb-14 w-full justify-center px-4">
                <Button
                    text="Students: Start Learning"
                    classes="bg-[var(--orange-primary)] text-white font-semibold px-8 md:px-10 py-3 rounded-full text-base md:text-lg w-full sm:w-auto hover:bg-[#e67a00] transition-colors outline-none focus:outline-none focus:ring-0"
                />
                <Button
                    onClick={onOpenDemo}
                    text="Educators: Schedule a Demo"
                    classes="bg-white text-[var(--orange-primary)] border-2 border-[var(--orange-primary)] font-semibold px-8 md:px-10 py-3 rounded-full text-base md:text-lg w-full sm:w-auto hover:bg-orange-50 transition-colors outline-none focus:outline-none focus:ring-0"
                />
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
