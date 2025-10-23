'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'

const BlogGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const posts = [
    {
      id: 1,
      title: 'Building Scalable Applications with Next.js 14',
      slug: 'building-scalable-applications-nextjs-14',
      excerpt: 'Explore the latest features in Next.js 14 and learn how to build performant, scalable web applications with server components and improved routing.',
      category: 'Next.js',
      date: 'Dec 15, 2023',
      readTime: '8 min read',
      image: '🚀',
      color: 'from-cyan-500 to-blue-600',
      tags: ['Next.js', 'React', 'Performance'],
    },
    {
      id: 2,
      title: 'Mastering TypeScript: Advanced Types and Patterns',
      slug: 'mastering-typescript-advanced-types',
      excerpt: 'Deep dive into TypeScript\'s advanced type system. Learn about utility types, conditional types, and how to write type-safe code.',
      category: 'TypeScript',
      date: 'Dec 10, 2023',
      readTime: '12 min read',
      image: '📘',
      color: 'from-blue-500 to-indigo-600',
      tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    },
    {
      id: 3,
      title: 'React Performance Optimization Techniques',
      slug: 'react-performance-optimization',
      excerpt: 'Learn practical techniques to optimize your React applications, from memoization to code splitting and lazy loading.',
      category: 'React',
      date: 'Dec 5, 2023',
      readTime: '10 min read',
      image: '⚡',
      color: 'from-purple-500 to-violet-600',
      tags: ['React', 'Performance', 'Optimization'],
    },
    {
      id: 4,
      title: 'Modern CSS: Grid, Flexbox, and Container Queries',
      slug: 'modern-css-grid-flexbox-container-queries',
      excerpt: 'Master modern CSS layout techniques and learn how to create responsive designs with Grid, Flexbox, and the new Container Queries.',
      category: 'CSS',
      date: 'Nov 28, 2023',
      readTime: '9 min read',
      image: '🎨',
      color: 'from-pink-500 to-rose-600',
      tags: ['CSS', 'Web Design', 'Responsive'],
    },
    {
      id: 5,
      title: 'Node.js Best Practices for Production',
      slug: 'nodejs-best-practices-production',
      excerpt: 'Essential practices for building robust Node.js applications, including error handling, logging, security, and performance monitoring.',
      category: 'Node.js',
      date: 'Nov 22, 2023',
      readTime: '11 min read',
      image: '🟢',
      color: 'from-emerald-500 to-green-600',
      tags: ['Node.js', 'Backend', 'Best Practices'],
    },
    {
      id: 6,
      title: 'Building Real-time Apps with WebSockets',
      slug: 'building-realtime-apps-websockets',
      excerpt: 'Learn how to implement real-time features in your web applications using WebSockets, Socket.io, and modern approaches.',
      category: 'Web Development',
      date: 'Nov 15, 2023',
      readTime: '10 min read',
      image: '🔌',
      color: 'from-orange-500 to-red-600',
      tags: ['WebSockets', 'Real-time', 'JavaScript'],
    },
    {
      id: 7,
      title: 'Database Design Patterns for Modern Apps',
      slug: 'database-design-patterns-modern-apps',
      excerpt: 'Explore common database design patterns, from SQL to NoSQL, and learn when to use each approach for optimal performance.',
      category: 'Database',
      date: 'Nov 8, 2023',
      readTime: '13 min read',
      image: '💾',
      color: 'from-blue-400 to-cyan-500',
      tags: ['Database', 'SQL', 'NoSQL'],
    },
    {
      id: 8,
      title: 'Securing Your Web Applications',
      slug: 'securing-web-applications',
      excerpt: 'Comprehensive guide to web application security, covering authentication, authorization, CSRF, XSS, and other common vulnerabilities.',
      category: 'Security',
      date: 'Nov 1, 2023',
      readTime: '15 min read',
      image: '🔒',
      color: 'from-yellow-500 to-orange-500',
      tags: ['Security', 'Authentication', 'Best Practices'],
    },
    {
      id: 9,
      title: 'DevOps Essentials: CI/CD Pipelines',
      slug: 'devops-essentials-cicd-pipelines',
      excerpt: 'Learn how to set up automated CI/CD pipelines for your applications using GitHub Actions, Docker, and cloud platforms.',
      category: 'DevOps',
      date: 'Oct 25, 2023',
      readTime: '12 min read',
      image: '⚙️',
      color: 'from-indigo-500 to-purple-600',
      tags: ['DevOps', 'CI/CD', 'Automation'],
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
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In-depth tutorials, insights, and thoughts on modern web development
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <motion.article
                    className="h-full p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-white/20 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02, y: -8 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="space-y-4">
                      {/* Image/Emoji */}
                      <div className={`text-6xl p-6 rounded-xl bg-gradient-to-r ${post.color} shadow-lg flex items-center justify-center`}>
                        {post.image}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium text-white bg-white/10 rounded-full border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-cyan-400 group-hover:text-cyan-300 transition-colors font-medium">
                          <span className="text-sm">Read More</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
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
              Load More Articles
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogGrid

