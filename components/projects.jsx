import { Link } from 'react-router-dom';
import React from 'react';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Games Workshop Website',
      description:
        'Replicated the Games Workshop website using HTML and Bootstrap, focusing on core components. Developed responsive pages (Home, Unique Pages, Product Pages) optimized for all device sizes. Implemented dynamic components to enhance UI/UX and improve user interaction.',
      link: '/games-workshop', // Replace with actual link
      image: './images/games-workshop.jpg', // Replace with actual image path
      date: '2025',
      tags: ['HTML', 'Bootstrap', 'Responsive Design'],
    },
    {
      title: 'Ecommerce Website Using React/JS and Product API',
      description:
        'Developed an eCommerce website using React/JS, fetching product data from an API to display a range of custom products with varying prices, titles, and descriptions. Built reusable, component-based product items with custom inputs for flexibility and scalability. Designed unique Product Details Pages, utilizing props to dynamically pass product information. Created custom Dev Tools for modifying, adding, and deleting products directly from the API.',
      link: 'https://github.com/yourusername/ecommerce-website', // Replace with actual link
      image: './images/ecommerce.jpg', // Replace with actual image path
      date: '2025',
      tags: ['React', 'JavaScript', 'API Integration'],
    },
    {
      title: 'Endless Roguelike Card Game',
      description:
        'Developing an endless 2D deck-building card game featuring procedurally generated content, complex gameplay systems, and strategic management elements. Focused on creating a rich, interactive UI/UX with smooth and dynamic game feel.',
      link: '', // Add link if available
      image: './images/roguelike-card-game.jpg', // Replace with actual image path
      date: '2025',
      tags: ['Unity', 'Deck-Building', 'Procedural Generation'],
    },
    {
      title: 'Mobile Dungeon Crawler',
      description:
        'Developing a procedural, turn-based dungeon crawler with complex character states, abilities, and classes. Focused on alternating combat mechanics and mobile touch-based gameplay for an immersive user experience.',
      link: '', // Add link if available
      image: './images/dungeon-crawler.jpg', // Replace with actual image path
      date: '2025',
      tags: ['Unity', 'Turn-Based', 'Mobile Game'],
    },
    {
      title: 'VR Arcade Shooter',
      description:
        'Leading development as project lead and programmer, designing immersive levels and scalable gameplay systems. Implementing complex AI entities for dynamic combat and creating engaging VR mechanics.',
      link: '', // Add link if available
      image: './images/vr-arcade-shooter.jpg', // Replace with actual image path
      date: '2025',
      tags: ['Unreal Engine', 'VR', 'AI Design'],
    },
    {
      title: 'KAMK Summer Games Exchange Project',
      description:
        'Collaborated with students from European universities to develop a VR high-octane shooter for release on Steam. Led the project as Project Lead, overseeing the entire development cycle, providing strategic direction, and ensuring successful project completion.',
      link: 'https://itch.io', // Replace with actual Itch.io link
      image: './images/kamk-project.jpg', // Replace with actual image path
      date: '2024',
      tags: ['VR', 'Project Management', 'Steam Release'],
    },
    {
      title: 'Midnight Taxi',
      description:
        'Design Lead responsible for the conceptualization and development of game mechanics within a 23-person team. Guided the overall design direction of the game and oversaw and assisted Junior Designers.',
      link: 'https://itch.io', // Replace with actual Itch.io link
      image: './images/midnight-taxi.jpg', // Replace with actual image path
      date: '2024',
      tags: ['Game Design', 'Team Leadership', 'Itch.io'],
    },
    {
      title: 'AI-Appliance',
      description:
        'Junior Programmer within a 23-member team. Created core player mechanics and tested and resolved bugs.',
      link: 'https://itch.io', // Replace with actual Itch.io link
      image: './images/ai-appliance.jpg', // Replace with actual image path
      date: '2023',
      tags: ['Programming', 'Bug Fixing', 'Team Collaboration'],
    },
    {
      title: 'High Octane Runner',
      description:
        'Developed a high-octane parkour runner in Unreal Engine, featuring advanced player movement mechanics and dynamic enemy AI driven by state machines.',
      link: '', // Add link if available
      image: './images/high-octane-runner.jpg', // Replace with actual image path
      date: '2022',
      tags: ['Unreal Engine', 'Parkour', 'AI Design'],
    },
    {
      title: 'Team Fortress 2 Community Map',
      description:
        'Designed and developed a custom 12v12 King of the Hill map, applying multiplayer level design principles and TF2 gameplay mechanics. Conducted user testing to refine balance, player flow, and performance, ensuring a smooth, engaging multiplayer experience.',
      link: '', // Add link if available
      image: './images/tf2-map.jpg', // Replace with actual image path
      date: '2021',
      tags: ['TF2', 'Level Design', 'Multiplayer'],
    },
    {
      title: 'Piksel Student Intern',
      description:
        'Worked on streaming app editors used to configure films for Virgin TV Go.',
      link: '', // Add link if available
      image: './images/piksel-intern.jpg', // Replace with actual image path
      date: '2020',
      tags: ['Internship', 'Streaming Apps', 'Virgin TV Go'],
    },
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image mb-3"
                />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-date text-muted">Date: {project.date}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="badge bg-secondary me-2">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-3"
                  >
                    View Project
                  </a>
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