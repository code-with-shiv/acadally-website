"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

interface RegistrationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const features = [
  { icon: "/meet-ally-1.svg", label: "Instant explanations" },
  { icon: "/meet-ally-2.svg", label: "Quizzes & Tests" },
  { icon: "/meet-ally-3.svg", label: "Step-by-Step help" },
  { icon: "/meet-ally-4.svg", label: "24/7 Doubt Solver" },
];

export default function RegistrationPopup({ isOpen, onClose }: RegistrationPopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-2000 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[440px] max-h-[92vh] overflow-y-auto bg-white rounded-[24px] lg:rounded-[24px] shadow-2xl z-10 mx-auto custom-scrollbar"
          >
            {/* Orange Header Section */}
            <div className="relative bg-[#FF8A00] p-5 lg:p-7 flex flex-col items-center text-center">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-xl lg:rounded-[8px] lg:p-1 bg-white/20 hover:bg-white/30 transition-colors text-white cursor-pointer"
              >
                <IoClose size={20} />
              </button>

              {/* Logo / Icon */}
              <div className="mb-2 lg:mb-3 relative">
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full" />
                <Image
                  src="/chat-ally.svg"
                  alt="Ally Logo"
                  width={81}
                  height={64}
                  className="w-14 h-14 lg:w-[81px] lg:h-[64px] relative"
                />
              </div>

              <h2 className="text-white text-xl lg:text-[24px] font-bold mb-1 lg:leading-[1.4] tracking-normal">
                Keep chatting with Ally!
              </h2>

              <p className="text-white/95 text-[11px] lg:text-xs font-medium mb-4 max-w-[280px] lg:max-w-[320px] leading-snug">
                Ally doesn&apos;t just give answers — it guides you step-by-step to understand the concept
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-1.5 lg:gap-2 w-full max-w-[340px] lg:max-w-[360px]">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/20 bg-white/20 backdrop-blur-md"
                  >
                    <div className="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center">
                      <Image
                        src={feature.icon}
                        alt={feature.label}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-white text-[9px] lg:text-[10px] font-semibold whitespace-nowrap">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* White Footer Section */}
            <div className="bg-white p-5 lg:p-7 flex flex-col items-center text-center">
              <p className="text-[#5A5A5A] text-[14px] lg:text-[15px] font-medium mb-4 lg:mb-5 leading-relaxed">
                Join <span className="font-bold text-black">1,00,000+ students</span> already learning smarter with AcadAlly.
              </p>

              <button onClick={() => window.open("https://app.acadally.com/login/student/usertype", "_blank")} className="w-full lg:w-fit py-3 lg:py-[16px] lg:px-[56px] bg-[#FF8A00] hover:bg-[#E67C00] text-white font-bold text-base lg:text-lg rounded-2xl lg:rounded-[120px] shadow-[0_8px_20px_-4px_rgba(255,138,0,0.5)] transition-all hover:-translate-y-0.5 active:scale-[0.98] mb-4 cursor-pointer">
                Create Free Account
              </button>

              <div className="text-[13px] lg:text-sm font-medium">
                <span className="text-[#5A5A5A]">Already have an account? </span>
                <button
                  onClick={() => window.open("https://app.acadally.com/login/student?usertype=b2c", "_blank")}
                  className="text-[#FF8A00] font-bold hover:text-[#E67C00] transition-colors inline-flex items-center gap-0.5 group cursor-pointer"
                >
                  Login <span className="text-lg leading-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
