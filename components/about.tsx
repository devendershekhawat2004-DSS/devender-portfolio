"use client"

import { useEffect, useState } from "react"

export default function About() {
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

    const element = document.getElementById("about")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education",
                description:
                  "Currently pursuing MCA at Lovely Professional University with a solid foundation in Computer Applications and programming.",
              },
              {
                title: "Internship",
                description:
                  "Completed a Web Development Internship at Pantech Solutions, gaining hands-on experience in building responsive and dynamic web applications using HTML, CSS, JavaScript, and React.js.",
              },
              {
                title: "Focus & Goals",
                description:
                  "Dedicated to becoming a full-stack web developer. Passionate about front-end design, problem-solving, and building modern digital solutions that combine creativity with performance.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-500/60 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
