'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

const SocialLinks = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/deepakkumar0818', icon: Github, color: 'hover:text-gray-300' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/itsdeepakk/', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'Email', href: 'mailto:deepakkumr0818@gmail.com?subject=New%20Project%20Inquiry&body=Hi%20Deepak%2C%0A%0AI%27d%20like%20to%20discuss%20a%20potential%20project.%20Here%20are%20the%20details%3A%0A%0A-%20Budget%3A%0A-%20Timeline%3A%0A-%20Scope%3A%0A%0AThanks%2C%0A', icon: Mail, color: 'hover:text-emerald-400' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Follow Me</h3>
        <p className="text-gray-300">
          Stay connected and follow my journey in web development and technology.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.href}
            target={social.href.startsWith('http') || social.href.startsWith('mailto') ? '_blank' : undefined}
            rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 bg-white/5 border border-white/10 rounded-xl ${social.color} transition-all duration-300 backdrop-blur-sm hover:border-white/20 flex items-center space-x-3`}
            aria-label={social.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <social.icon className="h-6 w-6" />
            <span className="font-medium">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

export default SocialLinks
