'use client'

import Link from 'next/link'

export default function BlogNavigation() {
  return (
    <nav className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <Link href="/blog" className="w-full sm:w-auto text-center px-5 py-3 rounded-xl border border-white/15 text-white hover:border-cyan-400/50 hover:bg-white/5 transition">
          ← Back to Blog
        </Link>
        <div className="flex w-full sm:w-auto gap-3">
          <Link href="#prev" className="flex-1 sm:flex-none text-center px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:border-white/20 transition">‹ Previous</Link>
          <Link href="#next" className="flex-1 sm:flex-none text-center px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-95 transition">Next ›</Link>
        </div>
      </div>
    </nav>
  )
}


