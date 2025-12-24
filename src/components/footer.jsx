"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

// Footer Component
export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex space-x-6 mb-6">
            {[
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
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 hover:bg-white text-gray-400 hover:text-black rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-gray-400"
          >
            © {new Date().getFullYear()} Manush Prajwal. All rights reserved.
            Built with ❤️ and React.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
