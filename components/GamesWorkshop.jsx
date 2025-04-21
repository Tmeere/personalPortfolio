import React from 'react';

const GamesWorkshop = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Games Workshop Website</h1>
      <p>
        This project is a replication of the <strong>Games Workshop</strong> website, built using <strong>HTML</strong> and <strong>Bootstrap</strong>. It focuses on creating responsive pages optimized for all device sizes and implementing dynamic components to enhance user interaction.
      </p>
      <ul>
        <li>Responsive design for Home, Unique Pages, and Product Pages.</li>
        <li>Dynamic components for improved UI/UX.</li>
        <li>Optimized for all device sizes.</li>
      </ul>
      <img
        src="./images/games-workshop.jpg"
        alt="Games Workshop Project"
        className="img-fluid rounded mt-4"
      />
    </div>
  );
};

export default GamesWorkshop;