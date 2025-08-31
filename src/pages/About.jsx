import React, { useState } from "react";

function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="about"
      className="px-6 md:px-16 py-24 text-white"
      style={{
        background: "linear-gradient(-45deg, #1e1b4b 0%, #000000 100%)",
        color: "white",
        padding: "100px 40px",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] gap-16 items-start">
        {/* Left Column - Text */}
        <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <p>
            👋 Hi, I’m{" "}
            <span className="text-green-400 font-semibold">VETTRIVEL U</span>, an{" "}
            <span className="text-cyan-400 font-semibold">
              Offensive Security Expert
            </span>{" "}
            based in Cuddalore, Tamil Nadu, India 🇮🇳. I specialize in{" "}
            <strong className="text-yellow-400">
              Red Teaming, VAPT, and Offensive Security Operations
            </strong>
            , working with MNCs and government agencies. I’ve earned multiple{" "}
            <span className="text-pink-400">Hall of Fame</span> recognitions.
          </p>

          <p>
            🛡 I’ve gained{" "}
            <span className="text-purple-400 font-medium">root access</span> on
            high-value systems and uncovered{" "}
            <span className="text-red-400 font-medium">
              business-critical flaws
            </span>
            , being featured as a{" "}
            <span className="text-blue-400 font-medium">
              Top Voice in InfoSec on LinkedIn
            </span>
            .
          </p>

          <p>
            👨‍💻 I freelance on{" "}
            <span className="text-emerald-400 font-medium">
              outsourced security projects
            </span>{" "}
            and enjoy mentoring through{" "}
            <span className="text-yellow-300">workshops & webinars</span>.
          </p>

          <p>
            💡 I actively support the next-gen{" "}
            <span className="text-orange-400 font-semibold">
              bug bounty hunters
            </span>{" "}
            with live sessions, content, and community training.
          </p>
        </div>

        {/* Right Column - Images */}
        <div className="flex flex-col items-center gap-6">
          {/* Replaced Image with Iframe */}
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-700 w-auto h-[80px] hover:scale-105 transition">
            <iframe
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4840710"
              title="TryHackMe Badge"
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>

          {/* Badge (text style) */}
          <div className="bg-[#1a1f2b] px-4 py-2 rounded-md flex items-center gap-2 shadow-md border border-gray-700">
            <img
              src="/ALL IMAGES/LOGO/tryhackme.png"
              alt="TryHackMe"
              className="w-5 h-5 object-contain"
            />
            <span className="text-sm text-cyan-300 font-semibold">
              Top 5% TryHackMe User
            </span>
          </div>

          {/* LinkedIn Image */}
          <div
            className="rounded-xl overflow-hidden shadow-xl border border-gray-700 w-[360px] cursor-pointer hover:scale-105 transition"
            onClick={() =>
              setSelectedImage("/ALL IMAGES/OTHER/Screenshot 2024-09-10 194937.png")
            }
          >
            <img
              src="/ALL IMAGES/OTHER/Screenshot 2024-09-10 194937.png"
              alt="LinkedIn Profile"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Modal for image viewing */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 h-10 w-10 text-black text-2xl font-bold bg-cyan-400 hover:bg-cyan-300 rounded-full flex items-center justify-center transition focus:outline-none"
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-[80vh] object-contain rounded-lg border border-cyan-500 shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
