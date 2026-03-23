"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
    RiArrowDropDownLine,
    RiSchoolLine,
    RiUserVoiceLine,
    RiUserStarLine,
    RiMoneyDollarCircleLine,
    RiGlobalLine,
    RiContactsLine,
    RiArticleLine,
    RiCalendarEventLine,
    RiQuestionLine,
    RiHome4Line
} from "react-icons/ri";
import Button from "./Button";
import { useRouter, usePathname } from "next/navigation";

const featureRoutes = [
    { label: "Home", href: "/", desc: "Go back to the starter page", icon: <RiHome4Line className="w-5 h-5" /> },
    { label: "About AcadAlly", href: "/about-acadally", desc: "Our mission to transform learning", icon: <RiGlobalLine className="w-5 h-5" /> },
    { label: "Schools", href: "/schools", desc: "AI solutions for institutions", icon: <RiSchoolLine className="w-5 h-5" /> },
    { label: "Teachers", href: "/teachers", desc: "Tools for modern educators", icon: <RiUserVoiceLine className="w-5 h-5" /> },
    { label: "Students", href: "/students", desc: "Personalized path to success", icon: <RiUserStarLine className="w-5 h-5" /> },
    { label: "Blog", href: "/blog", desc: "Latest insights and updates", icon: <RiArticleLine className="w-5 h-5" /> },
    { label: "Events", href: "/events", desc: "Workshops and webinars", icon: <RiCalendarEventLine className="w-5 h-5" /> },
    { label: "FAQ", href: "/faq", desc: "Quick answers to your queries", icon: <RiQuestionLine className="w-5 h-5" /> },
];

const navLinks = [
    { label: "Features", href: "#", hasDropdown: true },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    const currentFeature = featureRoutes.find(route => route.href === pathname);
    const displayLabel = currentFeature ? currentFeature.label : "Features";

    const handleMouseEnter = () => {
        if (dropdownTimeout) clearTimeout(dropdownTimeout);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200);
        setDropdownTimeout(timeout);
    };

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
            <nav className="fixed top-0 left-0 right-0 z-100 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between py-4 px-4 lg:px-20 transition-all duration-300">
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
                            <div
                                key={index}
                                className="relative group py-2"
                                onMouseEnter={() => link.hasDropdown && handleMouseEnter()}
                                onMouseLeave={() => link.hasDropdown && handleMouseLeave()}
                            >
                                <Link
                                    href={link.href}
                                    className={`flex items-center justify-center hover:text-main-page-secondary transition-colors h-full ${pathname === link.href ? 'text-main-page-secondary' : ''}`}
                                >
                                    {link.hasDropdown ? displayLabel : link.label}
                                    {link.hasDropdown && (
                                        <RiArrowDropDownLine className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} size={30} />
                                    )}
                                </Link>

                                {link.hasDropdown && isDropdownOpen && (
                                    <div
                                        className="absolute top-full -left-20 lg:-left-32 w-[500px] pt-4 z-50 transition-all duration-300 origin-top transform scale-100 opacity-100"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden p-4">
                                            <div className="grid grid-cols-2 gap-2">
                                                {featureRoutes.map((route, i) => (
                                                    <Link
                                                        key={i}
                                                        href={route.href}
                                                        className={`group/item flex items-start gap-4 p-3 rounded-xl transition-all duration-200 hover:bg-main-page-secondary/5 ${pathname === route.href ? 'bg-main-page-secondary/5' : ''}`}
                                                    >
                                                        <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${pathname === route.href ? 'bg-main-page-secondary text-white' : 'bg-gray-50 text-gray-500 group-hover/item:bg-main-page-secondary group-hover/item:text-white'}`}>
                                                            {route.icon}
                                                        </div>
                                                        <div className="flex flex-col text-left">
                                                            <span className={`text-sm font-semibold transition-colors ${pathname === route.href ? 'text-main-page-secondary' : 'text-gray-900 group-hover/item:text-main-page-secondary'}`}>
                                                                {route.label}
                                                            </span>
                                                            <span className="text-[11px] text-gray-500 font-normal leading-tight mt-0.5">
                                                                {route.desc}
                                                            </span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                            {/* <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-[11px] text-gray-400">
                                                <span>AcadAlly Ecosystem</span>
                                                <div className="flex gap-3">
                                                    <Link href="/faq" className="hover:text-main-page-secondary">Support</Link>
                                                    <Link href="/contact" className="hover:text-main-page-secondary">Contact</Link>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Icons */}
                    <div className="md:hidden flex items-center justify-between gap-4">
                        <div><Image src="/whatsapp-logo.svg" alt="Contact Phone Icon" width={20} height={20} /></div>
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
                <div className="flex flex-col gap-2">
                    {navLinks.map((link, index) => (
                        <div key={index} className="flex flex-col">
                            <div
                                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-none"
                                onClick={() => link.hasDropdown && setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <Link
                                    href={link.href === "#" ? "" : link.href}
                                    onClick={(e) => {
                                        if (link.hasDropdown) {
                                            e.preventDefault();
                                        } else {
                                            setIsMenuOpen(false);
                                        }
                                    }}
                                    className={`text-lg font-medium transition-colors ${pathname === link.href ? 'text-main-page-secondary' : 'text-gray-800'}`}
                                >
                                    {link.hasDropdown ? displayLabel : link.label}
                                </Link>
                                {link.hasDropdown && (
                                    <RiArrowDropDownLine
                                        size={30}
                                        className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-main-page-secondary' : 'text-gray-400'}`}
                                    />
                                )}
                            </div>

                            {link.hasDropdown && isDropdownOpen && (
                                <div className="mt-2 grid grid-cols-1 gap-1">
                                    {featureRoutes.map((route, i) => (
                                        <Link
                                            key={i}
                                            href={route.href}
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${pathname === route.href ? 'bg-main-page-secondary/5 text-main-page-secondary' : 'text-gray-700 active:bg-gray-50'}`}
                                        >
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${pathname === route.href ? 'bg-main-page-secondary text-white' : 'bg-gray-100 text-gray-400'}`}>
                                                {route.icon}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold">{route.label}</span>
                                                <span className="text-[10px] text-gray-500 font-normal">{route.desc}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
