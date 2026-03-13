"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa6";

const blogSections = [
    {
        id: "intro",
        title: "General Overview",
        content: [
            {
                subHeading: "",
                text: (
                    <>
                        Education is changing fast, and with technology like the AI powered learning app for students, choosing between customised and standard evaluations is a big topic. Customised assessments, offered by platforms like <span className="text-[#1C4CC3] underline cursor-pointer">AcadAlly</span>, use the learning AI app for students to create tests that fit each student’s needs, leading to better results.
                    </>
                )
            },
            {
                subHeading: "",
                text: "Standard assessments follow the same format for everyone. This blog compares both to show how the online learning app for students like AcadAlly makes a difference. Let’s explore which is better for students and why the online AI learning app is improving education."
            }
        ]
    },
    {
        id: "standard-assessments",
        title: "What Are Standard Assessments?",
        content: [
            {
                subHeading: "What Are Standard Assessments?",
                text: "Standard assessments are tests given to all students in the same way. These include exams like class quizzes with the same questions for everyone. They aim to be fair by giving a common way to compare students across schools. But this one-size-fits-all method often ignores how each student learns differently."
            },
            {
                subHeading: "",
                text: "A student weak in math might take the same test as a math expert, which can feel discouraging. Standard tests are easy to manage but may not show a student's true abilities. Unlike the AI app for students, they don't adjust to individual needs. This makes them less helpful compared to the online learning app for students."
            }
        ]
    },
    {
        id: "customised-assessments",
        title: "What Are Customised Assessments?",
        content: [
            {
                subHeading: "What Are Customised Assessments?",
                text: "Customised assessments change to match each student's strengths and weaknesses. Using the learning ai solution for students, these tests study how students perform and create questions just for them. For example, if a student is great at shapes but struggles with fractions, the online ai learning app for students gives more fraction questions with adequate reasonings if they select incorrect answers."
            }
        ]
    },
    {
        id: "why-better",
        title: "Why Customised Assessments Are Better",
        content: [
            {
                subHeading: "The Benefits of Personalization",
                text: "By focusing on individual mastery, customized assessments provide a more accurate picture of what a student actually knows. This leads to higher engagement and better retention."
            }
        ]
    },
    {
        id: "excited-to-learn",
        title: "Keeping Students Excited to Learn",
        content: [
            {
                subHeading: "Gamification and AI",
                text: "Interactive elements and real-time feedback keep students motivated. When challenges are tailored to their level, they feel a sense of achievement."
            }
        ]
    },
    {
        id: "teachers-parents",
        title: "Helping Teachers and Parents",
        content: [
            {
                subHeading: "Insightful Reporting",
                text: "Teachers and parents get clear data on where a student needs help, allowing for more targeted support."
            }
        ]
    },
    {
        id: "conclusion",
        title: "Conclusion",
        content: [
            {
                subHeading: "The Future of Education",
                text: "The shift towards AI-powered assessments is not just a trend; it's a necessary evolution to ensure every student reaches their full potential."
            }
        ]
    }
];

export default function BlogsContent() {
    const [activeSection, setActiveSection] = useState(blogSections[0].id);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        observer.current = new IntersectionObserver(handleIntersect, {
            rootMargin: "-20% 0px -70% 0px", // Adjust to trigger when center/top of section is reached
            threshold: 0
        });

        blogSections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.current?.observe(el);
        });

        return () => observer.current?.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 100; // Account for sticky header if any
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const activeData = blogSections.find(s => s.id === activeSection) || blogSections[0];

    return (
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-32 py-10 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
                
                {/* Main Content Area - Left Column on Desktop */}
                <div className="flex-1 lg:order-first">
                    {/* Header: By Acadally */}
                    <div className="flex items-center gap-3 mb-6 lg:mb-8">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#1C4CC3] rounded-full flex items-center justify-center p-1.5 lg:p-2 shadow-lg">
                            <Image src="/acadally-favicon-logo.svg" alt="AcadAlly Logo" width={24} height={24} className="w-full h-full brightness-0 invert" />
                        </div>
                        <span className="text-[18px] lg:text-[22px] font-bold text-[#1C4CC3] font-['Poppins']">
                            By Acadally
                        </span>
                    </div>

                    {/* Desktop Separator */}
                    <div className="w-full h-[1px] bg-gray-200 mb-8 lg:mb-12 hidden lg:block"></div>

                    {/* Mobile Dropdown - Sticky */}
                    <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-sm py-4 -mx-6 px-6 mb-8 border-b border-gray-100">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-between px-6 py-4 bg-[#F0F5FF] text-[#1C4CC3] rounded-[12px] font-bold text-[16px] shadow-sm border border-[#1C4CC31A]"
                        >
                            <span>{activeData.title}</span>
                            <motion.div
                                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FiChevronDown size={24} />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-[12px] shadow-xl z-30 overflow-hidden"
                                >
                                    {blogSections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => {
                                                scrollToSection(section.id);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-6 py-4 transition-colors font-medium text-[16px] ${
                                                activeSection === section.id ? "bg-[#F0F5FF] text-[#1C4CC3]" : "text-gray-500 hover:bg-gray-50"
                                            }`}
                                        >
                                            {section.title}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Article Content - All sections rendered here */}
                    <div className="space-y-6 lg:space-y-8">
                        {blogSections.map((section) => (
                            <div key={section.id} id={section.id} className="scroll-mt-28 lg:scroll-mt-32">
                                <div className="space-y-6 lg:space-y-8">
                                    {section.content.map((item, index) => (
                                        <motion.div
                                            key={`${section.id}-${index}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="flex flex-col gap-6 lg:gap-8"
                                        >
                                            {item.subHeading && (
                                                <h2 className="text-[20px] lg:text-[24px] font-bold text-[#333333] lg:text-[#535353] font-['Poppins'] leading-tight lg:leading-[30px]">
                                                    {item.subHeading}
                                                </h2>
                                            )}
                                            <div className="font-['Poppins'] text-[16px] lg:text-[16px] leading-[1.6] lg:leading-[24px] text-gray-500 lg:text-[#949494] font-normal">
                                                {item.text}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social Section */}
                    <div className="mt-8 lg:mt-20 pt-8 lg:pt-10 border-t border-gray-100 flex gap-6 lg:gap-6">
                        <SocialLink href="#" icon={<FaLinkedinIn className="text-[14px] lg:text-[22px]" />} />
                        <SocialLink href="#" icon={<FaInstagram className="text-[14px] lg:text-[22px]" />} />
                        <SocialLink href="#" icon={<FaFacebookF className="text-[14px] lg:text-[22px]" />} />
                        <SocialLink href="#" icon={<FaYoutube className="text-[14px] lg:text-[22px]" />} />
                    </div>
                </div>

                {/* Sidebar Navigation - Right Column on Desktop */}
                <div className="hidden lg:flex flex-col gap-10 w-1/3 sticky top-24 self-start">
                    <div>
                        <h3 className="text-[20px] font-bold text-[#535353] font-['Poppins'] mb-8 leading-[26px] tracking-[-0.016em]">Table of Contents</h3>
                        <div className="flex flex-col">
                            {blogSections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`relative flex items-center py-3 px-6 text-left transition-all duration-300 border-l-2 ${
                                        activeSection === section.id
                                            ? "border-[#1C4CC3] text-[#1C4CC3]"
                                            : "border-transparent text-[#848484] hover:text-gray-600"
                                    }`}
                                >
                                    <span className={`text-[14px] leading-[20px] font-['Poppins'] transition-all duration-300 ${activeSection === section.id ? "font-bold" : "font-medium"}`}>
                                        {section.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 lg:w-[50px] lg:h-[50px] rounded-[8px] lg:rounded-[12px] bg-[#1C4CC333] lg:bg-[#1C4CC31A] flex items-center justify-center text-[#1C4CC3] hover:bg-[#1C4CC3] hover:text-white transition-all duration-300"
        >
            {icon}
        </a>
    );
}
