"use client";
import React, { useRef, useEffect } from "react";

export default function ExperiencePage() {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const pointsRef = useRef([]);
  const lastMouseRef = useRef({ x: 0, y: 0, time: 0 });

  const cellSize = 36;
  const tailLength = 40;
  const tailDuration = 500;
  const strokeColor = "rgb(0,150,255)";

  const snapToGrid = (x, y) => {
    const rect = svgRef.current.getBoundingClientRect();
    const gx = Math.round((x - rect.left) / cellSize) * cellSize;
    const gy = Math.round((y - rect.top) / cellSize) * cellSize;
    return { x: gx, y: gy };
  };

  useEffect(() => {
    const updateTail = () => {
      const now = performance.now();
      const last = lastMouseRef.current;
      if (last) pointsRef.current.push({ x: last.x, y: last.y, time: now });
      pointsRef.current = pointsRef.current.filter(p => now - p.time <= tailDuration);
      if (pointsRef.current.length > tailLength) pointsRef.current.shift();

      if (pointsRef.current.length >= 2) {
        let d = `M ${pointsRef.current[0].x} ${pointsRef.current[0].y}`;
        for (let i = 1; i < pointsRef.current.length; i++) {
          const prev = pointsRef.current[i - 1];
          const curr = pointsRef.current[i];
          const midX = (prev.x + curr.x) / 2;
          const midY = (prev.y + curr.y) / 2;
          d += ` Q ${prev.x} ${prev.y} ${midX} ${midY}`;
        }
        const lastPt = pointsRef.current[pointsRef.current.length - 1];
        const secondLast = pointsRef.current[pointsRef.current.length - 2];
        d += ` Q ${secondLast.x} ${secondLast.y} ${lastPt.x} ${lastPt.y}`;
        pathRef.current.setAttribute("d", d);
      } else if (pointsRef.current.length === 1) {
        const p = pointsRef.current[0];
        pathRef.current.setAttribute("d", `M ${p.x} ${p.y}`);
      }

      requestAnimationFrame(updateTail);
    };

    requestAnimationFrame(updateTail);

    const onMove = (e) => {
      const { x, y } = snapToGrid(e.clientX, e.clientY);
      lastMouseRef.current = { x, y, time: performance.now() };
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", (e) => e.touches[0] && onMove(e.touches[0]), { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, []);

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
    "Performed security audits for small businesses with actionable remediation plans.",
    "Provided Red Team consultancy for AI-powered applications with detailed reporting.",
  ];

  // Predefined heights for boxes to vary
  const boxHeights = ["180px", "220px", "200px", "240px", "210px"];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0f]">
      {/* SVG grid background */}
      <svg ref={svgRef} width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="smallGrid" width={cellSize} height={cellSize} patternUnits="userSpaceOnUse">
            <ellipse cx="0" cy="0" rx="2" ry="2" fill="#999" />
            <ellipse cx="0" cy={cellSize} rx="2" ry="2" fill="#999" />
            <ellipse cx={cellSize} cy={cellSize} rx="2" ry="2" fill="#999" />
            <ellipse cx={cellSize} cy="0" rx="2" ry="2" fill="#999" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="#0a0a0f" />
        <rect width="100%" height="100%" fill="url(#smallGrid)" />
        <path ref={pathRef} fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-20 text-gray-100 space-y-24">
        <h2 className="text-6xl font-extrabold text-center mb-24
                       bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 tracking-wide">
          Work Experience
        </h2>

        <div className="relative space-y-32">
          <div className="absolute left-1/2 w-1 bg-gray-400/60 rounded top-0 bottom-0"></div>

          {timelineItems.map((item, idx) => (
            <div key={idx} className={`timeline-item ${item.side} relative flex items-start`}>
              <div
                className={`timeline-box mt-6 ${
                  item.side === "left" ? "ml-auto text-right" : "mr-auto text-left"
                } bg-gray-900/80 backdrop-blur hover:bg-gray-800 transition-shadow shadow-lg p-12 rounded-3xl max-w-4xl`}
              >
                <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
                  {item.position}
                </h3>
                <p className="italic text-gray-300 mb-2">{item.title}</p>
                <p className="italic text-gray-400 mb-6">{item.period}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
                  {item.desc.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            </div>
          ))}

          {/* Freelance section */}
          <div className="timeline-item center relative mt-20 space-y-12">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-8 h-8 rounded-full bg-white border-2 border-gray-400 z-20 shadow-lg"></div>
            <div className="timeline-box text-center bg-gray-900/80 backdrop-blur hover:bg-gray-800 transition-shadow shadow-lg p-12 rounded-3xl mx-auto max-w-4xl">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-lime-400">
                Freelance Penetration Tester | Self-Employed
              </h3>
            </div>

            {/* Single row, staggered vertically with different heights */}
            <div className="flex justify-center mt-16 gap-x-8">
              {freelanceBranches.map((branch, idx) => (
                <div
                  key={idx}
                  className="timeline-box bg-gray-900/80 backdrop-blur hover:bg-gray-800 transition-shadow shadow-md rounded-3xl p-6 text-lg"
                  style={{
                    marginTop: idx % 2 === 0 ? "0px" : "40px",
                    height: boxHeights[idx],
                    width: "240px",
                  }}
                >
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
        .timeline-box:hover { transform: translateY(-5px); box-shadow: 0 0 30px rgba(0,150,255,0.4); }
      `}</style>
    </div>
  );
}
