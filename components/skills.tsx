"use client"

import { useEffect, useState } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      category: "Languages",
      skills: ["C", "C++", "Java", "Python"],
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "XML"],
    },
    {
      category: "Database",
      skills: ["MySQL", "Data Structures in C"],
    },
    {
      category: "Tools & Software",
      skills: ["MS Office", "Photoshop", "Dreamweaver"],
    },
    {
      category: "Soft Skills",
      skills: ["Problem-Solving", "Teamwork", "Communication", "Adaptability"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
        </h2>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-lg border border-blue-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 cursor-pointer"
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-4">{category.category}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-slate-600/50 text-gray-200 rounded-full text-sm font-medium border border-cyan-500/30 group-hover:border-cyan-400/60 group-hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
