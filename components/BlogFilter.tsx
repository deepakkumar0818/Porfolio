'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Search, X, Tag } from 'lucide-react'

const BlogFilter = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    'All',
    'Web Development',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'CSS',
    'Performance',
    'Best Practices',
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-2xl mx-auto"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all backdrop-blur-xl"
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

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-2 flex-wrap"
          >
            <Tag className="h-5 w-5 text-gray-400" />
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Active Filter Indicator */}
          {(activeCategory !== 'All' || searchQuery) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 text-sm text-gray-300"
            >
              <span className="font-medium">Filtering by:</span>
              {activeCategory !== 'All' && (
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400">
                  {activeCategory}
                </span>
              )}
              {searchQuery && (
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400">
                  "{searchQuery}"
                </span>
              )}
              <button
                onClick={() => {
                  setActiveCategory('All')
                  setSearchQuery('')
                }}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
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

export default BlogFilter

