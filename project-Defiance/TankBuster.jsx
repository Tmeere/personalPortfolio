import React, { useEffect, useRef, useState } from "react";
import ProjectHero from "../components/projectComponents/ProjectHeroSection";
import ProjectTagsBar from "../components/projectComponents/ProjectTagsBar";
import ProjectNavbar from "../components/projectComponents/ProjectNavbar";
import ProjectImageCarousel from "../components/projectComponents/ProjectImageCarousel";
import Footer from "../components/footer";
import ScrollToTop from "../src/ScrollToTop";
import "./TankBuster.css";

const roleInfo = ["Programmer"];

const tags = ["Unreal", "C++", "Blueprint", "OOP", "QA", "Local Multiplayer"];

const Projectiles = [
  {
    src: "/images/Site Files/Mini.png",
    alt: "Mini projectile",
    caption: "Mini Projectile",
  },
  {
    src: "/images/Site Files/Rocket.png",
    alt: "Rocket projectile",
    caption: "Rocket Projectile",
  },
  {
    src: "/images/Site Files/Projectile.png",
    alt: "Basic projectile",
    caption: "Basic Projectile",
  },
];
const Maps = [
  {
    src: "/images/Site Files/Map.png",
    alt: "Level 1 map layout",
    caption: "Level 1",
  },
  {
    src: "/images/Site Files/Map2.png",
    alt: "Level 2 map layout",
    caption: "Level 2",
  },
  {
    src: "/images/Site Files/Map3.png",
    alt: "Level 3 map layout",
    caption: "Level 3",
  },
];

const responsibility = [
  "Developing a Local Multiplayer Game.",
  "Improving C++ / Blueprint understanding.",
  "Making a complete game loop tank shooter.",
  "Creating a project using C++ and Blueprint relations.",
];

const ProjectDefiance = () => {
  const pageRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const targets = pageRef.current.querySelectorAll(".tb-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="tb-page" ref={pageRef}>
      <ScrollToTop />
      <ProjectNavbar />
      <ProjectHero
        title="Tank Busters"
        showLogo={false}
        videoUrl="https://www.youtube.com/embed/YN8mKNWFo1Y?autoplay=1&loop=1&playlist=YN8mKNWFo1Y&mute=1"
        roleInfo={roleInfo}
        leftInfo={responsibility}
        leftTitle="Key Responsibilities"
        background="#181818"
        cardBackground="#232323"
        heroImage="/images/Site Files/TankBck.jpg"
        summary="Get ready for an intense showdown in this top-down tank shooter! Strategically use various weapons and abilities to outmaneuver and defeat your opponent. First to five victories takes the crown! Use the terrain to your advantage—bounce projectiles off walls and catch your rival off guard. Think fast and aim true!"
      />
      <ProjectTagsBar tags={tags} />

      <div className="tb-card tb-card--stage tb-video-text tb-reveal">
        <div className="tb-video">
          <iframe
            src="https://www.youtube.com/embed/1JkDUQ9k9t0"
            title="Overview"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div>
          <div className="tb-eyebrow">Stage 01</div>
          <h3 className="tb-card-title">Overview</h3>
          <div className="tb-card-text">
            <p>
              This competitive local multiplayer tank game pits two players in
              head-to-head battles across multiple maps, racing to three wins.
              Drawing inspiration from "Tank Trouble," I set out to build a C++
              local multiplayer tank shooter.
            </p>
            <p>
              The goal was to create an engaging three-level experience
              where two friends could compete against each other using a single
              keyboard.
            </p>
            <p>
              I focused on building a straightforward tank shooter that leverages
              C++ alongside Blueprints — creating a custom library of Blueprint
              nodes from C++ for seamless integration. It also became an
              exploration of the classic "fuzzy line": where to draw the boundary
              between C++ and Blueprint work.
            </p>
          </div>
        </div>
      </div>

      <div className="tb-title-bar tb-reveal">
        <h2>Contributions</h2>
      </div>

      <div className="tb-card tb-card--stage tb-media-text tb-reveal">
        <div className="tb-media-frame">
          <img
            src="/images/Site Files/TankBounce.gif"
            alt="Tank projectile bouncing off a wall"
            className="tb-media"
          />
        </div>
        <div>
          <div className="tb-eyebrow">Stage 02</div>
          <h3 className="tb-card-title">Bounce Mechanic</h3>
          <div className="tb-card-text">
            <p>
              In the game, players start with a default weapon that fires five
              projectiles in quick succession before requiring a reload during a
              cooldown period.
            </p>
            <p>
              Bouncing projectiles off surfaces adds a layer of strategy and
              keeps fights more dynamic.
            </p>
          </div>
        </div>
      </div>

      <div className="tb-card tb-card--stage tb-media-text tb-flip tb-reveal">
        <div className="tb-media-frame">
          <img
            src="/images/Site Files/TankMove.gif"
            alt="Tank movement using WASD controls"
            className="tb-media"
          />
        </div>
        <div>
          <div className="tb-eyebrow">Stage 03</div>
          <h3 className="tb-card-title">Movement</h3>
          <div className="tb-card-text">
            <p>
              Tanks utilize classic WASD controls for movement, with W and S for
              forward and backward movement, and A and D for rotation.
            </p>
            <p>
              This frees up keyboard space for two players sharing one keyboard,
              and forces players to think carefully about movement and
              positioning.
            </p>
          </div>
        </div>
      </div>

      <div className="tb-card tb-card--stage tb-media-text tb-reveal">
        <div className="tb-media-frame">
          <img
            src="/images/Site Files/TankPickup.gif"
            alt="Tank collecting a power-up"
            className="tb-media"
          />
        </div>
        <div>
          <div className="tb-eyebrow">Stage 04</div>
          <h3 className="tb-card-title">Power-Ups</h3>
          <div className="tb-card-text">
            <p>
              Tanks can collect various power-ups to gain an edge over their opponent.
              These include:
            </p>
            <ul>
              <li><strong>Shield</strong> – Temporary invulnerability</li>
              <li><strong>Slow-Mo</strong> – Slows the enemy tank</li>
              <li><strong>Tank Mine</strong> – An on-contact tank killer</li>
            </ul>
            <p>
              They add variety to each match, so no two encounters feel quite
              the same.
            </p>
          </div>
        </div>
      </div>

      <ProjectImageCarousel images={Projectiles} />

      <div className="tb-card tb-reveal">
        <div className="tb-card-text">
          The game includes several projectile classes with different speeds,
          radii, bounce counts, and ammo. A shared parent class kept their
          implementation and balancing consistent, making them easy to tune.
        </div>
      </div>

      <div className="tb-card tb-card--stage tb-media-text tb-flip tb-reveal">
        <div className="tb-media-frame">
          <img
            src="/images/Site Files/SaveData.png"
            alt="C++ Save Actor Constructor Code"
            className="tb-media"
            style={{ objectFit: "contain", background: "#000" }}
          />
        </div>
        <div>
          <div className="tb-eyebrow">Stage 05</div>
          <h3 className="tb-card-title">Save System</h3>
          <div className="tb-card-text">
            <p>
              I implemented a custom save data system to track scores between
              rounds. It could have been handled through the Game Instance, but
              I wanted a dedicated C++ save manager as one of my personal
              deliverables.
            </p>
          </div>
        </div>
      </div>

      <div className="tb-card tb-card--stage tb-reveal">
        <div className="tb-eyebrow">Stage 06</div>
        <h3 className="tb-card-title">Match &amp; Scoreboard</h3>
        <div className="tb-dual-media">
          <div className="tb-media-frame">
            <img
              src="/images/Site Files/ScoreBoard.png"
              alt="In-game UI scoreboard"
              className="tb-media tb-media-zoomable"
              onClick={() => setLightbox({ src: "/images/Site Files/ScoreBoard.png", alt: "In-game UI scoreboard" })}
              title="Click to expand"
            />
            <span className="tb-media-tag">Scoreboard</span>
          </div>
          <div className="tb-media-frame">
            <img
              src="/images/Site Files/TankCombat.gif"
              alt="Tanks in combat"
              className="tb-media tb-media-zoomable"
              onClick={() => setLightbox({ src: "/images/Site Files/TankCombat.gif", alt: "Tanks in combat" })}
              title="Click to expand"
            />
            <span className="tb-media-tag">Combat</span>
          </div>
        </div>
        <div className="tb-card-text" style={{ marginTop: "var(--space-4)" }}>
          <p>The in-match UI scoreboard — first to five wins takes the match.</p>
        </div>
      </div>

      <div className="tb-card tb-card--stage tb-reveal">
        <div className="tb-eyebrow">Stage 07</div>
        <h3 className="tb-card-title">Spawn System</h3>
        <div className="tb-dual-media">
          <div className="tb-media-frame">
            <img
              src="/images/Site Files/SpawningTank.gif"
              alt="Tank spawning into the level"
              className="tb-media tb-media-zoomable"
              onClick={() => setLightbox({ src: "/images/Site Files/SpawningTank.gif", alt: "Tank spawning into the level" })}
              title="Click to expand"
            />
            <span className="tb-media-tag">Spawn Point</span>
          </div>
          <div className="tb-media-frame">
            <img
              src="/images/Site Files/SpawnCode.png"
              alt="Spawn manager code"
              className="tb-media tb-media-zoomable"
              style={{ objectFit: "contain", background: "#000" }}
              onClick={() => setLightbox({ src: "/images/Site Files/SpawnCode.png", alt: "Spawn manager code" })}
              title="Click to expand"
            />
            <span className="tb-media-tag">Spawn Code</span>
          </div>
        </div>
        <div className="tb-card-text" style={{ marginTop: "var(--space-4)" }}>
          <p>
            A spawn manager alternates between weapon pickups and power-ups,
            with randomized timing and locations to keep gameplay varied.
          </p>
        </div>
      </div>

      <ProjectImageCarousel images={Maps} />

      <div className="tb-title-bar tb-reveal">
        <h2>Level Design</h2>
      </div>
      <div className="tb-card tb-reveal">
        <div className="tb-card-text">
          <p>
            Level design wasn't the primary focus of this project, but I built
            three distinct levels to support the gameplay. Key considerations
            included:
          </p>
          <ul>
            <li>
              <strong>Power-Up Spawn Locations:</strong> Strategically placing power-ups to encourage exploration and dynamic gameplay.
            </li>
            <li>
              <strong>Player Spawn Points:</strong> Ensuring fair starting positions that promote balanced competition.
            </li>
            <li>
              <strong>Map Geometry:</strong> Designing the environment to facilitate interesting rebounding shots and create tactical opportunities.
            </li>
          </ul>
          <p>Together, these choices keep each match feeling fresh.</p>
        </div>
      </div>

      <div className="tb-card tb-card--stage tb-reveal">
        <div className="tb-eyebrow">Stage 08</div>
        <h3 className="tb-card-title">Project Conclusions</h3>
        <div className="tb-card-text">
          <p>
            I set out to build a vertical slice of a tank shooter, and I'm
            pleased with what I learned along the way. My goal was to integrate
            C++ and Blueprints effectively, and I came away with a much
            clearer sense of when to use each — the "fuzzy line" between the
            two.
          </p>
          <p>
            A big takeaway was building Blueprint Function Libraries — writing
            custom C++ nodes for functionality Blueprints can't handle
            natively proved extremely useful, and I plan to build out a much
            larger library on future projects.
          </p>
          <p>
            This project sharpened my C++ skills and deepened my understanding
            of Unreal Engine, and it's given me a much clearer guide for when
            to reach for C++ in future work.
          </p>
        </div>
      </div>
      <Footer />

      {lightbox && (
        <div className="tb-lightbox" onClick={() => setLightbox(null)}>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="tb-lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="tb-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDefiance;
