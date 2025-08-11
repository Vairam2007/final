import React from "react";
import "./Navbar.css"; // Optional: Your custom styles (like neon text)
import GooeyNav from "./GooeyNav.jsx";

// Navigation items
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
    <div className="sticky top-0 z-50 w-full bg-black text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4">
        {/* Logo / Branding */}
        <div
          className="text-xl md:text-2xl font-extrabold tracking-wide"
          style={{
            textShadow:
              "0 0 5px #193a3aff, 0 0 10px #297878ff, 0 0 20px #00bbffff",
          }}
        >
          . / Vetrivel
        </div>

        {/* Gooey Navigation */}
        <div className="relative">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90,5]}
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
