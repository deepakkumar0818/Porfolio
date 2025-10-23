'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Globe, Smartphone, Code, Database, Cloud, Zap } from 'lucide-react'

const ProjectCategories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = [
    {
      icon: Globe,
      name: 'Web Applications',
      count: 25,
      color: 'from-cyan-500 to-blue-600',
      description: 'Full-stack web applications built with modern frameworks',
    },
    {
      icon: Smartphone,
      name: 'Mobile Apps',
      count: 12,
      color: 'from-purple-500 to-violet-600',
      description: 'Native and cross-platform mobile applications',
    },
    {
      icon: Code,
      name: 'Frontend Projects',
      count: 18,
      color: 'from-emerald-500 to-green-600',
      description: 'Beautiful and responsive user interfaces',
    },
    {
      icon: Database,
      name: 'Backend Systems',
      count: 15,
      color: 'from-orange-500 to-red-600',
      description: 'Scalable APIs and backend architectures',
    },
    {
      icon: Cloud,
      name: 'Cloud Solutions',
      count: 10,
      color: 'from-blue-400 to-cyan-500',
      description: 'Cloud-native applications and infrastructure',
    },
    {
      icon: Zap,
      name: 'Open Source',
      count: 8,
      color: 'from-yellow-500 to-orange-500',
      description: 'Contributing to the developer community',
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
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              Project <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Diverse expertise across multiple domains and technologies
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="h-full p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -8 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="space-y-4">
                    {/* Icon & Count */}
                    <div className="flex items-start justify-between">
                      <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                        <category.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl sm:text-3xl font-bold text-cyan-400">{category.count}</div>
                        <div className="text-xs text-gray-400">projects</div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {category.description}
                    </p>

                    {/* Hover Effect */}
                    <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-300`} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectCategories

