import Image from "next/image";

export default function Both() {
    return (
        <>
            <div>
                <Image
                    src="/OurStoryBoth.svg"
                    className="w-full h-auto hidden md:block"
                    alt="AcadAlly educational impact visualization for desktop"
                    width={1920}
                    height={1080}
                />
                <Image
                    src="/OurStoryBoth-m.svg"
                    className="w-full h-auto block md:hidden"
                    alt="AcadAlly educational impact visualization for mobile"
                    width={800}
                    height={800}
                />
            </div>

        </>
    )
}