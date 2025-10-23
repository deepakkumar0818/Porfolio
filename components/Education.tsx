'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2015 - 2017',
      description: 'Specialized in Software Engineering and Artificial Intelligence. Focused on distributed systems, machine learning, and advanced algorithms.',
      achievements: [
        'GPA: 3.9/4.0',
        'Dean\'s List for Academic Excellence',
        'Published 2 research papers in AI conferences',
        'Teaching Assistant for Data Structures course',
      ],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2011 - 2015',
      description: 'Comprehensive foundation in computer science principles, including programming, algorithms, databases, and software engineering.',
      achievements: [
        'GPA: 3.8/4.0',
        'Graduated Magna Cum Laude',
        'President of Computer Science Club',
        'Winner of Annual Hackathon Competition 2014',
      ],
      color: 'from-purple-500 to-violet-600',
    },
  ]

  const onlineCourses = [
    {
      title: 'Advanced React Patterns',
      platform: 'Frontend Masters',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AWS Solutions Architect',
      platform: 'A Cloud Guru',
      icon: Award,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Machine Learning Specialization',
      platform: 'Coursera',
      icon: Trophy,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'System Design Interview',
      platform: 'Educative.io',
      icon: BookOpen,
      color: 'from-emerald-500 to-green-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
              Education & <span className="gradient-text">Learning</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My academic background and continuous learning journey to stay at the forefront of technology.
            </p>
          </motion.div>

          {/* Formal Education */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                className="relative"
              >
                <motion.div
                  className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.01, y: -5 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                          <div className="flex items-center space-x-2">
                            <GraduationCap className="h-5 w-5 text-cyan-400" />
                            <span className="text-lg text-cyan-400 font-medium">{edu.institution}</span>
                          </div>
                          <p className="text-gray-400">{edu.location}</p>
                        </div>
                        <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${edu.color} text-white font-medium shadow-lg`}>
                          {edu.period}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-white">Highlights:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-3 text-gray-300">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Online Courses & Certifications */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-white">Continuous Learning</h3>
              <p className="text-lg text-gray-300">
                Staying current with the latest technologies through online courses and certifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {onlineCourses.map((course, index) => (
                <motion.div
                  key={course.title}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="space-y-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${course.color} shadow-lg`}>
                      <course.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-white">{course.title}</h4>
                      <p className="text-sm text-gray-400">{course.platform}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: '2', label: 'Degrees Earned' },
              { number: '20+', label: 'Online Courses Completed' },
              { number: '∞', label: 'Learning Never Stops' },
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

export default Education

