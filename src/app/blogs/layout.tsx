import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Education Blogs | AcadAlly Educational Insights",
    description: "Read the latest blogs on AI in education, personalized learning, and educational technology from AcadAlly. Stay updated with industry trends and insights.",
    openGraph: {
        type: "website",
        url: "https://acadally.ai/blogs",
        title: "AcadAlly Blogs | AI Education & Tech Insights",
        description: "Explore AcadAlly's collection of blogs covering AI, technology, and the future of education.",
        images: [
            {
                url: "https://acadally.ai/blogs-og.jpg",
                width: 1200,
                height: 630,
                alt: "AcadAlly AI Education Blogs",
            },
        ],
    },
};

export default function BlogsLayout({
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
            "@type": "Blog",
            "name": "AcadAlly Blogs",
            "description": "Educational insights and trends in AI and educational technology.",
            "url": "https://acadally.ai/blogs"
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
                "name": "Blogs",
                "item": "https://acadally.ai/blogs"
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
