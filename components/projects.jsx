import React, { useEffect, useRef, useState } from 'react';
import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faGamepad, faVrCardboard, faBug, faCogs, faTools } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; // Add this line
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Add this line
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const categoryMeta = {
  web: { label: 'Web' },
  game: { label: 'Game' },
  script: { label: 'Script' },
};

const tagIcons = {
  HTML: faCode,
  Bootstrap: faCode,
  'Responsive Design': faMobileAlt,
  React: faCode,
  JavaScript: faCode,
  'API Integration': faCogs,
  Unity: faGamepad,
  'Deck-Building': faGamepad,
  'Procedural Generation': faCogs,
  'Turn-Based': faGamepad,
  'Mobile Game': faMobileAlt,
  'Unreal Engine': faGamepad,
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
    // 1. Modern web dev & API
    {
      title: "Games Workshop Website",
      description: (
        <>
          Replicated the <span className="blue-bold">Games Workshop</span>{" "}
          website using <span className="blue-bold">HTML</span> and{" "}
          <span className="blue-bold">Bootstrap</span>, focusing on core
          components. Developed{" "}
          <span className="blue-bold">responsive pages</span> (Home, Unique
          Pages, Product Pages) optimized for all device sizes. Implemented{" "}
          <span className="blue-bold">dynamic components</span> to enhance UI/UX
          and improve user interaction.
        </>
      ),
      link: "https://warhammermocksite.netlify.app/",
      github: "https://github.com/Tmeere/MakingFavouriteWebsite",
      image: "./images/Site Files/GW Website.png", // Replace with the path to your saved image
      date: "2025",
      tags: ["HTML", "Bootstrap", "Responsive Design"],
      category: "web",
      subLabel: "Frontend",
    },
    {
      title: "Ecommerce Website (Product API)",
      description: (
        <>
          Developed an <span className="blue-bold">eCommerce website</span>{" "}
          using <span className="blue-bold">React/JS</span>, fetching product
          data from an <span className="blue-bold">API</span> to display a range
          of custom products with varying prices, titles, and descriptions.
        </>
      ),
      link: "https://tmeere-fakestore.netlify.app/",
      github: "https://github.com/Tmeere/fakestoreAppV1",
      externalLink: "",
      image: "./images/Site Files/Ecommerce Webstore.png",
      date: "2025",
      tags: ["React", "JavaScript", "API Integration"],
      category: "web",
      subLabel: "Backend",
    },
    {
      title: "Mechanic Shop API",
      description: (
        <>
          Built a <span className="blue-bold">RESTful API</span> for a mechanic
          shop management system using <span className="blue-bold">Flask</span>{" "}
          and <span className="blue-bold">MySQL</span>, managing customers,
          mechanics, service tickets, and parts inventory with authentication
          for both customers and staff.
        </>
      ),
      link: "https://mechanicshopapi.onrender.com/api/docs/",
      github:
        "https://github.com/Tmeere/MechanicShopAPI?tab=readme-ov-file#mechanic-shop-management-system",
      image: "./images/Site Files/Mechanic API.png",
      date: "2025",
      tags: ["React", "JavaScript", "API Integration"],
      category: "web",
      subLabel: "Backend",
    },

    // 2. Game dev leadership & VR
    {
      title: "BloodDrunk",
      description: (
        <>
          Leading development as <span className="blue-bold">project lead</span>{" "}
          and programmer, designing immersive levels and scalable gameplay
          systems. Implementing complex{" "}
          <span className="blue-bold">AI entities</span> for dynamic combat and
          creating engaging <span className="blue-bold">VR mechanics</span>.
        </>
      ),
      link: "/blood", // Updated to route to BloodDrunk page
      image: "./images/Site Files/Blood_Drunk.png",
      date: "2025",
      tags: ["Unreal Engine", "VR", "AI Design"],
      inDevelopment: true,
      category: "game",
      subLabel: "VR",
      featured: true,
    },
    {
      title: "Tank Busters",
      description: (
        <>
          Led development as <span className="blue-bold">Project Lead</span> on
          a <span className="blue-bold">VR high-octane tank shooter</span>,
          overseeing the entire development cycle, providing strategic
          direction, and steering the team toward a planned release on{" "}
          <span className="blue-bold">Steam</span>.
        </>
      ),
      link: "/tank",
      image: "./images/Site Files/TankBuster.png",
      date: "2024",
      tags: ["VR", "Project Management", "Steam Release"],
      category: "game",
      featured: true,
    },
    {
      title: "KAMK Summer Games Exchange Project",
      description: (
        <>
          Spent a summer at{" "}
          <span className="blue-bold">Kajaani University of Applied Sciences</span>{" "}
          (Finland), collaborating with an international team of students
          from European universities to build <span className="blue-bold">Tank Busters</span>{" "}
          from concept to vertical slice, gaining hands-on experience in VR
          development and cross-cultural team collaboration.
        </>
      ),
      image: "",
      date: "2024",
      tags: ["VR", "Project Management", "Team Collaboration"],
      category: "game",
      archive: true,
    },

    // 3. Game dev (in development, Unity/Unreal)
    {
      title: "Endless Roguelike Card Game",
      description: (
        <>
          Developing an endless 2D{" "}
          <span className="blue-bold">deck-building card game</span> featuring{" "}
          <span className="blue-bold">procedurally generated content</span>,
          complex gameplay systems, and strategic management elements. Focused
          on creating a rich, interactive{" "}
          <span className="blue-bold">UI/UX</span> with smooth and dynamic game
          feel.
        </>
      ),
      link: "",
      image: "./images/roguelike-card-game.jpg",
      date: "2025",
      tags: ["Unity", "Deck-Builder", "Procedural Gen"],
      inDevelopment: true,
      category: "game",
      archive: true,
    },
    {
      title: "Haunts",
      description: (
        <>
          Developing a procedural,{" "}
          <span className="blue-bold">turn-based dungeon crawler</span> with
          complex character states, abilities, and classes. Focused on
          alternating combat mechanics and{" "}
          <span className="blue-bold">mobile touch-based gameplay</span> for an
          immersive user experience.
        </>
      ),
      link: "",
      image: "./images/Site Files/Haunts.png",
      date: "2025",
      tags: ["Unity", "Turn-Based", "Mobile Game"],
      inDevelopment: true,
      category: "game",
    },
    {
      title: "Midnight Taxi",
      description: (
        <>
          <span className="blue-bold">Design Lead</span> responsible for the
          conceptualization and development of{" "}
          <span className="blue-bold">game mechanics</span> within a 23-person
          team. Guided the overall{" "}
          <span className="blue-bold">design direction</span> of the game and
          oversaw and assisted{" "}
          <span className="blue-bold">Junior Designers</span>.
        </>
      ),
      link: "/taxi",
      externalLink: "https://group-twenty8.itch.io/midnight-taxi",
      image: "./images/Site Files/TechDesign.png",
      date: "2024",
      tags: ["Game Design", "Team Leadership", "Itch.io"],
      category: "game",
    },
    {
      title: "Emo-Edge",
      description: (
        <>
          Developed a{" "}
          <span className="blue-bold">high-octane parkour runner</span> in{" "}
          <span className="blue-bold">Unreal Engine</span>, featuring advanced{" "}
          <span className="blue-bold">player movement mechanics</span> and
          dynamic <span className="blue-bold">enemy AI</span> driven by state
          machines.
        </>
      ),
      link: "/emo",
      image: "./images/Site Files/EmoSplash.png",
      date: "2022",
      tags: ["Unreal Engine", "Parkour", "AI Design"],
      category: "game",
    },

    // 4. Classic web dev
    {
      title: "Event Center Website",
      description: (
        <>
          Built a{" "}
          <span className="blue-bold">responsive multi-page website</span> for a
          fictional event center using <span className="blue-bold">HTML</span>,{" "}
          <span className="blue-bold">CSS</span>, and{" "}
          <span className="blue-bold">Bootstrap</span>. Features include{" "}
          <span className="blue-bold">event schedules</span>,{" "}
          <span className="blue-bold">venue information</span>, and{" "}
          <span className="blue-bold">contact forms</span>. Designed to practice
          front-end development, layout structuring, and user interface design.
        </>
      ),
      link: "", // Add a live link if deployed
      github: "https://github.com/Tmeere/Bootstrap-Basics",
      image: "./images/Site Files/Events Page.png",
      date: "2025",
      tags: ["HTML", "CSS", "Bootstrap", "Frontend"],
      category: "web",
      subLabel: "Frontend",
    },

    // 5. Team/Collaboration/Internship
    {
      title: "Appliance-Defiance",
      description: (
        <>
          <span className="blue-bold">Junior Programmer</span> within a
          23-member team. Created{" "}
          <span className="blue-bold">core player mechanics</span> and
          identified and resolved <span className="blue-bold">bugs</span>{" "}
          throughout development.
        </>
      ),
      link: "/defiance", 
      image: "./images/Site Files/AIApplianceDefianceRender.png",
      date: "2023",
      tags: ["Programming", "Bug Fixing", "Team Collaboration"],
      category: "game",
    },

    // 6. Level design & older projects
    {
      title: "Team Fortress 2 Community Map",
      description: (
        <>
          Designed and developed a custom{" "}
          <span className="blue-bold">12v12 King of the Hill map</span>,
          applying{" "}
          <span className="blue-bold">multiplayer level design principles</span>{" "}
          and <span className="blue-bold">TF2 gameplay mechanics</span>.
          Conducted <span className="blue-bold">user testing</span> to refine
          balance, player flow, and performance, ensuring a smooth, engaging
          multiplayer experience.
        </>
      ),
      link: "/port",
      image: "./images/Site Files/Portside.png",
      date: "2021",
      tags: ["TF2", "Level Design", "Multiplayer"],
      category: "game",
    },

    // 7. Python/terminal projects (at the bottom)
  ]; // <-- Move Python projects below

  // Add Python projects at the end
  projects.push(
    {
      title: "Todo App (Python Terminal)",
      description: (
        <>
          A{" "}
          <span className="blue-bold">
            Python terminal-based Todo application
          </span>{" "}
          that allows users to{" "}
          <span className="blue-bold">add, edit, and delete tasks</span>{" "}
          directly from the command line. Demonstrates use of{" "}
          <span className="blue-bold">functions and loops</span> for a simple, interactive experience.
        </>
      ),
      link: "", // Add link if hosted
      github: "https://github.com/Tmeere/ToDo-Application",
      image: "./images/Site Files/TaskManager.png",
      date: "2025",
      tags: ["Python"],
      category: "script",
      archive: true,
    },
    {
      title: "Evil Wizard Python Game",
      description: (
        <>
          A <span className="blue-bold">turn-based fantasy terminal RPG</span>{" "}
          where players battle an evil wizard using{" "}
          <span className="blue-bold">class-based mechanics</span> and{" "}
          <span className="blue-bold">ASCII UI elements</span>. Built in{" "}
          <span className="blue-bold">Python</span> to demonstrate use of
          functions, loops, and basic game logic.
        </>
      ),
      link: "", // Add link if hosted
      github: "https://github.com/Tmeere/Evil-Wizard-V1",
      image: "./images/Site Files/Evil Wizard.png",
      date: "2025",
      tags: ["Python", "RPG", "Turn-Based", "ASCII"],
      category: "script",
      archive: true,
    }
  );

  const gridProjects = projects.filter((project) => !project.archive);
  const archiveProjects = projects
    .filter((project) => project.archive)
    .sort((a, b) => parseInt(b.date, 10) - parseInt(a.date, 10));

  const trackRef = useRef(null);
  const sliderRef = useRef(null);
  const draggingRef = useRef(false);
  const [thumb, setThumb] = useState({ width: 100, left: 0 });

  const updateThumb = () => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    if (scrollWidth <= clientWidth) {
      setThumb({ width: 100, left: 0 });
      return;
    }
    const widthPct = (clientWidth / scrollWidth) * 100;
    const maxScroll = scrollWidth - clientWidth;
    const leftPct = (scrollLeft / maxScroll) * (100 - widthPct);
    setThumb({ width: widthPct, left: leftPct });
  };

  useEffect(() => {
    updateThumb();
    const el = trackRef.current;
    if (!el) return undefined;
    el.addEventListener('scroll', updateThumb, { passive: true });
    window.addEventListener('resize', updateThumb);
    return () => {
      el.removeEventListener('scroll', updateThumb);
      window.removeEventListener('resize', updateThumb);
    };
  }, [gridProjects.length]);

  const scrollByAmount = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.85 * direction, behavior: 'smooth' });
  };

  const scrollToRatio = (ratio) => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollLeft = Math.max(0, Math.min(maxScroll, ratio * maxScroll));
  };

  const updateFromPointer = (e) => {
    const track = sliderRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    scrollToRatio(Math.max(0, Math.min(1, ratio)));
  };

  const handleSliderPointerDown = (e) => {
    draggingRef.current = true;
    sliderRef.current?.setPointerCapture(e.pointerId);
    updateFromPointer(e);
  };

  const handleSliderPointerMove = (e) => {
    if (!draggingRef.current) return;
    updateFromPointer(e);
  };

  const handleSliderPointerUp = (e) => {
    draggingRef.current = false;
    if (sliderRef.current?.hasPointerCapture(e.pointerId)) {
      sliderRef.current.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section id="projects" className="projects section">
      <p className="kicker">// projects</p>
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-carousel">
        <button
          type="button"
          className="projects-carousel-arrow projects-carousel-arrow--prev"
          onClick={() => scrollByAmount(-1)}
          aria-label="Scroll to previous projects"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <ul className="projects-grid" ref={trackRef}>
        {gridProjects.map((project, index) => (
          <li
            key={index}
            data-category={project.category}
            className={`project-card panel${project.featured ? ' project-card--featured' : ''}`}
          >
            <div className="project-eyebrow">
              <span className={`project-pin project-pin--${project.category}`} />
              <span className="project-category-label">{project.subLabel || categoryMeta[project.category]?.label}</span>
              <span className="project-eyebrow-date">{project.date}</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            {project.image && project.image.trim() !== '' && (
              <div className="project-image-frame">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => (e.target.style.display = 'none')}
                />
              </div>
            )}
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="chip">
                  <FontAwesomeIcon icon={tagIcons[tag] || faCode} />
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.link && project.link.startsWith('/') ? (
                <NavLink to={project.link} className="btn btn-primary">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  View Project
                </NavLink>
              ) : project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  View Project
                </a>
              ) : null}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <FontAwesomeIcon icon={faGithub} />
                  GitHub
                </a>
              )}
              {project.externalLink && (
                <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <FontAwesomeIcon icon={faGlobe} />
                  Web Link
                </a>
              )}
            </div>

            {project.inDevelopment && (
              <div className="project-wip">
                <FontAwesomeIcon icon={faTools} />
                In Development
                <FontAwesomeIcon icon={faTools} />
              </div>
            )}
          </li>
        ))}
        </ul>

        <button
          type="button"
          className="projects-carousel-arrow projects-carousel-arrow--next"
          onClick={() => scrollByAmount(1)}
          aria-label="Scroll to next projects"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div
        className="projects-carousel-slider"
        ref={sliderRef}
        onPointerDown={handleSliderPointerDown}
        onPointerMove={handleSliderPointerMove}
        onPointerUp={handleSliderPointerUp}
        onPointerCancel={handleSliderPointerUp}
        role="slider"
        tabIndex={0}
        aria-label="Projects carousel scroll position"
        aria-valuenow={Math.round(thumb.left)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="projects-carousel-slider-thumb" style={{ width: `${thumb.width}%`, marginLeft: `${thumb.left}%` }} />
      </div>

      {archiveProjects.length > 0 && (
        <div className="projects-archive">
          <p className="archive-label">// archive — smaller experiments &amp; practice builds</p>
          <ul className="archive-list">
            {archiveProjects.map((project, index) => (
              <li key={index} data-category={project.category} className="archive-row">
                <span className={`project-pin project-pin--${project.category}`} />
                <span className="archive-title">{project.title}</span>
                <div className="archive-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="archive-tag">{tag}</span>
                  ))}
                </div>
                <span className="archive-date">{project.date}</span>
                <div className="archive-links">
                  {project.link && (
                    project.link.startsWith('/') ? (
                      <NavLink to={project.link} aria-label={`View ${project.title}`}>
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </NavLink>
                    ) : (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}>
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                    )
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Projects;