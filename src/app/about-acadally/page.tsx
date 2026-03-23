import type { Metadata } from "next";
import Both from "@/components/Both";
import Founders from "@/components/Founders";
import OurStoryMain from "@/components/OurStoryMain";
import PaddingWrapper from "@/components/PaddingWrapper";
import Quote from "@/components/Quote";
import Roller from "@/components/Roller";
import Transform from "@/components/Transform";
import Uses from "@/components/Uses";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Our Story | AcadAlly - Forged in the Classroom",
    description: "Discover the journey of AcadAlly, India's first AI-powered personalized learning platform. Born from classroom insights to bridge the gap between pedagogy and technology.",
};

export default function OurStory() {
    return (
        < >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "About AcadAlly.ai",
                        "url": "https://acadally.ai/about-acadally",
                        "description": "Learn the story behind AcadAlly.ai, an AI-powered education platform created to transform learning through personalized insights for students, teachers, and schools.",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "AcadAlly.ai"
                        }
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Ridhi Agarwal",
                        "jobTitle": "Co-Founder",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "AcadAlly.ai"
                        },
                        "alumniOf": [
                            {
                                "@type": "CollegeOrUniversity",
                                "name": "Shri Ram College of Commerce"
                            },
                            {
                                "@type": "CollegeOrUniversity",
                                "name": "Delhi School of Economics"
                            }
                        ],
                        "description": "Data scientist and co-founder of AcadAlly.ai focused on building AI-powered personalized learning platforms."
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Yash Prakash",
                        "jobTitle": "Co-Founder",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "AcadAlly.ai"
                        },
                        "description": "Educationist associated with multiple Delhi Public Schools and co-founder of AcadAlly.ai, focused on improving classroom insights through AI technology."
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://acadally.ai"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "About AcadAlly",
                                "item": "https://acadally.ai/about-acadally"
                            }
                        ]
                    })
                }}
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
                <Founders />
            </PaddingWrapper>
            <Roller />
            <Uses />
            <Quote />
            <Transform />

        </>
    );
}