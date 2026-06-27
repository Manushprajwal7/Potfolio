"use client";

import { motion } from "framer-motion";
import {
  Code,
  Zap,
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  FileText,
  ExternalLink,
  Trophy,
} from "lucide-react";

export function About() {
  const skills = [
    {
      name: "Node.js",
      level: 90,
      icon: <Zap size={20} />,
      color: "from-zinc-600 to-black",
      description: "Backend development",
    },
    {
      name: "NestJS",
      level: 85,
      icon: <Code size={20} />,
      color: "from-red-500 to-red-700",
      description: "Microservices framework",
    },
    {
      name: "PostgreSQL",
      level: 85,
      icon: <Target size={20} />,
      color: "from-indigo-500 to-indigo-700",
      description: "Relational databases",
    },
    {
      name: "Microservices",
      level: 82,
      icon: <Target size={20} />,
      color: "from-teal-500 to-teal-700",
      description: "Service architecture",
    },
    {
      name: "Docker & AWS",
      level: 78,
      icon: <Zap size={20} />,
      color: "from-cyan-500 to-cyan-700",
      description: "Containers & cloud",
    },
    {
      name: "RAG / AI Systems",
      level: 75,
      icon: <Lightbulb size={20} />,
      color: "from-zinc-400 to-zinc-600",
      description: "Retrieval pipelines",
    },
    {
      name: "Next.js / React",
      level: 72,
      icon: <Code size={20} />,
      color: "from-gray-700 to-gray-900",
      description: "Frontend frameworks",
    },
  ];

  const stats = [
    { icon: FileText, value: "13", label: "Research Papers Published" },
    { icon: Trophy, value: "3rd", label: "Runner-up · Gen AI Exchange" },
    { icon: TrendingUp, value: "5", label: "Freelance Projects Shipped" },
    { icon: Target, value: "1.3K+", label: "Daily Active Users Supported" },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-zinc-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-800/5 rounded-full blur-3xl" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[length:20px_20px]" />
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
              <Users className="text-white" size={32} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am a backend engineer and published researcher specializing in
            scalable APIs, microservice architectures, and distributed systems.
            I build reliable backend platforms that handle real-world scale,
            concurrency, and data consistency.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 hover:border-white/40 transition-colors duration-300"
            >
              <div className="inline-block p-3 bg-zinc-800 rounded-xl mb-4 border border-zinc-700">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:border-white/40 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <div className="p-2 bg-zinc-800 rounded-lg border border-zinc-700">
                  <Users className="text-white" size={24} />
                </div>
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I build production backend systems with Node.js, NestJS, and
                containerized deployments, backed by PostgreSQL and event-driven
                pipelines. Alongside engineering, I am the author of 13 research
                papers — 9 IEEE conference papers and 4 journal papers — across
                machine learning systems, biosensor technology, distributed
                systems, and secure computing architectures.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I was recognized as 3rd runner-up at the Google Cloud Gen AI
                Exchange Hackathon 2025 — a national-scale event that engaged
                278K+ developers, reached 750K+ innovators, and received 4,457
                prototype submissions. I have also successfully shipped 5
                freelance software projects.
              </p>
              <a
                href="https://ieeexplore.ieee.org/author/576786069332685"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
              >
                <FileText size={16} />
                IEEE Xplore Author Profile
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">What I Do</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-zinc-200 rounded-full" />
                  Backend API Design & Development
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-zinc-400 rounded-full" />
                  Microservices Architecture (NestJS)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-zinc-600 rounded-full" />
                  Event-Driven Systems (Kafka)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black border border-white/20 rounded-full" />
                  Database Design & Optimization
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  RAG & AI Retrieval Pipelines
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  Dockerized & Cloud Deployments (AWS)
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <div className="p-2 bg-zinc-800 rounded-lg border border-zinc-700">
                <Target className="text-white" size={24} />
              </div>
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-3 group">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} shadow-lg`}
                      >
                        <div className="text-white">{skill.icon}</div>
                      </div>
                      <div>
                        <span className="font-semibold text-white">
                          {skill.name}
                        </span>
                        <p className="text-xs text-gray-400">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-3">Always Learning</h4>
              <p className="text-sm text-gray-300">
                I'm constantly exploring new technologies and frameworks — from
                AI retrieval systems to multi-tenant cloud architectures — to
                deliver reliable, high-impact solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
