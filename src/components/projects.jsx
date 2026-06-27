"use client";

import { motion } from "framer-motion";
import {
  Github,
  Globe,
  ExternalLink,
  Star,
  Eye,
  Sparkles,
} from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Adaptive RAG System",
      description:
        "An AI retrieval platform with multi-stage RAG pipelines — semantic retrieval, reranking, and intent-based query routing into Index, General, and Search pipelines — reducing response latency by 45% across 10K+ document embeddings.",
      image: "/adaptive-rag.png",
      category: "ai",
      github: "https://github.com/Manushprajwal7",
      live: "#",
      tools: ["Node.js", "NestJS", "Docker", "PostgreSQL", "AWS"],
      featured: true,
      stats: { stars: 18, views: 900 },
      highlights: [
        "Multi-stage RAG pipelines",
        "Intent-based query routing",
        "Vector search & reranking",
        "10K+ document embeddings",
      ],
    },
    {
      title: "Edibio — Retail ERP Platform",
      description:
        "A retail ERP startup platform powering daily operations for 8+ supermarkets across Karnataka and Tamil Nadu, with modules for billing, inventory, CRM, analytics, and audit tracking — generating ₹80K revenue in 6 weeks.",
      image: "/edibio.png",
      category: "web",
      github: "https://github.com/Manushprajwal7",
      live: "#",
      tools: ["Node.js", "PostgreSQL", "Docker", "AWS", "Multi-Tenant"],
      featured: true,
      stats: { stars: 16, views: 850 },
      highlights: [
        "Retail ERP for 8+ supermarkets",
        "Real-time inventory sync",
        "Automated billing workflows",
        "₹80K revenue in 6 weeks",
      ],
    },
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
      stats: { stars: 15, views: 1200 },
      highlights: [
        "Microservice architecture",
        "Domain-driven design",
        "Event-driven communication",
        "Scalable backend systems",
      ],
    },
    {
      title: "Cement Mind AI",
      description:
        "AI Operating Workbench for raw material and logistics automation with an autonomous real-time cement quality detection and correction system.",
      image: "/cementmind.png",
      category: "web",
      github: "https://github.com/Manushprajwal7/cementmindAI",
      live: "https://cementmindai.vercel.app/",
      tools: [
        "React",
        "Event-driven communication",
        "Apache Kafka",
        "Machine Learning",
      ],
      featured: false,
      stats: { stars: 12, views: 800 },
      highlights: [
        "Real-time quality detection",
        "Logistics automation",
        "Event-driven pipelines",
        "Machine learning",
      ],
    },
    {
      title: "Tour India",
      description:
        "A comprehensive travel platform for Indian tourists, offering detailed destination information, accessibility ratings, user reviews, and interactive maps. Features mobile-responsive design and seamless navigation.",
      image: "/tourindia.png",
      category: "web",
      github: "https://github.com/Manushprajwal7/tour-india",
      live: "https://www.tourindia24.com/",
      tools: ["React", "Node.js", "PostgreSQL", "Express.js"],
      featured: false,
      stats: { stars: 8, views: 600 },
      highlights: [
        "Detailed destination information",
        "Accessibility ratings",
        "User reviews",
        "Interactive maps",
      ],
    },
    {
      title: "Secure Net",
      description:
        "A comprehensive Intrusion Detection System with real-time network monitoring, threat analysis, and an advanced web dashboard for cybersecurity professionals.",
      image: "/securenet.png",
      category: "web",
      github: "https://github.com/Manushprajwal7/Secure-Net-?tab=readme-ov-file",
      live: "#",
      tools: [
        "PyShark",
        "Machine Learning",
        "Real-time Analytics",
        "Web Dashboard",
      ],
      featured: false,
      stats: { stars: 5, views: 300 },
      highlights: [
        "Real-time monitoring",
        "Threat analysis",
        "Intrusion detection",
        "Web dashboard",
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="p-4 bg-zinc-800 rounded-2xl shadow-lg border border-zinc-700">
              <Globe className="text-white" size={32} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            A selection of projects spanning AI retrieval systems, retail ERP
            platforms, and scalable backend services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/40 transition-colors duration-300 hover:shadow-2xl hover:shadow-white/10 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex flex-col items-center justify-center gap-2 px-6 text-center">
                      <Sparkles className="text-white/70" size={28} />
                      <span className="text-white font-semibold text-lg leading-snug">
                        {project.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Project Badges */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <Star size={12} />
                        Featured
                      </span>
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

                <div className="p-6 flex flex-col flex-1">
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
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
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

                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-300 border border-white/20 hover:border-white/40 flex-1 justify-center"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg transition-colors duration-300 hover:bg-zinc-200 flex-1 justify-center"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Manushprajwal7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-zinc-200 transition-colors duration-300"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
