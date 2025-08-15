import React from "react";

const tools = [
  { name: "Burp Suite", icon: "/ALL IMAGES/LOGO/3246741_burpsuite_security_software_icon.png" },
  { name: "Metasploit", icon: "/ALL IMAGES/LOGO/icons8-metasploit-48.png" },
  { name: "ZAP", icon: "/ALL IMAGES/LOGO/pngaaa.com-6931009.png" },
  { name: "SQLmap", icon: "/ALL IMAGES/LOGO/MySQL.png" },
  { name: "BloodHound", icon: "/ALL IMAGES/LOGO/BloodHound.png" },
  { name: "Nmap", icon: "/ALL IMAGES/LOGO/icons8-nmap-48.png" },
  { name: "Postman", icon: "/ALL IMAGES/LOGO/Postman.png" },
  { name: "Hydra", icon: "/ALL IMAGES/LOGO/pngaaa.com-4042958.png" },
  { name: "Amass", icon: "/ALL IMAGES/LOGO/Amass.png" },
  { name: "Empire", icon: "/ALL IMAGES/LOGO/Empire.png" },
];

export function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-20 px-6 md:px-12 font-mono">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 mb-12 text-center">
          🧠 Skills & Expertise
        </h2>

        {/* Core Cybersecurity Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-400 mb-4">🛡️ Core Cybersecurity Skills</h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-300 leading-relaxed pl-4">
            <li>VAPT for Web, API, Network, Mobile, and LLM/AI systems</li>
            <li>Red Team Operations, Threat Emulation & Post Exploitation (Linux/Windows)</li>
            <li>Bug Bounty Hunting & CTF Simulations</li>
            <li>SAST/DAST Security Testing & Secure Code Review</li>
            <li>Network Exploitation, Privilege Escalation & Lateral Movement</li>
            <li>Strong knowledge of OWASP Top 10, MITRE ATT&CK, NIST & CVEs</li>
          </ul>
        </div>

        {/* Tools & Frameworks - Marquee style */}
        <div className="mb-12 overflow-hidden relative">
          <h3 className="text-2xl font-semibold text-green-400 mb-6">🧰 Tools & Frameworks Mastery</h3>
          <div
            className="flex space-x-6"
            style={{
              animation: "marquee 25s linear infinite",
              whiteSpace: "nowrap",
            }}
          >
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="inline-flex flex-col items-center p-4 bg-gray-900 border border-gray-700 rounded-xl min-w-[96px] flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:shadow-[-8px_8px_0px_#22c55e] cursor-pointer"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-12 h-12 object-contain mb-2"
                />
                <p className="text-sm text-center text-gray-300">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scripting & Automation */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-400 mb-4">⚙️ Scripting & Automation</h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-300 leading-relaxed pl-4">
            <li>Bash scripting for enumeration, automation, and payloads</li>
            <li>Python for tool development, automation, exploit writing</li>
            <li>Tool chaining & internal scripts to accelerate VAPT processes</li>
          </ul>
        </div>

        {/* Sample Scripts */}
        <div>
          <h3 className="text-2xl font-semibold text-green-400 mb-6">📜 Sample Scripts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Bash Script */}
            <div className="bg-gray-900 p-4 rounded-lg border border-green-600 transition-transform duration-300 hover:scale-105 hover:shadow-[-8px_8px_0px_#22c55e] cursor-pointer">
              <p className="text-sm text-green-400 mb-2">🔧 Bash Script</p>
              <pre className="text-sm text-gray-300 whitespace-pre-wrap overflow-x-auto">
{`#!/bin/bash
echo "Starting recon..."
nmap -sC -sV -oN scan.txt $1`}
              </pre>
            </div>
            {/* Python Script */}
            <div className="bg-gray-900 p-4 rounded-lg border border-green-600 transition-transform duration-300 hover:scale-105 hover:shadow-[-8px_8px_0px_#22c55e] cursor-pointer">
              <p className="text-sm text-green-400 mb-2">🐍 Python Script</p>
              <pre className="text-sm text-gray-300 whitespace-pre-wrap overflow-x-auto">
{`import requests

url = 'https://example.com'
res = requests.get(url)
print(res.text)`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Inline keyframes animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
