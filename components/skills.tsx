"use client";

import { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiAdobephotoshop,
  SiVercel,
  SiNodedotjs,
} from "react-icons/si";

// ✅ Added proper TypeScript interfaces here
interface SkillItem {
  name: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // ✅ Type annotation added for TypeScript
  const skillCategories: SkillCategory[] = [
    {
      category: "Languages",
      skills: [
        { name: "C", icon: <SiC /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Data Structures in C", icon: <FaDatabase /> },
      ],
    },
    {
      category: "Tools & Software",
      skills: [
        { name: "MS Office", icon: <FaTools /> },
        { name: "Photoshop", icon: <SiAdobephotoshop /> },
        { name: "Dreamweaver", icon: <FaGitAlt /> },
        { name: "Vercel", icon: <SiVercel /> },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem-Solving" },
        { name: "Teamwork" },
        { name: "Communication" },
        { name: "Adaptability" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </span>
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
                <h3 className="text-lg font-bold text-cyan-400 mb-4">
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-2 justify-start">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="flex items-center gap-2 px-3 py-1.5 bg-slate-600/50 text-gray-200 rounded-full text-sm font-medium border border-cyan-500/30 group-hover:border-cyan-400/60 group-hover:bg-cyan-500/20 transition-all duration-300 hover:scale-105"
                    >
                      {skill.icon && (
                        <span className="text-cyan-400 text-lg">{skill.icon}</span>
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
