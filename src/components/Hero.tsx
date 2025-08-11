import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision.tsx";
import SplashCursor from './SplashCursor'


export function Hero() {
  return (
    <BackgroundBeamsWithCollision>

<SplashCursor />
      <div className="flex w-full h-full">
        {/* Left side: 50% width */}
        <div className="w-1/2 flex items-center justify-center">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            VETTRIVEL U{" "}
            
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span>content is here</span>
              </div>
            </div>
          </h2>
        </div>

        {/* Right side: 50% width */}
        <div className="w-1/2 flex items-center justify-center">
          {/* Content for right side (div.b) */}
<img
  src="/mine.png"
  alt="Vettrivel U"
  className="object-cover transition duration-500 transform
    drop-shadow-[0_0_35px_rgba(0,255,255,0.6)]
    hover:drop-shadow-[0_0_60px_rgba(173,216,230,0.9)]
    hover:scale-105"
/>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}