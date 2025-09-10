import { useEffect, useRef } from 'react'

const Experience = () => {
  const experienceRef = useRef(null)

  const experiences = [
    {
      role: 'Java Developer Intern',
      company: 'Pinnacle Labs',
      period: 'July 2025 - August 2025',
      description: 'Developed a Project using Java Swing and GUI Framework. 1. Created a Currency Converter GUI Application with a user-friendly interface, dropdown menus for currency selection, and real-time conversion functionality. \n 2. Created MORE to SHOP Web Application using Java Spring Boot, Spring Data JPA, Hibernate, PostgreSQL',
      tech: ['Java']
    },
    {
      role: 'Python Development Intern',
      company: 'ShadowFox',
      period: 'September 2025 - Present',
      description: 'This internship gives foundational skills from entry-level positions and get hands-on experience in Python Development. I will work on real-time projects and solve real-world challenges to enhance skills. The internship is structured into a four-week program with increasing project difficulty from beginner to advanced levels',
      tech: ['Python']
    }
    // {
    //   role: 'Junior Developer',
    //   company: 'Freelance Projects',
    //   period: 'September 2022 - December 2022',
    //   description: 'Worked on various client projects building custom APIs and backend solutions. Focused on code quality and system reliability.',
    //   tech: ['Python', 'Java', 'MySQL', 'Git']
    // }
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

    const elements = experienceRef.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={experienceRef} className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="fade-in text-center mb-20">
          <span className="text-orange-600 dark:text-orange-400 font-bold mono text-2xl md:text-3xl bg-orange-0 dark:bg-orange-900/30 px-8 py-4 rounded-full inline-block mb-6">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4 mb-6">
            Professional <span className="text-orange-600 dark:text-orange-400">Journey</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            My hands-on experience building real-world applications and systems
          </p>
        </div>
        
        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div 
              key={experience.company}
              className="fade-in relative"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-orange-200 dark:bg-orange-800"></div>
              
              {/* Experience Card */}
              <div className="flex items-start space-x-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center border-4 border-orange-200 dark:border-orange-800 relative z-10">
                  <div className="w-6 h-6 bg-orange-600 dark:bg-orange-400 rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {experience.role}
                      </h3>
                      <p className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                        {experience.company}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-mono">
                        {experience.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="fade-in text-center mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 inline-block">
            <p className="text-orange-600 dark:text-orange-400 md:text-xl font-semibold mono mb-4">
              Ready to collaborate and build amazing projects
            </p>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-500 md:text-xl dark:bg-orange-500 dark:hover:bg-orange-400 text-white font-bold rounded-lg transition-all duration-300"
            >
              View My Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
