'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, Youtube, Mail } from 'lucide-react'

const SocialLinks = () => {
  const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-300' },
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-cyan-400' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'Email', href: 'mailto:your.email@example.com', icon: Mail, color: 'hover:text-emerald-400' },
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
