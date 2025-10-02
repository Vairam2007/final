import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar.jsx";
import First from "./pages/First.jsx";
import { Skills } from "./pages/Skills.jsx";
import Project from "./pages/Project.jsx";
import Experience from "./pages/Experience.jsx";
import HallOfFame from "./pages/HallOfFame.jsx";
import { Contact } from "./pages/Contact.jsx";
import FloatingTerminal from "./pages/FloatingTerminal.jsx";
import Certifications from "./pages/Certifications.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/halloffame" element={<HallOfFame />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* ✅ Floating terminal visible on every page */}
        <FloatingTerminal />
      </div>
    </Router>
  );
}

export default App;
