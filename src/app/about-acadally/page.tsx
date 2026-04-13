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
    title: "About AcadAlly | AI Powered Education Platform Transforming Learning",
    description: "Learn the story behind AcadAlly, an AI-powered education platform transforming learning through personalized insights for students, teachers, and schools.",
    openGraph: {
        type: "website",
        url: "https://acadally.ai/about-acadally",
        title: "About AcadAlly | AI Powered Education Platform Transforming Learning",
        description: "Learn the story behind AcadAlly, an AI-powered education platform transforming learning through personalized insights for students, teachers, and schools.",
        images: [
            {
                url: "https://acadally.ai/about-og.jpg",
                width: 1200,
                height: 630,
                alt: "About AcadAlly",
            },
        ],
    },
};

export default function OurStory() {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AcadAlly.ai",
            "url": "https://acadally.ai",
            "logo": "https://acadally.ai/images/logo.png",
            "description": "AcadAlly.ai is an AI-powered learning platform designed to help students, teachers, and schools improve education through personalized learning and real-time analytics.",
            "email": "info@acadally.com",
            "telephone": "+91-9289373365",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
            },
            "sameAs": [
                "https://www.linkedin.com/company/acadally",
                "https://twitter.com/acadally",
                "https://www.facebook.com/acadally"
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About AcadAlly.ai",
            "url": "https://acadally.ai/about-acadally",
            "description": "Learn the story behind AcadAlly.ai, an AI-powered education platform created to transform learning through personalized insights for students, teachers, and schools.",
            "mainEntity": {
                "@type": "Organization",
                "name": "AcadAlly.ai"
            }
        },
        {
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
        },
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Yash Prakash",
            "jobTitle": "Co-Founder",
            "worksFor": {
                "@type": "Organization",
                "name": "AcadAlly.ai"
            },
            "description": "Educationist associated with multiple Delhi Public Schools and co-founder of AcadAlly.ai, focused on improving classroom insights through AI technology."
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AcadAlly.ai",
            "url": "https://acadally.ai",
            "description": "AcadAlly.ai is India's first AI-powered learning platform designed to transform education with personalized insights and real-time analytics.",
            "publisher": {
                "@type": "Organization",
                "name": "AcadAlly.ai"
            }
        },
        {
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
        },
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AcadAlly.ai",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9289373365",
                "contactType": "customer support",
                "areaServed": "IN",
                "availableLanguage": ["English"]
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "AcadAlly.ai",
            "url": "https://acadally.ai",
            "description": "AI-powered education platform that provides personalized learning and analytics for students, teachers, and schools.",
            "telephone": "+91-9289373365",
            "email": "info@acadally.com"
        }
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
                <Founders />
            </PaddingWrapper>
            <Roller />
            <Uses />
            <Quote />
            <Transform />
        </>
    );
}