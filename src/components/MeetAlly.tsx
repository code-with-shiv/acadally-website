"use client";

import { useState, useRef, useEffect } from "react";
import Heading from "./Heading";
import BelowHeading from "./BelowHeading";
import Image from "next/image";
import { HiSparkles } from "react-icons/hi2";
import { motion, AnimatePresence } from "motion/react";
import { RadialText } from "./RadialText";
import RegistrationPopup from "./RegistrationPopup";

type GuidedStep = {
  intro: string;
  solution: {
    text: string[];
    quickActions: string[];
  };
  help: {
    text: string;
    options: string[];
    quickActions: string[];
  };
};

const suggestionPrompts = [
  "If 5^(3x-1) / 25 = 125, find the value of x",
  "Why don't birds get shocked on power lines?",
  "Why do acids not show acidity in dry form?",
];

const guidedStepsByPrompt: Record<string, GuidedStep> = {
  [suggestionPrompts[0]]: {
    intro:
      "Hello there! You're asking to solve for x in the exponential equation 5^3x-1 \u00F7 25 = 125. How would you like me to help you with this?",
    solution: {
      text: [
        "Of course, hshs hehe. Let\u2019s solve this step-by-step.",
        "To solve this equation, our main goal is to express all the numbers with the same base. In this problem, the common base is 5. This allows us to use the laws of exponents to simplify and find the value of x.",
        "**Given Equation:**",
        "5^3x-1 \u00F7 25 = 125",
        "**Step 1: Express all terms as powers of 5.**",
        "First, we need to rewrite the numbers 25 and 125 as powers of 5.",
        "25 = 5 \u00D7 5 = 5^2",
        "125 = 5 \u00D7 5 \u00D7 5 = 5^3",
      ],
      quickActions: ["Try a practice question", "Know more the laws of exponents"],
    },
    help: {
      text: "I can definitely help you work through this step-by-step. Discovering the answer yourself is the best way to learn! Let's start by looking at the numbers in the equation: 5, 25, and 125. To solve this kind of problem, we need to find a common link between them. What is the most useful relationship between 5, 25, and 125 in this problem?",
      options: [
        "They are all odd numbers.",
        "They are all multiples of 5.",
        "They can all be written as a power of 5",
        "They are all prime numbers.",
      ],
      quickActions: ["I Don't Know", "Need Hint"],
    },
  },
  [suggestionPrompts[1]]: {
    intro:
      "Hello there! Your question is about why birds can sit on power lines without getting shocked. How would you like me to explain this concept?",
    solution: {
      text: [
        "Of course! Here is the explanation.",
        "The main reason birds can sit on power lines without getting shocked is that they don't complete an electrical circuit. For electricity to flow and cause a shock, there must be a path from a high voltage point to a low voltage point.",
        "Here's a step-by-step breakdown:",
        "**1. What is an Electric Current?**",
        "An electric current is the flow of tiny charged particles called electrons. Think of it like water flowing in a river. The power line is the riverbed, and the electrons are the water flowing along it.",
        "**2. The Need for a Voltage Difference**",
        "For electricity to flow, there must be a difference in electrical potential, which we call...",
      ],
      quickActions: ["Try a practice question", "Know more about electrical circuits"],
    },
    help: {
      text: "Of course! To understand this, we first need to think about how electricity behaves. Electricity always looks for a path to travel from a point of high energy to a point of low energy. What do we call this complete path that electricity flows through?",
      options: ["A line", "A circuit", "A current", "A generator"],
      quickActions: ["I Don't Know", "Need Hint"],
    },
  },
  [suggestionPrompts[2]]: {
    intro:
      "Hello there! Your question is about why acids do not exhibit acidic properties in their dry form. How would you like to explore this concept?",
    solution: {
      text: [
        "Of course. Here is the explanation.",
        "The main reason acids do not show acidic properties in their dry form is that they need water to release hydrogen ions (H+). It is the presence of these hydrogen ions that gives an acid its characteristic properties.",
        "Here is a step-by-step explanation:",
        "**1. What Makes an Acid Acidic?**",
        "An acid's properties (like its sour taste or its ability to turn blue litmus paper red) are all due to the presence of free-moving hydrogen ions (H^+).",
        "**2. Acids in Dry Form**",
        "When an acid is in a dry, solid state (like citric acid powder) or a pure gaseous state (like...",
      ],
      quickActions: ["Try a practice question", "Know more about it"],
    },
    help: {
      text: "Of course! Let's figure this out together. First, can you recall what specific particle is responsible for making a substance acidic? Which of the following ions do all acids produce in water?",
      options: [
        "Hydroxide ions (OH-)",
        "Hydrogen ions (H+)",
        "Chloride ions (Cl-)",
        "Sodium ions (Na+)",
      ],
      quickActions: ["I Don't Know", "Need Hint"],
    },
  },
};

const allyMessageBubbleClass =
  "relative bg-white text-[#5E5E5E] p-[11.38px] rounded-t-[12px] rounded-br-[12px] rounded-bl-none border-[0.71px] border-[#EDEDED] shadow-[0_0_4px_0_rgba(0,0,0,0.12)] lg:p-4 lg:border lg:rounded-t-[16px] lg:rounded-br-[16px] lg:rounded-bl-none";

const formatContent = (line: string, index: number) => {
  const isBold = line.startsWith("**") && line.endsWith("**");
  let cleanLine = isBold ? line.slice(2, -2) : line;

  // Handle simple superscript like 5^2 or 5^3x-1
  const parts = cleanLine.split("^");
  const content = parts.map((part, i) => {
    if (i === 0) return part;
    const exponentMatch = part.match(/^\w+(-\d+)?/);
    const exponent = exponentMatch ? exponentMatch[0] : "";
    const rest = part.slice(exponent.length);
    return (
      <span key={i}>
        <sup>{exponent}</sup>
        {rest}
      </span>
    );
  });

  return (
    <p
      key={index}
      className={`${index === 0 ? "" : "mt-2"} text-[10px] ${isBold ? "font-bold text-[#333333]" : "font-normal text-[#5E5E5E]"} leading-[11.38px] lg:text-[14px] lg:leading-[20px]`}
    >
      {content}
    </p>
  );
};

export default function MeetAlly() {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [activeBranch, setActiveBranch] = useState<"solution" | "help" | null>(null);
  const [showUpsellModal, setShowUpsellModal] = useState(false);
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [selectedPrompt, activeBranch]);

  const handlePromptSelect = (prompt: string) => {
    setSelectedPrompt(prompt);
    setActiveBranch(null);
  };

  const guidedStep: GuidedStep | null = selectedPrompt
    ? (guidedStepsByPrompt[selectedPrompt] ?? {
      intro: `Hello there! You're asking: "${selectedPrompt}". How would you like me to help you with this?`,
      solution: {
        text: ["I can provide the full solution for you.", "Wait a moment while I prepare it..."],
        quickActions: ["Try a practice question", "Know more"],
      },
      help: {
        text: "I can guide you through this step-by-step. Let's start with a simple question.",
        options: ["Option 1", "Option 2"],
        quickActions: ["I Don't Know", "Need Hint"],
      },
    })
    : null;

  return (
    <section
      className="flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-center py-10 lg:pt-4 lg:pb-12 px-4 lg:px-20 animate-diagonal"
      style={{
        background: `linear-gradient(135deg, rgba(96, 99, 171, 0.1) 0%, rgba(96, 99, 171, 0.05) 40%, rgba(255, 138, 0, 0.05) 60%, rgba(255, 138, 0, 0.1) 100%)`,
        backgroundColor: "#ffffff",
      }}
    >
      {/* Left Column: Text Content */}
      <div className="flex flex-col gap-2 lg:gap-8 w-full lg:max-w-2xl">
        <div className="flex flex-col gap-2 lg:gap-3">
          <RadialText
            as="h2"
            className="font-bold text-base leading-[1.2] lg:font-bold lg:text-4xl lg:leading-tight"
            text="Meet Ally"
          />
          <Heading
            as="h3"
            className="font-medium text-[32px] leading-[1.2] lg:text-4xl lg:leading-tight"
            text="Your Secure AI Learning Partner"
          />
        </div>
        <BelowHeading className="font-normal text-xs leading-[1.4] lg:text-sm lg:leading-relaxed">
          Instant Answers. Focused Learning. Ally is India’s first secure AI
          Tutor designed to support your academic growth. Get instant, accurate
          guidance on any subject, anytime — personalized for your learning
          journey.
        </BelowHeading>
      </div>

      {/* Right Column: Interactive Chat Interface */}
      <div className="flex flex-col gap-8 w-full max-w-[550px] lg:max-w-none">
        {/* Robot Header with Speech Bubble */}
        <div className="flex items-end justify-between lg:justify-end lg:gap-8 px-0 lg:px-4">
          {/* Speech bubble */}
          <div className="bg-white p-3 lg:px-8 lg:py-3 gap-[11.38px] rounded-none rounded-tr-[23px] rounded-bl-[23px] lg:rounded-[40px] lg:rounded-tr-none mb-1 lg:mb-4 border border-[#FF8A0033] lg:border-gray-50 shadow-[inset_0_0_5.69px_#F7B24729] lg:shadow-[0px_10px_30px_rgba(0,0,0,0.05)] flex flex-col items-center w-[68%] lg:w-auto">
            <div className="flex items-center gap-2 text-[#FF8A00] font-bold text-[14px] leading-[1.4] text-center justify-center lg:text-xl lg:leading-tight lg:text-left lg:justify-start">
              Hello there!{" "}
              <Image
                src="/waving-hand-emoji-icon.svg"
                alt="Waving hand emoji icon"
                width={24}
                height={24}
                className="w-5 h-5 lg:w-6 lg:h-6"
              />
            </div>
            <p className="text-[#FF8A00] text-[12px] font-normal leading-[1.4] text-center lg:text-sm lg:text-left">
              Check out the below demo
            </p>
          </div>

          {/* Robot */}
          <div className="flex-shrink-0 w-[113px] h-[107px] flex justify-end lg:w-auto lg:h-auto">
            <Image
              src="/ally.svg"
              alt="Robot"
              width={180}
              height={180}
              priority
              className="w-full h-full lg:w-full lg:h-auto lg:max-w-[180px]"
            />
          </div>
        </div>

        {/* Main Chat Interface Container */}
        <div
          className="relative flex flex-col h-[350px] lg:h-[400px] p-5 rounded-[32px] overflow-hidden"
          style={{
            background:
              "linear-gradient(0deg, rgba(255, 138, 0, 0.2) 0%, rgba(255, 138, 0, 0) 100%), linear-gradient(0deg, rgba(255, 138, 0, 0.08), rgba(255, 138, 0, 0.08)), #FFFFFF",
          }}
        >
          {/* Active Demo Badge row */}
          <div className="w-full flex justify-end">
            <div className="flex items-center gap-2 border border-[#56c596] bg-white rounded-full px-4 py-1.5 w-max text-[#56c596] font-semibold text-sm shadow-sm">
              <div className="relative flex items-center justify-center">
                {/* Intense blooming glow layer 1 */}
                <motion.div
                  animate={{
                    scale: [1, 2.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute w-4 h-4 bg-[#56c596] rounded-full blur-xl"
                />
                {/* Intense blooming glow layer 2 */}
                <motion.div
                  animate={{
                    scale: [1, 4, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.5,
                  }}
                  className="absolute w-4 h-4 bg-[#56c596] rounded-full blur-2xl"
                />
                {/* The main glowing dot */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 2px rgba(86, 197, 150, 0.5)",
                      "0 0 15px rgba(86, 197, 150, 1)",
                      "0 0 25px rgba(86, 197, 150, 0.8)",
                      "0 0 2px rgba(86, 197, 150, 0.5)",
                    ],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-2.5 h-2.5 bg-[#56c596] rounded-full z-10"
                />
              </div>
              Active Demo
            </div>
          </div>

          {/* Scrolling Chat Content */}
          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto mt-4 pr-1 flex flex-col gap-3 lg:gap-4 custom-scrollbar"
          >
            {/* Chat Bubble row */}
            <div className="flex items-center gap-3 lg:gap-2">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Image
                  src="/ally-ai-assistant-avatar.svg"
                  alt="Ally AI Assistant Avatar"
                  width={48}
                  height={48}
                  className="w-14 h-14 lg:w-12 lg:h-12"
                />
              </div>
              <div className={allyMessageBubbleClass}>
                <p className="text-[10px] font-normal leading-[11.38px] lg:text-[14px] lg:leading-[16px]">
                  Hey, wanna ask a question?
                </p>
              </div>
            </div>

            {guidedStep ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                key={selectedPrompt}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-3 lg:gap-4"
              >
                <div
                  className="self-end px-4 py-2 rounded-t-[12px] rounded-bl-[12px] rounded-br-none border border-[#FF8A00] bg-[#FFDFB3] w-fit lg:p-4 lg:border lg:rounded-t-[16px] lg:rounded-bl-[16px]"
                >
                  <p className="text-[10px] font-medium leading-[18px] tracking-normal text-[#535353] lg:text-[14px] lg:leading-[18px]">{selectedPrompt}</p>
                </div>

                <div className={allyMessageBubbleClass}>
                  {formatContent(guidedStep.intro, 0)}
                </div>

                {!activeBranch && (
                  <div className="flex items-center gap-3 flex-wrap">
                    <button
                      type="button"
                      onClick={() => setActiveBranch("solution")}
                      className="px-4 py-2 rounded-full border border-[#FF8A00] bg-white text-[#FF8A00] text-sm font-semibold hover:bg-[#fff5ea] transition-colors"
                    >
                      Give me the solution
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveBranch("help")}
                      className="px-4 py-2 rounded-full border border-[#FF8A00] bg-white text-[#FF8A00] text-sm font-semibold hover:bg-[#fff5ea] transition-colors"
                    >
                      Help me solve it
                    </button>
                  </div>
                )}

                {activeBranch === "solution" && (
                   <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="flex flex-col gap-3"
                 >
                    <div
                      className="self-end px-4 py-2 rounded-t-[12px] rounded-bl-[12px] rounded-br-none border border-[#FF8A00] bg-[#FFDFB3] w-fit lg:p-4 lg:border lg:rounded-t-[16px] lg:rounded-bl-[16px]"
                    >
                      <span className="text-[10px] font-medium leading-[18px] tracking-normal text-[#535353] lg:text-[14px] lg:leading-[18px]">Give me the solution</span>
                    </div>

                    <div
                      className="px-[11.38px] py-[11.38px] rounded-t-[12px] rounded-br-[12px] rounded-bl-none border-[0.71px] border-[#EDEDED] bg-white w-full lg:p-4 lg:border lg:rounded-t-[16px] lg:rounded-br-[16px] lg:rounded-bl-none overflow-y-auto max-h-[200px] solution-scrollbar"
                    >
                      {guidedStep.solution.text.map((line, index) => formatContent(line, index))}
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                      {guidedStep.solution.quickActions.map((action) => (
                        <button
                          key={action}
                          type="button"
                          onClick={() => setShowUpsellModal(true)}
                          className="px-4 py-2 rounded-full border border-[#FF8A00] bg-white text-[#FF8A00] text-[10px] lg:text-sm font-semibold hover:bg-[#fff5ea] transition-colors"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeBranch === "help" && (
                   <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="flex flex-col gap-3"
                 >
                    <div
                      className="self-end px-4 py-2 rounded-t-[12px] rounded-bl-[12px] rounded-br-none border border-[#FF8A00] bg-[#FFDFB3] w-fit lg:p-4 lg:border lg:rounded-t-[16px] lg:rounded-bl-[16px]"
                    >
                      <span className="text-[10px] font-medium leading-[18px] tracking-normal text-[#535353] lg:text-[14px] lg:leading-[18px]">Help me solve it</span>
                    </div>

                    <div
                      className="px-[11.38px] py-[11.38px] rounded-t-[12px] rounded-br-[12px] rounded-bl-none border-[0.71px] border-[#EDEDED] bg-white w-full lg:p-4 lg:border lg:rounded-t-[16px] lg:rounded-br-[16px] lg:rounded-bl-none"
                    >
                      <p className="text-[10px] font-normal leading-[11.38px] text-[#5E5E5E] lg:text-[14px] lg:leading-[20px]">
                        {guidedStep.help.text}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                       {guidedStep.help.options.map((option) => (
                         <button
                           key={option}
                           type="button"
                           onClick={() => setShowUpsellModal(true)}
                           className="w-full text-left px-4 py-2 rounded-[10px] border border-[#FF8A00] bg-white text-[#FF8A00] text-[10px] lg:text-sm font-medium hover:bg-[#fff5ea] transition-colors"
                         >
                           {option}
                         </button>
                       ))}
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                      {guidedStep.help.quickActions.map((action) => (
                        <button
                          key={action}
                          type="button"
                          onClick={() => setShowUpsellModal(true)}
                          className="px-4 py-2 rounded-full border border-[#FF8A00] bg-white text-[#FF8A00] text-[10px] lg:text-sm font-semibold hover:bg-[#fff5ea] transition-colors"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <div className="bg-white border rounded-2xl border-[#FF8A00] pt-4 pb-4 pl-4 pr-2 gap-[18px] lg:p-5 lg:gap-4 flex flex-col shadow-sm">
                <div className="flex items-center gap-2 text-[#4A4A4A] font-normal text-xs lg:text-sm">
                  Try asking Ally something{" "}
                  <span className="text-xs lg:text-sm">👇</span>
                </div>

                <div className="flex flex-col gap-2.5">
                  {suggestionPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => handlePromptSelect(prompt)}
                      className="group flex items-center gap-2 text-white px-4 py-2 rounded-full border-white border shadow-[0_2px_10px_rgba(255,138,0,0.12)] text-[10px] font-medium lg:text-sm lg:font-semibold cursor-pointer hover:shadow-[0_4px_12px_rgba(255,138,0,0.2)] hover:scale-[1.01] transition-all duration-300 w-fit"
                      style={{
                        background:
                          "radial-gradient(196.88% 599.76% at 42.49% 15.62%, #FF8A00 0%, #FFC177 100%)",
                        boxShadow: "0px 0px 4px 0px #FF8A0066",
                      }}
                    >
                      <HiSparkles className="w-3.5 h-3.5 text-white animate-pulse" />
                      <span className="text-left leading-[11.38px] lg:leading-tight">
                        {prompt}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Upsell Modal (Contained within this relative box) */}
          <AnimatePresence>
            {showUpsellModal && (
              <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowUpsellModal(false)}
                  className="absolute inset-0 bg-white/40 backdrop-blur-md"
                />

                {/* Modal Card */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 10 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 10 }}
                  className="relative w-full max-w-[320px] lg:max-w-[420px] bg-white rounded-[24px] lg:rounded-[32px] p-5 lg:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex flex-col items-center gap-4 lg:gap-6 z-10"
                >
                  {/* Robot Head with Sparkles */}
                  <div className="relative mb-2">
                    {/* Sparkles (Positions approximated from image) */}
                    <Image
                      src="/chat-ally.svg"
                      alt="Ally Robot"
                      width={120}
                      height={96}
                      className="w-20 h-auto lg:w-28 relative z-10"
                    />
                  </div>

                  <h2 className="text-sm lg:text-[18px] font-bold text-[#333333] text-center leading-tight">
                    You were chatting with Ally!
                  </h2>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setShowUpsellModal(false);
                      setShowRegistrationPopup(true);
                    }}
                    className="w-full py-2.5 lg:py-4 rounded-full bg-[#FF8A00] text-white font-bold text-xs lg:text-[16px] shadow-[0_4px_14px_rgba(255,138,0,0.39)] hover:bg-[#E67C00] transition-all"
                  >
                    Continue with Ally – It’s Free
                  </button>

                  {/* Feature List: 2 columns */}
                  <div className="w-full grid grid-cols-2 gap-2 lg:gap-3">
                    {[
                      { icon: "/meet-ally-1.svg", label: "Instant explanations" },
                      { icon: "/meet-ally-2.svg", label: "Quizzes & Tests" },
                      { icon: "/meet-ally-3.svg", label: "Step-by-Step help" },
                      { icon: "/meet-ally-4.svg", label: "24/7 Doubt Solver" },
                    ].map((feature) => (
                      <div
                        key={feature.label}
                        className="flex items-center gap-1.5 px-2 py-1.5 lg:px-3 lg:py-2 rounded-full bg-[#FFF5EA] border border-[#FF8A00]/5"
                      >
                        <Image src={feature.icon} alt={feature.label} width={16} height={16} className="w-4 h-4 lg:w-5 lg:h-5" />
                        <span className="text-[#FF8A00] font-semibold text-[8px] lg:text-[11px] whitespace-nowrap">
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <RegistrationPopup 
        isOpen={showRegistrationPopup} 
        onClose={() => setShowRegistrationPopup(false)} 
      />
    </section>
  );
}
