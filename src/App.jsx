import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar.jsx";
import First from "./pages/First.jsx";
import { Skills } from "./pages/Skills.jsx";
import Project from "./pages/Project.jsx";
import { Experience } from "./pages/Experience.jsx";
import HallOfFame  from "./pages/HallOfFame.jsx";
import { Contact } from "./pages/Contact.jsx";
import Count from "./pages/Count.jsx";
import Achievements from "./pages/Achievements.jsx";
import Certifications from "./pages/Certifications.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 from-gray-900 via-gray-800 to-gray-700 text-white dark:text-gray-900 transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/halloffame" element={<HallOfFame />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
