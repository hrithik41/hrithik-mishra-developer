"use client";

import React, { useState, useEffect, useRef } from "react";

type Skill = {
  name: string;
  level: string;
  icon: string;
};

type SkillsMap = {
  [key: string]: Skill[];
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("backend");
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: "backend", label: "Backend Development" },
    { id: "frontend", label: "Frontend Development" },
    { id: "languages", label: "Languages" },
    { id: "cloud", label: "Cloud & Databases" },
  ];

  const skillsData: SkillsMap = {
    backend: [
      { name: "Node.js", level: "Advanced", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express.js", level: "Advanced", icon: "https://cdn.simpleicons.org/express/white" },
      { name: "REST APIs", level: "Expert", icon: "https://cdn.simpleicons.org/postman" },
      { name: "Prisma ORM", level: "Advanced", icon: "https://cdn.simpleicons.org/prisma/white" },
      { name: "Redis / Valkey", level: "Intermediate", icon: "https://cdn.simpleicons.org/redis" },
      { name: "Socket.io", level: "Intermediate", icon: "https://cdn.simpleicons.org/socketdotio/white" },
    ],
    frontend: [
      { name: "React", level: "Advanced", icon: "https://cdn.simpleicons.org/react" },
      { name: "Next.js", level: "Advanced", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "Tailwind CSS", level: "Advanced", icon: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "TypeScript", level: "Advanced", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "HTML5", level: "Advanced", icon: "https://cdn.simpleicons.org/html5" },
      { name: "CSS3", level: "Advanced", icon: "https://cdn.simpleicons.org/css" }, // FIXED
    ],
    languages: [
      { name: "JavaScript", level: "Advanced", icon: "https://cdn.simpleicons.org/javascript" },
      { name: "TypeScript", level: "Advanced", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Python", level: "Intermediate", icon: "https://cdn.simpleicons.org/python" },
      { name: "Java", level: "Intermediate", icon: "https://cdn.simpleicons.org/openjdk" }, // FIXED
      { name: "SQL", level: "Advanced", icon: "https://cdn.simpleicons.org/mysql" },
    ],
    cloud: [
      { name: "MySQL", level: "Advanced", icon: "https://cdn.simpleicons.org/mysql" },
      { name: "PostgreSQL", level: "Intermediate", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "AWS", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", level: "Intermediate", icon: "https://cdn.simpleicons.org/docker" },
      { name: "CI / CD", level: "Intermediate", icon: "https://cdn.simpleicons.org/githubactions" },
      { name: "Git", level: "Advanced", icon: "https://cdn.simpleicons.org/git" },
    ],
  };

  const auxiliaryTools = [
    "Git",
    "GitHub",
    "Postman",
    "LangChain",
    "CrewAI",
    "FastMCP",
    "Gemini APIs",
    "Ngrok",
    "Nodemailer",
    "Resend API",
    "Linux Commands",
    "Vercel",
    "Render",
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-[#0a0a0a] border-t border-[#262626] relative">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12">

        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${
          isIntersecting ? "animate-reveal" : "opacity-0"
        }`}>
          <span className="text-sm sm:text-base font-mono tracking-widest text-[#3b82f6] uppercase">
            02. Technologies
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">My Tech Stack</h2>
        </div>

        {/* Tab Buttons */}
        <div className={`mb-12 border-b border-[#262626] pb-5 overflow-x-auto scrollbar-hide transition-all duration-1000 ${
          isIntersecting ? "animate-reveal animation-delay-300" : "opacity-0"
        }`}>
          <div className="flex gap-3 w-max md:w-auto">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-6 py-3 text-sm font-semibold font-mono rounded-md transition-all duration-300 ${activeTab === tab.id
                  ? "bg-[#3b82f6] text-white shadow-lg shadow-blue-500/25"
                  : "border border-[#262626] bg-[#161616]/40 text-[#a3a3a3] hover:text-white"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {skillsData[activeTab].map((skill, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl border border-[#262626] bg-[#161616]/40 flex flex-col items-center text-center group hover:border-[#3b82f6]/40 hover:bg-[#161616]/80 transition-all duration-300 relative overflow-hidden ${
                isIntersecting ? "animate-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: `${400 + idx * 100}ms` }}
            >
              {/* Subtle hover background glow */}
              <div className="absolute inset-0 bg-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Official Brand Logo SVG */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                loading="lazy"
                className="w-10 h-10 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
              />

              <h4 className="font-bold text-base text-white group-hover:text-[#3b82f6] transition-colors">
                {skill.name}
              </h4>
              <p className="text-xs sm:text-sm text-[#a3a3a3] font-mono mt-1.5">{skill.level}</p>
            </div>
          ))}
        </div>

        {/* Auxiliary Tools Section */}
        <div className={`p-8 rounded-xl border border-[#262626] bg-[#161616]/20 transition-all duration-1000 ${
          isIntersecting ? "animate-reveal animation-delay-700" : "opacity-0"
        }`}>
          <h3 className="text-sm sm:text-base font-semibold text-white font-mono uppercase tracking-wider mb-5">
            Other Tools & Libraries
          </h3>
          <div className="flex flex-wrap gap-3">
            {auxiliaryTools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-mono border border-[#262626] bg-[#161616]/40 text-[#a3a3a3] hover:border-[#262626]/80 hover:text-white transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
