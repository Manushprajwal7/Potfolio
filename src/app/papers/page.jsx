"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, ArrowLeft, ExternalLink, Download } from "lucide-react";
import { papers } from "@/lib/papers";

export default function PapersPage() {
  return (
    <section className="min-h-screen bg-[#0a0c0f] relative overflow-hidden pt-28 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        <Link
          href="/#achievements"
          className="inline-flex items-center gap-2 font-mono text-sm text-ink-dim hover:text-signal transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          back to portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="eyebrow mb-4">$ ls papers/*.pdf</p>
          <h1 className="font-mono text-3xl md:text-4xl font-semibold text-ink mb-5">
            Research papers
          </h1>
          <p className="text-lg text-ink-dim leading-relaxed">
            A collection of research work spanning AI, photonic biosensors,
            blockchain, cloud systems, and cybersecurity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
          {papers.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="panel overflow-hidden hover:border-signal/40 transition-colors duration-300 flex flex-col"
            >
              <Link
                href={paper.file}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-48 bg-surface-raised overflow-hidden border-b border-line"
              >
                <object
                  data={`${paper.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  type="application/pdf"
                  className="pointer-events-none absolute -top-10 left-0 w-full h-[170%]"
                  aria-label={paper.title}
                >
                  <div className="flex h-full items-center justify-center text-ink-faint">
                    <FileText size={36} />
                  </div>
                </object>
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <FileText className="text-signal" size={20} />
                  <span className="font-mono text-xs text-ink-dim border border-line px-2.5 py-1 rounded">
                    {paper.venue}
                  </span>
                </div>

                <h2 className="font-mono font-semibold text-ink mb-3 leading-snug">
                  {paper.title}
                </h2>

                <p className="text-ink-dim text-sm leading-relaxed mb-4">
                  {paper.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {paper.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 text-ink-faint text-xs font-mono border border-line rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Link
                    href={paper.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-signal text-[#0a0c0f] rounded-md hover:bg-signal/90 transition-colors flex-1 justify-center text-sm font-semibold"
                  >
                    <ExternalLink size={16} />
                    Read paper
                  </Link>
                  <a
                    href={paper.file}
                    download
                    className="flex items-center gap-2 px-4 py-2 border border-line text-ink hover:border-signal/40 hover:text-signal rounded-md transition-colors justify-center text-sm"
                    aria-label="Download paper"
                  >
                    <Download size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
