'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ChevronRight, Github, Sparkles, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentTime, setCurrentTime] = useState<string>('')
  const [isMounted, setIsMounted] = useState(false)
  const [particles, setParticles] = useState<Array<{ left: number; top: number; delay: number; duration: number }>>([])

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -15])
  const springY = useSpring(y, { stiffness: 100, damping: 30 })

  useEffect(() => {
    // Mark component as mounted
    setIsMounted(true)
    
    // Generate particles only on client
    setParticles(
      Array.from({ length: 30 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 4 + Math.random() * 3,
      }))
    )

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString())
    }
    
    // Set initial time
    updateTime()
    
    const timer = setInterval(updateTime, 1000)

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(timer)
    }
  }, [])

  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-28"
      style={{ y: springY }}
    >
      {/* Premium Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Sophisticated Gradient Mesh */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 60% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Premium Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/20 via-red-500/20 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Advanced Mouse Follower */}
        <motion.div
          className="absolute hidden md:block w-28 h-28 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 rounded-full blur-2xl pointer-events-none"
          animate={{
            x: mousePosition.x - 80,
            y: mousePosition.y - 80,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
        />

        {/* Sophisticated Particles */}
        {isMounted && particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full px-4 py-2 backdrop-blur-sm"
            >
              <motion.div
                className="w-2 h-2 bg-emerald-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-emerald-300">Available for work</span>
            </motion.div>

            {/* Greeting */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h2
                className="text-lg sm:text-xl text-cyan-400 font-medium tracking-wide"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hello, I'm
              </motion.h2>
              
              <motion.h1
                className="font-bold text-white leading-tight sm:leading-[0.9] tracking-tight break-words text-[clamp(2.5rem,7vw,6.5rem)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                  Deepak Kumar
                </span>
              </motion.h1>
              
              <motion.div
                className="font-light text-gray-300 text-[clamp(1.125rem,3.5vw,2.25rem)]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Senior Full Stack Developer
                </span>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed"
            >
              Crafting exceptional digital experiences with <span className="text-cyan-400 font-semibold">cutting-edge technologies</span>. 
              Specialized in building scalable applications that drive business growth and user engagement.
            </motion.p>

            {/* Skills Tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
            >
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore My Work</span>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-1"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.div>
            </motion.a>
            
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=deepakkumr0818@gmail.com&su=New%20Project%20Inquiry&body=Hi%20Deepak%2C%0A%0AI%27d%20like%20to%20discuss%20a%20potential%20project.%20Here%20are%20the%20details%3A%0A%0A-%20Budget%3A%0A-%20Timeline%3A%0A-%20Scope%3A%0A%0AThanks%2C%0A"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative border-2 border-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:border-cyan-400/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>Let's Connect</span>
              <motion.div
                className="flex items-center space-x-1"
                whileHover={{ rotate: 45 }}
              >
                <Zap className="h-5 w-5" />
              </motion.div>
            </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Visual Element */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* Main Visual Card */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 backdrop-blur-xl shadow-2xl"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="p-8 h-full flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">
                      {isMounted ? currentTime : '--:--:--'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="h-4 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded w-3/4"></div>
                      <div className="h-3 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded w-1/2"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="h-20 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg border border-cyan-400/30"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="h-20 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg border border-purple-400/30"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="h-2 bg-gradient-to-r from-green-400/30 to-emerald-500/30 rounded w-full"></div>
                      <div className="h-2 bg-gradient-to-r from-orange-400/30 to-red-500/30 rounded w-2/3"></div>
                      <div className="h-2 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded w-1/2"></div>
                    </div>

                    {/* Featured Project Widget */}
                    <div className="mt-2 p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-xs font-semibold tracking-wide text-white/90 uppercase">Featured Project</div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 border border-emerald-500/30 text-emerald-300">Live</span>
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-white">ERP Manufacturing</div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {['Next.js', 'TypeScript', 'Chart.js'].map((chip) => (
                          <span key={chip} className="px-2 py-0.5 text-[11px] rounded-full bg-white/5 border border-white/10 text-gray-300">{chip}</span>
                        ))}
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                        <div className="rounded-lg bg-white/5 border border-white/10 p-2">
                          <div className="text-[10px] text-gray-400">Lighthouse</div>
                          <div className="text-sm font-bold text-emerald-300">99</div>
                        </div>
                        <div className="rounded-lg bg-white/5 border border-white/10 p-2">
                          <div className="text-[10px] text-gray-400">Uptime</div>
                          <div className="text-sm font-bold text-cyan-300">100%</div>
                        </div>
                        <div className="rounded-lg bg-white/5 border border-white/10 p-2">
                          <div className="text-[10px] text-gray-400">Users</div>
                          <div className="text-sm font-bold text-blue-300">25k+</div>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <a href="/projects/erp-manufacturing" className="px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium">Case Study</a>
                        <a href="#" className="px-3 py-2 rounded-lg border border-white/15 text-white text-xs font-medium hover:border-cyan-400/50">Live Demo</a>
                        <a href="https://github.com/deepakkumar0818" aria-label="GitHub" className="ml-auto p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:border-white/20">
                          <Github className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-cyan-400" />
                    <span className="text-sm text-gray-300">Building the future</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl shadow-lg"
                animate={{ rotate: [0, 6, -6, 0], y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl shadow-lg"
                animate={{ rotate: [0, -8, 8, 0], y: [0, 6, 0] }}
                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero