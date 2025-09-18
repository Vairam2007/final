"use client";
import React, { useState, useEffect, useRef } from "react";

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative text-white min-h-screen bg-gradient-to-b from-[#0a0a2f] to-[#000000]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 space-y-24">

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-16 items-start">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p>👋 Hi, I’m <span className="text-cyan-400 font-semibold">VETTRIVEL U</span>, Offensive Security Expert based in India 🇮🇳.</p>
            <p>🛡 Gained <span className="text-purple-400 font-medium">root access</span> on high-value systems and uncovered <span className="text-red-400 font-medium">business-critical flaws</span>.</p>
            <p>👨‍💻 Freelance on <span className="text-green-400 font-medium">outsourced security projects</span> and mentor via workshops & webinars.</p>
            <p>💡 Support <span className="text-orange-400 font-semibold">bug bounty hunters</span> with content & training.</p>
          </div>

          <div className="flex flex-col items-center gap-6">
            {/* ✅ TryHackMe Badge iframe — height halved */}
            <iframe
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4840710"
              title="TryHackMe Badge"
              className="w-[360px] h-[90px] border-0 rounded-lg shadow-lg mb-6 "
            ></iframe>

            <div
              className="rounded-xl overflow-hidden shadow-xl border border-gray-700 w-[360px] cursor-pointer hover:scale-105 transition"
              onClick={() =>
                setSelectedImage("/ALL IMAGES/OTHER/Screenshot 2024-09-10 194937.png")
              }
            >
              <img
                src="/ALL IMAGES/OTHER/Screenshot 2024-09-10 194937.png"
                alt="LinkedIn Profile"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Company Banner / Scrolling Logos */}
        <CompanyBanner />

        {/* Mac-style Terminal */}
        <MacTerminal />

        {/* Yearly Activity */}
        <YearlyActivity />

      </div>

      {/* Modal for Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 h-10 w-10 text-black text-2xl font-bold bg-purple-500 hover:bg-purple-400 rounded-full flex items-center justify-center transition focus:outline-none"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-[80vh] object-contain rounded-lg border border-purple-500 shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

/* ✅ Improved Company Banner with perfectly spaced logos */
export function CompanyBanner() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Intel-logo.svg",
  ];

  return (
    <div className="w-full overflow-hidden relative py-10 bg-gray-900">
      <div className="flex gap-20 animate-scroll hover:[animation-play-state:paused] justify-around items-center">
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Logo ${idx}`}
            className="h-16 w-auto filter brightness-0 invert"
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: calc(200%);
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
}

/* Mac-style Terminal (unchanged) */
function MacTerminal() {
  const [logs, setLogs] = React.useState([{ type: "system", text: "Welcome! Type 'help' to see commands." }]);
  const [currentInput, setCurrentInput] = React.useState("");
  const [cursorVisible, setCursorVisible] = React.useState(true);
  const terminalRef = React.useRef(null);

  React.useEffect(() => {
    const interval = setInterval(() => setCursorVisible((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [logs, currentInput]);

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (e.key === "Backspace") setCurrentInput((prev) => prev.slice(0, -1));
    else if (e.key === "Enter") {
      executeCommand(currentInput.trim());
      setCurrentInput("");
    } else if (e.key.length === 1) setCurrentInput((prev) => prev + e.key);
  };

  const executeCommand = (cmd) => {
    if (!cmd) return;
    let response = "";
    switch (cmd.toLowerCase()) {
      case "help":
        response = "Available commands: about, skills, contact, clear";
        break;
      case "about":
        response = "Hi! I'm VETTRIVEL U, Offensive Security Expert from India.";
        break;
      case "skills":
        response = "Skills: Penetration Testing, Bug Bounty, Web Security, Linux";
        break;
      case "contact":
        response = "Contact: uvettrivel007@gmail.com";
        break;
      case "clear":
        setLogs([]);
        return;
      default:
        response = `Command not found: ${cmd}`;
    }
    setLogs((prev) => [...prev, { type: "command", text: cmd }, { type: "response", text: response }]);
  };

  return (
    <div
      className="mt-12 max-w-4xl mx-auto rounded-xl shadow-2xl border border-gray-700 bg-[#1e1e1e] font-mono text-green-400 focus:outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-t-xl">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-2 text-gray-300 text-sm">Terminal</span>
      </div>

      <div ref={terminalRef} className="p-4 max-h-[400px] overflow-y-auto whitespace-pre-wrap">
        {logs.map((log, idx) => (
          <div key={idx}>
            {log.type === "command" && <span>&gt; {log.text}</span>}
            {log.type === "response" && <div className="ml-4 text-gray-300">{log.text}</div>}
            {log.type === "system" && <div className="text-gray-400">{log.text}</div>}
          </div>
        ))}
        <div className="flex">
          <span>&gt; </span>
          <span>{currentInput}</span>
          {cursorVisible && <span className="animate-pulse">█</span>}
        </div>
      </div>
    </div>
  );
}

/* ✅ Yearly Activity — realistic GitHub-style 7x53 grid */
function YearlyActivity() {
  const weeks = 53;
  const days = 7;
  const colors = [
    "bg-gray-800",
    "bg-green-900",
    "bg-green-700",
    "bg-green-500",
    "bg-green-300"
  ];

  // generate realistic contributions pattern
  const activity = Array.from({ length: days }, () =>
    Array.from({ length: weeks }, () => {
      const rand = Math.random();
      if (rand < 0.5) return 0;        // many empty days
      else if (rand < 0.7) return 1;
      else if (rand < 0.85) return 2;
      else if (rand < 0.95) return 3;
      else return 4;
    })
  );

  return (
    <div className="mt-20 text-center">
      <h3 className="text-2xl font-bold text-white mb-4">Yearly Activity</h3>
      <div className="flex gap-[4px] justify-center">
        {Array.from({ length: weeks }, (_, week) => (
          <div key={week} className="flex flex-col gap-[4px]">
            {Array.from({ length: days }, (_, day) => (
              <div
                key={day}
                className={`w-4 h-4 rounded-sm ${colors[activity[day][week]]}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
