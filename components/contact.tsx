"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, Linkedin, Github, ArrowRight } from "lucide-react"

export default function Contact() {
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

    const element = document.getElementById("contact")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Let's{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Connect</span>
        </h2>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="group p-6 bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-lg border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <Phone
                    className="text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <a href="tel:+918146177163" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      +91 8146177163
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-lg border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <Mail
                    className="text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a
                      href="mailto:devender.shekhawat2022@rnbglobal.ac.in"
                      className="text-gray-400 hover:text-cyan-400 transition-colors break-all"
                    >
                      devender.shekhawat2022@rnbglobal.ac.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-lg border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <Linkedin
                    className="text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold text-white mb-1">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/devender-singh-shekhawat-0046ba2b2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors break-all"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-lg border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-4">
                  <Github
                    className="text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold text-white mb-1">GitHub</h3>
                    <a
                      href="https://github.com/devendershekhawat2004-DSS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      View Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative p-8 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-slate-800/50 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to collaborate?</h3>
                <p className="text-gray-300 mb-6">
                  I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
                </p>
                <a
                  href="mailto:devender.shekhawat2022@rnbglobal.ac.in"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300 group/btn"
                >
                  Send Email
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 mt-12 pt-8 text-center text-gray-400">
        <p>© 2025 Devender Singh Shekhawat. All rights reserved.</p>
      </div>
    </section>
  )
}
