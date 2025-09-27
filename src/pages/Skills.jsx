"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ---------------------
// Expertise Content
// ---------------------
const expertiseBoxes = [
  { title: "Vulnerability Assessment & Pentesting", desc: "Web, Network, API, and LLM AI security testing and pentesting.", img: "https://source.unsplash.com/400x250/?cybersecurity,hacking" },
  { title: "Red Team Engagements & Threat Emulation", desc: "Simulating real-world attacks and adversary emulation.", img: "https://source.unsplash.com/400x250/?redteam,cybersecurity" },
  { title: "Bug Bounty Hunting", desc: "Web, API, and Network vulnerabilities identification and reporting.", img: "https://source.unsplash.com/400x250/?bug,bounty,hacking" },
  { title: "Post-Exploitation & Privilege Escalation", desc: "Linux & Windows environments, lateral movement, and escalation.", img: "https://source.unsplash.com/400x250/?exploit,security" },
  { title: "Offensive Security Operations", desc: "SAST/DAST, CTF strategy, and real-world attack simulations.", img: "https://source.unsplash.com/400x250/?penetration,testing" },
  { title: "Network Exploitation & Lateral Movement", desc: "Network scanning, enumeration, and lateral attacks.", img: "https://source.unsplash.com/400x250/?network,security" },
  { title: "CTF Strategy & Real-World Simulations", desc: "Capture-the-flag strategies and simulated cyber exercises.", img: "https://source.unsplash.com/400x250/?ctf,cybersecurity" },
  { title: "Static/Dynamic Application Security Testing", desc: "SAST & DAST for web and API applications.", img: "https://source.unsplash.com/400x250/?web,security" },
];

// ---------------------
// Professional Skillset
// ---------------------
const skillGroups = [
  {
    title: "Tools & Frameworks Mastery",
    skills: [
      { name: "Burp Suite Pro", icon: "https://assets.streamlinehq.com/image/private/w_34,h_34,ar_1/f_auto/v1/icons/logos/burpsuite-w3f4g0vh9opupo2g5ek92.png/burpsuite-xw0lw7maj1h72v6kbk0104.png" },
      { name: "Nmap", icon: "https://nmap.org/images/sitelogo-nmap-1680x900.png" },
      { name: "Metasploit", icon: "https://assets.streamlinehq.com/image/private/w_34,h_34,ar_1/f_auto/v1/icons/logos/metasploit-h33wivgvlvgtk3wmoejxq.png/metasploit-rkuireddk3p5vdgf5mil5.png" },
      { name: "Postman", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
      { name: "OWASP ZAP", icon: "https://www.zaproxy.org/img/logo.png" },
      { name: "Hydra", icon: "https://www.flaticon.com/svg/static/icons/svg/3065/3065643.svg" },
      { name: "SQLmap", icon: "https://sqlmap.org/images/sqlmap_logo.png" },
      { name: "XSS Hunter", icon: "https://www.xsshunter.com/favicon.ico" },
    ],
  },
  {
    title: "Scripting & Automation",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "Tool Wrapping", icon: "https://cdn-icons-png.flaticon.com/512/565/565655.png" },
      { name: "Automation Scripts", icon: "https://source.unsplash.com/100x100/?automation,coding" },
    ],
  },
  {
    title: "Knowledge & Methodologies",
    skills: [
      { name: "OWASP Top 10", icon: "https://owasp.org/assets/images/logo.png" },
      { name: "MITRE ATT&CK", icon: "https://attack.mitre.org/images/attack_logo.png" },
      { name: "NIST Methodologies", icon: "https://www.nist.gov/sites/default/files/styles/medium/public/images/2021/06/14/nist-logo.png" },
      { name: "Secure Code Review", icon: "https://source.unsplash.com/100x100/?code,security" },
      { name: "Linux & Windows Internals", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Linux_and_Windows.png" },
    ],
  },
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
  const rowFadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-12 font-mono overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* My Expertise */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-purple-400">
          My Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {expertiseBoxes.map((box, idx) => (
            <motion.div
              key={idx}
              variants={rowFadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="group bg-gray-900 border border-purple-600 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
            >
              <img src={box.img} alt={box.title} className="w-full h-44 object-cover" />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-purple-300">{box.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{box.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Skillset */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-purple-400">
          Professional Skillset
        </h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              variants={rowFadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-900 border border-purple-600 rounded-xl shadow-lg p-6 w-full md:w-[32%] flex flex-col gap-4"
            >
              <h3 className="text-purple-300 font-semibold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center bg-gray-800 border border-purple-500 rounded-xl p-4 w-20 h-20"
                  >
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
