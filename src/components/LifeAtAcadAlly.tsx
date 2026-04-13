import React from "react";
import Image from "next/image";

export default function LifeAtAcadAlly() {
    return (
        <section className="w-full bg-[#f8f9fa] py-12 md:py-16 font-sans">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">

                    {/* Left Column - Text Content */}
                    <div className="w-full lg:w-[48%] flex flex-col items-start text-left order-2 lg:order-1">
                        <h2 className="text-[#333333] font-bold text-xl sm:text-2xl md:text-[1.75rem] mb-1 md:mb-2 leading-tight">
                            Life at AcadAlly:
                        </h2>

                        <h3 className="text-[#1C4CC3] font-extrabold text-[2rem] sm:text-4xl md:text-[3rem] leading-[1.1] mb-5 tracking-tight">
                            Where Innovation <br />
                            Meets Impact
                        </h3>

                        <p className="text-[#515151] text-sm md:text-base font-medium max-w-[90%] mb-6 leading-relaxed">
                            At AcadAlly, we innovate with AI-powered solutions to transform learning. Our passionate team works together to impact millions of students across India.
                        </p>

                        <button className="rounded-[12px] border-[1.5px] border-[#1C4CC3] text-[#1C4CC3] font-bold px-6 py-2.5 text-sm md:text-button hover:bg-[#1C4CC3] hover:text-white transition-all active:scale-95 shadow-sm">
                            Join the team of innovators
                        </button>
                    </div>

                    {/* Right Column - Image Collage */}
                    <div className="w-full lg:w-[45%] relative h-[350px] md:h-[400px] lg:h-[450px] flex items-center justify-center order-1 lg:order-2 mt-6 lg:mt-0">

                        {/* Background light-blue accent blob */}
                        <div className="absolute top-[15%] left-[5%] w-[80%] h-[75%] bg-[#DDE6FF] rounded-[2rem] z-0 hidden sm:block"></div>

                        {/* Images Wrapper */}
                        <div className="relative z-10 w-full h-full max-w-[420px] mx-auto">

                            {/* Top Image (Group meeting) */}
                            <div className="absolute top-[5%] right-[5%] w-[75%] h-[180px] md:h-[220px] lg:h-[240px] rounded-[1.5rem] overflow-hidden shadow-lg border-[3px] border-white z-10 bg-gray-200">
                                {/* Using placeholder random image */}
                                <Image
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
                                    alt="Team meeting at whiteboard"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Bottom Image (Two people working) */}
                            <div className="absolute bottom-[5%] left-[5%] w-[80%] h-[200px] md:h-[240px] lg:h-[260px] rounded-[1.5rem] overflow-hidden shadow-xl border-[3px] border-white z-20 bg-gray-300">
                                {/* Using placeholder random image */}
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                                    alt="Colleagues collaborating"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
