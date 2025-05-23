import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/heroSection';
import About from '../components/aboutme';
import Projects from '../components/projects';
import Footer from '../components/footer';
import DraggableCharacter from '../components/DraggableCharacter';
import ContactSection from '../components/contactSection';
import ProjectNavbar from '../components/projectComponents/ProjectNavbar';
import Divider from '../components/divider';
import ProjectHeroSection from './projectComponents/ProjectHeroSection'
import ProjectVidAndText from './projectComponents/ProjectVid&Text'; // <-- Import the component
import 'bootstrap/dist/css/bootstrap.min.css';
import './homePage.css'; // Import homePage.css

function HomePage() {
  return (
    <div className="app-container">
      <HeroSection />
      <Navbar />
      <Divider id="about" />
      <About />
      <Divider id="projects" />
      <Projects />
      <Divider id="contact" />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default HomePage;