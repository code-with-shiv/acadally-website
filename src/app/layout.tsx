import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

import CursorFollower from "@/components/CursorFollower";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AcadAlly - The Ultimate Companion",
  description: "Login The ultimate companion of students teachers parents school leaders driven by AI AcadAlly is a deep-tech startup in the education sector with an in-house built AI engine, LEAPTM. Schedule a Demo AcadAlly is a forward-thinking, AI tech organisation dedicated to transforming the education landscape by leveraging cutting-edge technology and data-driven analytics.With its innovative AI engine,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
