import "./App.css"
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Navbar from './components/Navbar'

function App() {
  return (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/experience" element = {<Experience />} />
        <Route path = "/skills" element = {<Skills />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
