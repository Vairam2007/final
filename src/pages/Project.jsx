import React, { useState } from "react";

export default function Project() {
  const projects = [
    {
      title: "🔍 RepoVulnScan",
      description:
        "Automated Vulnerability Detection System for GitHub Repositories | RepoVulnScan",
      tags: ["Security Tool", "Python", "OSV API"],
      image: "/ALL IMAGES/VULNS/Screenshot 2025-04-11 182048.png",
      github: "https://github.com/vettrivel007/RepoVulnScan",
    },
    {
      title: "📡 Internet-CalC",
      description:
        "IP Calculator for IP RANGE, CIDR, HEX, BINARY, DEC | Internet-CalC",
      tags: ["IP Tools", "JavaScript", "Networking"],
      image: "/ALL IMAGES/VULNS/Screenshot 2025-04-20 172048.png",
      github: "https://github.com/vettrivel007/Internet-CalC",
    },
    {
      title: "🧬 Meta-Extracter",
      description:
        "Extract metadata (including EXIF data) from image files such as PNG, JPG, and JPEG | Meta-Extracter",
      tags: ["Metadata", "Images", "Forensics"],
      image: "/ALL IMAGES/VULNS/Screenshot 2025-05-01 112300.png",
      github: "https://github.com/vettrivel007/Meta-Extracter",
    },
    {
      title: "🌊 DDoS Wave",
      description:
        "Sending High traffic TCP packets with randomized source IPs and ports to a specified target | DDoS Wave",
      tags: ["Red Team", "Python", "Stress Test"],
      image: "/ALL IMAGES/VULNS/Screenshot 2025-02-17 103445.png",
      github: "https://github.com/vettrivel007/DDoS-Wave",
    },
  ];

  const [rotations, setRotations] = useState({});

  const handleMouseMove = (e, idx) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotateX = y * -15; // invert Y for natural tilt
    const rotateY = x * 15;

    setRotations((prev) => ({
      ...prev,
      [idx]: { rotateX, rotateY },
    }));
  };

  const handleMouseLeave = (idx) => {
    setRotations((prev) => ({
      ...prev,
      [idx]: { rotateX: 0, rotateY: 0 },
    }));
  };

  return (
    <>
      <style>{`
        @keyframes slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .scroll-wrapper {
          scrollbar-width: none;
          -ms-overflow-style: none;
          overflow-x: hidden;
          padding: 1rem 0;
        }
        .scroll-wrapper::-webkit-scrollbar {
          display: none;
        }

        .card-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;
          cursor: pointer;
          transform-style: preserve-3d;
          will-change: transform;
          background: linear-gradient(to bottom right, #1f2937, #111827);
        }

        .card-hover:hover {
          background: linear-gradient(135deg, #064e3b, #0f172a);
          box-shadow: 0 12px 40px rgba(0, 100, 0, 0.7);
          z-index: 10;
          position: relative;
        }

        a.github-link:focus-visible {
          outline: 2px solid #22d3ee;
          outline-offset: 2px;
        }
      `}</style>

      <section
        id="projects"
        className="text-white min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-900 to-black px-6 md:px-24 py-20"
      >
        <div className="max-w-[1800px] mx-auto w-full">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 mb-20 text-center select-none">
            🚀 My Projects
          </h2>

          <div className="scroll-wrapper" aria-label="Projects Carousel">
            <div
              className="flex w-max animate-slide space-x-12 will-change-transform"
              style={{ animation: "slide 40s linear infinite" }}
            >
              {[...projects, ...projects].map((project, idx) => (
                <article
                  key={`${project.title}-${idx}`}
                  className="w-[90vw] sm:w-[45vw] flex-shrink-0 p-6 rounded-xl shadow-lg border border-gray-700 card-hover"
                  onMouseMove={(e) => handleMouseMove(e, idx)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                  style={{
                    transform: `perspective(600px) rotateX(${
                      rotations[idx]?.rotateX || 0
                    }deg) rotateY(${rotations[idx]?.rotateY || 0}deg) scale(1.05)`,
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="rounded-md mb-5 w-full h-52 object-cover shadow-lg"
                  />
                  <h3 className="text-2xl font-semibold mb-3 text-green-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-700 text-white px-4 py-1 rounded-full tracking-wide select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 transition px-7 py-3 text-sm font-medium rounded-full text-black github-link"
                  >
                    🔗 View on GitHub
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
