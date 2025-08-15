import React from "react";

export function Project() {
  const projects = [
    {
      title: "🔍 RepoVulnScan",
      description: `RepoVulnScan is a security tool designed to scan GitHub repositories for known vulnerabilities 
      in dependencies. It uses the OSV API and supports ecosystems like npm, PyPI, Go, Maven, Gradle, crates.io and more.`,
      tags: ["Security Tool", "Python", "OSV API"],
      image: "/ALL IMAGES/VULNS/Screenshot 2025-04-11 182048.png",
      github: "https://github.com/vettrivel007/RepoVulnScan",
    },
    {
      title: "🌊 DDoS-Wave",
      description: `DDoS-Wave is a powerful network stress-testing tool used for red team simulations. 
      It floods a target with spoofed TCP traffic, allowing realistic and customizable testing.`,
      tags: ["Red Team", "Python", "PenTesting"],
      image: "/ALL IMAGES/VULNS//Screenshot 2025-02-17 103445.png",
      github: "https://github.com/vettrivel007/DDoS-Wave",
    },
  ];

  // Tailwind doesn’t have built-in gradient animation, so use inline style for keyframes & animation
  const gradientAnimation = {
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
    backgroundImage:
      "linear-gradient(270deg, #1f2937, #374151, #111827, #1f2937)",
  };

  return (
    <>
      <style>
        {`
          @keyframes gradient {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
        `}
      </style>
      <section
        id="projects"
        className="text-white py-20 px-6 md:px-12"
        style={gradientAnimation}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 mb-16 text-center">
            🚀 My Projects
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-md mb-4 w-full h-56 object-cover shadow"
                />

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3 text-green-400">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-700 text-white px-3 py-1 rounded-full tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
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
      </section>
    </>
  );
}
