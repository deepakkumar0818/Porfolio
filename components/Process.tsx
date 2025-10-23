'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Lightbulb, FileSearch, Code2, TestTube, Rocket, HeadphonesIcon } from 'lucide-react'

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: Lightbulb,
      number: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your goals, target audience, and project requirements. Together, we define the scope and create a roadmap for success.',
      deliverables: ['Project Brief', 'Timeline', 'Technical Specifications'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: FileSearch,
      number: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and interactive prototypes to visualize the user experience and ensure we\'re aligned on the design direction.',
      deliverables: ['Wireframes', 'UI/UX Design', 'Interactive Prototype'],
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: Code2,
      number: '03',
      title: 'Development',
      description: 'Building your application with clean, maintainable code following best practices. Regular updates keep you informed of progress.',
      deliverables: ['Working Application', 'Code Repository', 'Documentation'],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: TestTube,
      number: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing across devices and browsers to ensure everything works flawlessly. We catch bugs before your users do.',
      deliverables: ['Test Reports', 'Bug Fixes', 'Performance Optimization'],
      color: 'from-purple-500 to-violet-600',
    },
    {
      icon: Rocket,
      number: '05',
      title: 'Deployment',
      description: 'Launching your application with proper configuration, monitoring, and optimization. We ensure a smooth transition to production.',
      deliverables: ['Live Application', 'Deployment Guide', 'Analytics Setup'],
      color: 'from-emerald-500 to-green-600',
    },
    {
      icon: HeadphonesIcon,
      number: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support to keep your application running smoothly. Updates, bug fixes, and improvements as your needs evolve.',
      deliverables: ['Regular Updates', 'Bug Fixes', 'Feature Enhancements'],
      color: 'from-blue-400 to-cyan-500',
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
              My <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures quality results and transparent collaboration
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="relative"
                >
                  <motion.div
                    className="flex flex-col md:flex-row gap-8 items-start"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Number Circle */}
                    <div className="flex-shrink-0 relative">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg z-10 relative`}>
                        <span className="text-white font-bold text-xl">{step.number}</span>
                      </div>
                      {/* Connecting Line */}
                      {index !== steps.length - 1 && (
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-cyan-500/50 to-transparent md:hidden" />
                      )}
                    </div>

                    {/* Content Card */}
                    <motion.div
                      className="flex-1 p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.01, y: -5 }}
                    >
                      <div className="space-y-4">
                        {/* Icon & Title */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-3 flex-1">
                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${step.color} shadow-lg`}>
                              <step.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {step.description}
                        </p>

                        {/* Deliverables */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                            Key Deliverables
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((deliverable) => (
                              <span
                                key={deliverable}
                                className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-full border border-white/20"
                              >
                                {deliverable}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Let's discuss how we can work together to achieve your goals.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <span>Let's Get Started</span>
              <Rocket className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process

