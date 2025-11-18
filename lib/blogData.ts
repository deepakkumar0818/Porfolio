export type BlogPost = {
  id: number
  title: string
  slug: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  color: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Scalable Applications with Next.js 14',
    slug: 'building-scalable-applications-nextjs-14',
    excerpt: 'Explore the latest features in Next.js 14 and learn how to build performant, scalable web applications with server components and improved routing.',
    category: 'Next.js',
    date: 'Dec 15, 2023',
    readTime: '8 min read',
    image: '🚀',
    color: 'from-cyan-500 to-blue-600',
    tags: ['Next.js', 'React', 'Performance'],
  },
  {
    id: 2,
    title: 'Mastering TypeScript: Advanced Types and Patterns',
    slug: 'mastering-typescript-advanced-types',
    excerpt: 'Deep dive into TypeScript\'s advanced type system. Learn about utility types, conditional types, and how to write type-safe code.',
    category: 'TypeScript',
    date: 'Dec 10, 2023',
    readTime: '12 min read',
    image: '📘',
    color: 'from-blue-500 to-indigo-600',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
  },
  {
    id: 3,
    title: 'React Performance Optimization Techniques',
    slug: 'react-performance-optimization',
    excerpt: 'Learn practical techniques to optimize your React applications, from memoization to code splitting and lazy loading.',
    category: 'React',
    date: 'Dec 5, 2023',
    readTime: '10 min read',
    image: '⚡',
    color: 'from-purple-500 to-violet-600',
    tags: ['React', 'Performance', 'Optimization'],
  },
  {
    id: 4,
    title: 'Modern CSS: Grid, Flexbox, and Container Queries',
    slug: 'modern-css-grid-flexbox-container-queries',
    excerpt: 'Master modern CSS layout techniques and learn how to create responsive designs with Grid, Flexbox, and the new Container Queries.',
    category: 'CSS',
    date: 'Nov 28, 2023',
    readTime: '9 min read',
    image: '🎨',
    color: 'from-pink-500 to-rose-600',
    tags: ['CSS', 'Web Design', 'Responsive'],
  },
  {
    id: 5,
    title: 'Node.js Best Practices for Production',
    slug: 'nodejs-best-practices-production',
    excerpt: 'Essential practices for building robust Node.js applications, including error handling, logging, security, and performance monitoring.',
    category: 'Node.js',
    date: 'Nov 22, 2023',
    readTime: '11 min read',
    image: '🟢',
    color: 'from-emerald-500 to-green-600',
    tags: ['Node.js', 'Backend', 'Best Practices'],
  },
  {
    id: 6,
    title: 'Building Real-time Apps with WebSockets',
    slug: 'building-realtime-apps-websockets',
    excerpt: 'Learn how to implement real-time features in your web applications using WebSockets, Socket.io, and modern approaches.',
    category: 'Web Development',
    date: 'Nov 15, 2023',
    readTime: '10 min read',
    image: '🔌',
    color: 'from-orange-500 to-red-600',
    tags: ['WebSockets', 'Real-time', 'JavaScript'],
  },
  {
    id: 7,
    title: 'Database Design Patterns for Modern Apps',
    slug: 'database-design-patterns-modern-apps',
    excerpt: 'Explore common database design patterns, from SQL to NoSQL, and learn when to use each approach for optimal performance.',
    category: 'Database',
    date: 'Nov 8, 2023',
    readTime: '13 min read',
    image: '💾',
    color: 'from-blue-400 to-cyan-500',
    tags: ['Database', 'SQL', 'NoSQL'],
  },
  {
    id: 8,
    title: 'Securing Your Web Applications',
    slug: 'securing-web-applications',
    excerpt: 'Comprehensive guide to web application security, covering authentication, authorization, CSRF, XSS, and other common vulnerabilities.',
    category: 'Security',
    date: 'Nov 1, 2023',
    readTime: '15 min read',
    image: '🔒',
    color: 'from-yellow-500 to-orange-500',
    tags: ['Security', 'Authentication', 'Best Practices'],
  },
  {
    id: 9,
    title: 'DevOps Essentials: CI/CD Pipelines',
    slug: 'devops-essentials-cicd-pipelines',
    excerpt: 'Learn how to set up automated CI/CD pipelines for your applications using GitHub Actions, Docker, and cloud platforms.',
    category: 'DevOps',
    date: 'Oct 25, 2023',
    readTime: '12 min read',
    image: '⚙️',
    color: 'from-indigo-500 to-purple-600',
    tags: ['DevOps', 'CI/CD', 'Automation'],
  },
]

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

