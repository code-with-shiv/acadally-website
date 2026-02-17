import Image from "next/image";

export default function Quote() {
    return (
        <section className="bg-white py-16 md:py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="relative max-w-4xl mx-auto py-8">
                    {/* Opening Quote */}
                    <div className="absolute -top-4 -left-2 md:-top-8 md:-left-6 lg:-top-10 lg:-left-10">
                        <div className="relative w-12 h-10 md:w-16 md:h-14 lg:w-20 lg:h-16">
                            <Image
                                src="/quote1.svg"
                                alt="Open Quote"
                                fill
                                className="object-contain opacity-10"
                            />
                        </div>
                    </div>

                    {/* Quote Text */}
                    <div className="text-center px-4 md:px-0">
                        <p className="text-[#1C4CC3] italic text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed font-poppins">
                            We aren&apos;t just building a platform. We are building a more thoughtful way of learning—one that is personal, data-informed, and deeply grounded in care
                        </p>
                    </div>

                    {/* Closing Quote */}
                    <div className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-6 lg:-bottom-10 lg:-right-10">
                        <div className="relative w-12 h-10 md:w-16 md:h-14 lg:w-20 lg:h-16">
                            <Image
                                src="/quote1.svg"
                                alt="Close Quote"
                                fill
                                className="object-contain opacity-10 transform rotate-180"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
