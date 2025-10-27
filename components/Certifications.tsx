'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, CheckCircle, Calendar } from 'lucide-react'

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect - Professional',
      issuer: 'Amazon Web Services',
      date: 'Dec 2023',
      credentialId: 'AWS-PSA-12345',
      description: 'Advanced certification demonstrating expertise in designing distributed systems on AWS.',
      skills: ['Cloud Architecture', 'AWS Services', 'High Availability', 'Cost Optimization'],
      color: 'from-orange-500 to-amber-600',
      logo: '☁️',
    },
    {
      name: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: 'Sep 2023',
      credentialId: 'GCP-PCA-67890',
      description: 'Professional-level certification for designing and managing cloud solutions on GCP.',
      skills: ['GCP Services', 'Infrastructure', 'Security', 'Migration'],
      color: 'from-blue-500 to-cyan-600',
      logo: '☁️',
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: 'Jun 2023',
      credentialId: 'CKA-54321',
      description: 'Certification validating skills in Kubernetes cluster administration and management.',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Deployment'],
      color: 'from-blue-600 to-indigo-600',
      logo: '⎈',
    },
    {
      name: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Meta (via Coursera)',
      date: 'Mar 2023',
      credentialId: 'META-FE-98765',
      description: 'Comprehensive certification covering modern front-end development practices.',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'UI/UX Design'],
      color: 'from-blue-500 to-blue-700',
      logo: '⚛️',
    },
    {
      name: 'MongoDB Certified Developer Associate',
      issuer: 'MongoDB University',
      date: 'Jan 2023',
      credentialId: 'MONGO-DA-11223',
      description: 'Certification demonstrating proficiency in MongoDB database development.',
      skills: ['MongoDB', 'NoSQL', 'Database Design', 'Performance Tuning'],
      color: 'from-green-500 to-emerald-600',
      logo: '🍃',
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: 'Nov 2022',
      credentialId: 'DOCKER-CA-44556',
      description: 'Professional certification for containerization and Docker platform expertise.',
      skills: ['Docker', 'Containerization', 'Microservices', 'DevOps'],
      color: 'from-blue-400 to-cyan-500',
      logo: '🐳',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
              Certifications & <span className="gradient-text">Credentials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional certifications validating my expertise across various technologies and platforms.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="h-full p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -8 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="space-y-4">
                    {/* Logo & Badge */}
                    <div className="flex items-start justify-between">
                      <div className={`text-4xl p-3 rounded-xl bg-gradient-to-r ${cert.color} shadow-lg`}>
                        {cert.logo}
                      </div>
                      <div className="flex items-center space-x-1 px-3 py-1 bg-green-500/20 rounded-full">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-xs text-green-400 font-medium">Verified</span>
                      </div>
                    </div>

                    {/* Certification Name */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors">
                        {cert.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-cyan-400">
                        <Award className="h-4 w-4" />
                        <p className="text-sm font-medium">{cert.issuer}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium text-white bg-white/10 rounded-full border border-white/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl backdrop-blur-xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-500/20 rounded-xl">
                  <Award className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold text-white">Continuous Professional Development</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm committed to staying current with industry standards and best practices. All certifications 
                    are actively maintained through continuous learning and recertification when required. I regularly 
                    pursue new certifications to expand my expertise across emerging technologies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '6', label: 'Active Certifications' },
              { number: '3', label: 'Cloud Platforms' },
              { number: '100%', label: 'Pass Rate' },
              { number: 'Current', label: 'All Up to Date' },
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

export default Certifications

