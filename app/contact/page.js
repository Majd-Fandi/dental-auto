export const metadata = {
    title: 'Contact | Majd Fandi',
    description: 'Get in touch with me for collaborations or opportunities',
    keywords: ['contact', 'hire me', 'collaborate', 'email'],
    alternates: {
      canonical: 'https://yourwebsite.com/contact',
    },
    openGraph: {
      title: 'Contact | Majd Fandi',
      description: 'Get in touch with me for collaborations or opportunities',
      url: 'https://yourwebsite.com/contact',
    },
  }
  
  import ContactForm from '@/components/ContactForm'
  
  export default function Contact() {
    return (
      <section className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2> */}
        </div>
        <ContactForm />
      </section>
    )
  }

  