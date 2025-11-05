"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "DM Fitness Website",
      description:
        "Designed and developed a responsive fitness-focused website to track workouts, meal plans, and BMI with integrated MySQL database.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      impact: "30% increase in user engagement",
      link: "https://dm-fitness.page.gd",
      image: "/dmfitness.png", // 👈 preview image path
    },
    {
      title: "Fitness Tracker App",
      description:
        "Created a personal portfolio using Next.js, TypeScript, and Tailwind CSS with animations and smooth scroll.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      impact: "Showcases my skills and achievements interactively",
      link: "https://fitness-tracker-24pz.vercel.app",
      image: "/Fitness-preview.png", // 👈 add your own image
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Featured{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-10">
            {projects.map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative p-6 bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-xl border border-cyan-500/20 hover:border-cyan-400/60 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                {/* Preview Image */}
                <div className="relative w-full h-56 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Project Details */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <p className="text-cyan-400 font-semibold mb-4">
                    {project.impact}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30 group-hover:border-cyan-400/60 group-hover:bg-cyan-500/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 transform group-hover:translate-x-2 transition-transform duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
