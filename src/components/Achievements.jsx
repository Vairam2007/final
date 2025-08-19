import React from "react";

function Achievements() {
  const stats = [
    { number: 42, label: "Capture The Flag Wins" },
    { number: 19, label: "Top 3 Bug Reports" },
    { number: 83, label: "Writeups Published" },
    { number: 12, label: "Community Talks" },
  ];

  return (
    <section
      id="achievements"
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-24 px-6 md:px-20 min-h-screen"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-teal-300">
          My Cyber Journey in Numbers
        </h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          These totally real and highly exaggerated achievements summarize a path of relentless curiosity and serious typing 👨‍💻
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="w-40 h-40 mx-auto rounded-full bg-[#1f2937] flex flex-col items-center justify-center shadow-lg hover:shadow-teal-400/40 transition-shadow duration-300"
            >
              <span className="text-4xl font-bold text-teal-300">
                {stat.number}+
              </span>
              <p className="mt-2 text-sm text-gray-300 text-center px-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
