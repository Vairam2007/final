import React from "react";
import CountUp from './CountUp'; // ✅ Your CountUp component

function About() {
  return (
    <section
      id="about"
      className="bg-gray-950 text-white h-screen px-6 md:px-12 overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 h-full py-12">
        
        {/* Text and Achievements */}
        <div className="flex-1 flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">About Me</h2>
          <p className="text-xl mb-4">
            Cybersecurity researcher & red teamer from India 🇮🇳 <br />
            Specialized in VAPT, Bug Bounties, and AI Security.
          </p>

          <ul className="space-y-2 mt-6 text-lg text-gray-300">
            <li>🏆 10+ HOF Recognitions (Flipkart, Chime, Govt)</li>
            <li>🎓 eJPT Certified (94%)</li>
            <li>🎯 Finalist - National Hackathon x CTF</li>
            <li>💰 Earned payouts from multiple companies</li>
            <li>📢 Cybersecurity mentor, writeups on Medium</li>
          </ul>

          {/* CountUp Stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <CountUp from={0} to={10} duration={2} className="text-4xl font-bold text-green-400" />
              <p className="text-sm mt-1">HOFs</p>
            </div>
            <div>
              <CountUp from={0} to={94} duration={2} className="text-4xl font-bold text-green-400" />
              <p className="text-sm mt-1">eJPT Score</p>
            </div>
            <div>
              <CountUp from={0} to={5} duration={2} className="text-4xl font-bold text-green-400" />
              <p className="text-sm mt-1">Top % THM</p>
            </div>
            <div>
              <CountUp from={0} to={50} duration={2} className="text-4xl font-bold text-green-400" />
              <p className="text-sm mt-1">Writeups</p>
            </div>
          </div>
        </div>

        {/* Certificates / Images */}
        <div className="flex-1 flex justify-center items-center h-full">
          <div className="grid grid-cols-2 gap-4">
            <img src="/certificates/ejpt.png" alt="eJPT" className="rounded-lg border border-green-600 shadow" />
            <img src="/certificates/hackathon.png" alt="Hackathon" className="rounded-lg border border-green-600 shadow" />
            <img src="/certificates/tryhackme.png" alt="TryHackMe" className="rounded-lg border border-green-600 shadow" />
            <img src="/certificates/linkedin-top-voice.png" alt="LinkedIn" className="rounded-lg border border-green-600 shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
