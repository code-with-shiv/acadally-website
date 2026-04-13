import Image from "next/image";
import Link from "next/link";
import PaddingWrapper from "./PaddingWrapper";

export default function OurStory() {
    return (
        <section className="relative w-full min-h-[400px] lg:min-h-[613px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Rectangle 10.svg"
                    alt="Our Story Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Optional extra overlay if needed, though SVG already has one */}
                <div className="absolute inset-0 bg-black/10 z-10"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 w-full">
                <PaddingWrapper>
                    <div className="flex flex-col gap-4 lg:gap-8 max-w-3xl text-white py-12 lg:py-20">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                                Our Story
                            </h2>
                            <h3 className="text-xl lg:text-4xl font-semibold leading-snug">
                                Building India&apos;s Best AI Learning Platform for Students
                            </h3>
                        </div>

                        <p className="text-sm lg:text-xl font-normal opacity-90 leading-relaxed md:max-w-2xl">
                            AcadAlly was built to solve learning gaps in classrooms. Our AI learning platform in India personalizes Maths and Science learning for students.
                        </p>

                        <div>
                            <Link
                                href="/about-acadally"
                                className="inline-block px-8 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm lg:text-base hover:bg-white/30 transition-all duration-300 shadow-lg"
                            >
                                Read Full Story
                            </Link>
                        </div>
                    </div>
                </PaddingWrapper>
            </div>
        </section>
    );
}
