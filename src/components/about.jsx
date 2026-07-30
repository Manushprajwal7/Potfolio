"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const skills = [
  { name: "Node.js / NestJS", level: 90, note: "backend & REST APIs" },
  { name: "AWS", level: 85, note: "EC2, RDS, S3, Lambda, CloudWatch" },
  { name: "PostgreSQL", level: 85, note: "relational databases" },
  { name: "Docker & Terraform", level: 80, note: "infra as code" },
  { name: "LangChain / LangGraph", level: 75, note: "agentic AI systems" },
  { name: "Python & TypeScript", level: 85, note: "core languages" },
];

const stats = [
  { value: "11", label: "research publications" },
  { value: "4x", label: "hackathon winner" },
  { value: "₹104K", label: "atlas bill revenue in 47 days" },
  { value: "26+", label: "stores on atlas bill" },
];

const doing = [
  "Backend API design & development (Node.js, NestJS)",
  "Cloud infrastructure & DevOps (AWS, Terraform, Docker)",
  "Agentic AI systems (LangChain, LangGraph, n8n)",
  "Database design & optimization (PostgreSQL, Supabase, MongoDB)",
  "Multi-tenant SaaS & ERP architecture",
  "Infrastructure cost & FinOps automation",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0c0f] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="eyebrow mb-4">$ cat about.md</p>
          <h2 className="font-mono text-3xl md:text-4xl font-semibold text-ink mb-5">
            About
          </h2>
          <p className="text-lg text-ink-dim leading-relaxed">
            I'm a software engineer passionate about building scalable
            backend systems, cloud infrastructure, and AI-powered
            applications — currently Founding Engineer of Atlas Bill, a
            multi-tenant retail ERP, and a published researcher.
          </p>
        </motion.div>

        {/* Stats readout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 panel divide-x divide-y md:divide-y-0 divide-line mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="p-6">
              <div className="font-mono text-3xl font-semibold text-signal mb-2">
                {stat.value}
              </div>
              <div className="data-label normal-case tracking-normal text-ink-dim text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="panel p-8">
              <h3 className="font-mono text-xl font-semibold text-ink mb-5">
                Journey
              </h3>
              <p className="text-ink-dim leading-relaxed mb-4">
                As Founding Engineer of Atlas Bill, I built a multi-tenant
                retail ERP that onboarded 26 supermarkets across Karnataka
                and Tamil Nadu, generating ₹104K in revenue within 47 days
                and processing over ₹600K in monthly transaction value.
                Alongside engineering, I'm the author of 11 research papers
                — 9 IEEE conference papers and 2 journal papers — across
                machine learning, biosensor technology, distributed systems,
                and secure computing architectures.
              </p>
              <p className="text-ink-dim leading-relaxed mb-6">
                I'm a 4x hackathon winner, most recently recognized as 3rd
                runner-up at the Google Cloud Gen AI Exchange Hackathon 2025
                — a national-scale event that engaged 278K+ developers,
                reached 750K+ innovators, and received 4,457 prototype
                submissions.
              </p>
              <a
                href="https://ieeexplore.ieee.org/author/576786069332685"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-signal text-[#0a0c0f] font-semibold rounded-md hover:bg-signal/90 transition-colors text-sm"
              >
                IEEE Xplore author profile
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="panel p-8">
              <h3 className="font-mono text-xl font-semibold text-ink mb-5">
                What I do
              </h3>
              <ul className="space-y-3">
                {doing.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-ink-dim"
                  >
                    <span className="w-1.5 h-1.5 bg-signal rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="panel p-8"
          >
            <h3 className="font-mono text-xl font-semibold text-ink mb-8">
              Technical skills
            </h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="font-medium text-ink">
                        {skill.name}
                      </span>
                      <span className="text-ink-faint text-xs ml-2">
                        {skill.note}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-ink-dim">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative h-1.5 bg-line rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-signal rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-surface-raised rounded-md border border-line">
              <h4 className="font-mono text-sm font-semibold text-ink mb-2">
                Always learning
              </h4>
              <p className="text-sm text-ink-dim leading-relaxed">
                Constantly exploring new territory — from AI retrieval
                systems to multi-tenant cloud architectures — to ship
                reliable, high-impact solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
