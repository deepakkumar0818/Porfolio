'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Operations Director, TechVenture India',
      company: 'TechVenture India',
      content: 'Working with Deepak Kumar was an absolute pleasure. They delivered a stunning ERP system for our manufacturing unit that exceeded our expectations. The attention to detail and technical expertise is unmatched.',
      rating: 5,
      image: '/api/placeholder/100/100',
      project: 'ERP Manufacturing System',
    },
    {
      name: 'Rajesh Patel',
      role: 'CTO, HealthCare Solutions',
      company: 'HealthCare Solutions',
      content: 'The Doctor Appointment System they built for us has revolutionized how we manage patient bookings. The performance improvements and user experience enhancements are remarkable.',
      rating: 5,
      image: '/api/placeholder/100/100',
      project: 'Doctor Appointment System',
    },
    {
      name: 'Ananya Reddy',
      role: 'Product Manager, Digital Innovations Pvt. Ltd.',
      company: 'Digital Innovations Pvt. Ltd.',
      content: 'From concept to deployment, the entire process was smooth and professional. They understood our vision and brought it to life with cutting-edge technology. Highly recommend for Zoho integrations.',
      rating: 5,
      image: '/api/placeholder/100/100',
      project: 'Zoho CRM Integration',
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-6 py-3 backdrop-blur-sm mb-6">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-300">Testimonials</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              What Clients <span className="gradient-text">Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what industry leaders say about working with me.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-xl p-8"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="h-8 w-8 text-cyan-400" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Project Info */}
                <div className="mb-6">
                  <span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">
                    Project: {testimonial.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Happy Clients', color: 'text-cyan-400' },
              { number: '100+', label: 'Projects Completed', color: 'text-blue-400' },
              { number: '99%', label: 'Client Satisfaction', color: 'text-emerald-400' },
              { number: '5★', label: 'Average Rating', color: 'text-yellow-400' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
