import React, { useState } from "react";
import GooeyNav from "./GooeyNav"; // Assuming this is your custom nav component

const items = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "HallOfFame", href: "#halloffame" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 text-white backdrop-blur">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <GooeyNav items={items} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-1 w-full bg-cyan-400 rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-1 w-full bg-cyan-400 rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-1 w-full bg-cyan-400 rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 bg-black/90 text-white backdrop-blur-md transition">
          <ul className="flex flex-col gap-4">
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-4 rounded hover:bg-cyan-600 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
