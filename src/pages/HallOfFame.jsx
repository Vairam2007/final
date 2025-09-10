"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Sample Hall of Fame data
const hofItems = [
  {
    title: "Hall of Fame – Flipkart",
    description: "🏆 First Place in Hall of Fame",
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
  // Add more images here
];

export default function HallOfFamePage() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Particle background with connected lines
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 120;
    const maxDistance = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1.5,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
      });
    }

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      // Dark gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#0a0a0a");
      gradient.addColorStop(1, "#1c1c1c");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw particles
      particles.forEach((p) => {
        const dx = (mouse.current.x - width / 2) * 0.02;
        const dy = (mouse.current.y - height / 2) * 0.02;

        ctx.fillStyle = "rgba(0, 255, 255, 0.6)";
        ctx.beginPath();
        ctx.arc(p.x + dx, p.y + dy, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Move particle
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;
        if (p.y > height) p.y = 0;
        if (p.y < 0) p.y = height;
      });

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = (mouse.current.x - width / 2) * 0.02;
          const dy = (mouse.current.y - height / 2) * 0.02;

          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < maxDistance) {
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 * (1 - dist / maxDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x + dx, p1.y + dy);
            ctx.lineTo(p2.x + dx, p2.y + dy);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" />

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="fixed top-0 w-full text-center z-10 text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-xl py-6"
      >
        🏅 Hall of Fame
      </motion.h2>

      {/* Hall of Fame grid */}
      <div className="relative z-10 max-w-7xl mx-auto mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 pb-20">
        {hofItems.map((item, index) => (
          <FlipCard key={index} item={item} />
        ))}
      </div>

      <style>{`
        html, body {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        html::-webkit-scrollbar, body::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

// Flip Card Component
function FlipCard({ item }) {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div
      className="w-full cursor-pointer perspective h-96"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front - Image */}
        <div className="absolute w-full h-full backface-hidden rounded-3xl flex items-center justify-center overflow-hidden border border-gray-600 shadow-2xl">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Back - Text */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-900 rounded-3xl flex flex-col items-center justify-center p-6 text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-100 mb-4">
            {item.title}
          </h3>
          <p className="text-gray-300 whitespace-pre-line text-lg md:text-xl">
            {item.description}
          </p>
          <p className="mt-4 text-sm text-gray-400">(Click again to flip)</p>
        </div>
      </motion.div>

      <style>{`
        .perspective {
          perspective: 1500px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
