'use client'

import Link from 'next/link'
import { getRelatedProjects } from '@/lib/projectsData'

type Props = { currentSlug: string }

export default function RelatedProjects({ currentSlug }: Props) {
  const related = getRelatedProjects(currentSlug, 3)
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Related Projects</h2>
          <Link href="/projects" className="text-cyan-400 hover:text-cyan-300">View all</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-white/20 transition"
            >
              <div className="text-lg sm:text-xl font-semibold mb-2">{p.title}</div>
              <div className="text-sm text-gray-300">Explore case study →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


