"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Award,
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  ArrowRight,
  Medal,
} from "lucide-react";
import { ExternalLink } from "lucide-react";
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
      tag: "₹50,000 Prize",
      category: "Hackathon",
      date: "2025",
    },
    {
      image: "/achivements/achievement-3.jpg",
      title: "Prize Moment — Gen AI Exchange Hackathon",
      organization: "Google Cloud × Hack2skill",
      description:
        "Holding the prize cheque and trophy after being recognized as 3rd Runner-up at the Gen AI Exchange Hackathon.",
      tag: "Trophy",
      category: "Hackathon",
      date: "2025",
    },
    {
      image: "/achivements/achievement-2.jpg",
      title: "1st Place — HackSetu, TATVA'26",
      organization: "BNM Institute of Technology",
      description:
        "Secured First Place in the HackSetu hackathon (Theme 2) at TATVA'26, the inter-collegiate techno-cultural fest held on 25th–26th March 2026.",
      tag: "Winner",
      category: "Hackathon",
      date: "2026",
    },
    {
      image: "/achivements/achievement-5.jpg",
      title: "2nd Place — Innovatrium, LUMINUS 2026",
      organization: "RNS Institute of Technology",
      description:
        "Awarded II Place in the Innovatrium event for exceptional technical prowess and innovation at LUMINUS 2026, a National-Level Intercollegiate Tech Fest (April 8–9, 2026).",
      tag: "Runner-up",
      category: "Tech Fest",
      date: "2026",
    },
    {
      image: "/achivements/achievement-1.png",
      title: "3rd Runner-up — Gen AI Exchange Hackathon 2025",
      organization: "Google Cloud × Hack2skill",
      description:
        'Recognized as 3rd Runner-up for the problem statement "Optimizing Cement Operations with Generative AI", demonstrating innovation and technical mastery with Google Cloud AI technologies.',
      tag: "Top 4",
      category: "Hackathon",
      date: "2025",
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
    setSelected((i) =>
      i === filteredAchievements.length - 1 ? 0 : i + 1
    );

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
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute top-32 right-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-24 left-24 w-72 h-72 bg-zinc-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="p-4 bg-zinc-800 rounded-2xl shadow-lg border border-zinc-700">
                <Trophy className="text-white" size={40} />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Achievements
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Recognitions, awards, and winning moments from hackathons and tech
              fests along the way. A collection of achievements spanning
              competitions, innovation, and technical excellence.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilter(cat);
                    setSelected(null);
                  }}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === cat
                      ? "bg-white text-black shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredAchievements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelected(index)}
                  className="relative group cursor-pointer h-full"
                >
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover bg-zinc-900 transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                          <Award size={12} />
                          {item.tag}
                        </span>
                        <span className="px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full border border-white/20">
                          {item.date}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="inline-flex items-center gap-2 mb-3">
                        <Medal size={16} className="text-yellow-400" />
                        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-zinc-300 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-400 font-medium mb-3">
                        {item.organization}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed flex-1">
                        {item.description}
                      </p>
                      <div className="mt-4 text-xs text-zinc-500 flex items-center gap-1">
                        <ArrowRight size={12} />
                        Click to view
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Research Papers Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group h-full"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 h-full flex flex-col p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-zinc-800 rounded-xl border border-zinc-700">
                    <FileText className="text-white" size={24} />
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-400 to-cyan-500 text-white text-xs font-bold rounded-full">
                    13 Papers
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  Research Papers
                </h3>

                {(() => {
                  const featured = papers.find((p) => p.featured) || papers[0];
                  return (
                    <Link
                      href={featured.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-colors mb-4 overflow-hidden"
                    >
                      <div className="relative h-44 bg-zinc-900 overflow-hidden">
                        <object
                          data={`${featured.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                          type="application/pdf"
                          className="pointer-events-none absolute -top-8 left-0 w-full h-[160%]"
                          aria-label={featured.title}
                        >
                          <div className="flex h-full items-center justify-center text-zinc-500">
                            <FileText size={32} />
                          </div>
                        </object>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-zinc-400 font-medium">
                          {featured.venue}
                        </span>
                        <p className="text-sm text-white font-semibold mt-1 leading-snug line-clamp-3">
                          {featured.title}
                        </p>
                      </div>
                    </Link>
                  );
                })()}

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Author of 13 research papers — 9 IEEE conference papers and 4
                  journal papers — across machine learning, photonic biosensors,
                  distributed systems, and secure computing.
                </p>

                <div className="mt-auto flex flex-col gap-3">
                  <Link
                    href="/papers"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors group/btn"
                  >
                    View All Papers
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Link>
                  <a
                    href="https://ieeexplore.ieee.org/author/576786069332685"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/40 transition-colors"
                  >
                    IEEE Xplore Profile
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Empty State */}
          {filteredAchievements.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <Trophy size={48} className="mx-auto text-zinc-600 mb-4" />
              <p className="text-zinc-400 text-lg">
                No achievements in this category yet.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-white/10 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { number: "5", label: "Hackathons & Tech Fests" },
              { number: "13", label: "Research Papers" },
              { number: "9", label: "IEEE Conference Papers" },
              { number: "₹50K+", label: "Prize Money Won" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-colors text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <p className="text-zinc-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
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
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 pt-24"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 md:left-8 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 md:right-8 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <div className="rounded-xl overflow-hidden">
                <img
                  src={filteredAchievements[selected]?.image}
                  alt={filteredAchievements[selected]?.title}
                  className="w-full max-h-[60vh] object-contain"
                />
              </div>
              <div className="text-center mt-6 px-4">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Medal size={16} className="text-yellow-400" />
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
                    {filteredAchievements[selected]?.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {filteredAchievements[selected]?.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">
                  {filteredAchievements[selected]?.organization}
                </p>
                <p className="text-gray-300 max-w-2xl">
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
