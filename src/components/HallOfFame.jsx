import React, { useRef, useEffect, useState } from "react";

const hofItems = [
  {
    title: "Hall of Fame – Flipkart",
    description: "Positioned First Place in Hall of Fame",
    image: "/ALL IMAGES/HALL OF FAME/Flipkart - Hall of Fame.png",
  },
  {
    title: "Swags from BugCrowd",
    description: "1x – StormTech Backpack\n1x – Beanie",
    image: "/ALL IMAGES/HALL OF FAME/Screenshot 2025-06-26 090603.png",
  },
  {
    title: "Hall of Fame – Chime United States",
    description: "Critical P1 Vulnerability & placed in 1st Position",
    image: "/ALL IMAGES/HALL OF FAME/2025-05-27 06_27_25-Screenshot 2025-05-27 061454.png",
  },
  // Add more items as needed
];

export function HallOfFame() {
  const containerRef = useRef(null);
  const [flippedIndexes, setFlippedIndexes] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollSpeed = 0.5;
    let rafId;

    const resetScroll = () => {
      if (container.scrollTop >= container.scrollHeight / 2) {
        container.scrollTop -= container.scrollHeight / 2;
      }
    };

    const autoScroll = () => {
      container.scrollTop += scrollSpeed;
      resetScroll();
      rafId = requestAnimationFrame(autoScroll);
    };

    rafId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const toggleFlip = (index) => {
    setFlippedIndexes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return newSet;
    });
  };

  return (
    <section
      id="halloffame"
      className="bg-gray-900 text-white flex flex-col"
      style={{ height: "100vh" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex-shrink-0">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
          🏅 Hall of Fame
        </h2>
      </div>

      <div
        ref={containerRef}
        className="flex-1 relative overflow-y-auto scrollbar-hide flex flex-col space-y-10 px-6 md:px-12"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...hofItems, ...hofItems].map((item, idx) => {
          const isFlipped = flippedIndexes.has(idx);
          return (
            <div
              key={idx}
              className="relative max-w-4xl mx-auto w-full"
              style={{ perspective: "1000px", minHeight: "480px" }}
            >
              <div
                className={`relative duration-700 transform-style-preserve-3d ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.7s",
                  position: "relative",
                  minHeight: "480px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                  borderRadius: "12px",
                }}
              >
                {/* Front side */}
                <div
                  className="bg-gray-800 rounded-lg p-6 flex flex-col justify-between"
                  style={{
                    backfaceVisibility: "hidden",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                  }}
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="whitespace-pre-line text-gray-300 text-lg md:text-xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.image && (
                    <div
                      className="mt-6 rounded-md overflow-hidden"
                      style={{ height: "280px", cursor: "pointer" }}
                      onClick={() => setSelectedImage(item.image)}
                      aria-label={`Open image of ${item.title}`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Back side */}
                <div
                  className="bg-gray-700 rounded-lg p-8 absolute top-0 left-0 w-full h-full text-gray-200 flex flex-col justify-center items-center text-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    padding: "2rem",
                    fontSize: "1.1rem",
                    borderRadius: "12px",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-4">More Info</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              {/* Flip button on right */}
              <button
  onClick={() => toggleFlip(idx)}
  className="absolute top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black rounded-full p-4 shadow-lg hover:bg-yellow-300 transition"
  aria-label="Flip card"
  style={{
    right: "-6rem", // ← increased spacing from card (was -3rem or -12)
    userSelect: "none",
  }}
>
  ➡️
</button>

            </div>
          );
        })}
      </div>

      {/* Image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-gray-900 rounded-lg overflow-hidden max-w-4xl w-full p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 h-10 w-10 border border-gray-500 text-white text-3xl font-bold px-1 py-0.5 bg-yellow-400 rounded hover:bg-yellow-300 transition leading-none"
              aria-label="Close modal"
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="Selected Hall of Fame"
              className="w-full rounded-lg max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
