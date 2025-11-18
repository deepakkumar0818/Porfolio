'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { getAllProjects } from '@/lib/projectsData'

const ProjectsGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const allProjects = getAllProjects()
  const projects = allProjects.map((project, index) => ({
    id: index + 1,
    ...project,
    github: project.links.github,
    demo: project.links.demo,
    // Keep emoji as fallback if no image
    emoji: project.image ? null : getEmojiForProject(project.slug),
  }))

  function getEmojiForProject(slug: string): string {
    const emojiMap: { [key: string]: string } = {
      'erp-manufacturing-system': '🏭',
      'doc-spot-doctor-appointment-system': '🩺',
      'food-delivery-application': '🍔',
      'student-portal': '🎓',
      'real-estate-management-system': '🏘️',
      'real-estate-rental-management': '🏠',
      'farmer-procurement-application': '🌾',
      'inventory-and-warehousing-system': '📦',
      'accounting-system': '📚',
      'hrms': '👥',
      'school-management-system': '🏫',
      'fleet-management-system': '🚚',
    }
    return emojiMap[slug] || '📱'
  }

  function getColorForProject(slug: string): string {
    const colorMap: { [key: string]: string } = {
      'erp-manufacturing-system': 'from-emerald-500 to-green-600',
      'doc-spot-doctor-appointment-system': 'from-cyan-500 to-blue-600',
      'food-delivery-application': 'from-orange-500 to-red-600',
      'student-portal': 'from-blue-400 to-cyan-500',
      'real-estate-management-system': 'from-pink-500 to-rose-600',
      'real-estate-rental-management': 'from-purple-500 to-violet-600',
      'farmer-procurement-application': 'from-lime-500 to-green-600',
      'inventory-and-warehousing-system': 'from-amber-500 to-yellow-600',
      'accounting-system': 'from-sky-500 to-indigo-600',
      'hrms': 'from-fuchsia-500 to-pink-600',
      'school-management-system': 'from-red-500 to-rose-600',
      'fleet-management-system': 'from-slate-500 to-gray-600',
    }
    return colorMap[slug] || 'from-cyan-500 to-blue-600'
  }

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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my latest work and see how I bring ideas to life
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="h-full p-5 sm:p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -8 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="block cursor-pointer"
                  >
                    <div className="space-y-4">
                      {/* Project Icon/Image */}
                      <div className={`p-5 sm:p-6 rounded-xl bg-gradient-to-r ${getColorForProject(project.slug)} shadow-lg flex items-center justify-center overflow-hidden`}>
                        {project.image ? (
                          <div className="relative w-full h-32 sm:h-40">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-contain"
                              unoptimized
                            />
                          </div>
                        ) : (
                          <span className="text-5xl sm:text-6xl">{project.emoji}</span>
                        )}
                      </div>

                      {/* Category & Date */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 font-medium">
                          {project.category}
                        </span>
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>{project.date}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium text-white bg-white/10 rounded-full border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>

                  {/* Links - Outside of the Link component */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                    <a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Load More Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsGrid

