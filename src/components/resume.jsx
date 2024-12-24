"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, GraduationCap, Briefcase, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor's in Computer Science and Engineering ",
    institution: "The Oxford College of Engineering ",
    year: "2023 - 2027",
    description:
      "Focused on web and mobile development, with coursework in algorithms, data structures,Open Source Contribution, and software engineering.",
  },
];

const experience = [
  {
    position: "Web Development Intern",
    company: "Tech Company Name",
    year: "2022 - 2023",
    description:
      "Developed and maintained web applications using React and Next.js. Collaborated with senior developers on various projects.",
  },
];

const achievements = [
  {
    title: "Research Paper Published",
    year: "2023",
    description: "Diabetes mellitus detection using optical ring resonators ",
  },
];

export function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <p className="text-foreground/80 mb-6">
            My educational background, work experience, and achievements.
          </p>
          {/* Download Resume Button */}
          <Button className="bg-blue-600 hover:bg-blue-700">
            <a
              href="/Resume.pdf" // Ensure resume.pdf is in the public folder
              download="My_Resume.pdf" // Custom file name for downloaded file
              className="flex items-center text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-semibold">{item.degree}</h3>
                    <p className="text-sm text-foreground/60">
                      {item.institution}
                    </p>
                    <p className="text-sm text-foreground/60">{item.year}</p>
                    <p className="text-sm mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-semibold">{item.position}</h3>
                    <p className="text-sm text-foreground/60">{item.company}</p>
                    <p className="text-sm text-foreground/60">{item.year}</p>
                    <p className="text-sm mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements Section */}
          <Card className="lg:col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-foreground/60">{item.year}</p>
                    <p className="text-sm mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
