import { Link } from 'react-router-dom';
import React from 'react';
import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faGamepad, faVrCardboard, faBug, faCogs, faTools } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; // Add this line
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Add this line
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; // Add this line

const tagIcons = {
  HTML: faCode,
  Bootstrap: faCode,
  'Responsive Design': faMobileAlt,
  React: faCode,
  JavaScript: faCode,
  'API Integration': faCogs,
  Unity: <FontAwesomeIcon icon={faGamepad} style={{ color: 'white' }} />, // Unity icon in white
  'Deck-Building': faGamepad,
  'Procedural Generation': faCogs,
  'Turn-Based': faGamepad,
  'Mobile Game': faMobileAlt,
  'Unreal Engine': <FontAwesomeIcon icon={faGamepad} style={{ color: 'white' }} />, // Unreal Engine icon in white
  VR: faVrCardboard,
  'AI Design': faCogs,
  'Project Management': faCogs,
  'Steam Release': faGamepad,
  'Game Design': faGamepad,
  'Team Leadership': faCogs,
  Programming: faCode,
  'Bug Fixing': faBug,
  'Team Collaboration': faCogs,
  'Parkour': faGamepad,
  'Level Design': faGamepad,
  Multiplayer: faGamepad,
  Internship: faCogs,
  'Streaming Apps': faCogs,
  'Virgin TV Go': faCogs,
};

const Projects = () => {
  const projects = [
    {
      title: 'Games Workshop Website',
      description: (
        <>
          Replicated the <span className="blue-bold">Games Workshop</span> website using <span className="blue-bold">HTML</span> and <span className="blue-bold">Bootstrap</span>, focusing on core components. Developed <span className="blue-bold">responsive pages</span> (Home, Unique Pages, Product Pages) optimized for all device sizes. Implemented <span className="blue-bold">dynamic components</span> to enhance UI/UX and improve user interaction.
        </>
      ),
      link: '/games-workshop',
      image: './images/Site Files/GW Website.png', // Replace with the path to your saved image
      date: '2025',
      tags: ['HTML', 'Bootstrap', 'Responsive Design'],
    },
    {
      title: 'Ecommerce Website Using React/JS and Product API',
      description: (
        <>
          Developed an <span className="blue-bold">eCommerce website</span> using <span className="blue-bold">React/JS</span>, fetching product data from an <span className="blue-bold">API</span> to display a range of custom products with varying prices, titles, and descriptions.
        </>
      ),
      link: 'https://yourwebsite.com',
      github: 'https://github.com/yourusername/ecommerce-website',
      externalLink: '',
      image: './images/Site Files/Ecommerce Webstore.png',
      date: '2025',
      tags: ['React', 'JavaScript', 'API Integration'],
    },
    {
      title: 'Endless Roguelike Card Game',
      description: (
        <>
          Developing an endless 2D <span className="blue-bold">deck-building card game</span> featuring <span className="blue-bold">procedurally generated content</span>, complex gameplay systems, and strategic management elements. Focused on creating a rich, interactive <span className="blue-bold">UI/UX</span> with smooth and dynamic game feel.
        </>
      ),
      link: '',
      image: './images/roguelike-card-game.jpg',
      date: '2025',
      tags: ['Unity','Deck-Builder', 'Procedural Gen'],
      inDevelopment: true,
    },
    {
      title: 'Haunts',
      description: (
        <>
          Developing a procedural, <span className="blue-bold">turn-based dungeon crawler</span> with complex character states, abilities, and classes. Focused on alternating combat mechanics and <span className="blue-bold">mobile touch-based gameplay</span> for an immersive user experience.
        </>
      ),
      link: '',
      image: './images/dungeon-crawler.jpg',
      date: '2025',
      tags: ['Unity', 'Turn-Based', 'Mobile Game'],
    },
    {
      title: 'BloodDrunk',
      description: (
        <>
          Leading development as <span className="blue-bold">project lead</span> and programmer, designing immersive levels and scalable gameplay systems. Implementing complex <span className="blue-bold">AI entities</span> for dynamic combat and creating engaging <span className="blue-bold">VR mechanics</span>.
        </>
      ),
      link: '',
      image: './images/Site Files/Blood_Drunk.png',
      date: '2025',
      tags: ['Unreal Engine', 'VR', 'AI Design'],
      inDevelopment: true,

    },
    {
      title: 'KAMK Summer Games Exchange Project',
      description: (
        <>
          Collaborated with students from European universities to develop a <span className="blue-bold">VR high-octane shooter</span> for release on <span className="blue-bold">Steam</span>. Led the project as <span className="blue-bold">Project Lead</span>, overseeing the entire development cycle, providing strategic direction, and ensuring successful project completion.
        </>
      ),
      link: 'https://itch.io',
      image: '',
      date: '2024',
      tags: ['VR', 'Project Management', 'Steam Release'],
    },
    {
      title: 'Tank Busters',
      description: (
        <>
          Collaborated with students from European universities to develop a <span className="blue-bold">VR high-octane shooter</span> for release on <span className="blue-bold">Steam</span>. Led the project as <span className="blue-bold">Project Lead</span>, overseeing the entire development cycle, providing strategic direction, and ensuring successful project completion.
        </>
      ),
      link: 'https://itch.io',
      image: '',
      date: '2024',
      tags: ['VR', 'Project Management', 'Steam Release'],
    },
    {
      title: 'Midnight Taxi',
      description: (
        <>
          <span className="blue-bold">Design Lead</span> responsible for the conceptualization and development of <span className="blue-bold">game mechanics</span> within a 23-person team. Guided the overall <span className="blue-bold">design direction</span> of the game and oversaw and assisted <span className="blue-bold">Junior Designers</span>.
        </>
      ),
      link: 'https://itch.io',
      image: './images/Site Files/TechDesign.png',
      date: '2024',
      tags: ['Game Design', 'Team Leadership', 'Itch.io'],
    },
    {
      title: 'AI-Appliance',
      description: (
        <>
          <span className="blue-bold">Junior Programmer</span> within a 23-member team. Created <span className="blue-bold">core player mechanics</span> and tested and resolved <span className="blue-bold">bugs</span>.
        </>
      ),
      link: 'https://itch.io',
      image: './images/Site Files/AIApplianceDefianceRender.png',
      date: '2023',
      tags: ['Programming', 'Bug Fixing', 'Team Collaboration'],
    },
    {
      title: 'High Octane Runner',
      description: (
        <>
          Developed a <span className="blue-bold">high-octane parkour runner</span> in <span className="blue-bold">Unreal Engine</span>, featuring advanced <span className="blue-bold">player movement mechanics</span> and dynamic <span className="blue-bold">enemy AI</span> driven by state machines.
        </>
      ),
      link: '',
      image: './images/Site Files/IntroScreen.png',
      date: '2022',
      tags: ['Unreal Engine', 'Parkour', 'AI Design'],
    },
    {
      title: 'Team Fortress 2 Community Map',
      description: (
        <>
          Designed and developed a custom <span className="blue-bold">12v12 King of the Hill map</span>, applying <span className="blue-bold">multiplayer level design principles</span> and <span className="blue-bold">TF2 gameplay mechanics</span>. Conducted <span className="blue-bold">user testing</span> to refine balance, player flow, and performance, ensuring a smooth, engaging multiplayer experience.
        </>
      ),
      link: '',
      image: './images/Site Files/Portside.png',
      date: '2021',
      tags: ['TF2', 'Level Design', 'Multiplayer'],
    }
  ];

  return (
    <section id="projects" className="projects container-fluid py-5">
      <div className="text-center mb-4">
        <h2>Projects</h2>
      </div>
      <div className="projects-container d-flex flex-wrap justify-content-center">
        {/* Projects List */}
        <ul className="projects-list d-flex flex-wrap justify-content-center w-100">
          {projects.map((project, index) => (
            <li key={index} className="project-item mb-4">
              <div className="project-card p-3 shadow-sm rounded">
                <h3 className="project-title">{project.title}</h3>
                {project.image && project.image.trim() !== '' && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image mb-3"
                    onError={e => (e.target.style.display = 'none')}
                  />
                )}
                <p className="project-description">{project.description}</p>
                <p className="project-date text-muted">Date: {project.date}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      <FontAwesomeIcon icon={tagIcons[tag] || faCode} className="me-2" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links mt-3 d-flex justify-content-center">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gradient me-2"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark me-2"
                    >
                      <FontAwesomeIcon icon={faGithub} className="me-2" />
                      GitHub
                    </a>
                  )}
                  {project.externalLink && (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <FontAwesomeIcon icon={faGlobe} className="me-2" />
                      Web Link
                    </a>
                  )}
                </div>

                {project.inDevelopment && (
                  <div className="badge-container w-100 text-center mt-3">
                    <span className="badge bg-warning text-dark">
                      <FontAwesomeIcon icon={faTools} className="me-2" />
                      In Development
                      <FontAwesomeIcon icon={faTools} className="ms-2" />
                    </span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;