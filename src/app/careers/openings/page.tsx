import React from "react";
import Link from "next/link";
import PaddingWrapper from "@/components/PaddingWrapper";
import CareersHero from "@/components/CareersHero";

const jobs = [
    {
        id: 1,
        department: "Product",
        title: "Product Manager (EdTech & AI)",
        details: "Full Time | 4-5 Years Experience | Okhla, New Delhi",
    },
    {
        id: 2,
        department: "Tech",
        title: "DevOps Engineer",
        details: "Full Time | 4-5 Years Experience | Remote / Flexible",
    },
    {
        id: 3,
        department: "Marketing",
        title: "Digital Marketing Specialist",
        details: "Full Time | 2-3 Years Experience | Okhla, New Delhi",
    }
];

export default function OpeningsPage() {
    return (
        <div className="min-h-screen bg-[#F4F7FC] font-sans flex flex-col relative w-full overflow-hidden">

            <CareersHero />

            <main className="max-w-[1150px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
                {/* Heading */}
                <h2 className="text-center text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-[#333333] mb-12 tracking-tight">
                    Current <span className="text-[#1C4CC3]">Openings</span>
                </h2>

                {/* Job Cards */}
                <div className="flex flex-col gap-6 w-full">
                    {jobs.map((job) => (
                        <div key={job.id} className="bg-white rounded-[1.25rem] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-blue-100">
                            <div className="flex flex-col">
                                <span className="text-[#1241C2] font-bold text-sm md:text-base mb-1 md:mb-2 tracking-wide">{job.department}</span>
                                <h3 className="text-[#333333] font-bold text-xl sm:text-[1.4rem] mb-2 sm:mb-3">{job.title}</h3>
                                <p className="text-[#6B7280] font-medium text-sm sm:text-[0.95rem]">
                                    {job.details.split(' | ').map((part, index, array) => (
                                        <React.Fragment key={index}>
                                            {part}
                                            {index < array.length - 1 && <span className="mx-2 text-gray-300">|</span>}
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                            <Link href={`/careers/openings/${job.id}`}>
                                <button className="bg-[#1C4CC3] hover:bg-[#153B98] text-white font-bold py-2.5 px-6 md:px-8 rounded-full transition-all active:scale-95 whitespace-nowrap self-start md:self-auto text-sm shadow-sm md:shadow-none hover:shadow-md">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>

            {/* Don't see the right role */}
            <div className="relative w-full bg-white py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden border-t-[0.5px] border-gray-200 mt-auto">
                {/* Background faint geometric shapes matching design exactly */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] border-[30px] md:border-[50px] border-[#F4F7FC]/60 rounded-full pointer-events-none"></div>

                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] border-[40px] md:border-[60px] border-[#F4F7FC]/60 rounded-full pointer-events-none"></div>

                <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-[#333333] mb-4 tracking-tight">
                        Don’t see <span className="text-[#1C4CC3]">the Right Role?</span>
                    </h2>

                    <p className="text-[#515151] font-medium text-base md:text-[1.1rem] max-w-2xl mx-auto mb-8 leading-relaxed">
                        We are always looking for curious minds and passionate builders.<br className="hidden sm:block" />
                        <span className="font-bold text-[#333333]">Share your details and we’ll reach out when something aligns.</span>
                    </p>

                    <button className="bg-[#1C4CC3] hover:bg-[#153B98] text-white font-bold py-3 md:py-3.5 px-10 md:px-12 rounded-full transition-all active:scale-95 text-sm md:text-base shadow-sm">
                        Send us a mail
                    </button>
                </div>
            </div>
        </div>
    );
}
