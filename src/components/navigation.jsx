"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "/achievements", label: "achievements" },
  { href: "#resume", label: "resume" },
  { href: "#contact", label: "contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#0a0c0f]/90 backdrop-blur-sm text-ink z-50 border-b border-line">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-mono text-sm font-medium text-ink-dim hover:text-signal transition-colors"
          >
            manush<span className="text-signal">@</span>backend
            <span className="text-ink-faint">:~$</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ink-dim hover:text-signal transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-ink-faint">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-signal" />
            </span>
            available
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 text-ink hover:text-signal transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute w-full bg-[#0a0c0f]/95 backdrop-blur-sm border-b border-line"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col gap-4 font-mono text-sm">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-ink-dim hover:text-signal transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
