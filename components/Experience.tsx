'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: 'Helios Tech Labs',
      position: 'Software Developer',
      location: 'Mohali, Punjab',
      period: 'December 2024 – Present',
      description:
        'Building scalable web applications and optimizing system performance while delivering high‑performance solutions tailored to client requirements.',
      achievements: [
        'Proficient in Java, MERN, Zoho, and full‑stack development',
        'Hands‑on experience with cloud technologies and databases',
      ],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      company: 'Department Of Holistic Department',
      position: 'MERN Stack Developer',
      location: 'Mohali, Punjab',
      period: 'July 2024 – December 2024',
      description:
        'Developed robust and scalable full‑stack applications leveraging the MERN stack (MongoDB, Express.js, React, Node.js).',
      achievements: [
        'Engineered efficient RESTful APIs and optimized MongoDB schemas',
        'Ensured application scalability, reliability, and streamlined data communication',
      ],
      color: 'from-purple-500 to-violet-600',
    },
    {
      company: 'Hoping Minds',
      position: 'Intern',
      location: 'Mohali, Punjab',
      period: 'January 2024 – June 2024',
      description:
        'Built dynamic and responsive web applications using MongoDB, Express.js, React, and Node.js with strong focus on UX and performance.',
      achievements: [
        'Designed and implemented RESTful APIs for client–server communication',
        'Utilized MongoDB for data modeling, CRUD operations, and query optimization',
      ],
      color: 'from-emerald-500 to-green-600',
    },
    {
      company: 'Alles Global Solutions',
      position: 'MERN Stack Developer',
      location: 'Jalandhar, Punjab',
      period: '2022 – 2023',
      description:
        'Developed responsive web applications using HTML, CSS, JavaScript, React, and Next.js; improved performance through code optimization.',
      achievements: [
        'Collaborated with teams using Git/GitHub for version control and reviews',
        'Ensured smooth, efficient workflows across projects',
      ],
      color: 'from-orange-500 to-red-600',
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
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My journey through the tech industry, building impactful solutions and growing as a developer.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent hidden md:block" />
                )}

                <motion.div
                  className="relative p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.01, y: -5 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 top-8 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg hidden md:block`} />

                  <div className="md:pl-12 space-y-6">
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                          <div className="flex items-center space-x-2">
                            <Briefcase className="h-5 w-5 text-cyan-400" />
                            <span className="text-lg text-cyan-400 font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${exp.color} text-white font-medium shadow-lg`}>
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-white">Key Achievements:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, i) => (
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

          {/* Summary Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '4', label: 'Years Experience' },
              { number: '4', label: 'Companies Worked With' },
              { number: '50+', label: 'Projects Delivered' },
              { number: '100K+', label: 'Users Impacted' },
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

export default Experience

