import Image from "next/image";
import { cn } from "@/lib/utils";

interface PricingCardsProps {
    plan: "yearly" | "quarterly";
}

export default function PricingCards({ plan }: PricingCardsProps) {
    const features = [
        "Everything in Core",
        "AI learning insights",
        "Adaptive mock tests",
        "Deep performance analytics",
    ];

    const isSmartSelected = plan === "yearly";
    const isCoreSelected = false;
    const planLabel = plan === "yearly" ? "Yearly" : "Quarterly";
    const smartPrice = plan === "yearly" ? "₹6,999" : "₹3,249";
    const smartOtherPrice = plan === "yearly" ? "₹3,249" : "₹6,999";
    const corePrice = plan === "yearly" ? "₹4,999" : "₹2,249";
    const coreOtherPrice = plan === "yearly" ? "₹2,249" : "₹4,999";

    return (
        <section className="w-full max-w-6xl mx-auto px-4 mt-4 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-stretch">
                {/* AcadAlly Smart Card */}
                <a
                    href="https://app.acadally.com/login/student?usertype=b2c"
                    aria-label="Sign up for AcadAlly Smart"
                    target="_blank"
                    className={cn(
                    "rounded-[16px] md:rounded-[24px] overflow-hidden relative flex flex-col h-full transform transition-all duration-300 hover:cursor-pointer hover:shadow-2xl hover:scale-[1.03] hover:z-10",
                    plan === "yearly"
                        ? "bg-[#F1F5FF] p-0 border-[4px] border-[#1C4CC3]"
                        : "bg-[#F1F5FF] p-0 border-[4px] border-transparent"
                )}>
                    <div className={cn(
                        "flex flex-col h-full p-4 rounded-[12px] md:rounded-[20px] overflow-hidden transition-colors duration-300",
                        "bg-transparent"
                    )}>
                        {/* Background decoration */}
                        <div className="absolute bottom-14 right-14 pointer-events-none translate-x-1/4 translate-y-1/4 z-30">
                            <Image src="/pricing-card-1-bg.svg" alt="" width={200} height={200} />
                        </div>
                        {/* Most Popular Badge - Only show for yearly plan */}
                        {plan === "yearly" && (
                            <div className="absolute top-48 right-[-4px] z-20">
                                <div className="bg-[#1C4CC3] text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-l-md shadow-lg flex items-center gap-1">
                                    Most Popular
                                    <div className="absolute right-0 top-0 w-0 h-0 border-t-[4px] border-t-transparent border-r-[4px] border-r-[#10348a] border-b-[4px] border-b-transparent translate-x-full translate-y-[-1px] rotate-45 hidden md:block" />
                                </div>
                            </div>
                        )}

                        {/* Header */}
                        <div className="rounded-2xl bg-gradient-to-r from-[#FF8A00] to-[#FF4D8D] p-4  flex justify-between items-center relative overflow-hidden">
                            {/* Background Logo Mark */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none translate-x-1/4">
                                <Image
                                    src="/Acadally logo mark.svg"
                                    alt=""
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-contain rotate-[-15deg]"
                                />
                            </div>

                            <div className="z-10">
                                <h3 className="text-white text-[24px] md:text-[40px] font-semibold leading-[120%]">
                                    <span className="block">AcadAlly</span>
                                    <span className="flex items-center gap-[10px]">
                                        <span>Smart</span>
                                        <span className="w-[69px] h-[23px] px-[18px] rounded-[40px] bg-white/20 text-white text-[12px] leading-[23px] font-semibold flex items-center justify-center">
                                            {planLabel}
                                        </span>
                                    </span>
                                </h3>
                            </div>
                            <div className="relative z-10 flex items-center gap-3 md:gap-5">
                                {/* Payment Smart Icon */}
                                <div className="shrink-0">
                                    <Image
                                        src="/payment-smart-icon.svg"
                                        alt="Payment Smart Icon"
                                        width={80}
                                        height={65}
                                        className="w-[80px] h-[65px] md:w-[178px] md:h-[110px] drop-shadow-2xl brightness-110 object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 flex flex-col flex-grow relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-4 z-10">
                                <span className="text-[32px] md:text-5xl font-extrabold text-[#FF4D8D] leading-none">{smartPrice}</span>
                                <span className="text-[20px] md:text-2xl font-semibold text-[#00000066] line-through decoration-red-500 decoration-2 leading-[39.41px]">{smartOtherPrice}</span>
                            </div>

                            <p className="text-[#000000] text-[16px] md:text-base font-medium mb-8 leading-[140%] max-w-[280px] md:max-w-xs z-10">
                                Our most popular choice for advanced, personalized learning.
                            </p>
                            {/* features */}
                            <div className="z-10 bg-white/70 backdrop-blur-[15px] border border-white/30 rounded-[8px] p-4 flex flex-col gap-[18px] md:gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <Image src="/bi_patch-check-fill.svg" alt="check" width={20} height={20} className="shrink-0" />
                                        <span className="text-gray-600 text-sm md:text-base font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </a>

                {/* AcadAlly Core Card */}
                <a
                    href="https://app.acadally.com/login/student?usertype=b2c"
                    aria-label="Sign up for AcadAlly Core"
                    target="_blank"
                    className={cn(
                    "rounded-[16px] md:rounded-[24px] overflow-hidden relative flex flex-col h-full transform transition-all duration-300 hover:cursor-pointer hover:shadow-2xl hover:scale-[1.03] hover:z-10",
                    isCoreSelected ? "bg-[#1C4CC3] p-[4px] pb-[18px] md:pb-[27px] shadow-xl" : "bg-[#F1F5FF] p-0"
                )}>
                    <div className={cn(
                        "flex flex-col h-full p-4 rounded-[12px] md:rounded-[20px] overflow-hidden transition-colors duration-300",
                        isCoreSelected ? "bg-white" : "bg-transparent"
                    )}>
                        {/* Background decoration */}

                        {/* Header */}
                        <div className="rounded-2xl bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] p-4 flex justify-between items-center relative overflow-hidden">
                            {/* Background Logo Mark */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none translate-x-1/4">
                                <Image
                                    src="/Acadally logo mark.svg"
                                    alt=""
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-contain rotate-[-15deg]"
                                />
                            </div>

                            <div className="z-10">
                                <h3 className="text-white text-[24px] md:text-[40px] font-semibold leading-[120%]">
                                    <span className="block">AcadAlly</span>
                                    <span className="flex items-center gap-[10px]">
                                        <span>Core</span>
                                        <span className="w-[69px] h-[23px] px-[18px] rounded-[40px] bg-white/20 text-white text-[12px] leading-[23px] font-semibold flex items-center justify-center">
                                            {planLabel}
                                        </span>
                                    </span>
                                </h3>
                            </div>
                            <div className="relative z-10 flex items-center gap-3 md:gap-5">
                                {/* Payment Smart Icon */}
                                <div className="shrink-0">
                                    <Image
                                        src="/payment-2-card.svg"
                                        alt="Payment Smart Icon"
                                        width={80}
                                        height={65}
                                        className="w-[80px] h-[65px] md:w-[178px] md:h-[110px] brightness-110 object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4  flex flex-col flex-grow relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-4 z-10">
                                <span className="text-[32px] md:text-5xl font-extrabold text-[#4321C4] leading-none">{corePrice}</span>
                                <span className="text-[20px] md:text-2xl font-semibold text-[#00000066] line-through decoration-red-500 decoration-2 leading-[39.41px]">{coreOtherPrice}</span>
                            </div>

                            <p className="text-[#000000] text-[16px] md:text-base font-medium mb-8 leading-[140%] max-w-[280px] md:max-w-xs z-10">
                                The essential foundation for academic your excellence.
                            </p>
                            {/* features */}
                            <div className="z-10 bg-white/70 backdrop-blur-[15px] border border-white/30 rounded-[8px] p-4 flex flex-col gap-[18px] md:gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <Image src="/bi_patch-check-fill.svg" alt="check" width={20} height={20} className="shrink-0" />
                                        <span className="text-gray-600 text-sm md:text-base font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Background decoration */}
                        <div className="absolute bottom-14 right-14 pointer-events-none translate-x-1/4 translate-y-1/4 z-30">
                            <Image src="/second-card-bg.svg" alt="" width={200} height={200} />
                        </div>
                    </div>
                </a>
            </div>

            {/* AcadAlly for Schools Card */}
            <div className="mt-8 bg-[#F1F5FF] rounded-[24px] overflow-hidden p-6 md:p-10">
                <div className="w-full">
                    <h2 className="text-[#1C4CC3] text-[24px] md:text-[40px] font-bold mb-3 md:mb-4 leading-none">
                        AcadAlly for Schools
                    </h2>
                    <p className="text-gray-700 text-[16px] md:text-[20px] font-medium mb-5 md:mb-10 max-w-2xl leading-[140%] md:leading-[120%]">
                        Empower your entire institution with cutting-edge educational tools.
                    </p>

                    <div className="bg-white rounded-[20px] md:rounded-[16px] p-6 md:p-[24px] flex flex-col gap-5 md:gap-[32px]">
                        {/* School Feature 1 */}
                        <div className="flex gap-3">
                            <div className="shrink-0 mt-1">
                                <Image src="/bi_patch-check-fill.svg" alt="check" width={20} height={20} className="" />
                            </div>
                            <div>
                                <h3 className="text-[#1C4CC3] text-base md:text-[24px] font-bold mb-2 leading-[120%]">Custom Integration</h3>
                                <p className="text-gray-600 text-[14px] md:text-[20px] md:font-medium leading-[140%] md:leading-[120%]">
                                    Tailored solutions for classrooms, departments, or entire school districts.
                                </p>
                            </div>
                        </div>

                        {/* School Feature 2 */}
                        <div className="flex gap-3">
                            <div className="shrink-0 mt-1">
                                <Image src="/bi_patch-check-fill.svg" alt="check" width={20} height={20} className="" />
                            </div>
                            <div>
                                <h3 className="text-[#1C4CC3] text-base md:text-[24px] font-bold mb-2 leading-[120%]">Admin Dashboard</h3>
                                <p className="text-gray-600 text-[14px] md:text-[20px] md:font-medium leading-[140%] md:leading-[120%]">
                                    Custom Comprehensive oversight of student progress and teacher engagement.
                                </p>
                            </div>
                        </div>

                        {/* School Feature 3 */}
                        <div className="flex gap-3">
                            <div className="shrink-0 mt-1">
                                <Image src="/bi_patch-check-fill.svg" alt="check" width={20} height={20} className="" />
                            </div>
                            <div>
                                <h3 className="text-[#1C4CC3] text-base md:text-[24px] font-bold mb-2 leading-[120%]">Bulk Licensing</h3>
                                <p className="text-gray-600 text-[14px] md:text-[20px] md:font-medium leading-[140%] md:leading-[120%]">
                                    Competitive volume pricing designed to fit institutional budgets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
