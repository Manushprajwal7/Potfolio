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
} from "lucide-react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { papers } from "@/lib/papers";

export function Achievements() {
  const achievements = [
    {
      image: "/achivements/achievement-4.jpg",
      title: "On Stage — Gen AI Exchange Hackathon",
      organization: "Google Cloud × Hack2skill",
      description:
        "Receiving the ₹50,000 prize on stage as a winning team at the Google Cloud Gen AI Exchange Hackathon. With 278K+ developers joined, 750K+ innovators reached, and 4,457 prototypes submitted, it was an honour to have our solution chosen as a winner.",
      tag: "₹50,000 Prize",
    },
    {
      image: "/achivements/achievement-3.jpg",
      title: "Prize Moment — Gen AI Exchange Hackathon",
      organization: "Google Cloud × Hack2skill",
      description:
        "Holding the prize cheque and trophy after being recognized as 3rd Runner-up at the Gen AI Exchange Hackathon.",
      tag: "Trophy",
    },
    {
      image: "/achivements/achievement-2.jpg",
      title: "1st Place — HackSetu, TATVA'26",
      organization: "BNM Institute of Technology",
      description:
        "Secured First Place in the HackSetu hackathon (Theme 2) at TATVA'26, the inter-collegiate techno-cultural fest held on 25th–26th March 2026.",
      tag: "Winner",
    },
    {
      image: "/achivements/achievement-5.jpg",
      title: "2nd Place — Innovatrium, LUMINUS 2026",
      organization: "RNS Institute of Technology",
      description:
        "Awarded II Place in the Innovatrium event for exceptional technical prowess and innovation at LUMINUS 2026, a National-Level Intercollegiate Tech Fest (April 8–9, 2026).",
      tag: "Runner-up",
    },
    {
      image: "/achivements/achievement-1.png",
      title: "3rd Runner-up — Gen AI Exchange Hackathon 2025",
      organization: "Google Cloud × Hack2skill",
      description:
        "Recognized as 3rd Runner-up for the problem statement “Optimizing Cement Operations with Generative AI”, demonstrating innovation and technical mastery with Google Cloud AI technologies.",
      tag: "Top 4",
    },
  ];

  const [selected, setSelected] = useState(null);

  const showPrev = () =>
    setSelected((i) => (i === 0 ? achievements.length - 1 : i - 1));
  const showNext = () =>
    setSelected((i) => (i === achievements.length - 1 ? 0 : i + 1));

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
  }, [selected]);

  return (
    <section
      id="achievements"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-24 left-24 w-72 h-72 bg-zinc-500/5 rounded-full blur-3xl" />
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
              <Trophy className="text-white" size={32} />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Achievements
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Recognitions, awards, and winning moments from hackathons and
            tech fests along the way.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelected(index)}
              className="relative group cursor-pointer"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/40 transition-colors duration-300 hover:shadow-2xl hover:shadow-white/10 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover bg-zinc-900 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Award size={12} />
                    {item.tag}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-zinc-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-medium mb-3">
                    {item.organization}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Research Papers card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: achievements.length * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/40 transition-colors duration-300 hover:shadow-2xl hover:shadow-white/10 h-full flex flex-col p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-zinc-800 rounded-xl border border-zinc-700">
                  <FileText className="text-white" size={24} />
                </div>
                <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                  13 Papers
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                Research Papers
              </h3>

              {/* Featured paper preview */}
              {(() => {
                const featured = papers.find((p) => p.featured) || papers[0];
                return (
                  <Link
                    href={featured.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-colors mb-4 overflow-hidden"
                  >
                    {/* Rendered first page of the PDF as a thumbnail */}
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
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 md:left-8 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 md:right-8 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
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
              <img
                src={achievements[selected].image}
                alt={achievements[selected].title}
                className="w-full max-h-[75vh] object-contain rounded-xl"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-white">
                  {achievements[selected].title}
                </h3>
                <p className="text-zinc-400 text-sm mt-1">
                  {achievements[selected].organization}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
