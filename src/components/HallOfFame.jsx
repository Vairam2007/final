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

  const [outerHover, setOuterHover] = useState(false);

  return (
    <section
      id="halloffame"
      className="text-white py-20 px-6 md:px-12"
      style={{
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        borderRadius: "24px",
        maxWidth: "88vw",
        margin: "80px auto", // Gap from edges
        padding: "20px",
        boxShadow: outerHover
          ? "0 0 50px rgba(34,211,238,0.35)"
          : "0 0 20px rgba(0,0,0,0.4)",
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={() => setOuterHover(true)}
      onMouseLeave={() => setOuterHover(false)}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-300 text-center mt-5 mb-16">
          🏅 Hall of Fame
        </h2>

        <div
          ref={containerRef}
          className="overflow-y-auto scrollbar-hide flex flex-col space-y-14"
          style={{
            maxHeight: "calc(100vh - 160px)",
            scrollBehavior: "smooth",
          }}
        >
          {[...hofItems, ...hofItems].map((item, idx) => {
            const isFlipped = flippedIndexes.has(idx);
            return (
              <div
                key={idx}
                className="relative max-w-4xl mx-auto w-full transition-transform duration-300 transform hover:scale-105"
                style={{ perspective: "1000px", minHeight: "480px" }}
              >
                <div
                  className={`relative transform-style-preserve-3d duration-700 ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.7s",
                    minHeight: "480px",
                    borderRadius: "16px",
                    boxShadow:
                      "0 15px 30px rgba(0, 0, 0, 0.5), 0 0 0 2px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  {/* Front Side */}
                  <div
                    className="rounded-xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300"
                    style={{
                      backfaceVisibility: "hidden",
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                      backgroundColor: "#1e293b", // slate-800
                      boxShadow:
                        "0 6px 12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                    }}
                    onClick={() => toggleFlip(idx)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#334155"; // slate-700
                      e.currentTarget.style.boxShadow =
                        "0 12px 30px rgba(34,211,238,0.45), 0 0 25px rgba(34,211,238,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#1e293b";
                      e.currentTarget.style.boxShadow =
                        "0 6px 12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)";
                    }}
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-cyan-400">
                        {item.title}
                      </h3>
                      <p className="whitespace-pre-line text-gray-300 text-lg md:text-xl leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {item.image && (
                      <div
                        className="mt-6 rounded-md overflow-hidden shadow-md border border-gray-600 hover:shadow-lg cursor-pointer"
                        style={{ height: "260px" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(item.image);
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Back Side */}
                  <div
                    className="bg-slate-700 rounded-xl p-8 absolute top-0 left-0 w-full h-full text-gray-100 flex flex-col justify-center items-center text-center cursor-pointer"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                    onClick={() => toggleFlip(idx)}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-cyan-300">
                      More Info
                    </h3>
                    <p className="text-base md:text-lg px-4">
                      More details about this recognition or project could go
                      here. Great spot for achievements, tools used, or security
                      insights.
                    </p>
                  </div>
                </div>

                {/* Flip Button */}
                <button
                  onClick={() => toggleFlip(idx)}
                  className="absolute top-1/2 transform -translate-y-1/2 right-[-3rem] bg-cyan-400 text-black rounded-full p-4 shadow-lg hover:bg-cyan-300 transition"
                  aria-label="Flip card"
                  style={{ userSelect: "none" }}
                >
                  ↪️
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
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
              className="absolute top-2 right-2 h-10 w-10 text-black text-3xl font-bold bg-cyan-400 rounded-full hover:bg-cyan-300 transition flex items-center justify-center"
              aria-label="Close modal"
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="Selected Hall of Fame"
              className="w-full max-h-[80vh] object-contain rounded-md"
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
