'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const FeaturedProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const featuredProjects = [
    {
      title: 'ERP Manufacturing System',
      description: 'End-to-end ERP for manufacturing: production planning, inventory, BOM, procurement, finance, and shop-floor tracking with real-time dashboards.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js 14', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL'],
      liveUrl: '/projects/erp-manufacturing',
      githubUrl: '#',
      category: 'ERP',
      status: 'Live',
      metrics: { plants: '5+', uptime: '99.9%', SKUs: '15K+' },
      color: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Doctor Appointment System',
      description: 'Multi-clinic booking with doctor schedules, tele-consultation, e-prescriptions, reminders, and online payments.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Stripe', 'Twilio', 'PostgreSQL'],
      liveUrl: '/projects/doctor-appointment-system',
      githubUrl: '#',
      category: 'Healthcare',
      status: 'Beta',
      metrics: { bookings: '20K+/mo', waitTime: '-35%', clinics: '50+' },
      color: 'from-cyan-500 to-blue-600',
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-3 backdrop-blur-sm mb-6">
              <ExternalLink className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Featured Work</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing innovative solutions that combine cutting-edge technology with exceptional user experience.
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-xl"
                whileHover={{ y: -10, scale: 1.01 }}
              >
                <div className="p-8">
                  {/* Project Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent border border-white/20 rounded-full backdrop-blur-sm`}>
                        {project.category}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        project.status === 'Live' ? 'bg-emerald-500/20 text-emerald-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-white/5 border border-white/10 rounded-lg">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-white/10 border border-white/20 rounded-full text-gray-300 hover:text-white hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Link
                      href={project.liveUrl}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-lg text-sm font-medium text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>View Project</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    
                    <a
                      href={project.githubUrl}
                      className="flex-1 border border-white/30 text-white px-4 py-3 rounded-lg text-sm font-medium text-center hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
