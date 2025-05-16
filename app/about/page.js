export const metadata = {
  title: 'About Me | Majd Fandi',
  description: 'Learn about my background, skills, and professional journey',
  keywords: ['about', 'biography', 'skills', 'experience'],
  alternates: {
    canonical: 'https://yourwebsite.com/about',
  },
  openGraph: {
    title: 'About Me | Majd Fandi',
    description: 'Learn about my background, skills, and professional journey',
    url: 'https://yourwebsite.com/about',
  },
}

export default function About() {
  const skills = ['Python', 'Django & DRF', 'JavaScript', 'React', 'Next.js', 'HTML/CSS']

  return (
    <section className="max-w-4xl mx-auto py-12">
      {/* <h1 className="text-3xl font-bold mb-8">About Me</h1> */}

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p>
            B.Sc. in IT and Software Engineering (GPA : 3.5)
            University of Homs, Syria | Graduated : January 2024
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}