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
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      setScrollProgress(Math.min((scrollTop / docHeight) * 85, 100));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-black text-white py-16 relative font-sans min-h-screen overflow-x-hidden">
      {/* Particles */}
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
          {/* Shortened Vertical Line */}
          <div
            className="absolute left-1/2 w-1 bg-gray-700 rounded z-0"
            style={{ top: "0px", bottom: "200px" }}
          ></div>

          {/* Scroll Progress */}
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

          {/* Timeline Items with images */}
          {timelineItems.map((item, idx) => (
            <div key={idx} className={`timeline-item ${item.side} relative mb-24 flex items-start`}>

              {/* Timeline Box */}
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

          {/* Freelance Root */}
          <div className="timeline-item center relative mt-20">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-white border-2 border-gray-400 z-20 shadow-lg"></div>
            <div className="timeline-box text-center bg-gray-900 hover:bg-gray-800 transition-shadow shadow-lg p-8 rounded-3xl mx-auto max-w-3xl">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-lime-400">
                Freelance Penetration Tester | Self-Employed
              </h3>
              <ul className="text-gray-300 text-left mt-4 space-y-2">
                {freelanceBranches.map((branch, idx) => (
                  <li key={idx}>{branch}</li>
                ))}
              </ul>
            </div>

            {/* Tree Branches */}
            <div className="flex flex-col items-center mt-8">
              <div className="flex justify-center w-full relative mt-4">
                <div className="h-px w-3/4 bg-white absolute top-1/2 mt-5 transform -translate-y-1/2"></div>
              </div>
              <div className="flex justify-center gap-12 mt-6">
                {freelanceBranches.map((branch, idx) => (
                  <div key={idx} className="flex flex-col items-center relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-5 h-5 rounded-full bg-white border-2 border-gray-400 z-20 shadow"></div>
                    <div className="timeline-box mt-6 bg-gray-900 hover:bg-gray-800 transition-shadow shadow-md p-4 rounded-2xl w-64 text-center">
                      <p>{branch}</p>
                    </div>
                  </div>
                ))}
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
