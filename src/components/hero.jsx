"use client";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Eye,
  Code,
  Smartphone,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";

// Hero Component
export function Hero() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Manushprajwal7",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/manush-prajwal-16a883294/",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/_manushprajwal",
      label: "Twitter",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Background Paths Animation - Full Background */}
      <BackgroundPaths />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2 text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
                Manush Prajwal
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-blue-400 mb-4 font-semibold">
              Backend Engineer
            </p>

            <p className="text-md md:text-lg text-gray-400 mb-8 leading-relaxed">
              Node.js • NestJS • Microservices • Kafka • PostgreSQL • Docker
            </p>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              I design and build scalable backend systems, APIs, and distributed
              microservices with a focus on performance, reliability, and clean
              architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="group px-8 py-4 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-zinc-200 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="/MP_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm hover:border-white/40 hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Eye size={20} />
                View My Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/40 transition-colors duration-300"
                >
                  <social.icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Static Glow Effect */}
              <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-20" />
              <div className="absolute inset-4 bg-zinc-800 rounded-full blur-2xl opacity-30" />

              <div className="relative z-10 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-full p-2 shadow-2xl">
                <img
                  src="/achivements/achievement-4.jpg"
                  alt="On Stage — Gen AI Exchange Hackathon"
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>

              {/* Static Accent Badges */}
              <div className="absolute -top-4 -right-4 p-3 bg-white text-black rounded-full shadow-lg border border-zinc-200">
                <Code size={20} className="text-black" />
              </div>

              <div className="absolute -bottom-4 -left-4 p-3 bg-black text-white rounded-full shadow-lg border border-zinc-800">
                <Smartphone size={20} className="text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}
