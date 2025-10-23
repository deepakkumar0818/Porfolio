'use client'

type BlogPostProps = {
  slug: string
}

export default function BlogPost({ slug }: BlogPostProps) {
  const post = {
    title: 'Sample Blog Post Title',
    description:
      'This is a placeholder blog post. Replace with your fetched content. It is styled to be readable on small screens and scales on larger ones.',
    date: '2024-01-15',
    author: 'Deepak Kumar',
    tags: ['React', 'TypeScript', 'Web Development'],
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">{post.title}</h1>
          <p className="text-sm text-gray-400">{post.date} • {post.author}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">
                {t}
              </span>
            ))}
          </div>
        </header>

        <article className="prose prose-invert max-w-none">
          <p>
            {post.description}
          </p>
          <p className="text-xs text-gray-400">Viewing slug: {slug}</p>
        </article>
      </div>
    </section>
  )
}


