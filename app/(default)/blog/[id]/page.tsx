import { notFound } from 'next/navigation'
import Link from 'next/link'

import { blogPosts } from '@/components/blogPosts'

export const dynamicParams = true

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id.toString() === params.id)

  if (!post) {
    notFound()
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <Link href="/blog" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 mb-4">
            <span className="text-sm">Back to Blog</span>
          </Link>
          <article>
            <header className="mb-8">
              <h1 className="h1 mb-4">{post.title}</h1>
              <p className="text-xl text-gray-400">{post.date}</p>
            </header>
            <div className="text-lg text-gray-400" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </div>
    </section>
  )
}