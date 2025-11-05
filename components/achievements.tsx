"use client"

import { useEffect, useState } from "react"
import { Award, Trophy } from "lucide-react"

export default function Achievements() {
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

    const element = document.getElementById("achievements")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const achievements = [
    {
      title: "Documentary Competition Winner",
      description: 'Won 2nd place in Documentary Competition "Netra" organized by RNB Global University.',
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Student Coordinator",
      description: "Served as Student Coordinator during Camel Festival at RNB Global University.",
      icon: Award,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "ICRAAST 2023 Attendee",
      description: "Attended International Conference on Recent Advances in Applied Science and Technology.",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
    },
    
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Achievements</span>
        </h2>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div
                  key={index}
                  className="group relative p-6 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl border border-purple-500/20 hover:border-purple-400/60 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />

                  <div className="relative z-10">
                    <div
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${achievement.color} mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent size={24} />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
