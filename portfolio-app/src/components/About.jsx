import { useEffect, useRef } from 'react'

const About = () => {
  const aboutRef = useRef(null)

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

    const elements = aboutRef.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={aboutRef} className="py-24 px-4 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <div className="fade-in">
            <div className="mb-8">
              {/* ONLY THIS BADGE SIZE INCREASED */}
              <span className="text-blue-600 dark:text-blue-400 font-bold mono text-2xl md:text-3xl bg-blue-0 dark:bg-blue-900/30 px-8 py-4 rounded-full inline-block mb-6">
                About Me
              </span>
              {/* MAIN HEADING STAYS SAME */}
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4 mb-6">
                Passionate About 
                <span className="text-blue-600 dark:text-blue-400"> Backend </span>
                Development
              </h2>
            </div>

            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 mb-8">
              <p>
                I am <strong className="text-slate-900 dark:text-white">Chinmay Chaudhari</strong>, a
                Computer Science student at Pimpri Chinchwad University. With expertise in C, C++, Python
                and Java I craft robust backend solutions.
              </p>
              <p>
                My journey is driven by a passion for building <em>scalable, efficient systems</em> that power
                modern applications. I enjoy tackling complex challenges and exploring cutting-edge tech.
              </p>
              <p>
                Armed with solid foundations in algorithms and system design, I'm eager to contribute to
                innovative projects that make a meaningful impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { number: "4+", label: "Languages" },
                { number: "5+", label: "Projects" },
                { number: "3+", label: "Years Learning" }
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-0 ">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 text-white font-bold rounded-lg transition-all duration-300"
              >
                View Skills
              </button>
              {/* NEW RESUME BUTTON */}
              <a
                href="\resume\Chinmay_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-500 dark:bg-green-500 dark:hover:bg-green-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </a>
            </div>
          </div>
          
          {/* Profile Photo + Coding Window Section (unchanged) */}
          <div className="fade-in">
            <div className="flex flex-col items-center space-y-8">
              
              {/* Profile Photo */}
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Chinmay Chaudhari - Backend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Status indicator */}
                <div className="absolute bottom-6 right-6 w-8 h-8 bg-green-500 border-4 border-white dark:border-slate-700 rounded-full shadow-lg">
                  <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 dark:bg-blue-400 rounded-xl shadow-lg animate-pulse opacity-80"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-green-500 dark:bg-green-400 rounded-full shadow-lg animate-bounce opacity-80"></div>
                
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-2xl blur-xl opacity-20 dark:opacity-30 scale-105 -z-10"></div>
              </div>

              {/* Coding Terminal Window */}
              <div className="w-full max-w-sm bg-slate-900 dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 dark:border-slate-600 overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-slate-800 dark:bg-slate-700 px-4 py-3 border-b border-slate-700 dark:border-slate-600 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-slate-400 text-sm ml-4 font-mono">chinmay@backend:~$</div>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm space-y-3">
                  <div className="text-green-400">$ cat developer.json</div>
                  <div className="text-slate-300 pl-2">
                    <div className="text-cyan-400">&#123;</div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-yellow-400">"name"</span>: <span className="text-green-400">"Chinmay Chaudhari"</span>,</div>
                      <div><span className="text-yellow-400">"role"</span>: <span className="text-green-400">"Backend Developer"</span>,</div>
                      <div><span className="text-yellow-400">"university"</span>: <span className="text-green-400">"Pimpri Chinchwad"</span>,</div>
                      <div><span className="text-yellow-400">"languages"</span>: [<span className="text-green-400">"C", "C++", "Python", "Java"</span>],</div>
                      <div><span className="text-yellow-400">"passion"</span>: <span className="text-green-400">"Scalable Systems"</span>,</div>
                      <div><span className="text-yellow-400">"status"</span>: <span className="text-green-400">"Ready to innovate"</span></div>
                    </div>
                    <div className="text-cyan-400">&#125;</div>
                  </div>
                  <div className="text-green-400 mt-4">$ echo "Building the future"</div>
                  <div className="text-slate-300">Building the future</div>
                  <div className="text-green-400 animate-pulse">$ _</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
