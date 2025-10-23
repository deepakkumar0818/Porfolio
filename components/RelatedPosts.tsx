'use client'

import Link from 'next/link'

const items = [
  { title: 'Optimizing React Performance', slug: 'optimizing-react-performance' },
  { title: 'TypeScript Tips for Next.js', slug: 'typescript-tips-nextjs' },
  { title: 'Building Accessible UI', slug: 'building-accessible-ui' },
]

export default function RelatedPosts() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Related Posts</h2>
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300">View all</Link>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {items.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-white/20 transition">
              <div className="text-lg sm:text-xl font-semibold">{p.title}</div>
              <div className="text-sm text-gray-300">Read more →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


