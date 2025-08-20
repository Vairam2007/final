import React, { useState } from "react";

export function Experience() {
  const freelanceBranches = [
    "Conducted VAPT for Retail and Education Web Platforms, strengthening overall security posture and earned professional fees.",
    "Completed VAPT for an LLM-based Chatbot Project, acknowledged by the client for improving application security.",
    "Earned formal acknowledgements and appreciation from clients for securing critical systems and delivering clear, actionable reports.",
  ];

  const [hovered, setHovered] = useState(null);
  const handleHover = (id) => setHovered(id);
  const handleLeave = () => setHovered(null);

  return (
    <section id="experience" className="bg-[#0e0e0e] text-white py-20 relative">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-400 mb-16">
          Work Experience
        </h2>

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto mb-24 gap-6">
          {/* Offensive */}
          <div
            id="offensive"
            onMouseEnter={() => handleHover("offensive")}
            onMouseLeave={handleLeave}
            className={`w-full md:w-5/12 bg-gray-900 border border-green-600 rounded-xl p-6 shadow-lg transform transition-transform duration-300 cursor-pointer ${
              hovered === "offensive" ? "scale-105 shadow-[0_0_20px_#22c55e]" : ""
            }`}
            style={{ minHeight: 180 }}
          >
            <h3 className="text-base md:text-xl font-semibold text-green-400 mb-2">
              Offensive Security Intern | Cybrtekninja Private Limited
            </h3>
            <p className="text-xs md:text-sm text-gray-400 italic mb-4">
              April 2025 – July 2025
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-xs md:text-sm">
              <li>
                Conducted VAPT and Red Teaming across Web, API, Network, Mobile,
                and AI attack surfaces.
              </li>
              <li>Earned ₹20,000 monthly stipend plus project-based performance rewards.</li>
            </ul>
          </div>

          {/* Cybersecurity */}
          <div
            id="cybersecurity"
            onMouseEnter={() => handleHover("cybersecurity")}
            onMouseLeave={handleLeave}
            className={`w-full md:w-5/12 bg-gray-900 border border-green-600 rounded-xl p-6 shadow-lg transform transition-transform duration-300 cursor-pointer ${
              hovered === "cybersecurity" ? "scale-105 shadow-[0_0_20px_#22c55e]" : ""
            }`}
            style={{ minHeight: 180 }}
          >
            <h3 className="text-base md:text-xl font-semibold text-green-400 mb-2">
              Cybersecurity Engineer | CubeAISolutions Tech Pvt Ltd
            </h3>
            <p className="text-xs md:text-sm text-gray-400 italic mb-4">
              August 2024 – October 2024
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 text-xs md:text-sm">
              <li>
                Conducted penetration tests and vulnerability assessments to
                identify and address critical security risks.
              </li>
              <li>Contributed to risk analysis, incident response, and strengthening cybersecurity protocols.</li>
              <li>Delivered critical insights and implemented strategies to mitigate security risks in projects.</li>
            </ul>
          </div>
        </div>

        {/* Freelance */}
        <div
          id="freelance"
          onMouseEnter={() => handleHover("freelance")}
          onMouseLeave={handleLeave}
          className={`mx-auto bg-gray-900 border border-green-600 rounded-xl p-6 shadow-lg w-full md:w-5/12 text-center cursor-pointer transform transition-transform duration-300 ${
            hovered === "freelance" ? "scale-105 shadow-[0_0_25px_#22c55e]" : ""
          }`}
          style={{ minHeight: 120 }}
        >
          <h3 className="text-base md:text-xl font-semibold text-green-400 mb-2">
            Freelance Penetration Tester | Self-Employed
          </h3>
          <p className="text-xs md:text-sm text-gray-400 italic mb-2">Present</p>
        </div>

        {/* Branches */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between mt-16 gap-4">
          {freelanceBranches.map((text, i) => (
            <div
              key={i}
              onMouseEnter={() => handleHover(`branch-${i}`)}
              onMouseLeave={handleLeave}
              className={`bg-gray-900 border border-green-600 rounded-xl p-4 shadow-lg text-gray-300 w-full md:w-1/3 cursor-pointer transform transition-transform duration-300 ${
                hovered === `branch-${i}` ? "scale-105 shadow-[0_0_20px_#22c55e]" : ""
              } text-xs md:text-sm`}
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* SVG connectors behind all elements */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="move-up-md">
          {/* Line from Offensive to Freelance */}
          <line
            x1="25%"
            y1="460"
            x2="50%"
            y2="660"
            stroke={hovered === "offensive" ? "#4ade80" : "#22c55e"}
            strokeWidth="3"
          />
          <circle
            cx="25%"
            cy="460"
            r="6"
            fill={hovered === "offensive" ? "#4ade80" : "#22c55e"}
          />

          {/* Line from Cybersecurity to Freelance */}
          <line
            x1="75%"
            y1="460"
            x2="50%"
            y2="660"
            stroke={hovered === "cybersecurity" ? "#4ade80" : "#22c55e"}
            strokeWidth="3"
          />
          <circle
            cx="75%"
            cy="460"
            r="6"
            fill={hovered === "cybersecurity" ? "#4ade80" : "#22c55e"}
          />

          {/* Vertical from Freelance to branches */}
          <line
            x1="50%"
            y1="660"
            x2="50%"
            y2="760"
            stroke={hovered === "freelance" ? "#4ade80" : "#22c55e"}
            strokeWidth="3"
          />
          <circle
            cx="50%"
            cy="660"
            r="6"
            fill={hovered === "freelance" ? "#4ade80" : "#22c55e"}
          />

          {/* Horizontal line from left to right branches */}
          <line
            x1="20%"
            y1="760"
            x2="80%"
            y2="760"
            stroke={hovered && hovered.startsWith("branch") ? "#4ade80" : "#22c55e"}
            strokeWidth="3"
          />
          <circle
            cx="50%"
            cy="760"
            r="6"
            fill={hovered && hovered.startsWith("branch") ? "#4ade80" : "#22c55e"}
          />

          {/* Vertical down to each branch */}
          <line
            x1="20%"
            y1="760"
            x2="20%"
            y2="850"
            stroke={hovered === "branch-0" ? "#4ade80" : "#22c55e"}
            strokeWidth="3"
          />
          <line
            x1="50%"
            y1="760"
            x2="50%"
            y2="850"
            stroke={hovered === "branch-1" ? "#4ade80" : "#22c55e"}
            strokeWidth="3"
          />
          <line
            x1="80%"
            y1="760"
            x2="80%"
            y2="850"
            stroke={hovered === "branch-2" ? "#4ade80" : "#22c55e"}
            strokeWidth="3"
          />
        </g>
      </svg>

      {/* Inline style for moving lines up on md+ */}
      <style>{`
        @media (min-width: 768px) {
          .move-up-md {
            transform: translateY(-40px);
          }
        }
      `}</style>
    </section>
  );
}
