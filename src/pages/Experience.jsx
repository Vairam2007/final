"use client";
import React, { useEffect, useRef, useCallback } from "react";

const throttle = (func, limit) => {
  let lastCall = 0;
  return function (...args) {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

export default function Experience() {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const dotsRef = useRef([]);
  const tailRef = useRef([]);

  const dotSize = 2;
  const gap = 20;
  const tailDuration = 500; // milliseconds

  const timelineItems = [
    {
      title: "CubeAISolutions Tech Pvt Ltd",
      position: "Cybersecurity Engineer",
      period: "August 2024 – October 2024",
      desc: [
        "Conducted penetration tests and vulnerability assessments to identify and address critical security risks.",
        "Contributed to risk analysis, incident response, and strengthening cybersecurity protocols.",
        "Delivered critical insights and implemented strategies to mitigate security risks in projects.",
      ],
      side: "left",
    },
    {
      title: "Cybrtekninja Private Limited",
      position: "Offensive Security Intern",
      period: "April 2025 – July 2025",
      desc: [
        "Conducted VAPT and Red Teaming across Web, API, Network, Mobile, and AI attack surfaces.",
        "Earned ₹20,000 monthly stipend plus project-based performance rewards",
      ],
      side: "right",
    },
  ];

  const freelanceBranches = [
    "Conducted VAPT for Retail and Education Web Platforms, strengthening overall security posture and earned professional fees.",
    "Completed VAPT for an LLM-based Chatbot Project, acknowledged by the client for improving application security.",
    "Earned formal acknowledgements and appreciation from clients for securing critical systems and delivering clear, actionable reports.",
  ];

  // Build grid
  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));
    const cell = dotSize + gap;

    const startX = (width - (cell * cols - gap)) / 2 + dotSize / 2;
    const startY = (height - (cell * rows - gap)) / 2 + dotSize / 2;

    const dots = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({ cx: startX + x * cell, cy: startY + y * cell });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  const snapToGrid = useCallback(
    (x, y) => {
      const cell = dotSize + gap;
      return { x: Math.round(x / cell) * cell + dotSize / 2, y: Math.round(y / cell) * cell + dotSize / 2 };
    },
    [dotSize, gap]
  );

  // Resize and build grid
  useEffect(() => {
    buildGrid();
    const ro = new ResizeObserver(buildGrid);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [buildGrid]);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let rafId;

    const draw = () => {
      if (!ctx) return;
      const { width, height } = canvas;

      // background
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);

      // draw dots
      ctx.fillStyle = "#888";
      dotsRef.current.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.cx, dot.cy, dotSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // draw smooth curved tail
      const now = performance.now();
      const visibleTail = tailRef.current.filter(t => now - t.time < tailDuration);
      for (let i = 1; i < visibleTail.length; i++) {
        const prev = visibleTail[i - 1];
        const curr = visibleTail[i];
        const alpha = 1 - (now - prev.time) / tailDuration;

        ctx.strokeStyle = `rgba(30,144,255,${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);

        // smooth curve towards next point
        const midX = (prev.x + curr.x) / 2;
        const midY = (prev.y + curr.y) / 2;
        ctx.quadraticCurveTo(midX, prev.y, curr.x, curr.y);

        ctx.stroke();
      }

      tailRef.current = visibleTail;

      rafId = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildGrid();
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [dotSize, tailDuration, buildGrid]);

  // Mouse tracking
  useEffect(() => {
    const onMove = e => {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const snapped = snapToGrid(x, y);
      tailRef.current.push({ ...snapped, time: performance.now() });
    };
    const throttledMove = throttle(onMove, 30);
    window.addEventListener("mousemove", throttledMove);
    return () => window.removeEventListener("mousemove", throttledMove);
  }, [snapToGrid]);

  return (
    <div ref={wrapperRef} className="relative w-full min-h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-white space-y-16">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 tracking-wide">
          Work Experience
        </h2>

        <div className="relative space-y-24">
          <div className="absolute left-1/2 w-1 bg-gray-600 rounded top-0 bottom-0"></div>

          {timelineItems.map((item, idx) => (
            <div key={idx} className={`timeline-item ${item.side} relative flex items-start`}>
              <div
                className={`timeline-box mt-6 ${item.side === "left" ? "ml-auto text-right" : "mr-auto text-left"} bg-gray-900 hover:bg-gray-800 transition-shadow shadow-lg p-8 rounded-3xl max-w-3xl`}
              >
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-3">
                  {item.position}
                </h3>
                <p className="italic text-gray-300 mb-1">{item.title}</p>
                <p className="italic text-gray-400 mb-4">{item.period}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {item.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Freelance Section */}
          <div className="timeline-item center relative mt-20 space-y-10">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-white border-2 border-gray-400 z-20 shadow-lg"></div>
            <div className="timeline-box text-center bg-gray-900 hover:bg-gray-800 transition-shadow shadow-lg p-8 rounded-3xl mx-auto max-w-3xl">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-lime-400">
                Freelance Penetration Tester | Self-Employed
              </h3>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-16 space-y-10 md:space-y-0 md:space-x-6">
              {freelanceBranches.map((branch, idx) => (
                <div key={idx} className="timeline-box bg-gray-900 hover:bg-gray-800 transition-shadow shadow-md rounded-2xl p-6 flex-1">
                  <p className="text-gray-200">{branch}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .timeline-item { width: 50%; }
        .timeline-item.left { left: 0; text-align: right; padding-right: 2rem; }
        .timeline-item.right { left: 50%; padding-left: 2rem; }
        .timeline-item.center { width: 100%; text-align: center; }
        .timeline-box { border-radius: 24px; transition: all 0.3s ease; }
        .timeline-box:hover { transform: translateY(-5px); box-shadow: 0 0 25px rgba(30,144,255,0.4); }
      `}</style>
    </div>
  );
}
