"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
    return (
        <footer className="relative bg-[#0A2684] text-white px-4 md:px-8 lg:px-12 xl:px-20 py-4 md:py-6 lg:py-8 xl:py-10 overflow-hidden">
            {/* Atmospheric Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] bg-[radial-gradient(circle_at_center,_#624FE266_0%,_transparent_70%)] blur-[80px]" />
                <div className="absolute top-1/2 right-[-5%] w-[35%] h-[60%] bg-[radial-gradient(circle_at_center,_#A0DBFF33_0%,_transparent_70%)] blur-[60px]" />
                <div className="absolute bottom-[-10%] left-1/4 w-[50%] h-[40%] bg-[radial-gradient(circle_at_center,_#624FE244_0%,_transparent_70%)] blur-[100px]" />
            </div>

            {/* Background SVG */}
            <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full pointer-events-none opacity-15">
                <Image
                    src="/footer-bg.svg"
                    alt="footer background"
                    fill
                    className="object-cover object-left"
                />
            </div>

            <div className="relative z-10">
                <div className="flex flex-col lg:flex-row w-full border-b border-white/20 pb-6 md:pb-8 lg:pb-10 gap-6 lg:gap-0">
                    {/* Logo and App Download Section */}
                    <motion.div
                        className="w-full lg:w-[40%] flex flex-col gap-4 md:gap-5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-col gap-3 md:gap-4 border-b border-white/10 pb-4 md:pb-6">
                            <Link href={"/"} className="cursor-pointer">
                                <Image src="/acadally-logo-white.svg" alt="AcadAlly Official Logo Footer" width={100} height={100} className="w-60 md:w-72 lg:w-80" />
                            </Link>
                            <div className="text-sm md:text-base opacity-90">One Click to India&apos;s First AI-Powered Learning</div>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-6 mt-2">
                            <div className="flex flex-col text-xs md:text-sm text-white/80">
                                <p>For Best Experience </p>
                                <p>Download AcadAlly App</p>
                            </div>
                            <div className="flex gap-4">
                                <Link href="https://play.google.com/store/apps/details?id=com.rap.acadally&hl=en_IN" target="_blank" className="hover:scale-105 transition-transform">
                                    <Image src="/google-play-store-badge.svg" alt="Get it on Google Play Store" width={140} height={42} className="w-32 scale-110 h-18 md:w-36 lg:w-40" />
                                </Link>
                                <Link href="https://apps.apple.com/in/app/acadally-learning-companion/id6447542429" target="_blank" className="hover:scale-105 transition-transform">
                                    <Image src="/app-store-badge.svg" alt="Download on the App Store" width={140} height={40} className="w-32 h-18 md:w-36 lg:w-40" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Corporate Office and Contact Info */}
                    <motion.div
                        className="w-full lg:w-[30%] flex flex-col gap-6 lg:pl-8 xl:pl-14"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="flex flex-col gap-3 md:gap-4">
                            <div className="font-bold text-base md:text-lg text-white">Corporate Office</div>
                            <div className="text-xs md:text-sm text-white/80 max-w-xs leading-relaxed">Nagpal Tower, Pocket D, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020</div>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4">
                            <div className="font-bold text-base md:text-lg text-white">Contact Info</div>
                            <div className="flex flex-col gap-3">
                                <a href="tel:+919289373365" className="flex gap-3 items-center text-xs md:text-sm hover:text-custom-orange transition-colors group">
                                    <div className="p-2 rounded-full border border-white/10 group-hover:border-white/30 transition-colors">
                                        <Image src="/footer-contact-phone-icon.svg" alt="Phone Icon" width={18} height={18} />
                                    </div>
                                    <div className="opacity-90">+91 92893 73365</div>
                                </a>
                                <a href="mailto:Info@acadally.com" className="flex gap-3 items-center text-xs md:text-sm hover:text-custom-orange transition-colors group">
                                    <div className="p-2 rounded-full border border-white/10 group-hover:border-white/30 transition-colors">
                                        <Image src="/footer-contact-email-icon.svg" alt="Email Icon" width={18} height={18} />
                                    </div>
                                    <div className="opacity-90">Info@acadally.com</div>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="w-full lg:w-[30%] flex flex-col gap-4 lg:pl-8 xl:pl-24"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="font-bold text-base md:text-lg text-white">Quick Links</div>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                            {/* <Link href="/careers" className="text-sm opacity-80 hover:opacity-100 hover:text-custom-orange transition-all">Careers</Link> */}
                            <Link href="/contact" className="text-sm opacity-80 hover:opacity-100 hover:text-custom-orange transition-all">Contact Us</Link>
                            <Link href="/events" className="text-sm opacity-80 hover:opacity-100 hover:text-custom-orange transition-all">Events</Link>
                            <Link href="/about-acadally" className="text-sm opacity-80 hover:opacity-100 hover:text-custom-orange transition-all">Our Story</Link>
                            <Link href="/pricing" className="text-sm opacity-80 hover:opacity-100 hover:text-custom-orange transition-all">Pricing</Link>
                            <Link href="/schools" className="text-sm opacity-80 hover:opacity-100 hover:text-custom-orange transition-all">School</Link>
                            <Link href="/teachers" className="text-sm opacity-80 hover:opacity-100 hover:text-custom-orange transition-all">Teachers</Link>
                            <Link href="/students" className="text-sm opacity-80 hover:opacity-100 hover:text-custom-orange transition-all">Students</Link>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-5 md:pt-6 gap-4">
                    <div className="text-[10px] md:text-[12px] text-white/60 text-center sm:text-left tracking-wide uppercase">
                        © Copyright Avalon Labs Private Limited {new Date().getFullYear()}. All rights reserved.
                    </div>
                    <div className="flex gap-3 md:gap-4">
                        <SocialIcon icon="/Linkedin.svg" url="https://www.linkedin.com/company/acadally/?viewAsMember=true" />
                        <SocialIcon icon="/Insta.svg" url="https://www.instagram.com/acadally_ai/" />
                        <SocialIcon icon="/Facebook.svg" url="https://www.facebook.com/profile.php?id=100095127463857" />
                        <SocialIcon icon="/Symbol.svg" url="https://www.youtube.com/@acadally2629" />
                        <SocialIcon icon="/x_logo.svg" url="#" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon, url, isWhite = false }: { icon: string, url: string, isWhite?: boolean }) {
    return (
        <Link href={url} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isWhite ? "bg-white text-blue-900" : "bg-white/10 hover:bg-white/20"}`}>
            <Image src={icon} alt="social" width={20} height={20} className={isWhite ? "" : "opacity-80 group-hover:opacity-100"} />
        </Link>
    );
}
