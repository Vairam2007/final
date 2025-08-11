import React, { useState } from "react";

const hofItems = [
  {
    title: "Flipkart – 1st Place HOF",
    logo: "/logos/flipkart.png",
    image: "/hof/flipkart-hof.png",
  },
  {
    title: "Chime (US) – Critical P1 Bug",
    logo: "/logos/chime.png",
    image: "/hof/chime-email.png",
  },
  {
    title: "Indian Govt – Remote Code Execution",
    logo: "/logos/india.png",
    image: "/hof/india-rce.png",
  },
  {
    title: "US SBA – Multiple Vulnerabilities",
    logo: "/logos/sba.png",
    image: "/hof/sba-report.png",
  },
  {
    title: "Mina Protocol – Blockchain Bugs",
    logo: "/logos/mina.png",
    image: "/hof/mina-hof.png",
  },
  {
    title: "Roobet – High-Severity Bug",
    logo: "/logos/roobet.png",
    image: "/hof/roobet-bug.png",
  },
  // Add more items as needed
];

export function HallOfFame() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certifications" className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10">🏅 Hall of Fame</h2>

        {/* HOF Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {hofItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <img src={item.logo} alt="logo" className="w-10 h-10 rounded-full object-contain" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
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
              className="absolute top-2 right-3 text-black text-2xl font-bold"
            >
              &times;
            </button>
            <img src={selectedImage} alt="Selected" className="w-full rounded-lg max-h-[80vh] object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
