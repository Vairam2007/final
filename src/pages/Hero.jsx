import React from "react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative text-white overflow-hidden min-h-screen flex items-center"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1a1a1a 50%, #000000 100%)",
        padding: "100px 40px",
        boxShadow: "inset 0 0 80px rgba(0,0,0,0.7)",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24 gap-12">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center max-w-xl space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight font-sans">
            <span className="block text-lg md:text-xl font-semibold mb-3 text-gray-400">
              Hi, I’m
            </span>
            <span className="text-white drop-shadow-[0_3px_8px_rgba(255,255,255,0.2)] tracking-wider">
              Vettrivel U
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium leading-snug text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 drop-shadow-md">
            Cyber Security Researcher · VAPT Specialist · Offensive Security Analyst
          </h2>

          <p className="text-base md:text-lg font-semibold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 drop-shadow-sm">
            Web · API · Network · Mobile · Cloud · LLM/AI · Active Directory
          </p>
        </div>

        {/* Right Side (Profile Picture with hover effect) */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative max-w-lg md:max-w-none">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] group">
            <div className="absolute top-1/2 left-1/2 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden z-20 border-4 border-gray-700 transform -translate-x-1/2 -translate-y-1/2 shadow-[0_15px_60px_rgba(0,255,255,0.3)] transition-transform duration-300 group-hover:scale-110">
              <img
                src="/mine.png"
                alt="Portrait of Vettrivel U"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
