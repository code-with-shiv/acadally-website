"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { IoClose, IoChevronDown } from "react-icons/io5";
import Confetti from "react-confetti";
import Select from "react-select";
import cityStateData from "@/const/city-state.json";

interface DemoFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoFormModal({ isOpen, onClose }: DemoFormModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    schoolName: "",
    email: "",
    phone: "",
    state: null as { value: string; label: string } | null,
    city: null as { value: string; label: string } | null,
    date: "",
    timeSlot: ""
  });

  const states = Array.from(new Set(cityStateData.map((item: any) => item.state)))
    .sort()
    .map((state) => ({ value: state, label: state }));

  const cities = formValues.state
    ? cityStateData
      .filter((item: any) => item.state === formValues.state?.value)
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((city) => ({ value: city.name, label: city.name }))
    : [];

  const customSelectStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "rgba(28, 76, 195, 0.04)",
      borderColor: state.isFocused ? "#1C4CC3" : "rgba(28, 76, 195, 0.24)",
      borderRadius: "8px",
      padding: "2px",
      fontSize: "16px",
      lineHeight: "1.4",
      boxShadow: state.isFocused ? "0 0 0 1px #1C4CC3" : "none",
      "&:hover": {
        borderColor: "#1C4CC3",
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#1C4CC3" : state.isFocused ? "rgba(28, 76, 195, 0.1)" : "white",
      color: state.isSelected ? "white" : "#374151",
      "&:active": {
        backgroundColor: "#1C4CC3",
        color: "white",
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "#000000A3",
      fontWeight: "400",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#374151",
      fontWeight: "500",
    }),
    menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      const timer = setTimeout(() => setIsSubmitted(false), 300);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-1000 flex items-center justify-center p-4 backdrop-blur-sm bg-black/40">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative w-full ${isSubmitted ? "max-w-[420px] rounded-[24px]" : "max-w-[540px] rounded-2xl lg:rounded-[24px]"} bg-white shadow-2xl overflow-hidden`}
          >
            {/* Header */}
            {!isSubmitted && (
              <div className="p-4 lg:px-6 lg:pt-6 lg:pb-4 relative">
                <div className="space-y-2 ">
                  <h2 className="text-[18px] pr-12 font-medium font-poppins text-[#1C4CC3] leading-[1.4] lg:text-2xl lg:font-bold">
                    <span className="font-bold">Book a live demo</span> for your
                    school
                  </h2>
                  <p className="text-xs font-medium text-gray-700 lg:pr-12 leading-[1.4] lg:text-sm">
                    <span className="font-bold">
                      AcadAlly only teaches grades from
                    </span>{" "}
                    <span className="text-[#FF8A00] font-bold">
                      6th till 10th
                    </span>
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute right-6 top-6 shrink-0"
                >
                  <Image
                    className="cursor-pointer w-[40px] h-[40px]"
                    src="/form-close.svg"
                    alt="Close"
                    width={40}
                    height={40}
                  />
                </motion.button>
              </div>
            )}

            {!isSubmitted && <hr className="border-gray-100 mx-4 lg:mx-6" />}

            {/* Form or Thank You Section */}
            <div
              className={`p-4 lg:px-6 lg:py-6 ${!isSubmitted ? "max-h-[70vh] overflow-y-auto custom-scrollbar" : ""}`}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Your Details */}
                  <div className="space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {/* Your Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-medium leading-[1.4] text-gray-600 block">
                          Your Name
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          className="placeholder:text-base placeholder:font-normal placeholder:leading-[1.4] placeholder:text-[#000000A3] w-full px-[11px] py-3 rounded-lg border border-[#1C4CC3]/24 bg-[#1C4CC3]/4 focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all text-gray-700 font-medium"
                          value={formValues.name}
                          onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                          required
                        />
                      </div>
                      {/* School Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-medium leading-[1.4] text-gray-600 block">
                          School Name
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter School Name"
                          className="placeholder:text-base placeholder:font-normal placeholder:leading-[1.4] placeholder:text-[#000000A3] w-full px-[11px] py-3 rounded-lg border border-[#1C4CC3]/24 bg-[#1C4CC3]/4 focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all text-gray-700 font-medium"
                          value={formValues.schoolName}
                          onChange={(e) => setFormValues({ ...formValues, schoolName: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {/* Email Address */}
                      <div className="space-y-1">
                        <label className="text-xs font-medium leading-[1.4] text-gray-600 block">
                          Email Address
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Enter Email Address"
                          className="placeholder:text-base placeholder:font-normal placeholder:leading-[1.4] placeholder:text-[#000000A3] w-full px-[11px] py-3 rounded-lg border border-[#1C4CC3]/24 bg-[#1C4CC3]/4 focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all text-gray-700 font-medium"
                          value={formValues.email}
                          onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                          required
                        />
                      </div>
                      {/* Phone Number */}
                      <div className="space-y-1">
                        <label className="text-xs font-medium leading-[1.4] text-gray-600 block">
                          Phone Number
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="Enter Phone Number"
                          className="placeholder:text-base placeholder:font-normal placeholder:leading-[1.4] placeholder:text-[#000000A3] w-full px-[11px] py-3 rounded-lg border border-[#1C4CC3]/24 bg-[#1C4CC3]/4 focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all text-gray-700 font-medium"
                          value={formValues.phone}
                          onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {/* State */}
                      <div className="space-y-1">
                        <label className="text-xs font-medium leading-[1.4] text-gray-600 block">
                          State
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <Select
                          options={states}
                          value={formValues.state}
                          onChange={(option) => setFormValues({ ...formValues, state: option, city: null })}
                          placeholder="Select State"
                          styles={customSelectStyles}
                          menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                          required
                        />
                      </div>
                      {/* City */}
                      <div className="space-y-1">
                        <label className="text-xs font-medium leading-[1.4] text-gray-600 block">
                          City
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <Select
                          options={cities}
                          value={formValues.city}
                          onChange={(option) => setFormValues({ ...formValues, city: option })}
                          placeholder="Select City"
                          styles={customSelectStyles}
                          isDisabled={!formValues.state}
                          menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Demo Details */}
                  <div className="space-y-2">
                    <h3 className="text-[16px] font-bold text-main-page-secondary leading-[1.4]">
                      Demo Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {/* Pick a Date */}
                      <div className="space-y-1">
                        <label className="text-xs font-medium leading-[1.4] text-gray-600 block">
                          Pick a Date for Demo
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="dd/mm/yy"
                          className="placeholder:text-base placeholder:font-normal placeholder:leading-[1.4] placeholder:text-[#000000A3] w-full px-[11px] py-3 rounded-lg border border-[#1C4CC3]/24 bg-[#1C4CC3]/4 focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all text-gray-700 font-medium"
                          value={formValues.date}
                          onChange={(e) => setFormValues({ ...formValues, date: e.target.value })}
                          required
                        />
                      </div>
                      {/* Pick Time Slot */}
                      <div className="space-y-1 relative">
                        <label className="text-xs font-medium leading-[1.4] text-gray-600 block">
                          Pick Time Slot
                          <span className="text-red-500 font-bold">*</span>
                        </label>
                        <div className="relative">
                          <select
                            className="w-full px-[11px] py-3 rounded-lg border border-[#1C4CC3]/24 bg-[#1C4CC3]/4 focus:outline-none focus:ring-2 focus:ring-[#1C4CC3] transition-all appearance-none text-[16px] leading-[1.4] text-[#000000A3] font-normal"
                            value={formValues.timeSlot}
                            onChange={(e) => setFormValues({ ...formValues, timeSlot: e.target.value })}
                            required
                          >
                            <option value="" disabled>
                              Pick Time Slot
                            </option>
                            <option value="morning">
                              Morning (9 AM - 12 PM)
                            </option>
                            <option value="afternoon">
                              Afternoon (12 PM - 3 PM)
                            </option>
                            <option value="evening">
                              Evening (3 PM - 6 PM)
                            </option>
                          </select>
                          <IoChevronDown
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1C4CC3] pointer-events-none"
                            size={20}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end pb-2">
                    <motion.button
                      whileHover={{ scale: 1.02, backgroundColor: "#163ea8" }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-[#1C4CC3] text-white font-bold py-3 px-14 rounded-[71px] transition-all text-[16px] leading-[24px] tracking-[0.02em] flex items-center justify-center gap-2  shadow-xl shadow-blue-100"
                    >
                      Submit
                    </motion.button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full px-6 py-8 flex flex-col items-center justify-center text-center space-y-8 relative"
                >
                  {isSubmitted && (
                    <Confetti
                      width={420}
                      height={438}
                      recycle={false}
                      numberOfPieces={200}
                      gravity={0.2}
                      colors={["#1C4CC3", "#F1F4FD", "#FFFFFF", "#FFD700"]}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 10,
                      }}
                    />
                  )}
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative w-[150px] h-[150px]">
                      <Image
                        src="/submission-success-check-mark.svg"
                        alt="Success"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-[32px] font-semibold text-[#666666] leading-[36px]">
                        Thank You!
                      </h2>
                      <p className="text-gray-600 text-[16px] font-normal max-w-[320px] mx-auto leading-none text-center">
                        Your details has been successfully submitted
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "#163ea8" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleClose}
                      className="w-full bg-[#1C4CC3] text-white font-bold py-3 px-14 rounded-[71px] transition-all text-sm tracking-wider shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                    >
                      Okay
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
