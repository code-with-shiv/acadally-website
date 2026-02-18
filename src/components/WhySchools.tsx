import Image from "next/image";

interface CardProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}

function WhyCard({ title, description, children, className }: CardProps) {
    return (
        <div className={`bg-white rounded-[32px] p-6 md:p-8 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] border border-[color-mix(in_srgb,var(--main-page-secondary),transparent_92%)] flex flex-col gap-4 overflow-hidden ${className}`}>
            <div>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--main-page-secondary)] mb-2 leading-tight">
                    {title}
                </h3>
                <p className="text-sm md:text-base text-[var(--faded-text)] font-medium leading-relaxed opacity-80">
                    {description}
                </p>
            </div>
            <div className="flex-1 flex flex-col justify-end">
                {children}
            </div>
        </div>
    );
}

export default function WhySchools() {
    return (
        <section className="py-20 px-6 bg-[color-mix(in_srgb,var(--main-page-secondary),transparent_95%)]">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--faded-text)] leading-tight">
                        Empowering Leadership with <span className="text-[var(--main-page-secondary)]">Real-Time Insights</span>
                    </h2>
                    <p className="mt-6 text-base md:text-lg text-[var(--faded-text)] max-w-4xl mx-auto font-medium leading-relaxed opacity-80">
                        Strategic leadership requires more than just intuition; it requires clarity. <span className="text-[var(--main-page-secondary)] font-bold">AcadAlly.ai</span> tracks performance across all levels, enabling faster, smarter decision-making to drive academic success.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <WhyCard
                        title="See the Full Picture, Instantly"
                        description="Monitor performance across every class, subject, and topic. Our dashboard turns raw data into a live map of your school's health."
                        className="lg:row-span-2 h-full"
                    >
                        <div className="relative mt-4 -mb-8 -mx-8 flex justify-center">
                            <Image
                                src="/teacher-left-phone.svg"
                                alt="Dashboard"
                                width={240}
                                height={300}
                                className="w-full max-w-[200px] lg:max-w-[280px] h-auto object-contain"
                            />
                        </div>
                    </WhyCard>

                    {/* Middle Column Top */}
                    <WhyCard
                        title="Make Informed Decisions, Faster"
                        description="Skip the spreadsheets. Access beautifully designed reports that simplify complex data for precise strategic planning."
                    >
                        <div className="flex justify-between items-center mt-auto pt-6 opacity-40">
                            <Image src="/teacher-1.svg" alt="icon" width={32} height={32} className="w-8 md:w-10 h-auto" />
                            <Image src="/teacher-2.svg" alt="icon" width={32} height={32} className="w-8 md:w-10 h-auto" />
                            <Image src="/teacher-3.svg" alt="icon" width={32} height={32} className="w-8 md:w-10 h-auto" />
                        </div>
                    </WhyCard>

                    {/* Right Column */}
                    <WhyCard
                        title="Support Teachers with Precision"
                        description="Take the guesswork out of professional development. Identify exactly where support is needed to provide targeted, impactful teacher training."
                        className="lg:row-span-2 h-full"
                    >
                        <div className="relative mt-4 -mb-8 -mx-8 flex justify-center">
                            <Image
                                src="/teacher-right-phone.svg" // Using right phone for visual balance as per screenshot
                                alt="Support Teachers"
                                width={240}
                                height={300}
                                className="w-full max-w-[200px] lg:max-w-[280px] h-auto object-contain"
                            />
                        </div>
                    </WhyCard>

                    {/* Middle Column Bottom */}
                    <WhyCard
                        title="Empower Student Agency"
                        description="Give learners the tools to lead. Personalized progress tracking and clear goals foster initiative, responsibility, and mastery."
                    >
                        <div className="flex justify-between items-center mt-auto pt-6 opacity-40">
                            <Image src="/teacher-4.svg" alt="icon" width={32} height={32} className="w-8 md:w-10 h-auto" />
                            <Image src="/teacher-1.svg" alt="icon" width={32} height={32} className="w-8 md:w-10 h-auto" />
                            <Image src="/teacher-2.svg" alt="icon" width={32} height={32} className="w-8 md:w-10 h-auto" />
                        </div>
                    </WhyCard>
                </div>
            </div>
        </section>
    );
}
