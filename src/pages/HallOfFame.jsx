"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const hofItems = [
  {
    title: "Hall of Fame – Flipkart",
    description: "🏆 Positioned First Place in Hall of Fame",
    image: "/ALL IMAGES/HALL OF FAME/Flipkart - Hall of Fame.png",
  },
  {
    title: "Swags from BugCrowd",
    description: "🎁 1x StormTech Backpack\n🧢 1x Beanie",
    image: "/ALL IMAGES/HALL OF FAME/Screenshot 2025-06-26 090603.png",
  },
  {
    title: "Hall of Fame – Chime United States",
    description: "💥 Critical P1 Vulnerability & placed 1st",
    image: "/ALL IMAGES/HALL OF FAME/2025-05-27 06_27_25-Screenshot 2025-05-27 061454.png",
  },
];

export default function HallOfFamePage() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [modalImage, setModalImage] = useState(null);

  // Parallax triangle background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    const points = [];
    const cols = 5;
    const rows = 4;
    const spacingX = width / (cols - 1);
    const spacingY = height / (rows - 1);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        points.push({
          x: x * spacingX,
          y: y * spacingY,
          offsetX: Math.random() * 200 - 100,
          offsetY: Math.random() * 200 - 100,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
        });
      }
    }

    function drawTriangles() {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      ctx.lineWidth = 2;
      const getPoint = (col, row) => points[row * cols + col];

      for (let y = 0; y < rows - 1; y++) {
        for (let x = 0; x < cols - 1; x++) {
          const p1 = getPoint(x, y);
          const p2 = getPoint(x + 1, y);
          const p3 = getPoint(x, y + 1);
          const p4 = getPoint(x + 1, y + 1);

          const mx = (mouse.current.x - width / 2) / 50;
          const my = (mouse.current.y - height / 2) / 50;

          const applyParallax = (p) => ({
            x: p.x + p.offsetX + mx,
            y: p.y + p.offsetY + my,
          });

          const pp1 = applyParallax(p1);
          const pp2 = applyParallax(p2);
          const pp3 = applyParallax(p3);
          const pp4 = applyParallax(p4);

          ctx.strokeStyle = "rgba(255,255,255,0.6)";
          ctx.beginPath();
          ctx.moveTo(pp1.x, pp1.y);
          ctx.lineTo(pp2.x, pp2.y);
          ctx.lineTo(pp3.x, pp3.y);
          ctx.closePath();
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(pp2.x, pp2.y);
          ctx.lineTo(pp3.x, pp3.y);
          ctx.lineTo(pp4.x, pp4.y);
          ctx.closePath();
          ctx.stroke();

          [pp1, pp2, pp3, pp4].forEach((p) => {
            const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 6);
            gradient.addColorStop(0, "rgba(0,255,255,0.9)");
            gradient.addColorStop(1, "rgba(0,255,255,0.1)");
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
            ctx.fill();
          });
        }
      }
    }

    function animate() {
      points.forEach((p) => {
        p.offsetX += p.speedX;
        p.offsetY += p.speedY;
        if (p.offsetX > 200 || p.offsetX < -200) p.speedX *= -1;
        if (p.offsetY > 200 || p.offsetY < -200) p.speedY *= -1;
      });
      drawTriangles();
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <section className="relative min-h-screen text-white py-28 px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-20 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-xl"
      >
        🏅 Hall of Fame
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {hofItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-6 border border-gray-500/30  cursor-pointer"
            style={{ boxShadow: "none" }} // no shadow by default
            whileHover={{ scale: 1.05, boxShadow: "5px 5px 10px rgba(115, 120, 118, 1)" }} // shadow on hover
          >
            <div className="flex flex-col h-full items-center text-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-48 object-contain rounded-lg mb-6" // image stays clean
                onClick={() => setModalImage(item.image)}
              />
              <h3 className="text-2xl font-bold text-gray-200 mb-4">{item.title}</h3>
              <p className="text-gray-400 whitespace-pre-line">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setModalImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.img
            src={modalImage}
            alt="Full"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-2xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </section>
  );
}
