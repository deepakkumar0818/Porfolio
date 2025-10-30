'use client'

import Link from 'next/link'
import { getAdjacentSlugs } from '@/lib/projectsData'

type Props = { currentSlug: string }

export default function ProjectNavigation({ currentSlug }: Props) {
  const { prev, next } = getAdjacentSlugs(currentSlug)
  return (
    <nav className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <Link
          href="/projects"
          className="w-full sm:w-auto text-center px-5 py-3 rounded-xl border border-white/15 text-white hover:border-cyan-400/50 hover:bg-white/5 transition"
        >
          ← Back to Projects
        </Link>
        <div className="flex w-full sm:w-auto gap-3">
          <Link
            href={prev ? `/projects/${prev}` : '#'}
            className="flex-1 sm:flex-none text-center px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:border-white/20 transition"
          >
            ‹ Previous
          </Link>
          <Link
            href={next ? `/projects/${next}` : '#'}
            className="flex-1 sm:flex-none text-center px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-95 transition"
          >
            Next ›
          </Link>
        </div>
      </div>
    </nav>
  )
}


