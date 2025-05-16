import Link from 'next/link'
import { Posts } from '@/posts'
import Image from 'next/image'

export const metadata = {
  title: 'Blog | Majd Fandi',
  description: 'Read my latest articles and thoughts',
}

export default async function Blog() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      {/* <h1 className="text-3xl font-bold mb-8">My Blog</h1> */}

      <div className="space-y-10">
        {Posts.map((post) => (
          <article 
            key={post.slug} 
            className="border-b border-gray-200 pb-8 group"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image container with hover effect */}
              <div className="md:w-1/3 lg:w-1/4 shrink-0">
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 md:h-40 object-cover"
                  />
                </Link>
              </div>
              
              {/* Content container */}
              <div className="flex-1">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-3">{post.excerpt}</p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:underline inline-flex items-center"
                  >
                    Read more <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}