"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

const hofItems = [
  { title: "Hall of Fame – Flipkart", image: "https://picsum.photos/800/400?1", about: "Positioned First Place in Hall of Fame", features: [] },
  { title: "Swags from BugCrowd", image: "https://picsum.photos/800/400?2", about: "", features: ["1x – StormTech Backpack", "1x – Beanie"] },
  { title: "Hall of Fame – Chime United States", image: "https://picsum.photos/800/400?3", about: "Critical P1 Vulnerability & placed in 1st Position", features: [] },
  { title: "Hall of Fame - Mina Protocol", image: "https://picsum.photos/800/400?4", about: "Identified vulnerabilities in Blockchain Based Web Application", features: [] },
  { title: "Hall of Fame – HACKEN", image: "https://picsum.photos/800/400?5", about: "Identified Critical vulnerabilities in HACKEN Web and Apps", features: [] },
  { title: "Hall of Fame – Swaggle", image: "https://picsum.photos/800/400?6", about: "Identified 3+ vulnerabilities in Swaggle website", features: ["2x High", "1x Low"] },
  { title: "Hall of Fame – US. Small Business Administration", image: "https://picsum.photos/800/400?7", about: "Identified 2+ vulnerabilities in US. SBA", features: ["1x Medium", "1x Low"] },
  { title: "Hall of Fame - Westpac Banking Corporation VDP", image: "https://picsum.photos/800/400?8", about: "Identified High and Medium severity vulnerabilities in Banking Infrastructure", features: [] },
  { title: "Hall of Fame – Zoopla", image: "https://picsum.photos/800/400?9", about: "Identified vulnerabilities on web application", features: [] },
  { title: "Hall of Fame – Roobet", image: "https://picsum.photos/800/400?10", about: "Identified one High severity vulnerability", features: [] },
];

export default function HallOfFamePage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const leftListRef = useRef(null);
  const rightBoxRef = useRef(null);
  const itemRefs = useRef([]);
  itemRefs.current = [];
  const scrollTimeout = useRef(null);

  // Auto-progress every 5s
  useEffect(() => {
    const timeout = setTimeout(() => {
      changeIndex(selectedIndex + 1);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [selectedIndex]);

  const changeIndex = (nextIndex) => {
    const index = nextIndex % hofItems.length;
    setSelectedIndex(index);
    setProgressKey((k) => k + 1);
    if (leftListRef.current && itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  const handleClick = (i) => {
    changeIndex(i);
    setShowContent(false);
  };

  // Smooth scroll on right box
  const handleScroll = useCallback(
    (e) => {
      e.preventDefault();
      if (scrollTimeout.current) return; // throttle

      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 300);

      if (e.deltaY > 0) {
        changeIndex(selectedIndex + 1);
      } else {
        changeIndex(selectedIndex - 1 + hofItems.length);
      }
    },
    [selectedIndex]
  );

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#0a0a1f] via-[#0a0a2f] to-[#0f0f30] text-white pt-24 px-4 md:px-12 lg:px-20 overflow-hidden">
      <div className="stars stars1"></div>
      <div className="stars stars2"></div>
      <div className="stars stars3"></div>

      <h2 className="relative z-10 text-center text-3xl md:text-5xl font-extrabold text-gray-100 mb-10">
        HALL OF FAME
      </h2>

      <div className="relative z-10 flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
        {/* Left Topic List */}
        <aside ref={leftListRef} className="md:w-1/4 max-h-[60vh] overflow-y-auto pr-2 no-scrollbar space-y-6">
          {hofItems.map((item, i) => (
            <button
              key={item.title}
              data-index={i}
              ref={(el) => (itemRefs.current[i] = el)}
              onClick={() => handleClick(i)}
              className={`relative w-full text-left px-6 py-5 rounded-xl border backdrop-blur-sm transition-all duration-300
                ${selectedIndex === i ? "border-yellow-400/60 bg-white/5 shadow-[0_0_20px_rgba(255,255,0,0.4)]" : "border-gray-700 bg-white/5 hover:bg-white/10 hover:border-gray-500"}`}
            >
              <span className={`block text-lg md:text-xl font-semibold transition-colors duration-300 ${selectedIndex === i ? "text-yellow-400" : "text-gray-300 hover:text-gray-100"}`}>
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

        {/* Right Single Box */}
        <main
          ref={rightBoxRef}
          onWheel={handleScroll}
          className="md:w-3/4 bg-[#11112a]/80 border border-gray-700 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm max-h-[70vh] flex flex-col justify-start transition-all duration-500 ease-in-out"
        >
          <img src={hofItems[selectedIndex].image} alt={hofItems[selectedIndex].title} className="w-full h-48 object-cover rounded-xl mb-4 transition-all duration-700" />
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 transition-all duration-700">{hofItems[selectedIndex].title}</h3>
          <button
            onClick={() => setShowContent((prev) => !prev)}
            className="mt-2 mb-4 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition"
          >
            {showContent ? "Hide Details" : "Show Details"}
          </button>
          {showContent && (
            <>
              <p className="text-gray-300 leading-relaxed mb-6">{hofItems[selectedIndex].about || "No description available."}</p>
              {hofItems[selectedIndex].features.length > 0 && (
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {hofItems[selectedIndex].features.map((f) => (<li key={f}>{f}</li>))}
                </ul>
              )}
            </>
          )}
        </main>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .progress-baseline { background: linear-gradient(90deg, rgba(255,255,0,0.1) 0%, rgba(255,255,0,0.3) 20%, rgba(255,255,0,0.8) 50%, rgba(255,255,0,0.3) 80%, rgba(255,255,0,0.1) 100%); background-size: 200% 100%; animation: lightningBaseline 5s linear forwards; box-shadow:0 0 10px rgba(255,255,0,0.8),0 0 20px rgba(255,255,0,0.5),0 0 30px rgba(255,255,0,0.3);}
        @keyframes lightningBaseline {0% {background-position:0% 0%; width:0%;} 100% {background-position:200% 0%; width:100%;}}
        .stars { position:absolute; top:0; left:0; right:0; bottom:0; background:transparent; z-index:0;}
        .stars1, .stars2, .stars3 { background-image: radial-gradient(2px 2px at 20% 30%, #fff, transparent), radial-gradient(1px 1px at 80% 40%, #fff, transparent), radial-gradient(1.5px 1.5px at 50% 80%, #fff, transparent), radial-gradient(2px 2px at 10% 60%, #fff, transparent), radial-gradient(1px 1px at 70% 20%, #fff, transparent); background-size:200px 200px; animation: moveStars 60s linear infinite;}
        .stars2 { background-size: 300px 300px; opacity: 0.6; animation-duration: 90s; }
        .stars3 { background-size: 400px 400px; opacity: 0.4; animation-duration: 120s; }
        @keyframes moveStars { from {transform: translateY(0);} to {transform: translateY(-2000px);} }
      `}</style>
    </section>
  );
}
