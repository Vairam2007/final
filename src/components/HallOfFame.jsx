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
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  let userScrollTimeout;

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
      if (isAutoScrolling) {
        container.scrollTop += scrollSpeed;
        resetScroll();
      }
      rafId = requestAnimationFrame(autoScroll);
    };

    rafId = requestAnimationFrame(autoScroll);

    const onUserScroll = () => {
      setIsAutoScrolling(false);
      clearTimeout(userScrollTimeout);
      userScrollTimeout = setTimeout(() => {
        setIsAutoScrolling(true);
      }, 2000);
    };

    container.addEventListener("scroll", onUserScroll);

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener("scroll", onUserScroll);
      clearTimeout(userScrollTimeout);
    };
  }, [isAutoScrolling]);

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
      className="text-gray-200 py-20 px-6 md:px-12"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at center, #121926 0%, #0a0e17 70%, #05080f 100%)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      {/* Vignette overlay */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          borderRadius: "32px",
          boxShadow:
            "inset 0 0 150px 80px rgba(0, 0, 0, 0.85), inset 0 0 70px 30px #0e4e7f",
          zIndex: 0,
        }}
      />

      <div
        className="max-w-7xl mx-auto relative z-10"
        style={{
          background: "rgba(15, 23, 42, 0.75)",
          backdropFilter: "blur(16px)",
          borderRadius: "24px",
          boxShadow:
            "0 10px 40px rgba(14, 165, 233, 0.25), 0 0 25px rgba(14, 165, 233, 0.15)",
          padding: "40px 50px",
        }}
      >
        {/* Centered Header */}
        <div className="w-full flex justify-center mb-20">
          <h2
            className="text-5xl font-extrabold text-cyan-400 text-center select-none inline-block px-8 py-4 rounded-md"
            style={{
              backgroundColor: "#121926",
            }}
          >
            🏅 Hall of Fame
          </h2>
        </div>

        <div
          ref={containerRef}
          className="overflow-y-auto scrollbar-hide flex flex-col space-y-16"
          style={{
            maxHeight: "calc(100vh - 280px)",
            scrollBehavior: "smooth",
            cursor: isAutoScrolling ? "default" : "grab",
          }}
        >
          {[...hofItems, ...hofItems].map((item, idx) => {
            const isFlipped = flippedIndexes.has(idx);
            return (
              <div
                key={idx}
                className="relative max-w-4xl mx-auto w-full transition-transform duration-300 transform hover:scale-[1.05] shadow-xl rounded-xl"
                style={{ perspective: "1200px", minHeight: "500px" }}
              >
                <div
                  className={`relative duration-700 ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                    minHeight: "480px",
                    borderRadius: "16px",
                    boxShadow:
                      "0 20px 50px rgba(0, 0, 0, 0.85), 0 0 0 2px rgba(14, 165, 233, 0.25)",
                    backgroundColor: "#16203a",
                  }}
                >
                  {/* Front Side */}
                  <div
                    className="rounded-xl p-10 flex flex-col justify-between cursor-pointer select-none"
                    style={{
                      backfaceVisibility: "hidden",
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                      backgroundColor: "#16203a",
                      boxShadow:
                        "0 12px 30px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(14, 165, 233, 0.2)",
                      color: "#4dd0e1",
                    }}
                    onClick={() => toggleFlip(idx)}
                  >
                    <div>
                      <h3 className="text-3xl font-semibold mb-5 leading-tight">
                        {item.title}
                      </h3>
                      <p className="whitespace-pre-line text-gray-300 text-lg md:text-xl leading-relaxed tracking-wide">
                        {item.description}
                      </p>
                    </div>

                    {item.image && (
                      <div
                        className="mt-10 rounded-lg overflow-hidden border border-gray-700 hover:shadow-lg cursor-pointer transition-shadow duration-300"
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
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  {/* Back Side */}
                  <div
                    className="bg-slate-900 rounded-xl p-10 absolute top-0 left-0 w-full h-full text-gray-300 flex flex-col justify-center items-center text-center cursor-pointer select-none"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      userSelect: "none",
                      boxShadow:
                        "0 15px 40px rgba(14, 165, 233, 0.5), 0 0 25px rgba(14, 165, 233, 0.4)",
                    }}
                    onClick={() => toggleFlip(idx)}
                  >
                    <h3 className="text-3xl font-bold mb-6 text-cyan-400">
                      More Info
                    </h3>
                    <p className="text-lg md:text-xl max-w-xl px-6 tracking-wide leading-relaxed">
                      More details about this recognition or project could go here.
                      Great spot for achievements, tools used, or security insights.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-gray-900 rounded-lg overflow-hidden max-w-4xl w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 h-10 w-10 text-black text-3xl font-bold bg-cyan-500 rounded-full hover:bg-cyan-400 transition flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-cyan-300"
              aria-label="Close modal"
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="Selected Hall of Fame"
              className="w-full max-h-[80vh] object-contain rounded-md"
              loading="lazy"
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
