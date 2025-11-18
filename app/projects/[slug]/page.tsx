import { Metadata } from 'next'
import ProjectDetail from '@/components/ProjectDetail'
import RelatedProjects from '@/components/RelatedProjects'
import ProjectNavigation from '@/components/ProjectNavigation'
import { getProjectBySlug, getAllProjects } from '@/lib/projectsData'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) {
    return {
      title: 'Project Not Found - Deepak Kumar',
      description: 'The requested project could not be found.',
    }
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
      <ProjectNavigation currentSlug={params.slug} />
      <RelatedProjects currentSlug={params.slug} />
    </>
  )
}
