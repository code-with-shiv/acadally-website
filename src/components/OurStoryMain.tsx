import AboveHeading from "./AboveHeading";
import BelowHeading from "./BelowHeading";
import BlueText from "./BlueText";
import Button from "./Button";
import Heading from "./Heading";

export default function OurStoryMain() {
    return (
        <div className="relative overflow-hidden">
            <main className="flex flex-col items-center my-8 md:my-20 max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center text-center gap-4 md:gap-8 lg:gap-12 w-full">
                    {/* our-story-main-left */}
                    <div className="our-story-main-left w-full flex flex-col items-center gap-4 md:gap-6">
                        <div className="animate-in fade-in slide-in-from-top-4 duration-1000">
                            <Button
                                text="AcadAlly Story"
                                classes="bg-[#1C4CC31A] text-main-page-secondary text-[10px] md:text-base font-medium md:font-bold px-[16px] py-2 md:px-8 md:py-2.5 rounded-[32px] md:rounded-full leading-[20px] md:leading-normal"
                            />
                        </div>

                        <div className="flex flex-col items-center gap-1 md:gap-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                            <AboveHeading>
                                <span className="text-main-page-secondary font-medium text-[20px] md:text-2xl lg:text-3xl leading-none md:leading-normal tracking-tight opacity-90 text-center">
                                    Bridging the Gap Between
                                </span>
                            </AboveHeading>
                            <Heading
                                element={
                                    <h1 className="text-main-page-secondary text-[32px] md:text-5xl lg:text-6xl font-semibold md:font-bold tracking-tight leading-[1.2] md:leading-tight lg:leading-[1.1] text-center">
                                        Pedagogy and Technology
                                    </h1>
                                }
                            />
                        </div>
                    </div>

                    {/* our-story-main-right */}
                    <div className="our-story-main-right w-full flex flex-col items-center max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                        <BelowHeading className="text-[12px] font-normal leading-[140%] text-center md:text-sm lg:text-base md:font-semibold md:leading-relaxed md:text-left">
                            <BlueText text="AcadAlly" className="font-bold md:font-semibold" /> wasn’t born in a boardroom — it was <BlueText text="forged in the classroom" className="font-bold md:font-semibold" />.
                            Our mission is to make learning deeply meaningful, connected, and impactful for every child.
                        </BelowHeading>
                    </div>
                </div>
            </main>
        </div>
    )
}