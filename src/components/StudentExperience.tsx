import Image from "next/image";
import { HiOutlineUser, HiOutlineCheckBadge, HiOutlineTrophy, HiOutlineUserGroup } from "react-icons/hi2";

export default function StudentExperience() {
    return (
        <section className="bg-white  py-12 lg:py-14">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16">
                    <span className="text-[var(--faded-text)]">The</span>{" "}
                    <span className="text-[var(--orange-primary)]">AcadAlly.ai</span>{" "}
                    <span className="text-[var(--faded-text)]">Experience</span>
                </h2>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left: Features */}
                    <div className="space-y-4 md:space-y-6">
                        <ExperienceItem
                            icon={<HiOutlineUser className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Your Learning, Your Way"
                            description="Ditch the &quot;one-size-fits-all&quot; grind. Get a custom roadmap that respects your pace and focuses on your goals."
                        />
                        <ExperienceItem
                            icon={<HiOutlineCheckBadge className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Mastery Through Feedback"
                            description="Our AI doesn't just grade you—it guides you. It spots your hurdles and provides instant explanations to clear them."
                        />
                        <ExperienceItem
                            icon={<HiOutlineTrophy className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Turn Effort Into Achievement"
                            description="Persistence pays off. Earn badges, certificates, and coins as you hit your milestones. Because learning is winning."
                        />
                        <ExperienceItem
                            icon={<HiOutlineUserGroup className="w-8 h-8 md:w-10 md:h-10" />}
                            title="Always in Sync"
                            description="Stay supported with real-time feedback that keeps you, your parents, and your teachers on the same page."
                        />
                    </div>

                    {/* Right: Stats Image */}
                    <div className="relative w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[600px]">
                            <Image
                                src="/students.svg"
                                alt="Student Experience Dashboard"
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

function ExperienceItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="flex items-start gap-4 md:gap-6">
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[color-mix(in_srgb,var(--orange-primary),transparent_92%)] rounded-sm flex items-center p-4 justify-center text-[var(--orange-primary)]">
                {icon}
            </div>
            <div className="flex flex-col">
                <h3 className="text-base md:text-lg font-bold text-[var(--orange-primary)]">
                    {title}
                </h3>
                <p className="text-sm text-faded-text">
                    {description}
                </p>
            </div>
        </div>
    );
}
