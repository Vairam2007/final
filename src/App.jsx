import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { Hero } from './components/Hero.tsx';
import About  from './components/About.jsx';


function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      {/* Your content goes here */}
      <Hero/>
      <About/>
    </div>
  );  
}

export default App;
