import Image from "next/image";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";


const navLinks = [
    { label: "About AcadAlly.ai", href: "#", hasDropdown: true },
    { label: "Pricing", href: "#" },
    { label: "Contact Us", href: "#" },
];

export default function Navbar() {
    return (
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
                    <button className="text-white bg-main-page-secondary rounded-full px-4 md:px-6 py-2  font-semibold text-sm md:text-base hover:opacity-90 transition-opacity">
                        Download App
                    </button>
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
    )
}


