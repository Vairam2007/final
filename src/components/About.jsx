import React, { useState } from "react";

function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    { src: "/ALL IMAGES/CERTIFICATES/u8ufqy3w_1746069080308_page-0001.jpg", alt: "eJPT Certificate" },
    { src: "/ALL IMAGES/CERTIFICATES/Screenshot 2025-04-30 222811.png", alt: "Hackathon Certificate" },
    { src: "/ALL IMAGES/CERTIFICATES/THM-CENLASOUBP_page-0001.jpg", alt: "TryHackMe Certificate" },
    { src: "/ALL IMAGES/CERTIFICATES/Internship CyberDosti.jpg", alt: "Internship Certificate" },
  ];

  const closeModal = () => setSelectedImage(null);

  return (
    <section
      id="about"
      className="bg-gray-900 text-white px-6 md:px-16 py-20 font-sans min-h-screen"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left Text */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-green-400">
            About Me
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Cybersecurity Researcher & Red Teamer from India 🇮🇳
            <br />
            Specialized in VAPT, Bug Bounties, and AI Security.
          </p>

          <ul className="space-y-2 text-gray-400 text-md">
            <li>🏆 10+ Hall of Fame Recognitions (Flipkart, Chime, Govt)</li>
            <li>🎓 eJPT Certified (94%)</li>
            <li>🎯 Finalist - National Hackathon x CTF</li>
            <li>💰 Earned payouts from multiple companies</li>
            <li>📢 Cybersecurity mentor & writeups on Medium</li>
          </ul>
        </div>

        {/* Right Certificates */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {certificates.map(({ src, alt }, i) => (
            <div
              key={i}
              className="border border-purple-700 p-2 rounded cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-auto object-contain rounded"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Certificate Zoom"
              className="w-full h-auto max-h-[90vh] object-contain rounded shadow-lg"
            />

            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-purple-700 hover:bg-purple-800 text-2xl w-10 h-10 rounded-full flex items-center justify-center"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
