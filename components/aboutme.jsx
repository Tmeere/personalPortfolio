import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './aboutme.css';

const MAIN_COLOR = '#eba53b';
const LANE_COUNT = 2;
const LANES_WIDTH = 48;
const LANE_WIDTH = LANES_WIDTH / LANE_COUNT;

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

const experienceLog = [
  {
    hash: '9b1f0a2',
    logo: '/images/Piksel.png',
    alt: 'Piksel Logo',
    title: 'Student Intern',
    company: 'Piksel',
    location: 'York, UK',
    dates: '2019',
    color: '#e8846b',
    bullets: [
      'Worked on streaming app editors used to configure films for Virgin TV Go.',
      "Assisted in debugging and optimizing the app's performance to ensure seamless user experience.",
      'Collaborated with senior developers to implement new features and improve existing workflows.',
    ],
  },
  {
    hash: 'c47de81',
    logo: '/images/RedMistLogo.png',
    alt: 'Redmist Logo',
    title: 'Project Lead / Technical Designer',
    company: 'Redmist',
    location: 'Finland, Kajaani | Remote',
    dates: 'Jan 2024 – Present',
    lane: 1,
    color: '#4fd8c4',
    branchEnd: 'open',
    bullets: [
      'Led VR development for BloodDrunk, overseeing design and implementation of immersive gameplay systems.',
      'Managed a remote team using Trello and Discord, improving task completion rate by 20%.',
      'Refined AI behavior and level design to create dynamic, player-driven VR interactions.',
    ],
  },
  {
    hash: '3e6a94f',
    logo: '/images/DAQA.png',
    alt: 'DAQA Logo',
    title: 'Game QA Tester (Contract)',
    company: 'DAQA',
    location: 'Remote',
    dates: 'Nov 2024 – Jul 2025',
    color: '#5fb0f0',
    bullets: [
      'Provided QA testing services for AAA and indie titles, identifying and reporting over 200 bugs across multiple platforms.',
      'Used tools like Jira to streamline communication and improve issue resolution time.',
      'Collaborated with cross-functional teams to enhance gameplay performance and ensure seamless user experience.',
    ],
  },
  {
    hash: '71d2c58',
    logo: '/images/BitmaskLogo.jpg',
    alt: 'Bitmask Games Logo',
    title: 'Game Developer',
    company: 'Bitmask Games',
    location: 'Rhode Island',
    dates: 'Nov 2024 – May 2025',
    color: '#c792ea',
    bullets: [
      'Developed gameplay mechanics and retro game systems using Unity & NES Maker, contributing to successful contract-based project delivery.',
      'Collaborated with cross-functional programming and art teams to refine design features and enhance player engagement.',
      'Conducted QA testing and optimized code performance, improving stability and reducing in-game bugs by 30%.',
    ],
  },
  {
    hash: 'a08f3d6',
    logo: '/images/CT_LOGO_NEW.jpg',
    alt: 'Coding Temple Logo',
    title: 'Apprentice',
    company: 'Coding Temple',
    location: 'Remote',
    dates: 'Feb 2025 – Jun 2025',
    color: '#6bdd8c',
    bullets: [
      'Completed 9+ hands-on, project-based assignments covering full-stack web development using modern technologies including Flask, React.js, SQL, and RESTful APIs.',
      'Actively participated in live workshops, enhancing collaboration and technical problem-solving skills.',
      'Consistently exceeded assignment expectations by implementing advanced features, optimizing functionality, and expanding project scope—while meeting assigned deadlines.',
    ],
  },
  {
    hash: '5c9b217',
    logo: '/images/ArriveLogistics.jpg',
    alt: 'Arrive Logistics Logo',
    title: 'Associate Automation Engineer',
    company: 'Arrive Logistics',
    location: 'Austin, TX',
    dates: 'Jul 2025 – Jun 2026',
    color: '#f2c14e',
    bullets: [
      'Contribute to the development and maintenance of automated testing solutions to ensure the quality and reliability of software systems.',
      'Write, execute, and refine test cases, collaborating with cross-functional teams to integrate automated test processes into CI/CD pipelines.',
      'Focus on enhancing test coverage and identifying bugs early to support the fast-paced delivery of logistics technology.',
    ],
  },
  {
    hash: 'f14a6e0',
    logo: '/images/ArriveLogistics.jpg',
    alt: 'Arrive Logistics Logo',
    title: 'Automation Engineer',
    company: 'Arrive Logistics',
    location: 'Austin, TX',
    dates: 'Jun 2026 – Present',
    color: MAIN_COLOR,
    current: true,
  },
];

const expertise = [
  { label: 'Game Development', text: 'Proficient in Unity and Unreal Engine, with experience creating immersive gameplay and retro gaming solutions.' },
  { label: 'Full-Stack Development', text: 'Skilled in building scalable web applications using React, Node.js, and Flask.' },
  { label: '3D Modeling & Animation', text: 'Expertise in Blender and 3ds Max for creating high-quality assets and animations.' },
  { label: 'VR/AR Development', text: 'Experienced in designing and developing virtual and augmented reality experiences.' },
  { label: 'Test Automation & QA', text: 'Proficient in automated and manual testing, CI/CD integration, and test-driven development to ensure software reliability.' },
];

const AboutMe = () => {
  const introRef = useRef(null);
  const graphWrapRef = useRef(null);
  const dotRefs = useRef([]);
  const [graph, setGraph] = useState({ points: [], height: 0 });

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

  useLayoutEffect(() => {
    const wrap = graphWrapRef.current;
    if (!wrap) return;

    const measure = () => {
      const wrapRect = wrap.getBoundingClientRect();
      const points = dotRefs.current.map((dot) => {
        if (!dot) return null;
        const r = dot.getBoundingClientRect();
        return {
          x: r.left - wrapRect.left + r.width / 2,
          y: r.top - wrapRect.top + r.height / 2,
        };
      });
      setGraph({ points, height: wrap.scrollHeight });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const curvyPath = (x1, y1, x2, y2) => {
    if (x1 === x2) return `M ${x1} ${y1} L ${x2} ${y2}`;
    const midY = (y1 + y2) / 2;
    return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
  };

  const mainLaneEntries = experienceLog
    .map((commit, i) => ((commit.lane ?? 0) === 0 ? { commit, point: graph.points[i] } : null))
    .filter((entry) => entry && entry.point);
  const mainX = mainLaneEntries[0]?.point.x;

  const mainSegments = [];
  for (let k = 0; k < mainLaneEntries.length - 1; k++) {
    const a = mainLaneEntries[k];
    const b = mainLaneEntries[k + 1];
    mainSegments.push({
      key: `${a.commit.hash}-main-seg`,
      color: a.commit.color || MAIN_COLOR,
      d: `M ${mainX} ${a.point.y} L ${mainX} ${b.point.y}`,
    });
  }

  const branchPaths = [];
  const openCaps = [];
  if (mainX != null) {
    experienceLog.forEach((commit, i) => {
      const lane = commit.lane ?? 0;
      if (lane === 0) return;
      const point = graph.points[i];
      const prevPoint = graph.points[i - 1];
      if (!point || !prevPoint) return;
      const color = commit.color || MAIN_COLOR;
      branchPaths.push({
        key: `${commit.hash}-split`,
        color,
        d: curvyPath(mainX, prevPoint.y, point.x, point.y),
      });

      if (commit.branchEnd === 'merge') {
        const targetIndex = experienceLog.findIndex((c) => c.hash === commit.mergeInto);
        const nextPoint = targetIndex >= 0 ? graph.points[targetIndex] : null;
        if (nextPoint) {
          branchPaths.push({
            key: `${commit.hash}-merge`,
            color,
            d: curvyPath(point.x, point.y, mainX, nextPoint.y),
          });
        }
      } else if (commit.branchEnd === 'open') {
        const topY = 8;
        branchPaths.push({
          key: `${commit.hash}-open`,
          color,
          d: `M ${point.x} ${point.y} L ${point.x} ${topY}`,
        });
        openCaps.push({ key: `${commit.hash}-cap`, x: point.x, y: topY, color });
      }
    });
  }

  const displayLog = experienceLog
    .map((commit, i) => ({ ...commit, chronoIndex: i }))
    .reverse();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="about section grid-bg">
      <div className="about-intro" ref={introRef}>
        <img src="/images/Me.jpg" alt="Thomas Meere" className="about-portrait" />
        <div>
          <p className="kicker">Automation Engineer / Technical Designer</p>
          <h1 className="about-heading">Hi, I'm Thomas Meere</h1>
          <p className="about-bio">
            I'm an Automation Engineer at Arrive Logistics, where I build and maintain automated
            testing solutions that keep logistics software reliable at scale. Alongside that, I
            have a strong foundation in gameplay systems, VR development, and full-stack web
            applications, and I specialize in building immersive experiences with Unity and
            Unreal Engine — from mobile dungeon crawlers to high-octane VR shooters.
            <br /><br />
            My background spans studio and indie work, including a producer/technical design
            role at Redmist, game development at Bitmask Games, and QA testing at DAQA. I've
            also built RESTful APIs and scalable web applications using Flask, MySQL, React,
            and JavaScript. I'm passionate about designing reliable, interactive systems,
            collaborating with cross-functional teams, and constantly pushing my technical
            boundaries. Originally from the UK and now based in Austin, Texas, I'm committed
            to contributing to both quality software engineering and the evolving landscape
            of interactive media.
          </p>
          <button className="btn btn-primary about-cta" onClick={scrollToProjects}>
            <FaChevronDown /> See Projects <FaChevronDown />
          </button>
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
        <div className="git-branch-tags">
          {experienceLog
            .filter((commit) => commit.branchEnd === 'open')
            .map((commit) => (
              <span key={commit.hash} className="git-branch-tag" style={{ color: commit.color }}>
                <span className="git-branch-icon">⑂</span> {commit.company.toLowerCase().replace(/\s+/g, '-')} (in tandem)
              </span>
            ))}
        </div>
        <div className="git-log-wrap" ref={graphWrapRef}>
          <svg className="git-graph-svg" width={LANES_WIDTH} height={graph.height || undefined}>
            {mainSegments.map((s) => (
              <path key={s.key} d={s.d} stroke={s.color} strokeWidth="2" fill="none" />
            ))}
            {branchPaths.map((p) => (
              <path key={p.key} d={p.d} stroke={p.color} strokeWidth="2" fill="none" />
            ))}
            {openCaps.map((c) => (
              <circle key={c.key} cx={c.x} cy={c.y} r="5" fill="var(--panel)" stroke={c.color} strokeWidth="2" />
            ))}
          </svg>
          <ul className="git-log">
            {displayLog.map((commit) => {
              const lane = commit.lane ?? 0;
              const color = commit.color || MAIN_COLOR;
              return (
                <li key={commit.hash} className={`commit-row${commit.current ? ' is-head' : ''}`}>
                  <div className="commit-graph">
                    <span
                      className="commit-dot"
                      ref={(el) => { dotRefs.current[commit.chronoIndex] = el; }}
                      style={{ left: lane * LANE_WIDTH + LANE_WIDTH / 2, background: color, '--lane-color': color }}
                    />
                  </div>
                  <div
                    className="commit-card panel"
                    style={commit.current ? { borderColor: color } : undefined}
                  >
                    <div className="commit-meta">
                      <span className="commit-hash" style={{ color }}>{commit.hash}</span>
                      <span className="commit-date">{commit.dates}</span>
                      {commit.current && (
                        <span className="commit-head-badge" style={{ color, borderColor: color }}>HEAD</span>
                      )}
                    </div>
                    <div className="commit-summary">
                      <img src={commit.logo} alt={commit.alt} className="commit-avatar" />
                      <div>
                        <strong>{commit.title}</strong>
                        <em>{commit.company} · {commit.location}</em>
                      </div>
                    </div>
                    {commit.bullets && (
                      <ul className="commit-body">
                        {commit.bullets.map((bullet, j) => (
                          <li key={j}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
