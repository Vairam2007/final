import React from "react";
import SplashCursor from './SplashCursor';
import "./Hero.css";

export function Hero() {
  const icons = [
    "/icons/badge1.png",
    "/icons/badge2.png",
    "/icons/badge3.png",
    "/icons/badge4.png",
    "/icons/badge5.png",
    "/icons/badge6.png",
    "/icons/badge7.png",
    "/icons/badge8.png",
    "/icons/badge9.png",
    "/icons/badge10.png",
  ];

  return (
    <div id="hero" className="relative bg-black text-white overflow-hidden">
      <SplashCursor />

      <div className="relative z-10 flex w-full h-screen">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6">
          <div className="space-y-6 w-full max-w-xl">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 drop-shadow">
              Hi, I’m Vettrivel U
            </h2>
            <p className="text-base md:text-xl">
              Offensive Security Specialist | Red Teamer | AI/LLM Security
            </p>
            <p className="text-base md:text-xl">
              HOFs | Bug Bounty | VAPT | CTF | Trainer
            </p>
          </div>
        </div>

        {/* Right Side: Profile + Floating Icons */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-[500px] h-[500px]">
            {/* Profile Image */}
            <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden z-20">
              <img
                src="/mine.png"
                alt="Profile of Vettrivel U"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Orbiting Icons */}
            {icons.map((src, i) => {
              const angle = (360 / icons.length) * i;
              const radius = 180 + Math.random() * 30; // Randomized radius for irregularity
              const radian = (angle * Math.PI) / 180;

              // Adding random variations to the x and y positions to create irregular movement
              const x = Math.cos(radian) * radius + (Math.random() - 0.5) * 40; // slight horizontal offset
              const y = Math.sin(radian) * radius + (Math.random() - 0.5) * 40; // slight vertical offset

              return (
                <FloatingIcon
                  key={i}
                  src={src}
                  delay={i * 0.5}
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: 'translate(-50%, -50%)', // Centers the icon
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingIcon({ src, delay = 0, style = {} }) {
  return (
    <img
      src={src}
      alt="floating icon"
      className="absolute w-10 h-10 opacity-80 animate-float"
      style={{
        ...style,
        animationDelay: `${delay}s`,
      }}
    />
  );
}
