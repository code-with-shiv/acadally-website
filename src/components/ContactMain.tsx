import Heading from "./Heading";
import BelowHeading from "./BelowHeading";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactMain() {
    return (
        <section className="relative overflow-hidden bg-white pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-28">
            {/* Background Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(28,76,195,0.08),_transparent_70%)] blur-[60px]" />
                <div className="absolute top-[-15%] right-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,_rgba(28,76,195,0.08),_transparent_70%)] blur-[60px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Badge */}
                <div className="bg-[#EBF2FF] text-[#1C4CC3] px-7 py-2 rounded-full text-sm font-bold mb-8 md:mb-12 shadow-sm border border-[#1C4CC3]/10 tracking-wide">
                    Contact AcadAlly
                </div>

                {/* Main Heading */}
                <div className="mb-8 md:mb-12">
                    <Heading
                        element={
                            <h1 className="text-[#1C4CC3] text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
                                Get in Touch with us
                            </h1>
                        }
                    />
                </div>

                {/* Subheading */}
                <div className="max-w-4xl mb-12 md:mb-16">
                    <BelowHeading>
                        <span className="text-base md:text-xl lg:text-2xl font-medium leading-relaxed">
                            We&apos;re here to help you <span className="text-[#1C4CC3] font-bold">transform learning</span> and support your <span className="text-[#1C4CC3] font-bold">educational journey.</span>
                        </span>
                    </BelowHeading>
                </div>

                {/* Contact Tabs */}
                <div className="flex flex-wrap justify-center gap-6">
                    <a href="tel:+919289373365" className="flex items-center gap-4 bg-[#EBF2FF] p-2 pr-6 rounded-2xl border border-[#1C4CC3]/10 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-[#1C4CC3] rounded-xl flex items-center justify-center text-white shrink-0">
                            <FiPhone size={24} />
                        </div>
                        <span className="text-[#1C4CC3] font-bold text-sm md:text-base border-b border-[#1C4CC3] pb-0.5">
                            +91 92893 73365
                        </span>
                    </a>

                    <a href="mailto:Info@acadally.com" className="flex items-center gap-4 bg-[#EBF2FF] p-2 pr-6 rounded-2xl border border-[#1C4CC3]/10 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-[#1C4CC3] rounded-xl flex items-center justify-center text-white shrink-0">
                            <FiMail size={24} />
                        </div>
                        <span className="text-[#1C4CC3] font-bold text-sm md:text-base border-b border-[#1C4CC3] pb-0.5">
                            Info@acadally.com
                        </span>
                    </a>

                    <a href="https://wa.me/919289373365" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#EBF2FF] p-2 pr-6 rounded-2xl border border-[#1C4CC3]/10 hover:shadow-lg transition-all">
                        <div className="w-12 h-12 bg-[#1C4CC3] rounded-xl flex items-center justify-center text-white shrink-0">
                            <FaWhatsapp size={24} />
                        </div>
                        <span className="text-[#1C4CC3] font-bold text-sm md:text-base border-b border-[#1C4CC3] pb-0.5">
                            Whatsapp Us
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}

