import Link from 'next/link'
import { Posts } from '@/posts'
import Image from 'next/image'

const getPost = async (slug) => {
  const post = Posts.find(p => p.slug === slug);
  return post || null
};

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)

  if (!post) {
    return {
      title: 'Post not found',
      description: 'The requested blog post could not be found',
    }
  }

  return {
    title: `${post.title} | Majd Fandi`,
    description: post.excerpt || post.content.replace(/<[^>]*>/g, '').substring(0, 160),
    openGraph: {
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug)

  if (!post) {
    return (
      <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link 
          href="/blog" 
          className="text-blue-600 hover:underline inline-flex items-center"
        >
          ← Back to Blog
        </Link>
      </section>
    )
  }

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <article className="space-y-8">
        {/* Featured Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
          />
        </div>

        {/* Article Header */}
        <header className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600">
            {post.author && (
              <>
                <span>By {post.author}</span>
                <span className="hidden sm:inline">•</span>
              </>
            )}
            <time dateTime={post.date} className="text-gray-500">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          {post.tags && (
            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Footer */}
        <footer className="pt-8 mt-8 border-t border-gray-200">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            ← Back to Blog
          </Link>
        </footer>
      </article>
    </section>
  )
}