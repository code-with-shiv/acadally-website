import Image from "next/image";

interface CardProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}

function WhyCard({ title, description, children, className }: CardProps) {
    return (
        <div className={`bg-white rounded-lg p-3 md:p-5 lg:py-6 lg:px-8 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] border border-[color-mix(in_srgb,var(--main-page-secondary),transparent_92%)] flex flex-col gap-2 overflow-hidden ${className}`}>
            <div className="text-left lg:text-center lg:mb-6">
                <h3 className="text-base md:text-xl font-semibold text-[var(--main-page-secondary)] mb-1 leading-tight">
                    {title}
                </h3>
                <p className="text-[11px] md:text-sm text-[#515151] leading-relaxed opacity-80">
                    {description}
                </p>
            </div>

            <div className="flex-1 flex flex-col items-start lg:items-center justify-end">
                {children}
            </div>
        </div>
    );
}

export default function WhySchools() {
    const cardTopMid = (
        <WhyCard
            title="Make Informed Decisions, Faster"
            description="Skip the spreadsheets. Access beautifully designed reports that simplify complex data for precise strategic planning."
            className="w-full min-h-[240px] lg:min-h-0 lg:col-start-2 lg:row-start-1"
        >
            <div className="flex justify-start lg:justify-between items-center w-full mt-2 opacity-50 gap-2">
                <Image src="/teacher-1.svg" alt="icon" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                <Image src="/teacher-2.svg" alt="icon" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                <Image src="/teacher-3.svg" alt="icon" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
            </div>
        </WhyCard>
    );

    const cardLeft = (
        <WhyCard
            title="See the Full Picture, Instantly"
            description="Monitor performance across every class, subject, and topic. Our dashboard turns raw data into a live map of your school's health."
            className="w-full lg:col-start-1 lg:row-span-2 h-full"
        >
            {/* Compact mobile image container */}
            <div className="relative mt-1 -mb-2 lg:-mb-8 flex justify-center w-full max-h-[200px] lg:max-h-none overflow-hidden">
                <Image
                    src="/teacher-left-phone.svg"
                    alt="Dashboard"
                    width={300}
                    height={400}
                    className="hidden lg:block w-full max-w-[240px] md:max-w-[280px] h-auto object-contain"
                />
                <Image
                    src="/teacher-left-phone.svg"
                    alt="Dashboard"
                    width={300}
                    height={400}
                    className="lg:hidden w-full max-w-[160px] h-auto object-contain"
                />
            </div>
        </WhyCard>
    );

    const cardRight = (
        <WhyCard
            title="Support Teachers with Precision"
            description="Take the guesswork out of professional development. Identify exactly where support is needed to provide targeted, impactful teacher training."
            className="w-full lg:col-start-3 lg:row-span-2 h-full"
        >
            {/* Compact mobile image container */}
            <div className="relative mt-1 -mb-2 lg:-mb-8 flex justify-center w-full max-h-[200px] lg:max-h-none overflow-hidden">
                <Image
                    src="/teacher-right-phone.svg"
                    alt="Support Teachers"
                    width={300}
                    height={400}
                    className="hidden lg:block w-full max-w-[240px] md:max-w-[280px] h-auto object-contain"
                />
                <Image
                    src="/teacher-right-phone.svg"
                    alt="Support Teachers"
                    width={300}
                    height={400}
                    className="lg:hidden w-full max-w-[160px] h-auto object-contain"
                />
            </div>
        </WhyCard>
    );

    const cardBotMid = (
        <WhyCard
            title="Empower Student Agency"
            description="Give learners the tools to lead. Personalized progress tracking and clear goals foster initiative, responsibility, and mastery."
            className="w-full min-h-[240px] lg:min-h-0 lg:col-start-2 lg:row-start-2"
        >
            <div className="flex justify-start lg:justify-between items-center w-full mt-2 opacity-50 gap-2">
                <Image src="/teacher-4.svg" alt="icon" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                <Image src="/teacher-1.svg" alt="icon" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                <Image src="/teacher-2.svg" alt="icon" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
            </div>
        </WhyCard>
    );

    return (
        <section className="px-6 py-12 lg:px-20 lg:py-20 bg-[color-mix(in_srgb,var(--main-page-secondary),transparent_95%)]">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-10 lg:mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[var(--faded-text)]">
                        Empowering Leadership with <span className="text-[var(--main-page-secondary)]">Real-Time Insights</span>
                    </h2>
                    <p className="mt-4 md:mt-6 text-sm md:text-base text-[var(--faded-text)] max-w-4xl mx-auto font-medium leading-relaxed opacity-80">
                        Strategic leadership requires more than just intuition; it requires clarity. <span className="text-[var(--main-page-secondary)] font-bold">AcadAlly.ai</span> tracks performance across all levels, enabling faster, smarter decision-making to drive academic success.
                    </p>
                </div>

                {/* Mobile View */}
                <div className="flex lg:hidden gap-4">
                    <div className="flex-1 flex flex-col gap-4">
                        {cardTopMid}
                        {cardLeft}
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        {cardRight}
                        {cardBotMid}
                    </div>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:grid lg:grid-cols-[0.8fr_1.4fr_0.8fr] gap-6">
                    {cardLeft}
                    {cardTopMid}
                    {cardRight}
                    {cardBotMid}
                </div>
            </div>
        </section>
    );
}
