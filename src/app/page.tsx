"use client";
import AiEngine from "@/components/AiEngine";
import Image from "next/image";
import Link from "next/link";
import Cards from "@/components/Cards";
import Companies from "@/components/Companies";
import Counters from "@/components/Counters";
import Events from "@/components/Events";
import Faq from "@/components/Faq";
import Main from "@/components/Main/Main";
import MeetAlly from "@/components/MeetAlly";
import PaddingWrapper from "@/components/PaddingWrapper";
import SchoolsSlider from "@/components/Main/SchoolsSlider";
import Testimonials from "@/components/Testimonials";
import Transform from "@/components/Transform";
import VideoWrapper from "@/components/VideoWrapper";
import { useState } from "react";
import SchoolFormModal from "@/components/Main/SchoolFormModal";
import DemoFormModal from "@/components/Main/DemoFormModal";

export default function Home() {
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AcadAlly.ai",
              "url": "https://acadally.ai/",
              "logo": "https://acadally.ai/logo.png",
              "description": "AcadAlly.ai is India’s first AI-powered personalized learning platform for schools and students, offering adaptive learning, real-time diagnostics, and AI tutoring.",
              "foundingLocation": "India",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-92893-73365",
                "contactType": "Customer Support",
                "areaServed": "IN",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/company/acadally",
                "https://www.instagram.com/acadally",
                "https://www.facebook.com/acadally"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AcadAlly.ai",
              "operatingSystem": "Web, Android, iOS",
              "applicationCategory": "EducationalApplication",
              "description": "AI-powered personalized learning platform for schools and students in India offering adaptive learning paths, diagnostic assessments, predictive analytics, and real-time AI tutoring.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "50000"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which classes does AcadAlly.ai support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AcadAlly.ai supports school students with AI-powered personalized learning, adaptive practice, and real-time academic assistance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does AcadAlly.ai improve learning outcomes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AcadAlly.ai uses adaptive learning paths, predictive analytics, and AI tutoring to improve conceptual understanding and exam readiness."
                  }
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "AcadAlly.ai",
              "review": {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Priya Sharma"
                },
                "reviewBody": "AcadAlly.ai's personalized approach has transformed how students engage with mathematics. Complex concepts are now easier to understand.",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
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
                  "item": "https://acadally.ai/"
                }
              ]
            }
          ])
        }}
      />
      <div className="relative overflow-visible md:overflow-hidden">
        {/* Background Image Container spanning Navbar and Main */}
        <div className="hidden md:block absolute top-0 right-0 w-full md:w-1/2 h-full pointer-events-none z-0">
          <Image src="/hero-section-background-pattern.svg" alt="Background patterns for AcadAlly hero section" width={840} height={723} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[130%] md:w-[130%] max-w-none opacity-40 md:opacity-70" />
        </div>

        <div className="relative z-10">
          <Main onOpenModal={() => setIsSchoolModalOpen(true)} />
        </div>
      </div>

      <PaddingWrapper><SchoolsSlider /></PaddingWrapper>
        <div className="lg:mt-8"></div>
      <div><Counters /></div>

      <div>
        <MeetAlly />
      </div>

      <PaddingWrapper>
        <VideoWrapper />
      </PaddingWrapper>

      <div>
        <Companies />
      </div>

      <PaddingWrapper>
        <Cards />
      </PaddingWrapper>

      <div>
        <AiEngine />
      </div>
      <Testimonials />
      <Events />
      <Faq />
      <Transform onOpenDemo={() => setIsDemoModalOpen(true)} />

      <SchoolFormModal
        isOpen={isSchoolModalOpen}
        onClose={() => setIsSchoolModalOpen(false)}
      />
      <DemoFormModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </main>
  );
}
