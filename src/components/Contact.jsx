import React, { useState } from "react";

export  function Contact() {
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
    // You can integrate EmailJS, Formspree, or any backend API here
    alert("Form submitted! (Functionality coming soon)");
  };

  const socials = [
    { name: "LinkedIn", url: "https://linkedin.com/in/vettrivel", icon: "/icons/linkedin.svg" },
    { name: "GitHub", url: "https://github.com/vettrivel", icon: "/icons/github.svg" },
    { name: "Medium", url: "https://medium.com/@vettrivel", icon: "/icons/medium.svg" },
    { name: "TryHackMe", url: "https://tryhackme.com/p/Vettrivel", icon: "/icons/tryhackme.png" },
    { name: "Hack The Box", url: "https://app.hackthebox.com/profile/your-id", icon: "/icons/htb.svg" },
  ];

  return (
    <section id="contact" className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">✉️ Contact Me</h2>
        <p className="text-gray-300 mb-2">Let’s build secure systems together.</p>
        <p className="text-gray-400 mb-6">
          Open for freelance, security assessments, or collaborations.
        </p>

        <p className="text-yellow-400 text-lg mb-6">
          📬 <a href="mailto:uvettrivel007@gmail.com" className="underline">uvettrivel007@gmail.com</a>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm hover:scale-105 transition"
            >
              <img src={social.icon} alt={social.name} className="w-6 h-6" />
              <span>{social.name}</span>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-6 rounded-lg shadow-md space-y-4 max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded h-32 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
