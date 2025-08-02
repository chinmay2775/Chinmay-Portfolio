import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-green-500/30' 
        : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-green-600 dark:text-green-400 font- mono text-2xl md:text-2xl font-bold hover:text-green-500 dark:hover:text-green-300 transition-all duration-300 transform hover:scale-105"
            >
              Chinmay 
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Education', id: 'education' },
              { name: 'Skills', id: 'skills' },
              { name: 'Experience', id: 'experience' },
              { name: 'Projects', id: 'projects' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font- mono text-2xl md:text-xl font-bold mono font-medium hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-green-500/10 dark:bg-green-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-600 dark:bg-green-400 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* Theme Toggle and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-bold mono font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/25"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-green-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Education', id: 'education' },
                { name: 'Skills', id: 'skills' },
                { name: 'Experience', id: 'experience' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 font-mono font-medium hover:text-green-600 dark:hover:text-green-400 hover:bg-green-500/10 dark:hover:bg-green-400/10 rounded-lg transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
              
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 px-4 py-3 bg-green-600 hover:bg-green-500 text-white font-mono font-semibold rounded-lg transition-colors duration-300"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
