"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ---------------------
// Data
// ---------------------
const skills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Solidity", icon: "https://cryptologos.cc/logos/solidity-solidity-logo.svg" },
  { name: "Ethereum", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
];

const contentBoxes = [
  { title: "Web Development", desc: "Building modern web applications with clean UI and strong backend.", img: "https://source.unsplash.com/400x250/?technology,code" },
  { title: "Blockchain", desc: "Smart contracts and decentralized solutions on Ethereum & Solidity.", img: "https://source.unsplash.com/400x250/?blockchain,crypto" },
  { title: "AI & ML", desc: "Leveraging Python and ML frameworks to solve real-world problems.", img: "https://source.unsplash.com/400x250/?artificial-intelligence,machine-learning" },
  { title: "Cybersecurity", desc: "Pentesting, vulnerability assessments, and security automation.", img: "https://source.unsplash.com/400x250/?cybersecurity,hacking" },
  { title: "Cloud", desc: "Deploying scalable applications with cloud-native technologies.", img: "https://source.unsplash.com/400x250/?cloud,server" },
  { title: "Mobile Apps", desc: "Cross-platform mobile applications using React Native & Flutter.", img: "https://source.unsplash.com/400x250/?mobile,app" },
  { title: "Data Science", desc: "Transforming data into actionable insights with visualization tools.", img: "https://source.unsplash.com/400x250/?data,analytics" },
  { title: "DevOps", desc: "CI/CD, automation pipelines, and infrastructure as code.", img: "https://source.unsplash.com/400x250/?devops,automation" },
];

// ---------------------
// Animated Background
// ---------------------
function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particles
    const particles = [];
    const PARTICLE_COUNT = 80;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.7,
        dy: (Math.random() - 0.5) * 0.7,
      });
    }

    const draw = () => {
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,200,255,0.9)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00ffff";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > window.innerWidth) p.dx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.dy *= -1;
      });

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(0,200,255,${0.25 - dist / 480})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />;
}

// ---------------------
// Skills Component
// ---------------------
export function Skills() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const rowFadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="relative bg-black text-white py-20 px-6 md:px-12 font-mono overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          My <span className="text-purple-400">Expertise</span>
        </h2>

        {/* Content Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {contentBoxes.map((box, index) => (
            <motion.div
              key={index}
              variants={rowFadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative group bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-600 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300 flex flex-col h-[350px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-ripple pointer-events-none"></span>
              <img src={box.img} alt={box.title} className="w-full h-44 object-cover" />
              <div className="p-5 flex flex-col justify-between flex-grow text-left">
                <h3 className="text-xl font-semibold text-purple-300">{box.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{box.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Professional <span className="text-purple-400">Skillset</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={rowFadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative group flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-600 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-ripple pointer-events-none"></span>
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain mb-4" />
              <span className="text-lg font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ripple {
          0% { opacity: 0; transform: scale(0.9); }
          50% { opacity: 0.6; transform: scale(1.05); }
          100% { opacity: 0; transform: scale(1.2); }
        }
        .animate-ripple { animation: ripple 1.5s ease-out infinite; }
      `}</style>
    </section>
  );
}

export default Skills;
