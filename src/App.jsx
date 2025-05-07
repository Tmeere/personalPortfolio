import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/homePage';
import ProjectDefiance from '../project-Defiance/Defiance';
import ProjectTaxi from '../project-Defiance/MidnightTaxi';
import ProjectTank from '../project-Defiance/TankBuster';
import ProjectPort from '../project-Defiance/Portside';
import ProjectEmo from '../project-Defiance/EmoEdge';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/defiance" element={<ProjectDefiance />} />
        <Route path="/taxi" element={<ProjectTaxi />} />
        <Route path="/tank" element={<ProjectTank />} />
        <Route path="/port" element={<ProjectPort />} />
        <Route path="/emo" element={<ProjectEmo />} />
      </Routes>
    </>
  );
}

export default App;