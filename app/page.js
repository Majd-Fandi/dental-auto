import Link from 'next/link'

export const metadata = {
  title: 'Home | Majd Fandi',
  description: 'Welcome to my personal website and portfolio',
  alternates: {
    canonical: 'https://yourwebsite.com',
  },
}

export default function Home() {
  return (
    <section className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Hello, I'm Majd Fandi</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        I'm a software engineer specializing in web development. Welcome to my personal website.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/about" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Learn More
        </Link>
        <Link href="/contact" className="bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300">
          Contact Me
        </Link>
      </div>
    </section>
  )
}