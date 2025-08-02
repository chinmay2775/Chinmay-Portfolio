import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience' // NEW IMPORT
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 1,
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience /> {/* NEW EXPERIENCE SECTION BETWEEN SKILLS AND PROJECTS */}
      <Projects />
      <Contact />
    </div>
  )
}

export default App
