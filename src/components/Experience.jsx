import React, { useState } from "react";

export function Experience() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const experiences = [
    {
      title: "Cybersecurity Engineer",
      company: "CubeAI",
      date: "2024 - Present",
      description: "Developing secure AI solutions and managing security assessments.",
      certImages: ["/experience/cubeai-cert.png"],
    },
    {
      title: "Product Security Intern",
      company: "Abluva",
      date: "2023 - 2024",
      description: "Security testing, vulnerability analysis, and pen-testing.",
      certImages: ["/experience/ablova-cert.png"],
    },
    {
      title: "Offensive Security Intern",
      company: "Cybrtekninja",
      date: "2022 - 2023",
      description: "Red team exercises and internal system vulnerability assessments.",
      certImages: ["/experience/cybrtekninja-cert.png"],
    },
  ];

  const openModal = (img) => {
    setCurrentImage(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setIsOpen(false);
  };

  return (
    <section id="experience" className="bg-[#0e0e0e] text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-16">Experience</h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-600 z-0" />

          {/* Timeline Cards */}
          <div className="flex flex-col space-y-16">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative flex items-center justify-between w-full`}>
                {/* Left Side Card */}
                {idx % 2 === 0 ? (
                  <div className="w-5/12 bg-gray-900 p-6 rounded-xl shadow-lg z-10 text-right">
                    <h3 className="text-2xl font-bold text-green-400">{exp.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{exp.company} — {exp.date}</p>
                    <p className="text-gray-300">{exp.description}</p>
                    <div className="mt-4 flex justify-end gap-4">
                      {exp.certImages.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt="cert"
                          onClick={() => openModal(img)}
                          className="w-20 h-20 rounded-lg object-cover cursor-pointer hover:scale-105 transition"
                        />
                      ))}
                    </div>
                  </div>
                ) : <div className="w-5/12" />}

                {/* Timeline Dot */}
                <div className="w-10 h-10 bg-green-400 rounded-full z-10 border-4 border-black mx-4" />

                {/* Right Side Card */}
                {idx % 2 !== 0 ? (
                  <div className="w-5/12 bg-gray-900 p-6 rounded-xl shadow-lg z-10 text-left">
                    <h3 className="text-2xl font-bold text-green-400">{exp.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{exp.company} — {exp.date}</p>
                    <p className="text-gray-300">{exp.description}</p>
                    <div className="mt-4 flex gap-4">
                      {exp.certImages.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt="cert"
                          onClick={() => openModal(img)}
                          className="w-20 h-20 rounded-lg object-cover cursor-pointer hover:scale-105 transition"
                        />
                      ))}
                    </div>
                  </div>
                ) : <div className="w-5/12" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="max-w-xl w-full bg-white p-4 rounded-lg" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage} alt="Certificate" className="w-full rounded" />
            <button onClick={closeModal} className="absolute top-2 right-4 text-black text-2xl">
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
