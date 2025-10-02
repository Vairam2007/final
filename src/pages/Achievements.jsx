"use client";
import React, { useEffect, useRef } from "react";

// ---------------------------
// Marquee Component
// ---------------------------
const testimonials = [
  {
    text: "Really impressed by https://reactbits.dev. Check it out. The Splash Cursor effect is amazing.",
    avatar: "https://pbs.twimg.com/profile_images/1794450494686932992/wqRqF4dt_400x400.jpg",
    handle: "@makwanadeepam",
  },
  {
    text: "Just discovered http://reactbits.dev — a sleek, minimal, and super dev-friendly React component library. Clean UI, easy to use, and perfect for modern projects.",
    avatar: "https://pbs.twimg.com/profile_images/1918646280223608832/nqBF4zh__400x400.jpg",
    handle: "@syskey_dmg",
  },
  {
    text: "Everything about this is next level: the components, the registry, dynamic items.",
    avatar: "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
    handle: "@shadcn",
  },
];

const Marquee = ({ direction = "left", speed = 40 }) => {
  const animation = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-4">
      <div
        className={`inline-flex gap-6 animate-${animation}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="inline-block min-w-[300px] bg-gray-800/50 rounded-xl p-4 shadow-lg"
          >
            <p className="text-white text-sm">{t.text}</p>
            <div className="flex items-center mt-2 gap-2">
              <img src={t.avatar} alt={t.handle} className="w-8 h-8 rounded-full" />
              <span className="text-cyan-400 font-semibold">{t.handle}</span>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>
    </div>
  );
};

// ---------------------------
// Achievements Page
// ---------------------------
export default function Achievements() {
  const canvasRef = useRef(null);

  // Particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const pointCount = 40; // reduced for performance
    const points = [];

    for (let i = 0; i < pointCount; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 1 + Math.random() * 2,
      });
    }

    const animate = () => {
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, width, height);

      points.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.7)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden text-white flex flex-col items-center py-20 px-6 md:px-12">
      {/* Particle Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
      <div className="absolute inset-0 bg-black/40  -z-5" />

      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 mb-12 text-center">
        🏆 Achievements
      </h2>

      {/* Marquee Rows */}
      <Marquee direction="left" speed={40} />
      <Marquee direction="right" speed={50} />
      <Marquee direction="left" speed={45} />
    </section>
  );
}
