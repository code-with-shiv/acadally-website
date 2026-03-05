import BelowHeading from "./BelowHeading";
import { RadialText } from "./RadialText";
import Image from "next/image";

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="group relative z-10 border border-blue-100 rounded-2xl p-6 bg-white flex flex-col gap-4 h-full transition-all duration-300 hover:bg-main-page-secondary overflow-hidden">
            <div className="bg-[#EFF4FF] p-3 rounded-xl w-fit transition-colors group-hover:bg-white relative z-20">
                <Image src={icon} alt={title} width={32} height={32} className="relative z-30" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-[#1C4CC3] mb-3 leading-tight transition-colors group-hover:text-white">
                    {title}
                </h3>
                <p className="text-sm text-[#515151] leading-relaxed transition-colors group-hover:text-white">
                    {description}
                </p>
            </div>
        </div>
    );
}

const features = [
    {
        icon: "/cloud.svg",
        title: "Adaptive Learning Paths",
        description: "Tailors your learning journey, adjusting in real-time to your progress and needs."
    },
    {
        icon: "/chart-box-ai-line.svg",
        title: "Predictive Analytics",
        description: "Anticipates learning challenges and provides proactive support."
    },
    {
        icon: "/pencil.svg",
        title: "Content Optimization",
        description: "Tailors your learning journey, adjusting in real-time to your progress and needs."
    },
    {
        icon: "/ai-brain.svg",
        title: "Intelligent Recommendations",
        description: "Receive personalized study tips, practice problems, and resources based on your needs."
    }
];

export default function AiEngine() {
    return (
        <section aria-label="AI Engine Features" className="flex flex-col bg-main-page-secondary/4 gap-12  py-10 px-6 lg:px-20">
            {/* Top Responsive Section */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                {/* Left Content Column */}
                <div className="w-full lg:w-[55%] flex flex-col gap-6 text-center lg:text-left">
                    <div>
                        <RadialText as="h2" className="lg:font-bold lg:text-4xl" text="AI Engine - LEAP™" />
                    </div>
                    <div>
                        <BelowHeading className="text-sm font-normal">
                            <span className="font-bold text-[#1C4CC3]">LEAP™ (Learning Engine for Assessments and Progress)</span> is our powerful AI engine that adapts to your unique learning style, delivering a personalized experience tailored just for you.
                        </BelowHeading>
                    </div>

                    {/* Statistics Row */}
                    <div className="grid grid-cols-3 gap-4 mt-2">
                        <div className="bg-orange-primary/10 rounded-2xl p-4 md:p-6 text-center border border-orange-primary/5">
                            <h3 className="text-2xl md:text-4xl font-bold text-orange-primary">40%</h3>
                            <p className="text-xs md:text-sm text-[#515151] font-medium mt-1">Faster Learning</p>
                        </div>

                        <div className="bg-orange-primary/10 rounded-2xl p-4 md:p-6 text-center border border-orange-primary/5">
                            <h3 className="text-2xl md:text-4xl font-bold text-orange-primary">95%</h3>
                            <p className="text-xs md:text-sm text-[#515151] font-medium mt-1">Accuracy Rate</p>
                        </div>

                        <div className="bg-orange-primary/10 rounded-2xl p-4 md:p-6 text-center border border-orange-primary/5">
                            <h3 className="text-2xl md:text-4xl font-bold text-orange-primary">24/7</h3>
                            <p className="text-xs md:text-sm text-[#515151] font-medium mt-1">AI Support</p>
                        </div>
                    </div>
                </div>

                {/* Right Image Column */}
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[500px] overflow-hidden">
                        <Image
                            src="/ai-engine-bg.svg"
                            alt="Background Decoration"
                            width={500}
                            height={500}
                            className="absolute inset-0 w-full h-auto opacity-70"
                        />
                        <Image
                            src="/leap.svg"
                            alt="LEAP AI Engine Visualization"
                            width={500}
                            height={500}
                            className="relative w-full h-auto drop-shadow-xl"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Feature Cards Grid - 4 Columns on lg screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    )
}