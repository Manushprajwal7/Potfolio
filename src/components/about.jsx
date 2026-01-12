"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Code,
  Zap,
  Database,
  Palette,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Heart,
} from "lucide-react";

export function About() {
  const skills = [
    {
      name: "Node.js",
      level: 85,
      icon: <Zap size={20} />,
      color: "from-zinc-600 to-black",
      description: "Backend development",
    },
    {
      name: "NestJS",
      level: 80,
      icon: <Code size={20} />,
      color: "from-red-500 to-red-700",
      description: "Microservices framework",
    },
    {
      name: "Kafka",
      level: 75,
      icon: <Database size={20} />,
      color: "from-purple-500 to-purple-700",
      description: "Event streaming",
    },
    {
      name: "PostgreSQL",
      level: 80,
      icon: <Database size={20} />,
      color: "from-blue-500 to-blue-700",
      description: "Relational database",
    },
    {
      name: "MongoDB",
      level: 75,
      icon: <Database size={20} />,
      color: "from-green-600 to-green-800",
      description: "Document database",
    },
    {
      name: "REST APIs",
      level: 85,
      icon: <Code size={20} />,
      color: "from-indigo-500 to-indigo-700",
      description: "API development",
    },
    {
      name: "Microservices",
      level: 78,
      icon: <Target size={20} />,
      color: "from-teal-500 to-teal-700",
      description: "Service architecture",
    },
    {
      name: "Docker",
      level: 75,
      icon: <Zap size={20} />,
      color: "from-cyan-500 to-cyan-700",
      description: "Containerization",
    },
    {
      name: "React",
      level: 70,
      icon: <Smartphone size={20} />,
      color: "from-zinc-400 to-zinc-600",
      description: "Frontend library",
    },
    {
      name: "Next.js",
      level: 72,
      icon: <Code size={20} />,
      color: "from-gray-700 to-gray-900",
      description: "Frontend framework",
    },
  ];

  const stats = [
    { icon: Target, value: "1.3K+", label: "Daily Active Users Supported" },
    { icon: TrendingUp, value: "5+", label: "Backend Services Deployed" },
    { icon: Heart, value: "Kafka-Based", label: "Real-Time Pipelines" },
    { icon: Lightbulb, value: "Production", label: "Systems in Use" },
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
              <Users className="text-white" size={32} />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I am a backend engineer specializing in designing scalable APIs,
            microservice architectures, and distributed systems. I focus on
            building reliable backend platforms that handle real-world scale,
            concurrency, and data consistency.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="inline-block p-3 bg-zinc-800 rounded-xl mb-4 border border-zinc-700">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:border-white/40 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <div className="p-2 bg-zinc-800 rounded-lg border border-zinc-700">
                  <Users className="text-white" size={24} />
                </div>
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I have experience building production backend systems using
                Node.js and NestJS, implementing Kafka-based event pipelines,
                containerized services with Docker, and database-driven
                architectures with PostgreSQL and MongoDB.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My interests include backend system design, event-driven
                architectures, performance optimization, and building
                fault-tolerant services.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg"
            >
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
                  Authentication & Authorization Systems
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  Dockerized Backend Deployments
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="space-y-3 group"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} shadow-lg`}
                      >
                        <div className="text-white">{skill.icon}</div>
                      </motion.div>
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
                        duration: 1.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{
                        duration: 2,
                        delay: index * 0.1 + 0.5,
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
            >
              <h4 className="font-semibold text-white mb-3">Always Learning</h4>
              <p className="text-sm text-gray-300">
                I'm constantly exploring new technologies and frameworks to stay
                ahead of the curve and deliver cutting-edge solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
