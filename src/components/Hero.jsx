import React, { useMemo } from "react";
import SplashCursor from './SplashCursor';
import "./Hero.css";

export function Hero() {
  const icons = [
    "/ALL IMAGES/LOGO/pngaaa.com-4042958.png",
    "/ALL IMAGES/LOGO/Linux.png",
    "/ALL IMAGES/LOGO/Bash.png",
    "/ALL IMAGES/LOGO/3246741_burpsuite_security_software_icon.png",
    "/ALL IMAGES/LOGO/icons8-metasploit-48.png",
    "/ALL IMAGES/LOGO/icons8-nmap-48.png",
    "/ALL IMAGES/LOGO/Postman.png",
    "/ALL IMAGES/LOGO/MySQL.png",
    "/ALL IMAGES/LOGO/Powershell.png",
  ];

  const iconPositions = useMemo(() => {
    return icons.map((_, i) => {
      const angle = (360 / icons.length) * i;
      const radius = 220 + Math.random() * 30;
      const radian = (angle * Math.PI) / 180;
      const x = Math.cos(radian) * radius + (Math.random() - 0.5) * 25;
      const y = Math.sin(radian) * radius + (Math.random() - 0.5) * 25;
      return { x, y };
    });
  }, [icons.length]);

  return (
    <section
      id="hero"
      className="relative text-white overflow-hidden min-h-screen flex items-center"
        style={{
    background: "linear-gradient(135deg, #0f172a 0%, #000000 100%)",
    color: "white",
    padding: "100px 40px",
  }}
    >
      {/* <SplashCursor /> */}
      

      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24 gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center max-w-xl space-y-6">
          <h1
  className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 800 }}
>
  <span
    className="block text-lg md:text-xl font-semibold mb-2 text-gray-400"
    style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 600 }}
  >
    Hi, I’m
  </span>
  <span
    className="text-white"
    style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 800, letterSpacing: '0.1em' }}
  >
    Vettrivel U
  </span>
</h1>


          <h2
  className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 drop-shadow-lg leading-snug"
  style={{ fontFamily: "Calibri, Candara, Segoe, Segoe UI, Optima, sans-serif" }}
>
  Cyber Security Researcher | Vulnerability Assessment & Penetration Tester | Offensive Security Operations
</h2>

<p
  className="text-base md:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 drop-shadow-sm tracking-wide uppercase"
  style={{ fontFamily: "Calibri, Candara, Segoe, Segoe UI, Optima, sans-serif" }}
>
  Web | API | Network | Mobile | Cloud | LLM/AI | AD
</p>

        </div>

        {/* Right Content: Floating Icons & Profile */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative max-w-lg md:max-w-none">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[560px] md:h-[560px]">
            {/* Profile Image */}
            <div className="absolute top-1/2 left-1/2 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden z-20 shadow-2xl transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="/mine.png"
                alt="Portrait of Vettrivel U"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating Icons
            {iconPositions.map(({ x, y }, i) => (
              <FloatingIcon
                key={i}
                src={icons[i]}
                delay={i * 0.35}
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                }}
                alt={`Floating Icon ${i + 1}`}
              /> */}
            {/* ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingIcon({ src, delay = 0, style = {}, alt }) {
  return (
    <img
      src={src}
      alt={alt || "Floating icon"}
      loading="lazy"
      className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-90 rounded-full shadow-md animate-float transition-transform duration-300 ease-in-out"
      style={{
        ...style,
        animationDelay: `${delay}s`,
      }}
    />
  );
}
