"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "email",
    value: "manushprajwal1@gmail.com",
    href: "mailto:manushprajwal1@gmail.com",
  },
  {
    icon: Phone,
    title: "phone",
    value: "+91 98447 75528",
    href: "tel:+919844775528",
  },
  { icon: MapPin, title: "location", value: "Bangalore, India", href: "#" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Manushprajwal7", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/manush-prajwal-16a883294/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/_manushprajwal",
    label: "Twitter",
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        toast.success("Message sent — I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        toast.error(data.error || "Couldn't send that. Try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Couldn't send that — check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0c0f] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="eyebrow mb-4">$ mail --send</p>
          <h2 className="font-mono text-3xl md:text-4xl font-semibold text-ink mb-5">
            Get in touch
          </h2>
          <p className="text-lg text-ink-dim leading-relaxed">
            Have a question or want to work together? Send a message and
            I'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="panel p-8">
                <h3 className="font-mono text-lg font-semibold text-ink mb-6">
                  Let's connect
                </h3>
                <p className="text-ink-dim mb-8 leading-relaxed text-sm">
                  Open to discussing backend roles, freelance projects, or
                  just a conversation about systems and architecture.
                </p>

                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-center gap-4">
                      <div className="p-2.5 border border-line rounded-md text-signal shrink-0">
                        <info.icon size={18} />
                      </div>
                      <div>
                        <p className="data-label">{info.title}</p>
                        <a
                          href={info.href}
                          className="text-ink hover:text-signal transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel p-8">
                <h3 className="font-mono text-lg font-semibold text-ink mb-6">
                  Follow
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 border border-line rounded-md text-ink-dim hover:text-signal hover:border-signal/40 transition-colors"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="panel p-8">
                <h3 className="font-mono text-lg font-semibold text-ink mb-6">
                  Send a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-ink font-medium mb-2 text-sm">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-3 bg-surface-raised border border-line rounded-md text-ink placeholder-ink-faint focus:outline-none focus:border-signal transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-ink font-medium mb-2 text-sm">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full px-4 py-3 bg-surface-raised border border-line rounded-md text-ink placeholder-ink-faint focus:outline-none focus:border-signal transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-ink font-medium mb-2 text-sm">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="w-full px-4 py-3 bg-surface-raised border border-line rounded-md text-ink placeholder-ink-faint focus:outline-none focus:border-signal transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-ink font-medium mb-2 text-sm">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or question..."
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-surface-raised border border-line rounded-md text-ink placeholder-ink-faint focus:outline-none focus:border-signal transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3.5 bg-signal text-[#0a0c0f] font-semibold rounded-md hover:bg-signal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#0a0c0f]/30 border-t-[#0a0c0f] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send message
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </button>
                </form>

                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 p-6 bg-surface-raised border border-signal/30 rounded-md flex items-center gap-4"
                  >
                    <CheckCircle className="text-signal shrink-0" size={22} />
                    <div>
                      <h4 className="text-ink font-semibold text-sm">
                        Message sent
                      </h4>
                      <p className="text-ink-dim text-sm mt-1">
                        Thanks for reaching out — I'll get back to you within
                        24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="mt-6 p-4 border border-line rounded-md flex items-center gap-3 text-ink-dim text-sm">
                  <Clock size={18} className="text-signal shrink-0" />
                  I typically respond within 24 hours
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
