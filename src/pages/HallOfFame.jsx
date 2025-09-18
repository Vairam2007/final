"use client";
import React, { useState, useEffect } from "react";

const hofItems = [
  {
    title: "Hall of Fame – Flipkart",
    about:
      "Cobalt offers an on-demand penetration testing platform that connects businesses to freelance security researchers. It is a strong choice for companies needing faster test cycles and cloud-based application security. However, Cobalt focuses more on speed and convenience than deep manual testing, making it better suited for smaller or mid-sized environments.",
    features: [
      "On-demand pentesting marketplace",
      "Faster test cycles for smaller environments",
      "Focus on cloud-native and web applications",
      "Less manual, deep-dive security compared to AppSecure",
    ],
  },
  {
    title: "Swags from BugCrowd",
    about:
      "BugCrowd rewards outstanding researchers with exclusive swags for critical findings.",
    features: ["StormTech Backpack", "Beanie", "Exclusive recognition items"],
  },
  {
    title: "Hall of Fame – Chime United States",
    about:
      "Recognized for discovering a critical P1 vulnerability and securing first position in Chime’s Hall of Fame.",
    features: [
      "Critical P1 vulnerability discovery",
      "Top placement in Hall of Fame",
      "Public recognition by Chime security team",
    ],
  },
  // 👉 You can add more items – left side will scroll automatically
];

export default function HallOfFamePage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  // Auto-switch every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % hofItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // restart the progress bar animation
  useEffect(() => {
    setProgressKey((k) => k + 1);
  }, [selectedIndex]);

  const handleClick = (i) => {
  setSelectedIndex(i);
  setProgressKey((k) => k + 1);
};


  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#0a0a1f] via-[#0a0a2f] to-[#0f0f30] text-white pt-28 px-4 md:px-12 lg:px-20 overflow-hidden">
      {/* ===== Twinkling Star Layers ===== */}
      <div className="stars stars1"></div>
      <div className="stars stars2"></div>
      <div className="stars stars3"></div>

      {/* ===== Heading ===== */}
      <h2 className="relative z-10 text-center text-3xl md:text-5xl font-extrabold text-gray-100 mb-16">
        HALL OF FAME
      </h2>

      <div className="relative z-10 flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
        {/* -------- Left: Scrollable Topic Boxes -------- */}
        <aside className="md:w-1/4 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent space-y-8">
          {hofItems.map((item, i) => (
            <button
              key={item.title}
              onClick={() => handleClick(i)}
              className={`relative w-full text-left px-6 py-6 rounded-xl border
                          backdrop-blur-sm transition-all duration-300
                          ${
                            selectedIndex === i
                              ? "border-yellow-400/60 bg-white/5 shadow-[0_0_20px_rgba(255,255,0,0.4)]"
                              : "border-gray-700 bg-white/5 hover:bg-white/10 hover:border-gray-500"
                          }`}
            >
              <span
                className={`block text-lg md:text-xl font-semibold transition-colors duration-300
                ${
                  selectedIndex === i
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-gray-100"
                }`}
              >
                {item.title}
              </span>

              {/* ⚡ Lightning baseline progress bar */}
              {selectedIndex === i && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] overflow-hidden">
                  <div
                    key={progressKey}
                    className="progress-baseline h-[3px] w-full"
                  />
                </div>
              )}
            </button>
          ))}
        </aside>

        {/* -------- Right: Info Card (fixed) -------- */}
        <main className="md:w-3/4">
          <div className="bg-[#11112a]/80 border border-gray-700 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              About company
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              {hofItems[selectedIndex].about}
            </p>

            <h4 className="text-xl md:text-2xl font-semibold mb-3">
              Key Features:
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {hofItems[selectedIndex].features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </main>
      </div>

      <style>{`
        /* Subtle grid only in top-left corner */
        section::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 50%;
          height: 50%;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 1;
        }

        /* Lightning baseline progress bar */
        .progress-baseline {
          background: linear-gradient(
            90deg,
            rgba(255,255,0,0.1) 0%,
            rgba(255,255,0,0.3) 20%,
            rgba(255,255,0,0.8) 50%,
            rgba(255,255,0,0.3) 80%,
            rgba(255,255,0,0.1) 100%
          );
          background-size: 200% 100%;
          animation: lightningBaseline 5s linear forwards;
          box-shadow:
            0 0 10px rgba(255,255,0,0.8),
            0 0 20px rgba(255,255,0,0.5),
            0 0 30px rgba(255,255,0,0.3);
        }

        @keyframes lightningBaseline {
          0% { background-position: 0% 0%; width: 0%; }
          100% { background-position: 200% 0%; width: 100%; }
        }

        /* === Twinkling Starfield === */
        .stars {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: transparent;
          z-index: 0;
        }
        .stars1, .stars2, .stars3 {
          background-image:
            radial-gradient(2px 2px at 20% 30%, #fff, transparent),
            radial-gradient(1px 1px at 80% 40%, #fff, transparent),
            radial-gradient(1.5px 1.5px at 50% 80%, #fff, transparent),
            radial-gradient(2px 2px at 10% 60%, #fff, transparent),
            radial-gradient(1px 1px at 70% 20%, #fff, transparent);
          background-size: 200px 200px;
          animation: moveStars 60s linear infinite;
        }
        .stars2 { background-size: 300px 300px; opacity: 0.6; animation-duration: 90s; }
        .stars3 { background-size: 400px 400px; opacity: 0.4; animation-duration: 120s; }
        @keyframes moveStars {
          from {transform: translateY(0);}
          to {transform: translateY(-2000px);}
        }

        /* Optional: thin custom scrollbar */
        .scrollbar-thin::-webkit-scrollbar { width: 6px; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #555; border-radius: 3px; }
      `}</style>
    </section>
  );
}
