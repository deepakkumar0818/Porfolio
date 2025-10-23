'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Search, Filter, X } from 'lucide-react'

const ProjectFilter = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filters = [
    'All',
    'Web Apps',
    'Mobile',
    'Frontend',
    'Backend',
    'Full Stack',
    'Cloud',
    'Open Source',
  ]

  const technologies = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'AWS',
    'Docker',
    'MongoDB',
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          {/* Search & Filter Toggle */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 relative"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all backdrop-blur-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </motion.div>

            {/* Filter Toggle Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center space-x-2 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                showFilters
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </motion.button>
          </div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Advanced Filters (Collapsible) */}
          <motion.div
            initial={false}
            animate={{
              height: showFilters ? 'auto' : 0,
              opacity: showFilters ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl space-y-4">
              <h3 className="text-lg font-semibold text-white">Filter by Technology</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <motion.button
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                  >
                    {tech}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Active Filters Summary */}
          {(activeFilter !== 'All' || searchQuery) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 text-sm text-gray-300"
            >
              <span className="font-medium">Active filters:</span>
              {activeFilter !== 'All' && (
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400">
                  {activeFilter}
                </span>
              )}
              {searchQuery && (
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400">
                  Search: "{searchQuery}"
                </span>
              )}
              <button
                onClick={() => {
                  setActiveFilter('All')
                  setSearchQuery('')
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors ml-2"
              >
                Clear all
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectFilter

