"use client";
import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export function Experience() {
  const freelanceBranches = [
    "Conducted VAPT for Retail and Education Web Platforms, strengthening overall security posture and earned professional fees.",
    "Completed VAPT for an LLM-based Chatbot Project, acknowledged by the client for improving application security.",
    "Earned formal acknowledgements and appreciation from clients for securing critical systems and delivering clear, actionable reports.",
  ];

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

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      setScrollProgress(Math.min((scrollTop / docHeight) * 85, 100));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-black text-white py-16 relative font-sans min-h-screen overflow-x-hidden mt-10">
      {/* Particle background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 w-full h-full z-0"
        options={{
          background: { color: { value: "#000000" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, resize: true },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 100,
              enable: true,
              opacity: 0.6,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: { value: 120, density: { enable: true, area: 800 } },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400 tracking-wide">
          Work Experience
        </h2>

        <div className="relative">
          {/* Main vertical line */}
          <div
            className="absolute left-1/2 w-1 bg-gray-700 rounded z-0"
            style={{ top: "0px", bottom: "200px" }}
          ></div>

          {/* Scroll progress indicator */}
          <div
            className="absolute left-1/2 w-1 rounded z-0"
            style={{
              top: "0px",
              height: `${scrollProgress}%`,
              background: "linear-gradient(to bottom, #00ffea, #00c8ff)",
              transformOrigin: "top",
              transition: "height 0.2s ease-out",
            }}
          ></div>

          {/* Timeline Items */}
          {timelineItems.map((item, idx) => (
            <div
              key={idx}
              className={`timeline-item ${item.side} relative mb-24 flex items-start`}
            >
              <div
                className={`timeline-box mt-6 ${
                  item.side === "left"
                    ? "ml-auto text-right"
                    : "mr-auto text-left"
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

          {/* Freelance Section with alternating branches */}
          <div className="timeline-item center relative mt-20">
            {/* top circle node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-white border-2 border-gray-400 z-20 shadow-lg"></div>

            <div className="timeline-box text-center bg-gray-900 hover:bg-gray-800 transition-shadow shadow-lg p-8 rounded-3xl mx-auto max-w-3xl">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-lime-400">
                Freelance Penetration Tester | Self-Employed
              </h3>
            </div>

            {/* Branch drawing */}
            <div className="relative flex justify-center mt-16 w-full">
              {/* vertical trunk down */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 h-16 w-1 bg-white"></div>
              {/* horizontal branch line */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-white"></div>

              {/* branch nodes + alternating boxes */}
              <div className="flex justify-between w-3/4">
                {freelanceBranches.map((branch, idx) => {
                  const isUp = idx % 2 === 0; // 0,2 -> up ; 1 -> down
                  return (
                    <div key={idx} className="flex flex-col items-center relative">
                      {/* connector from branch line to box */}
                      {isUp ? (
                        <div className="absolute top-20 h-20 w-1 bg-white"></div>
                      ) : (
                        // <div className="absolute top-[-4rem] h-20 w-1 bg-white"></div>
                        <div></div>
                      )}

                      {/* node on branch line */}
                      <div className="absolute top-16 w-5 h-5 rounded-full bg-white border-2 border-gray-400 z-20 shadow"></div>

                      {/* Box placed up or down */}
                      <div
                        className={`timeline-box bg-gray-900 hover:bg-gray-800 transition-shadow shadow-md unded-2xl w-64 text-center ${
                          isUp ?  "mt-48" :"mt-[9rem]" 
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
    </section>
  );
}
