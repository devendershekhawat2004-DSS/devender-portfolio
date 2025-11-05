"use client";

import { useEffect, useState } from "react";
import { FaCertificate } from "react-icons/fa";

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("certifications");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // 🎓 Updated and polished certification list
  const certificates = [
    "Python Bootcamp: Learn Python from Scratch — Code with Harry (Oct 2025)",
    "The Ultimate Job Ready Data Science Course — Code with Harry (Oct 2025)",
    "Build Your Own Generative AI Model — NxtWave (Nov 2023)",
    "Certificate of Appreciation: Workshop on 'Build Your Own Generative AI Model' — NxtWave (Nov 2023)",
    "NCC 'A' Certificate — National Cadet Corps, India (Sep 2020)",
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30 backdrop-blur">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Certifications{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            & Courses
          </span>
        </h2>

        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <ul className="space-y-4">
            {certificates.map((cert, index) => (
              <li
                key={index}
                className="flex items-start gap-4 bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-xl p-4 border border-blue-500/20 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                {/* Certificate icon */}
                <div className="flex-shrink-0 mt-1">
                  <FaCertificate className="text-cyan-400 text-2xl" />
                </div>
                {/* Certificate text */}
                <p className="text-gray-300 leading-relaxed">{cert}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
