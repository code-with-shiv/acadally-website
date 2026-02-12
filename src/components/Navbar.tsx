import Image from "next/image";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import Button from "./Button";

import TextRotator from "./TextRotator";
import SchoolsSlider from "./SchoolsSlider";
import Counters from "./Counters";
import MeetAlly from "./MeetAlly";
import Heading from "./Heading";
import BelowHeading from "./BelowHeading";

const navLinks = [
    { label: "About AcadAlly.ai", href: "#", hasDropdown: true },
    { label: "Pricing", href: "#" },
    { label: "Contact Us", href: "#" },
];

export default function Navbar() {
    return (
        <>
            <nav className="flex items-center justify-between py-4">
                <div className="md:hidden">
                    <Image src="/logo.svg" alt="Logo" width={25} height={25} />
                </div>
                <div className="hidden md:flex items-center gap-2">
                    <div><Image src="/logo-d.svg" className="cursor-pointer w-auto h-8 lg:h-10" alt="Logo" width={150} height={40} /></div>
                    <p className="text-main-page-secondary font-thin text-3xl lg:text-5xl">
                        AcadAlly.ai
                    </p>
                </div>
                <div className="flex items-center gap-4 lg:gap-8">
                    <div>
                        <Button text="Download App" classes={"text-white bg-main-page-secondary"} />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-8 text-sm lg:text-lg font-medium text-gray-800">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="flex items-center justify-center hover:text-main-page-secondary transition-colors"
                            >
                                {link.label}
                                {link.hasDropdown && (
                                    <RiArrowDropDownLine className="font-thin" size={30} />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Icons */}
                    <div className="md:hidden flex items-center gap-4">
                        <div><Image src="/phone.svg" alt="phone" width={20} height={20} /></div>
                        <div><Image src="/hamburger.svg" alt="hamburger" width={20} height={20} /></div>
                    </div>
                </div>
            </nav>

            <main className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 mt-4">
                <div className="flex flex-col gap-6 md:w-1/2">
                    <div className="mt-4">
                        <Button text="#1 AI Learning Platform 2025" classes={"bg-main-page-secondary/10 text-main-page-secondary"} />
                    </div>
                    <div>
                        <Heading element={<>India's First AI-Powered Personalized Learning Revolution for <span className="relative inline-block"><TextRotator words={["Parents", "Students", "Schools"]} />
                            <Image src="/dash.svg" className="absolute -bottom-2 lg:-bottom-4  -right-10 md:-right-14 w-full h-3 lg:h-4" alt="dash" width={20} height={20} />
                        </span></>} />
                    </div>
                    <div>
                        <BelowHeading>
                            Get 1:1 AI tutoring, instant doubt clarification, real-time diagnostic assessments, adaptive learning paths, and personalized remediation—all powered by <span className="text-main-page-secondary font-semibold"> AcadAlly.ai</span>  to <span className="text-main-page-secondary font-semibold">deliver 40% better learning outcomes</span>.
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

        </>
    )
}


