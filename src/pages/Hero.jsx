"use client";
import React, { useEffect, useRef } from "react";
import cv from "../../public/VETTRIVEL U - VULNERABILITY ASSESSMENT AND PENETRATION TESTER.pdf";
export function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();

    // Create network nodes
    const nodes = [];
    const NODE_COUNT = 60;

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      });
    }

    const draw = () => {
      // Dark gradient background
      const gradient = ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
      gradient.addColorStop(0, "#0a0a0a");
      gradient.addColorStop(1, "#0d0d1a");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.9)";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#0ff";
        ctx.fill();

        node.x += node.dx;
        node.y += node.dy;

        if (node.x < 0 || node.x > window.innerWidth) node.dx = -node.dx;
        if (node.y < 0 || node.y > window.innerHeight) node.dy = -node.dy;
      });

      // Connect nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(0,255,255,${0.25 - dist / 600})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

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
    <section className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Content */}
      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24 gap-12">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="block text-lg md:text-xl font-semibold mb-3 text-gray-400">
              Hi, I’m
            </span>
            <span className="text-white tracking-wider">Vettrivel U</span>
          </h1>

          <h2 className="text-lg md:text-2xl lg:text-3xl font-medium leading-snug text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500">
            Cyber Security Researcher · VAPT Specialist · Offensive Security Analyst
          </h2>

          <p className="text-sm md:text-lg font-semibold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-300 to-red-400">
            Web · API · Network · Mobile · Cloud · LLM/AI · Active Directory
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="#contact"
              className="px-6 py-3 text-black font-semibold rounded-md bg-cyan-500 hover:text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/50 transition duration-300 transform hover:scale-105"
            >
              Hire Me
            </a>
            <a
              href={cv}
              download
              className="px-6 py-3 border-2 border-cyan-500 hover:border-cyan-400 text-white font-semibold rounded-md hover:bg-cyan-500 hover:text-black shadow-md shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side (Profile Picture) */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative max-w-lg md:max-w-none">
          <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-cyan-500 shadow-cyan-500/50 shadow-lg">
            <img
              src="/mine.png"
              alt="Portrait of Vettrivel U"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
