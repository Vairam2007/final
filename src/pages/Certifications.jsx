"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);
  const canvasRef = useRef(null);

  const certificates = [
    { src: "/ALL IMAGES/CERTIFICATES/u8ufqy3w_1746069080308_page-0001.jpg", alt: "eJPT Certificate" },
    { src: "/ALL IMAGES/CERTIFICATES/VETTRIVEL U (2)_page-0001.jpg", alt: "Ethical Hacking Essentials" },
    { src: "/ALL IMAGES/CERTIFICATES/THM-CENLASOUBP_page-0001.jpg", alt: "API Security Fundamentals" },
    { src: "/ALL IMAGES/CERTIFICATES/Screenshot 2025-04-30 222811.png", alt: "Certified in Cybersecurity" },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // Twinkling stars
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 1.2 + 0.4,
      alpha: Math.random(),
      delta: Math.random() * 0.02 + 0.005,
    }));

    // Shooting stars
    const maxShooting = 6;
    const shootingStars = Array.from({ length: maxShooting }, () => createShootingStar());

    function createShootingStar() {
      const side = Math.floor(Math.random() * 4);
      let x, y, dx, dy;
      const speed = 4 + Math.random() * 4;
      const length = 150 + Math.random() * 150;

      switch (side) {
        case 0: x = Math.random() * w; y = -50; dx = (Math.random() - 0.5) * speed; dy = speed; break;
        case 1: x = Math.random() * w; y = h + 50; dx = (Math.random() - 0.5) * speed; dy = -speed; break;
        case 2: x = -50; y = Math.random() * h; dx = speed; dy = (Math.random() - 0.5) * speed; break;
        case 3: x = w + 50; y = Math.random() * h; dx = -speed; dy = (Math.random() - 0.5) * speed; break;
      }
      return { x, y, dx, dy, length, speed, size: 1, active: Math.random() < 0.3 }; // Thinner stars (size:1)
    }

    function drawTwinklingStars() {
      stars.forEach((s) => {
        s.alpha += s.delta;
        if (s.alpha > 1) s.alpha = 0;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
      });
    }

    function drawShootingStars() {
      shootingStars.forEach((s, i) => {
        if (!s.active) { if (Math.random() < 0.002) s.active = true; return; }
        const xEnd = s.x + (s.dx * s.length) / s.speed;
        const yEnd = s.y + (s.dy * s.length) / s.speed;
        const gradient = ctx.createLinearGradient(s.x, s.y, xEnd, yEnd);
        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1; // Decreased width
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(xEnd, yEnd);
        ctx.stroke();
        s.x += s.dx; s.y += s.dy;
        if (s.x < -200 || s.x > w + 200 || s.y < -200 || s.y > h + 200) shootingStars[i] = createShootingStar();
      });
    }

    function animate() {
      // Background with subtle gradient overlay for depth
      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, "#0b0b3a");
      gradient.addColorStop(1, "#02020d");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      drawTwinklingStars();
      drawShootingStars();
      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />

      <div className="relative max-w-7xl mx-auto py-16 px-6 md:px-12 space-y-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12
                       text-transparent bg-clip-text
                       bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500
                       drop-shadow-[0_0_25px_rgba(0,150,255,0.6)]">
          Certifications Gallery
        </h1>

        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div
              className="w-full md:w-1/2 cursor-pointer transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,200,255,0.6)]"
              onClick={() => setSelectedImage(cert.src)}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-700/40">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text
                             bg-gradient-to-r from-yellow-400 to-lime-400 transition-transform duration-300 hover:scale-105">
                {cert.alt}
              </h3>
              <p className="text-gray-300 text-lg">
                This certificate verifies your knowledge and proficiency in {cert.alt}. Click the image to view it larger.
              </p>
            </div>
          </div>
        ))}

        {/* Zoom Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Zoomed Certificate"
              className="max-h-[90vh] max-w-[95vw] object-contain rounded-xl shadow-2xl shadow-blue-700/60"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 text-2xl flex items-center justify-center shadow-lg"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
