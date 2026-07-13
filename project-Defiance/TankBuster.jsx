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
              In this competitive local multiplayer tank game, players engage in
              intense head-to-head battles across multiple maps, racing to achieve
              three wins. Only one player can emerge victorious. Drawing inspiration
              from "Tank Trouble," I set out to develop a C++ local multiplayer tank
              shooter.
            </p>
            <p>
              The goal was to create an engaging three-level experience
              where two friends could compete against each other using a single
              keyboard.
            </p>
            <p>
              For this project, I focused on building a straightforward
              tank shooter that leverages C++ in conjunction with Blueprints. This
              involved creating a custom library of Blueprint nodes from C++,
              allowing for a seamless integration of gameplay mechanics. This
              endeavor also served as an exploration of the classic "Fuzzy
              Line"—determining the optimal balance between tasks best suited for
              C++ and those handled by Blueprints.
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
              The projectiles bounce off surfaces, adding an exciting layer
              of strategy and encouraging more dynamic gameplay.
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
              This design frees up more keyboard space for two players,
              promoting cooperation while encouraging players to carefully consider
              their movement and positioning in the game.
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
              These power-ups add variety to each match, ensuring that every
              encounter feels unique and strategic.
            </p>
          </div>
        </div>
      </div>

      <ProjectImageCarousel images={Projectiles} />

      <div className="tb-card tb-reveal">
        <div className="tb-card-text">
          The game includes various projectile classes with differing speeds,
          radii, bounce counts, and ammo. A parent class was created to
          streamline the implementation and balancing of these projectiles,
          ensuring consistent behavior and easy adjustments for enhanced
          gameplay.
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
              For the game, I implemented a custom save data system to track scores
              between rounds. While this could have been managed through the Game
              Instance, I aimed to create a dedicated C++ save manager as part of my
              personal deliverables.
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
          <p>UI scoreboard - first to five wins.</p>
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
            A spawn manager was implemented to alternate between weapon pickups and
            power-ups, with their timing and locations determined randomly. This
            approach helps keep gameplay varied and constantly changing.
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
            Although not the primary focus of this project, I designed three
            distinct levels to enhance gameplay. Key considerations included:
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
          <p>These elements contribute to varied and engaging gameplay, keeping each match fresh and exciting.</p>
        </div>
      </div>

      <div className="tb-card tb-card--stage tb-reveal">
        <div className="tb-eyebrow">Stage 08</div>
        <h3 className="tb-card-title">Project Conclusions</h3>
        <div className="tb-card-text">
          <p>
            With the goal of creating a vertical slice of a tank shooter, I'm
            pleased with the learning outcomes of this project. My aim was to
            effectively integrate C++ and Blueprints, and I gained valuable
            insights into when to use each—essentially clarifying the "fuzzy line"
            between the two.
          </p>
          <p>
            A significant takeaway has been the development of Blueprint
            Function Libraries. Creating custom nodes in C++ for functionality
            not available in Blueprints has proven extremely beneficial, and I
            plan to expand on this approach in future projects by building a
            more extensive library.
          </p>
          <p>
            This experience has not only enhanced my C++ skills but also
            deepened my understanding of Unreal Engine. Overall, the project
            has served as a clear guide for determining when to leverage C++ in
            my work.
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
