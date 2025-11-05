"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("education");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // ✅ Added logo paths here
  const education = [
    {
      school: "Lovely Professional University",
      degree: "Master of Computer Applications (MCA)",
      status: "Pursuing",
      location: "Phagwara, Punjab",
      year: "2024 - Present",
      logo: "/lpu.png", // 👈 image from /public folder
    },
    {
      school: "RNB Global University",
      degree: "Bachelor of Computer Applications (BCA)",
      status: "Completed",
      location: "Bikaner, Rajasthan",
      year: "2025",
      cgpa: "CGPA: 8.61",
      logo: "/rnb.png",
    },
    {
      school: "Army Public School",
      degree: "12th (Commerce, CBSE)",
      status: "Completed",
      location: "Bikaner, Rajasthan",
      year: "2022",
      score: "75%",
      logo: "/aps.png",
    },
    {
      school: "Army Public School",
      degree: "10th (CBSE)",
      status: "Completed",
      location: "Bikaner, Rajasthan",
      year: "2020",
      score: "63%",
      logo: "/aps.png",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative p-6 bg-gradient-to-r from-slate-700/30 to-slate-800/30 rounded-lg border border-blue-500/20 hover:border-cyan-400/60 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-x-2"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="pl-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* 🏫 School / College Logo */}
                  <div className="flex items-center gap-4">
                    <Image
                      src={edu.logo}
                      alt={edu.school}
                      width={60}
                      height={60}
                      className="rounded-full border border-cyan-400/30 shadow-[0_0_10px_#00BFFF40] hover:scale-105 transition-transform duration-300"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-cyan-400">{edu.degree}</h3>
                      <p className="text-gray-400">{edu.school}</p>
                      <p className="text-gray-400 text-sm">{edu.location}</p>
                    </div>
                  </div>

                  {/* 📆 Year */}
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">
                    {edu.year}
                  </span>
                </div>

                {/* 📚 CGPA or Score */}
                <div className="pl-[76px] mt-3">
                  {edu.cgpa && (
                    <p className="text-cyan-300 text-sm font-semibold">{edu.cgpa}</p>
                  )}
                  {edu.score && (
                    <p className="text-cyan-300 text-sm font-semibold">{edu.score}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
