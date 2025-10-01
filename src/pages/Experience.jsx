"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ProfessionalTimeline() {
  const containerRef = useRef(null);

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

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a0f, #1a1a2e, #0f0f1f, #1a1a2e)",
        backgroundSize: "600% 600%",
        animation: "gradientShift 40s ease infinite",
      }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
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

      {/* Central Scroll Line */}
      <div className="absolute left-1/2 w-1 top-0 bottom-0 bg-gray-700/30 rounded">
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-0 top-0 w-full bg-cyan-400/80 rounded"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 space-y-32 text-gray-100">
        <h2 className="text-6xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 tracking-wide drop-shadow-lg">
          Work Experience
        </h2>

        <div className="relative space-y-32">
          {/* Timeline Items */}
          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              className={`timeline-item ${item.side} relative flex items-start`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div
                className={`timeline-box mt-6 p-10 rounded-3xl shadow-xl bg-gray-900/70 backdrop-blur-lg border border-gray-700 hover:scale-[1.02] transition max-w-2xl ${
                  item.side === "left" ? "ml-auto text-right" : "mr-auto text-left"
                }`}
              >
                <h3 className="text-3xl font-bold text-cyan-300">{item.position}</h3>
                <p className="italic text-gray-300">{item.title}</p>
                <p className="italic text-gray-400 mb-6">{item.period}</p>
                <ul className="list-disc list-inside text-gray-200 space-y-2 text-lg">
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
          >
            <div className="timeline-box mx-auto max-w-3xl text-center p-12 rounded-3xl shadow-xl bg-gray-900/70 backdrop-blur-lg border border-gray-700">
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-lime-400 drop-shadow">
                Freelance Penetration Tester | Self-Employed
              </h3>
              <p className="italic text-gray-300 mt-2">Present</p>
            </div>

            {/* Sub Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 justify-center items-start">
              {freelanceBranches.map((branch, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-900/70 backdrop-blur-lg border border-gray-700 shadow-lg rounded-2xl p-6 text-gray-200 hover:scale-[1.05] transition flex items-center justify-center text-center"
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
      `}</style>
    </div>
  );
}
