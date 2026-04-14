import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About AcadAlly | AI Powered Education Platform Transforming Learning",
    description: "Learn the story behind AcadAlly, an AI-powered education platform transforming learning through personalized insights for students, teachers, and schools.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
