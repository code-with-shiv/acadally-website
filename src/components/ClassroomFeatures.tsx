import Image from "next/image";
import { HiOutlineChartBar, HiOutlineLightBulb, HiOutlineAcademicCap, HiOutlineClipboardCheck } from "react-icons/hi";

export default function ClassroomFeatures() {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
                    <span className="text-purple-primary">Intelligent</span>{" "}
                    <span className="text-faded-text">Classroom</span>
                    <br className="md:hidden" />
                    <span className="text-faded-text"> Features</span>
                </h2>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left: Features */}
                    <div className="space-y-6 md:space-y-8">
                        <FeatureItem
                            icon={<HiOutlineChartBar className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Predictive Analytics"
                            description="Unlock data-driven teaching that anticipates student needs"
                        />
                        <FeatureItem
                            icon={<HiOutlineLightBulb className="w-8 h-8 md:w-10 md:h-10" />}
                            title="NEP-First Pedagogy"
                            description="Seamlessly implement Flipped, Blended, and Project-Based learning."
                        />
                        <FeatureItem
                            icon={<HiOutlineAcademicCap className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Mastery-Based Learning"
                            description="Tailored remediation strategies based on individual student patterns."
                        />
                        <FeatureItem
                            icon={<HiOutlineClipboardCheck className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Gap Detection"
                            description="Prior-knowledge checks to uncover misconceptions before they hinder progress."
                        />
                    </div>

                    {/* Right: Stats Image */}
                    <div className="relative w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[600px]">
                            <Image
                                src="/stats.svg"
                                alt="Classroom Analytics Dashboard"
                                width={600}
                                height={400}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="flex items-start gap-4 md:gap-6">
            <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-[#F0F4FF] rounded-2xl flex items-center justify-center text-purple-primary">
                {icon}
            </div>
            <div className="flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-purple-primary mb-1 md:mb-2">
                    {title}
                </h3>
                <p className="text-sm md:text-base text-faded-text leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}


