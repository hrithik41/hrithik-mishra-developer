"use client";

import React, { useState } from "react";
import { submitContactForm } from "../../lib/api";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setStatusMsg("");
    setIsSuccess(false);

    try {
      const res = await submitContactForm(formData);
      if (res.status === "success") {
        setIsSuccess(true);
        setStatusMsg("Message sent successfully! Hrithik will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMsg(res.message || "Failed to send message.");
      }
    } catch (err) {
      console.error("Submit contact form error:", err);
      const error = err as any;
      setStatusMsg(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative pt-24 pb-0 bg-[#0a0a0a] border-t border-[#262626] overflow-hidden">

      {/* Top half: Contact Form & Info Cards */}
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 mb-24 relative z-10">

        {/* Section Header */}
        <div className="mb-20">
          <span className="text-sm sm:text-base font-mono tracking-widest text-[#3b82f6] uppercase">
            06. Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">Let&apos;s Connect</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">Reach out directly</h3>
            <p className="text-base sm:text-lg md:text-xl text-[#a3a3a3] leading-relaxed">
              Whether you want to discuss a new project, query details about my backend database configurations, or just say hello, my inbox is open!
            </p>

            <div className="space-y-6">
              {/* Email Card */}
              <div className="group p-6 rounded-xl border border-[#262626] bg-[#161616]/40 flex items-center gap-5 hover:border-[#3b82f6]/40 hover:bg-[#161616]/70 transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.918l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91A2.25 2.25 0 0 1 2.25 6.993V6.75"
                    />
                  </svg>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-[#737373] uppercase tracking-wider">
                    Email
                  </h4>

                  <a
                    href="mailto:hrithikmishra9594@gmail.com"
                    className="text-base sm:text-lg font-semibold text-white hover:text-[#3b82f6] transition-colors"
                  >
                    hrithikmishra9594@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="group p-6 rounded-xl border border-[#262626] bg-[#161616]/40 flex items-center gap-5 hover:border-[#3b82f6]/40 hover:bg-[#161616]/70 transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11z"
                    />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-[#737373] uppercase tracking-wider">
                    Location
                  </h4>

                  <span className="text-base sm:text-lg font-semibold text-white">
                    Mumbai, Maharashtra, India
                  </span>
                </div>
              </div>

              {/* Social Links Card */}
              <div className="p-6 rounded-xl border border-[#262626] bg-[#161616]/40 flex flex-col gap-4">
                <h4 className="text-sm font-mono text-[#a3a3a3] uppercase">Find me on</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/hrithik41"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md border border-[#262626] bg-[#0a0a0a] text-xs sm:text-sm font-mono text-[#a3a3a3] hover:text-white hover:border-white/20 transition-all"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hrithik41/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md border border-[#262626] bg-[#0a0a0a] text-xs sm:text-sm font-mono text-[#a3a3a3] hover:text-white hover:border-blue-500/20 transition-all"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/hrithik.41"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md border border-[#262626] bg-[#0a0a0a] text-xs sm:text-sm font-mono text-[#a3a3a3] hover:text-white hover:border-pink-500/20 transition-all"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 p-8 rounded-xl border border-[#262626] bg-[#161616]/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-[#a3a3a3] mb-2 uppercase">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-5 py-3 rounded-lg border border-[#262626] bg-[#0a0a0a] text-base text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-[#a3a3a3] mb-2 uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-5 py-3 rounded-lg border border-[#262626] bg-[#0a0a0a] text-base text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-[#a3a3a3] mb-2 uppercase">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Hrithik, let's collaborate..."
                  className="w-full px-5 py-3 rounded-lg border border-[#262626] bg-[#0a0a0a] text-base text-white focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-lg text-base font-semibold text-white bg-[#3b82f6] hover:bg-[#3b82f6]/90 disabled:bg-[#3b82f6]/60 disabled:cursor-not-allowed transition-colors shadow-lg shadow-blue-500/20"
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>

              {statusMsg && (
                <div
                  className={`text-xs sm:text-sm font-mono text-center p-3 rounded border ${isSuccess
                      ? "border-green-500/20 bg-green-500/5 text-green-500"
                      : "border-red-500/20 bg-red-500/5 text-red-500"
                    }`}
                >
                  {statusMsg}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>

      {/* Footer Graphic: Anime landscape + git console box (eHarshit Style) */}
      <div className="relative w-full h-96 bg-linear-to-t from-[#0d162d] to-[#0a0a0a] border-t border-[#262626] flex flex-col justify-end">

        {/* Overlay Git Terminal prompt box */}
        <div className="relative z-10 max-w-md mx-auto mb-20 w-[90%] p-6 rounded-lg border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-sm shadow-2xl font-mono text-xs sm:text-sm text-[#a3a3a3]">
          <div className="flex gap-2 mb-3.5 pb-2.5 border-b border-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/40" />
          </div>
          <div>
            <span className="text-[#22c55e]">➜</span> <span className="text-white">~</span> <span className="text-[#3b82f6]">git commit -m &quot;bye&quot;</span>
            <p className="mt-1.5 text-white/60">[main 99c694f] bye</p>
            <p className="text-white/60"> 1 file changed, 1 insertion(+)</p>
            <p className="text-[#22c55e]">➜ <span className="text-white">~</span> <span className="animate-pulse">_</span></p>
          </div>
        </div>

        {/* Legal copyright footer */}
        <div className="relative z-10 py-6 border-t border-white/5 bg-[#080d1a]/80 text-center text-xs font-mono text-[#a3a3a3]/40">
          © {new Date().getFullYear()} Hrithik. All rights reserved.
        </div>
      </div>

    </section>
  );
}
