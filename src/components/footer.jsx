"use client";

import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socials = [
  {
    href: "https://github.com/Manushprajwal7",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/manush-prajwal-16a883294/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/_manushprajwal",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/manushprajwal._",
    icon: Instagram,
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0c0f] py-10 border-t border-line">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-mono text-xs text-ink-faint">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-signal" />
            </span>
            © {new Date().getFullYear()} manush prajwal — built with node,
            next.js & care
          </div>

          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-line rounded-md text-ink-dim hover:text-signal hover:border-signal/40 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
