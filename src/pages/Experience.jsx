"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Experience() {
  const canvasRef = useRef(null);
  const [mouse, setMouse] = useState({ x: null, y: null });

  // Timeline and Freelance Data
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

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const dotSpacing = 25; // closer dots
    const dots = [];

    for (let x = dotSpacing / 2; x < width; x += dotSpacing) {
      for (let y = dotSpacing / 2; y < height; y += dotSpacing) {
        dots.push({ x, y, size: 2 });
      }
    }

    const tail = [];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw dots
      ctx.fillStyle = "#ffffffff";
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update tail
      if (mouse.x && mouse.y) {
        tail.push({ x: mouse.x, y: mouse.y });
        if (tail.length > 20) tail.shift();
      }

      // Draw tail lines connecting to nearest dots
      ctx.strokeStyle = "rgba(0,255,255,0.7)";
      ctx.lineWidth = 1.5;

      for (let i = 0; i < tail.length - 1; i++) {
        ctx.beginPath();
        ctx.moveTo(tail[i].x, tail[i].y);
        ctx.lineTo(tail[i + 1].x, tail[i + 1].y);
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mouse]);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-white">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400 tracking-wide">
          Work Experience
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 w-1 bg-gray-700 rounded top-0 bottom-0"></div>

          {timelineItems.map((item, idx) => (
            <div
              key={idx}
              className={`timeline-item ${item.side} relative mb-24 flex items-start`}
            >
              <div
                className={`timeline-box mt-6 ${
                  item.side === "left" ? "ml-auto text-right" : "mr-auto text-left"
                } bg-gray-900 hover:bg-gray-800 transition-shadow shadow-lg p-8 rounded-3xl max-w-3xl`}
              >
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                  {item.position}
                </h3>
                <p className="italic text-gray-300 mb-1">{item.title}</p>
                <p className="italic text-gray-400 mb-4">{item.period}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {item.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="timeline-item center relative mt-20">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-white border-2 border-gray-400 z-20 shadow-lg"></div>
            <div className="timeline-box text-center bg-gray-900 hover:bg-gray-800 transition-shadow shadow-lg p-8 rounded-3xl mx-auto max-w-3xl">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-lime-400">
                Freelance Penetration Tester | Self-Employed
              </h3>
            </div>
            <div className="relative flex justify-center mt-16 w-full">
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 h-16 w-1 bg-white"></div>
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-white"></div>

              <div className="flex justify-between w-3/4">
                {freelanceBranches.map((branch, idx) => {
                  const isUp = idx % 2 === 0;
                  return (
                    <div key={idx} className="flex flex-col items-center relative">
                      {isUp && <div className="absolute top-20 h-20 w-1 bg-white"></div>}
                      <div className="absolute top-16 w-5 h-5 rounded-full bg-white border-2 border-gray-400 z-20 shadow"></div>
                      <div
                        className={`timeline-box bg-gray-900 hover:bg-gray-800 transition-shadow shadow-md rounded-2xl w-64 text-center ${
                          isUp ? "mt-48" : "mt-[9rem]"
                        }`}
                      >
                        <p>{branch}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .timeline-item { width: 50%; }
        .timeline-item.left { left: 0; text-align: right; padding-right: 2rem; }
        .timeline-item.right { left: 50%; padding-left: 2rem; }
        .timeline-item.center { width: 100%; text-align: center; }
        .timeline-box { background: #111; color: #eee; border-radius: 24px; transition: all 0.3s ease; }
        .timeline-box:hover { transform: translateY(-5px); box-shadow: 0 0 35px rgba(0,255,255,0.7); }
      `}</style>
    </div>
  );
}
