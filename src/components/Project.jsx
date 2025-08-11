// ProjectsSection.jsx
import React from "react";

export function Project() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-8">Projects</h2>

        {/* Project 1: RepoVulnScan */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-200 mb-4">RepoVulnScan</h3>
          <p className="text-lg text-gray-300 mb-4">
            GitHub repository scanner using OSV API to identify vulnerabilities in open-source packages.
          </p>
          
          {/* Screenshot */}
          <div className="mb-4">
            <img
              src="/projects/repovulnscan.png"
              alt="RepoVulnScan"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Project Badges & GitHub link */}
          <div className="flex items-center gap-4">
            <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">Security Tool</span>
            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Python</span>
            <a
              href="https://github.com/your-username/RepoVulnScan" // Update with your GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-2 rounded-full mt-4 inline-block hover:bg-green-600"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 2: DDoS-Wave */}
        <div>
          <h3 className="text-xl font-semibold text-gray-200 mb-4">DDoS-Wave</h3>
          <p className="text-lg text-gray-300 mb-4">
            Network stress testing tool designed for red team simulations to simulate DDoS attacks.
          </p>

          {/* Screenshot */}
          <div className="mb-4">
            <img
              src="/projects/ddoswave.png"
              alt="DDoS-Wave"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Project Badges & GitHub link */}
          <div className="flex items-center gap-4">
            <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm">Red Team</span>
            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Python</span>
            <a
              href="https://github.com/your-username/DDoS-Wave" // Update with your GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-2 rounded-full mt-4 inline-block hover:bg-green-600"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
