"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight, FileDown } from "lucide-react";
import { ConsoleField } from "@/components/ui/console-field";

const socialLinks = [
  { icon: Github, href: "https://github.com/Manushprajwal7", label: "GitHub" },
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

const readout = [
  { key: "service", value: "manush-prajwal" },
  { key: "role", value: "founding eng, atlas bill" },
  { key: "stack", value: "node · nestjs · postgres · aws" },
  { key: "hackathons", value: "4x winner" },
  { key: "papers", value: "11 published" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#0a0c0f] pt-28 pb-16"
    >
      <ConsoleField />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="eyebrow mb-6">$ whoami</p>

            <h1 className="font-mono font-semibold text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.08] mb-6">
              Manush Prajwal
              <span className="block text-ink-dim mt-2">
                builds backend systems
                <br />
                that hold under load.
              </span>
            </h1>

            <p className="text-lg text-ink-dim mb-10 leading-relaxed max-w-xl">
              I build scalable backend systems, cloud infrastructure, and
              AI-powered applications with Node.js, NestJS, PostgreSQL,
              Docker, and AWS. Founding Engineer of Atlas Bill, a
              multi-tenant retail ERP serving 26 stores. 4x hackathon winner
              and author of 11 research publications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#projects"
                className="group px-6 py-3.5 bg-signal text-[#0a0c0f] font-semibold rounded-md hover:bg-signal/90 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                See the work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="/MP_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-line text-ink font-semibold rounded-md hover:border-signal/50 hover:text-signal transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <FileDown size={18} />
                Resume
              </a>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 border border-line rounded-md text-ink-dim hover:text-signal hover:border-signal/40 transition-colors duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="panel overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-surface-raised">
                <span className="w-2.5 h-2.5 rounded-full bg-ink-faint/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-ink-faint/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-ink-faint/40" />
                <span className="ml-3 data-label">status.sh</span>
              </div>

              <div className="p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-60" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-signal" />
                  </span>
                  <span className="text-signal">operational</span>
                  <span className="text-ink-faint ml-auto">open to work</span>
                </div>

                <dl className="space-y-3">
                  {readout.map((row) => (
                    <div
                      key={row.key}
                      className="flex items-baseline justify-between gap-4 pb-3 border-b border-line/60 last:border-0 last:pb-0"
                    >
                      <dt className="text-ink-faint shrink-0">{row.key}</dt>
                      <dd className="text-ink text-right truncate">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
