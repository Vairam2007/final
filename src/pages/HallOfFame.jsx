// HallOfFameSticky.jsx
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";

const hofItems = [
  {
    title: "Hall of Fame – Flipkart",
    description: "🏆 Positioned First Place in Hall of Fame",
    image: "/ALL IMAGES/HALL OF FAME/Flipkart - Hall of Fame.png",
  },
  {
    title: "Swags from BugCrowd",
    description: "🎁 1x StormTech Backpack\n🧢 1x Beanie",
    image: "/ALL IMAGES/HALL OF FAME/Screenshot 2025-06-26 090603.png",
  },
  {
    title: "Hall of Fame – Chime United States",
    description: "💥 Critical P1 Vulnerability & placed 1st",
    image: "/ALL IMAGES/HALL OF FAME/2025-05-27 06_27_25-Screenshot 2025-05-27 061454.png",
  },
];

// Map hofItems to StickyScroll-compatible content
const content = hofItems.map((item) => ({
  title: item.title,
  description: item.description,
  content: (
    <div className="flex flex-col h-full w-full items-center justify-center p-8 md:p-12 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 rounded-2xl shadow-2xl">
      <img
        src={item.image}
        alt={item.title}
        className="object-contain h-[300px] md:h-[400px] w-full rounded-xl shadow-lg mb-6"
      />
      <h3 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
        {item.title}
      </h3>
      <p className="text-lg md:text-2xl text-gray-200 text-center whitespace-pre-line">
        {item.description}
      </p>
    </div>
  ),
}));

export default function HallOfFameSticky() {
  return (
    <section className="min-h-screen bg-black text-white py-28 px-6 md:px-12">
      <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-20 text-center">
        🏅 Hall of Fame
      </h2>
      <StickyScroll content={content} />
    </section>
  );
}
