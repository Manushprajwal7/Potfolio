"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Smartphone,
  Code,
  Zap,
  Database,
  Palette,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Heart,
} from "lucide-react";

export function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const skills = [
    {
      name: "React Native",
      level: 90,
      icon: <Smartphone size={20} />,
      color: "from-blue-500 to-cyan-500",
      description: "Mobile app development",
    },
    {
      name: "Next.js",
      level: 85,
      icon: <Code size={20} />,
      color: "from-gray-700 to-gray-900",
      description: "Full-stack web development",
    },
    {
      name: "Node.js",
      level: 80,
      icon: <Zap size={20} />,
      color: "from-green-500 to-emerald-500",
      description: "Backend development",
    },
    {
      name: "MongoDB/Firebase",
      level: 75,
      icon: <Database size={20} />,
      color: "from-green-600 to-yellow-500",
      description: "Database management",
    },
    {
      name: "JavaScript/TypeScript",
      level: 85,
      icon: <Code size={20} />,
      color: "from-yellow-500 to-orange-500",
      description: "Programming languages",
    },
    {
      name: "UI/UX Design",
      level: 78,
      icon: <Palette size={20} />,
      color: "from-pink-500 to-purple-500",
      description: "User experience design",
    },
  ];

  const stats = [
    { icon: Target, value: "15+", label: "Projects Completed" },
    { icon: TrendingUp, value: "2+", label: "Years Experience" },
    { icon: Heart, value: "100%", label: "Client Satisfaction" },
    { icon: Lightbulb, value: "24/7", label: "Problem Solving" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[length:20px_20px]" />
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
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
              <Users className="text-white" size={32} />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a dedicated Full Stack web application developer with a passion
            for creating seamless digital experiences. My journey in development
            started with curiosity and has evolved into a professional pursuit
            of excellence.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-4">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Starting as a curious learner, I've developed expertise in
                modern web technologies . I believe in creating solutions that
                not only work well but also provide exceptional user
                experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to meaningfull Reaserch publication,or sharing
                knowledge with the developer community.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-blue-500/20 dark:border-purple-500/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                What I Do
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Full-stack web development
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  Mobile app development
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  UI/UX design
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full" />
                  Database design & management
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                <Target className="text-white" size={24} />
              </div>
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="space-y-3 group"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} shadow-lg`}
                      >
                        <div className="text-white">{skill.icon}</div>
                      </motion.div>
                      <div>
                        <span className="font-semibold text-gray-800 dark:text-white">
                          {skill.name}
                        </span>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{
                        duration: 2,
                        delay: index * 0.1 + 0.5,
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
            >
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                Always Learning
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                I'm constantly exploring new technologies and frameworks to stay
                ahead of the curve and deliver cutting-edge solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
