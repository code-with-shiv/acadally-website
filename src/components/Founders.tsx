import Image from "next/image";

export default function Founders() {
    return (
        <div className="bg-white py-8 md:py-16 lg:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative">

                {/* Connecting Dashed Line (Desktop Only) */}
                <div className="hidden lg:block absolute top-[45%] left-1/2 -translate-x-[45%] w-full max-w-[500px] h-auto pointer-events-none z-0">
                    <Image
                        src="/connection.svg"
                        alt="connection line"
                        width={500}
                        height={250}
                        className="w-full h-auto opacity-50"
                    />
                </div>

                <div className="space-y-16 md:space-y-20 lg:space-y-24 relative z-10">

                    {/* Ms. Ridhi Agarwal - Text Left, Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1 space-y-4 lg:space-y-6">
                            <div className="text-main-page-secondary text-sm md:text-base font-bold">
                                The Data Scientist&apos;s Vision
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight">
                                Ms. Ridhi Agarwal
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
                                An alumna of SRCC and DSE with a background in data science, Ms. Agarwal believed technology should do more than digitize—it should personalize the entire learning experience.
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex gap-4 pt-2 lg:pt-4">
                                <SocialIcon icon="/Linkedin.svg" />
                                <SocialIcon icon="/Insta.svg" />
                                <SocialIcon icon="/Facebook.svg" />
                            </div>
                        </div>

                        {/* Image */}
                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[300px] md:max-w-[380px] lg:max-w-[420px]">
                                <Image
                                    src="/riddhimam.svg"
                                    alt="Ms Ridhi Agarwal"
                                    width={420}
                                    height={420}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mr. Yash Prakash - Image Left, Text Right (lg staggered) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Image */}
                        <div className="order-1 flex justify-center lg:justify-start">
                            <div className="relative w-full max-w-[300px] md:max-w-[380px] lg:max-w-[420px]">
                                <Image
                                    src="/YashSir.svg"
                                    alt="Mr Yash Prakash"
                                    width={420}
                                    height={420}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="order-2 space-y-4 lg:space-y-6">
                            <div className="text-main-page-secondary text-sm md:text-base font-bold">
                                The Educator&apos;s Insight
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight">
                                Mr. Yash Prakash
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
                                A respected educationist guiding multiple Delhi Public Schools, Mr. Prakash saw teachers stretched thin by administrative burdens and struggling to identify early intervention points for every student.
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex gap-4 pt-2 lg:pt-4">
                                <SocialIcon icon="/Linkedin.svg" />
                                <SocialIcon icon="/Insta.svg" />
                                <SocialIcon icon="/Facebook.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Social Icon Component
function SocialIcon({ icon }: { icon: string }) {
    return (
        <div className="w-10 h-10 lg:w-11 lg:h-11 bg-main-page-secondary/60 rounded-lg flex items-center justify-center hover:bg-main-page-secondary transition-all duration-300 cursor-pointer">
            <Image src={icon} alt="social" width={20} height={20} className="w-5 h-5 grayscale opacity-70" />
        </div>
    );
}
