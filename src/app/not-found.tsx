"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 -z-30">
        <Image
          src="/hero-section-background-pattern.svg"
          alt=""
          width={840}
          height={723}
          className="absolute right-0 top-0 h-full w-full object-cover opacity-20"
        />
        <motion.div
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-main-page-secondary/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.06, 1, 1.06] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-32 h-72 w-72 rounded-full bg-orange-primary/15 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.14, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-green-primary/15 blur-3xl"
        />
      </div>

      <div className="mx-auto flex min-h-[78vh] w-full max-w-4xl items-center justify-center px-6 py-16 lg:px-10 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative w-full overflow-hidden rounded-[32px] border border-main-page-secondary/10 bg-white/85 p-8 text-center shadow-[0_24px_90px_-40px_rgba(28,76,195,0.58)] backdrop-blur-sm md:p-12"
        >
          <motion.div
            animate={{ x: ["-8%", "8%", "-8%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-8 h-44 w-[130%] -translate-x-1/2 rounded-full bg-gradient-to-r from-main-page-secondary/10 via-orange-primary/15 to-green-primary/10 blur-3xl"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-main-page-secondary md:text-sm">
            Error 404
          </p>

          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="mt-4 bg-gradient-to-r from-main-page-secondary via-orange-primary to-main-page-secondary bg-[length:200%_100%] bg-clip-text text-7xl font-extrabold leading-none text-transparent md:text-8xl"
            style={{ animation: "gradientShift 5.5s linear infinite" }}
          >
            404
          </motion.p>

          <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Page not found.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-faded-text md:text-base">
            Redirecting you to the home page in a few seconds.
          </p>

          <div className="mt-7 flex justify-center">
            <Image
              src="/acadally-header-main-logo.svg"
              alt="AcadAlly"
              width={170}
              height={44}
              className="h-auto w-[140px] md:w-[170px]"
              priority
            />
          </div>

          <div className="mx-auto mt-8 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-main-page-secondary/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full rounded-full bg-gradient-to-r from-main-page-secondary via-orange-primary to-main-page-secondary"
            />
          </div>

          <div className="mt-7">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-main-page-secondary px-7 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-main-page-secondary/90 md:text-base"
            >
              Go to Home
            </Link>
          </div>

          <style jsx>{`
            @keyframes gradientShift {
              0% {
                background-position: 0% 50%;
              }
              100% {
                background-position: 200% 50%;
              }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}