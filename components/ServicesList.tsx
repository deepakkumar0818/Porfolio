'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Smartphone, 
  Database, 
  Cloud, 
  Palette, 
  Rocket,
  Globe,
  Zap,
  ShoppingCart,
  LineChart
} from 'lucide-react'

const ServicesList = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building beautiful, responsive, and performant user interfaces using modern frameworks like React, Next.js, and Vue.js.',
      features: [
        'Responsive Web Design',
        'Single Page Applications',
        'Progressive Web Apps',
        'Performance Optimization',
      ],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Creating robust and scalable server-side applications with RESTful APIs, GraphQL, and microservices architecture.',
      features: [
        'RESTful & GraphQL APIs',
        'Database Design & Optimization',
        'Authentication & Authorization',
        'Server-Side Logic',
      ],
      color: 'from-emerald-500 to-green-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Developing native and cross-platform mobile applications for iOS and Android with React Native and Flutter.',
      features: [
        'iOS & Android Apps',
        'Cross-Platform Development',
        'Native Performance',
        'App Store Deployment',
      ],
      color: 'from-purple-500 to-violet-600',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Deploying and managing applications on cloud platforms like AWS, Azure, and Google Cloud with CI/CD pipelines.',
      features: [
        'Cloud Infrastructure Setup',
        'CI/CD Pipeline Configuration',
        'Serverless Architecture',
        'Performance Monitoring',
      ],
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces with a focus on user experience and modern design principles.',
      features: [
        'Wireframing & Prototyping',
        'User Interface Design',
        'User Experience Research',
        'Design Systems',
      ],
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Building complete e-commerce platforms with payment processing, inventory management, and admin dashboards.',
      features: [
        'Shopping Cart Integration',
        'Payment Gateway Setup',
        'Inventory Management',
        'Order Tracking System',
      ],
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Globe,
      title: 'Full Stack Development',
      description: 'End-to-end application development covering both frontend and backend with seamless integration.',
      features: [
        'Complete Web Applications',
        'Database to UI Integration',
        'API Development & Integration',
        'Third-party Services',
      ],
      color: 'from-indigo-500 to-purple-600',
    },
    {
      icon: LineChart,
      title: 'Performance Optimization',
      description: 'Optimizing web applications for speed, SEO, and user experience with modern best practices.',
      features: [
        'Page Load Optimization',
        'SEO Enhancement',
        'Code Splitting & Lazy Loading',
        'Analytics Integration',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Rocket,
      title: 'MVP Development',
      description: 'Rapidly building Minimum Viable Products to validate your ideas and get to market quickly.',
      features: [
        'Rapid Prototyping',
        'Core Feature Development',
        'User Testing & Feedback',
        'Iterative Improvements',
      ],
      color: 'from-teal-500 to-emerald-600',
    },
    {
      icon: Zap,
      title: 'Consulting & Code Review',
      description: 'Providing expert advice on architecture, code quality, and best practices for your development projects.',
      features: [
        'Architecture Review',
        'Code Quality Analysis',
        'Performance Audits',
        'Technical Documentation',
      ],
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
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              What I <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive development services to bring your digital vision to life
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="h-full p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -8 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-2 text-gray-300">
                          <span className="text-cyan-400 mt-1">✓</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover Effect */}
                    <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} rounded-full transition-all duration-300`} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center p-12 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <span>Get in Touch</span>
              <Rocket className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesList

