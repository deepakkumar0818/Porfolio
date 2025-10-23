'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Globe, Navigation } from 'lucide-react'

const Map = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const locations = [
    { city: 'San Francisco', country: 'USA', available: true },
    { city: 'New York', country: 'USA', available: true },
    { city: 'London', country: 'UK', available: true },
    { city: 'Remote', country: 'Worldwide', available: true },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Work <span className="gradient-text">Availability</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Open to projects worldwide. Available for remote work and select on-site collaborations.
            </p>
          </div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl overflow-hidden"
          >
            {/* Decorative World Map Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-9xl font-bold text-cyan-400"
                >
                  🌍
                </text>
              </svg>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

            {/* Animated Pins */}
            <div className="absolute inset-0">
              {/* Pin 1 - Top Left */}
              <motion.div
                className="absolute top-1/4 left-1/4"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <MapPin className="h-8 w-8 text-cyan-400 drop-shadow-lg" />
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-cyan-400/30 rounded-full blur-sm"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </motion.div>
              </motion.div>

              {/* Pin 2 - Top Right */}
              <motion.div
                className="absolute top-1/3 right-1/3"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                  className="relative"
                >
                  <MapPin className="h-8 w-8 text-purple-400 drop-shadow-lg" />
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-purple-400/30 rounded-full blur-sm"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                  />
                </motion.div>
              </motion.div>

              {/* Pin 3 - Bottom Left */}
              <motion.div
                className="absolute bottom-1/4 left-1/3"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                  className="relative"
                >
                  <MapPin className="h-8 w-8 text-pink-400 drop-shadow-lg" />
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-pink-400/30 rounded-full blur-sm"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                  />
                </motion.div>
              </motion.div>

              {/* Pin 4 - Center */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
                  className="relative"
                >
                  <MapPin className="h-10 w-10 text-emerald-400 drop-shadow-lg" />
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-1 bg-emerald-400/30 rounded-full blur-sm"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
                  />
                </motion.div>
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.line
                  x1="25%"
                  y1="25%"
                  x2="50%"
                  y2="50%"
                  stroke="rgba(34, 211, 238, 0.2)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
                <motion.line
                  x1="66%"
                  y1="33%"
                  x2="50%"
                  y2="50%"
                  stroke="rgba(168, 85, 247, 0.2)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                />
              </svg>
            </div>

            {/* Center Info Card */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div className="p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-xl shadow-2xl">
                <div className="flex items-center space-x-3">
                  <Navigation className="h-6 w-6 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Currently Available</p>
                    <p className="text-gray-300 text-sm">Remote & On-site Work</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg">
                    <MapPin className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{location.city}</h3>
                    <p className="text-gray-400 text-sm mb-2">{location.country}</p>
                    {location.available && (
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-xs font-medium">Available</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center p-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl backdrop-blur-xl"
          >
            <p className="text-gray-300 text-lg">
              <span className="text-white font-semibold">Time Zone:</span> PST (UTC-8) • 
              <span className="text-white font-semibold"> Response Time:</span> Within 24 hours • 
              <span className="text-white font-semibold"> Languages:</span> English, Spanish
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Map

