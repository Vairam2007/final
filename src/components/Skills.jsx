// SkillsSection.jsx
import React from "react";

// Sample assets — you can add more icons/images
const tools = [
  { name: "Burp Suite", icon: "/tools/burp.png" },
  { name: "Metasploit", icon: "/tools/metasploit.png" },
  { name: "ZAP", icon: "/tools/zap.png" },
  { name: "SQLmap", icon: "/tools/sqlmap.png" },
  { name: "BloodHound", icon: "/tools/bloodhound.png" },
  // Add more as needed
];

export function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-8">Skills</h2>

        {/* Core Skills */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2 text-gray-200">Core Focus Areas</h3>
          <ul className="list-disc ml-6 text-lg text-gray-300">
            <li>VAPT, Red Teaming, LLM Security, Cloud Pentesting</li>
            <li>Scripting: Python & Bash</li>
            <li>Mentoring, Writeups, and Security Research</li>
          </ul>
        </div>

        {/* Tools Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-200">Tools & Frameworks</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-900 rounded-lg hover:scale-105 transition"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-12 h-12 object-contain mb-2"
                />
                <p className="text-sm text-center">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Code Snippets */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-200">Sample Scripts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg border border-green-500 shadow">
              <p className="text-sm text-green-400 mb-2">🔧 Bash Script</p>
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`#!/bin/bash
echo "Starting recon..."
nmap -sC -sV -oN scan.txt $1`}
              </pre>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border border-green-500 shadow">
              <p className="text-sm text-green-400 mb-2">🐍 Python Script</p>
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`import requests

url = 'https://example.com'
res = requests.get(url)
print(res.text)`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
