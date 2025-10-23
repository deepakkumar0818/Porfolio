import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import ServicesPreview from '@/components/ServicesPreview'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <Testimonials />
    </>
  )
}