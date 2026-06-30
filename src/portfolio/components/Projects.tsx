"use client";

import React, { useState, useEffect, useRef } from "react";
import { ShoppingCart, Terminal, Eye, ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tech: string[];
  color: string;
  link: string;
  github: string;
};

function ProjectItem({ project, idx }: { project: Project; idx: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [loadIframe, setLoadIframe] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setLoadIframe(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "150px 0px", // Preload 150px before entering viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = idx % 2 === 0;

  return (
    <div
      ref={containerRef}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-1000 ${
        isVisible ? "animate-reveal" : "opacity-0"
      }`}
    >
      {/* Visual Preview Block (Alternating Column Order) */}
      <div
        className={`lg:col-span-6 flex justify-center ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="relative w-full aspect-video rounded-xl border border-[#262626] bg-[#161616] p-1.5 overflow-hidden group">
          {/* Color accents gradient backdrop */}
          <div
            className={`absolute inset-0 bg-linear-to-tr ${project.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
          />

          {/* Outer frame styling */}
          <div className="w-full h-full rounded-lg bg-[#0a0a0a] border border-[#262626] overflow-hidden relative">
            <div className="absolute inset-0 bg-dot-grid opacity-20 z-10 pointer-events-none" />

            {/* Fake browser bar overlay */}
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-3 py-2 sm:px-6 sm:py-4 bg-transparent z-20 pointer-events-none">
              <div className="flex gap-2 backdrop-blur-md px-3 py-1.5 sm:py-2 rounded-full pointer-events-auto">
                <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ef4444]" />
                <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-[#eab308]" />
                <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-[#22c55e]" />
              </div>
              <div className="px-3 py-1 rounded text-[10px] sm:text-xs font-mono text-black font-bold backdrop-blur-md pointer-events-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a3a3a3] hover:text-blue-600 transition-colors duration-300"
                >
                  {project.title.toLowerCase().replace(/\s+/g, "")}.vercel.app
                </a>
              </div>
            </div>

            {/* Full-size Live Preview or Mock Graphic Visual */}
            <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] flex flex-col justify-center items-center">
              {project.link.startsWith("https://") && !project.link.includes("github.com") ? (
                loadIframe ? (
                  <iframe
                    src={project.link}
                    title={`${project.title} Live Preview`}
                    className="w-[125%] h-[125%] border-0 absolute top-0 left-0 select-none pointer-events-none origin-top-left scale-[0.8]"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3b82f6]"></div>
                    <span className="text-xs font-mono text-[#a3a3a3] mt-3 select-none">
                      Loading Live Preview...
                    </span>
                  </div>
                )
              ) : (
                <div className="flex flex-col items-center justify-center">
                  {project.title.toLowerCase() === "h cart" ? (
                    <ShoppingCart className="w-16 h-16 text-indigo-500 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]" />
                  ) : project.title.toLowerCase() === "vercel clone" ? (
                    <Terminal className="w-16 h-16 text-rose-500 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.3)]" />
                  ) : (
                    <Eye className="w-16 h-16 text-emerald-500 filter drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                  )}
                  <span className="text-xs font-mono text-[#a3a3a3] mt-3 select-none">
                    [ preview_placeholder.png ]
                  </span>
                </div>
              )}
            </div>

            {/* Technical specifications in footer overlay */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center text-[9px] sm:text-xs font-mono text-[#a3a3a3] px-3 py-2.5 sm:px-6 sm:py-4 bg-transparent z-20 pointer-events-none">
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded border border-neutral-900 bg-black/90 backdrop-blur-md shadow-2xl pointer-events-auto">
                SIZE: 1,412 KB
              </span>
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded border border-neutral-900 bg-black/90 backdrop-blur-md shadow-2xl text-emerald-400 font-semibold pointer-events-auto">
                STATUS: ONGOING
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Text Content Block */}
      <div
        className={`lg:col-span-6 flex flex-col space-y-6 ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <span className="text-xl sm:text-3xl font-bold text-white font-mono whitespace-nowrap">
            {project.title}
          </span>
          <div className="flex flex-wrap gap-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-md border border-[#262626] bg-[#161616] text-[#a3a3a3] hover:text-white hover:border-[#3b82f6]/40 transition-colors"
            >
              Check out
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-md border border-[#262626] bg-[#161616] text-[#a3a3a3] hover:text-white hover:border-[#3b82f6]/40 transition-colors"
              >
                Source Code
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-semibold text-[#3b82f6] font-mono">
          {project.subtitle}
        </h3>

        <p className="text-base sm:text-lg md:text-xl text-[#a3a3a3] leading-relaxed">
          {project.description}
        </p>

        <ul className="space-y-3">
          {project.bullets.map((bullet, bulletIdx) => (
            <li
              key={bulletIdx}
              className="flex items-start gap-2.5 text-sm sm:text-base text-[#a3a3a3]"
            >
              {/* Sparkle list bullet icon */}
              <svg
                className="w-5 h-5 text-[#3b82f6] mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 9l-4 3 4 3M16 9l4 3-4 3"
                />
              </svg>
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 pt-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded text-xs sm:text-sm font-mono border border-[#262626]/80 bg-[#161616]/20 text-[#a3a3a3]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [isHeaderIntersecting, setIsHeaderIntersecting] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projectsData: Project[] = [
    {
      title: "H Cart",
      subtitle: "A Full Stack E-Commerce Shopping Platform",
      description:
        "A premium, secure e-commerce shopping platform featuring integrated payments and clean, modern checkout flows.",
      bullets: [
        "Integrated Razorpay payment gateway to support secure, instant transaction processing.",
        "Built-in authentication featuring secure credentials, legal name validation, and protected routes.",
        "Developed a fully responsive layout with state persistence for a seamless shopping experience across devices.",
      ],
      tech: ["Next.js", "React", "MySQL", "Prisma ORM", "TypeScript", "Tailwind CSS", "Razorpay API"],
      color: "from-indigo-600/30 via-violet-600/20 to-transparent",
      link: "https://hcart.vercel.app",
      github: "https://github.com/hrithik41/hcart",
    },
    {
      title: "Vercel Clone",
      subtitle: "Cloud Deployment Platform with CI/CD Pipelines",
      description:
        "A simplified developer platform designed to clone Vercel's automated repository deployment and static site hosting pipelines.",
      bullets: [
        "Built a pipeline allowing direct project upload from Git repositories, building dynamic builds, and hosting them on AWS S3.",
        "Implemented real-time build logging and event states backed by Redis message queues and WebSockets.",
        "Optimized asset delivery times globally by routing built project builds through cloud storage containers.",
      ],
      tech: ["TypeScript", "Node.js", "Redis", "AWS S3", "Docker", "Vite"],
      color: "from-red-600/30 via-rose-600/20 to-transparent",
      link: "https://github.com/hrithik41",
      github: "https://github.com/hrithik41/hcart",
    },
    {
      title: "SiteEase",
      subtitle: "Accessibility-First Browser Extension for Inclusive Web",
      description:
        "A Chrome browser extension designed to optimize website layouts dynamically for users with visual, motor, or cognitive impairments.",
      bullets: [
        "Built accessibility toggles for colorblind-friendly color filters (Protanopia, Deuteranopia, Tritanopia).",
        "Integrated dynamic DOM parsing to convert custom web pages into dyslexia-friendly formats (spacing, special fonts).",
        "Utilized Chrome Extension Storage APIs to preserve accessibility settings state persistently across browser tabs.",
      ],
      tech: ["JavaScript", "HTML5", "CSS3", "Chrome APIs", "Tailwind CSS"],
      color: "from-emerald-600/30 via-teal-600/20 to-transparent",
      link: "https://github.com/hrithik41",
      github: "https://github.com/hrithik41/hcart",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] border-t border-[#262626] relative">
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-20 transition-all duration-1000 ${
            isHeaderIntersecting ? "animate-reveal" : "opacity-0"
          }`}
        >
          <span className="text-sm sm:text-base font-mono tracking-widest text-[#3b82f6] uppercase">
            03. Selected Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">Stuff I Built</h2>
        </div>

        {/* Projects Grid List */}
        <div className="space-y-32">
          {projectsData.map((project, idx) => (
            <ProjectItem key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

