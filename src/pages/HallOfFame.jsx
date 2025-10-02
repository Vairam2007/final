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
  itemRefs.current = [];
  const scrollTimeout = useRef(null);

  useEffect(() => setShowContent(false), [selectedIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => changeIndex(selectedIndex + 1), 5000);
    return () => clearTimeout(timeout);
  }, [selectedIndex]);

  const changeIndex = (nextIndex) => {
    const index = ((nextIndex % hofItems.length) + hofItems.length) % hofItems.length;
    setSelectedIndex(index);
    setProgressKey((k) => k + 1);
    if (leftListRef.current && itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  const handleClick = (i) => changeIndex(i);

  const handleScroll = useCallback(
    (e) => {
      e.preventDefault();
      if (scrollTimeout.current) return;
      scrollTimeout.current = setTimeout(() => (scrollTimeout.current = null), 300);
      if (e.deltaY > 0) changeIndex(selectedIndex + 1);
      else changeIndex(selectedIndex - 1 + hofItems.length);
    },
    [selectedIndex]
  );

  return (
    <section className="relative h-screen w-full py-10 bg-gradient-to-br from-[#0a0a1f] via-[#0a0a2f] to-[#0f0f30] text-white pt-24 px-4 md:px-12 lg:px-20 overflow-hidden flex flex-col">
      <div className="stars stars1"></div>
      <div className="stars stars2"></div>
      <div className="stars stars3"></div>


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
                  ? "border-yellow-400/60 bg-white/5 shadow-[0_0_20px_rgba(255,255,0,0.4)]"
                  : "border-gray-700 bg-white/5 hover:bg-white/10 hover:border-gray-500"
                }`}
            >
              <span className={`block text-sm md:text-lg font-semibold transition-colors duration-300 ${selectedIndex === i ? "text-yellow-400" : "text-gray-300 hover:text-gray-100"}`}>
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

        {/* Right ElectricBorder */}
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.5}
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
                {/* Laptop/Desktop fixed width */}
                <div className="hidden lg:flex w-[900px] h-full flex-col justify-center items-start gap-4 mx-auto">
                  <img
                    key={hofItems[selectedIndex].image}
                    src={hofItems[selectedIndex].image}
                    alt={hofItems[selectedIndex].title}
                    className="w-full h-64 md:h-80 object-cover rounded-xl transition-all duration-700"
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

                {/* Mobile/Tablet full width */}
                <div className="flex lg:hidden w-full h-full flex-col justify-center items-center gap-4">
                  <img
                    key={hofItems[selectedIndex].image}
                    src={hofItems[selectedIndex].image}
                    alt={hofItems[selectedIndex].title}
                    className="w-full h-64 object-cover rounded-xl transition-all duration-700"
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
                  key={hofItems[selectedIndex].image}
                  src={hofItems[selectedIndex].image}
                  alt={hofItems[selectedIndex].title}
                  className="w-full md:w-1/3 h-64 md:h-full object-cover rounded-xl transition-all duration-500"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      {hofItems[selectedIndex].about || "No description available."}
                    </p>
                    {hofItems[selectedIndex].features.length > 0 && (
                      <ul className="list-disc list-inside space-y-1 text-gray-300 mb-3">
                        {hofItems[selectedIndex].features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-2 p-2 bg-gray-800/50 rounded-lg text-gray-200 text-sm">
                      <p>Extra Information: Lorem ipsum dolor sit amet.</p>
                      <p>More Details: Fusce vehicula dolor arcu.</p>
                    </div>
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

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .progress-baseline { 
          background: linear-gradient(90deg, rgba(255,255,0,0.1) 0%, rgba(255,255,0,0.3) 20%, rgba(255,255,0,0.8) 50%, rgba(255,255,0,0.3) 80%, rgba(255,255,0,0.1) 100%); 
          background-size: 200% 100%; 
          animation: lightningBaseline 5s linear forwards; 
          box-shadow:0 0 10px rgba(255,255,0,0.8),0 0 20px rgba(255,255,0,0.5),0 0 30px rgba(255,255,0,0.3);
        }
        @keyframes lightningBaseline {0% {background-position:0% 0%; width:0%;} 100% {background-position:200% 0%; width:100%;}}

        .stars { position:absolute; top:0; left:0; right:0; bottom:0; background:transparent; z-index:0;}
        .stars1, .stars2, .stars3 { 
          background-image: radial-gradient(2px 2px at 20% 30%, #fff, transparent), radial-gradient(1px 1px at 80% 40%, #fff, transparent), radial-gradient(1.5px 1.5px at 50% 80%, #fff, transparent), radial-gradient(2px 2px at 10% 60%, #fff, transparent), radial-gradient(1px 1px at 70% 20%, #fff, transparent); 
          background-size:200px 200px; 
          animation: moveStars 60s linear infinite;
        }
        .stars2 { background-size: 300px 300px; opacity: 0.6; animation-duration: 90s; }
        .stars3 { background-size: 400px 400px; opacity: 0.4; animation-duration: 120s; }
        @keyframes moveStars { from {transform: translateY(0);} to {transform: translateY(-2000px);} }
      `}</style>
    </section>
  );
}
