"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, ArrowLeft, ExternalLink, Download } from "lucide-react";
import { papers } from "@/lib/papers";

export default function PapersPage() {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden pt-28 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-24 left-24 w-72 h-72 bg-zinc-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Link
          href="/#achievements"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="p-4 bg-zinc-800 rounded-2xl shadow-lg border border-zinc-700">
              <FileText className="text-white" size={32} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Research Papers
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my research work spanning AI, photonic biosensors,
            blockchain, cloud systems, and cybersecurity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {papers.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 flex flex-col overflow-hidden"
            >
              {/* Rendered first page of the PDF as a thumbnail */}
              <Link
                href={paper.file}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-52 bg-zinc-900 overflow-hidden border-b border-white/10"
              >
                <object
                  data={`${paper.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  type="application/pdf"
                  className="pointer-events-none absolute -top-10 left-0 w-full h-[170%]"
                  aria-label={paper.title}
                >
                  <div className="flex h-full items-center justify-center text-zinc-500">
                    <FileText size={40} />
                  </div>
                </object>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </Link>

              <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-zinc-800 rounded-xl border border-zinc-700">
                  <FileText className="text-white" size={22} />
                </div>
                <span className="px-3 py-1 bg-white/10 text-zinc-300 text-xs font-medium rounded-full border border-white/20">
                  {paper.venue}
                </span>
              </div>

              <h2 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-zinc-300 transition-colors">
                {paper.title}
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {paper.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {paper.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2.5 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
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
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg transition-colors hover:bg-zinc-200 flex-1 justify-center text-sm font-semibold"
                >
                  <ExternalLink size={16} />
                  Read Paper
                </Link>
                <a
                  href={paper.file}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/20 hover:border-white/40 justify-center text-sm font-semibold"
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
