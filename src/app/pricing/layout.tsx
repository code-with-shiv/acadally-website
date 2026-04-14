import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AcadAlly Pricing Plans | AI Learning Platform Cost in India",
    description: "Explore AcadAlly pricing plans for AI-powered learning. Choose from Core, Smart, and School plans tailored for students and institutions",
    openGraph: {
        type: "website",
        url: "https://acadally.ai/pricing",
        title: "AcadAlly Pricing | AI Learning Plans for Students & Schools",
        description: "Explore AcadAlly pricing plans for AI-powered learning. Choose from Core, Smart, and School plans.",
        images: [
            {
                url: "https://acadally.ai/og-banner.png",
                width: 1200,
                height: 630,
                alt: "AcadAlly Pricing Plans",
            },
        ],
    },
};

export default function PricingLayout({
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
            "logo": "https://acadally.ai/logo-d.svg"
        },
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "AcadAlly Core Plan",
            "description": "The essential foundation for academic excellence with AI-powered tools.",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "price": "2249",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "AcadAlly Smart Plan",
            "description": "Advanced AI-powered personalized learning plan with analytics and mock tests.",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "price": "3249",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "AcadAlly for Schools",
            "description": "Tailored AI solutions for institutions, including custom integration and admin dashboards.",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "price": "0",
                "description": "Custom pricing - Request a demo",
                "availability": "https://schema.org/InStock"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What is AcadAlly pricing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AcadAlly offers flexible pricing plans including Core, Smart, and School plans for different learning needs."
                }
            }]
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
                "name": "Pricing",
                "item": "https://acadally.ai/pricing"
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
