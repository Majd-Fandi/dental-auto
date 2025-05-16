import Link from 'next/link'
import { ProjectsData } from '@/projects'
export const metadata = {
  title: 'Projects | Majd Fandi',
  description: 'Explore my portfolio of projects and work samples',
  keywords: ['projects', 'portfolio', 'work samples', 'case studies'],
  alternates: {
    canonical: 'https://yourwebsite.com/projects',
  },
  openGraph: {
    title: 'Projects | Majd Fandi',
    description: 'Explore my portfolio of projects and work samples',
    url: 'https://yourwebsite.com/projects',
  },
}

// Convert ProjectsData object to array for mapping
const projectsList = Object.entries(ProjectsData).map(([slug, project]) => ({
  slug,
  ...project
}))

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      {/* <h1 className="text-3xl font-bold mb-8">My Projects</h1> */}
      
      <div className="grid md:grid-cols-2 gap-6">
        {projectsList.map(project => (
          <div 
            key={project.id} 
            className="border border-blue-200 rounded-lg p-6 hover:shadow-md transition-shadow hover:border-blue-300"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="bg-gray-100 px-2 py-1 text-sm rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <Link 
                href={`/projects/${project.slug}`} 
                className="text-blue-600 hover:underline font-medium"
              >
                View Details →
              </Link>
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="GitHub repository"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
