'use client'

import Navigation from '@/components/Navigation'
import ScrollAnimation from '@/components/ScrollAnimation'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send to a backend
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="story-page-wrapper">
      <div className="story-background" />
      
      <div className="story-nav-overlay">
        <Navigation />
      </div>

      <div className="story-content-area">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <ScrollAnimation direction="fadeIn" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bella-queta text-gray-900 mb-4 text-center">
              Contact Us
            </h1>
          </ScrollAnimation>

          <ScrollAnimation direction="fadeInUp" delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bella-queta font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bella-queta font-bold text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-bella-queta focus:border-[#BE8CC1] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bella-queta font-bold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-bella-queta focus:border-[#BE8CC1] focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bella-queta font-bold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-bella-queta focus:border-[#BE8CC1] focus:outline-none resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#BE8CC1] text-white font-bella-queta font-bold rounded-lg hover:bg-[#a87bac] transition-colors"
                  >
                    Send Message
                  </button>
                  {submitted && (
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-green-700 font-bella-queta text-sm">
                        Thank you for your message! We'll get back to you soon.
                      </p>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bella-queta font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bella-queta font-bold text-gray-900 mb-2">
                      Email Us
                    </h3>
                    <a href="mailto:kirsten_garcia@dlsu.edu.ph" className="text-[#BE8CC1] font-bella-queta hover:underline block mb-2">
                      kirsten_garcia@dlsu.edu.ph
                    </a>
                    <a href="mailto:anne_zambrano@dlsu.edu.ph" className="text-[#BE8CC1] font-bella-queta hover:underline block">
                      anne_zambrano@dlsu.edu.ph
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-bella-queta font-bold text-gray-900 mb-4">
                      Social Links
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 font-bella-queta text-sm">
                        Social media links coming soon.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-bella-queta font-bold text-gray-900 mb-2">
                      Disclaimer
                    </h3>
                    <p className="text-sm text-gray-600 font-bella-queta leading-relaxed">
                      The Haven is a production thesis project by Communication Arts students from De La Salle University - Manila. All content, including stories and expert insights, are based on real interviews and research conducted as part of the academic project. The website is designed for educational and storytelling purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

