"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function Location() {
    return (
        <div className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden px-4 sm:px-6 md:px-8 lg:px-30">
            {/* Background decorative elements */}

            <div className="relative z-10 py-10 sm:py-12 md:py-16 lg:py-20 flex flex-col gap-6 sm:gap-0 lg:gap-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center sm:mb-12 md:mb-16 lg:mb-0">
                    <h2 className="text-[32px] sm:text-3xl md:text-4xl lg:text-[40px] font-medium mb-3 sm:mb-4 md:mb-6 leading-[120%] text-center">
                        Our <span className="text-[#1C4CC3] font-bold">Location</span>
                    </h2>
                </motion.div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-10 items-stretch">
                    {/* Left Column - Contact Information Cards */}
                    <div className="flex flex-col justify-between gap-6 sm:gap-0 order-1 h-full">
                        {/* Our Location Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex-1  sm:p-5 md:p-6 border border-gray-100">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="bg-white rounded-lg sm:rounded-xl w-8 h-8 lg:w-[82px] lg:h-[82px] sm:p-3 flex-shrink-0 flex items-center justify-center">
                                    <Image src="/office-location-map-marker.svg" alt="Office Location Map Marker" width={32} height={32} className="w-5 h-5 sm:w-11 sm:h-11 lg:w-10 lg:h-10" />
                                </div>
                                <div>
                                    <h3 className="text-[12px] leading-[16px] font-bold text-[#1C4CC3] mb-1 lg:text-[20px] lg:leading-[26px] lg:tracking-[-0.016em] sm:mb-2 text-left">Our Location</h3>
                                    <p className="text-[#666666] text-[14px] leading-[24px] font-normal lg:text-[16px] lg:leading-[24px] lg:font-normal">
                                        Nagpal Tower, Pocket D, Okhla Phase II, Okhla Industrial Estate, New Delhi, Delhi 110020
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Nearest Metro Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex-1 rounded-xl  sm:p-5 md:p-6 border border-gray-100">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="bg-white rounded-lg sm:rounded-xl w-8 h-8 lg:w-[82px] lg:h-[82px] sm:p-3 flex-shrink-0 flex items-center justify-center">
                                    <Image src="/nearest-metro-station-icon.svg" alt="Nearest Metro Station Icon" width={32} height={32} className="w-5 h-5 sm:w-11 sm:h-11 lg:w-10 lg:h-10" />
                                </div>
                                <div>
                                    <h3 className="text-[12px] leading-[16px] font-bold text-[#1C4CC3] mb-1 lg:text-[20px] lg:leading-[26px] lg:tracking-[-0.016em] sm:mb-2 text-left">Nearest Metro</h3>
                                    <p className="text-[#666666] text-[14px] leading-[24px] font-normal lg:text-[16px] lg:leading-[24px] lg:font-normal">
                                        Govind Puri Metro Station
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Office Hours Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex-1  sm:p-5 md:p-6 border border-gray-100">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="bg-white rounded-lg sm:rounded-xl w-8 h-8 lg:w-[82px] lg:h-[82px] sm:p-3 flex-shrink-0 flex items-center justify-center">
                                    <Image src="/office-working-hours-calendar.svg" alt="Office Working Hours Calendar Icon" width={32} height={32} className="w-5 h-5 sm:w-11 sm:h-11 lg:w-10 lg:h-10" />
                                </div>
                                <div>
                                    <h3 className="text-[12px] leading-[16px] font-bold text-[#1C4CC3] mb-1 lg:text-[20px] lg:leading-[26px] lg:tracking-[-0.016em] sm:mb-2 text-left">Office Hours</h3>
                                    <p className="text-[#666666] text-[14px] leading-[24px] font-normal lg:text-[16px] lg:leading-[24px] lg:font-normal">
                                        Monday to Friday: <span className="font-bold">8:00 AM – 6:00 PM</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-2">
                        <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0376048886474!2d77.26815677409007!3d28.5385893883431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e2477e6f99%3A0x850658a9a8194220!2sNagpal%20Tower%2C%20Pocket%20D%2C%20Okhla%20Phase%20II%2C%20Okhla%20Industrial%20Estate%2C%20New%20Delhi%2C%20Delhi%20110020!5e0!3m2!1sen!2sin!4v1773721714466!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-xl"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}