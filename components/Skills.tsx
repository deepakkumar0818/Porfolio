'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Code, Database, Palette, Smartphone, Globe, Zap } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState(0)

  const skillCategories = [
    {
      name: 'Frontend',
      icon: Palette,
      skills: [
        { name: 'React', level: 95, years: '5+' },
        { name: 'Next.js', level: 90, years: '4+' },
        { name: 'TypeScript', level: 88, years: '3+' },
        { name: 'Tailwind CSS', level: 92, years: '4+' },
        { name: 'Framer Motion', level: 85, years: '2+' },
      ],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      name: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 90, years: '5+' },
        { name: 'Python', level: 85, years: '4+' },
        { name: 'PostgreSQL', level: 88, years: '4+' },
        { name: 'MongoDB', level: 82, years: '3+' },
        { name: 'Redis', level: 80, years: '2+' },
      ],
      color: 'from-emerald-500 to-green-600',
    },
    {
      name: 'Mobile',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 85, years: '3+' },
        { name: 'Flutter', level: 80, years: '2+' },
        { name: 'Swift', level: 75, years: '2+' },
        { name: 'Kotlin', level: 70, years: '1+' },
      ],
      color: 'from-purple-500 to-violet-600',
    },
    {
      name: 'DevOps',
      icon: Zap,
      skills: [
        { name: 'AWS', level: 85, years: '3+' },
        { name: 'Docker', level: 88, years: '4+' },
        { name: 'Kubernetes', level: 80, years: '2+' },
        { name: 'CI/CD', level: 82, years: '3+' },
      ],
      color: 'from-orange-500 to-red-600',
    },
    {
      name: 'Tools',
      icon: Code,
      skills: [
        { name: 'Git', level: 92, years: '6+' },
        { name: 'VS Code', level: 90, years: '5+' },
        { name: 'Figma', level: 75, years: '2+' },
        { name: 'Postman', level: 85, years: '3+' },
      ],
      color: 'from-indigo-500 to-blue-600',
    },
    {
      name: 'Other',
      icon: Globe,
      skills: [
        { name: 'AI/ML', level: 70, years: '1+' },
        { name: 'Blockchain', level: 65, years: '1+' },
        { name: 'Web3', level: 60, years: '1+' },
        { name: 'IoT', level: 55, years: '<1' },
      ],
      color: 'from-pink-500 to-rose-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels across different technologies.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <category.icon className="h-5 w-5" />
                  <span>{category.name}</span>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Skills Display */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{skill.name}</h4>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400">{skill.level}%</div>
                      <div className="text-sm text-gray-400">{skill.years} years</div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Summary Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '25+', label: 'Technologies Mastered' },
              { number: '4', label: 'Years of Experience' },
              { number: '95%', label: 'Average Proficiency' },
              { number: '100+', label: 'Projects Completed' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
