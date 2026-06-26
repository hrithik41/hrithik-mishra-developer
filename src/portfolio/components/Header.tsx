"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll height to add subtle shadow/border effects when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "py-3 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#262626]"
        : "py-5 bg-transparent"
        }`}
    >
      <div className="w-full px-4 md:px-8 lg:px-12 flex justify-between items-center">
        {/* Brand Logo / Name */}
        <a
          href="#home"
          className="text-xl sm:text-2xl font-mono font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          <span className="text-[#a3a3a3]">~</span><span className="text-[#3b82f6]">/hrithik</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = item.label === "Home";
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative py-2.5 text-base font-medium transition-colors ${
                  isActive ? "text-white" : "text-[#a3a3a3] hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-linear-to-r from-pink-500 to-purple-600 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action button (Contact) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="flex items-center gap-2.5 px-6 py-3 text-base font-semibold rounded-full text-white bg-linear-to-r from-[#d946ef] to-[#8b5cf6] hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          >
            Contact Me
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md border border-[#262626] bg-[#161616] text-[#a3a3a3] hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-[#262626] px-8 py-6 flex flex-col gap-4 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-base font-medium text-[#a3a3a3] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full text-center py-3 text-sm font-semibold rounded-md text-white bg-linear-to-r from-pink-500 to-purple-600"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}
