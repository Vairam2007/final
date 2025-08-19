import React, { useState } from "react";

function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    { src: "https://via.placeholder.com/400x300?text=eJPT+Certificate", alt: "eJPT Certificate" },
    { src: "https://via.placeholder.com/400x300?text=Hackathon+Winner", alt: "Hackathon Certificate" },
    { src: "https://via.placeholder.com/400x300?text=THM+Top+5%", alt: "TryHackMe Certificate" },
    { src: "https://via.placeholder.com/400x300?text=Internship+Completion", alt: "Internship Certificate" },
    { src: "https://via.placeholder.com/400x300?text=Bug+Bounty+Award", alt: "Bug Bounty Certificate" },
    { src: "https://via.placeholder.com/400x300?text=AI+Security+Workshop", alt: "AI Security Workshop" },
  ];

  return (
    <section
      id="certifications"
      className="bg-[#111827] text-white py-20 min-h-screen px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-400 tracking-wide">
          Certifications Showcase
        </h1>

        <p className="text-center text-gray-400 mb-10 max-w-3xl mx-auto">
          Here’s a collection of fake certifications that represent dedication, exploration, and a desire to make cool UIs ✨
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map(({ src, alt }, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer border border-indigo-500"
              onClick={() => setSelectedImage(src)}
            >
              <img src={src} alt={alt} className="w-full h-60 object-cover" />
              <div className="bg-[#1f2937] px-4 py-3 text-center text-sm text-gray-300">
                {alt}
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Zoomed Certificate"
                className="w-full h-auto max-h-[90vh] object-contain rounded"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 text-2xl flex items-center justify-center"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certifications;
