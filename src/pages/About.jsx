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
    <section className="relative text-white min-h-screen overflow-hidden bg-gradient-to-b from-[#0a0a2f] to-[#000000]">
      {/* 🌌 Floating Stars */}
      <div className="stars">
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        {/* 45° Gradient Fade Mask */}
        <div className="fade-mask"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[95%] 2xl:max-w-[1600px] mx-auto px-6 md:px-20 py-24 space-y-32">
        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-16 items-start">
          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left text-green-400">
              💻 About Me
            </h2>

            <p>
              👋 Greetings, Cyber Guardians! I’m{" "}
              <span className="text-green-400 font-semibold">VETTRIVEL U</span>, a passionate{" "}
              <span className="text-amber-400 font-semibold">Offensive Security Expert</span> from{" "}
              <span className="text-green-400 font-semibold">Cuddalore, Tamil Nadu, India 🇮🇳</span>.
            </p>

            <p>
              I'm specialized in{" "}
              <span className="text-green-400 font-semibold">Vulnerability Assessment & Pentesting (VAPT)</span>,{" "}
              <span className="text-amber-400 font-semibold">Red Teaming</span>, and{" "}
              <span className="text-green-400 font-semibold">Offensive Security Operations</span> — with a proven record of{" "}
              <span className="text-amber-400 font-semibold">breaching systems to secure them</span>.
            </p>

            <p>
              🛡️ I’ve earned multiple{" "}
              <span className="text-green-400 font-semibold">Hall of Fame recognitions from MNCs</span> for disclosing{" "}
              <span className="text-amber-400 font-semibold">critical vulnerabilities</span>. From gaining root access to pwning servers, I’ve helped secure{" "}
              <span className="text-green-400 font-semibold">Indian and US government infrastructures</span>.
            </p>

            <p>
              🎁 Along the way, I’ve bagged exclusive{" "}
              <span className="text-amber-400 font-semibold">swags and rewards</span>, and I’m proudly listed as a{" "}
              <span className="text-green-400 font-semibold">Top Voice in Information Security</span>.
            </p>
          </div>

          {/* Profile Image */}
          <div className="flex flex-col items-center gap-6">
            <div
              className="rounded-xl overflow-hidden shadow-2xl border border-gray-700 w-[400px] md:w-[450px] cursor-pointer hover:scale-105 transition-transform duration-500"
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

        <div className="border-b border-gray-700/50 my-16" />
        <CompanyBanner />
        <div className="border-b border-gray-700/50 my-16" />
        <div className="bg-gray-900/60 rounded-xl shadow-2xl p-8 mt-6 backdrop-blur-md border border-gray-800/70">
          <YearlyActivity />
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
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
              className="w-full max-h-[80vh] object-contain rounded-lg border border-green-400 shadow-2xl"
            />
          </div>
        </div>
      )}

      <Achievements />

      {/* STAR ANIMATION STYLES */}
      <style jsx>{`
        .stars { position:absolute; inset:0; overflow:hidden; z-index:0; }
        .stars1, .stars2, .stars3 { 
          position:absolute; inset:0;
          background-image: 
            radial-gradient(2px 2px at 20% 30%, #fff, transparent),
            radial-gradient(1px 1px at 80% 40%, #fff, transparent),
            radial-gradient(1.5px 1.5px at 50% 80%, #fff, transparent),
            radial-gradient(2px 2px at 10% 60%, #fff, transparent),
            radial-gradient(1px 1px at 70% 20%, #fff, transparent); 
          background-size:200px 200px; 
          animation: moveStars 60s linear infinite;
        }
        .stars2 { background-size: 300px 300px; opacity: 0.6; animation-duration: 90s; }
        .stars3 { background-size: 400px 400px; opacity: 0.4; animation-duration: 120s; }
        @keyframes moveStars { from {transform: translateY(0);} to {transform: translateY(-2000px);} }

        .fade-mask {
          position:absolute;
          inset:0;
          pointer-events:none;
          background: linear-gradient(45deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.9) 100%);
          z-index:1;
        }
      `}</style>
    </section>
  );
}

/* Company Banner */
export function CompanyBanner() {
  const logos = [
    "https://bonkku.com/wp-content/uploads/2024/02/roobet-casino-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/84/Government_of_India_logo.svg",
    "/ALL IMAGES/LOGO/128px-Hacken_logo.svg",
    "https://www.securities.io/wp-content/uploads/2021/06/mina-protocol-1000x600.jpeg",
    "https://www.chime.com/wp-content/themes/project-sscms-2025-09-29T15-31-51/images/brand/chime-logo.svg",
    "https://assets.bugcrowdusercontent.com/assets/shared/bugcrowd-logo-b90c52e691ace97f54db4d459c246639e26907e862b4c58b39173d2fac146fd0.svg",
    "https://www.sba.gov/themes/custom/sba/dist/img/logo-horizontal.svg",
  ];

  return (
    <div className="relative w-full overflow-hidden py-12 bg-transparent company-banner">
      <div className="flex gap-32 animate-scroll max-w-[98%] mx-auto">
        {[...logos, ...logos].map((logo, idx) => (
          <img key={idx} src={logo} alt={`Logo ${idx}`} className="h-20 w-auto" />
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { display: flex; width: calc(200%); animation: scroll 25s linear infinite; }
        .company-banner {
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }
      `}</style>
    </div>
  );
}

/* Yearly Activity */
function YearlyActivity() {
  const weeks = 53;
  const days = 7;
  const colors = ["bg-gray-900", "bg-green-700", "bg-green-600", "bg-green-500", "bg-green-400"];
  const activity = Array.from({ length: days }, () =>
    Array.from({ length: weeks }, () => Math.floor(Math.random() * 5))
  );

  return (
    <div className="text-center">
      <div className="flex justify-center flex-wrap gap-[4px]">
        {Array.from({ length: weeks }, (_, week) => (
          <div key={week} className="flex flex-col gap-[4px]">
            {Array.from({ length: days }, (_, day) => (
              <div key={day} className={`w-4 h-4 rounded-sm ${colors[activity[day][week]]}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
