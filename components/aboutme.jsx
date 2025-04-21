import React, { useEffect, useRef } from 'react';
import './aboutme.css';

const AboutMe = () => {
  const skills = {
    programmingLanguages: [
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'HTML/CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Blueprint', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
    ],
    frameworks: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    ],
    tools: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Jira', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
      { name: 'Blender', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
      { name: 'Unity', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
      { name: 'Unreal Engine', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
      { name: '3Ds Max', logo: '/images/3ds.png' }, // Updated with provided image
      { name: 'Fusion 360', logo: '/images/fusion.png' }, // Updated with provided image
    ],
    technicalSkills: [
      { name: 'Rapid Prototyping', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Level Design', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
      { name: 'Game Balancing', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
      { name: 'UI/UX Design', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg' },
      { name: 'Procedural Modeling', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
      { name: 'VR/AR Development', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
      { name: 'Automated Testing', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
      { name: 'Manual Testing', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
      { name: 'Test-Driven Development', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
  };

  const badgeRefs = useRef([]);
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    badgeRefs.current.forEach((badge) => {
      if (badge) observer.observe(badge);
    });

    if (aboutMeRef.current) {
      observer.observe(aboutMeRef.current);
    }

    return () => {
      badgeRefs.current.forEach((badge) => {
        if (badge) observer.unobserve(badge);
      });

      if (aboutMeRef.current) {
        observer.unobserve(aboutMeRef.current);
      }
    };
  }, []);

  return (
    <section id="" className="about-me container-fluid py-5">
      <div className="row">
        {/* About Me Section */}
        <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start" ref={aboutMeRef}>
          <img
            src="/images/Me.jpg"
            alt="About Me"
            className="about-me-image img-fluid rounded-circle mb-4"
          />
          <div>
            <h1 className="mb-4 text-center text-md-start">About Me</h1>
            <p className="about-me-text text-center text-md-start">
              I am a passionate Game Developer currently working at Bitmask Games, where I specialize in Unity-based
              projects and retro gaming solutions. When I'm not crafting gaming experiences, I focus on full-stack
              development, constantly exploring new technologies and expanding my skill set. I thrive on tackling new
              challenges and bringing innovative ideas to life. I’m deeply committed to contributing to the tech
              community and pushing the boundaries of what’s possible in the ever-evolving world of technology.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="col-md-6">
          <h2 className="text-center">Skills</h2>
          <div className="skills-section d-flex flex-wrap justify-content-center">
            {Object.values(skills)
              .flat()
              .map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-badge d-flex flex-column align-items-center m-2"
                  ref={(el) => (badgeRefs.current[index] = el)}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="skill-logo mb-1"
                  />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-12">
          <h2 className="mb-4 text-center">Areas of Expertise</h2>
          <ul className="expertise-list text-start">
            <li className="mb-2">
              <strong>Game Development:</strong> Proficient in Unity and Unreal Engine, with experience in creating
              immersive gameplay and retro gaming solutions.
            </li>
            <li className="mb-2">
              <strong>Full-Stack Development:</strong> Skilled in building scalable web applications using React,
              Node.js, and Flask.
            </li>
            <li className="mb-2">
              <strong>3D Modeling & Animation:</strong> Expertise in Blender and 3ds Max for creating high-quality
              assets and animations.
            </li>
            <li className="mb-2">
              <strong>VR/AR Development:</strong> Experienced in designing and developing virtual and augmented reality
              experiences.
            </li>
            <li className="mb-2">
              <strong>Quality Assurance:</strong> Proficient in automated testing, manual testing, and test-driven
              development to ensure software reliability.
            </li>
          </ul>
        </div>
      </div>



      <div className="row">
        <div className="col-12">
        <h2 className="mb-4 mt-2 text-center">Work Experience</h2>
        <ul className="work-experience-list">
            <li className="work-experience-item">
              <img
                src="/images/CT_LOGO_NEW.jpg"
                alt="Coding Temple Logo"
                className="work-experience-image"
              />
              <div className="work-experience-content">
                <strong>Coding Temple Apprentice</strong>
                <em>Coding Temple | Remote | (Present)</em>
                <ul>
                  <li>
                    Completed 9+ hands-on, project-based assignments covering full-stack web development using modern
                    technologies including Flask, React.js, SQL, and RESTful APIs.
                  </li>
                  <li>
                    Actively participated in live workshops, enhancing collaboration and technical problem-solving
                    skills.
                  </li>
                  <li>
                    Consistently exceeded assignment expectations by implementing advanced features, optimizing
                    functionality, and expanding project scope—while meeting assigned deadlines.
                  </li>
                </ul>
              </div>
            </li>
            <li className="work-experience-item">
              <img
                src="/images/BitmaskLogo.jpg"
                alt="Bitmask Games Logo"
                className="work-experience-image"
              />
              <div className="work-experience-content">
                <strong>Game Developer</strong>
                <em>Bitmask Games | Rhode Island (Jan 2024 – Present)</em>
                <ul>
                  <li>
                    Developed gameplay mechanics and retro game systems using Unity & NES Maker, contributing to
                    successful contract-based project delivery.
                  </li>
                  <li>
                    Collaborated with cross-functional programming and art teams to refine design features and enhance
                    player engagement.
                  </li>
                  <li>
                    Conducted QA testing and optimized code performance, improving stability and reducing in-game bugs
                    by 30%.
                  </li>
                </ul>
              </div>
            </li>
            <li className="work-experience-item">
              <img
                src="/images/DAQA.png"
                alt="DAQA Logo"
                className="work-experience-image small-image"
              />
              <div className="work-experience-content">
                <strong>Game QA Tester (Contract)</strong>
                <em>DAQA | Remote (Jan 2024 – Present)</em>
                <ul>
                  <li>
                    Provided QA testing services for AAA and indie titles, identifying and reporting over 200 bugs
                    across multiple platforms.
                  </li>
                  <li>Used tools like Jira to streamline communication and improve issue resolution time.</li>
                  <li>
                    Collaborated with cross-functional teams to enhance gameplay performance and ensure seamless user
                    experience.
                  </li>
                </ul>
              </div>
            </li>
            <li className="work-experience-item">
              <img
                src="/images/RedMistLogo.png"
                alt="Redmist Logo"
                className="work-experience-image small-image"
              />
              <div className="work-experience-content">
                <strong>Project Lead / Technical Designer</strong>
                <em>Redmist | Finland, Kajaani | Remote (Jan 2024 – Present)</em>
                <ul>
                  <li>
                    &#8226; Led VR development for BloodDrunk, overseeing design and implementation of immersive gameplay systems.
                  </li>
                  <li>
                    &#8226; Managed a remote team using Trello and Discord, improving task completion rate by 20%.
                  </li>
                  <li>
                    &#8226; Refined AI behavior and level design to create dynamic, player-driven VR interactions.
                  </li>
                </ul>
              </div>
            </li>
            <li className="work-experience-item">
              <img
                src="/images/Piksel.png"
                alt="Piksel Logo"
                className="work-experience-image"
              />
              <div className="work-experience-content">
                <strong>Piksel Student Intern</strong>
                <em>Piksel | Remote (2020)</em>
                <ul>
                  <li>
                    &#8226; Worked on streaming app editors used to configure films for Virgin TV Go.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;