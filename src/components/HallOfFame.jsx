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
  {
    title: "Hall of Fame - Mina Protocol",
    description: "Identified vulnerabilities in Blockchain Based Web Application",
    image: "/ALL IMAGES/HALL OF FAME/HoF Mina.jpg",
  },
  {
    title: "Hall of Fame – HACKEN",
    description: "Identified Critical vulnerabilities in HACKEN Web and Apps",
    image: "/ALL IMAGES/HALL OF FAME/HoF Hacken.png",
  },
  {
    title: "Hall of Fame – Swaggle",
    description: "Identified 3+ vulnerabilities in Swaggle website\n2x High\n1x Low",
    image: "/ALL IMAGES/HALL OF FAME/HoF Swaggle.png",
  },
  {
    title: "Hall of Fame – US. Small Business Administration",
    description: "Identified 2+ vulnerabilities in US. SBA\n1x Medium\n1x Low",
    image: "/ALL IMAGES/HALL OF FAME/HoF SBA.png",
  },
  {
    title: "Hall of Fame - Westpac Banking Corporation VDP",
    description: "Identified High and Medium severity vulnerabilities in Banking Infrastructure",
    image: "/ALL IMAGES/HALL OF FAME/HoF Westpc Banking Corporation.png",
  },
  {
    title: "Hall of Fame – Zoopla",
    description: "Identified vulnerabilities on web application",
    image: "/ALL IMAGES/HALL OF FAME/HoF Zoopla.png",
  },
  {
    title: "Hall of Fame – Roobet",
    description: "Identified one High severity vulnerability",
    image: "/ALL IMAGES/HALL OF FAME/HoF Roobet.png",
  },
];

export function HallOfFame() {
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

  const itemsForLoop = [...hofItems, ...hofItems];
  const scrollSpeed = 0.5;
  const isUserInteracting = useRef(false);
  const interactionTimeout = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const resetScroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft -= container.scrollWidth / 2;
      }
    };

    let rafId;
    const autoScroll = () => {
      if (!isUserInteracting.current) {
        container.scrollLeft += scrollSpeed;
        resetScroll();
      }
      rafId = requestAnimationFrame(autoScroll);
    };

    rafId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const onUserScrollStart = () => {
    isUserInteracting.current = true;
    if (interactionTimeout.current) clearTimeout(interactionTimeout.current);
  };

  const onUserScrollEnd = () => {
    if (interactionTimeout.current) clearTimeout(interactionTimeout.current);
    interactionTimeout.current = setTimeout(() => {
      isUserInteracting.current = false;
    }, 2000);
  };

  return (
    <section id="halloffame" className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">🏅 Hall of Fame</h2>

        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth max-h-[90vh]"
          onMouseDown={onUserScrollStart}
          onTouchStart={onUserScrollStart}
          onScroll={() => {
            onUserScrollStart();
            onUserScrollEnd();
          }}
          onMouseUp={onUserScrollEnd}
          onTouchEnd={onUserScrollEnd}
          style={{ scrollBehavior: "smooth" }}
        >
          {itemsForLoop.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800  rounded-lg p-6 shadow-md cursor-pointer min-w-[280px] flex-shrink-0 flex flex-col justify-between max-h-[85vh]"
              onClick={() => setSelectedImage(item.image)}
            >
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="whitespace-pre-line text-gray-300 flex-grow">{item.description}</p>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="mt-4 rounded-md object-cover h-32 w-full"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-lg overflow-hidden max-w-3xl w-full p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
<button
  onClick={() => setSelectedImage(null)}
  className="absolute top-2 right-2 h-10 w-10 border border-gray-500 text-black text-xs font-bold px-1 py-0.5 bg-purple-500 rounded hover:bg-red-500 hover:text-white transition leading-none"
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
      `}</style>
    </section>
  );
}
