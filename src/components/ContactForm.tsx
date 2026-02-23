import Image from "next/image";

export default function ContactForm() {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 xl:px-27">
            {/* Background decorative elements */}

            <div className="relative z-10 py-8 sm:py-12 md:py-16">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6 leading-tight">
                        Fill Our Form to <span className="text-[#1C4CC3]">Hear from us</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
                        We&apos;re here to help you transform your learning experience. Choose the best way to reach us below.
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                    {/* Left Column - Contact Options */}
                    <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-14 order-2 lg:order-1">
                        {/* Book Demo Card */}
                        <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="bg-[#1C4CC3] rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                                    <Image src="/contact-play.svg" alt="Play" width={24} height={24} className="sm:w-8 sm:h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#1C4CC3] mb-1 sm:mb-2">Book a Demo with us</h3>
                                    <p className="text-sm sm:text-base text-gray-600">See AcadAlly in action! Schedule a personalized demo.</p>
                                </div>
                            </div>
                        </div>

                        {/* Technical Support Card */}
                        <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="bg-[#1C4CC3] rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                                    <Image src="/contact-customer.svg" alt="Support" width={24} height={24} className="sm:w-8 sm:h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#1C4CC3] mb-1 sm:mb-2">Technical Support</h3>
                                    <p className="text-sm sm:text-base text-gray-600">Need help with the platform? Our technical support team is ready to assist you.</p>
                                </div>
                            </div>
                        </div>

                        {/* Partnership Card */}
                        <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="bg-[#1C4CC3] rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                                    <Image src="/contact-partnership.svg" alt="Partnership" width={24} height={24} className="sm:w-8 sm:h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#1C4CC3] mb-1 sm:mb-2">Partnership</h3>
                                    <p className="text-sm sm:text-base text-gray-600">Interested in partnering with AcadAlly? Let&apos;s explore collaboration opportunities.</p>
                                </div>
                            </div>
                        </div>

                        {/* QR Code Section */}
                        <div className="bg-[#E0FFEC] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-green-100">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200 flex-shrink-0 mx-auto sm:mx-0">
                                    <Image src="/QR.svg" alt="QR Code" width={80} height={80} className="sm:w-[100px] sm:h-[100px]" />
                                </div>
                                <div className="flex-1 text-center sm:text-left w-full">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">Scan this QR code</h3>
                                    <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">To Connect directly through</p>
                                    <div className="flex justify-center sm:justify-start">
                                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center justify-center gap-2 transition-colors text-base sm:text-lg">
                                            <Image src="/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="sm:w-6 sm:h-6" />
                                            WhatsApp
                                            <Image src="/white-up-arrow.svg" alt="arrow" width={16} height={16} className="sm:w-5 sm:h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-[#EDEDED] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200 order-1 lg:order-2">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Send us a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-sm sm:text-base"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-sm sm:text-base"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+91 00000 00000"
                                    className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-sm sm:text-base"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] text-sm sm:text-base resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#1C4CC3] hover:bg-[#163ea8] text-white font-semibold py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
