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
      className="bg-[#111827] text-white py-20 min-h-screen px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 tracking-tight">
          Certifications Showcase
        </h1>

        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto text-base md:text-lg">
          A showcase of certifications highlighting achievements in ethical
          hacking, penetration testing, and cybersecurity. Click any certificate
          to zoom in.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map(({ src, alt, highlight, link }, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(src)}
              className={`relative group rounded-xl overflow-hidden shadow-lg border transition-all duration-300 cursor-pointer transition-shadow ${
                highlight
                  ? "sm:col-span-2 md:col-span-2 border-indigo-500"
                  : "border-gray-700"
              } hover:scale-[1.03] hover:shadow-[0_0_25px_#00ffe7]`}
            >
              <img
                src={src}
                alt={alt}
                className={`w-full object-cover ${
                  highlight ? "h-72 sm:h-80" : "h-60"
                }`}
              />
              <div className="bg-[#1f2937] px-4 py-3 text-center text-sm text-gray-300">
                {alt}
              </div>

              {/* Optional link badge */}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3 right-3 bg-green-500 hover:bg-green-600 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md"
                >
                  🔗 Link
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 overflow-auto flex items-center justify-center p-4"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="relative bg-[#1f2937] p-4 rounded-lg shadow-xl max-w-3xl w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={selectedImage}
        alt="Zoomed Certificate"
        className="w-full max-h-[80vh] object-contain rounded-md shadow-[0_0_20px_#00ffccaa] hover:shadow-[0_0_35px_#00ffe7] transition-shadow duration-300"
      />
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-8 h-8 text-xl flex items-center justify-center shadow-lg"
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
