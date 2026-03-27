import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Education Events in India | AcadAlly Conferences & Workshops",
    description: "Explore AcadAlly AI education events, conferences, and workshops across India. Learn from experts and discover the future of education.",
    openGraph: {
        type: "website",
        url: "https://acadally.ai/events",
        title: "AcadAlly Events | AI Education Conferences & Workshops",
        description: "Explore AcadAlly events including AI education conferences, workshops, and seminars across India.",
        images: [
            {
                url: "https://acadally.ai/events-og.jpg",
                width: 1200,
                height: 630,
                alt: "AcadAlly AI Education Events",
            },
        ],
    },
};

export default function EventsLayout({
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
            "logo": "https://acadally.ai/logo-d.svg"
        },
        {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "EDU-AI Conference 2024",
            "startDate": "2024-02-07",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventCompleted",
            "location": {
                "@type": "Place",
                "name": "Dehradun",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Dehradun",
                    "addressRegion": "Uttarakhand",
                    "addressCountry": "IN"
                }
            },
            "organizer": {
                "@type": "Organization",
                "name": "AcadAlly"
            },
            "description": "AI education conference discussing the future of AI in education with industry experts."
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                "@type": "Question",
                "name": "What are AcadAlly events?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AcadAlly events are AI education conferences and workshops designed for educators and institutions."
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
                "name": "Events",
                "item": "https://acadally.ai/events"
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
