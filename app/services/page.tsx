import ServicesHero from '@/components/ServicesHero'
import ServicesList from '@/components/ServicesList'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'

export const metadata = {
  title: 'Services - Deepak Kumar | Full Stack Development',
  description: 'Professional web development services including frontend, backend, mobile apps, and cloud solutions. Let me help bring your ideas to life.',
}

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <Process />
      <FAQ />
    </>
  )
}
