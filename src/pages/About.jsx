"use client";
import React, { useState, useEffect } from "react";
import Achievements from "./Achievements.jsx";

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

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
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left text-green-400">
              💻 About Me
            </h2>

            <p>👋 Greetings, Cyber Guardians! I’m <span className="text-green-400 font-semibold">VETTRIVEL U</span>, a passionate <span className="text-amber-400 font-semibold">Offensive Security Expert</span> from <span className="text-green-400 font-semibold">Cuddalore, Tamil Nadu, India 🇮🇳</span>.</p>

            <p>I'm specialized in <span className="text-green-400 font-semibold">Vulnerability Assessment & Penetration Testing (VAPT)</span>, <span className="text-amber-400 font-semibold">Red Teaming</span>, and <span className="text-green-400 font-semibold">Offensive Security Operations</span> — with a proven track record of <span className="text-amber-400 font-semibold">breaching systems to secure them</span>.</p>

            <p>🛡️ I’ve earned multiple <span className="text-green-400 font-semibold">Hall of Fame recognitions from MNCs</span> for responsibly disclosing <span className="text-amber-400 font-semibold">critical vulnerabilities</span>. From gaining root access to high-level systems to pwning servers, I’ve had the thrill of ethically exploiting and helping secure both <span className="text-green-400 font-semibold">Indian and US government infrastructures</span>.</p>

            <p>🎁 Along the way, I’ve bagged exclusive <span className="text-amber-400 font-semibold">swags and rewards</span>, and I’m proudly listed as a <span className="text-green-400 font-semibold">Top Voice in Information Security on LinkedIn</span>.</p>

            <p>🧑‍💼 As a freelancer, I collaborate with companies to work on <span className="text-green-400 font-semibold">outsourced security projects</span> — and have been paid by top-tier organizations for my findings.</p>

            <p>🧠 I also love giving back to the community: conducting <span className="text-amber-400 font-semibold">classes, webinars, and mentorship sessions</span> for juniors and aspiring bug bounty hunters.</p>

            <p>🏆 I recently qualified for the finals of a <span className="text-green-400 font-semibold">national-level Hackathon x CTF</span>, proving my ability to think under pressure and hack smart.</p>

            <p>✍️ You’ll often find me sharing deep dives and writeups on <span className="text-amber-400 font-semibold">Medium</span>, covering everything from <span className="text-green-400 font-semibold">0-day findings</span> to <span className="text-amber-400 font-semibold">beginner tips</span>.</p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div
              className="rounded-xl overflow-hidden shadow-xl border border-gray-700 w-[360px] cursor-pointer hover:scale-105 transition"
              onClick={() => setSelectedImage("/ALL IMAGES/OTHER/Screenshot 2024-09-10 194937.png")}
            >
              <img
                src="/ALL IMAGES/OTHER/Screenshot 2024-09-10 194937.png"
                alt="Profile"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-700/50 my-12" />

        {/* Company Banner */}
        <CompanyBanner />

        <div className="border-b border-gray-700/50 my-12" />

        {/* Title + Iframe on top, Yearly Activity box below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Column: Title */}
          <div className="flex items-center">
            <h3 className="text-2xl font-bold text-white">Yearly Activity</h3>
          </div>

          {/* Right Column: Iframe */}
          <div className="flex justify-center items-center">
            <iframe
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4840710"
              title="TryHackMe Badges"
              className="w-full max-w-md rounded-lg shadow-xl"
              style={{ border: "none", height: "90px" }}
            />
          </div>
        </div>

        {/* Yearly Activity Box Below */}
        <div className="bg-gray-900 rounded-xl shadow-xl p-6 mt-6">
          <YearlyActivity />
        </div>

      </div>

      {/* Modal for Profile Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 h-10 w-10 text-black text-2xl font-bold bg-green-400 hover:bg-green-300 rounded-full flex items-center justify-center transition focus:outline-none"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-[80vh] object-contain rounded-lg border border-green-400 shadow-xl"
            />
          </div>
        </div>
      )}
      <Achievements />
    </section>
  );
}

/* Company Banner Component */
export function CompanyBanner() {
  const logos = [
    "https://bonkku.com/wp-content/uploads/2024/02/roobet-casino-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/84/Government_of_India_logo.svg",
    "https://commons.wikimedia.org/wiki/File:Hacken_logo.svg",
    "https://www.securities.io/wp-content/uploads/2021/06/mina-protocol-1000x600.jpeg",
    "https://www.chime.com/wp-content/themes/project-sscms-2025-09-29T15-31-51/images/brand/chime-logo.svg",
    "https://assets.bugcrowdusercontent.com/assets/shared/bugcrowd-logo-b90c52e691ace97f54db4d459c246639e26907e862b4c58b39173d2fac146fd0.svg",
    "https://www.sba.gov/themes/custom/sba/dist/img/logo-horizontal.svg",
  ];

  return (
    <div className="relative w-full overflow-hidden py-10 bg-transparent company-banner">
      {/* Logos scroll container */}
      <div className="flex gap-20 animate-scroll">
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Logo ${idx}`}
            className="h-16 w-auto"
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

        /* Fade at start and end of container */
        .company-banner {
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          mask-size: 100% 100%;
          -webkit-mask-size: 100% 100%;
        }
      `}</style>
    </div>
  );
}


/* Yearly Activity Component */
function YearlyActivity() {
  const weeks = 53;
  const days = 7;
  const colors = ["bg-gray-900", "bg-green-700", "bg-green-600", "bg-green-500", "bg-green-400"];

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
    <div className="text-center">
      <div className="flex justify-center flex-wrap gap-[4px]">
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
