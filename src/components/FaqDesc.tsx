"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const faqData = [
  {
    id: "general-overview",
    title: "General Overview",
    questions: [
      {
        question: "What is AcadAlly?",
        answer: "AcadAlly is an AI-powered personalized learning and practice platform designed to improve learning outcomes for school students through diagnostic assessments, adaptive practice, and AI-assisted academic support. It works alongside classroom teaching to strengthen conceptual understanding and exam readiness."
      },
      {
        question: "Which classes and subjects are supported?",
        answer: (
          <ul className="list-disc ml-5 space-y-4">
            <li><span className="font-bold">Grades:</span> Currently supports Grades 5 to 10, aligned with the Indian school curriculum.</li>
            <li><span className="font-bold">Subjects:</span> Mathematics and Science (Grades 5-10).</li>
            <li><span className="font-bold">Growth:</span> Additional learning modules and subject-wise expansion are under continuous development.</li>
          </ul>
        )
      },
      {
        question: "How is AcadAlly different from other learning apps?",
        answer: "Unlike video-heavy apps focused on passive consumption, AcadAlly focuses on early gap identification, structured practice, and adaptive difficulty based on mastery."
      }
    ]
  },
  {
    id: "student-experience",
    title: "The Student Experience",
    questions: []
  },
  {
    id: "support-teachers",
    title: "Support for Teachers & Schools",
    questions: []
  },
  {
    id: "safety-curriculum",
    title: "Safety, Curriculum, & Access",
    questions: []
  }
];

export default function FaqDesc() {
  const [activeTab, setActiveTab] = useState(faqData[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const activeCategory = faqData.find((cat) => cat.id === activeTab) || faqData[0];

  return (
    <div className="w-full mx-auto lg:px-8 lg:py-30">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 ">

        {/* Mobile Dropdown Selector */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-[#1C4CC33D] text-[#1C4CC3] rounded-[8px] font-semibold text-[12px] leading-[16px] shadow-sm"
          >
            <span>{activeCategory.title}</span>
            <motion.div
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiChevronDown size={20} />
            </motion.div>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute top-full left-0 w-full bg-white border border-gray-100 rounded-b-[12px] shadow-xl z-50 overflow-hidden"
              >
                {faqData
                  .filter((tab) => tab.id !== activeTab)
                  .map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 transition-colors text-gray-500 font-medium hover:bg-gray-50 text-[12px] leading-[16px]"
                    >
                      {tab.title}
                    </button>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Sidebar Selector */}
        <div className="hidden lg:flex flex-col lg:gap-6 w-1/3">
          {faqData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-between p-6 lg:rounded-[12px] transition-all duration-300 text-left border border-[#1C4CC329] ${activeTab === tab.id
                ? "bg-[#F0F5FF] text-[#1C4CC3] shadow-md lg:translate-x-1"
                : "bg-white text-gray-500 hover:border-[#1C4CC3]/20"
                }`}
            >
              <span className={`transition-all duration-300 ${activeTab === tab.id
                ? "font-bold text-[16px] lg:text-[20px] lg:leading-[26px]"
                : "font-medium text-[16px] lg:text-[20px]"
                }`}>
                {tab.title}
              </span>
              <FiChevronRight size={20} className={activeTab === tab.id ? "text-[#1C4CC3]" : "text-gray-400"} />
            </button>
          ))}
        </div>

        {/* FAQ Content Area */}
        <div className="lg:w-2/3">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col"
          >
            {activeCategory.questions.length > 0 ? (
              activeCategory.questions.map((item, idx) => (
                <div key={idx} className="py-6 lg:py-10 border-b border-gray-200 first:pt-0 last:border-none">
                  <h3 className="font-bold text-[16px] lg:text-[24px] leading-[30px] text-[#535353] lg:text-black mb-4 lg:mb-6 font-['Poppins']">
                    {item.question}
                  </h3>
                  <div className="font-normal text-[14px] lg:text-[18px] leading-[1.5] text-[#949494] lg:text-gray-500 font-['Poppins']">
                    {item.answer}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-400 italic">Content coming soon for {activeCategory.title}...</div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
