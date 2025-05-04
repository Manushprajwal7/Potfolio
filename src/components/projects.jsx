"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Student Hub",
    description:
      "A college community website where students can raise issues, share resources, announce events, share scholarships, and list jobs.",
    image: "/studenthub.png",
    category: "web",
    github: "https://github.com/Manushprajwal7/student-hub-V2",
    live: "https://student-hub-mp.vercel.app/",
    tools: "Next.js, Firebase, Tailwind CSS",
  },
  {
    title: "Accessible Travel Destinations",
    description:
      "A website for disabled people to check destination accessibility.",
    image: "/accesstravel.png",
    category: "web",
    github: "https://github.com/Manushprajwal7/travel-guide",
    live: "https://accessdestinations.netlify.app",
    tools: "React, Express.js, MongoDB",
  },
  {
    title: "Trip Expenses Tracker",
    description:
      "A website for students to manage and efficiently share and track trip expenses.",
    image: "/tripexpenses.png",
    category: "web",
    github: "https://github.com/Manushprajwal7/V2-trip-expenses-tracker",
    live: "https://tripbudgettracker.vercel.app",
    tools: "React, Node.js, PostgreSQL",
  },

  {
    title: "The Hawk Fit Hub",
    description:
      "A freelance webpage for a gym focused on fitness services and community.",
    image: "/hawkfit.png",
    category: "web",
    github: "https://github.com/Manushprajwal7/hawkfithub",
    live: "https://thehawkfithub.vercel.app/",
    tools: "Next.js, Firebase, Tailwind CSS",
  },
  {
    title: "Student Voice",
    description:
      "A (SaaS) platform for students to voice their opinions and concerns at Colleges and Universities.",
    image: "/studentvoice.png",
    category: "web",
    github: "https://github.com/Manushprajwal7/student-voice",
    live: "https://student-voice-mp.vercel.app",
  },
  {
    title: "Bike Brains",
    description:
      "A (SaaS) platform where people can find jobs and share their issues regarding their bikes and cars.",
    image: "/bb_card.jpg",
    category: "web",
    github: "https://github.com/Manushprajwal7/BikeBrains",
    live: "#",
  },
  {
    title: "Intrusion Detection System",
    description:
      "A web-based project focusing on detecting and preventing unauthorized access using advanced technical methodologies.",
    image: "/ids_card.webp",
    category: "web",
    github:
      "https://github.com/Manushprajwal7/Advanced-intrusion-detection-system",
    live: "#",
  },
  {
    title: "Safe Step",
    description:
      "A (SaaS) health-focused platform designed to promote foot health through innovative monitoring and recommendations.",
    image: "/ss_card.png",
    category: "mobile",
    github: "https://github.com/Manushprajwal7/safestep",
    live: "#",
  },
];

export function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-foreground/80 mb-8">
            Here are some of my featured projects that showcase my skills and
            experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            <Button
              variant={filter === "web" ? "default" : "outline"}
              onClick={() => setFilter("web")}
            >
              Web Development
            </Button>
            <Button
              variant={filter === "mobile" ? "default" : "outline"}
              onClick={() => setFilter("mobile")}
            >
              Mobile Apps
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="flex-1 p-6">
                    <div className="aspect-video relative w-full mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    {project.tools && (
                      <p className="text-sm text-muted-foreground mt-2">
                        Tools: {project.tools}
                      </p>
                    )}
                  </CardHeader>
                  <CardFooter className="flex justify-end gap-4 p-6 pt-0">
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Projects;
