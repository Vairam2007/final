import React from "react";

function About() {
  return (
    <section
      id="about"
      className="bg-gray-950 text-white px-6 md:px-16 py-20 min-h-screen"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
          <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          <p>
            👋 Hi, I’m{" "}
            <span className="text-green-400 font-semibold">
              VETTRIVEL U
            </span>
            , an{" "}
            <span className="text-cyan-400 font-semibold">
              Offensive Security Expert
            </span>{" "}
            based in Cuddalore, Tamil Nadu, India 🇮🇳.
            I specialize in{" "}
            <strong className="text-yellow-400">Red Teaming, VAPT, and Offensive Security Operations</strong>,
            helping secure infrastructures of MNCs, Indian & US government agencies. My contributions have earned me
            multiple <span className="text-pink-400">Hall of Fame</span> recognitions for responsibly disclosing
            critical vulnerabilities.
          </p>

          <p>
            🛡 From gaining{" "}
            <span className="text-purple-400 font-medium">root access</span> on high-value systems to uncovering{" "}
            <span className="text-red-400 font-medium">business-critical flaws</span>,
            my work has been acknowledged globally through swags, bounties, and recognition—
            including being featured as a{" "}
            <span className="text-blue-400 font-medium">Top Voice in InfoSec on LinkedIn</span>.
          </p>

          <p>
            👨‍💻 As a freelancer, I collaborate with top-tier companies on{" "}
            <span className="text-emerald-400 font-medium">outsourced security projects</span>.
            I’m also passionate about educating others—regularly conducting{" "}
            <span className="text-yellow-300">classes, webinars, and mentorship sessions</span>{" "}
            for upcoming ethical hackers and cybersecurity enthusiasts.
          </p>

          <p>
            💡 Giving back is part of my journey. I actively help nurture the next generation of{" "}
            <span className="text-orange-400 font-semibold">bug bounty hunters</span> through live sessions and community content.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
