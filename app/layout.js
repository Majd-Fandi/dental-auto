import Navlink from '@/components/Navlink';
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Majd Fandi | Professional Title',
    template: '%s | Majd Fandi'
  },
  description: 'Personal website and portfolio of Majd Fandi, Professional Title',
  keywords: ['portfolio', 'personal website', 'your profession', 'your skills'],
  authors: [{ name: 'Majd Fandi' }],
  openGraph: {
    title: 'Majd Fandi | Professional Title',
    description: 'Personal website and portfolio of Majd Fandi',
    url: 'https://yourwebsite.com',
    siteName: 'Majd Fandi',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Majd Fandi | Professional Title',
    description: 'Personal website and portfolio of Majd Fandi',
    images: ['https://yourwebsite.com/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}

function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold">Majd Fandi</a>
        <div className="flex space-x-6">
          <Navlink url="/blog" title="Blog"/>
          <Navlink url="/projects" title="Projects"/>
          <Navlink url="/about" title="About"/>
          <Navlink url="/contact" title="Contact"/>
          {/* <a href="/blog" className="hover:text-blue-600">Blog</a>
          <a href="/projects" className="hover:text-blue-600">Projects</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a> */}
        </div>
      </nav>
    </header>
  )
}

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-6 mt-12">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <p>© {new Date().getFullYear()} My Personal Website. All rights reserved.</p>
//       </div>
//     </footer>
//   )
// }