import React, { useState } from "react";
import GooeyNav from "./GooeyNav.jsx";

const items = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "HallOfFrame", href: "#halloffame" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
      {/* Top Bar */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* Branding */}
        <div className="font-mono text-lg md:text-xl font-semibold text-green-700 tracking-tight select-none flex items-center">
          <a
            href="/"
            className="hover:text-green-600 transition-colors duration-200 flex items-center"
          >
            <span className="mr-2">[vettrivel@root]$</span>
            <span className="w-3 h-6 bg-green-700 rounded-sm animate-pulse" />
          </a>
        </div>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
        >
          <span className={`block h-1 w-full bg-cyan-400 rounded ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-1 w-full bg-cyan-400 rounded ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-1 w-full bg-cyan-400 rounded ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:block">
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

      {/* Mobile Menu - Horizontal Scrollable */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 py-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <ul className="flex gap-6">
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="inline-block text-cyan-400 hover:text-white font-medium transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
