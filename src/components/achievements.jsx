"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { papers } from "@/lib/papers";

export function Achievements() {
  const achievements = [
    {
      image: "/achivements/achievement-4.jpg",
      title: "On Stage — Gen AI Exchange Hackathon",
      organization: "Google Cloud × Hack2skill",
      description:
        'Receiving the ₹50,000 prize on stage as a winning team at the Google Cloud Gen AI Exchange Hackathon. With 278K+ developers joined, 750K+ innovators reached, and 4,457 prototypes submitted, it was an honour to have our solution chosen as a winner.',
      tag: "₹50,000 prize",
    },
    {
      image: "/achivements/achievement-3.jpg",
      title: "Prize Moment — Gen AI Exchange Hackathon",
      organization: "Google Cloud × Hack2skill",
      description:
        "Holding the prize cheque and trophy after being recognized as 3rd Runner-up at the Gen AI Exchange Hackathon.",
      tag: "trophy",
    },
    {
      image: "/achivements/achievement-2.jpg",
      title: "1st Place — HackSetu, TATVA'26",
      organization: "BNM Institute of Technology",
      description:
        "Secured First Place in the HackSetu hackathon (Theme 2) at TATVA'26, the inter-collegiate techno-cultural fest held on 25th–26th March 2026.",
      tag: "winner",
    },
    {
      image: "/achivements/achievement-5.jpg",
      title: "2nd Place — Innovatrium, LUMINUS 2026",
      organization: "RNS Institute of Technology",
      description:
        "Awarded II Place in the Innovatrium event for exceptional technical prowess and innovation at LUMINUS 2026, a National-Level Intercollegiate Tech Fest (April 8–9, 2026).",
      tag: "runner-up",
    },
    {
      image: "/achivements/achievement-1.png",
      title: "3rd Runner-up — Gen AI Exchange Hackathon 2025",
      organization: "Google Cloud × Hack2skill",
      description:
        "Recognized as 3rd Runner-up for the problem statement “Optimizing Cement Operations with Generative AI”, demonstrating innovation and technical mastery with Google Cloud AI technologies.",
      tag: "top 4",
    },
    {
      image: "/achivements/oxford-certificate.jpeg",
      title: "Oxford Certificate",
      organization: "University of Oxford",
      description:
        "This certificate was won for a Blockchain Hackathon among 232 students. Earned prestigious certification from the University of Oxford, demonstrating expertise and academic excellence in specialized coursework.",
      tag: "certificate",
    },
    {
      image: "/achivements/internship_certificate.jpeg",
      title: "Research Intern — Machine Learning & Photonic Biosensors",
      organization: "IEEE Photonics Society, Bengaluru",
      description:
        "Achieved 90.03% diabetes-detection accuracy by engineering a diagnostic framework that integrated machine learning models with photonic biosensor measurements. Improved biosensor data quality by reducing signal noise by 40% through preprocessing, normalization, feature extraction, and experimental validation pipelines. Presented validated research outcomes at INDIACom 2024 and IEEE ICCCNP 2025.",
      tag: "internship",
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
      className="py-24 bg-[#0a0c0f] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="eyebrow mb-4">$ curl achievements</p>
          <h2 className="font-mono text-3xl md:text-4xl font-semibold text-ink mb-5">
            Achievements
          </h2>
          <p className="text-lg text-ink-dim leading-relaxed">
            Recognitions, awards, and winning moments from hackathons and
            tech fests along the way.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              onClick={() => setSelected(index)}
              className="panel overflow-hidden cursor-pointer hover:border-signal/40 transition-colors duration-300 h-full flex flex-col"
            >
              <div className="relative overflow-hidden border-b border-line">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover bg-surface-raised"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#0a0c0f]/80 backdrop-blur-sm text-amber text-xs font-mono rounded border border-amber/30">
                  {item.tag}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-mono font-semibold text-ink mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-signal font-medium mb-3">
                  {item.organization}
                </p>
                <p className="text-ink-dim text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Research Papers card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: achievements.length * 0.06 }}
            viewport={{ once: true }}
            className="panel p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <FileText className="text-signal" size={22} />
              <span className="px-2.5 py-1 bg-[#0a0c0f]/80 text-amber text-xs font-mono rounded border border-amber/30">
                11 papers
              </span>
            </div>

            <h3 className="font-mono font-semibold text-ink mb-2">
              Research papers
            </h3>

            {(() => {
              const featured = papers.find((p) => p.featured) || papers[0];
              return (
                <Link
                  href={featured.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-surface-raised rounded-md border border-line hover:border-signal/40 transition-colors mb-4 overflow-hidden"
                >
                  <div className="relative h-40 bg-[#0a0c0f] overflow-hidden">
                    <object
                      data={`${featured.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      type="application/pdf"
                      className="pointer-events-none absolute -top-8 left-0 w-full h-[160%]"
                      aria-label={featured.title}
                    >
                      <div className="flex h-full items-center justify-center text-ink-faint">
                        <FileText size={28} />
                      </div>
                    </object>
                  </div>
                  <div className="p-4">
                    <span className="data-label">{featured.venue}</span>
                    <p className="text-sm text-ink font-medium mt-1 leading-snug line-clamp-3">
                      {featured.title}
                    </p>
                  </div>
                </Link>
              );
            })()}

            <p className="text-ink-dim text-sm leading-relaxed mb-4">
              Author of 11 research papers — 9 IEEE conference papers and 2
              journal papers — across machine learning, photonic biosensors,
              distributed systems, and secure computing.
            </p>

            <div className="mt-auto flex flex-col gap-3">
              <Link
                href="/papers"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-signal text-[#0a0c0f] font-semibold rounded-md hover:bg-signal/90 transition-colors text-sm"
              >
                View all papers
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://ieeexplore.ieee.org/author/576786069332685"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-line text-ink font-semibold rounded-md hover:border-signal/40 hover:text-signal transition-colors text-sm"
              >
                IEEE Xplore profile
                <ExternalLink size={14} />
              </a>
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
            className="fixed inset-0 z-[100] bg-[#0a0c0f]/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 p-2 text-ink-dim hover:text-signal bg-surface border border-line rounded-md transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 md:left-8 p-2 text-ink-dim hover:text-signal bg-surface border border-line rounded-md transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 md:right-8 p-2 text-ink-dim hover:text-signal bg-surface border border-line rounded-md transition-colors"
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
              <img
                src={achievements[selected].image}
                alt={achievements[selected].title}
                className="w-full max-h-[75vh] object-contain rounded-md"
              />
              <div className="text-center mt-4">
                <h3 className="font-mono text-xl font-semibold text-ink">
                  {achievements[selected].title}
                </h3>
                <p className="text-signal text-sm mt-1">
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
