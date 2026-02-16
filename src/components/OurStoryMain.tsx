import AboveHeading from "./AboveHeading";
import BelowHeading from "./BelowHeading";
import BlueText from "./BlueText";
import Button from "./Button";
import Heading from "./Heading";

export default function OurStoryMain() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
                {/* Top-Left Large Glow */}
                <div
                    className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full blur-[120px] opacity-40"
                    style={{ background: 'radial-gradient(circle, rgba(28, 76, 195, 0.25) 0%, rgba(28, 76, 195, 0) 70%)' }}
                />
                {/* Right-Middle Glow */}
                <div
                    className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[100px] opacity-30"
                    style={{ background: 'radial-gradient(circle, rgba(28, 76, 195, 0.2) 0%, rgba(28, 76, 195, 0) 70%)' }}
                />
                {/* Bottom-Center/Left Glow */}
                <div
                    className="absolute -bottom-[10%] left-[10%] w-[60%] h-[60%] rounded-full blur-[130px] opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(28, 76, 195, 0.15) 0%, rgba(28, 76, 195, 0) 70%)' }}
                />
            </div>
            <main className="flex flex-col items-center my-8 md:my-20 max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center text-center gap-8 lg:gap-12 w-full">
                    {/* our-story-main-left */}
                    <div className="our-story-main-left w-full flex flex-col items-center gap-4 md:gap-6">
                        <div className="animate-in fade-in slide-in-from-top-4 duration-1000">
                            <Button
                                text="AcadAlly.ai Story"
                                classes="bg-main-page-secondary/10 text-main-page-secondary text-sm md:text-base font-bold px-8 py-2.5"
                            />
                        </div>

                        <div className="flex flex-col items-center gap-1 md:gap-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                            <AboveHeading>
                                <span className="text-main-page-secondary font-medium text-xl md:text-2xl lg:text-3xl tracking-tight opacity-90">
                                    Bridging the Gap Between
                                </span>
                            </AboveHeading>
                            <Heading
                                element={
                                    <h1 className="text-main-page-secondary text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight lg:leading-[1.1]">
                                        Pedagogy and Technology
                                    </h1>
                                }
                            />
                        </div>
                    </div>

                    {/* our-story-main-right */}
                    <div className="our-story-main-right w-full flex flex-col items-center max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                        <BelowHeading>
                            <BlueText text="AcadAlly.ai" /> wasn’t born in a boardroom — it was <BlueText text="forged in the classroom" />.
                            Our mission is to make learning deeply meaningful, connected, and impactful for every child.
                        </BelowHeading>
                    </div>
                </div>
            </main>
        </div>
    )
}