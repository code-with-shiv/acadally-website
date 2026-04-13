import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Learning Platform for Schools & Educators | AcadAlly",
    description: "AcadAlly's AI-powered education platform helps schools and teachers track performance, analyze data, and deliver personalized learning experiences.",
    openGraph: {
        type: "website",
        url: "https://acadally.ai/schools",
        title: "AcadAlly for Schools | AI-Driven Education Platform",
        description: "Discover how AcadAlly empowers schools and educators with real-time analytics, personalized learning insights, and performance tracking.",
        images: [
            {
                url: "https://acadally.ai/product-image.png",
                width: 1200,
                height: 630,
                alt: "AcadAlly AI Education Platform",
            },
        ],
    },
};

export default function SchoolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AcadAlly.ai",
            "url": "https://acadally.ai",
            "logo": "https://acadally.ai/logo-d.svg",
            "description": "AcadAlly.ai is an AI-powered learning platform that helps schools, teachers, and students improve performance through real-time analytics and personalized education.",
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
            "@type": "SoftwareApplication",
            "name": "AcadAlly AI Learning Platform",
            "operatingSystem": "Web, Android, iOS",
            "applicationCategory": "EducationalApplication",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR"
            },
            "description": "AcadAlly is an AI-powered learning platform designed for schools, educators, and students. It provides real-time analytics, personalized learning insights, and performance tracking.",
            "url": "https://acadally.ai",
            "publisher": {
                "@type": "Organization",
                "name": "AcadAlly.ai"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "AcadAlly AI Education Platform",
            "image": "https://acadally.ai/product-image.png",
            "description": "AI-powered education analytics platform designed for schools and educators.",
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
            "reviewBody": "AcadAlly.ai's personalized approach has transformed how my students engage with mathematics. The 3D visualizations make complex concepts accessible.",
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
                "name": "AcadAlly AI Learning Platform"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is AcadAlly AI Learning Platform?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AcadAlly is an AI-powered education platform that helps schools and teachers track performance, analyze data, and deliver personalized learning experiences."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Who can use AcadAlly?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AcadAlly is designed for schools, teachers, and students who want to improve academic performance using AI-powered analytics."
                    }
                }
            ]
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
                    "name": "Schools",
                    "item": "https://acadally.ai/schools"
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AcadAlly.ai",
            "url": "https://acadally.ai",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://acadally.ai/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
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