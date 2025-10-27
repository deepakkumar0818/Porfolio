'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Smartphone, Cloud, Brain, Shield, Plug } from 'lucide-react'
import Link from 'next/link'

const ServicesPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web applications with modern frameworks and best practices.',
      features: ['React/Next.js', 'Node.js/Python', 'Database Design', 'API Development'],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with native performance.',
      features: ['React Native', 'Flutter', 'iOS/Android', 'App Store Deployment'],
      color: 'from-emerald-500 to-green-600',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies.',
      features: ['AWS/Azure', 'Docker/Kubernetes', 'CI/CD Pipelines', 'DevOps'],
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Plug,
      title: 'Zoho Integration',
      description: 'Automate and unify your workflows across the Zoho suite.',
      features: ['Zoho CRM', 'Zoho Books', 'Zoho Desk', 'Zoho Flow Automation'],
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Shield,
      title: 'Security & Performance',
      description: 'Secure, fast, and reliable applications that scale.',
      features: ['Security Audits', 'Performance Optimization', 'Code Reviews', 'Testing'],
      color: 'from-teal-500 to-cyan-600',
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-6 py-3 backdrop-blur-sm mb-6">
              <Code className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">Services</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              What I <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive development services to bring your ideas to life with cutting-edge technology and exceptional quality.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-xl p-8"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Service Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <span>View All Services</span>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-1"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
