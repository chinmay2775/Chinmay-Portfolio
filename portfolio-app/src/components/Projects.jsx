import { useEffect, useRef } from 'react'

const Projects = () => {
  const projectsRef = useRef(null)

  // Enhanced projects array with live demo URLs
  const projects = [
    {
      title: "Skill Based Study Buddy",
      description: "A Skill-Based Learning Platform designed to help students and professionals enhance their skills through a structured and interactive learning experience. This project features a modern UI, seamless navigation, and engaging animations to create a unique and immersive learning environment.",
      tech: ["Python", "CSS", "JavaScript", "HTML","Flask"],
      github: "https://github.com/chinmay2775/Skill-Based-Study-Buddy",
      live: null // No live demo for this project
      
    },
    {
      title: "Currency Converter", 
      description: "A Java Swing desktop app that converts between 5 currencies using preset exchange rates. Features dropdown menus, input fields, instant conversion with formatting, and error handling for invalid inputs. Demonstrates core Java GUI programming concepts in a simple, standalone utility.",
      tech: ["Java","Swing","Java GUI"],
      github: "https://github.com/chinmay2775/Currency-Converter",
      live: null // No live demo for this desktop app
    },
    {
      title: "Tic Tac Toe Game",
      description: "The TicTacToe game uses Java Swing with JFrame, JButton, and ActionListener to create a 3x3 clickable grid. It features gradient background, and game logic methods for win detection, making it a digital version of classic Tic-Tac-Toe.",
      tech: ["Java", "Swing", "Java GUI"],
      github: "https://github.com/yourusername/data-pipeline",
      live: null // No live demo for this desktop app
    },
    {
      title: "MORE to SHOP",
      description: "E-Commerce Web Application:A full-stack e-commerce platform built with Java and Spring Boot. This project demonstrates core online retail functionalities powered by a robust RESTful API.",
      tech: ["Java", "Spring Boot","Spring MVC","Spring Data JPA","Hibernate","PostgreSQL", "React"],
      github: "https://github.com/chinmay2775/More-to-Shop/tree/main",
      live: null //"https://student-mgmt-demo.vercel.app"
    }
    // {
    //   title: "Task Tracker API",
    //   description: "RESTful API for task management with user authentication, task categorization, deadline notifications, and progress tracking.",
    //   tech: ["Python", "Django", "PostgreSQL", "REST Framework"],
    //   github: "https://github.com/yourusername/task-tracker-api",
    //   live: "https://task-tracker-api.herokuapp.com"
    // },
    // {
    //   title: "Weather Dashboard",
    //   description: "Real-time weather application that fetches data from external APIs and displays interactive weather information with forecasts.",
    //   tech: ["JavaScript", "React", "Node.js", "Weather API"],
    //   github: "https://github.com/yourusername/weather-dashboard",
    //   live: "https://weather-dashboard-demo.netlify.app"
    // },
    // {
    //   title: "Library Management System",
    //   description: "Desktop application for managing library books, member records, and book borrowing system with database integration and reporting.",
    //   tech: ["C++", "MySQL", "Qt Framework"],
    //   github: "https://github.com/yourusername/library-management",
    //   live: "https://your-chat-app.netlify.app"
    // },
    // {
    //   title: "Expense Tracker API",
    //   description: "Backend service for tracking personal expenses with categorization, budget planning, and financial analytics features.",
    //   tech: ["Node.js", "Express", "MongoDB", "JWT"],
    //   github: "https://github.com/yourusername/expense-tracker",
    //   live: "https://expense-tracker-api.onrender.com"
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

    const elements = projectsRef.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={projectsRef} className="py-24 px-4 bg-white dark:bg-slate-800">
      {/* INCREASED CONTAINER WIDTH */}
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="fade-in text-center mb-24">
          <span className="text-purple-600 dark:text-purple-400 font-bold mono text-2xl md:text-3xl bg-purple-0 dark:bg-purple-900/30 px-8 py-4 rounded-full inline-block mb-6">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4 mb-6">
            Featured <span className="text-purple-600 dark:text-purple-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Some of the projects I've built to solve real-world problems
          </p>
        </div>
        
        {/* ENLARGED PROJECTS GRID - 2 cols on md, 4 cols on lg+ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="fade-in bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 hover:shadow-xl hover:shadow-slate-200 dark:hover:shadow-slate-900/50 transition-all duration-300 transform hover:-translate-y-3 overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* LARGER CARD CONTENT */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-base">
                  {project.description}
                </p>
                
                {/* LARGER TECH STACK BADGES */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* ENHANCED BUTTON SECTION WITH VIEW LIVE */}
                <div className="flex flex-col gap-3">
                  {/* GitHub Link */}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 dark:bg-slate-600 text-white hover:bg-slate-800 dark:hover:bg-slate-500 font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                  
                  {/* VIEW LIVE BUTTON - Only show if live URL exists */}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-green-600 dark:bg-green-500 text-white hover:bg-green-500 dark:hover:bg-green-400 font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live
                    </a>
                  )}
                  
                  {/* Show message if no live demo */}
                  {!project.live && (
                    <div className="text-center py-2 text-slate-500 dark:text-slate-400 text-sm italic">
                      Backend/Desktop Project
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="fade-in text-center mt-20">
          <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 border border-slate-200 dark:border-slate-600 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Want to see more projects?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              I'm constantly working on new projects and learning new technologies. 
              Check out my GitHub for the latest updates!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/chinmay2775" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-slate-600 text-white hover:bg-slate-800 dark:hover:bg-slate-500 font-semibold rounded-lg transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Visit My GitHub
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-semibold rounded-lg transition-all duration-300"
              >
                Let's Collaborate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
