import Image from "next/image";

interface CardProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}

function WhyCard({ title, description, children, className }: CardProps) {
    return (
        <div className={`bg-white rounded-lg p-3 md:p-5 lg:py-6 lg:px-8 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] border border-[color-mix(in_srgb,var(--orange-primary),transparent_92%)] flex flex-col gap-2 overflow-hidden ${className}`}>
            <div className="text-left lg:text-center lg:mb-6">
                <h3 className="text-base md:text-xl font-semibold text-[var(--orange-primary)] mb-1 leading-tight">
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

export default function WhyStudents() {
    const icons = ["/teacher-1.svg", "/teacher-2.svg", "/teacher-3.svg", "/teacher-4.svg"];

    const card1 = (
        <WhyCard
            title="Discover Your Academic Superpower"
            description="Unlock hidden strengths with AI that adapts to how you learn, turning your toughest subjects into your greatest victories."
            className="w-full min-h-[240px] lg:min-h-0 lg:col-start-2 lg:row-start-1"
        >
            <div className="flex justify-start lg:justify-between items-center w-full mt-2 opacity-50 gap-2">
                {icons.map((icon, i) => (
                    <Image key={i} src={icon} alt="icon" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                ))}
            </div>
        </WhyCard>
    );

    const card2 = (
        <WhyCard
            title="Learn With Joy, Free from Judgement"
            description="Step into a supportive space where 'I don't know' is just the beginning. Every mistake is a stepping stone, and every effort is celebrated."
            className="w-full lg:col-start-1 lg:row-span-2 h-full"
        >
            {/* Compact mobile image container */}
            <div className="relative mt-1 -mb-2 lg:-mb-8 flex justify-center w-full max-h-[200px] lg:max-h-none overflow-hidden">
                <Image
                    src="/student-phone-1.svg"
                    alt="Learn With Joy"
                    width={300}
                    height={400}
                    className="hidden lg:block w-full max-w-[240px] md:max-w-[280px] h-auto object-contain"
                />
                <Image
                    src="/teacher-left.svg"
                    alt="Learn With Joy"
                    width={300}
                    height={400}
                    className="lg:hidden w-full max-w-[160px] h-auto object-contain"
                />
            </div>
        </WhyCard>
    );

    const card3 = (
        <WhyCard
            title="Grow Smarter, One Day at a Time"
            description="Build a daily habit of excellence. Our micro-learning approach ensures you're always moving forward without the burnout."
            className="w-full lg:col-start-3 lg:row-span-2 h-full"
        >
            {/* Compact mobile image container */}
            <div className="relative mt-1 -mb-2 lg:-mb-8 flex justify-center w-full max-h-[200px] lg:max-h-none overflow-hidden">
                <Image
                    src="/student-phone-2.svg"
                    alt="Grow Smarter"
                    width={300}
                    height={400}
                    className="hidden lg:block w-full max-w-[240px] md:max-w-[280px] h-auto object-contain"
                />
                <Image
                    src="/teacher-right.svg"
                    alt="Grow Smarter"
                    width={300}
                    height={400}
                    className="lg:hidden w-full max-w-[160px] h-auto object-contain"
                />
            </div>
        </WhyCard>
    );

    const card4 = (
        <WhyCard
            title="Learn at Your Own Pace, Your Own Way"
            description="No pressure. No comparisons. AcadAlly adapts to your speed—so you can pause, revise, or race ahead with confidence, not anxiety."
            className="w-full min-h-[240px] lg:min-h-0 lg:col-start-2 lg:row-start-2"
        >
            <div className="flex justify-start lg:justify-between items-center w-full mt-2 opacity-50 gap-2">
                {icons.map((icon, i) => (
                    <Image key={i} src={icon} alt="icon" width={32} height={32} className="w-6 md:w-8 md:w-14 h-auto" />
                ))}
            </div>
        </WhyCard>
    );

    return (
        <section className="px-6 py-12 lg:px-20 lg:py-20 bg-[#FFF9F2]">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-10 lg:mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[var(--faded-text)]">
                        Why Students Love Learning with <span className="text-[var(--orange-primary)]">AcadAlly.ai</span>
                    </h2>
                </div>

                {/* Mobile View */}
                <div className="flex lg:hidden gap-4">
                    <div className="flex-1 flex flex-col gap-4">
                        {card1}
                        {card2}
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        {card3}
                        {card4}
                    </div>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:grid lg:grid-cols-[0.8fr_1.4fr_0.8fr] gap-6">
                    {card2}
                    {card1}
                    {card3}
                    {card4}
                </div>
            </div>
        </section>
    );
}
