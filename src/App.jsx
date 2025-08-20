import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import About from "./components/About";
import { Skills } from "./components/Skills";
import { Project } from "./components/Project";
import { Experience } from "./components/Experience";
import { HallOfFame } from "./components/HallOfFame";
import { Contact } from "./components/Contact";
import Count from "./components/Count";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen bg-gradient-to-br dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 from-gray-900 via-gray-800 to-gray-700 text-white dark:text-gray-900 transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <Hero />
      <About />
      <Count/>
      <HallOfFame />
      <Experience />
      <Skills />
      <Project />
      <Certifications/>
      <Achievements />
      <Contact />
    </div>  
  );
}

export default App;
