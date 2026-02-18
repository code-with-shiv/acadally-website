import Image from "next/image";

interface CardProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}

function WhyCard({ title, description, children, className }: CardProps) {
    return (
        <div className={`bg-white rounded-[32px] p-6 md:p-8 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] border border-[#F0F4FF] flex flex-col gap-4 overflow-hidden ${className}`}>
            <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#393091] mb-2 leading-tight">
                    {title}
                </h3>
                <p className="text-sm md:text-base text-[#515151] font-medium leading-relaxed opacity-80">
                    {description}
                </p>
            </div>
            <div className="flex-1 flex flex-col justify-end">
                {children}
            </div>
        </div>
    );
}

export default function WhyEducators() {
    const icons = ["/teacher-1.svg", "/teacher-2.svg", "/teacher-3.svg", "/teacher-4.svg"];

    return (
        <section className="py-20 px-6 bg-[#F8FAFF]">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#393091]">
                        Why Educators Choose <span className="text-[#1C4CC3]">AcadAlly.ai</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                    {/* Column 1 Mobile / Column 2 Desktop (Top) */}
                    <WhyCard
                        title="Teach Smarter"
                        description="Access NEP-aligned, ready-to-use assessments and interactive resources."
                        className="order-1 lg:order-2 lg:row-start-1"
                    >
                        <div className="flex justify-between items-center mt-auto pt-4 opacity-50">
                            {icons.map((icon, i) => (
                                <Image key={i} src={icon} alt="icon" width={32} height={32} className="w-6 md:w-10 h-auto" />
                            ))}
                        </div>
                    </WhyCard>

                    {/* Column 2 Mobile / Column 3 Desktop */}
                    <WhyCard
                        title="Data-Driven Results"
                        description="AI auto-adjusts content to student levels, freeing you to focus on instruction."
                        className="order-2 lg:order-3 lg:row-span-2 h-full"
                    >
                        <div className="relative mt-4 -mb-8 -mx-8 flex justify-center">
                            <Image
                                src="/teacher-right-phone.svg"
                                alt="Data-Driven Results"
                                width={240}
                                height={300}
                                className="w-full max-w-[200px] lg:max-w-[280px] h-auto object-contain"
                            />
                        </div>
                    </WhyCard>

                    {/* Column 1 Mobile (Bottom) / Column 1 Desktop */}
                    <WhyCard
                        title="Reach Every Student"
                        description="Identify learning gaps by chapter or concept with instant performance insights."
                        className="order-3 lg:order-1 lg:row-span-2 h-full"
                    >
                        <div className="relative mt-4 -mb-8 -mx-8 flex justify-center">
                            <Image
                                src="/teacher-left-phone.svg"
                                alt="Reach Every Student"
                                width={240}
                                height={300}
                                className="w-full max-w-[200px] lg:max-w-[280px] h-auto object-contain"
                            />
                        </div>
                    </WhyCard>

                    {/* Column 2 Mobile (Bottom) / Column 2 Desktop (Bottom) */}
                    <WhyCard
                        title="Personalization at Scale"
                        description="Monitor growth in real-time with analytics that trigger early intervention."
                        className="order-4 lg:order-2 lg:row-start-2"
                    >
                        <div className="flex justify-between items-center mt-auto pt-4 opacity-50">
                            {icons.map((icon, i) => (
                                <Image key={i} src={icon} alt="icon" width={32} height={32} className="w-6 md:w-10 h-auto" />
                            ))}
                        </div>
                    </WhyCard>
                </div>
            </div>
        </section>
    );
}
