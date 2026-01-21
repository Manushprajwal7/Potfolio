"use client";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useSpring(useMotionValue(0), { stiffness: 500, damping: 100 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 500, damping: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      setMousePosition({ x, y });
      mouseX.set(x * 50);
      mouseY.set(y * 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            ></motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2 text-white leading-tight"
            >
              Hi, I'm{" "}
              <motion.span
                className="bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Manush Prajwal
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl text-blue-400 mb-4 font-semibold"
            >
              Backend Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-md md:text-lg text-gray-400 mb-8 leading-relaxed"
            >
              Node.js • NestJS • Microservices • Kafka • PostgreSQL • Docker
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              I design and build scalable backend systems, APIs, and distributed
              microservices with a focus on performance, reliability, and clean
              architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
              <motion.a
                href="/MP_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm hover:border-white/40 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Eye size={20} />
                View My Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <social.icon size={20} className="text-white" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Enhanced Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-white rounded-full blur-2xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-zinc-800 rounded-full blur-2xl opacity-30"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              <div className="relative z-10 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-full p-2 shadow-2xl">
                <motion.img
                  src="/profile_image.jpg"
                  alt="Manush Prajwal"
                  className="w-full h-full object-cover rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 p-3 bg-white text-black rounded-full shadow-lg border border-zinc-200"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Code size={20} className="text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 p-3 bg-black text-white rounded-full shadow-lg border border-zinc-800"
                animate={{
                  y: [0, 10, 0],
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Smartphone size={20} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
