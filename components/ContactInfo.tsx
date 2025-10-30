'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      value: 'deepakkumr0818@gmail.com',
      href: 'mailto:deepakkumr0818@gmail.com',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '7018318078',
      href: 'tel:7018318078',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mohali, Punjab',
      href: '#',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      href: '#',
      color: 'from-purple-500 to-violet-600',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
        <p className="text-gray-300 leading-relaxed">
          I'm always interested in new opportunities and exciting projects. 
          Whether you have a question, want to collaborate, or just want to say hi, 
          feel free to reach out!
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        {contactDetails.map((contact, index) => (
          <motion.a
            key={contact.title}
            href={contact.href}
            className="flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group"
            whileHover={{ x: 5 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className={`p-3 rounded-xl bg-gradient-to-r ${contact.color} shadow-lg`}>
              <contact.icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                {contact.title}
              </h4>
              <p className="text-gray-300">{contact.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Availability Status */}
      <div className="p-6 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-xl backdrop-blur-sm">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-emerald-300 font-semibold">Available for Work</span>
        </div>
        <p className="text-gray-300 text-sm">
          I'm currently accepting new projects and opportunities. Let's discuss how I can help bring your ideas to life!
        </p>
      </div>
    </motion.div>
  )
}

export default ContactInfo
