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
      { name: 'Blueprint', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' }, // Added Blueprint

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
      { name: '3ds Max', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/3dsmax/3dsmax-original.svg' },
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

    // Observe badges
    badgeRefs.current.forEach((badge) => {
      if (badge) observer.observe(badge);
    });

    // Observe About Me section
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
      {" "}
      {/* Added id="about" */}
      <div className="row">
        {/* Column 1: Image and About Me */}
        <div
          className="col-md-6 d-flex flex-column align-items-center align-items-md-start"
          ref={aboutMeRef}
        >
          <img
            src="/images/Me.jpg"
            alt="About Me"
            className="about-me-image img-fluid rounded-circle mb-4"
          />
          <div>
            <h1 className="mb-4 text-center text-md-start">About Me</h1>
            <p className="about-me-text text-center text-md-start">
              Hi, I'm Thomas Meere, a passionate Game Developer currently
              working at Bitmask Games, where I specialize in Unity-based
              projects and retro gaming solutions. When I'm not crafting gaming
              experiences, I focus on full-stack development, constantly
              exploring new technologies and expanding my skill set. I thrive on
              tackling new challenges and bringing innovative ideas to life. I’m
              deeply committed to contributing to the tech community and pushing
              the boundaries of what’s possible in the ever-evolving world of
              technology.
            </p>
          </div>
        </div>

        {/* Column 2: Skills */}
        <div className="col-md-6">
          <h2 className="mb-4">Skills & Badges</h2>

          <h3 className="mt-4">Programming Languages</h3>
          <ul className="skills-list list-unstyled d-flex flex-wrap justify-content-start">
            {skills.programmingLanguages.map((skill, index) => (
              <li
                key={index}
                className="badge bg-light text-dark m-2 p-2 d-flex align-items-center"
                ref={(el) => (badgeRefs.current[index] = el)}
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="skill-logo me-2"
                />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-4">Frameworks</h3>
          <ul className="skills-list list-unstyled d-flex flex-wrap justify-content-start">
            {skills.frameworks.map((skill, index) => (
              <li
                key={index + skills.programmingLanguages.length}
                className="badge bg-light text-dark m-2 p-2 d-flex align-items-center"
                ref={(el) =>
                  (badgeRefs.current[
                    index + skills.programmingLanguages.length
                  ] = el)
                }
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="skill-logo me-2"
                />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-4">Tools</h3>
          <ul className="skills-list list-unstyled d-flex flex-wrap justify-content-start">
            {skills.tools.map((skill, index) => (
              <li
                key={
                  index +
                  skills.programmingLanguages.length +
                  skills.frameworks.length
                }
                className="badge bg-light text-dark m-2 p-2 d-flex align-items-center"
                ref={(el) =>
                  (badgeRefs.current[
                    index +
                      skills.programmingLanguages.length +
                      skills.frameworks.length
                  ] = el)
                }
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="skill-logo me-2"
                />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-4">Technical Skills</h3>
          <ul className="skills-list list-unstyled d-flex flex-wrap justify-content-start">
            {skills.technicalSkills.map((skill, index) => (
              <li
                key={
                  index +
                  skills.programmingLanguages.length +
                  skills.frameworks.length +
                  skills.tools.length
                }
                className="badge bg-light text-dark m-2 p-2 d-flex align-items-center"
                ref={(el) =>
                  (badgeRefs.current[
                    index +
                      skills.programmingLanguages.length +
                      skills.frameworks.length +
                      skills.tools.length
                  ] = el)
                }
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="skill-logo me-2"
                />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Full-Width Row: Areas of Expertise */}
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="mb-4 text-center">Areas of Expertise</h2>
          <ul className="expertise-list text-start">
            <li className="mb-2">
              <strong>Game Development:</strong> Proficient in Unity and Unreal
              Engine, with experience in creating immersive gameplay and retro
              gaming solutions.
            </li>
            <li className="mb-2">
              <strong>Full-Stack Development:</strong> Skilled in building
              scalable web applications using React, Node.js, and Flask.
            </li>
            <li className="mb-2">
              <strong>3D Modeling & Animation:</strong> Expertise in Blender and
              3ds Max for creating high-quality assets and animations.
            </li>
            <li className="mb-2">
              <strong>VR/AR Development:</strong> Experienced in designing and
              developing virtual and augmented reality experiences.
            </li>
            <li className="mb-2">
              <strong>Quality Assurance:</strong> Proficient in automated
              testing, manual testing, and test-driven development to ensure
              software reliability.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;