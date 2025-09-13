"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const hofItems = [
  {
    title: "Hall of Fame – Flipkart",
    description: "🏆 Positioned First Place in Hall of Fame",
    image: "/ALL IMAGES/HALL OF FAME/Flipkart - Hall of Fame.png",
  },
  {
    title: "Swags from BugCrowd",
    description: "🎁 1x StormTech Backpack\n🧢 1x Beanie",
    image: "/ALL IMAGES/HALL OF FAME/Screenshot 2025-06-26 090603.png",
  },
  {
    title: "Hall of Fame – Chime United States",
    description: "💥 Critical P1 Vulnerability & placed 1st",
    image:
      "/ALL IMAGES/HALL_OF_FAME/2025-05-27 06_27_25-Screenshot 2025-05-27 061454.png",
  },
];

export default function HallOfFamePage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    setProgressKey((k) => k + 1); // restart progress when topic changes
  }, [selectedIndex]);

  return (
    <section className="relative min-h-screen w-full bg-[#0b0b1f] text-white pt-32 px-6 md:px-12 lg:px-20 flex flex-col items-center">
      {/* ===== Heading ===== */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-200">
        Hall of Fame
      </h2>

      {/* ===== Main Content ===== */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-12">
        {/* ---------- Left: Topics (25%) ---------- */}
        <aside className="w-full md:w-1/4 flex flex-col gap-6">
          {hofItems.map((item, index) => (
            <div key={item.title} className="relative">
              <motion.button
                onClick={() => setSelectedIndex(index)}
                whileHover={{ scale: 1.02 }}
                className={`group w-full text-left px-5 py-4 rounded-lg border font-medium transition-all duration-300
                  ${
                    selectedIndex === index
                      ? "bg-gray-800 text-white border-cyan-400 shadow"
                      : "bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
              >
                {item.title}
              </motion.button>

              {/* Active topic progress bar */}
              {selectedIndex === index && (
                <motion.div
                  key={progressKey}
                  className="absolute bottom-0 left-0 h-1 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                  style={{ backgroundColor: "#22d3ee" }}
                />
              )}
            </div>
          ))}
        </aside>

        {/* ---------- Right: Flip Card (75%) ---------- */}
        <main className="w-full md:w-3/4 flex justify-center">
          <motion.div
            className="relative w-full max-w-4xl h-[60vh] perspective cursor-pointer"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
            onClick={() => setFlipped(!flipped)}
          >
            {/* Front - Image */}
            <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-md border border-gray-700 bg-gray-900">
              <img
                src={hofItems[selectedIndex].image}
                alt={hofItems[selectedIndex].title}
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* Back - Text */}
            <div
              className="absolute inset-0 backface-hidden rounded-2xl bg-gray-900 flex flex-col items-center justify-center px-8 text-center shadow-md border border-gray-700"
              style={{ transform: "rotateY(180deg)" }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-4">
                {hofItems[selectedIndex].title}
              </h3>
              <p className="text-md md:text-lg text-gray-300 whitespace-pre-line leading-relaxed">
                {hofItems[selectedIndex].description}
              </p>
            </div>
          </motion.div>
        </main>
      </div>

      {/* ===== Extra Styling ===== */}
      <style>{`
        .perspective { perspective: 1500px; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </section>
  );
}
