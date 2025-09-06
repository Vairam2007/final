"use client";
import React, { useState, useEffect, useRef } from "react";

function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);
  const canvasRef = useRef(null);

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Create animated white lines
    const lines = [];
    const lineCount = 6;
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        y: Math.random() * height,
        speed: 0.001 + Math.random() * 0.003,
        amplitude: 20 + Math.random() * 30,
        wavelength: 200 + Math.random() * 300,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.15 + Math.random() * 0.15, // subtle transparency
      });
    }

    const animate = () => {
      ctx.fillStyle = "#000"; // black background
      ctx.fillRect(0, 0, width, height);

      lines.forEach(line => {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 2) {
          const y =
            line.y +
            Math.sin(x / line.wavelength + line.phase + performance.now() * line.speed) *
              line.amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(255, 255, 255, ${line.alpha})`; // white line
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(255,255,255,${line.alpha})`;
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />

      <div className="relative z-10 max-w-7xl mx-auto py-24 px-6 md:px-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 tracking-tight">
          Certifications Gallery
        </h1>
        <p className="text-center text-gray-300 mb-16 max-w-3xl mx-auto text-base md:text-lg">
          Highlighting professional achievements in cybersecurity and ethical hacking. Click any certificate to zoom in.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certificates.map(({ src, alt, highlight, link }, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(src)}
              className={`relative group rounded-xl overflow-hidden shadow-2xl border transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-[1.05] ${
                highlight
                  ? "sm:col-span-2 md:col-span-2 border-cyan-400 shadow-cyan-500/50"
                  : "border-gray-800 shadow-gray-700/50"
              }`}
            >
              <img
                src={src}
                alt={alt}
                className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                  highlight ? "h-80" : "h-64"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-full px-4 py-3 text-sm text-white font-semibold backdrop-blur-sm bg-black/40">
                {alt}
              </div>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3 right-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
                >
                  🔗 Verify
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Zoom Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Zoomed Certificate"
                className="w-full max-h-[85vh] object-contain rounded-md transition-transform duration-300 hover:scale-[1.02]"
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
