import { useEffect, useRef } from 'react'

const Skills = () => {
  const skillsRef = useRef(null)

  const skills = [
    { 
      category: "Languages", 
      icon: "💻",
      items: ["C", "C++", "Python", "Java"]
    },
    { 
      category: "Backend", 
      icon: "⚙️",
      items: ["Django", "Spring Boot", "Node.js", "Express"]
    },
    { 
      category: "Database", 
      icon: "🗄️",
      items: ["MySQL", "PostgreSQL", "MongoDB"]
    }
  ]

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

    const elements = skillsRef.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={skillsRef} className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="fade-in text-center mb-20">
          {/* ONLY THIS BADGE SIZE INCREASED */}
          <span className="text-green-600 dark:text-green-400 font-bold mono text-2xl md:text-3xl bg-green-0 dark:bg-green-900/30 px-8 py-4 rounded-full inline-block mb-6">
            Technical Skills
          </span>
          {/* MAIN HEADING STAYS SAME */}
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4 mb-6">
            My <span className="text-green-600 dark:text-green-400">Tech Stack</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Technologies I use to build robust backend solutions
          </p>
        </div>
        
        {/* Skills Grid (unchanged) */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.category}
              className="fade-in bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="text-2xl mr-3">{skill.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {skill.category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {skill.items.map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mr-3"></div>
                    <span className="text-slate-600 dark:text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="fade-in text-center mt-16">
          <div className="bg-white dark:bg-slate-800 font- mono text-2xl md:text-xl rounded-xl p-6 border border-slate-200 dark:border-slate-700 inline-block">
            <p className="text-green-600 dark:text-green-400 font-mono mb-4">
              Ready for new challenges
            </p>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-green-600 hover:bg-green-500 dark:bg-green-500 dark:hover:bg-green-400 text-white font-semibold rounded-lg transition-all duration-300"
            >
              View My Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
