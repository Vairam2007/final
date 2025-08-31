import React from "react";

// Icon assets — ensure these exist in your /public/assets/logos/ folder
const assets = {
  Flipkart: "/assets/logos/flipkart.svg",
  "Mina Protocol": "/assets/logos/mina.svg",
  HACKEN: "/assets/logos/hacken.svg",
  "Westpac Banking Corporation": "/assets/logos/westpac.svg",
  Swaggle: "/assets/logos/swaggle.svg",
  "U.S SBA": "/assets/logos/us_sba.svg",
  "Chime U.S": "/assets/logos/chime.svg",
  Roobet: "/assets/logos/roobet.svg",
  "Indian Gov": "/assets/logos/india.svg",
  "US Gov": "/assets/logos/us_gov.svg",
};

function Achievements() {
  const acknowledgements = Object.keys(assets);

  return (
    <section
      id="achievements"
      className="h-screen w-full bg-[#0f172a] text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle Tile Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 mb-6">
          🏆 Achievements
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Recognized by top organizations worldwide for responsible vulnerability disclosure.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {acknowledgements.map((org, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-cyan-400/40 hover:-translate-y-1"
            >
              <img
                src={assets[org]}
                alt={`${org} logo`}
                className="h-14 mx-auto object-contain mb-4"
              />
              <h3 className="text-teal-200 text-sm font-semibold tracking-wide">
                {org}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
