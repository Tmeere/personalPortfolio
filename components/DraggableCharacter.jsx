import React, { useState, useEffect } from 'react';
import './DraggableCharacter.css';

// Example project data (imported or passed as props)
const projects = [
  { name: 'Portfolio', x: 300, y: 200, width: 150, height: 150 },
  { name: 'E-Commerce', x: 600, y: 400, width: 150, height: 150 },
];

const DraggableCharacter = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState('Hello! Drag me around!');
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x + window.scrollX,
      y: e.clientY - position.y + window.scrollY,
    });
    setShowMessage(true);
    setMessage('Wheee! I\'m moving!');
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);

      // Check if the character is dropped on a project
      let droppedOnProject = false;

      projects.forEach((project) => {
        const rect = {
          left: project.x,
          right: project.x + project.width,
          top: project.y,
          bottom: project.y + project.height,
        };

        if (
          position.x >= rect.left &&
          position.x <= rect.right &&
          position.y >= rect.top &&
          position.y <= rect.bottom
        ) {
          setMessage(`This is the ${project.name} project!`);
          droppedOnProject = true;
        }
      });

      if (!droppedOnProject) {
        setMessage('Thanks for the ride!');
      }

      setTimeout(() => setShowMessage(false), 2000);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - offset.x + window.scrollX,
          y: e.clientY - offset.y + window.scrollY,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset, position]);

  return (
    <div>
      {showMessage && (
        <div
          className="speech-bubble"
          style={{
            left: `${position.x}px`,
            top: `${position.y - 50}px`,
          }}
        >
          {message}
        </div>
      )}

      <div
        className="draggable-character"
        style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: isDragging ? 'grabbing' : 'grab',
          transform: isDragging ? 'scale(1.5)' : 'scale(1)',
          transition: isDragging ? 'none' : 'left 0.2s, top 0.2s, transform 0.2s',
        }}
        onMouseDown={handleMouseDown}
        role="button"
        aria-label="Draggable character"
      >
        🧍
      </div>

      {/* Dynamically render project areas */}
      {projects.map((project, index) => (
        <div
          key={index}
          className="project"
          data-name={project.name}
          style={{
            position: 'absolute',
            left: `${project.x}px`,
            top: `${project.y}px`,
            width: `${project.width}px`,
            height: `${project.height}px`,
            backgroundColor: 'lightblue',
            border: '1px solid blue',
          }}
        >
          {project.name} Project
        </div>
      ))}
    </div>
  );
};

export default DraggableCharacter;