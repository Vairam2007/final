"use client";
import React, { useState, useEffect, useRef } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const canvasRef = useRef(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! I’ll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vettrivel2006", icon: "/ALL IMAGES/LOGO/LinkedIn.png" },
    { name: "GitHub", url: "https://github.com/vettrivel007", icon: "/ALL IMAGES/LOGO/GitHub.png" },
    { name: "Medium", url: "https://vettrivel007.medium.com/", icon: "/ALL IMAGES/LOGO/medium.png" },
    { name: "TryHackMe", url: "https://tryhackme.com/p/vettrivel", icon: "/ALL IMAGES/LOGO/tryhackme.png" },
    { name: "Hack The Box", url: "https://app.hackthebox.com/profile/", icon: "/ALL IMAGES/LOGO/hackthebox.jpeg" },
  ];

  // Animated particles background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = Math.max(window.innerHeight, document.body.scrollHeight) * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${Math.max(window.innerHeight, document.body.scrollHeight)}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();

    const particles = [];
    const PARTICLE_COUNT = 60;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1.5,
        pulse: Math.random() * Math.PI * 2
      });
    }

    const draw = () => {
      ctx.fillStyle = "#0d1117"; // black background
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((p) => {
        const pulsate = Math.sin(p.pulse) * 1.2 + 1.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * pulsate, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.8)"; // cyan glow
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#0ff";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        p.pulse += 0.02;

        if (p.x < 0 || p.x > window.innerWidth) p.dx = -p.dx;
        if (p.y < 0 || p.y > window.innerHeight) p.dy = -p.dy;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative text-white overflow-hidden mt-10">
      {/* Particle Background */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-24">
        {/* Contact Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-12 text-center">
          Contact Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed scale(1.5)">
              Whether you want to discuss a project, ask a question, or just say hi — I'm always open to new conversations.
            </p>
            <p className="text-md text-gray-400">
              Available for freelance work, collaborations, or cybersecurity assessments.
            </p>
            <div className="text-cyan-300">
              📧{" "}
              <a href="mailto:uvettrivel007@gmail.com" className="underline hover:text-cyan-200">
                uvettrivel007@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#111822] px-4 py-2 rounded-md border border-gray-700 transition-all duration-300 hover:bg-[#1f2937] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                >
                  <img src={social.icon} alt={social.name} className="w-5 h-5 object-contain" />
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-[#111822] p-8 rounded-xl border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-4 py-2 bg-[#0d1117] text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="w-full px-4 py-2 bg-[#0d1117] text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"/>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="What's on your mind?" required className="w-full px-4 py-2 h-32 bg-[#0d1117] text-white border border-gray-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
              </div>

              <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 rounded-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
