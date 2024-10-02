import './style.css';
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              {/*<Route path="/about" element={<Lavori />} />*/}
              {/*<Route path="/contact" element={<Contatti />} />*/}
          </Routes>
      </Router>
}

export default App;
