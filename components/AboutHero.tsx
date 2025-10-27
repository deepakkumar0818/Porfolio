'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { User, MapPin, Calendar, Award } from 'lucide-react'
import Image from 'next/image'

const AboutHero = () => {
  const [imageError, setImageError] = useState(false)
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <User className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">About Me</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Deepak Kumar
              </span>
            </h1>

            {/* Subtitle */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Senior Full Stack Developer
              </span>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Passionate about creating exceptional digital experiences that solve real-world problems. 
              With over 4 years of experience in full-stack development, I specialize in building 
              scalable applications that drive business growth and user engagement.
            </p>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: MapPin,
                label: 'Location',
                value: 'Mohali, Punjab',
                color: 'from-cyan-500 to-blue-600',
              },
              {
                icon: Calendar,
                label: 'Experience',
                value: '4 Years',
                color: 'from-purple-500 to-pink-600',
              },
              {
                icon: Award,
                label: 'Specialization',
                value: 'Full Stack',
                color: 'from-emerald-500 to-green-600',
              },
            ].map((info, index) => (
              <motion.div
                key={info.label}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${info.color} shadow-lg mb-4`}>
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{info.value}</div>
                <div className="text-sm text-gray-400">{info.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Profile Image / Bitmoji */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl bg-gradient-to-r from-cyan-500 to-blue-600">
                {imageError ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="h-24 w-24 text-white" />
                  </div>
                ) : (
                  <Image
                    src="/bitmoji-male.png"
                    alt="Deepak Bitmoji"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                    priority
                  />
                )}
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutHero
