import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from "./Components/Gallery";
import data from "./Assets/data.json";
import {useState} from "react";

function App() {
    const [isMenuOpen, setIsMenuOpen]= useState(false);
    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen);
    }

  return <Router>
          <Routes>
              <Route path="/" element={<Home floors={data.floors} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>} />
              <Route path="/lavori" element={<Gallery lavori={data.lavori} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>} />
              {/*<Route path="/contact" element={<Contatti />} />*/}
          </Routes>
      </Router>
}

export default App;
