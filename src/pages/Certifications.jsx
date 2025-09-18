"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);
  const canvasRef = useRef(null);

  const certificates = [
    { src: "/ALL IMAGES/CERTIFICATES/u8ufqy3w_1746069080308_page-0001.jpg", alt: "eJPT Certificate" },
    { src: "/ALL IMAGES/CERTIFICATES/VETTRIVEL U (2)_page-0001.jpg", alt: "Ethical Hacking Essentials" },
    { src: "/ALL IMAGES/CERTIFICATES/THM-CENLASOUBP_page-0001.jpg", alt: "API Security Fundamentals" },
    { src: "/ALL IMAGES/CERTIFICATES/Screenshot 2025-04-30 222811.png", alt: "Certified in Cybersecurity" },
  ];

  const Card = ({ src, alt }) => (
    <div
      onClick={() => setSelectedImage(src)}
      className="relative group cursor-pointer rounded-2xl shadow-2xl shadow-blue-700/50
                 transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1
                 bg-[#0a0a2a] border border-gray-700 p-4 flex justify-center items-center"
    >
      <div className="bg-black/80 rounded-xl overflow-hidden shadow-lg w-full h-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2
                      px-4 py-1 text-white text-sm font-semibold
                      bg-gradient-to-t from-black/90 to-transparent rounded-md">
        {alt}
      </div>
    </div>
  );

  /* === BACKGROUND ANIMATION ===
     1. Twinkling static stars
     2. Shooting stars that originate randomly from all sides and cross the screen diagonally
  */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // ---- Twinkling stars ----
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 1.2 + 0.4,
      alpha: Math.random(),
      delta: Math.random() * 0.02 + 0.005,
    }));

    // ---- Shooting stars (falling stars) ----
    const maxShooting = 6;
    const shootingStars = Array.from({ length: maxShooting }, () => createShootingStar());

    function createShootingStar() {
      // Choose a random side to spawn from
      const side = Math.floor(Math.random() * 4); // 0: top, 1: bottom, 2: left, 3: right
      let x, y, dx, dy;

      const speed = 4 + Math.random() * 4;
      const length = 150 + Math.random() * 150;

      switch (side) {
        case 0: // top
          x = Math.random() * w;
          y = -50;
          dx = (Math.random() - 0.5) * speed;
          dy = speed;
          break;
        case 1: // bottom
          x = Math.random() * w;
          y = h + 50;
          dx = (Math.random() - 0.5) * speed;
          dy = -speed;
          break;
        case 2: // left
          x = -50;
          y = Math.random() * h;
          dx = speed;
          dy = (Math.random() - 0.5) * speed;
          break;
        case 3: // right
          x = w + 50;
          y = Math.random() * h;
          dx = -speed;
          dy = (Math.random() - 0.5) * speed;
          break;
      }

      return {
        x,
        y,
        dx,
        dy,
        length,
        speed,
        size: 2 + Math.random() * 2,
        active: Math.random() < 0.3,
      };
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
        if (!s.active) {
          if (Math.random() < 0.002) s.active = true;
          return;
        }

        const xEnd = s.x + s.dx * s.length / s.speed;
        const yEnd = s.y + s.dy * s.length / s.speed;

        const gradient = ctx.createLinearGradient(s.x, s.y, xEnd, yEnd);
        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = s.size;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(xEnd, yEnd);
        ctx.stroke();

        s.x += s.dx;
        s.y += s.dy;

        if (s.x < -200 || s.x > w + 200 || s.y < -200 || s.y > h + 200) {
          shootingStars[i] = createShootingStar();
        }
      });
    }

    function animate() {
      ctx.fillStyle = "#0b0b3a";
      ctx.fillRect(0, 0, w, h);

      drawTwinklingStars();
      drawShootingStars();

      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* Night-sky canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10"></canvas>

      <div className="relative max-w-7xl mx-auto py-16 px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12
                       text-transparent bg-clip-text
                       bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500
                       drop-shadow-[0_0_20px_rgba(0,150,255,0.6)]">
          Certifications Gallery
        </h1>

        {/* First Row: Staggered Large Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 m-12">
          <div className="relative -translate-y-8">
            <div className="w-full max-w-xl mx-auto">
              <Card {...certificates[0]} />
            </div>
          </div>
          <div className="relative translate-y-8">
            <div className="w-full max-w-xl mx-auto">
              <Card {...certificates[1]} />
            </div>
          </div>
        </div>

        {/* Remaining Certificates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {certificates.slice(2).map((c, i) => (
            <Card key={i + 2} {...c} />
          ))}
        </div>

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
