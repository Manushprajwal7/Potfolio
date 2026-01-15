"use client";

import { motion } from "framer-motion";
import {
  Download,
  GraduationCap,
  Briefcase,
  Award,
  MapPin,
  Star,
  Trophy,
  BookOpen,
  Zap,
} from "lucide-react";

export function Resume() {
  const education = [
    {
      degree: "Bachelor's in Computer Science and Engineering",
      institution: "The Oxford College of Engineering",
      year: "2023 - 2027",
      location: "Bangalore, India",
      description:
        "Focused on web and mobile development, with coursework in algorithms, data structures, Open Source Contribution, and software engineering. Maintaining excellent academic performance while actively participating in technical projects and hackathons.",
      achievements: [
        "CGPA: 8.5/10",
        "Active member of coding clubs",
        "Participated in multiple hackathons",
        "Completed advanced programming courses",
      ],
    },
  ];

  const experience = [
    {
      position: "Backend Engineer",
      company: "Self-Employed",
      year: "2022 - Present",
      location: "Remote",
      description:
        "Designed and built scalable backend systems, APIs, and microservices using Node.js, NestJS, and containerized deployments. Implemented event-driven architectures with Kafka and database-driven solutions with PostgreSQL and MongoDB.",
      achievements: [
        "Architected 5+ backend services with NestJS",
        "Implemented Kafka-based event pipelines",
        "Optimized database performance with PostgreSQL",
        "Deployed containerized services with Docker",
      ],
    },
    {
      position: "Open Source Contributor",
      company: "GitHub Community",
      year: "2022 - Present",
      location: "Global",
      description:
        "Active contributor to various open-source projects, focusing on web development tools and frameworks.",
      achievements: [
        "Contributed to 10+ repositories",
        "Fixed critical bugs in popular libraries",
        "Mentored junior developers",
        "Published technical articles",
      ],
    },
  ];

  const achievements = [
    {
      title: "Research Paper Published",
      year: "2023",
      description: "Diabetes mellitus detection using optical ring resonators",
      category: "Research",
      icon: BookOpen,
    },
    {
      title: "Hackathon Winner",
      year: "2025",
      description:
        "Runner up in Google Gen AI Exchange hackathon for innovative use of AI",
      category: "Competition",
      icon: Trophy,
    },
    {
      title: "Best Project Award",
      year: "2023",
      description:
        "Recognition for outstanding Student Hub platform development",
      category: "Recognition",
      icon: Star,
    },
  ];

  const skills = {
    technical: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Tailwind CSS",
      "Framer Motion",
    ],
    soft: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Time Management",
      "Adaptability",
      "Leadership",
    ],
    tools: [
      "Git",
      "VS Code",
      "Figma",
      "Postman",
      "Docker",
      "Vercel",
      "Netlify",
    ],
  };

  return (
    <section id="resume" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-zinc-500/5 rounded-full blur-3xl" />
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
              <GraduationCap className="text-white" size={32} />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Resume
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            My educational background, work experience, and achievements that
            shape my professional journey.
          </p>
          <motion.a
            href="/MP_Resume.pdf"
            download="MP_Resume.pdf"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-zinc-200 transition-all duration-300"
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:border-white/40 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-zinc-800 rounded-xl border border-zinc-700">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Education & Experience
                </h3>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                  <Briefcase size={20} className="text-gray-500" />
                  Work Experience
                </h4>
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-gray-500 pl-6 mb-6"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-bold text-white text-lg">
                        {item.position}
                      </h5>
                      <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-400 font-medium mb-2">
                      {item.company}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <MapPin size={14} />
                      {item.location}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Education */}
              <div>
                <h4 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                  <BookOpen size={20} className="text-zinc-400" />
                  Education
                </h4>
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-zinc-500 pl-6 mb-6"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-bold text-white text-lg">
                        {item.degree}
                      </h5>
                      <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-zinc-400 font-medium mb-2">
                      {item.institution}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <MapPin size={14} />
                      {item.location}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements & Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Achievements */}
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg">
                  <Award className="text-white" size={20} />
                </div>
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="p-4 bg-gradient-to-r from-white/5 to-red-500/10 rounded-xl border border-white/10 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                        <item.icon className="text-white" size={16} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-400 mb-2">
                          {item.year} • {item.category}
                        </p>
                        <p className="text-sm text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <div className="p-2 bg-zinc-800 rounded-lg border border-zinc-700">
                  <Zap className="text-white" size={20} />
                </div>
                Skills
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-300 mb-3">
                    Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-white/5 text-white text-xs rounded-full border border-white/10"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-300 mb-3">
                    Soft Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full border border-gray-500/30"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-300 mb-3">
                    Tools & Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool, index) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700"
                      >
                        {tool}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
