'use client'

import { useState } from 'react'
import SocialMedia from './SocialMedia'

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value
    
    const subject = `Portfolio Contact from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    
    window.location.href = `mailto:majdfandi560@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setIsSubmitted(true)
  }

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10">
      {isSubmitted ? (
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
          <p className="text-gray-700">I Will Respond ASAP ! </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="outline-0 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-400 focus:border-transparent transition-all"
                placeholder="John/Jane Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="outline-0 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-400 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              className="max-h-96 min-h-48 outline-0 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-400 focus:border-transparent transition-all"
              placeholder="I'd like to discuss..."
            ></textarea>
          </div>
          
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-2 transition-all shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
      <SocialMedia/>
    </div>
  )
}