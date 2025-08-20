import React, { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! I’ll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vettrivel2006",
      icon: "/ALL IMAGES/LOGO/LinkedIn.png",
    },
    {
      name: "GitHub",
      url: "https://github.com/vettrivel007",
      icon: "/ALL IMAGES/LOGO/GitHub.png",
    },
    {
      name: "Medium",
      url: "https://vettrivel007.medium.com/",
      icon: "/ALL IMAGES/LOGO/medium.png",
    },
    {
      name: "TryHackMe",
      url: "https://tryhackme.com/p/vettrivel",
      icon: "/ALL IMAGES/LOGO/tryhackme.png",
    },
    {
      name: "Hack The Box",
      url: "https://app.hackthebox.com/profile/",
      icon: "/ALL IMAGES/LOGO/hackthebox.jpeg",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#0d1117] text-white py-20 px-6 md:px-10 font-sans"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            Whether you want to discuss a project, ask a question, or just say hi —
            I'm always open to new conversations.
          </p>

          <p className="text-md text-gray-400 mb-6">
            Available for freelance work, collaborations, or cybersecurity assessments.
          </p>

          <div className="text-green-300 mb-8">
            📧{" "}
            <a
              href="mailto:uvettrivel007@gmail.com"
              className="underline hover:text-green-200"
            >
              uvettrivel007@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#161b22] px-4 py-2 rounded-md hover:bg-[#1f2937] transition border border-gray-700"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-sm">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-[#161b22] p-8 rounded-xl shadow-lg border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 bg-[#0d1117] text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 bg-[#0d1117] text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                required
                className="w-full px-4 py-2 h-32 bg-[#0d1117] text-white border border-gray-600 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-2 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
