import AiEngine from "@/components/AiEngine";
import BelowHeading from "@/components/BelowHeading";
import BlueText from "@/components/BlueText";
import Button from "@/components/Button";
import Cards from "@/components/Cards";
import Companies from "@/components/Companies";
import Counters from "@/components/Counters";
import Events from "@/components/Events";
import Faq from "@/components/Faq";
import Heading from "@/components/Heading";
import MeetAlly from "@/components/MeetAlly";
import Navbar from "@/components/Navbar";
import SchoolsSlider from "@/components/SchoolsSlider";
import Testimonials from "@/components/Testimonials";
import TextRotator from "@/components/TextRotator";
import Transform from "@/components/Transform";
import VideoWrapper from "@/components/VideoWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-6 py-2 lg:px-20 lg:py-5">
      <Navbar />
      <main className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 mt-4">
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="mt-4">
            <Button text="#1 AI Learning Platform 2025" classes={"bg-main-page-secondary/10 text-main-page-secondary"} />
          </div>
          <div>
            <Heading element={<>India&apos;s First AI-Powered Personalized Learning Revolution for <span className="relative inline-block"><TextRotator words={["Parents", "Students", "Schools"]} />
              <Image src="/dash.svg" className="absolute -bottom-2 lg:-bottom-4  -right-10 md:-right-14 w-full h-3 lg:h-4" alt="dash" width={20} height={20} />
            </span></>} />
          </div>
          <div>
            <BelowHeading>
              Get 1:1 AI tutoring, instant doubt clarification, real-time diagnostic assessments, adaptive learning paths, and personalized remediation—all powered by <BlueText text="AcadAlly.ai" />  to <BlueText text="deliver 40% better learning outcomes" />.
            </BelowHeading>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <Button text="Want it for school?" classes={"bg-main-page-secondary text-white w-full py-3"} />
            <Button text="For students" classes={"bg-white border border-main-page-secondary text-main-page-secondary border-2 w-full py-3"} />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image src="/Header_Image.svg" alt="Header Image" width={1200} height={600} priority className="w-full h-auto object-contain" />
        </div>
      </main>

      <div>
        <SchoolsSlider />
      </div>

      <div>
        <Counters />
      </div>

      <div>
        <MeetAlly />
      </div>

      <div>
        <VideoWrapper />
      </div>

      <div>
        <Companies />
      </div>

      <div>
        <Cards />
      </div>

      <div>
        <AiEngine />
      </div>

      <div>
        <Testimonials />
      </div>

      <div>
        <Events />
      </div>

      <div>
        <Faq />
      </div>

      <div>
        <Transform />
      </div>

    </div>
  );
}
