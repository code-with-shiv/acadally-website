"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import { RadialText } from "./RadialText";

type BlogItem = {
  _id: string;
  title: string;
  excerpt?: string;
  date?: string;
  coverImage?: string;
};

export default function BlogsCarousel() {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          setBlogs(data.data);
        }
      } catch (error) {
        console.error('Failed to fetch blogs', error);
      }
    };

    fetchBlogs();
  }, []);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(blogs.length / itemsPerPage)), [blogs.length, itemsPerPage]);

  const nextSlide = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = scrollRef.current;
      const isLast = Math.ceil(scrollLeft + offsetWidth) >= scrollWidth;
      if (isLast) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: offsetWidth, behavior: "smooth" });
      }
    }
  }, []);

  const prevSlide = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = scrollRef.current;
      const isFirst = scrollLeft <= 0;
      if (isFirst) {
        scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: -offsetWidth, behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
        if (index !== currentIndex) {
          setCurrentIndex(index);
        }
      }
    };

    const node = scrollRef.current;
    if (node) {
      node.addEventListener("scroll", handleScroll);
    }
    return () => node?.removeEventListener("scroll", handleScroll);
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex !== 0) {
      setCurrentIndex(0);
    }
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [itemsPerPage]);

  return (
    <section aria-label="Blogs" className="lg:px-20 lg:py-5">
      <div className="mx-auto flex flex-col gap-6 px-4 py-10 lg:my-6 lg:block lg:gap-0 lg:px-0 lg:py-0">
        <motion.div
          className="mb-0 flex flex-col items-center gap-4 text-center md:mb-8 lg:mb-12 lg:gap-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <RadialText
            as="h2"
            className="text-base font-bold leading-[1.2] lg:text-4xl lg:font-bold lg:leading-tight"
            text="Our Blogs"
          />
          <p className="text-faded-text mt-0 text-center text-[12px] font-normal leading-[1.4] lg:mt-4 lg:text-base lg:font-normal lg:leading-relaxed">
            Explore our blog for insights into AI-driven education, success stories, and expert opinions shaping the future of learning
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 lg:gap-0">
          <div
            ref={scrollRef}
            className="mb-0 flex gap-4 md:gap-6 lg:mb-8 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide scroll-smooth"
          >
            {blogs.map((blog) => (
              <motion.article
                key={blog._id}
                className={`snap-start overflow-hidden rounded-[16px] border border-[#1C4CC33D] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(28,76,195,0.08)] ${
                  itemsPerPage === 1
                    ? "w-full shrink-0"
                    : itemsPerPage === 2
                      ? "w-[calc(50%-12px)] shrink-0"
                      : "w-[calc(33.33%-16px)] shrink-0"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex h-full flex-col group">
                  <div className="relative h-[136px] w-full overflow-hidden cursor-pointer lg:h-auto lg:aspect-video bg-gray-100">
                    {blog.coverImage ? (
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="h-full w-full object-cover"
                      />
                    ) : null}
                  </div>

                  <div className="flex flex-1 flex-col gap-2 p-4 lg:gap-3">
                    <h3 className="text-[14px] font-bold leading-[1.4] text-gray-800 lg:text-xl">
                      {blog.title}
                    </h3>
                    <p className="mb-4 text-[11px] font-medium text-gray-500 line-clamp-2 lg:text-sm">
                      {blog.excerpt || 'Read our latest blog to discover how AI is transforming education.'}
                    </p>

                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EBF2FF]">
  <Image
                            src="/event-date-calendar-icon.svg"
                            alt="Calendar"
                            width={16}
                            height={16}
                            className="h-4 w-4"
                          />                      </div>
                      <span className="text-[11px] font-semibold text-gray-600 lg:text-sm">
                        {blog.date ? new Date(blog.date).toLocaleDateString() : 'Unpublished'}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${blog._id}`}
                      className="mt-auto flex items-center justify-between border-t border-[#1C4CC3]/10 bg-[#EBF2FF] px-4 py-3 -mx-4 -mb-4 text-[#1C4CC3] font-bold text-sm transition-colors duration-300 group-hover:bg-[#1C4CC3] group-hover:text-white"
                    >
                      Read More
                      <FiArrowUpRight className="text-lg transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-2 flex flex-col gap-4 lg:mt-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <div className="flex items-center justify-between lg:justify-start lg:gap-6">
              <div className="flex items-center gap-3 lg:gap-6">
                <span className="text-main-page-secondary min-w-[40px] text-sm font-bold lg:min-w-[60px] lg:text-lg">
                  {currentIndex + 1} <span className="text-[#535353]">of {totalPages}</span>
                </span>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index);
                        if (scrollRef.current) {
                          scrollRef.current.scrollTo({ left: index * scrollRef.current.offsetWidth, behavior: "smooth" });
                        }
                      }}
                      className={`h-2.5 cursor-pointer rounded-full transition-all ${index === currentIndex ? "bg-main-page-secondary w-8" : "bg-[#B3B3B3] w-2.5"}`}
                      aria-label={`Go to blog page ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-3 lg:hidden">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border-2 border-main-page-secondary flex items-center justify-center text-main-page-secondary hover:bg-main-page-secondary transition-all cursor-pointer group"
                  aria-label="Previous blogs"
                >
                  <Image
                    src="/slider-previous-button-icon.svg"
                    alt="Previous"
                    width={24}
                    height={24}
                    className="w-5 h-5 group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-transform"
                  />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border-2 border-main-page-secondary flex items-center justify-center text-main-page-secondary hover:bg-main-page-secondary transition-all cursor-pointer group"
                  aria-label="Next blogs"
                >
                  <Image
                    src="/slider-next-button-icon.svg"
                    alt="Next"
                    width={24}
                    height={24}
                    className="w-5 h-5 group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-transform"
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <Link
                href="/blog"
                className="flex items-center justify-start gap-2 text-main-page-secondary font-bold text-sm lg:text-lg underline underline-offset-4 hover:opacity-80 transition-opacity whitespace-nowrap order-2 lg:order-1"
              >
                View all Blogs
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mb-0.5 w-4 h-4 lg:w-5 lg:h-5">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>

              <div className="hidden lg:flex gap-4 order-1 lg:order-2">
                <button
                  onClick={prevSlide}
                  className="w-14 h-14 rounded-full border-2 border-main-page-secondary flex items-center justify-center text-main-page-secondary hover:bg-main-page-secondary transition-all cursor-pointer group"
                  aria-label="Previous blogs"
                >
                  <Image
                    src="/slider-previous-button-icon.svg"
                    alt="Previous"
                    width={24}
                    height={24}
                    className="group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-transform"
                  />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-14 h-14 rounded-full border-2 border-main-page-secondary flex items-center justify-center text-main-page-secondary hover:bg-main-page-secondary transition-all cursor-pointer group"
                  aria-label="Next blogs"
                >
                  <Image
                    src="/slider-next-button-icon.svg"
                    alt="Next"
                    width={24}
                    height={24}
                    className="group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
