'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'React Native', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'MongoDB/Firebase', level: 75 },
  { name: 'JavaScript/TypeScript', level: 85 },
]

export function About() {
  return (
    (<section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-foreground/80">
            I'm a dedicated web and mobile application developer with a passion for creating seamless digital experiences. 
            My journey in development started with a curiosity for building things that make a difference, 
            and it has evolved into a professional pursuit of excellence in both web and mobile development.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>)
  );
}

