import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Teaching Platform for Educators in India | AcadAlly",
    description: "AI-powered teaching platform for educators to save time, analyze student performance, and deliver personalized learning aligned with NEP.",
    openGraph: {
        type: "website",
        url: "https://acadally.ai/ai-teaching-platform-for-teachers",
        title: "AI Teaching Platform for Educators | AcadAlly",
        description: "Empower your classroom with AI-powered teaching tools. Save time and improve student outcomes.",
        images: [
            {
                url: "https://acadally.ai/og-banner.png",
                width: 1200,
                height: 630,
                alt: "AcadAlly AI Teaching Platform for Educators",
            },
        ],
    },
};

export default function TeachersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AcadAlly",
            "url": "https://acadally.ai",
            "logo": "https://acadally.ai/logo-d.svg",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9289373365",
                "contactType": "Customer Support",
                "areaServed": "IN"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "EducationalApplication",
            "name": "AcadAlly",
            "applicationCategory": "Education",
            "operatingSystem": "Web, Android, iOS",
            "description": "AI-powered teaching platform helping teachers personalize learning and analyze student performance."
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "How does AcadAlly help teachers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AcadAlly provides AI-powered insights, analytics, and personalized learning tools to improve teaching efficiency."
                }
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
                "@type": "EducationalApplication",
                "name": "AcadAlly"
            },
            "author": {
                "@type": "Person",
                "name": "Priya Sharma"
            },
            "reviewBody": "AcadAlly's personalized approach has transformed how my students engage with mathematics. The 3D visualizations make complex concepts accessible.",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://acadally.ai"
            }, {
                "@type": "ListItem",
                "position": 2,
                "name": "Teachers",
                "item": "https://acadally.ai/teachers"
            }]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
