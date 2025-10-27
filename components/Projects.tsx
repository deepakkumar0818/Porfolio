'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Play } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'ERP Manufacturing System',
      description: 'End-to-end ERP for manufacturing: production planning, inventory, BOM, procurement, finance, and shop-floor tracking with real-time dashboards.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js 14', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'Redis', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'ERP',
      status: 'Live',
      metrics: { plants: '5+', uptime: '99.9%', SKUs: '15K+' },
      color: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Doctor Appointment System',
      description: 'Multi-clinic booking with doctor schedules, tele-consultation, e-prescriptions, reminders, and online payments.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Stripe', 'Twilio', 'PostgreSQL', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'Healthcare',
      status: 'Beta',
      metrics: { bookings: '20K+/mo', waitTime: '-35%', clinics: '50+' },
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Cloud-Native Microservices',
      description: 'Containerized microservices architecture with auto-scaling and service mesh implementation.',
      image: '/api/placeholder/600/400',
      technologies: ['Kubernetes', 'Docker', 'Go', 'gRPC', 'Prometheus', 'Istio'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      category: 'DevOps',
      status: 'Production',
      metrics: { uptime: '99.95%', scale: '10x', latency: '<100ms' },
      color: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'Blockchain', 'Biometric Auth', 'Encryption'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Mobile',
      status: 'Live',
      metrics: { users: '50K+', security: 'Bank-grade', rating: '4.9★' },
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'IoT Smart Home Hub',
      description: 'Connected home automation system with voice control and energy optimization.',
      image: '/api/placeholder/600/400',
      technologies: ['IoT', 'MQTT', 'React', 'Node.js', 'Machine Learning', 'WebRTC'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'IoT',
      status: 'Development',
      metrics: { devices: '100+', efficiency: '30%', savings: '$500/yr' },
      color: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Real-time Collaboration Suite',
      description: 'Advanced collaboration platform with video conferencing, document editing, and project management.',
      image: '/api/placeholder/600/400',
      technologies: ['WebRTC', 'WebSocket', 'React', 'Express', 'MongoDB', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      category: 'Real-time',
      status: 'Live',
      metrics: { users: '25K+', meetings: '1M+', satisfaction: '98%' },
      color: 'from-teal-500 to-cyan-600',
    },
  ]

  const categories = ['All', 'Full Stack', 'Frontend', 'Web App', 'CMS', 'Portfolio', 'Real-time']

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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Premium Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-3 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <ExternalLink className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">Featured Work</span>
              </motion.div>
              
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                My <span className="gradient-text">Projects</span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Innovative solutions that combine <span className="text-purple-400 font-semibold">cutting-edge technology</span> with exceptional user experience to drive real business results.
              </p>
            </div>
          </motion.div>

          {/* Premium Featured Projects */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Featured Projects</h3>
              <p className="text-gray-400">Showcasing innovative solutions that drive business growth</p>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {projects
                .filter(project => project.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-xl"
                    whileHover={{ y: -10, scale: 1.01 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div className="p-8">
                      {/* Project Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-4">
                            <span className={`px-4 py-2 text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent border border-white/20 rounded-full backdrop-blur-sm`}>
                              {project.category}
                            </span>
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              project.status === 'Live' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                              project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                              'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            }`}>
                              {project.status}
                            </span>
                            <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">Featured</span>
                          </div>
                          
                          <h4 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                            {project.title}
                          </h4>
                          
                          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <motion.div
                            key={key}
                            className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="text-2xl font-bold text-white mb-1">{value}</div>
                            <div className="text-sm text-gray-400 capitalize">{key}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h5 className="text-lg font-semibold text-white mb-4">Technologies Used</h5>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              className="px-4 py-2 text-sm bg-white/10 border border-white/20 rounded-full text-gray-300 hover:text-white hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
                              whileHover={{ scale: 1.05, y: -2 }}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="group/btn flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <span>View Live Demo</span>
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-1"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </motion.div>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        </motion.a>
                        
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-cyan-400/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                        >
                          <Github className="h-5 w-5" />
                          <span>Source Code</span>
                        </motion.a>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold text-white">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(project => !project.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Project Image */}
                    <div className="relative h-32 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center">
                        <Play className="h-8 w-8 text-white/50" />
                      </div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-primary-400 bg-primary-400/10 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h4>
                      
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-white/10 rounded-full text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-white/10 rounded-full text-gray-300">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-2 rounded-lg text-xs font-medium text-center hover:shadow-lg transition-all duration-300"
                        >
                          Live
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 border border-white/30 text-white px-3 py-2 rounded-lg text-xs font-medium text-center hover:bg-white/10 transition-all duration-300"
                        >
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <p className="text-gray-300 text-lg">
              Interested in working together or have a project in mind?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let's Discuss Your Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
