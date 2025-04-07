import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import About from "./pages/About";
import Header from "./components/Header";
import Home from "./pages/Home";
import Events from "./pages/Event";
import TechSympo from "./pages/tech-sympo";
import PaperPresentation from "./pages/Paper-presentation";
import Hackathon from "./pages/Hackthon";
import Codethon from "./pages/Codethon";
import CulturalFest from "./pages/CulturalFest";
import SportsMeet from "./pages/SportsMeet";
import BTech from "./pages/BTech";
import CSE from "./pages/CSE";
import ECE from "./pages/ECE";
import EEE from "./pages/EEE";
import Mech from "./pages/Mech";
import Admission from "./pages/Admission";
import ProgrammeOffered from "./pages/ProgrammeOffered";
import Admissionbatch from "./pages/Admissionbatch";
import Contact from "./pages/Contact";
import Registernow from "./pages/Registernow";
import Apply from "./pages/Apply";
 // Adjust path if needed

 // Adjust the path if needed

function App() {
  return (
    
    
      <div>
        <BrowserRouter>
        <Header/>
       
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tech-sympo" element={<TechSympo />} />
        <Route path="/Paper-presentation" element={<PaperPresentation />} />
        <Route path="/Hackthon" element={<Hackathon />} />
        <Route path="/Codethon" element={<Codethon />} />
        <Route path="/CulturalFest" element={<CulturalFest />} />
        <Route path="/SportsMeet" element={<SportsMeet/>} />
        <Route path="/btech" element={<BTech/>} />
        <Route path="/CSE" element={<CSE/>} />
        <Route path="/ECE" element={<ECE/>} />
        <Route path="/EEE" element={<EEE/>} />
        <Route path="/Mech" element={<Mech/>} />
        <Route path="/admissions" element={<Admission/>} />
        <Route path="/programmes-offered" element={<ProgrammeOffered/>} />
        <Route path="/admission-2024-2025" element={<Admissionbatch/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/register" element={<Registernow/>} />
        <Route path="/apply" element={<Apply/>} />
      </Routes>
      </BrowserRouter>
      </div>
    
  );
}

export default App;
