import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const heroRef = useRef(null)
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = 'Backend Developer'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center px-4 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-200 dark:bg-green-900/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Content - Profile Photo Removed */}
        <div className="fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-slate-900 dark:text-white">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Chinmay</span>
          </h1>
          
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
              {displayText}
              <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-4xl mx-auto">
            Passionate <span className="font-semibold text-slate-900 dark:text-white">Backend Engineer</span> | Creating Seamless Digital Experiences Through Clean Code & Innovative Architecture
            <br />
            
          </p>

          {/* Tech Stack */}
          <div className="flex justify-center items-center space-x-4 mb-12 flex-wrap gap-4">
            {[
              { name: 'Python', bg: 'bg-yellow-100 md:text-2xl dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' },
              { name: 'Java', bg: 'bg-red-100 md:text-2xl dark:bg-red-900/30 text-red-800 dark:text-red-300' },
              { name: 'C', bg: 'bg-blue-100 md:text-2xl dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' },
              { name: 'C++', bg: 'bg-green-100 md:text-2xl dark:bg-green-900/30 text-green-800 dark:text-green-300' }
            ].map((tech) => (
              <div key={tech.name} className={`px-6 py-3 rounded-xl font-semibold ${tech.bg} transition-all duration-300 hover:scale-105 shadow-lg`}>
                {tech.name}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-5 bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400  md:text-2xl text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              View My Projects
            </button>
            
            
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          </div>
        </div>
      
    </section>
  )
}

export default Hero
