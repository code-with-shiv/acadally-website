"use client";

import Image from "next/image";
import Link from "next/link";
import { RadialText } from "./RadialText";

type FounderCardProps = {
    imageSrc: string;
    imageAlt: string;
    name: string;
    description: string;
};

function FounderCard({ imageSrc, imageAlt, name, description }: FounderCardProps) {
    return (
        <article className="relative isolate flex min-h-[330px] w-full max-w-[520px] overflow-hidden rounded-[20px] border border-[#E3E3E3] bg-white">
            <div
                aria-hidden="true"
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            />

            <div className="relative z-10 flex h-full w-full items-stretch gap-6 px-6 py-6 md:px-8 md:py-8">
                <span
                    className="pointer-events-none absolute left-6 top-4 whitespace-nowrap text-[56px] font-bold uppercase tracking-tight text-transparent md:left-8 md:text-[64px]"
                    style={{ WebkitTextStroke: "1px #EDEDED" }}
                >
                    {name}
                </span>
                <div className="relative flex w-[45%] items-end justify-center -mb-6 md:-mb-8">
                    {/* <div className="absolute left-4 top-6 hidden h-0 w-0 border-b-[16px] border-b-transparent border-l-[20px] border-l-[#FF8A00] border-t-[16px] border-t-transparent md:block" /> */}
                    {/* <div className="absolute left-0 top-14 hidden h-0 w-0 border-b-[12px] border-b-transparent border-l-[14px] border-l-[#FF8A00] border-t-[12px] border-t-transparent md:block" /> */}
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={390}
                        height={470}
                        className="relative z-20 -mt-6 h-auto w-full max-w-[360px]"
                    />
                </div>

                <div className="relative flex w-[55%] flex-col justify-center">
                    <h3 className="relative text-[18px] font-semibold text-[#1C4CC3] md:text-[20px]">
                        {name}
                    </h3>
                    <p className="mt-2 max-w-[240px] text-[12px] leading-[1.5] text-[#4B4B4B] md:text-[13px]">
                        {description}
                    </p>
                    <Link
                        href="/about-acadally"
                        className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold text-[#1A1A1A]"
                    >
                        Read More
                        <span className="text-[#1C4CC3]">↗</span>
                    </Link>
                </div>

                <Image
                    src="/quote-main.svg"
                    alt="Decorative quote"
                    width={160}
                    height={140}
                    className="pointer-events-none absolute bottom-4 right-4 z-10 h-auto w-[120px] opacity-35 md:w-[150px]"
                    aria-hidden="true"
                />
            </div>
        </article>
    );
}

export default function Founders() {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20">
            <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
                <div className="mx-auto max-w-[900px] text-center">
                    <RadialText
                        as="h2"
                        className="text-base font-bold leading-[1.2] lg:text-4xl lg:font-bold lg:leading-tight"
                        text="Meet our founders"
                    />
                    <p className="mx-auto mt-4 max-w-[820px] text-[12px] font-normal leading-[1.4] text-faded-text lg:text-base lg:leading-relaxed lg:font-normal">
                        <span className="text-main-page-secondary font-bold">AcadAlly</span> combines pedagogy and technology to build an AI learning platform in India for personalized student learning.
                    </p>
                </div>

                <div className="mt-12 grid justify-items-center gap-6 lg:mt-14 lg:grid-cols-2">
                    <FounderCard
                        imageSrc="/yash-main.svg"
                        imageAlt="Yash Prakash"
                        name="Yash Prakash"
                        description="Education leader focused on improving classroom outcomes using adaptive learning and analytics."
                    />
                    <FounderCard
                        imageSrc="/riddhi-main.svg"
                        imageAlt="Ridhi Aggarwal"
                        name="Ridhi Aggarwal"
                        description="Data scientist building AI tutor for students with personalized learning and performance insights."
                    />
                </div>
            </div>
        </section>
    );
}
