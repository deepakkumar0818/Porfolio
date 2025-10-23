import AboutHero from '@/components/AboutHero'
import AboutContent from '@/components/AboutContent'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Certifications from '@/components/Certifications'

export const metadata = {
  title: 'About Me - Deepak Kumar | Full Stack Developer',
  description: 'Learn about my journey, skills, and experience as a full stack developer. Discover my passion for creating innovative digital solutions.',
}

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
    </>
  )
}
