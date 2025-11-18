import { Metadata } from 'next'
import BlogPost from '@/components/BlogPost'
import RelatedPosts from '@/components/RelatedPosts'
import BlogNavigation from '@/components/BlogNavigation'
import { getAllBlogPosts } from '@/lib/blogData'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  // In a real app, you'd fetch the post data here
  const post = {
    title: 'Sample Blog Post Title',
    description: 'This is a sample blog post description',
    author: 'Deepak Kumar',
    date: '2024-01-15',
    tags: ['React', 'TypeScript', 'Web Development']
  }

  return {
    title: `${post.title} - Deepak Kumar`,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.tags,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <>
      <BlogPost slug={params.slug} />
      <BlogNavigation />
      <RelatedPosts />
    </>
  )
}
