import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/homePage';
import ProjectDefiance from '../project-Defiance/Defiance';
import ProjectTaxi from '../project-Defiance/MidnightTaxi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/defiance" element={<ProjectDefiance />} />
        <Route path="/taxi" element={<ProjectTaxi />} />
      </Routes>
    </>
  );
}

export default App;