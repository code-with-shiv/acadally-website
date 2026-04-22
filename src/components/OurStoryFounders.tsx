"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { IconType } from "react-icons";

export default function Founders() {
    return (
        <div className="bg-white py-8 md:py-16 lg:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto md:px-8 lg:px-24 relative">

                {/* Connecting Dashed Line (Desktop Only) */}
                <div className="hidden lg:block absolute top-[45%] left-1/2 -translate-x-[45%] w-full max-w-[500px] h-auto pointer-events-none z-0">
                    <svg
                        width="500"
                        height="250"
                        viewBox="0 0 710 425"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-auto opacity-50"
                    >
                        <path
                            opacity="0.4"
                            d="M707.551 0.192688C688.584 66.4332 614.446 269.909 389.618 192.695C76.0138 84.9927 50.0348 361.057 0.551025 424.193"
                            stroke="url(#paint0_linear_1742_7110)"
                            strokeWidth="1.4"
                            strokeDasharray="14 14"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_1742_7110"
                                x1="586.265"
                                y1="21.0427"
                                x2="-8.87834"
                                y2="350.816"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#CFCDAF" />
                                <stop offset="1" stopColor="#E2E2E2" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="space-y-16 md:space-y-20 lg:space-y-24 relative z-10">

                    {/* Mr. Yash Prakash - Image Left, Text Right (lg staggered) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center">
                        {/* Image */}
                        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                            <div className="relative w-full max-w-[200px] md:max-w-[260px] lg:max-w-[300px]">
                                <motion.svg
                                    className="absolute inset-0 w-full h-full -z-10 scale-125"
                                    viewBox="0 0 560 596" fill="none" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <motion.path
                                        d="M541.152 438.054C473.771 352.654 334.134 185.792 314.628 201.541C290.246 221.227 437.387 361.918 460.62 434.059C483.854 506.2 317.778 260.95 269.648 249.688C231.143 240.679 365.372 429.142 437.3 524.5C318.382 373.474 105.399 113.531 204.817 281.967C329.09 492.511 421.155 523.699 383.029 521.808C344.903 519.916 73.4888 168.682 132.456 278.377C191.422 388.072 362.351 556.563 274.474 501.824C186.597 447.085 84.7333 234.504 92.1898 276.379C99.6463 318.255 217.841 516.762 173.907 496.835C129.972 476.908 75.4506 323.066 51.33 321.869C27.2094 320.673 117.69 494.046 89.4846 492.647C66.9202 491.528 32.5277 424.558 18.1521 391.212"
                                        stroke="#FF8A00" strokeWidth="36.2947" strokeLinecap="round" strokeLinejoin="round" fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                                    />
                                </motion.svg>
                                <Image
                                    src="/Yash_mobile.svg"
                                    alt="Mr Yash Prakash"
                                    width={420}
                                    height={420}
                                    className="lg:hidden w-full h-auto object-cover relative z-10"
                                    priority
                                />
                                <Image
                                    src="/Yash_web.svg"
                                    alt="Mr Yash Prakash"
                                    width={420}
                                    height={420}
                                    className="hidden lg:block w-full h-auto object-cover relative z-10"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-3 lg:space-y-6">
                            <div className="text-main-page-secondary text-[14px] md:text-base font-semibold md:font-bold leading-[18px] md:leading-normal">
                                The Educator&apos;s Insight
                            </div>
                            <h2 className="text-[20px] md:text-4xl lg:text-5xl font-semibold md:font-bold text-gray-800 tracking-tight leading-[130%] md:leading-tight">
                                Mr. Yash Prakash
                            </h2>
                            <p className="text-[#000000A6] md:text-gray-600 text-[12px] md:text-base lg:text-lg leading-[140%] md:leading-relaxed max-w-xl font-normal">
                                An alumnus of the University of Illinois Urbana-Champaign and the University of Southampton, he combines international perspective with on-ground understanding. Belonging to a family running K–12 schools across India, Yash has witnessed firsthand the realities of classrooms — the challenges teachers face, the gaps in visibility, and the limitations of existing systems.
                                <div className="font-semibold italic">"Real change in education happens when solutions are built for the classroom, not just around it."</div>
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex gap-3 md:gap-4 pt-2 lg:pt-4">
                                <SocialIcon
                                    Icon={FaLinkedinIn}
                                    label="Follow Yash Prakash on LinkedIn"
                                    href="https://www.linkedin.com/in/yash-prakash-311925a0?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                                />
                                <SocialIcon
                                    Icon={FaInstagram}
                                    label="Follow Yash Prakash on Instagram"
                                    href="https://www.instagram.com/yashprakash_official?igsh=MTduZHl6eTFyeXE3Mg=="
                                />
                            </div>
                        </div>
                    </div>

                    {/* Ms. Ridhi Agarwal - Text Left, Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center">
                        <div className="order-1 lg:order-1 space-y-3 lg:space-y-6">
                            <div className="text-main-page-secondary text-[14px] md:text-base font-semibold md:font-bold leading-[18px] md:leading-normal">
                                The Data Scientist&apos;s Vision
                            </div>
                            <h2 className="text-[20px] md:text-4xl lg:text-5xl font-semibold md:font-bold text-gray-800 tracking-tight leading-[130%] md:leading-tight">
                                Ms. Ridhi Agarwal
                            </h2>
                            <p className="text-[#000000A6] md:text-gray-600 text-[12px] md:text-base lg:text-lg leading-[140%] md:leading-relaxed max-w-xl font-normal">
An alumnus of Shri Ram College of Commerce and a Master’s graduate from the Delhi School of Economics, she developed a strong foundation in data and analytical thinking. This shaped her belief that data, when meaningfully integrated with technology, can transform how we understand learning.                                <div className="font-semibold italic">“Behind every low score is a story waiting to be understood — not judged.”</div>
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex gap-3 md:gap-4 pt-2 lg:pt-4">
                                <SocialIcon
                                    Icon={FaLinkedinIn}
                                    label="Follow Ridhi Agarwal on LinkedIn"
                                    href="https://www.linkedin.com/in/ridhi-agarwal-0b9608103?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                                />
                                <SocialIcon
                                    Icon={FaInstagram}
                                    label="Follow Ridhi Agarwal on Instagram"
                                    href="https://www.instagram.com/ridhiagarwal_official?igsh=bnl2Y3NwMW0wbHNx"
                                />
                            </div>
                        </div>

                        {/* Image */}
                        <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[200px] md:max-w-[260px] lg:max-w-[300px]">
                                <motion.svg
                                    className="absolute inset-0 w-full h-full -z-10 scale-125"
                                    viewBox="0 0 560 571" fill="none" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <motion.path
                                        d="M541.152 397.554C473.771 312.154 334.134 145.292 314.628 161.041C290.246 180.727 437.387 321.418 460.62 393.559C483.854 465.7 317.778 220.45 269.648 209.188C231.143 200.179 365.372 388.642 437.3 484C318.382 332.974 105.399 73.0311 204.817 241.467C329.09 452.011 421.155 483.199 383.029 481.308C344.903 479.416 73.4888 128.182 132.456 237.877C191.422 347.572 362.351 516.063 274.474 461.324C186.597 406.585 84.7333 194.004 92.1898 235.879C99.6463 277.755 217.841 476.262 173.907 456.335C129.972 436.408 75.4506 282.566 51.33 281.369C27.2094 280.173 117.69 453.546 89.4846 452.147C66.9202 451.028 32.5277 384.058 18.1521 350.712"
                                        stroke="#1C4CC3" strokeWidth="36.2947" strokeLinecap="round" strokeLinejoin="round" fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                                    />
                                </motion.svg>
                                <Image
                                    src="/Ridhi_mobile.svg"
                                    alt="Ms Ridhi Agarwal"
                                    width={420}
                                    height={420}
                                    className="lg:hidden w-full h-auto object-cover relative z-10"
                                    priority
                                />
                                <Image
                                    src="/Ridhi_web.svg"
                                    alt="Ms Ridhi Agarwal"
                                    width={420}
                                    height={420}
                                    className="hidden lg:block w-full h-auto object-cover relative z-10"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Social Icon Component
function SocialIcon({ Icon, label, href }: { Icon: IconType, label: string, href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 lg:w-11 lg:h-11 bg-[#D2DBFE] rounded-lg flex items-center justify-center hover:bg-main-page-secondary transition-all duration-300 cursor-pointer group"
            aria-label={label}
        >
            <Icon className="w-5 h-5 text-main-page-secondary group-hover:text-white transition-colors duration-300" />
        </a>
    );
}
