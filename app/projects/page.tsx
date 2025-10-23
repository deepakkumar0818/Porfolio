import ProjectsHero from '@/components/ProjectsHero'
import ProjectFilter from '@/components/ProjectFilter'
import ProjectsGrid from '@/components/ProjectsGrid'
import ProjectCategories from '@/components/ProjectCategories'

export const metadata = {
  title: 'Projects - Deepak Kumar | Portfolio',
  description: 'Explore my portfolio of web applications, mobile apps, and digital solutions. See how I solve complex problems with innovative technology.',
}

export default function Projects() {
  return (
    <>
      <ProjectsHero />
      <ProjectCategories />
      <ProjectFilter />
      <ProjectsGrid />
    </>
  )
}
