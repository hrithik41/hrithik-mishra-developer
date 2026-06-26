"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StartupAnimation from "./components/StartupAnimation";

// Lazy loaded components (below the fold)
const About = dynamic(() => import("./components/About"));
const Skills = dynamic(() => import("./components/Skills"));
const Projects = dynamic(() => import("./components/Projects"));
const Experience = dynamic(() => import("./components/Experience"));
const Contact = dynamic(() => import("./components/Contact"));

export default function Portfolio() {
  const [hasBooted, setHasBooted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white flex flex-col font-sans select-none antialiased">
      {/* Startup Typewriter & Glitch Overlay */}
      {!hasBooted && (
        <StartupAnimation onComplete={() => setHasBooted(true)} />
      )}

      {/* Main Portfolio Content - fades in once boot sequence completes */}
      <div
        className={`flex-1 flex flex-col transition-all duration-1000 ${hasBooted ? "opacity-100 blur-none" : "opacity-0 blur-sm pointer-events-none"
          }`}
      >
        {/* Navigation Floating Header */}
        <Header />

        <main className="flex-1">
          {/* Hero Banner Section */}
          <HeroSection isVisible={hasBooted} />

          {/* About & Education Timeline */}
          <About />

          {/* Switched Tech Stack Grid */}
          <Skills />

          {/* Alternating Selected Projects Grid */}
          <Projects />

          {/* Professional & Award timelines */}
          <Experience />

          {/* Contact Form & Footer artwork */}
          <Contact />
        </main>
      </div>
    </div>
  );
}
