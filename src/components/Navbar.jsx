import React from "react";
import GooeyNav from "./GooeyNav.jsx";

const items = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "HallOfFrame", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        
        {/* Branding / Logo */}
        <div className="text-xl md:text-2xl font-extrabold tracking-wide text-cyan-400 drop-shadow-[0_0_10px_#00ffff]">
          <a href="/">. / Vettrivel</a>
        </div>

        {/* GooeyNav Menu */}
        <div className="relative">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 5]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
