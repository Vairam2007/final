import React from "react";

export function Project() {
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

  return (
    <>
      <style>{`
        @keyframes slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .scroll-wrapper::-webkit-scrollbar {
          display: none;
        }

        .card-hover:hover {
          background: linear-gradient(to bottom right, #0f172a, #1e293b);
          box-shadow: 0 8px 30px rgba(0, 255, 180, 0.3);
          transform: scale(1.03);
        }
      `}</style>

      <section
        id="projects"
        className="text-white py-20 px-6 md:px-12 bg-gradient-to-br from-gray-900 to-black overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 mb-16 text-center">
            🚀 My Projects
          </h2>

          <div className="relative w-full overflow-hidden">
            <div
              className="flex w-max animate-slide space-x-10"
              style={{
                animation: "slide 40s linear infinite",
              }}
            >
              {[...projects, ...projects].map((project, idx) => (
                <div
                  key={idx}
                  className="w-[90vw] sm:w-[45vw] flex-shrink-0 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 card-hover"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-md mb-4 w-full h-52 object-cover shadow"
                  />
                  <h3 className="text-2xl font-semibold mb-2 text-green-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-700 text-white px-3 py-1 rounded-full tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 transition px-6 py-2 text-sm font-medium rounded-full text-black"
                  >
                    🔗 View on GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
