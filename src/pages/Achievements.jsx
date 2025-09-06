"use client";
import React, { useEffect, useRef } from "react";

// Icon assets
const assets = {
  Flipkart: "/assets/logos/flipkart.svg",
  "Mina Protocol": "/assets/logos/mina.svg",
  HACKEN: "/assets/logos/hacken.svg",
  "Westpac Banking Corporation": "/assets/logos/westpac.svg",
  Swaggle: "/assets/logos/swaggle.svg",
  "U.S SBA": "/assets/logos/us_sba.svg",
  "Chime U.S": "/assets/logos/chime.svg",
  Roobet: "/assets/logos/roobet.svg",
  "Indian Gov": "/assets/logos/india.svg",
  "US Gov": "/assets/logos/us_gov.svg",
};

function Achievements() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const acknowledgements = Object.keys(assets);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const pointCount = 80;
    const points = [];

    // Create points with random positions and velocities
    for (let i = 0; i < pointCount; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 1 + Math.random() * 2,
      });
    }

    const animate = () => {
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, width, height);

      points.forEach(p => {
        // Move points
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw point
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.9)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(0,255,255,0.5)";
        ctx.fill();

        // Connect nearby points & to mouse
        points.forEach(other => {
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0,255,255,${1 - dist / 120})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // Connect to mouse pointer
        if (mouse.current.x && mouse.current.y) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.current.x, mouse.current.y);
            ctx.strokeStyle = `rgba(0,255,255,${1 - dist / 150})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden text-white flex items-center justify-center">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />

      {/* Dark glassmorphic overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-lg -z-5" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 mb-6">
          🏆 Achievements
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Recognized by top organizations worldwide for responsible vulnerability disclosure.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {acknowledgements.map((org, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-cyan-400/60 hover:scale-105 hover:-translate-y-1"
            >
              <img
                src={assets[org]}
                alt={`${org} logo`}
                className="h-14 mx-auto object-contain mb-4"
              />
              <h3 className="text-teal-200 text-sm font-semibold tracking-wide">
                {org}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
