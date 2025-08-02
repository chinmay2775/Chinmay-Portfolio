import { useEffect, useRef } from 'react'

const Education = () => {
  const educationRef = useRef(null)

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science and Engineering',
      institution: 'Pimpri Chinchwad University',
      location: 'Pune, Maharashtra',
      period: '2023 - 2027',
      grade: 'CGPA: 6.9/10',
      description: 'Specialized in backend development, data structures and algorithms. Developed strong programming skills in C, C++, Python, and Java. Completed projects in web development, database management.',
      courses: ['Data Structures & Algorithms', 'Database Management', 'Software Engineering', 'Computer Networks', 'Operating Systems']
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      field: 'Science (PCM)',
      institution: 'R.C Patel Junior College',
      location: 'Shirpur, Maharashtra',
      period: '2019 - 2021',
      grade: '85.50%',
      description: 'Focused on Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills.',
      courses: ['Mathematics', 'Physics', 'Chemistry', 'English', 'HTML']
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      field: 'General Studies',
      institution: 'R.C Patel English Medium Secondary School',
      location: 'Shirpur, Maharashtra',
      period: '2021 - 2023',
      grade: '80.50%',
      description: 'Strong foundation in core subjects with excellent performance in Mathematics.',
      courses: ['Mathematics', 'Science', 'English', 'Hindi', 'Social Studies']
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

    const elements = educationRef.current?.querySelectorAll('.fade-in')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={educationRef} className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="fade-in text-center mb-20">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold mono text-2xl md:text-3xl bg-indigo-0 dark:bg-indigo-900/30 px-8 py-4 rounded-full inline-block mb-6">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-4 mb-6">
            Academic <span className="text-indigo-600 dark:text-indigo-400">Journey</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            My educational background and academic achievements that shaped my technical foundation
          </p>
        </div>
        
        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={edu.institution}
              className="fade-in"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="grid md:grid-cols-3 gap-6">
                  
                  {/* Left Section - Degree Info */}
                  <div className="md:col-span-2">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                        {edu.field}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-slate-600 dark:text-slate-400">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {edu.institution}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    {/* Key Courses */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
                        Key Courses
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span 
                            key={course}
                            className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Section - Timeline & Grade */}
                  <div className="flex flex-col items-center md:items-end text-center md:text-right">
                    <div className="mb-6">
                      <div className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-mono mb-3">
                        {edu.period}
                      </div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">
                        {edu.grade}
                      </div>
                    </div>
                    
                    {/* Achievement Badge */}
                    <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center border-4 border-indigo-200 dark:border-indigo-800">
                      <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="fade-in mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Understanding Basic SQL Syntax',
                  issuer: 'Coursera Project Network',
                  year: 'Mar 2025'
                },
                {
                  title: 'ALTAIR DATA SCIENCE MASTER VIRTUAL INTERNSHIP',
                  issuer: 'Altair',
                  year: 'Oct - Dec 2024'
                },
                {
                  title: 'ZSCALER ZERO TRUST CLOUD SECURITY VIRTUAL INTERNSHIP',
                  issuer: 'ZScaler',
                  year: 'Jan - Mar 2025'
                },
                // {
                //   title: 'Web Development Bootcamp',
                //   issuer: 'FreeCodeCamp',
                //   year: '2022'
                // },
                // {
                //   title: 'Data Structures & Algorithms',
                //   issuer: 'GeeksforGeeks',
                //   year: '2022'
                // },
                // {
                //   title: 'Git & Version Control',
                //   issuer: 'GitHub Learning Lab',
                //   year: '2021'
                // }
              ].map((cert, index) => (
                <div key={cert.title} className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">
                    {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="fade-in text-center mt-16">
          <div className="bg-white dark:bg-slate-800 md:text-xl rounded-xl p-6 border border-slate-200 dark:border-slate-700 inline-block">
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold mono mb-4">
              Continuously learning and growing
            </p>
            <button 
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-bold rounded-lg transition-all duration-300"
            >
              View My Skills
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
