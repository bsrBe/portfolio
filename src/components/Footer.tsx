import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center">
              <svg
                className="w-10 h-10 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              <span className="ml-2 text-lg font-bold">Bisrat Abrham</span>
            </div>
            <p className="mt-2 text-gray-400">
              Building Sustainable web,desktop and Cloud Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a
                href="#portfolio"
                className="hover:text-primary transition-colors"
              >
                Portfolio
              </a>
              <a href="#pitch" className="hover:text-primary transition-colors">
                Elevator Pitch
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.linkedin.com/in/bisrat-abrham"
                className="flex items-center justify-center md:justify-start hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/bisrat-abrham"
                className="flex items-center justify-center md:justify-start hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} className="mr-2" />
                GitHub
              </a>
              <a
                href="mailto:bisrat@example.com"
                className="flex items-center justify-center md:justify-start hover:text-primary transition-colors"
              >
                <Mail size={20} className="mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Bisrat Abrham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
