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
      degree: "B.E. in Computer Science and Engineering",
      institution: "The Oxford College of Engineering",
      year: "Sept 2023 – Present",
      location: "Bangalore, India",
      description:
        "Pursuing a Bachelor's degree in Computer Science and Engineering, with a focus on backend systems, distributed computing, and applied machine learning, alongside active research and hackathon participation.",
      achievements: [
        "Author of 13 published research papers",
        "3rd Runner-up · Gen AI Exchange Hackathon 2025",
        "Active in technical projects and hackathons",
      ],
    },
    {
      degree: "Pre-University Course — PCMC (Science Stream)",
      institution: "Alva's PU College, Moodubidri",
      year: "2021 – 2023",
      location: "Moodubidri, India",
      description:
        "Completed pre-university education in the Physics, Chemistry, Mathematics, and Computer Science (PCMC) stream, building a strong foundation in mathematics and computing.",
      achievements: [
        "Science stream (PCMC)",
        "Foundation in programming and mathematics",
      ],
    },
  ];

  const experience = [
    {
      position: "Freelance Developer — Car Showroom Management Software",
      company: "Freelance",
      year: "May 2023 – Present",
      location: "Remote",
      description:
        "Designed and built ERP software for car showroom operations, focusing on transactional backend systems, operational automation, and data consistency.",
      achievements: [
        "Built ERP workflows for inventory, bookings, billing, and audit operations, reducing manual showroom operations by 60%.",
        "Developed transactional backend systems handling concurrent inventory and billing operations with relational consistency guarantees.",
        "Successfully shipped 5 freelance software projects end to end.",
      ],
    },
  ];

  const achievements = [
    {
      title: "3rd Runner-up — Gen AI Exchange Hackathon 2025",
      year: "2025",
      description:
        "Recognized among 278K+ developers and 4,457 prototypes in Google Cloud's national-scale generative AI hackathon, which reached 750K+ innovators.",
      category: "Competition",
      icon: Trophy,
    },
    {
      title: "13 Research Papers Published",
      year: "2023 – Present",
      description:
        "Author of 9 IEEE conference papers and 4 journal papers across machine learning, biosensors, distributed systems, and secure computing.",
      category: "Research",
      icon: BookOpen,
    },
    {
      title: "5 Freelance Projects Shipped",
      year: "2023 – Present",
      description:
        "Delivered and shipped 5 production freelance software projects spanning ERP, retail, and backend platforms.",
      category: "Delivery",
      icon: Star,
    },
  ];

  const skills = {
    technical: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Apache Kafka",
      "Docker",
      "AWS",
      "REST APIs",
      "Microservices",
      "React",
      "Next.js",
    ],
    soft: [
      "Problem Solving",
      "System Design",
      "Team Collaboration",
      "Communication",
      "Time Management",
      "Adaptability",
    ],
    tools: ["Git", "VS Code", "Postman", "Docker", "AWS", "Vercel"],
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="p-4 bg-zinc-800 rounded-2xl shadow-lg border border-zinc-700">
              <GraduationCap className="text-white" size={32} />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Resume
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            My educational background, work experience, and achievements that
            shape my professional journey.
          </p>
          <a
            href="/MP_Resume.pdf"
            download="MP_Resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-zinc-200 transition-colors duration-300"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:border-white/40 transition-colors duration-300">
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
                  <div
                    key={index}
                    className="border-l-4 border-gray-500 pl-6 mb-6"
                  >
                    <div className="flex items-start justify-between mb-2 gap-3">
                      <h5 className="font-bold text-white text-lg">
                        {item.position}
                      </h5>
                      <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full whitespace-nowrap">
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
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-1.5 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div>
                <h4 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                  <BookOpen size={20} className="text-zinc-400" />
                  Education
                </h4>
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-zinc-500 pl-6 mb-6"
                  >
                    <div className="flex items-start justify-between mb-2 gap-3">
                      <h5 className="font-bold text-white text-lg">
                        {item.degree}
                      </h5>
                      <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full whitespace-nowrap">
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
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full mt-1.5 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements & Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
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
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-white/5 to-orange-500/10 rounded-xl border border-white/10 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shrink-0">
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
                  </div>
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
                    {skills.technical.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-1 bg-white/5 text-white text-xs rounded-full border border-white/10"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-300 mb-3">
                    Soft Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.soft.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full border border-gray-500/30"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-300 mb-3">
                    Tools & Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool) => (
                      <div
                        key={tool}
                        className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700"
                      >
                        {tool}
                      </div>
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
