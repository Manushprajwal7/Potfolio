"use client";

import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.E. in Computer Science and Engineering (CGPA: 8.3/10)",
    institution: "The Oxford College of Engineering",
    year: "Sept 2023 – May 2027",
    location: "Bangalore, India",
    description:
      "Expected May 2027. Relevant coursework: Distributed Systems, Database Management Systems, Operating Systems, Machine Learning.",
    achievements: [
      "Author of 11 published research papers",
      "3rd Runner-up · Google GenAI Exchange Hackathon 2025",
      "4x hackathon winner across national and inter-collegiate events",
    ],
  },
  {
    degree: "Pre-University Course — PCMC (Percentage: 91.6%)",
    institution: "Alva's PU College, Moodubidri",
    year: "2021 – 2023",
    location: "Moodubidri, India",
    description:
      "Physics, Chemistry, Mathematics, and Computer Science (PCMC) stream, building a strong foundation in mathematics and computing.",
    achievements: [
      "Science stream (PCMC)",
      "Foundation in programming and mathematics",
    ],
  },
];

const experience = [
  {
    position: "Research Intern — Machine Learning & Photonic Biosensors",
    company: "IEEE Photonics Society, Bengaluru",
    year: "Oct 2023 – Jan 2024",
    location: "Bengaluru, India",
    description:
      "Engineered a diagnostic framework integrating machine learning models with photonic biosensor measurements.",
    achievements: [
      "Achieved 90.03% diabetes-detection accuracy across the ML + biosensor pipeline.",
      "Reduced biosensor signal noise by 40% through preprocessing, normalization, and feature extraction.",
      "Presented validated research outcomes at INDIACom 2024 and IEEE ICCCNP 2025.",
    ],
  },
];

const achievements = [
  {
    title: "4x Hackathon Winner",
    year: "2023 – present",
    description:
      "Wins at Google, BNMIT, RNSIT, and TOCE hackathons — certificates verified on IEEE Xplore.",
    category: "competition",
  },
  {
    title: "3rd Runner-Up — Google GenAI Exchange Hackathon 2025",
    year: "2025",
    description:
      "Recognized among 278K+ developers and 4,457 prototypes submitted.",
    category: "competition",
  },
  {
    title: "11 Research Papers Published",
    year: "2023 – present",
    description:
      "Author of 9 IEEE conference papers and 2 journal papers across machine learning, distributed systems, and secure computing architectures.",
    category: "research",
  },
  {
    title: "Atlas Bill — ₹104K Revenue in 47 Days",
    year: "2025",
    description:
      "Founding Engineer of a multi-tenant retail ERP onboarded by 26+ stores across Karnataka and Tamil Nadu.",
    category: "delivery",
  },
];

const skills = {
  "Backend & Systems": ["Node.js", "NestJS", "REST APIs"],
  "Cloud & DevOps": [
    "AWS (EC2, RDS, S3, Lambda, CloudWatch)",
    "GCP",
    "Docker",
    "Terraform",
    "Prometheus",
  ],
  "AI & Agentic Systems": [
    "LangChain",
    "LangGraph",
    "PhiData",
    "LangFlow",
    "LLM Orchestration",
    "n8n Workflows",
  ],
  Databases: ["PostgreSQL", "Supabase", "MongoDB"],
  Languages: ["Python", "TypeScript", "JavaScript", "SQL", "C", "C++"],
  "Developer Tools": ["Git", "GitHub", "Linux", "Postman"],
};

export function Resume() {
  return (
    <section id="resume" className="py-24 bg-[#0a0c0f] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="eyebrow mb-4">$ cat resume.pdf</p>
          <h2 className="font-mono text-3xl md:text-4xl font-semibold text-ink mb-5">
            Resume
          </h2>
          <p className="text-lg text-ink-dim leading-relaxed mb-8">
            Educational background, work experience, and achievements that
            shape my professional journey.
          </p>
          <a
            href="/MP_Resume.pdf"
            download="MP_Resume.pdf"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-signal text-[#0a0c0f] font-semibold rounded-md hover:bg-signal/90 transition-colors duration-200"
          >
            <Download size={18} />
            Download resume
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="panel p-8">
              <h3 className="font-mono text-xl font-semibold text-ink mb-8">
                Education & experience
              </h3>

              <div className="mb-8">
                <p className="data-label mb-4">experience</p>
                {experience.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-signal/40 pl-6 mb-6 last:mb-0"
                  >
                    <div className="flex items-start justify-between mb-2 gap-3">
                      <h5 className="font-semibold text-ink">
                        {item.position}
                      </h5>
                      <span className="font-mono text-xs text-ink-faint bg-surface-raised px-2.5 py-1 rounded border border-line whitespace-nowrap">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-signal text-sm font-medium mb-2">
                      {item.company}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-ink-faint mb-3">
                      <MapPin size={14} />
                      {item.location}
                    </div>
                    <p className="text-ink-dim text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-ink-dim"
                        >
                          <span className="w-1 h-1 bg-ink-faint rounded-full mt-2 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <p className="data-label mb-4">education</p>
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-amber/40 pl-6 mb-6 last:mb-0"
                  >
                    <div className="flex items-start justify-between mb-2 gap-3">
                      <h5 className="font-semibold text-ink">
                        {item.degree}
                      </h5>
                      <span className="font-mono text-xs text-ink-faint bg-surface-raised px-2.5 py-1 rounded border border-line whitespace-nowrap">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-amber text-sm font-medium mb-2">
                      {item.institution}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-ink-faint mb-3">
                      <MapPin size={14} />
                      {item.location}
                    </div>
                    <p className="text-ink-dim text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-ink-dim"
                        >
                          <span className="w-1 h-1 bg-ink-faint rounded-full mt-2 shrink-0" />
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="panel p-6">
              <h3 className="font-mono text-lg font-semibold text-ink mb-5">
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-surface-raised rounded-md border border-line"
                  >
                    <h4 className="font-medium text-ink mb-1 text-sm">
                      {item.title}
                    </h4>
                    <p className="font-mono text-xs text-ink-faint mb-2">
                      {item.year} · {item.category}
                    </p>
                    <p className="text-sm text-ink-dim leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel p-6">
              <h3 className="font-mono text-lg font-semibold text-ink mb-5">
                Skills
              </h3>

              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="data-label mb-3">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <div
                          key={skill}
                          className="px-2.5 py-1 bg-surface-raised text-ink text-xs font-mono rounded border border-line"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
