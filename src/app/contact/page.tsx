import ContactMain from "@/components/ContactMain";
import ContactForm from "@/components/ContactForm";
import Transform from "@/components/Transform";
import Location from "@/components/Location";
import Faq from "@/components/Faq";
import PaddingWrapper from "@/components/PaddingWrapper";

export default function Contactus() {
    return (
        <main className="min-h-screen bg-white">
            <div className="relative bg-white overflow-hidden mb-10 lg:mb-30">
                {/* Soft Background Glows matching the events page */}
                <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
                     <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(28,76,195,0.45),transparent_70%)] blur-[60px]" />
                    <div className="absolute top-[-15%] right-[-5%] w-[45%] h-[70%] rounded-full bg-[radial-gradient(circle_at_center,rgba(28,76,195,0.45),transparent_70%)] blur-[60px]" />
                </div>

                <div className="relative z-10 flex flex-col px-6 pt-2 pb-0 lg:px-20 lg:pt-5 lg:pb-0">
                    <ContactMain />
                </div>
            </div>
            <ContactForm />
            <Location />
            <Faq />
            <Transform />
        </main>
    )
}
