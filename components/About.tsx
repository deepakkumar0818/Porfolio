'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Code, Database, Palette, Smartphone, Globe, Zap, Award, Users, Clock, Target } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const skills = [
    {
      category: 'Frontend Development',
      icon: Palette,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
      color: 'from-cyan-500 to-blue-600',
      description: 'Building responsive, interactive user interfaces with modern frameworks',
      level: 95,
    },
    {
      category: 'Backend Development',
      icon: Database,
      technologies: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
      color: 'from-emerald-500 to-green-600',
      description: 'Scalable server architectures and database optimization',
      level: 90,
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
      color: 'from-purple-500 to-violet-600',
      description: 'Cross-platform mobile applications with native performance',
      level: 85,
    },
    {
      category: 'Cloud & DevOps',
      icon: Zap,
      technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      color: 'from-orange-500 to-red-500',
      description: 'Infrastructure automation and deployment pipelines',
      level: 88,
    },
    {
      category: 'AI & Machine Learning',
      icon: Globe,
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Computer Vision'],
      color: 'from-pink-500 to-rose-600',
      description: 'Intelligent systems and AI-powered applications',
      level: 75,
    },
    {
      category: 'Design & UX',
      icon: Code,
      technologies: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
      color: 'from-indigo-500 to-blue-600',
      description: 'User-centered design and visual communication',
      level: 82,
    },
  ]

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Led development of scalable web applications using modern technologies.',
      achievements: ['Improved performance by 40%', 'Reduced bugs by 60%', 'Mentored 3 junior developers'],
    },
    {
      title: 'Frontend Developer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Developed responsive user interfaces and implemented modern design patterns.',
      achievements: ['Built 10+ responsive websites', 'Implemented design system', 'Increased user engagement by 25%'],
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2019 - 2020',
      description: 'Created interactive web experiences and maintained existing applications.',
      achievements: ['Delivered 20+ projects on time', 'Learned 5+ new technologies', 'Contributed to open source'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Premium Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-6 py-3 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="h-5 w-5 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">Professional Profile</span>
              </motion.div>
              
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transforming complex ideas into <span className="text-cyan-400 font-semibold">elegant digital solutions</span> that drive business growth and user engagement.
              </p>
            </div>
          </motion.div>

          {/* Premium About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <motion.div
                  className="p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 backdrop-blur-xl"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                    <Users className="h-6 w-6 text-cyan-400" />
                    <span>Professional Journey</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    With over <span className="text-cyan-400 font-semibold">4 years of experience</span> in full-stack development, 
                    I specialize in architecting scalable solutions that deliver exceptional user experiences. 
                    My expertise spans from frontend frameworks to cloud infrastructure.
                  </p>
                </motion.div>

                <motion.div
                  className="p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 backdrop-blur-xl"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                    <Target className="h-6 w-6 text-emerald-400" />
                    <span>Mission & Values</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    I believe in <span className="text-emerald-400 font-semibold">clean architecture</span>, 
                    continuous innovation, and the power of technology to solve real-world challenges. 
                    Every project is an opportunity to push boundaries and create meaningful impact.
                  </p>
                </motion.div>
              </div>

              {/* Premium Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-6"
              >
                {[ 
                  { number: '100+', label: 'Projects Delivered', icon: Award, color: 'text-cyan-400' },
                  { number: '4', label: 'Years Experience', icon: Clock, color: 'text-blue-400' },
                  { number: '50+', label: 'Happy Clients', icon: Users, color: 'text-emerald-400' },
                  { number: '99%', label: 'Success Rate', icon: Target, color: 'text-purple-400' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="group relative overflow-hidden p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg bg-white/10 ${stat.color}`}>
                        <stat.icon className="h-5 w-5" />
                      </div>
                      <div className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Premium Skills Grid */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Technical Expertise</h3>
                <p className="text-gray-400">Mastering cutting-edge technologies to deliver exceptional results</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    onHoverStart={() => setHoveredSkill(index)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg`}>
                          <skill.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {skill.category}
                          </h4>
                          <p className="text-sm text-gray-400">{skill.description}</p>
                        </div>
                      </div>
                      
                      {/* Skill Level */}
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{skill.level}%</div>
                        <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-full text-gray-300 hover:text-white hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Hover Effect Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      animate={hoveredSkill === index ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold text-white text-center mb-12">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-primary-500/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                        <p className="text-primary-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-400 mt-1 sm:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      <h5 className="text-sm font-medium text-gray-400">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center space-x-2">
                            <span className="w-1 h-1 bg-primary-400 rounded-full"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
