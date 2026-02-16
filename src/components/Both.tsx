import Image from "next/image";

export default function Both() {
    return (
        <>
            <div>
                <Image src="/OurStoryBoth.svg" className="w-full h-auto hidden md:block" alt="Our Story" width={500} height={500} />
                <Image src="/OurStoryBoth-m.svg" className="w-full h-auto block md:hidden" alt="Our Story" width={500} height={500} />
            </div>

        </>
    )
}