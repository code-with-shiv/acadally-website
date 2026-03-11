export const metadata = {
    title: "AI Learning Platform for Students | Personalized AI Study App | AcadAlly",
    description: "AcadAlly is an AI-powered learning platform that helps students master concepts through personalized learning, real-time feedback, and adaptive study paths.",
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
        <html lang="en" >
            <body>
                {children}
            </body>
        </html>
    );
}