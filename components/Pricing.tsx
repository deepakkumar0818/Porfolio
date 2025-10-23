'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Star, Zap, Rocket, Crown } from 'lucide-react'

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: '1,500',
      period: 'per project',
      description: 'Perfect for small projects and MVPs',
      features: [
        'Landing Page or Simple Website',
        'Responsive Design',
        'Basic SEO Setup',
        'Contact Form Integration',
        '1 Month Support',
        'Source Code Included',
      ],
      color: 'from-blue-500 to-cyan-600',
      popular: false,
    },
    {
      name: 'Professional',
      icon: Rocket,
      price: '5,000',
      period: 'per project',
      description: 'Ideal for growing businesses and startups',
      features: [
        'Full Web Application',
        'Custom Backend & Database',
        'Admin Dashboard',
        'Third-party Integrations',
        'Advanced SEO',
        '3 Months Support',
        'Deployment & Training',
        'Performance Optimization',
      ],
      color: 'from-purple-500 to-violet-600',
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      period: 'contact for quote',
      description: 'For complex projects and large-scale applications',
      features: [
        'Everything in Professional',
        'Microservices Architecture',
        'Advanced Security Features',
        'Scalability & Load Balancing',
        'CI/CD Pipeline Setup',
        'Dedicated Support',
        'Regular Updates & Maintenance',
        'Priority Response Time',
        'Technical Consulting',
      ],
      color: 'from-orange-500 to-red-600',
      popular: false,
    },
  ]

  const additionalServices = [
    { name: 'Mobile App Development', price: '+$3,000' },
    { name: 'E-Commerce Integration', price: '+$2,000' },
    { name: 'Custom API Development', price: '+$1,500' },
    { name: 'Design System Creation', price: '+$1,000' },
    { name: 'Monthly Maintenance', price: '$500/mo' },
    { name: 'Hourly Consulting', price: '$100/hr' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
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
              Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose a plan that fits your needs. All plans include quality code and professional service.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  >
                    <div className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm font-bold shadow-lg flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </motion.div>
                )}

                <motion.div
                  className={`h-full p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white/10 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20'
                      : 'bg-white/5 border border-white/10 hover:border-white/20'
                  }`}
                  whileHover={{ scale: plan.popular ? 1.02 : 1.03, y: plan.popular ? 0 : -8 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${plan.color} shadow-lg`}>
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Plan Name */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 text-sm">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="py-4">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-5xl font-bold text-white">
                          {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">{plan.period}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mt-0.5`}>
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block w-full py-4 rounded-xl font-semibold text-center transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25'
                          : 'bg-white/10 border border-white/20 text-white hover:bg-white/15'
                      }`}
                    >
                      Get Started
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Additional Services</h3>
              <p className="text-lg text-gray-300">Extend your project with these optional add-ons</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{service.name}</span>
                    <span className="text-cyan-400 font-bold">{service.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            variants={itemVariants}
            className="text-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl"
          >
            <p className="text-gray-300 leading-relaxed">
              <span className="text-white font-semibold">Note:</span> All prices are estimates and may vary based on project complexity. 
              Contact me for a detailed quote tailored to your specific requirements. 
              <span className="text-cyan-400"> Flexible payment plans available</span> for larger projects.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing

