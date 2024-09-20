import Link from 'next/link'
import { blogPosts } from '@/components/blogPosts'

export const metadata = {
  title: 'Blog - AutoBara',
  description: 'AutoBara Blog',
}

// Export the blogPosts array


export default function Blog() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <h1 className="h1 mb-4">Blog</h1>
          <div className="max-w-3xl mx-auto">
            {blogPosts.map((post) => (
              <div key={post.id} className="mb-8">
                <h2 className="h3 mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-gray-100 transition duration-150 ease-in-out">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-400">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}