import Home from "./Macro-Components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from "./Macro-Components/Gallery";
import data from "./Assets/data.json";
import {useState} from "react";
import Lavoro from "./Macro-Components/Lavoro";
import Contatti from "./Macro-Components/Contatti";

function App() {
    const [isMenuOpen, setIsMenuOpen]= useState(false);
    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen);
    }

  return <Router>
          <Routes>
              <Route path="/" element={<Home floors={data.floors} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>} />
              <Route path="/lavori/" element={<Gallery lavori={data.lavori} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>} />
              <Route path="/lavori/:categoria/" element={<Gallery lavori={data.lavori} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>} />*
              <Route path="/lavori/dettaglio/:name/id/:id" element={<Lavoro lavori={data.lavori} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>}/>
              <Route path="/contact" element={<Contatti />}/>
          </Routes>
      </Router>
}

export default App;
