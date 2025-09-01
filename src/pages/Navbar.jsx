import React, { useState } from "react";
import { Link } from "react-router-dom";
import GooeyNav from "./GooeyNav"; // Your custom nav animation

const items = [
  { label: "About", to: "/#about" },     // scroll to #about section inside First.jsx
  { label: "HallOfFame", to: "/halloffame" },
  { label: "Experience", to: "/experience" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Certifications", to: "/certifications" },
  { label: "Achievements", to: "/achievements" },
  { label: "Contact", to: "/contact" },
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
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-4 rounded hover:bg-cyan-600 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
