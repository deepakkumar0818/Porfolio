import BlogHero from '@/components/BlogHero'
import BlogFilter from '@/components/BlogFilter'
import BlogGrid from '@/components/BlogGrid'
import Newsletter from '@/components/Newsletter'

export const metadata = {
  title: 'Blog - Deepak Kumar | Tech Insights',
  description: 'Read my latest articles on web development, technology trends, and software engineering insights.',
}

export default function Blog() {
  return (
    <>
      <BlogHero />
      <BlogFilter />
      <BlogGrid />
      <Newsletter />
    </>
  )
}
