import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

import CursorFollower from "@/components/CursorFollower";


export const metadata: Metadata = {
  metadataBase: new URL("https://acadally.ai"),

  title: "India’s First AI-Powered Personalized Learning Platform",
  description:
    "Transform school education with AI-powered adaptive learning, real-time diagnostics, and personalized tutoring. Empowering students across India.",

  openGraph: {
    title: "India’s First AI-Powered Personalized Learning Platform",
    description:
      "Transform school education with AI-powered adaptive learning, real-time diagnostics, and personalized tutoring.",
    url: "https://acadally.ai/",
    siteName: "AcadAlly AI",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "AcadAlly AI Personalized Learning Platform",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "India’s First AI-Powered Personalized Learning Platform",
    description:
      "Transform school education with AI-powered adaptive learning and personalized tutoring.",
    images: ["/og-banner.png"],
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
        <Footer />
        <CursorFollower />
      </body>
    </html>
  );
}
