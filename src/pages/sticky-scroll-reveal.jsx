"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "./utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeCard, setActiveCard] = useState(0);

  // Detect which card is centered in the scrollable container
  useEffect(() => {
    const options = {
      root: containerRef.current,
      rootMargin: "0px 0px -50% 0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.dataset.index);
          setActiveCard(idx);
        }
      });
    }, options);

    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      cardRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const backgroundGradients = [
    "linear-gradient(to bottom right, #0f172a, #111827)",
    "linear-gradient(to bottom right, #1f2937, #111827)",
    "linear-gradient(to bottom right, #111827, #0f172a)",
  ];

  return (
    <div className="lg:flex flex-col lg:flex-row w-full">
      {/* Scrollable Text Column */}
      <div
        ref={containerRef}
        className="flex-1 px-4 md:px-6 py-10 space-y-12 h-[80vh] overflow-y-auto scrollbar-hide"
      >
        {content.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            data-index={index}
            className={cn(
              "max-w-3xl mx-auto transition-all duration-300 text-center min-h-[30vh]",
              activeCard === index
                ? "opacity-100 scale-100"
                : "opacity-25 scale-95"
            )}
          >
            <h2
              className={cn(
                "font-bold mb-2 leading-tight", // smaller line spacing
                activeCard === index
                  ? "text-2xl md:text-3xl text-cyan-400"
                  : "text-xl md:text-2xl text-gray-500"
              )}
            >
              {item.title}
            </h2>
            <p
              className={cn(
                "whitespace-pre-line leading-snug", // tighter paragraph spacing
                activeCard === index
                  ? "text-sm md:text-base text-gray-300"
                  : "text-xs md:text-sm text-gray-500"
              )}
            >
              {item.description}
            </p>
          </div>
        ))}
        <div className="h-12" />
      </div>

      {/* Sticky Image Box */}
      <div
        style={{
          background: backgroundGradients[activeCard % backgroundGradients.length],
        }}
        className={cn(
          "hidden lg:flex sticky top-20 flex-1 h-[60vh] mx-4 rounded-2xl shadow-3xl overflow-hidden items-center justify-center p-4",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};
