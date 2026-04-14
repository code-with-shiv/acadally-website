import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  metadataBase: new URL("https://acadally.ai"),

  title: "AI Learning Platform in India | Personalized Adaptive Learning for Students",
  description:
    "AcadAlly is India’s first AI-powered personalized learning platform for schools and students, offering adaptive learning, real-time diagnostics, and AI tutoring.",

  openGraph: {
    type: "website",
    url: "https://acadally.ai",
    title: "India’s First AI-Powered Personalized Learning Platform for students",
    description: "Transform school education with AI-powered adaptive learning, real-time diagnostics, and personalized tutoring. Empowering 100,000+ students across India.",
    siteName: "AcadAlly",
    images: [
      {
        url: "https://acadally.ai/og-banner.png",
        width: 1200,
        height: 630,
        alt: "AcadAlly Personalized Learning Platform",
      },
    ],
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "India’s First AI-Powered Personalized Learning Platform for students",
    description:
      "Transform school education with AI-powered adaptive learning, real-time diagnostics, and personalized tutoring. Empowering 100,000+ students across India.",
    images: ["https://acadally.ai/og-banner.png"],
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AcadAlly",
              "url": "https://acadally.ai",
              "logo": "https://acadally.ai/logo-d.svg",
              "description": "AcadAlly is an AI-powered learning platform that helps schools, teachers, and students improve performance through real-time analytics and personalized education.",
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
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AcadAlly",
              "url": "https://acadally.ai",
              "description": "AcadAlly is India's first AI-powered learning platform designed to transform education with personalized insights and real-time analytics.",
              "publisher": {
                "@type": "Organization",
                "name": "AcadAlly"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://acadally.ai/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AcadAlly",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9289373365",
                "contactType": "customer support",
                "areaServed": "IN",
                "availableLanguage": ["English"]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "AcadAlly",
              "url": "https://acadally.ai",
              "description": "AI-powered education platform that provides personalized learning and analytics for students, teachers, and schools.",
              "telephone": "+91-9289373365",
              "email": "info@acadally.com"
            })
          }}
        />
        <Navbar />
        {/* <SmoothScroll> */}
          <main className="min-h-screen pt-14 lg:pt-0">
            {children}
          </main>
        {/* </SmoothScroll> */}
        <Footer />
        <WhatsAppButton />
        <CursorFollower />
      </body>
    </html>
  );
}
