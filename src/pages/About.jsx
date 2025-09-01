"use client";
import React, { useState, useEffect, useRef } from "react";

function About() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const canvasRef = useRef(null);

  // Scroll-triggered stats
  useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setStatsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animated triangle background
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

    const points = [];
    const POINT_COUNT = 50;
    for (let i = 0; i < POINT_COUNT; i++) {
      points.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Black background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw triangles
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          for (let k = j + 1; k < points.length; k++) {
            const dist1 = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
            const dist2 = Math.hypot(points[j].x - points[k].x, points[j].y - points[k].y);
            const dist3 = Math.hypot(points[i].x - points[k].x, points[i].y - points[k].y);

            if (dist1 < 180 && dist2 < 180 && dist3 < 180) {
              ctx.strokeStyle = `rgba(0,255,255,0.08)`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(points[i].x, points[i].y);
              ctx.lineTo(points[j].x, points[j].y);
              ctx.lineTo(points[k].x, points[k].y);
              ctx.closePath();
              ctx.stroke();
            }
          }
        }
      }

      // Draw points
      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.7)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

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

  const stats = [
    { number: 10, label: "HOFs", delay: 100 },
    { number: 94, label: "eJPT Score", delay: 300 },
    { number: 5, label: "Top % THM", delay: 500 },
    { number: 50, label: "Writeups", delay: 700 },
  ];

  return (
    <section className="relative text-white overflow-hidden min-h-screen">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 space-y-24">
        {/* About Text & Images */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-16 items-start">
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <p>
              👋 Hi, I’m <span className="text-green-400 font-semibold">VETTRIVEL U</span>, an{" "}
              <span className="text-cyan-400 font-semibold">Offensive Security Expert</span> based in India 🇮🇳...
            </p>
            <p>
              🛡 I’ve gained <span className="text-purple-400 font-medium">root access</span> on high-value systems and uncovered{" "}
              <span className="text-red-400 font-medium">business-critical flaws</span>...
            </p>
            <p>
              👨‍💻 I freelance on <span className="text-emerald-400 font-medium">outsourced security projects</span> and mentor through workshops & webinars.
            </p>
            <p>
              💡 I actively support <span className="text-orange-400 font-semibold">bug bounty hunters</span> with content and community training.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="rounded-xl overflow-hidden shadow-xl border border-gray-700 w-auto h-[80px] hover:scale-105 transition">
              <iframe
                src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4840710"
                title="TryHackMe Badge"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>

            <div className="bg-[#1a1f2b] px-4 py-2 rounded-md flex items-center gap-2 shadow-md border border-gray-700">
              <img src="/ALL IMAGES/LOGO/tryhackme.png" alt="TryHackMe" className="w-5 h-5 object-contain" />
              <span className="text-sm text-cyan-300 font-semibold">Top 5% TryHackMe User</span>
            </div>

            <div
              className="rounded-xl overflow-hidden shadow-xl border border-gray-700 w-[360px] cursor-pointer hover:scale-105 transition"
              onClick={() => setSelectedImage("/ALL IMAGES/OTHER/Screenshot 2024-09-10 194937.png")}
            >
              <img
                src="/ALL IMAGES/OTHER/Screenshot 2024-09-10 194937.png"
                alt="LinkedIn Profile"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-center mt-16">
          {stats.map((stat) => (
            <Stat key={stat.label} number={stat.number} label={stat.label} delay={stat.delay} animate={statsVisible} />
          ))}
        </div>
      </div>

      {/* Modal for Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 h-10 w-10 text-black text-2xl font-bold bg-purple-500 hover:bg-purple-400 rounded-full flex items-center justify-center transition focus:outline-none"
            >
              ×
            </button>
            <img src={selectedImage} alt="Selected" className="w-full max-h-[80vh] object-contain rounded-lg border border-purple-500 shadow-xl" />
          </div>
        </div>
      )}
    </section>
  );
}

// Stat component
function Stat({ number, label, delay, animate }) {
  return (
    <div
      className="flex flex-col items-center justify-center w-40 h-40 rounded-full bg-gradient-to-tr from-purple-700 to-indigo-900 shadow-lg cursor-default transition-all duration-300 ease-in-out hover:scale-105"
      style={{ animation: `fadeInScale 600ms ease forwards`, animationDelay: `${delay}ms`, opacity: 0 }}
    >
      <div className="flex items-baseline space-x-1">
        {animate ? <CountUp from={0} to={number} duration={2} className="text-6xl font-extrabold text-white drop-shadow-md" /> : <span className="text-6xl font-extrabold text-white drop-shadow-md">0</span>}
        <span className="text-6xl font-extrabold text-white drop-shadow-md">+</span>
      </div>
      <p className="mt-3 text-xl font-semibold text-indigo-200">{label}</p>

      <style>{`
        @keyframes fadeInScale {0% {opacity:0; transform:scale(0.85);} 100% {opacity:1; transform:scale(1);}}
      `}</style>
    </div>
  );
}

// CountUp component
function CountUp({ from = 0, to, duration = 2, className = "" }) {
  const [count, setCount] = React.useState(from);

  React.useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ratio = Math.min(progress / (duration * 1000), 1);
      setCount(Math.floor(from + (to - from) * ratio));
      if (ratio < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [from, to, duration]);

  return <span className={className}>{count}</span>;
}

export default About;
