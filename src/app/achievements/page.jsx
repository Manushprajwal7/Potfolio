"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { papers } from "@/lib/papers";

export default function AchievementsPage() {
  const achievements = [
    {
      image: "/achivements/achievement-4.jpg",
      title: "On Stage — Gen AI Exchange Hackathon",
      organization: "Google Cloud × Hack2skill",
      description:
        'Receiving the ₹50,000 prize on stage as a winning team at the Google Cloud Gen AI Exchange Hackathon. With 278K+ developers joined, 750K+ innovators reached, and 4,457 prototypes submitted, it was an honour to have our solution chosen as a winner.',
      tag: "₹50,000 prize",
      category: "Hackathon",
      date: "2025",
    },
    {
      image: "/achivements/achievement-3.jpg",
      title: "Prize Moment — Gen AI Exchange Hackathon",
      organization: "Google Cloud × Hack2skill",
      description:
        "Holding the prize cheque and trophy after being recognized as 3rd Runner-up at the Gen AI Exchange Hackathon.",
      tag: "trophy",
      category: "Hackathon",
      date: "2025",
    },
    {
      image: "/achivements/achievement-2.jpg",
      title: "1st Place — HackSetu, TATVA'26",
      organization: "BNM Institute of Technology",
      description:
        "Secured First Place in the HackSetu hackathon (Theme 2) at TATVA'26, the inter-collegiate techno-cultural fest held on 25th–26th March 2026.",
      tag: "winner",
      category: "Hackathon",
      date: "2026",
    },
    {
      image: "/achivements/achievement-5.jpg",
      title: "2nd Place — Innovatrium, LUMINUS 2026",
      organization: "RNS Institute of Technology",
      description:
        "Awarded II Place in the Innovatrium event for exceptional technical prowess and innovation at LUMINUS 2026, a National-Level Intercollegiate Tech Fest (April 8–9, 2026).",
      tag: "runner-up",
      category: "Tech Fest",
      date: "2026",
    },
    {
      image: "/achivements/achievement-1.png",
      title: "3rd Runner-up — Gen AI Exchange Hackathon 2025",
      organization: "Google Cloud × Hack2skill",
      description:
        'Recognized as 3rd Runner-up for the problem statement "Optimizing Cement Operations with Generative AI", demonstrating innovation and technical mastery with Google Cloud AI technologies.',
      tag: "top 4",
      category: "Hackathon",
      date: "2025",
    },
    {
      image: "/achivements/oxford-certificate.jpeg",
      title: "Oxford Certificate",
      organization: "University of Oxford",
      description:
        "This certificate was won for a Blockchain Hackathon among 232 students. Earned prestigious certification from the University of Oxford, demonstrating expertise and academic excellence in specialized coursework.",
      tag: "certificate",
      category: "Certification",
      date: "2026",
    },
    {
      image: "/achivements/internship_certificate.jpeg",
      title: "Research Intern — Machine Learning & Photonic Biosensors",
      organization: "IEEE Photonics Society, Bengaluru",
      description:
        "Achieved 90.03% diabetes-detection accuracy by engineering a diagnostic framework that integrated machine learning models with photonic biosensor measurements. Improved biosensor data quality by reducing signal noise by 40% through preprocessing, normalization, feature extraction, and experimental validation pipelines. Presented validated research outcomes at INDIACom 2024 and IEEE ICCCNP 2025.",
      tag: "internship",
      category: "Certification",
      date: "Oct 2023 – Jan 2024",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...new Set(achievements.map((a) => a.category))];
  const filteredAchievements =
    filter === "all"
      ? achievements
      : achievements.filter((a) => a.category === filter);

  const showPrev = () =>
    setSelected((i) => (i === 0 ? filteredAchievements.length - 1 : i - 1));
  const showNext = () =>
    setSelected((i) => (i === filteredAchievements.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, filter]);

  return (
    <div className="min-h-screen bg-[#0a0c0f] pt-24">
      {/* Header */}
      <section className="relative overflow-hidden py-16">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-10"
          >
            <p className="eyebrow mb-4">$ curl achievements --all</p>
            <h1 className="font-mono text-4xl md:text-5xl font-semibold text-ink mb-5">
              Achievements
            </h1>
            <p className="text-lg text-ink-dim leading-relaxed">
              Recognitions, awards, and winning moments from hackathons and
              tech fests — plus the research and internship work behind them.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setSelected(null);
                }}
                className={`px-4 py-2 rounded-md font-mono text-xs transition-colors ${
                  filter === cat
                    ? "bg-signal text-[#0a0c0f]"
                    : "text-ink-dim border border-line hover:border-signal/40 hover:text-signal"
                }`}
              >
                {cat.toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredAchievements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  onClick={() => setSelected(index)}
                  className="panel overflow-hidden cursor-pointer hover:border-signal/40 transition-colors duration-300 h-full flex flex-col"
                >
                  <div className="relative overflow-hidden border-b border-line">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover bg-surface-raised"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <span className="px-2.5 py-1 bg-[#0a0c0f]/80 backdrop-blur-sm text-amber text-xs font-mono rounded border border-amber/30">
                        {item.tag}
                      </span>
                      <span className="px-2.5 py-1 bg-[#0a0c0f]/80 backdrop-blur-sm text-ink-dim text-xs font-mono rounded border border-line">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <p className="data-label mb-3">{item.category}</p>
                    <h3 className="font-mono font-semibold text-ink mb-1 leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-signal font-medium mb-3">
                      {item.organization}
                    </p>
                    <p className="text-ink-dim text-sm leading-relaxed flex-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredAchievements.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-ink-dim font-mono text-sm">
                no achievements in this category yet.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Research Papers Section */}
      <section className="py-20 border-t border-line relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <p className="eyebrow mb-4">$ ls papers/*.pdf</p>
            <h2 className="font-mono text-3xl md:text-4xl font-semibold text-ink mb-5">
              Research papers
            </h2>
            <p className="text-lg text-ink-dim leading-relaxed">
              Author of 11 research papers — 9 IEEE conference papers and 2
              journal papers — across machine learning, photonic biosensors,
              distributed systems, and secure computing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {papers.map((paper) => (
              <div
                key={paper.title}
                className="panel overflow-hidden hover:border-signal/40 transition-colors duration-300 flex flex-col h-full"
              >
                <Link
                  href={paper.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-44 bg-surface-raised overflow-hidden border-b border-line"
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
                    <FileText className="text-signal" size={18} />
                    <span className="font-mono text-xs text-ink-dim border border-line px-2.5 py-1 rounded">
                      {paper.venue}
                    </span>
                  </div>

                  <h3 className="text-base font-mono font-semibold text-ink mb-3 leading-snug line-clamp-3">
                    {paper.title}
                  </h3>

                  <p className="text-ink-dim text-sm leading-relaxed mb-4 flex-1">
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
                      Read
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
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://ieeexplore.ieee.org/author/576786069332685"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-line text-ink font-semibold rounded-md hover:border-signal/40 hover:text-signal transition-colors"
            >
              View IEEE Xplore profile
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-[#0a0c0f]/95 backdrop-blur-sm flex items-center justify-center p-4 pt-24"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 p-2 text-ink-dim hover:text-signal bg-surface border border-line rounded-md transition-colors z-10"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 md:left-8 p-2 text-ink-dim hover:text-signal bg-surface border border-line rounded-md transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 md:right-8 p-2 text-ink-dim hover:text-signal bg-surface border border-line rounded-md transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <div className="rounded-md overflow-hidden border border-line">
                <img
                  src={filteredAchievements[selected]?.image}
                  alt={filteredAchievements[selected]?.title}
                  className="w-full max-h-[60vh] object-contain bg-surface"
                />
              </div>
              <div className="text-center mt-6 px-4">
                <p className="data-label mb-3">
                  {filteredAchievements[selected]?.category}
                </p>
                <h3 className="font-mono text-2xl font-semibold text-ink mb-2">
                  {filteredAchievements[selected]?.title}
                </h3>
                <p className="text-signal text-sm mb-4">
                  {filteredAchievements[selected]?.organization}
                </p>
                <p className="text-ink-dim max-w-2xl mx-auto">
                  {filteredAchievements[selected]?.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
