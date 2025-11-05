"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      setMousePos({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transform transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-2">
              <p className="text-cyan-400 font-semibold text-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                Devender Singh
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {" "}
                  Shekhawat
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-300 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              MCA Student at Lovely Professional University | Aspiring Cloud & Cybersecurity Engineer | Networking & AWS Enthusiast.
            </p>

            <div className="flex gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transform hover:-translate-y-1 transition-all duration-300"
              >
                View Work
              </a>
            </div>

            <div className="flex gap-6 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <a
                href="https://github.com/devendershekhawat2004-DSS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transform hover:scale-125 hover:-translate-y-1 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/devender-singh-shekhawat-0046ba2b2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transform hover:scale-125 hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:devender.shekhawat2022@rnbglobal.ac.in"
                className="text-gray-400 hover:text-cyan-400 transform hover:scale-125 hover:-translate-y-1 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div
            className="relative flex justify-center"
            style={{
              transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
            }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-40 animate-pulse" />

              {/* Profile image container */}
              <div className="relative w-full h-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-3xl p-1 overflow-hidden backdrop-blur-sm">
                <div className="w-full h-full bg-slate-800 rounded-3xl flex items-center justify-center overflow-hidden group cursor-pointer">
                  <img
                    src="/professional-portrait-software-engineer.jpg"
                    alt="Devender Singh Shekhawat"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -top-8 -right-8 w-24 h-24 border-2 border-cyan-500/50 rounded-full animate-spin-slow"
              style={{ animationDuration: "20s" }}
            />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-blue-500/30 rounded-full animate-pulse" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-cyan-400" size={32} />
        </div>
      </div>
    </section>
  )
}
