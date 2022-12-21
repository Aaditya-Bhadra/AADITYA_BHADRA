import './App.css';
import Home from './Components/Home';
import React from "react";
import Resume from "./Components/resume/Resume";
import Certification from "./Components/Certification"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/resume" element={<Resume/>} />
          <Route path="/Certifications" element={<Certification/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
