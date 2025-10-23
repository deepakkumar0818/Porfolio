'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

const Newsletter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setEmail('')
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

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

  const benefits = [
    'Weekly web development tips and tutorials',
    'Early access to new articles and content',
    'Exclusive resources and code snippets',
    'No spam, unsubscribe anytime',
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden p-12 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10 border border-cyan-500/20 rounded-3xl backdrop-blur-xl"
          >
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10 space-y-8">
              {/* Icon */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center"
              >
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
                  <Mail className="h-12 w-12 text-white" />
                </div>
              </motion.div>

              {/* Header */}
              <motion.div variants={itemVariants} className="text-center space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                  Subscribe to <span className="gradient-text">Newsletter</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Join 5,000+ developers getting weekly insights on web development, best practices, and the latest tech trends.
                </p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-3 text-gray-300"
                  >
                    <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Subscription Form */}
              <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="relative">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={isLoading}
                          className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all backdrop-blur-xl disabled:opacity-50"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            <span>Subscribing...</span>
                          </>
                        ) : (
                          <>
                            <span>Subscribe</span>
                            <Send className="h-5 w-5" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-green-500/20 border border-green-500/30 rounded-xl text-center"
                  >
                    <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Successfully Subscribed! 🎉
                    </h3>
                    <p className="text-gray-300">
                      Thank you for subscribing! Check your email for a confirmation message.
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Privacy Note */}
              <motion.p
                variants={itemVariants}
                className="text-center text-sm text-gray-400"
              >
                We respect your privacy. Your email will never be shared with third parties.
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
              >
                {[
                  { number: '5K+', label: 'Subscribers' },
                  { number: '98%', label: 'Open Rate' },
                  { number: 'Weekly', label: 'Newsletter' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter

