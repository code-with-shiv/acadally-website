import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AcadAlly AI Learning Platform for Students",
    description: "AcadAlly is an AI-powered learning platform that helps students master concepts through personalized learning paths, real-time feedback, and concept mastery.",
    openGraph: {
        type: "website",
        url: "https://acadally.ai/students",
        title: "AcadAlly AI Learning Platform for Students",
        description: "AcadAlly is an AI-powered learning platform that helps students master concepts through personalized learning paths, real-time feedback, and concept mastery.",
        images: [
            {
                url: "https://acadally.ai/og-banner.png",
                width: 1200,
                height: 630,
                alt: "AcadAlly AI Learning Platform",
            },
        ],
    },
};

export default function StudentsLayout({
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
            "description": "AcadAlly is an AI-powered learning platform that helps students master concepts through personalized learning paths and real-time analytics.",
            "email": "info@acadally.com",
            "telephone": "+91-9289373365",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Nagpal Tower, Pocket D, Okhla Phase II, Okhla Industrial Estate",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110020",
                "addressCountry": "India"
            },
            "sameAs": [
                "https://www.linkedin.com/company/acadally",
                "https://x.com/acadally",
                "https://www.facebook.com/acadally",
                "https://www.instagram.com/acadally"
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AcadAlly",
            "url": "https://acadally.ai",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://acadally.ai/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AcadAlly",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Android, iOS, Web",
            "url": "https://acadally.ai",
            "description": "AcadAlly is an AI-powered learning platform that provides personalized learning paths, real-time feedback, and concept mastery for students.",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR"
            },
            "publisher": {
                "@type": "Organization",
                "name": "AcadAlly"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "50,000+"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "AcadAlly",
            "image": "https://acadally.ai/og-banner.png",
            "description": "AI-powered personalized learning platform for students with real-time analytics and adaptive learning paths.",
            "brand": {
                "@type": "Brand",
                "name": "AcadAlly"
            },
            "offers": {
                "@type": "Offer",
                "url": "https://acadally.ai/pricing",
                "priceCurrency": "INR",
                "price": "0",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Review",
            "reviewBody": "AcadAlly's personalized learning helped me understand mathematics concepts much better.",
            "author": {
                "@type": "Person",
                "name": "Priya Sharma"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "itemReviewed": {
                "@type": "SoftwareApplication",
                "name": "AcadAlly"
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
                "name": "Students",
                "item": "https://acadally.ai/students"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is AcadAlly AI learning platform?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AcadAlly is an AI-powered learning platform designed to help students master concepts through personalized learning paths and real-time feedback."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does AcadAlly help students learn faster?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AcadAlly uses artificial intelligence to analyze student progress and create adaptive learning paths that match each student's pace and understanding."
                    }
                }
            ]
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