"use client";
import React, { useState } from "react";

function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      src: "/ALL IMAGES/CERTIFICATES/u8ufqy3w_1746069080308_page-0001.jpg",
      alt: "eJPT Certificate",
      highlight: true,
      link: "https://ine.com/certifications/ejpt",
    },
    {
      src: "/ALL IMAGES/CERTIFICATES/VETTRIVEL U (2)_page-0001.jpg",
      alt: "Ethical Hacking Essentials | CEH | E (EC-Council)",
      link: "https://www.eccouncil.org",
    },
    {
      src: "/ALL IMAGES/CERTIFICATES/THM-CENLASOUBP_page-0001.jpg",
      alt: "API Security Fundamentals (APIsec University)",
      link: "https://www.apisecuniversity.com",
    },
    {
      src: "/ALL IMAGES/CERTIFICATES/Screenshot 2025-04-30 222811.png",
      alt: "Certified in Cybersecurity | CC (ISC2)",
      link: "https://www.isc2.org",
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-black text-white py-24 px-6 md:px-16 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 tracking-tight">
          Certifications Gallery
        </h1>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto text-base md:text-lg">
          Highlighting professional achievements in cybersecurity and ethical hacking.  
          Click any certificate to zoom in.
        </p>

        {/* Decorative floating element */}
        <div className="absolute top-24 right-10 hidden lg:block w-24 h-24 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-full opacity-30 animate-pulse" />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certificates.map(({ src, alt, highlight, link }, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(src)}
              className={`relative group rounded-xl overflow-hidden shadow-2xl border transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-[1.03] ${
                highlight
                  ? "sm:col-span-2 md:col-span-2 border-cyan-500"
                  : "border-gray-800"
              }`}
            >
              {/* Certificate Image */}
              <img
                src={src}
                alt={alt}
                className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                  highlight ? "h-80" : "h-64"
                }`}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Certificate Name */}
              <div className="absolute bottom-0 left-0 w-full px-4 py-3 text-sm text-white font-semibold">
                {alt}
              </div>

              {/* Verify Link Badge */}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3 right-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
                >
                  🔗 Verify
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative bg-[#111] p-4 rounded-xl shadow-2xl max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Zoomed Certificate"
                className="w-full max-h-[85vh] object-contain rounded-md shadow-[0_0_30px_#00ffe7aa] transition-transform duration-300 hover:scale-[1.02]"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-9 h-9 text-2xl flex items-center justify-center shadow-lg"
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
