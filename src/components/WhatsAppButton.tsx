"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa";

export default function WhatsAppButton() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  // Show notification badge after 5 seconds if not open
  useEffect(() => {
    if (pathname === "/") return;
    const timer = setTimeout(() => {
      if (!isOpen) setShowNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen, pathname]);
  const handleStartChat = () => {
    const encodedMessage = encodeURIComponent(userMessage || "Hi AcadAlly, I'd like to know more about your platform.");
    const whatsappUrl = `https://wa.me/919289373365?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-200">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 md:bottom-20 right-0 w-[280px] sm:w-[300px] md:w-[320px] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-3 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden">
                   <Image 
                    src="/logo-d.svg" 
                    alt="AcadAlly Logo" 
                    width={24} 
                    height={24} 
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-semibold text-xs text-white">AcadAlly Support</div>
                  <p className="text-[9px] opacity-90">Replies in minutes</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded-full transition-colors"
              >
                <IoClose size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-3 bg-[#f0f2f5] min-h-[100px] flex flex-col gap-3 max-h-[200px] overflow-y-auto custom-scrollbar">
              <div className="bg-white p-2.5 rounded-lg rounded-tl-none shadow-sm max-w-[90%]">
                <p className="text-gray-800 text-[13px] leading-tight">
                  Hi! 👋 How can we help you today?
                </p>
                <div className="mt-1.5 py-0.5 px-1.5 bg-blue-50 rounded text-[9px] text-blue-600 font-medium inline-block">
                  100+ schools trust AcadAlly
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col gap-1.5">
                {[
                  { label: "Request a school demo", msg: "Hi AcadAlly, I'd like to request a demo for my school." },
                  { label: "Student support", msg: "Hi AcadAlly, I am a student and I need some help." },
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                        const encodedMessage = encodeURIComponent(item.msg);
                        const whatsappUrl = `https://wa.me/919289373365?text=${encodedMessage}`;
                        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
                        setIsOpen(false);
                    }}
                    className="bg-white hover:bg-gray-50 text-[#25D366] text-[11px] py-1.5 px-2.5 rounded-lg border border-gray-100 text-left transition-all active:scale-[0.98] shadow-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer / Input */}
            <div className="p-3 bg-white border-t border-gray-100">
              <textarea
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full resize-none border-none outline-none text-[13px] text-gray-700 min-h-[40px] mb-2 p-0 scrollbar-hide"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleStartChat();
                  }
                }}
              />
              <button
                onClick={handleStartChat}
                className="w-full bg-[#25D366] text-white py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#20bd5c] transition-colors"
              >
                <FaPaperPlane size={11} />
                <span>Start Chat</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Callout Bubble */}
      <AnimatePresence>
        {!isOpen && showNotification && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-20 lg:bottom-24 right-0 bg-white p-3 rounded-xl shadow-lg border border-gray-100 min-w-[200px]"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 flex items-center justify-center">
                   <Image 
                    src="/logo-d.svg" 
                    alt="AcadAlly Logo" 
                    width={20} 
                    height={20} 
                    className="object-contain"
                  />
                </div>
                <div>
                   <p className="text-[12px] font-semibold text-gray-800">Support Team</p>
                   <p className="text-[10px] text-gray-500">Need help? Chat with us!</p>
                </div>
              </div>
              <button 
                 onClick={(e) => { e.stopPropagation(); setShowNotification(false); }}
                 className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                <IoClose size={12} className="text-gray-400" />
              </button>
            </div>
            {/* Clickable area for the callout */}
            <div 
              className="absolute inset-0 cursor-pointer pointer-events-auto" 
              onClick={() => setIsOpen(true)}
              style={{ zIndex: -1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className="relative w-14 h-14 lg:w-20 lg:h-20 flex items-center justify-center cursor-pointer"
      >
        <Image 
          src="/whatsapp-contact-floating-icon.svg" 
          alt="Contact AcadAlly on WhatsApp" 
          width={80} 
          height={80} 
          priority 
          className="w-full h-full object-contain hover:scale-110 transition-transform drop-shadow-lg" 
        />
        
        {showNotification && !isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          </span>
        )}
      </button>
    </div>
  );
}
