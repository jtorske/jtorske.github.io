import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const thresholds = sections.map(id => ({
        id,
        offsetTop: document.getElementById(id).offsetTop
      }));

      const currentSection = thresholds.reduce((acc, section) => {
        return window.scrollY >= section.offsetTop - 50 ? section.id : acc;
      }, 'home');

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <div id="home" className="home-section"><Home /></div>
      <div id="about" className="about-section"><About /></div>
      <div id="projects" className="section"><Projects /></div>
      <div id="contact" className="section"><Contact /></div>
    </div>
  );
}

export default App;
