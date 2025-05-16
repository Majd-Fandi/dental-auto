import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ProjectsData } from '@/projects'

const getProject = async (slug) => {
  return ProjectsData[slug] || null
}

export async function generateMetadata({ params }) {
  const project = await getProject(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found',
    }
  }
  
  return {
    title: `${project.title} | Majd Fandi's Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Majd Fandi's Portfolio`,
      description: project.description,
      images: project.image ? [{ url: project.image }] : [],
    },
  }
}

export default async function ProjectDetail({ params }) {
  const project = await getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href="/projects" className="text-blue-600 hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Projects
        </Link>
      </div>

      <article className="bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Project Header */}
        <div className="relative h-64 sm:h-80 lg:h-96">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 sm:p-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{project.title}</h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-700 mb-6">{project.longDescription}</p>
            
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3 mb-8">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {project.technologies.map((tech, i) => (
                <div key={i} className="border border-gray-300 rounded-lg p-4">
                  <h3 className="font-bold text-lg">{tech.name}</h3>
                  <p className="text-gray-600">{tech.purpose}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Project Details</h3>
              <div className="space-y-4">
                {project.githubUrl && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Source Code</h4>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline break-all"
                    >
                      View on GitHub
                    </a>
                  </div>
                )}
                {project.liveUrl && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Live Demo</h4>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline break-all"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Have a similar project?</h3>
              <p className="mb-4">I'm available for freelance work and would love to discuss your project requirements.</p>
              <Link 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}