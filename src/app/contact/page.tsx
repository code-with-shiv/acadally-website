import ContactMain from "@/components/ContactMain";
import ContactForm from "@/components/ContactForm";
import Transform from "@/components/Transform";
import Location from "@/components/Location";
import Faq from "@/components/Faq";

export default function Contactus() {
    return (
        <main className="min-h-screen bg-white">
            <ContactMain />
            <ContactForm />
            <Location />

            <div className="px-6 py-2 lg:px-20 lg:py-5">
                <Faq />
            </div>
            <Transform />
        </main>
    )
}
