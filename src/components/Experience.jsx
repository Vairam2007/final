import React from "react";

export function Experience() {
  const timelineItems = [
    {
      title: "Product Security Tool Development Intern",
      company: "Abluva",
      location: "Palo Alto, California (Remote)",
      date: "October 2024 – Present",
      description: (
        <>
          Abluva is a deep-research-driven cybersecurity company pioneering multi-layered data protection solutions. As an intern in the Product Security Tool Development team, I contributed to enhancing security automation and cloud security practices.
        </>
      ),
    },
    {
      title: "Key Contributions",
      description: (
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Developed and optimized security tools to improve vulnerability detection for the Global Security Scanner program.</li>
          <li>Worked on cloud security projects focused on IAM policy assessments, misconfiguration detection, and compliance checks.</li>
          <li>Assisted in automating security assessment processes to strengthen data security across multi-layered environments.</li>
          <li>Collaborated with engineering to integrate threat intelligence insights, enhancing real-time risk detection.</li>
        </ul>
      ),
    },
    {
      title: "Summary",
      description: (
        <>This role provided hands-on experience in security automation, cloud security, and vulnerability assessment, aligning with Abluva’s mission of delivering cutting-edge data security solutions.</>
      ),
    },
    {
      title: "Cybersecurity Engineer",
      company: "CubeAISolutions Tech Pvt Ltd",
      date: "August 2024 – October 2024",
      description: (
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Conducted penetration testing and vulnerability assessments, identifying and mitigating critical security risks.</li>
          <li>Assisted in risk analysis, incident response, and enhancing cybersecurity protocols.</li>
          <li>Delivered strategic security insights and implemented measures to protect company assets.</li>
        </ul>
      ),
    },
  ];

  return (
    <section id="experience" className="bg-[#0e0e0e] text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-16">Work Experience</h2>

        <div className="relative">
          {/* Vertical timeline line - full height */}
          <div className="absolute left-1/2 transform -translate-x-1/2 inset-y-0 w-1 bg-green-600"></div>

          {/* Timeline items */}
          <div className="flex flex-col space-y-16">
            {timelineItems.map((item, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="relative w-full flex items-start justify-between"
                  style={{ minHeight: "140px" }}
                >
                  {/* Left content */}
                  {isLeft ? (
                    <div className="w-5/12 pr-8 text-right">
                      <div className="inline-block bg-gray-900 border border-green-600 rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">
                          {item.title}
                          {item.company ? ` | ${item.company}` : ""}
                        </h3>
                        {item.location && (
                          <p className="text-sm text-gray-400 mb-1">{item.location}</p>
                        )}
                        {item.date && (
                          <p className="text-sm text-gray-400 italic mb-4">{item.date}</p>
                        )}
                        <div className="text-gray-300">{item.description}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-5/12" />
                  )}

                  {/* Timeline dot */}
                  <div className="z-10 flex justify-center items-center w-8 h-8 rounded-full bg-green-400 border-4 border-[#0e0e0e] absolute left-1/2 top-4 transform -translate-x-1/2"></div>

                  {/* Right content */}
                  {!isLeft ? (
                    <div className="w-5/12 pl-8 text-left">
                      <div className="inline-block bg-gray-900 border border-green-600 rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">
                          {item.title}
                          {item.company ? ` | ${item.company}` : ""}
                        </h3>
                        {item.location && (
                          <p className="text-sm text-gray-400 mb-1">{item.location}</p>
                        )}
                        {item.date && (
                          <p className="text-sm text-gray-400 italic mb-4">{item.date}</p>
                        )}
                        <div className="text-gray-300">{item.description}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-5/12" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
