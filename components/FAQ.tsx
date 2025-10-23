'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity and scope. A simple landing page takes 1-2 weeks, while a full web application can take 6-12 weeks. After our initial consultation, I\'ll provide a detailed timeline with milestones for your specific project.',
    },
    {
      question: 'Do you offer ongoing maintenance and support?',
      answer: 'Yes! I offer various maintenance packages including bug fixes, security updates, feature enhancements, and technical support. Basic support is included for the first 1-3 months depending on your plan, and extended maintenance contracts are available.',
    },
    {
      question: 'What technologies do you work with?',
      answer: 'I specialize in modern web technologies including React, Next.js, Node.js, TypeScript, Python, PostgreSQL, MongoDB, and cloud platforms like AWS and Azure. I choose the best tech stack for each project based on your specific requirements and goals.',
    },
    {
      question: 'How do you handle project communication?',
      answer: 'I believe in transparent and regular communication. We\'ll have weekly progress updates via your preferred method (email, Slack, etc.), and you\'ll have access to a project management board to track progress in real-time. I\'m also available for quick questions throughout the project.',
    },
    {
      question: 'What information do you need to get started?',
      answer: 'To begin, I need to understand your project goals, target audience, desired features, and any design preferences. We\'ll have an initial consultation to discuss your vision, and I\'ll prepare a detailed proposal with timeline and costs.',
    },
    {
      question: 'Do you work with existing codebases?',
      answer: 'Absolutely! I can work with your existing codebase to add features, fix bugs, optimize performance, or refactor code. I\'ll start with a thorough code review to understand the architecture and provide recommendations.',
    },
    {
      question: 'What is your payment structure?',
      answer: 'I typically work with a milestone-based payment structure: 30% upfront, 40% at the midpoint, and 30% upon completion. For larger projects, we can arrange a custom payment schedule. I accept various payment methods including bank transfer, PayPal, and cryptocurrency.',
    },
    {
      question: 'Will I own the source code?',
      answer: 'Yes, you will own all the source code and rights to your project upon final payment. I provide clean, well-documented code and can include training on how to maintain it if needed.',
    },
    {
      question: 'Do you sign NDAs?',
      answer: 'Yes, I\'m happy to sign a Non-Disclosure Agreement (NDA) before we discuss your project details. Your confidentiality and intellectual property are important to me.',
    },
    {
      question: 'Can you help with deployment and hosting?',
      answer: 'Yes! I can handle the entire deployment process including setting up hosting, configuring domains, SSL certificates, and ongoing server management. I work with various hosting providers and can recommend the best option for your needs.',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about working with me
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="overflow-hidden"
              >
                <motion.div
                  className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-6 w-6 text-cyan-400" />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center p-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl backdrop-blur-xl"
          >
            <MessageCircle className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              I'm here to help! Feel free to reach out and I'll get back to you as soon as possible.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <span>Get in Touch</span>
              <MessageCircle className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

