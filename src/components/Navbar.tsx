"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import Button from "./Button";

const navLinks = [
    { label: "About AcadAlly.ai", href: "#", hasDropdown: true },
    { label: "Pricing", href: "#" },
    { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <nav className="flex items-center justify-between py-4 relative">
                <div className="md:hidden">
                    <Image src="/logo.svg" alt="Logo" width={25} height={25} />
                </div>
                <div className="hidden md:flex items-center gap-2">
                    <div><Image src="/main-logo.svg" className="cursor-pointer w-auto h-10 lg:h-12" alt="Logo" width={150} height={40} /></div>
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
                        <div
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="cursor-pointer w-6 h-5 flex flex-col justify-between items-center"
                        >
                            <span className={`w-full h-0.5 bg-main-page-secondary transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-main-page-secondary transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-main-page-secondary transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
                        </div>
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
