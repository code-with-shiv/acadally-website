"use client";

import Image from "next/image";
import Link from "next/link";
import { RadialText } from "./RadialText";
import CurveArrow from "./CurveArrow";

type FounderCardProps = {
  imageSrc: string;
  imageAlt: string;
  name: string;
  description: string;
};

function FounderCard({
  imageSrc,
  imageAlt,
  name,
  description,
}: FounderCardProps) {
  return (
    <article className="relative isolate flex flex-col md:flex-row min-h-[420px] w-full max-w-[640px] overflow-hidden rounded-[24px] border border-[#E3E3E3] bg-white">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row h-full w-full items-stretch gap-8 px-8 py-8 md:px-10 md:py-10">
        {/* Background name */}
        <span
          className="pointer-events-none absolute left-8 top-4 whitespace-nowrap text-[56px] font-bold uppercase tracking-tight text-transparent md:text-[64px]"
          style={{ WebkitTextStroke: "1px #EDEDED" }}
        >
          {name}
        </span>

        {/* Image section */}
        <div className="relative flex w-full md:w-[55%] items-end justify-center -mb-10 md:mb-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={900}
            className="relative z-20 -mt-12 h-auto w-full max-w-[680px]"
          />
        </div>

        {/* Content section (BALANCED POSITION) */}
        <div className="relative flex w-full md:w-[45%] flex-col justify-center gap-2 -translate-y-2 mt-6 md:mt-0">
          <h3 className="relative text-[20px] font-semibold text-[#1C4CC3] md:text-[22px]">
            {name}
          </h3>

          <div className="relative max-w-[280px]">
            <p className="text-[13px] leading-[1.5] text-[#4B4B4B] md:text-[14px]">
              {description}
            </p>
            {/* Curve Arrow replaced with video */}
            <div className="absolute left-0 -bottom-14 md:-bottom-14">
              <video src="/curve-arrow2.mp4" width={56} height={40} autoPlay loop muted playsInline style={{ display: 'block' }} />
            </div>
          </div>

          <Link
            href="/about-acadally"
            className="self-end inline-flex items-center gap-2 text-[13px] font-semibold text-[#1A1A1A] group"
          >
            <span className="relative">
              Read More
              <span className="block h-[1px] w-full bg-[#1C4CC3]/80 absolute left-0 -bottom-0.5 rounded group-hover:bg-[#163a99] transition-colors" />
            </span>
            <span className="text-[#1C4CC3]">↗</span>
          </Link>
        </div>

        {/* Decorative quote */}
        <Image
          src="/quote-main.svg"
          alt="Decorative quote"
          width={180}
          height={160}
          className="pointer-events-none absolute bottom-6 right-6 z-10 h-auto w-[140px] opacity-35 md:w-[170px]"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}

export default function Founders() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1300px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[900px] text-center">
          <RadialText
            as="h2"
            className="text-base font-bold leading-[1.2] lg:text-4xl lg:font-bold lg:leading-tight"
            text="Meet our founders"
          />

          <p className="mx-auto mt-4 max-w-[820px] text-[13px] leading-[1.5] text-faded-text lg:text-base lg:leading-relaxed">
            <span className="text-main-page-secondary font-bold">
              AcadAlly
            </span>{" "}
            combines pedagogy and technology to build an AI learning platform in
            India for personalized student learning
          </p>
        </div>

        <div className="mt-14 grid justify-items-center gap-8 lg:grid-cols-2">
          <FounderCard
            imageSrc="/yash-main.svg"
            imageAlt="Yash Prakash"
            name="Yash Prakash"
            description="Yash brings a unique blend of global exposure and deep-rooted experience in the Indian education system. An alumnus of the University of Illinois..."
          />

          <FounderCard
            imageSrc="/riddhi-main2.svg"
            imageAlt="Ridhi Agarwal"
            name="Ridhi Agarwal"
            description="Ridhi's journey began with a simple observation — students are often left behind not due to lack of ability, but because their learning isn't truly understood."
          />
        </div>
      </div>
    </section>
  );
}