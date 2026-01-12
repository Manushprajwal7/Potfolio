"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  AlertCircle,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(
        "Failed to send message. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "manushprajwal555@gmail.com",
      href: "mailto:manushprajwal555@gmail.com",
      color: "from-red-500 to-red-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangalore, India",
      href: "#",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Clock,
      title: "Available",
      value: "Mon - Fri, 9AM - 6PM IST",
      href: "#",
      color: "from-red-500 to-red-600",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Manushprajwal7",
      label: "GitHub",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/manush-prajwal-16a883294/",
      label: "LinkedIn",
      color: "from-zinc-700 to-zinc-900",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/_manushprajwal",
      label: "Twitter",
      color: "from-zinc-300 to-zinc-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-500/5 rounded-full blur-3xl" />
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
              <MessageSquare className="text-white" size={32} />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
            Send me a message and I'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg">
                    <MessageSquare className="text-white" size={24} />
                  </div>
                  Let's Connect
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, creative
                  projects, or just having a chat about technology and
                  development. Feel free to reach out!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="flex items-center gap-4 group"
                    >
                      <div
                        className={`p-3 bg-gradient-to-r ${info.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        <info.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{info.title}</p>
                        <a
                          href={info.href}
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`p-4 bg-gradient-to-r ${social.color} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <social.icon size={24} className="text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg">
                    <Send className="text-white" size={24} />
                  </div>
                  Send Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-white font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-white font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-white font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or question..."
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-zinc-500 focus:bg-white/10 transition-all duration-300 resize-none"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="w-full px-8 py-4 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-zinc-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                        <ArrowRight
                          size={20}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Success Message */}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-white text-black rounded-full">
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-green-400 font-semibold text-lg">
                          Message Sent Successfully! 🎉
                        </h4>
                        <p className="text-green-300 text-sm mt-1">
                          Thank you for reaching out! I'll get back to you
                          within 24 hours.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Info Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl"
                >
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle size={20} />
                    <p className="text-sm">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Backend Engineering Opportunities?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss backend architecture, API development, or
              microservices projects you're working on.
            </p>
            <motion.a
              href="/MP_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl shadow-lg hover:bg-zinc-200 transition-all duration-300"
            >
              <Mail size={20} />
              View Resume / Contact
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
