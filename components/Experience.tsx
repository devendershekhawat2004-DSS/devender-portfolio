"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("experience");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "Pantech Solutions – Web Development Intern",
      role: "Internship | January 2023 – April 2023",
      logo: "/pantech-logo.png", // 👈 Add your logo file in /public folder
      description: [
        "Built responsive web interfaces using HTML, CSS, and JavaScript.",
        "Developed and optimized front-end components for dynamic web apps.",
        "Collaborated with mentors to implement real-time features and ensure cross-browser compatibility."
      ],
      tech: "HTML · CSS · JavaScript · React.js",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 backdrop-blur"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Internship{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-xl border border-blue-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="text-cyan-400" size={22} />
                  {exp.logo && (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={32}
                      height={32}
                      className="rounded-md"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {exp.company}
                  </h3>
                </div>

                <p className="text-gray-400 mb-4">{exp.role}</p>

                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <p className="text-sm text-cyan-300 font-medium">
                  <span className="text-gray-400">Tech Used:</span> {exp.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
