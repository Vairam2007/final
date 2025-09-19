"use client";
import React, { useState, useEffect } from "react";

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setSelectedImage(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="relative text-white min-h-screen bg-gradient-to-b from-[#0a0a2f] to-[#000000]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24 space-y-24">

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-16 items-start">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left
                           text-cyan-300 drop-shadow-[0_0_4px_#00ffff80]">
              About Me
            </h2>

            <p>👋 Greetings, Cyber Guardians! I’m <span className="text-cyan-400 font-semibold">VETTRIVEL U</span>, a passionate <span className="text-purple-400 font-medium">Offensive Security Expert</span> from <span className="text-green-400 font-medium">Cuddalore, Tamil Nadu, India 🇮🇳</span>.</p>

            <p>🛡️ Specialized in <span className="text-yellow-400 font-semibold">Vulnerability Assessment & Penetration Testing (VAPT)</span>, <span className="text-pink-400 font-semibold">Red Teaming</span>, and <span className="text-blue-400 font-semibold">Offensive Security Operations</span> — with a proven track record of ethically breaching systems to secure them.</p>

            <p>🏆 Earned multiple <span className="text-purple-400 font-semibold">Hall of Fame recognitions</span> from MNCs for responsibly disclosing critical vulnerabilities, including <span className="text-red-400 font-medium">root access</span> and <span className="text-red-400 font-medium">server pwning</span>.</p>

            <p>🎁 Bagged exclusive <span className="text-yellow-400 font-medium">swags and rewards</span>; listed as a <span className="text-green-400 font-semibold">Top Voice in Information Security</span> on LinkedIn.</p>

            <p>🧑‍💼 Freelancing on <span className="text-blue-400 font-medium">outsourced security projects</span> for top-tier companies.</p>

            <p>🧠 Giving back to the community: conducting <span className="text-pink-400 font-medium">classes, webinars, and mentorship sessions</span> for juniors and aspiring bug bounty hunters.</p>

            <p>✍️ Sharing deep dives and writeups on <span className="text-purple-400 font-medium">Medium</span>, covering everything from <span className="text-red-400 font-medium">0-day findings</span> to beginner tips.</p>

            <p>🚀 Recently qualified for finals of a <span className="text-yellow-400 font-semibold">national-level Hackathon x CTF</span>, proving the ability to <span className="text-green-400 font-medium">think under pressure and hack smart</span>.</p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div
              className="rounded-xl overflow-hidden shadow-xl border border-gray-700 w-[360px] cursor-pointer hover:scale-105 transition"
              onClick={() => setSelectedImage("/ALL IMAGES/OTHER/Screenshot 2024-09-10 194937.png")}
            >
              <img
                src="/ALL IMAGES/OTHER/Screenshot 2024-09-10 194937.png"
                alt="LinkedIn Profile"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-700/50 my-12" />

        {/* Company Banner */}
        <CompanyBanner />

        <div className="border-b border-gray-700/50 my-12" />

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

/* Company Banner Component */
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
            className="h-16 w-auto filter grayscale hover:grayscale-0 transition duration-300"
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

/* Yearly Activity Component */
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

  const activity = Array.from({ length: days }, () =>
    Array.from({ length: weeks }, () => {
      const rand = Math.random();
      if (rand < 0.5) return 0;
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
                title={`Activity level: ${activity[day][week]}`}
                className={`w-4 h-4 rounded-sm ${colors[activity[day][week]]}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
