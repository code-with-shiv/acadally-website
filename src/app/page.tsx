"use client";
import AiEngine from "@/components/AiEngine";
import Image from "next/image";
import Cards from "@/components/Cards";
import Companies from "@/components/Companies";
import Counters from "@/components/Counters";
import Events from "@/components/Events";
import Faq from "@/components/Faq";
import Main from "@/components/Main/Main";
import MeetAlly from "@/components/MeetAlly";
import Navbar from "@/components/Navbar";
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
          __html: JSON.stringify({
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
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                "name": "AI Learning Platform",
                "item": "https://acadally.ai/ai-learning-platform"
              }
            ]
          })
        }}
      />
      <div className="relative overflow-visible md:overflow-hidden">
        {/* Background Image Container spanning Navbar and Main */}
        <div className="hidden md:block absolute top-0 right-0 w-full md:w-1/2 h-full pointer-events-none z-0">
          <Image src="/hero-section-background-pattern.svg" alt="Background patterns for AcadAlly hero section" width={840} height={723} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[130%] md:w-[130%] max-w-none opacity-40 md:opacity-70" />
        </div>

        <div className="relative z-10">
          <PaddingWrapper><Navbar /></PaddingWrapper>
          <Main onOpenModal={() => setIsSchoolModalOpen(true)} />
        </div>
      </div>

      <PaddingWrapper><SchoolsSlider /></PaddingWrapper>

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
