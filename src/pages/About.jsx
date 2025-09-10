"use client";
import React, { useState, useEffect, useRef } from "react";

// About Component
function About() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const canvasRef = useRef(null);

  // Scroll-triggered stats
  useEffect(() => {
    const handleScroll = () => {
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setStatsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animated triangle background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height =
        Math.max(window.innerHeight, document.body.scrollHeight) * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${Math.max(
        window.innerHeight,
        document.body.scrollHeight
      )}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();

    const points = [];
    const POINT_COUNT = 50;
    for (let i = 0; i < POINT_COUNT; i++) {
      points.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          for (let k = j + 1; k < points.length; k++) {
            const dist1 = Math.hypot(
              points[i].x - points[j].x,
              points[i].y - points[j].y
            );
            const dist2 = Math.hypot(
              points[j].x - points[k].x,
              points[j].y - points[k].y
            );
            const dist3 = Math.hypot(
              points[i].x - points[k].x,
              points[i].y - points[k].y
            );
            if (dist1 < 180 && dist2 < 180 && dist3 < 180) {
              ctx.strokeStyle = `rgba(0,255,255,0.08)`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(points[i].x, points[i].y);
              ctx.lineTo(points[j].x, points[j].y);
              ctx.lineTo(points[k].x, points[k].y);
              ctx.closePath();
              ctx.stroke();
            }
          }
        }
      }

      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.7)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > window.innerWidth) p.dx = -p.dx;
        if (p.y < 0 || p.y > window.innerHeight) p.dy = -p.dy;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const stats = [
    { number: 10, label: "HOFs", delay: 100 },
    { number: 94, label: "eJPT Score", delay: 300 },
    { number: 5, label: "Top % THM", delay: 500 },
    { number: 50, label: "Writeups", delay: 700 },
  ];

  return (
    <section className="relative text-white overflow-hidden min-h-screen">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 space-y-24">
        {/* About Text & Images */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-16 items-start">
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <p>
              👋 Hi, I’m <span className="text-green-400 font-semibold">VETTRIVEL U</span>, an <span className="text-cyan-400 font-semibold">Offensive Security Expert</span> based in India 🇮🇳...
            </p>
            <p>
              🛡 I’ve gained <span className="text-purple-400 font-medium">root access</span> on high-value systems and uncovered <span className="text-red-400 font-medium">business-critical flaws</span>...
            </p>
            <p>
              👨‍💻 I freelance on <span className="text-emerald-400 font-medium">outsourced security projects</span> and mentor through workshops & webinars.
            </p>
            <p>
              💡 I actively support <span className="text-orange-400 font-semibold">bug bounty hunters</span> with content and community training.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="rounded-xl overflow-hidden shadow-xl border border-gray-700 w-auto h-[80px] hover:scale-105 transition">
              <iframe
                src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4840710"
                title="TryHackMe Badge"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>

            <div className="bg-[#1a1f2b] px-4 py-2 rounded-md flex items-center gap-2 shadow-md border border-gray-700">
              <img src="/ALL IMAGES/LOGO/tryhackme.png" alt="TryHackMe" className="w-5 h-5 object-contain" />
              <span className="text-sm text-cyan-300 font-semibold">Top 5% TryHackMe User</span>
            </div>

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

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-center mt-16"
        >
          {stats.map((stat) => (
            <Stat
              key={stat.label}
              number={stat.number}
              label={stat.label}
              delay={stat.delay}
              animate={statsVisible}
            />
          ))}
        </div>

        {/* Mac-style Terminal */}
        <MacTerminal />

        {/* Yearly Activity Section */}
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

// Stat Component
function Stat({ number, label, delay, animate }) {
  return (
    <div
      className="flex flex-col items-center justify-center w-40 h-40 rounded-full bg-gradient-to-tr from-purple-700 to-indigo-900 shadow-lg cursor-default transition-all duration-300 ease-in-out hover:scale-105"
      style={{
        animation: `fadeInScale 600ms ease forwards`,
        animationDelay: `${delay}ms`,
        opacity: 0,
      }}
    >
      <div className="flex items-baseline space-x-1">
        {animate ? (
          <CountUp
            from={0}
            to={number}
            duration={2}
            className="text-6xl font-extrabold text-white drop-shadow-md"
          />
        ) : (
          <span className="text-6xl font-extrabold text-white drop-shadow-md">0</span>
        )}
        <span className="text-6xl font-extrabold text-white drop-shadow-md">+</span>
      </div>
      <p className="mt-3 text-xl font-semibold text-indigo-200">{label}</p>

      <style>{`
        @keyframes fadeInScale {
          0% {opacity:0; transform:scale(0.85);}
          100% {opacity:1; transform:scale(1);}
        }
      `}</style>
    </div>
  );
}

// CountUp Component
function CountUp({ from = 0, to, duration = 2, className = "" }) {
  const [count, setCount] = React.useState(from);

  React.useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ratio = Math.min(progress / (duration * 1000), 1);
      setCount(Math.floor(from + (to - from) * ratio));
      if (ratio < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [from, to, duration]);

  return <span className={className}>{count}</span>;
}

// Mac-style Terminal Component
function MacTerminal() {
  const [logs, setLogs] = React.useState([
    { type: "system", text: "Welcome! Type 'help' to see commands." },
  ]);
  const [currentInput, setCurrentInput] = React.useState("");
  const [cursorVisible, setCursorVisible] = React.useState(true);
  const terminalRef = React.useRef(null);

  // Blinking cursor
  React.useEffect(() => {
    const interval = setInterval(() => setCursorVisible((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom
  React.useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [logs, currentInput]);

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (e.key === "Backspace") {
      setCurrentInput((prev) => prev.slice(0, -1));
    } else if (e.key === "Enter") {
      executeCommand(currentInput.trim());
      setCurrentInput("");
    } else if (e.key.length === 1) {
      setCurrentInput((prev) => prev + e.key);
    }
  };

  const executeCommand = (cmd) => {
    if (!cmd) return;
    let response = "";
    switch (cmd.toLowerCase()) {
      case "help":
        response = "Available commands: about, skills, contact, clear";
        break;
      case "ls":
        response = " about  skills  contact  clear";
        break;
      case "cd about" :
        response = "Hi! I'm VETTRIVEL U, Offensive Security Expert from India.";
        break;
      case "cd skills":
        response = "Skills: Penetration Testing, Bug Bounty, Web Security, Linux";
        break;
      case "contact":
        response = "Contact: vettrivel@example.com";
        break;
        case "about" :
        response = "Hi! I'm VETTRIVEL U, Offensive Security Expert from India.";
        break;
      case "skills":
        response = "Skills: Penetration Testing, Bug Bounty, Web Security, Linux";
        break;
      case "cd contact":
        response = "Contact: vettrivel@example.com";
        break;
      case "clear":
        setLogs([]);
        return;
      default:
        response = `Command not found: ${cmd}`;
    }
    setLogs((prev) => [
      ...prev,
      { type: "command", text: cmd },
      { type: "response", text: response },
    ]);
  };

  return (
    <div
      className="mt-12 max-w-4xl mx-auto rounded-xl shadow-2xl border border-gray-700 bg-[#1e1e1e] font-mono text-green-400 focus:outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Mac-style terminal header */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-t-xl">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-2 text-gray-300 text-sm">Terminal</span>
      </div>

      {/* Terminal body */}
      <div
        ref={terminalRef}
        className="p-4 max-h-[400px] overflow-y-auto whitespace-pre-wrap"
      >
        {logs.map((log, idx) => (
          <div key={idx}>
            {log.type === "command" && <span>&gt; {log.text}</span>}
            {log.type === "response" && <div className="ml-4 text-gray-300">{log.text}</div>}
            {log.type === "system" && <div className="text-gray-400">{log.text}</div>}
          </div>
        ))}

        {/* Current input */}
        <div className="flex">
          <span>&gt; </span>
          <span>{currentInput}</span>
          {cursorVisible && <span className="animate-pulse">█</span>}
        </div>
      </div>
    </div>
  );
}

// Yearly Activity Component
function YearlyActivity() {
  const generateActivityData = () => {
    const daysInYear = 365;
    return Array.from({ length: daysInYear }, (_, i) => {
      const level = Math.floor(Math.random() * 4);
      return { day: i, level };
    });
  };

  const activityData = generateActivityData();
  const totalEvents = activityData.reduce((acc, d) => acc + d.level, 0);

  const colors = {
    0: "bg-gray-800",
    1: "bg-yellow-400",
    2: "bg-green-400",
    3: "bg-green-600",
  };

  const weeks = [];
  for (let i = 0; i < activityData.length; i += 7) {
    weeks.push(activityData.slice(i, i + 7));
  }

  return (
    <section className="bg-[#0d1117] text-white py-10 px-6 rounded-xl shadow-lg border border-gray-700 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400">
            📊 Yearly Activity
          </h2>
          <span className="text-gray-300 text-sm md:text-base">
            Total events this year: <span className="text-cyan-300 font-semibold">{totalEvents}</span>
          </span>
        </div>
        <div className="flex gap-1 overflow-x-auto pb-4">
          {weeks.map((week, weekIdx) => (
            <div key={weekIdx} className="flex flex-col gap-1">
              {week.map((day, dayIdx) => (
                <div
                  key={dayIdx}
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-sm ${colors[Math.min(day.level, 3)]}`}
                  title={`Day ${day.day + 1}: ${day.level} events`}
                ></div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-6 text-sm text-gray-400 flex-wrap">
          <div className="flex items-center gap-1"><div className="w-4 h-4 rounded-sm bg-gray-800"></div> No activity</div>
          <div className="flex items-center gap-1"><div className="w-4 h-4 rounded-sm bg-yellow-400"></div> Low</div>
          <div className="flex items-center gap-1"><div className="w-4 h-4 rounded-sm bg-green-400"></div> Medium</div>
          <div className="flex items-center gap-1"><div className="w-4 h-4 rounded-sm bg-green-600"></div> High</div>
        </div>
      </div>
    </section>
  );
}

export default About;
