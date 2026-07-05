import React from 'react';
import Navbar from '../components/navbar';
import About from '../components/aboutme';
import Projects from '../components/projects';
import Footer from '../components/footer';
import ContactSection from '../components/contactSection';
import './homePage.css'; // Import homePage.css

function HomePage() {
  return (
    <div className="app-container">
      <Navbar />
      <About />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default HomePage;