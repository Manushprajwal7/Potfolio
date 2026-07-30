"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AWS CloudPilot — Agentic FinOps & Infrastructure Optimizer",
    description:
      "An agentic system that analyzes AWS infrastructure metrics and generates Terraform-based right-sizing recommendations, identifying estimated cloud cost-saving opportunities of up to 30–40% in simulated workloads.",
    image: "/aws-cloudpilot.png",
    github: "https://github.com/Manushprajwal7",
    live: "#",
    tools: ["Terraform", "AWS SDK", "CloudWatch", "Prometheus", "Agentic AI"],
    featured: true,
    metric: "30-40% cost savings",
    highlights: [
      "Four-stage agentic workflow",
      "Cost-anomaly & idle-resource detection",
      "Sandboxed Terraform execution",
      "Human approval gates & rollback",
    ],
  },
  {
    title: "Atlas Bill — Multi-Tenant Retail ERP Platform",
    description:
      "A production retail ERP onboarded by 26 supermarkets across Karnataka and Tamil Nadu, generating ₹104K in revenue within 47 days and processing over ₹600K in monthly transaction value across billing, inventory, CRM, and audit workflows.",
    image: "/edibio.png",
    github: "https://github.com/Manushprajwal7",
    live: "#",
    tools: ["Node.js", "PostgreSQL", "Docker", "AWS", "Multi-Tenant"],
    featured: true,
    metric: "₹104K in 47 days",
    highlights: [
      "26+ stores onboarded",
      "₹600K+ monthly transaction volume",
      "-65% manual operational effort",
      "Multi-tenant backend architecture",
    ],
  },
  {
    title: "Student Hub",
    description:
      "Designed and implemented a microservice-based backend architecture using NestJS. Services were split by domain (jobs, issues, announcements, resources) and communicated via REST and event-driven patterns. The system supports 1,300+ daily users.",
    image: "/studenthub.png",
    github: "https://github.com/Manushprajwal7/student-hub-V2",
    live: "https://student-hub-mp.vercel.app/",
    tools: ["NestJS", "Node.js", "PostgreSQL", "Kafka"],
    featured: true,
    metric: "1.3K+ DAU",
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
    github: "https://github.com/Manushprajwal7/cementmindAI",
    live: "https://cementmindai.vercel.app/",
    tools: ["React", "Event-driven communication", "Apache Kafka", "Machine Learning"],
    featured: false,
    metric: "real-time",
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
    github: "https://github.com/Manushprajwal7/tour-india",
    live: "https://www.tourindia24.com/",
    tools: ["React", "Node.js", "PostgreSQL", "Express.js"],
    featured: false,
    metric: "live",
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
    github: "https://github.com/Manushprajwal7/Secure-Net-?tab=readme-ov-file",
    live: "#",
    tools: ["PyShark", "Machine Learning", "Real-time Analytics", "Web Dashboard"],
    featured: false,
    metric: "IDS",
    highlights: [
      "Real-time monitoring",
      "Threat analysis",
      "Intrusion detection",
      "Web dashboard",
    ],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-[#0a0c0f] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="eyebrow mb-4">$ ls projects/</p>
          <h2 className="font-mono text-3xl md:text-4xl font-semibold text-ink mb-5">
            Selected work
          </h2>
          <p className="text-lg text-ink-dim leading-relaxed">
            Agentic cloud tooling, multi-tenant ERP platforms, and backend services
            built to run in production, not just in a demo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              viewport={{ once: true }}
              className="panel overflow-hidden hover:border-signal/40 transition-colors duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden border-b border-line">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover"
                  />
                ) : (
                  <div className="w-full h-44 bg-surface-raised flex flex-col items-center justify-center gap-2 px-6 text-center">
                    <Sparkles className="text-ink-faint" size={24} />
                    <span className="text-ink font-medium leading-snug">
                      {project.title}
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.featured && (
                    <span className="px-2.5 py-1 bg-[#0a0c0f]/80 backdrop-blur-sm text-amber text-xs font-mono rounded border border-amber/30">
                      featured
                    </span>
                  )}
                </div>
                <div className="absolute bottom-3 left-3 font-mono text-xs text-signal bg-[#0a0c0f]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-signal/20">
                  {project.metric}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-mono font-semibold text-ink mb-2">
                  {project.title}
                </h3>
                <p className="text-ink-dim mb-4 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="data-label mb-2">key features</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.highlights.slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 bg-surface-raised text-ink-dim text-xs rounded border border-line"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 text-ink-faint text-xs font-mono border border-line rounded"
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
                    className="flex items-center gap-2 px-4 py-2 border border-line text-ink hover:border-signal/40 hover:text-signal rounded-md transition-colors flex-1 justify-center text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-signal text-[#0a0c0f] rounded-md hover:bg-signal/90 transition-colors flex-1 justify-center text-sm font-semibold"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/Manushprajwal7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 border border-line text-ink font-semibold rounded-md hover:border-signal/40 hover:text-signal transition-colors duration-200"
          >
            <Github size={18} />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
