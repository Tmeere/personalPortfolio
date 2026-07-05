import React, { useEffect, useRef } from 'react';
import './aboutme.css';

const skills = {
  'Programming Languages': [
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'HTML/CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Blueprint', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
  ],
  'Frameworks': [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  ],
  'Tools': [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Jira', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    { name: 'Blender', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
    { name: 'Unity', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
    { name: 'Unreal Engine', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
    { name: '3Ds Max', logo: '/images/3ds.png' },
    { name: 'Fusion 360', logo: '/images/fusion.png' },
  ],
  'Technical Skills': [
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

const workExperience = [
  {
    logo: '/images/CT_LOGO_NEW.jpg',
    alt: 'Coding Temple Logo',
    title: 'Coding Temple Apprentice',
    meta: 'Coding Temple | Remote | (Feb 2025 - June 2025)',
    bullets: [
      'Completed 9+ hands-on, project-based assignments covering full-stack web development using modern technologies including Flask, React.js, SQL, and RESTful APIs.',
      'Actively participated in live workshops, enhancing collaboration and technical problem-solving skills.',
      'Consistently exceeded assignment expectations by implementing advanced features, optimizing functionality, and expanding project scope—while meeting assigned deadlines.',
    ],
  },
  {
    logo: '/images/BitmaskLogo.jpg',
    alt: 'Bitmask Games Logo',
    title: 'Game Developer',
    meta: 'Bitmask Games | Rhode Island (Nov 2024 – May 2025)',
    bullets: [
      'Developed gameplay mechanics and retro game systems using Unity & NES Maker, contributing to successful contract-based project delivery.',
      'Collaborated with cross-functional programming and art teams to refine design features and enhance player engagement.',
      'Conducted QA testing and optimized code performance, improving stability and reducing in-game bugs by 30%.',
    ],
  },
  {
    logo: '/images/DAQA.png',
    alt: 'DAQA Logo',
    title: 'Game QA Tester (Contract)',
    meta: 'DAQA | Remote (Nov 2024 – Present)',
    bullets: [
      'Provided QA testing services for AAA and indie titles, identifying and reporting over 200 bugs across multiple platforms.',
      'Used tools like Jira to streamline communication and improve issue resolution time.',
      'Collaborated with cross-functional teams to enhance gameplay performance and ensure seamless user experience.',
    ],
  },
  {
    logo: '/images/RedMistLogo.png',
    alt: 'Redmist Logo',
    title: 'Project Lead / Technical Designer',
    meta: 'Redmist | Finland, Kajaani | Remote (Jan 2024 – Present)',
    bullets: [
      'Led VR development for BloodDrunk, overseeing design and implementation of immersive gameplay systems.',
      'Managed a remote team using Trello and Discord, improving task completion rate by 20%.',
      'Refined AI behavior and level design to create dynamic, player-driven VR interactions.',
    ],
  },
  {
    logo: '/images/Piksel.png',
    alt: 'Piksel Logo',
    title: 'Piksel Student Intern',
    meta: 'Piksel | York, UK (2019)',
    bullets: [
      "Worked on streaming app editors used to configure films for Virgin TV Go.",
      "Assisted in debugging and optimizing the app's performance to ensure seamless user experience.",
      'Collaborated with senior developers to implement new features and improve existing workflows.',
    ],
  },
];

const expertise = [
  { label: 'Game Development', text: 'Proficient in Unity and Unreal Engine, with experience creating immersive gameplay and retro gaming solutions.' },
  { label: 'Full-Stack Development', text: 'Skilled in building scalable web applications using React, Node.js, and Flask.' },
  { label: '3D Modeling & Animation', text: 'Expertise in Blender and 3ds Max for creating high-quality assets and animations.' },
  { label: 'VR/AR Development', text: 'Experienced in designing and developing virtual and augmented reality experiences.' },
  { label: 'Quality Assurance', text: 'Proficient in automated testing, manual testing, and test-driven development to ensure software reliability.' },
];

const AboutMe = () => {
  const introRef = useRef(null);

  useEffect(() => {
    const el = introRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section">
      <div className="about-intro" ref={introRef}>
        <img src="/images/Me.jpg" alt="Thomas Meere" className="about-portrait" />
        <div>
          <p className="kicker">// about</p>
          <h2 className="about-heading">About Me</h2>
          <p className="about-bio">
            I'm a Game Programmer and Software Engineer with a strong foundation in gameplay
            systems, VR development, and full-stack web applications. I specialize in building
            immersive experiences using Unity and Unreal Engine, with projects ranging from
            mobile dungeon crawlers to high-octane VR shooters. My background includes both
            indie development and studio work, including recent roles at RedMist and Bitmask
            Games, as well as QA experience at DAQA.
            <br /><br />
            In addition to game development, I've built RESTful APIs and scalable web apps
            using technologies like Flask, MySQL, React, and JavaScript. I'm passionate about
            designing interactive systems, collaborating with cross-functional teams, and
            constantly pushing my technical boundaries. Originally from the UK and now based
            in Rhode Island, I'm committed to contributing to the evolving landscape of
            interactive media and emerging tech.
          </p>
        </div>
      </div>

      <div className="about-block">
        <h3 className="about-block-title">Skills</h3>
        <div className="skills-groups">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skills-group">
              <p className="skills-group-label">{category}</p>
              <div className="skills-chips">
                {items.map((skill) => (
                  <span key={skill.name} className="chip skill-chip">
                    <img src={skill.logo} alt="" className="skill-chip-icon" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-block">
        <h3 className="about-block-title">Areas of Expertise</h3>
        <ul className="expertise-list">
          {expertise.map((item) => (
            <li key={item.label} className="expertise-item panel">
              <strong>{item.label}</strong>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="about-block">
        <h3 className="about-block-title">Work Experience</h3>
        <ul className="experience-list">
          {workExperience.map((job) => (
            <li key={job.title} className="experience-item panel">
              <img src={job.logo} alt={job.alt} className="experience-logo" />
              <div className="experience-body">
                <strong>{job.title}</strong>
                <em>{job.meta}</em>
                <ul>
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
