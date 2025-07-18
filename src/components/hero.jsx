"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-slate-900" />
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/50 bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]" />
        </motion.div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 text-center md:text-left pt-8 sm:pt-16">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="relative z-20 text-white px-4 md:px-6">
                  Manush Prajwal
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg -z-10"></span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground/80 mb-8"
            >
              A passionate Web and Mobile Developer specializing in creating
              exceptional digital experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8 md:mb-0"
            >
              <Link
                href="/MP_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  📄 View My Resume
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Improved Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] mx-auto max-w-md lg:max-w-full"
          >
            <div className="absolute inset-0 overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/profile_image.jpg"
                alt="Manush Prajwal"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
