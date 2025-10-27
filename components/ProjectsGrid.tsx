'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import Link from 'next/link'

const ProjectsGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      slug: 'ecommerce-platform',
      description: 'A full-stack e-commerce solution with advanced features including real-time inventory, payment processing, and admin dashboard.',
      image: '🛍️',
      category: 'Web App',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      date: '2024',
      github: '#',
      demo: '#',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      slug: 'social-media-dashboard',
      description: 'Analytics dashboard for managing multiple social media accounts with real-time data visualization and scheduling.',
      image: '📊',
      category: 'Web App',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Chart.js'],
      date: '2024',
      github: '#',
      demo: '#',
      color: 'from-purple-500 to-violet-600',
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      slug: 'fitness-tracking-app',
      description: 'Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
      image: '💪',
      category: 'Mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
      date: '2023',
      github: '#',
      demo: '#',
      color: 'from-emerald-500 to-green-600',
    },
    {
      id: 4,
      title: 'AI Content Generator',
      slug: 'ai-content-generator',
      description: 'AI-powered tool for generating blog posts, social media content, and marketing copy using advanced language models.',
      image: '🤖',
      category: 'Web App',
      technologies: ['Python', 'FastAPI', 'OpenAI', 'React'],
      date: '2024',
      github: '#',
      demo: '#',
      color: 'from-orange-500 to-red-600',
    },
    {
      id: 5,
      title: 'Project Management Tool',
      slug: 'project-management-tool',
      description: 'Collaborative project management platform with kanban boards, time tracking, and team communication features.',
      image: '📋',
      category: 'Full Stack',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'Redis'],
      date: '2023',
      github: '#',
      demo: '#',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      slug: 'real-estate-platform',
      description: 'Property listing and management system with virtual tours, mortgage calculator, and advanced search filters.',
      image: '🏡',
      category: 'Web App',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox'],
      date: '2023',
      github: '#',
      demo: '#',
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 7,
      title: 'Weather Forecast App',
      slug: 'weather-forecast-app',
      description: 'Beautiful weather application with detailed forecasts, weather alerts, and location-based recommendations.',
      image: '🌤️',
      category: 'Mobile',
      technologies: ['Flutter', 'Dart', 'OpenWeather API', 'SQLite'],
      date: '2023',
      github: '#',
      demo: '#',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 8,
      title: 'Recipe Sharing Network',
      slug: 'recipe-sharing-network',
      description: 'Community platform for sharing recipes, meal planning, and generating shopping lists with nutritional information.',
      image: '👨‍🍳',
      category: 'Web App',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS S3'],
      date: '2023',
      github: '#',
      demo: '#',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      id: 9,
      title: 'Cryptocurrency Tracker',
      slug: 'cryptocurrency-tracker',
      description: 'Real-time cryptocurrency portfolio tracker with price alerts, news aggregation, and market analysis tools.',
      image: '₿',
      category: 'Web App',
      technologies: ['React', 'Node.js', 'WebSocket', 'CoinGecko API'],
      date: '2023',
      github: '#',
      demo: '#',
      color: 'from-amber-500 to-yellow-600',
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
                      <div className={`text-5xl sm:text-6xl p-5 sm:p-6 rounded-xl bg-gradient-to-r ${project.color} shadow-lg flex items-center justify-center`}>
                        {project.image}
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

