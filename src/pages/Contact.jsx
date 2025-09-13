"use client";
import React, { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const socials = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vettrivel2006", icon: "/ALL IMAGES/LOGO/LinkedIn.png" },
    { name: "GitHub", url: "https://github.com/vettrivel007", icon: "/ALL IMAGES/LOGO/GitHub.png" },
    { name: "Medium", url: "https://vettrivel007.medium.com/", icon: "/ALL IMAGES/LOGO/medium.png" },
    { name: "TryHackMe", url: "https://tryhackme.com/p/vettrivel", icon: "/ALL IMAGES/LOGO/tryhackme.png" },
    { name: "Hack The Box", url: "https://app.hackthebox.com/profile/", icon: "/ALL IMAGES/LOGO/hackthebox.jpeg" },
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! I’ll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0f172a] to-black text-white">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-12 text-center drop-shadow-lg">
          Contact Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-2xl md:text-3xl text-gray-300 leading-snug drop-shadow-lg">
              Let's discuss projects, cybersecurity, or just say hi — I'm always open to new conversations.
            </p>
            <p className="text-xl md:text-2xl text-gray-400 drop-shadow-md">
              Available for freelance work, collaborations, or cybersecurity assessments.
            </p>
            <div className="text-2xl md:text-3xl text-cyan-300 drop-shadow-lg">
              📧{" "}
              <a href="mailto:uvettrivel007@gmail.com" className="underline hover:text-cyan-200 font-semibold">
                uvettrivel007@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#111822]/80 px-5 py-2 rounded-lg border border-gray-700 transition-all duration-300 hover:bg-[#1f2937]/90 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] text-lg font-medium"
                >
                  <img src={social.icon} alt={social.name} className="w-5 h-5 object-contain" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-[#0c1323]/80 p-8 rounded-xl border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required
                  className="w-full px-4 py-2 bg-[#0d1117]/80 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required
                  className="w-full px-4 py-2 bg-[#0d1117]/80 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="What's on your mind?" required
                  className="w-full px-4 py-2 h-32 bg-[#0d1117]/80 text-white border border-gray-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
              </div>

              <button type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
