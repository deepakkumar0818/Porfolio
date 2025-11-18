'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getProjectBySlug } from '@/lib/projectsData'

type ProjectDetailProps = {
  slug: string
}

export default function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = getProjectBySlug(slug)
  if (!project) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl font-bold mb-2">Project not found</h1>
          <p className="text-gray-300 mb-6">We couldn't find details for this project.</p>
          <Link href="/projects" className="text-cyan-400 hover:text-cyan-300">Back to Projects</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
              {project.date}
            </span>
          </div>
        </div>

        {/* Meta and Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Project Image */}
            {project.image ? (
              <div className="w-full aspect-video rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            ) : (
              <div className="w-full aspect-video rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl" />
            )}

            {/* Content */}
            <div className="p-5 sm:p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-white">Overview</h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                This section would provide a detailed narrative of the problem statement, solution approach, and the impact delivered. It is
                structured for readability on small screens and expands gracefully on larger devices.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="p-5 sm:p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-white bg-white/10 rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl space-y-3">
              <Link
                href={project.links.demo}
                className="block text-center w-full px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:opacity-95 transition"
              >
                View Live Demo
              </Link>
              <Link
                href={project.links.github}
                className="block text-center w-full px-6 py-3 sm:py-3.5 rounded-xl border border-white/15 text-white hover:border-cyan-400/50 hover:bg-white/5 transition"
              >
                View Source Code
              </Link>
            </div>
          </aside>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Role', value: 'Full‑Stack Developer' },
            { label: 'Scope', value: 'Design, Frontend, Backend, CI/CD' },
            { label: 'Timeline', value: '6 weeks' },
          ].map((item) => (
            <div key={item.label} className="p-5 sm:p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
              <div className="text-xs uppercase tracking-wider text-gray-400">{item.label}</div>
              <div className="text-white text-base sm:text-lg font-medium mt-1">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Slug note (dev aid) */}
        <p className="text-center text-xs text-gray-400">Viewing project: {slug}</p>
      </div>
    </section>
  )
}


