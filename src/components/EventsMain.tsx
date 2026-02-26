import Heading from "./Heading";
import BelowHeading from "./BelowHeading";

export default function EventsMain() {
    return (
        <section className="relative overflow-hidden bg-white lg:py-20">
            {/* Soft Background Glows matching the screenshot */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(28,76,195,0.08),_transparent_70%)] blur-[60px]" />
                <div className="absolute top-[-15%] right-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(28,76,195,0.08),_transparent_70%)] blur-[60px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Badge */}
                <div className="bg-[#EBF2FF] text-[#1C4CC3] px-7 py-2 rounded-full text-sm font-bold mb-4 md:mb-6 shadow-sm border border-[#1C4CC3]/10 tracking-wide">
                    AcadAlly Events
                </div>

                {/* Main Heading */}
                <div className="mb-4 md:mb-6">
                    <Heading
                        element={
                            <h1 className="text-[#1C4CC3] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                                AcadAlly Events
                            </h1>
                        }
                    />
                </div>

                {/* Subheading */}
                <div className="max-w-4xl">
                    <BelowHeading>
                        <span className="text-base md:text-xl lg:text-xl font-medium leading-relaxed">
                            Be part of our learning community through <span className="text-[#1C4CC3] font-bold">interactive events</span> and <span className="text-[#1C4CC3] font-bold">educational experiences.</span>
                        </span>
                    </BelowHeading>
                </div>
            </div>
        </section>
    );
}
