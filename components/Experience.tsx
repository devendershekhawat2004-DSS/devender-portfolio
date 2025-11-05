"use client";

import { useEffect, useState } from "react";
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
      company: "Optmyzr - SDE Intern",
      role: "PPC Management Software Company (Since March 2023)",
      description: [
        "Integrated Google Ads and Bing Ads APIs into Optmyzr’s backend infrastructure using .NET.",
        "Enhanced the UI of Optmyzr’s web app using React, PHP, and CoffeeScript.",
      ],
      tech: "Redux · C# · CodeIgniter · .NET Framework · React.js · PHP",
    },
    {
      company: "Payben Private Limited - Freelancer",
      role: "April 2022 – March 2023",
      description: [
        "Re-developed a recharge and bill payment platform for Payben startup.",
        "Managed recharge services and guaranteed rewards.",
        "Enabled agents to provide mobile recharge services.",
      ],
      tech: "Android and Web Platforms",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 backdrop-blur"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Work{" "}
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
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="text-cyan-400" size={22} />
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
