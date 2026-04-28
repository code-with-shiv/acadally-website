import type { Metadata } from "next";
import Both from "@/components/Both";
import OurStoryMain from "@/components/OurStoryMain";
import OurStoryFounders from "@/components/OurStoryFounders";
import PaddingWrapper from "@/components/PaddingWrapper";
import Quote from "@/components/Quote";
import Roller from "@/components/Roller";
import Uses from "@/components/Uses";
import Image from "next/image";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About AcadAlly | AI Powered Education Platform Transforming Learning",
    description:
        "Learn the story behind AcadAlly, an AI-powered education platform transforming learning through personalized insights for students, teachers, and schools.",
    openGraph: {
        type: "website",
        url: "https://acadally.ai/about-acadally",
        title: "About AcadAlly | AI Powered Education Platform Transforming Learning",
        description:
            "Learn the story behind AcadAlly, an AI-powered education platform transforming learning through personalized insights for students, teachers, and schools.",
        images: [
            {
                url: "https://acadally.ai/og-banner.png",
                width: 1200,
                height: 630,
                alt: "About AcadAlly",
            },
        ],
    },
};

export default function AboutPage() {

    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AcadAlly",
            url: "https://acadally.ai",
            logo: "https://acadally.ai/logo-d.svg",
            description:
                "AcadAlly is an AI-powered learning platform designed to help students, teachers, and schools improve education through personalized learning and real-time analytics.",
            email: "info@acadally.com",
            telephone: "+91-9289373365",
        },
        // (rest unchanged)
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="relative w-full">
                <Image
                    src="/ourstorymainleft.svg"
                    alt="Decorative background wave left"
                    width={800}
                    height={800}
                    className="absolute top-0 left-0 -z-10 pointer-events-none w-[70%] md:w-[50%] xl:w-[40%] h-auto"
                />
                <Image
                    src="/ourstorymaintopright.svg"
                    alt="Decorative background wave right"
                    width={800}
                    height={800}
                    className="absolute top-0 right-0 -z-10 pointer-events-none w-[70%] md:w-[50%] xl:w-[40%] h-auto"
                />

                <PaddingWrapper>
                    <OurStoryMain />
                </PaddingWrapper>
            </div>

            <Both />

            <PaddingWrapper>
                <OurStoryFounders />
            </PaddingWrapper>

            <Roller />
            <Uses />
            <Quote />

            <AboutClient />
        </>
    );
}