import Image from "next/image";

export default function Quote() {
    return (
        <section className="bg-white py-16 md:py-32 overflow-hidden">
            <h2 className="sr-only">Our Philosophical Commitment</h2>
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="relative max-w-4xl mx-auto py-8">
                    {/* Opening Quote */}
                    <div className="absolute -top-4 -left-2 md:-top-8 md:-left-6 lg:top-0 lg:-left-32">
                        {/* Mobile & Tablet */}
                        <div className="relative w-12 h-12 md:w-16 md:h-14 lg:hidden">
                            <Image
                                src="/quote1.svg"
                                alt="Open Quote"
                                fill
                                className="object-contain opacity-10"
                            />
                        </div>
                        {/* Desktop */}
                        <div className="relative hidden lg:block w-30 h-30">
                            <Image
                                src="/left-quote.svg"
                                alt="Open Quote"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Quote Text */}
                    <div className="text-center px-4 md:px-0">
                        <p className="text-[#1C4CC3] italic text-[20px] md:text-2xl lg:text-3xl font-medium md:font-semibold leading-[140%] md:leading-relaxed tracking-[-0.016em] md:tracking-normal font-poppins text-center">
                            We aren&apos;t just building a platform. We are building a more thoughtful way of learning—one that is personal, data-informed, and deeply grounded in care
                        </p>
                    </div>

                    {/* Closing Quote */}
                    <div className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-6 lg:bottom-0 lg:-right-32">
                        {/* Mobile & Tablet */}
                        <div className="relative w-12 h-12 md:w-16 md:h-14 lg:hidden">
                            <Image
                                src="/quote1.svg"
                                alt="Close Quote"
                                fill
                                className="object-contain opacity-10 transform rotate-180"
                            />
                        </div>
                        {/* Desktop */}
                        <div className="relative hidden lg:block w-30 h-30">
                            <Image
                                src="/right-quote.svg"
                                alt="Close Quote"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
