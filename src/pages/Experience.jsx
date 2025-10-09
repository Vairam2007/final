"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ProfessionalTimeline() {
  const containerRef = useRef(null);
  const firstBoxRef = useRef(null);
  const lastBoxRef = useRef(null);
  const [progressStyle, setProgressStyle] = useState({ top: 0, height: 0 });

  const timelineItems = [
    {
      title: "CubeAISolutions Tech Pvt Ltd",
      position: "Cybersecurity Engineer Intern",
      period: "Aug 2024 – Oct 2024",
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
      period: "Apr 2025 – Jul 2025",
      desc: [
        "Conducted VAPT and Red Teaming across Web, API, Network, Mobile, and AI attack surfaces.",
        "Earned ₹20,000 monthly stipend plus project-based performance rewards.",
      ],
      side: "right",
    },
  ];

  const freelanceBranches = [
    "Conducted VAPT for Retail and Education Web Platforms, strengthening overall security posture and earned professional fees.",
    "Completed VAPT for an LLM-based Chatbot Project, acknowledged by the client for improving application security.",
    "Earned formal acknowledgements and appreciation from clients for securing critical systems and delivering clear, actionable reports.",
  ];

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  // Calculate top and height of progress bar
  useEffect(() => {
    if (firstBoxRef.current && lastBoxRef.current) {
      const firstTop = firstBoxRef.current.offsetTop + 80; // 🔽 Shift down slightly
      const lastBottom =
        lastBoxRef.current.offsetTop + lastBoxRef.current.offsetHeight;
      setProgressStyle({ top: firstTop, height: lastBottom - firstTop });
    }
  }, [containerRef.current]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden text-gray-100"
      style={{
        background:
          "linear-gradient(135deg, #0a0a2f, #0a0a2f, #000000, #0a0a2f)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 40s ease infinite",
      }}
    >
      {/* Star Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(3)].map((_, layer) => (
          <div
            key={layer}
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(${2 + layer}px ${
                2 + layer
              }px at 20% 30%, #fff, transparent),
                                radial-gradient(${1 + layer}px ${
                1 + layer
              }px at 80% 40%, #fff, transparent),
                                radial-gradient(${1.5 + layer}px ${
                1.5 + layer
              }px at 50% 80%, #fff, transparent),
                                radial-gradient(${2 + layer}px ${
                2 + layer
              }px at 10% 60%, #fff, transparent),
                                radial-gradient(${1 + layer}px ${
                1 + layer
              }px at 70% 20%, #fff, transparent)`,
              backgroundSize: `${200 + layer * 100}px ${
                200 + layer * 100
              }px`,
              opacity: `${0.4 + layer * 0.3}`,
              animation: `moveStars ${60 + layer * 30}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-20 z-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="gridPattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect width="40" height="40" fill="none" />
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridPattern)" />
        </svg>
      </div>

      {/* Timeline Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 py-20 space-y-32">
        <h2 className="text-6xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 tracking-wide drop-shadow-lg">
          Work Experience
        </h2>

        <div className="relative space-y-32">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              ref={
                idx === 0
                  ? firstBoxRef
                  : idx === timelineItems.length - 1
                  ? lastBoxRef
                  : null
              }
              className={`timeline-item ${item.side} relative flex items-start`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div
                className={`timeline-box mt-6 p-10 rounded-3xl shadow-xl bg-gray-900/70 backdrop-blur-lg border border-gray-700 hover:scale-[1.02] transition max-w-2xl relative overflow-hidden ${
                  item.side === "left"
                    ? "ml-auto text-right"
                    : "mr-auto text-left"
                }`}
              >
                <h3 className="text-3xl font-bold text-cyan-300 relative z-10">
                  {item.position}
                </h3>
                <p className="italic text-gray-300 relative z-10">
                  {item.title}
                </p>
                <p className="italic text-gray-400 mb-6 relative z-10">
                  {item.period}
                </p>
                <ul className="list-disc list-inside text-gray-200 space-y-2 text-lg relative z-10">
                  {item.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Freelance Section */}
          <motion.div
            className="timeline-item center relative mt-20 space-y-12"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            ref={lastBoxRef}
          >
            <div className="timeline-box mx-auto max-w-3xl text-center p-12 rounded-3xl shadow-xl bg-gray-900/70 backdrop-blur-lg border border-gray-700 relative overflow-hidden">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-lime-400 drop-shadow relative z-10">
                Freelance Penetration Tester | Self-Employed
              </h3>
              <p className="italic text-gray-300 mt-2 relative z-10">Present</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 justify-center items-start">
              {freelanceBranches.map((branch, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-900/70 backdrop-blur-lg border border-gray-700 shadow-lg rounded-2xl p-6 text-gray-200 hover:scale-[1.05] transition relative overflow-hidden flex items-center justify-center text-center"
                  style={{ minHeight: "150px", minWidth: "300px" }}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {branch}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll progress bar (moved slightly down, behind content) */}
      <div
        className="absolute left-1/2 w-2 -translate-x-1/2 bg-gray-700/30 rounded-full z-0"
        style={{ top: progressStyle.top, height: progressStyle.height }}
      >
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden"
        >
          <div className="w-full h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.6)]" />
        </motion.div>
      </div>

      <style>{`
        .timeline-item { width: 50%; }
        .timeline-item.left { left: 0; text-align: right; padding-right: 2rem; }
        .timeline-item.right { left: 50%; padding-left: 2rem; }
        .timeline-item.center { width: 100%; text-align: center; }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes moveStars {
          0% { transform: translateY(0); }
          100% { transform: translateY(-2000px); }
        }
      `}</style>
    </div>
  );
}
