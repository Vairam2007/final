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

const scriptingTools = [
  { name: "Bash", icon: "/ALL IMAGES/LOGO/bash-icon.png" },       // Replace with actual bash icon path
  { name: "Python", icon: "/ALL IMAGES/LOGO/python-icon.png" },   // Replace with actual python icon path
];

export function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-20 px-6 md:px-12 font-mono">
      <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 mb-16 text-center">
          🧠 Skills 
        </h1>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Core Cybersecurity Skills Box */}
          <div className="bg-gray-900 border border-green-600 rounded-xl p-6 flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">🛡️ Core Cybersecurity Skills</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {tools.slice(0, 6).map((tool) => (
                <img
                  key={tool.name}
                  src={tool.icon}
                  alt={tool.name}
                  title={tool.name}
                  className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_10px_#22c55e]"
                />
              ))}
            </div>
          </div>

          {/* Tools & Frameworks Box */}
          <div className="bg-gray-900 border border-green-600 rounded-xl p-6 flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">🧰 Tools & Frameworks</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {tools.slice(6).map((tool) => (
                <img
                  key={tool.name}
                  src={tool.icon}
                  alt={tool.name}
                  title={tool.name}
                  className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_10px_#22c55e]"
                />
              ))}
            </div>
          </div>

          {/* Scripting & Automation Box */}
          <div className="bg-gray-900 border border-green-600 rounded-xl p-6 flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">⚙️ Scripting & Automation</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {scriptingTools.map((tool) => (
                <img
                  key={tool.name}
                  src={tool.icon}
                  alt={tool.name}
                  title={tool.name}
                  className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_10px_#22c55e]"
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
