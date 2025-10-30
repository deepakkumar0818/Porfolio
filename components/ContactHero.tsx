'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react'

const ContactHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center space-y-12"
        >
          {/* Hero Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <MessageCircle className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">Get In Touch</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Let's Work
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Together
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to start your next project? I'm here to help bring your ideas to life. 
              Whether you need a website, mobile app, or custom solution, let's discuss how 
              we can create something amazing together.
            </p>
          </motion.div>

          {/* Quick Contact Options */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Mail,
                title: 'Email Me',
                description: 'deepakkumr0818@gmail.com',
                href: 'mailto:deepakkumr0818@gmail.com',
                color: 'from-red-500 to-pink-600',
              },
              {
                icon: Phone,
                title: 'Call Me',
                description: '7018318078',
                href: 'tel:7018318078',
                color: 'from-green-500 to-emerald-600',
              },
              {
                icon: MapPin,
                title: 'Location',
                description: 'Mohali, Punjab',
                href: '#',
                color: 'from-blue-500 to-cyan-600',
              },
            ].map((contact, index) => (
              <motion.a
                key={contact.title}
                href={contact.href}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-white/20 transition-all duration-300 group"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${contact.color} shadow-lg mb-6`}>
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {contact.title}
                </h3>
                <p className="text-gray-300">{contact.description}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Response Time Info */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <div className="p-6 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-300 font-semibold">Quick Response Guaranteed</span>
              </div>
              <p className="text-gray-300">
                I typically respond to all inquiries within 24 hours. For urgent matters, feel free to call me directly.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero
