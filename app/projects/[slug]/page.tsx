import { Metadata } from 'next'
import ProjectDetail from '@/components/ProjectDetail'
import RelatedProjects from '@/components/RelatedProjects'
import ProjectNavigation from '@/components/ProjectNavigation'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  // In a real app, you'd fetch the project data here
  const project = {
    title: 'Sample Project Title',
    description: 'This is a sample project description',
    category: 'Web Development',
    technologies: ['React', 'TypeScript', 'Next.js']
  }

  return {
    title: `${project.title} - Deepak Kumar`,
    description: project.description,
    keywords: project.technologies,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <>
      <ProjectDetail slug={params.slug} />
      <ProjectNavigation />
      <RelatedProjects />
    </>
  )
}
