"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Globe,
  ExternalLink,
  Star,
  Eye,
  Calendar,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Student Hub",
      description:
        "Designed and implemented a microservice-based backend architecture using NestJS. Services were split by domain (jobs, issues, announcements, resources) and communicated via REST and event-driven patterns. The system supports 1,300+ daily users.",
      image: "/studenthub.png",
      category: "web",
      github: "https://github.com/Manushprajwal7/student-hub-V2",
      live: "https://student-hub-mp.vercel.app/",
      tools: ["NestJS", "Node.js", "PostgreSQL", "Kafka"],
      featured: true,
      stats: {
        stars: 15,
        views: 1200,
        contributors: 3,
      },
      highlights: [
        "Microservice architecture",
        "Domain-driven design",
        "Event-driven communication",
        "Scalable backend systems",
      ],
    },
    {
      title: "Accessible Travel Destinations",
      description:
        "An inclusive travel platform designed specifically for people with disabilities to check destination accessibility. Features detailed accessibility ratings, user reviews, and comprehensive accessibility information.",
      image: "/accesstravel.png",
      category: "web",
      github: "https://github.com/Manushprajwal7/travel-guide",
      live: "https://accessdestinations.netlify.app",
      tools: ["React", "Express.js", "MongoDB", "Node.js"],
      featured: true,
      stats: {
        stars: 12,
        views: 800,
        contributors: 2,
      },
      highlights: [
        "Accessibility ratings",
        "User reviews",
        "Interactive maps",
        "Mobile responsive",
      ],
    },
    {
      title: "Trip Expenses Tracker",
      description:
        "A smart expense management application for students to efficiently track, manage, and share trip expenses. Features group expense splitting, real-time calculations, and detailed expense reports.",
      image: "/tripexpenses.png",
      category: "web",
      github: "https://github.com/Manushprajwal7/V2-trip-expenses-tracker",
      live: "https://trip-expens-tracker.vercel.app/",
      tools: ["React", "Node.js", "PostgreSQL", "Express.js"],
      featured: false,
      stats: {
        stars: 8,
        views: 600,
        contributors: 1,
      },
      highlights: [
        "Expense splitting",
        "Real-time calculations",
        "Group management",
        "Export reports",
      ],
    },
    {
      title: "The Hawk Fit Hub",
      description:
        "A modern fitness website for a premium gym, showcasing fitness services, community features, and membership management. Features class scheduling, progress tracking, and member portal.",
      image: "/hawkfit.png",
      category: "web",
      github: "https://github.com/Manushprajwal7/hawkfithub",
      live: "https://thehawkfithub.vercel.app/",
      tools: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion"],
      featured: false,
      stats: {
        stars: 6,
        views: 400,
        contributors: 1,
      },
      highlights: [
        "Class scheduling",
        "Progress tracking",
        "Member portal",
        "Payment integration",
      ],
    },
    {
      title: "Student Voice",
      description:
        "A SaaS platform empowering students to voice their opinions and concerns at colleges and universities. Features anonymous feedback, analytics dashboard, and institutional response tracking.",
      image: "/studentvoice.png",
      category: "web",
      github: "https://github.com/Manushprajwal7/student-voice",
      live: "https://student-voice-mp.vercel.app",
      tools: ["React", "Node.js", "MongoDB", "Socket.io"],
      featured: false,
      stats: {
        stars: 10,
        views: 700,
        contributors: 2,
      },
      highlights: [
        "Anonymous feedback",
        "Analytics dashboard",
        "Real-time updates",
        "Institutional tracking",
      ],
    },
    {
      title: "Bike Brains",
      description:
        "A comprehensive SaaS platform connecting bike and car enthusiasts with job opportunities and technical support. Features job listings, issue reporting, and community forums.",
      image: "/bb_card.jpg",
      category: "web",
      github: "https://github.com/Manushprajwal7/BikeBrains",
      live: "#",
      tools: ["React", "Express.js", "PostgreSQL", "Redis"],
      featured: false,
      stats: {
        stars: 5,
        views: 300,
        contributors: 1,
      },
      highlights: [
        "Job listings",
        "Issue reporting",
        "Community forums",
        "Expert matching",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-zinc-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="p-4 bg-zinc-800 rounded-2xl shadow-lg border border-zinc-700">
              <Globe className="text-white" size={32} />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Here are some of my featured projects that showcase my skills and
            experience in modern web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
                className={`relative group ${
                  project.featured ? "lg:col-span-1" : ""
                }`}
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 h-full">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Project Badges */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.featured && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1"
                        >
                          <Star size={12} />
                          Featured
                        </motion.span>
                      )}
                    </div>

                    {/* Project Stats */}
                    <div className="absolute bottom-4 left-4 flex gap-3 text-white/80 text-xs">
                      <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded-full">
                        <Star size={12} />
                        {project.stats.stars}
                      </div>
                      <div className="flex items-center gap-1 bg-black/30 px-2 py-1 rounded-full">
                        <Eye size={12} />
                        {project.stats.views}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Highlights */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-zinc-400 mb-2">
                        Key Features:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.highlights
                          .slice(0, 3)
                          .map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                            >
                              {highlight}
                            </span>
                          ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex-1 justify-center"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg transition-all duration-300 hover:bg-zinc-200 flex-1 justify-center"
                      >
                        <ExternalLink size={16} />
                        Live
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Manushprajwal7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-zinc-200 transition-all duration-300"
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
