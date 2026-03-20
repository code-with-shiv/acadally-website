"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import Button from "./Button";
import { useRouter } from "next/navigation";

const navLinks = [
    { label: "Features", href: "about-acadally", hasDropdown: true },
    { label: "Pricing", href: "pricing" },
    { label: "Contact Us", href: "contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="flex items-center justify-between py-2 lg:py-0 relative">
                <div className="md:hidden">
                    <Link href="/">
                        <Image src="/acadally-header-main-logo.svg" className="cursor-pointer w-auto h-8 lg:h-10" alt="AcadAlly Header Main Logo" width={120} height={32} />
                    </Link>
                </div>
                <div className="hidden md:flex items-center gap-2">
                    <Link href="/">
                        <Image src="/acadally-header-main-logo.svg" className="cursor-pointer w-auto h-8 lg:h-10" alt="AcadAlly Header Main Logo" width={120} height={32} />
                    </Link>
                </div>
                <div className="flex items-center justify-between gap-4 lg:gap-8">

                    <div>
                        <Button text="Login" onClick={() => { router.push("/login") }} classes={"text-white bg-main-page-secondary h-8 px-4 flex items-center justify-center text-xs lg:hidden"} />
                    </div>
                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-8 md:text-base md:font-medium md:leading-[20px] md:tracking-[0%] md:text-center md:align-middle [leading-trim:none] text-gray-800">
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
                    <div className="md:hidden flex items-center justify-between gap-4">
                        <div><Image src="/contact-phone-icon.svg" alt="Contact Phone Icon" width={20} height={20} /></div>
                        <div
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="cursor-pointer w-6 h-5 flex flex-col justify-between items-center"
                        >
                            <span className={`w-full h-0.5 bg-main-page-secondary transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-main-page-secondary transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-main-page-secondary transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
                        </div>
                    </div>
                    <div>
                        <Link href="https://app.acadally.com/" target="_blank" rel="noopener noreferrer">
                            <Button
                                text="Login"
                                classes="text-white text-sm md:text-sm bg-main-page-secondary hidden lg:flex"
                            />
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Backdrop Blur Overlay */}
            <div
                className={`fixed left-0 right-0 bottom-0 top-20 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu List */}
            <div className={`md:hidden fixed top-20 left-0 right-0 bg-white shadow-lg z-50 py-4 px-6 border-t transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-lg font-medium text-gray-800 hover:text-main-page-secondary transition-colors py-2 border-b border-gray-100 last:border-none flex items-center justify-between"
                        >
                            {link.label}
                            {link.hasDropdown && (
                                <RiArrowDropDownLine size={30} className="text-gray-400" />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
