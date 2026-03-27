import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact AcadAlly | AI Education Platform Support & Demo Booking",
    description: "Get in touch with AcadAlly for AI-powered education solutions. Book a demo, request support, or explore partnership opportunities.",
    openGraph: {
        type: "website",
        url: "https://acadally.ai/contact",
        title: "Contact AcadAlly | AI Education Platform India",
        description: "Get in touch with AcadAlly for demos, support, and partnerships. Reach our AI-powered education team today.",
        images: [
            {
                url: "https://acadally.ai/contact-og.jpg",
                width: 1200,
                height: 630,
                alt: "Contact AcadAlly",
            },
        ],
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AcadAlly.ai",
            "url": "https://acadally.ai/",
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
            "@type": "EducationalOrganization",
            "name": "AcadAlly",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Nagpal Tower, Pocket D, Okhla Phase II",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110020",
                "addressCountry": "IN"
            },
            "telephone": "+91-9289373365",
            "openingHours": "Mo-Fr 08:00-18:00"
        },
        {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact AcadAlly",
            "url": "https://acadally.ai/contact",
            "description": "Contact AcadAlly for demo, support, and partnerships."
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "How can I contact AcadAlly?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact AcadAlly via phone, email, or by filling out the contact form on the website."
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
                "item": "https://acadally.ai/"
            }, {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://acadally.ai/contact"
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
