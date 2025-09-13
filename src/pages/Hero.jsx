"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a0a2f] to-[#000000] px-6 md:px-12 lg:px-24">
     
      <div className="container relative z-10 mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="block text-lg md:text-xl font-semibold mb-3 text-gray-400">
              Hi, I’m
            </span>
            <span className="text-white tracking-wider">Vettrivel U</span>
          </h1>

          <h2 className="text-lg md:text-2xl lg:text-3xl font-medium leading-snug bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 bg-clip-text text-transparent">
            Cyber Security Researcher · VAPT Specialist · Offensive Security Analyst
          </h2>

          <p className="text-sm md:text-lg font-semibold uppercase tracking-wide bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 bg-clip-text text-transparent">
            Web · API · Network · Mobile · Cloud · LLM/AI · Active Directory
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="#contact"
              className="px-6 py-3 text-white font-semibold rounded-md bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 shadow-lg hover:scale-105 transform transition duration-300"
            >
              Hire Me
            </a>
            <a
              href="/vettrivel-vapt.pdf"
              download
              className="px-6 py-3 border-2 border-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-500 hover:text-black shadow-md transform transition duration-300 hover:scale-105"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons - Next Line */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition shadow-md hover:scale-110 transform"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition shadow-md hover:scale-110 transform"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative max-w-lg md:max-w-none">
          <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-cyan-500 shadow-cyan-500/50 shadow-lg">
            <img
              src="/mine.png"
              alt="Portrait of Vettrivel U"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
