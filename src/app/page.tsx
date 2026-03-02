import AiEngine from "@/components/AiEngine";
import Cards from "@/components/Cards";
import Companies from "@/components/Companies";
import Counters from "@/components/Counters";
import Events from "@/components/Events";
import Faq from "@/components/Faq";
import Main from "@/components/Main";
import MeetAlly from "@/components/MeetAlly";
import Navbar from "@/components/Navbar";
import PaddingWrapper from "@/components/PaddingWrapper";
import SchoolsSlider from "@/components/SchoolsSlider";
import Testimonials from "@/components/Testimonials";
import Transform from "@/components/Transform";
import VideoWrapper from "@/components/VideoWrapper";

export default function Home() {
  return (
    <>
      <PaddingWrapper><Navbar /></PaddingWrapper>

      <Main />

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

      <PaddingWrapper>
        <Cards />
      </PaddingWrapper>

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
    </>
  );
}
