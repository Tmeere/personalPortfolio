import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/heroSection';
import About from '../components/aboutme';
import Projects from '../components/projects';
import Footer from '../components/footer';
import DraggableCharacter from '../components/DraggableCharacter';
import ContactSection from '../components/contactSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app-container"> {/* Updated class name */}
      <HeroSection />
      <Navbar />
      <About />
       <Projects />
       <ContactSection/>
      <Footer />
    </div>
  );
}

export default App;