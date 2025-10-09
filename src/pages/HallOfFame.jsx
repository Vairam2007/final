"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import ElectricBorder from "./ElectricBorder";

const hofItems = [
  { title: "Hall of Fame – Flipkart", image: "https://picsum.photos/800/400?1", about: "Positioned First Place in Hall of Fame", features: ["Critical P1 vulnerability", "Team Recognition", "Certificate Awarded"] },
  { title: "Swags from BugCrowd", image: "https://picsum.photos/800/400?2", about: "", features: ["1x – StormTech Backpack", "1x – Beanie", "BugCrowd Swag Pack"] },
  { title: "Hall of Fame – Chime United States", image: "https://picsum.photos/800/400?3", about: "Critical P1 Vulnerability & placed in 1st Position", features: ["Cash Reward", "Recognition Badge"] },
  { title: "Hall of Fame - Mina Protocol", image: "https://picsum.photos/800/400?4", about: "Identified vulnerabilities in Blockchain Based Web Application", features: ["Report Submitted", "Acknowledged by Team"] },
  { title: "Hall of Fame – HACKEN", image: "https://picsum.photos/800/400?5", about: "Identified Critical vulnerabilities in HACKEN Web and Apps", features: ["High severity bugs", "Certificate of Achievement"] },
  { title: "Hall of Fame – Swaggle", image: "https://picsum.photos/800/400?6", about: "Identified 3+ vulnerabilities in Swaggle website", features: ["2x High", "1x Low", "Bug Bounty Reward"] },
];

export default function HallOfFamePage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const leftListRef = useRef(null);
  const itemRefs = useRef([]);
  const scrollTimeout = useRef(false);

  // Auto cycle every 6s
  const changeIndex = useCallback((nextIndex) => {
    const index = ((nextIndex % hofItems.length) + hofItems.length) % hofItems.length;
    setSelectedIndex(index);
    setProgressKey((k) => k + 1);
    itemRefs.current[index]?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => changeIndex(selectedIndex + 1), 6000);
    return () => clearTimeout(timeout);
  }, [selectedIndex, changeIndex]);

  // Reset content view on index change
  useEffect(() => setShowContent(false), [selectedIndex]);

  const handleClick = (i) => changeIndex(i);

  const handleScroll = useCallback(
    (e) => {
      e.preventDefault();
      if (scrollTimeout.current) return;
      scrollTimeout.current = true;
      requestAnimationFrame(() => (scrollTimeout.current = false));
      if (e.deltaY > 0) changeIndex(selectedIndex + 1);
      else changeIndex(selectedIndex - 1 + hofItems.length);
    },
    [selectedIndex, changeIndex]
  );

  return (
    <section className="relative h-screen w-full py-10 overflow-hidden flex flex-col text-white bg-gradient-to-br from-[#0a0a2f] via-[#0a0a2f] to-[#000000] pt-20 px-6 md:px-12 lg:px-20">
      {/* Star Background Layers */}
      <div className="stars">
        <div className="stars1"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="fade-mask"></div>
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex flex-1 gap-6 max-w-7xl mx-auto h-full flex-col md:flex-row">
        {/* Left List */}
        <aside
          ref={leftListRef}
          className="md:w-1/4 h-60 md:h-full overflow-y-auto pr-2 no-scrollbar space-y-4 md:space-y-6 flex-shrink-0"
        >
          {hofItems.map((item, i) => (
            <button
              key={item.title}
              data-index={i}
              ref={(el) => (itemRefs.current[i] = el)}
              onClick={() => handleClick(i)}
              className={`relative w-full text-left px-4 md:px-6 py-3 md:py-5 rounded-xl border backdrop-blur-sm transition-all duration-500
                ${selectedIndex === i
                  ? "border-blue-400/60 bg-white/5 shadow-[0_0_20px_rgba(0,225,255,0.5)]"
                  : "border-gray-700 bg-white/5 hover:bg-white/10 hover:border-gray-500"
                }`}
            >
              <span className={`block text-sm md:text-lg font-semibold ${selectedIndex === i ? "text-blue-400" : "text-gray-300 hover:text-gray-100"}`}>
                {item.title}
              </span>
              {selectedIndex === i && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] overflow-hidden">
                  <div key={progressKey} className="progress-baseline h-[3px] w-full" />
                </div>
              )}
            </button>
          ))}
        </aside>

        {/* Right Box with Electric Border */}
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.4}
          thickness={2}
          style={{ borderRadius: 16 }}
          className="w-full md:w-3/4 h-full flex mt-6 md:mt-0"
        >
          <div
            onWheel={handleScroll}
            className="w-full h-full p-4 md:p-6 bg-[#11112a]/80 rounded-2xl overflow-y-auto flex flex-col"
          >
            {!showContent ? (
              <>
                <div className="hidden lg:flex w-[900px] h-full flex-col justify-center items-start gap-4 mx-auto">
                  <img
                    src={hofItems[selectedIndex].image}
                    alt={hofItems[selectedIndex].title}
                    className="w-full h-72 object-cover rounded-xl transition-all duration-500"
                    loading="lazy"
                  />
                  <button
                    onClick={() => setShowContent(true)}
                    className="w-36 px-3 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md text-sm transition"
                  >
                    Show Details
                  </button>
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {hofItems[selectedIndex].title}
                  </h3>
                </div>

                <div className="flex lg:hidden w-full h-full flex-col justify-center items-center gap-4">
                  <img
                    src={hofItems[selectedIndex].image}
                    alt={hofItems[selectedIndex].title}
                    className="w-full h-64 object-cover rounded-xl transition-all duration-500"
                    loading="lazy"
                  />
                  <button
                    onClick={() => setShowContent(true)}
                    className="w-32 px-3 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md text-sm transition"
                  >
                    Show Details
                  </button>
                  <h3 className="text-xl font-semibold text-center">
                    {hofItems[selectedIndex].title}
                  </h3>
                </div>
              </>
            ) : (
              <div className="w-full h-full flex flex-col md:flex-row gap-4">
                <img
                  src={hofItems[selectedIndex].image}
                  alt={hofItems[selectedIndex].title}
                  className="w-full md:w-1/3 h-64 md:h-full object-cover rounded-xl transition-all duration-500"
                  loading="lazy"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      {hofItems[selectedIndex].about || "No description available."}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 mb-3">
                      {hofItems[selectedIndex].features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3">
                    <button
                      onClick={() => setShowContent(false)}
                      className="px-3 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md text-sm transition"
                    >
                      Hide Details
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ElectricBorder>
      </div>

      {/* Styles */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        .progress-baseline { 
          background: linear-gradient(90deg, rgba(0,225,255,0.7) 0%, rgba(0,225,255,0.7) 100%); 
          background-size: 200% 100%; 
          animation: lightningBaseline 6s linear forwards; 
        }
        @keyframes lightningBaseline {0% {background-position:0% 0%; width:0%;} 100% {background-position:200% 0%; width:100%;}}

        /* STAR ANIMATION */
        .stars { position:absolute; inset:0; overflow:hidden; z-index:0;}
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
          will-change: transform;
        }
        .stars2 { background-size: 300px 300px; opacity: 0.6; animation-duration: 90s; }
        .stars3 { background-size: 400px 400px; opacity: 0.4; animation-duration: 120s; }
        @keyframes moveStars { from {transform: translateY(0);} to {transform: translateY(-1000px);} }

        /* 45° Diagonal Fade Mask */
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
