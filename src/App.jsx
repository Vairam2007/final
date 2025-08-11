import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import  {Hero } from './components/Hero.jsx';
import About  from './components/About.jsx';
import { Skills } from "./components/Skills.jsx";
import { Project } from "./components/Project.jsx";
import {Experience} from "./components/Experience.jsx";
import {HallOfFame} from "./components/HallOfFame.jsx";
import {Contact} from "./components/Contact.jsx";

function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      {/* Your content goes here */}
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
      <HallOfFame/>
      <Contact/>
    </div>
  );  
}

export default App;
