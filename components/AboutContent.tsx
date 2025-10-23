'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Target, Lightbulb, Users } from 'lucide-react'

const AboutContent = () => {
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
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'I love what I do and bring enthusiasm to every project. My passion for technology drives me to continuously learn and improve.',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'I strive for excellence in everything I create. Every line of code, every design decision is made with quality in mind.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'I embrace new technologies and innovative approaches to solve complex problems and create unique solutions.',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'I believe in the power of teamwork and open communication to deliver the best possible results for clients.',
      color: 'from-green-500 to-emerald-600',
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
              My <span className="gradient-text">Story</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A journey of passion, learning, and creating digital experiences that make a difference.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">The Beginning</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey into web development started during my computer science studies, where I discovered 
                  the magic of turning ideas into interactive digital experiences. What began as curiosity quickly 
                  evolved into a deep passion for creating solutions that solve real-world problems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Over the years, I've had the privilege of working with amazing teams and clients, from startups 
                  to Fortune 500 companies. Each project has been a learning opportunity, pushing me to grow 
                  both technically and professionally.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">Today</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Today, I specialize in full-stack development with a focus on modern technologies like React, 
                  Next.js, Node.js, and cloud platforms. I'm passionate about creating applications that are 
                  not only functional but also beautiful and user-friendly.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community through blogs and tutorials.
                </p>
              </div>
            </motion.div>

            {/* Values Grid */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-8">My Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value.color} shadow-lg mb-4`}>
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Fun Facts */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-bold text-white text-center">Fun Facts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: '50K+', label: 'Lines of Code Written' },
                { number: '1000+', label: 'Cups of Coffee Consumed' },
                { number: '24/7', label: 'Learning Mode' },
                { number: '∞', label: 'Ideas in Pipeline' },
              ].map((fact, index) => (
                <motion.div
                  key={fact.label}
                  className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{fact.number}</div>
                  <div className="text-sm text-gray-300">{fact.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutContent
