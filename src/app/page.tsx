import AiEngine from "@/components/AiEngine";
import Image from "next/image";
import Cards from "@/components/Cards";
import Companies from "@/components/Companies";
import Counters from "@/components/Counters";
import Events from "@/components/Events";
import Faq from "@/components/Faq";
import Main from "@/components/Main/Main";
import MeetAlly from "@/components/MeetAlly";
import Navbar from "@/components/Navbar";
import PaddingWrapper from "@/components/PaddingWrapper";
import SchoolsSlider from "@/components/Main/SchoolsSlider";
import Testimonials from "@/components/Testimonials";
import Transform from "@/components/Transform";
import VideoWrapper from "@/components/VideoWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative overflow-visible md:overflow-hidden">
        {/* Background Image Container spanning Navbar and Main */}
        <div className="hidden md:block absolute top-0 right-0 w-full md:w-1/2 h-full pointer-events-none z-0">
          <Image src="/main-bg.svg" alt="Background decoration" width={840} height={723} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[130%] md:w-[130%] max-w-none opacity-40 md:opacity-70" />
        </div>

        <div className="relative z-10">
          <PaddingWrapper><Navbar /></PaddingWrapper>
          <Main />
        </div>
      </div>

      <PaddingWrapper><SchoolsSlider /></PaddingWrapper>

      <div><Counters /></div>

      <div>
        <MeetAlly />
      </div>

      <PaddingWrapper>
        <VideoWrapper />
      </PaddingWrapper>

      <div>
        <Companies />
      </div>

      {/* <PaddingWrapper>
        <Cards />
      </PaddingWrapper> */}

      <div>
        <AiEngine />
      </div>

      <PaddingWrapper>
        <Testimonials />
      </PaddingWrapper>

      <PaddingWrapper>
        <Events />
      </PaddingWrapper>

      <PaddingWrapper>
        <Faq />
      </PaddingWrapper>

      <div>
        <Transform />
      </div>
    </main>
  );
}
