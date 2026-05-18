"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, animate } from "motion/react";
import Button from "./Button";
import Link from "next/link";

export default function StudentAchievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Array of images for the gallery section
  const galleryImages = [
    "/students/108.jpg",
    "/students/109.jpg",
    "/students/110.jpg",
    "/students/111.jpg",
    "/students/112.jpg",
    "/students/113.jpg",
    "/students/114.jpg",
    "/students/115.jpg",
    "/students/116.jpg",
    "/students/117.jpg",
    "/students/118.jpg",
    "/students/119.jpg",
    "/students/120.jpg",
    "/students/121.jpg",
    "/students/122.jpg",
    "/students/123.jpg",
    "/students/124.jpg",
    "/students/125.jpg",
    "/students/126.jpg",
    "/students/127.jpg",
    "/students/128.jpg",
    "/students/129.jpg",
    "/students/130.jpg",
    "/students/131.jpg",
    "/students/132.jpg",
    "/students/133.jpeg",
    "/students/134.jpeg",
    "/students/135.jpeg",
    "/students/136.jpeg",
    "/students/137.jpeg",
    "/students/138.jpeg",
    "/students/139.jpeg",
    "/students/140.jpeg",
    "/students/141.jpeg",
    "/students/142.jpeg",
    "/students/143.jpeg",
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(galleryImages.length / itemsPerPage);

  const smoothScrollTo = useCallback((target: number) => {
    if (!scrollRef.current) return;
    const element = scrollRef.current;
    const start = element.scrollLeft;

    animate(start, target, {
      duration: 0.8, // Snappier but still smooth
      ease: [0.45, 0, 0.55, 1], // Smooth easeInOutQuart
      onUpdate: (val) => {
        if (element) element.scrollLeft = val;
      },
    });
  }, []);

  const nextSlide = useCallback(() => {
    if (scrollRef.current && scrollRef.current.children.length > 1) {
      const { scrollLeft, scrollWidth, offsetWidth } = scrollRef.current;
      const firstChild = scrollRef.current.children[0] as HTMLElement;
      const secondChild = scrollRef.current.children[1] as HTMLElement;
      const scrollStep = secondChild.offsetLeft - firstChild.offsetLeft;

      const isLast = Math.ceil(scrollLeft + offsetWidth) >= scrollWidth;
      const target = isLast ? 0 : scrollLeft + scrollStep;
      smoothScrollTo(target);
    }
  }, [smoothScrollTo]);

  const prevSlide = useCallback(() => {
    if (scrollRef.current && scrollRef.current.children.length > 1) {
      const { scrollLeft, scrollWidth, offsetWidth } = scrollRef.current;
      const firstChild = scrollRef.current.children[0] as HTMLElement;
      const secondChild = scrollRef.current.children[1] as HTMLElement;
      const scrollStep = secondChild.offsetLeft - firstChild.offsetLeft;

      const isFirst = scrollLeft <= 0;
      const target = isFirst ? scrollWidth - offsetWidth : scrollLeft - scrollStep;
      smoothScrollTo(target);
    }
  }, [smoothScrollTo]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Update currentIndex based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current && scrollRef.current.children.length > 0) {
        const firstChild = scrollRef.current.children[0] as HTMLElement;
        const secondChild = scrollRef.current.children[1] as HTMLElement;
        const scrollStep = secondChild ? secondChild.offsetLeft - firstChild.offsetLeft : firstChild.offsetWidth;
        const index = Math.round(scrollRef.current.scrollLeft / scrollStep);
        if (index !== currentIndex) {
          setCurrentIndex(index);
        }
      }
    };
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
    }
    return () => el?.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  // Reset index when items per page changes
  useEffect(() => {
    if (currentIndex !== 0) setCurrentIndex(0);
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  }, [itemsPerPage]);

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="relative lg:min-h-screen px-4 sm:px-6 md:px-8 lg:px-[120px] py-8 sm:py-12 md:py-16 lg:py-[80px] flex flex-col gap-8 sm:gap-12 md:gap-10">
        {/* Top Section: Banner and Text */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-full min-h-[300px] lg:min-h-0">
              <Image
                src="/students/120.jpg" 
                alt="Student Achievements Banner"
                fill
                className="object-cover rounded-2xl shadow-sm"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-12 text-center lg:text-left justify-center py-4 lg:py-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-[24px] md:text-[32px] font-semibold leading-[120%] md:leading-[36px] text-center lg:text-left">
              Student{" "}
              <span className="text-[var(--orange-primary)] font-semibold">
                Achievements
              </span>
              <br className="md:hidden" /> & Milestones
            </h2>
            <p className="text-faded-text font-normal text-[12px] lg:text-[16px] max-w-xl mx-auto lg:mx-0 leading-[140%] lg:leading-[24px]">
              Celebrating the brilliance, creativity, and &quot;Aha!&quot;
              moments of the{" "}
              <span className="text-[var(--orange-primary)] font-bold">
                AcadAlly
              </span>{" "}
              community. This gallery captures the essence of student growth,
              innovation, and academic excellence.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                href="https://app.acadally.com/login/student?usertype=b2c"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  text="Students: Start Your Journey"
                  classes="bg-[var(--orange-primary)] text-white font-semibold px-6 py-3 lg:px-[56px] lg:py-[12px] rounded-[32px] text-[12px] md:text-lg leading-[20px] md:leading-normal lg:w-auto "
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 gap-6 md:gap-8 mb-0 lg:mb-12 scroll-smooth"
          >
            {galleryImages.map((imageSrc, index) => (
              <motion.div
                key={index}
                className={`flex-shrink-0 snap-start transition-all duration-500 ${
                  itemsPerPage === 1
                    ? "w-full"
                    : itemsPerPage === 2
                    ? "w-[calc(50%-12px)]"
                    : "w-[calc(33.33%-21.33px)]"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative w-full aspect-video lg:h-[300px] lg:aspect-auto">
                  <Image
                    src={imageSrc}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover rounded-2xl shadow-sm"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots - Positioned bottom right on desktop */}
          {galleryImages.length > itemsPerPage && (
            <div className="flex justify-center lg:justify-end items-center gap-2 mt-6 lg:mt-8 overflow-x-auto max-w-full scrollbar-hide">
              <div className="flex gap-2">
                {galleryImages.slice(0, galleryImages.length - itemsPerPage + 1).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (scrollRef.current && scrollRef.current.children.length > 0) {
                        const firstChild = scrollRef.current.children[0] as HTMLElement;
                        const secondChild = scrollRef.current.children[1] as HTMLElement;
                        const scrollStep = secondChild 
                          ? secondChild.offsetLeft - firstChild.offsetLeft 
                          : firstChild.offsetWidth;
                        smoothScrollTo(index * scrollStep);
                      }
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer flex-shrink-0 ${
                      index === currentIndex
                        ? "w-10 bg-[var(--orange-primary)]"
                        : "w-2.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
