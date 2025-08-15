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
    alert("Form submitted! (Functionality coming soon)");
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
      className="bg-gradient-to-b from-gray-900 via-black to-black text-white py-20 px-6 md:px-12 font-mono"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
          ✉️ Contact Me
        </h2>

        <p className="text-gray-300 mb-2">
          Let’s build secure systems together.
        </p>

        <p className="text-gray-400 mb-6">
          Open for freelance, security assessments, or collaborations.
        </p>

        <p className="text-yellow-400 text-lg mb-8">
          📬{" "}
          <a
            href="mailto:uvettrivel007@gmail.com"
            className="underline hover:text-yellow-300"
          >
            uvettrivel007@gmail.com
          </a>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 flex-wrap mb-12">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 hover:shadow-[0_0_12px_#22c55e] transition-all transform hover:scale-105 text-sm"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-6 h-6"
              />
              <span>{social.name}</span>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-6 rounded-lg border border-green-600 transition-transform duration-300 hover:scale-105 hover:shadow-[-12px_12px_0px_#22c55e] max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full m-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-green-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full m-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-green-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full m-1 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded h-32 resize-none focus:outline-none focus:border-green-500"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition-all hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
