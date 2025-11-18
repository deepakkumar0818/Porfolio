'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Music, BookOpen, Camera, Gamepad2, Plane, Trophy } from 'lucide-react'

const Interests = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const interests = [
    {
      icon: Trophy,
      title: 'Basketball',
      description: 'National level basketball player. The court is where I find discipline, teamwork, and the drive to excel.',
      color: 'from-orange-500 to-red-600',
      isMain: true,
      badge: 'National Player',
    },
    {
      icon: Music,
      title: 'Music',
      description: 'Love listening to various genres and playing instruments. Music fuels my creativity.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: BookOpen,
      title: 'Reading',
      description: 'Passionate reader of tech blogs, programming books, and science fiction novels.',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capturing moments and exploring the world through the lens. Love street and nature photography.',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Gamepad2,
      title: 'Gaming',
      description: 'Enjoy strategy games and indie titles. Gaming helps me think creatively and solve puzzles.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Plane,
      title: 'Travel',
      description: 'Exploring new places, cultures, and cuisines. Travel broadens my perspective on life.',
      color: 'from-sky-500 to-blue-600',
    },
  ]

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
              Interests & <span className="gradient-text">Hobbies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond coding, here's what keeps me inspired and balanced in life.
            </p>
          </motion.div>

          {/* Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                variants={itemVariants}
                className={`group relative p-6 bg-white/5 border rounded-2xl backdrop-blur-xl hover:border-white/20 transition-all duration-300 overflow-hidden ${
                  interest.isMain 
                    ? 'border-orange-500/50 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-orange-500/10 to-red-600/10' 
                    : 'border-white/10'
                }`}
                whileHover={{ scale: interest.isMain ? 1.03 : 1.05, y: -5 }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${interest.color} shadow-lg`}>
                      <interest.icon className="h-6 w-6 text-white" />
                    </div>
                    {interest.isMain && (
                      <span className="px-3 py-1 text-xs font-bold text-orange-400 bg-orange-500/20 border border-orange-500/30 rounded-full">
                        {interest.badge}
                      </span>
                    )}
                  </div>
                  <h3 className={`text-xl font-bold text-white mb-2 ${interest.isMain ? 'text-2xl' : ''}`}>
                    {interest.title}
                  </h3>
                  <p className={`text-gray-300 leading-relaxed ${interest.isMain ? 'text-base' : 'text-sm'}`}>
                    {interest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote Section */}
          <motion.div 
            variants={itemVariants} 
            className="text-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl"
          >
            <p className="text-xl text-gray-200 italic max-w-3xl mx-auto">
              "As a national basketball player, I've learned that discipline, teamwork, and perseverance on the court translate directly to excellence in coding. 
              The same dedication that drives me to excel in basketball fuels my passion for creating exceptional digital experiences."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Interests

