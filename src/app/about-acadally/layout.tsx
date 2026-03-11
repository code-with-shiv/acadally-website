export const metadata = {
    title: "About AcadAlly | AI Powered Education Platform Transforming Learning",
    description: "Learn the story behind AcadAlly, an AI-powered education platform transforming learning through personalized insights for students, teachers, and schools.",
};


const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "My Website",
    url: "https://mywebsite.com",
    logo: "https://mywebsite.com/logo.png",
    sameAs: [
      "https://twitter.com/mywebsite",
      "https://linkedin.com/company/mywebsite"
    ]
  };
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}