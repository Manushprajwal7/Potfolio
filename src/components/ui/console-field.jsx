"use client";
import { motion } from "framer-motion";

// Ambient backdrop for the hero: a quiet instrument grid with a single
// slow-moving scan line, standing in for the "systems" the copy talks about.
export function ConsoleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(95,232,199,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(95,232,199,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c0f] via-transparent to-[#0a0c0f]" />
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-signal/40 to-transparent"
        initial={{ top: "-5%" }}
        animate={{ top: ["-5%", "105%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-24 -left-24 w-80 h-80 bg-signal/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber/5 rounded-full blur-[120px]" />
    </div>
  );
}
