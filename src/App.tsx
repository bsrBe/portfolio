import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      {/* Skip to content link for accessibility */}
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      <main id="main" className="pt-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Bisrat Abrham
              </h1>
              <p className="text-primary font-medium text-xl mb-6">
                Designing scalable web,desktop and cloud solutions
              </p>
              <p className="text-xl text-gray-600 mb-8">
                Designing scalable AWS solutions for a greener future
              </p>
              <div className="flex gap-4">
                <a href="#about" className="btn-secondary">
                  Learn More
                </a>
                <a href="#portfolio" className="btn-primary">
                  View My Work
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="./photo.jpg"
                alt="Bisrat Abrham - Cloud Solutions Architect"
                className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card">
                <svg
                  className="w-12 h-12 text-secondary mb-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>

                <h3 className="text-xl font-semibold mb-2">
                  Cloud Architecture
                </h3>
                <p className="text-gray-600">
                  Designing and implementing scalable AWS solutions for modern
                  businesses
                </p>
              </div>
              <div className="card">
                <svg
                  className="w-12 h-12 text-primary mb-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">
                  Development solutions
                </h3>
                <p className="text-gray-600">
                  Developing and Optimizing website , web application and
                  desktop softwares for business
                </p>
              </div>
              <div className="card">
                <svg
                  className="w-12 h-12 text-secondary mb-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">
                  DevOps Integration
                </h3>
                <p className="text-gray-600">
                  Streamlining development and operations with modern practices
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Featured Work
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'BookCompass',
                  description:
                    'A modern reading app built with Next.js and TypeScript',
                  image:
                    'https://images.unsplash.com/photo-1512820790803-83ca734da794',
                  tech: ['Next.js', 'Express.js', 'TailwindCSS'],
                },
                {
                  title: 'Inventory Management System',
                  description: 'Cloud-based inventory system deployed on AWS',
                  image:
                    'https://plus.unsplash.com/premium_photo-1661674192497-e124e919e69c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW52ZW50b3J5fGVufDB8fDB8fHww',
                  tech: ['Express.js', 'Node.js', 'React'],
                },
                {
                  title: 'Spare Parts Desktop App',
                  description:
                    'Cross-platform desktop application for spare parts management',
                  image:
                    'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  tech: ['Electron', 'React', 'SQLite', 'Express.js'],
                },
                {
                  title: 'EcoCloud Monitor',
                  description:
                    'AWS-based tool to track and optimize cloud energy consumption',
                  image:
                    'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
                  tech: ['AWS Lambda', 'CloudWatch', 'DynamoDB', 'API Gateway'],
                },
                {
                  title: 'AWS Inventory Sync',
                  description:
                    'Real-time inventory management system using AWS services',
                  image:
                    'https://images.unsplash.com/photo-1518770660439-4636190af475',
                  tech: ['AWS EC2', 'S3', 'RDS', 'Node.js'],
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a href="#" className="text-blue-600 hover:text-blue-800">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Watch My Pitch Video
            </h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-[500px]"
                src="https://www.youtube.com/embed/46haTcUg0Kk"
                title="Elevator Pitch"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-600 mb-6">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:bsr7349@gmail.com"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                  >
                    <Mail size={20} />
                    bsr7349@gmail.com
                  </a>
                  <a
                    href="/resume.pdf"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Bisrat_Abrham_Resume.pdf"
                  >
                    <FileText size={20} />
                    Download Resume
                  </a>
                </div>
              </div>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg transition w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
