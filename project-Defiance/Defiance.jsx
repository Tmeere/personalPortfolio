import React, { useEffect, useRef, useState } from "react";
import ProjectHero from "../components/projectComponents/ProjectHeroSection";
import ProjectTagsBar from "../components/projectComponents/ProjectTagsBar";
import ProjectNavbar from "../components/projectComponents/ProjectNavbar";
import Footer from "../components/footer";
import ScrollToTop from "../src/ScrollToTop";
import "./Defiance.css";

const roleInfo = ["Junior Programmer"];

const tags = ["Unreal", "Blueprint", "Teamwork", "Jira", "QA", "GitHub"];

const responsibility = [
  "Developing core gameplay mechanics.",
  "Conducting QA bug testing and resolving issues.",
  "Creating tools tailored for designers' needs.",
  "Implementing designer-made sounds and utilizing meta sounds effectively.",
];

const ProjectDefiance = () => {
  const pageRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const targets = pageRef.current.querySelectorAll(".df-reveal");
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
    <div className="df-page" ref={pageRef}>
      <ScrollToTop />
      <ProjectNavbar />
      <ProjectHero
        title="Appliance-Defiance"
        showLogo={false}
        videoUrl="https://www.youtube.com/embed/og4CZvxNWIA?autoplay=1&loop=1&playlist=og4CZvxNWIA&mute=1"
        roleInfo={roleInfo}
        leftInfo={responsibility}
        leftTitle="Key Responsibilities"
        background="#181818"
        cardBackground="#232323"
        heroImage="/images/Site Files/AIApplianceDefianceRender.png"
        summary="You wake from cryosleep during your long space voyage to find the ship breaking down and its appliances come to life. Restore order to the ship and defeat the appliances!"
        downloadLinks={[
          {
            url: "/images/Site Files/GDD.pdf",
            label: "Design Doc",
            description: "Design Decisions",
          },
          {
            url: "https://angry-piranha-games.itch.io/ai-ppliance-defiance",
            label: "Download Game",
            description: "Linked On Itch.IO",
          },
        ]}
      />
      <ProjectTagsBar tags={tags} />

      <div className="df-card df-card--stage df-video-text df-reveal">
        <div className="df-video">
          <iframe
            src="https://www.youtube.com/embed/3pRzWkop_mw"
            title="Overview"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div>
          <div className="df-eyebrow">Stage 01</div>
          <h3 className="df-card-title">Overview</h3>
          <div className="df-card-text">
            <p>
              In this game, it is the goal of the player to restore order to the
              ship. During the player's time in cryosleep, the ship's appliances
              have come to life and begun to wreak havoc on the ship.
            </p>
            <p>
              Save your crewmates, shoot the appliances, save the ship.
              This was a collaborative project where I worked with an amazing
              team of 23 people spanning a range of backgrounds, from art and
              design to animation and programming. My role on the team was
              Junior Programmer, implementing gameplay features specified by
              design and handling the core bug testing and fixing for the
              game.
            </p>
            <p>
              This was a fun and insightful experience that taught me
              teamwork, communication, and how to work effectively in a group
              environment.
            </p>
          </div>
        </div>
      </div>

      <div className="df-title-bar df-reveal">
        <h2>Contributions</h2>
      </div>

      <div className="df-card df-card--stage df-reveal">
        <div className="df-eyebrow">Stage 02</div>
        <h3 className="df-card-title">Gameplay Systems</h3>
        <div className="df-card-text">
          <p>
            During this project, I was tasked with designing and implementing
            several core gameplay mechanics, including:
          </p>
          <ul>
            <li><strong>Health Pickups:</strong> Restoring the player's health.</li>
            <li><strong>Ammo Pickups:</strong> Providing ammunition for various weapon classes.</li>
            <li><strong>Parts Pickups:</strong> Collecting parts necessary for upgrading weapons.</li>
            <li><strong>Oxygen Pickups/Drain Mechanic:</strong> Managing oxygen levels to ensure player survival amidst a draining mechanic.</li>
            <li><strong>Spatial UI Objective Markers</strong></li>
          </ul>
          <p>In addition to player pickups, I designed and integrated a range of traps into the game, such as:</p>
          <ul>
            <li><strong>Exploding Barrels:</strong> Harming nearby enemies on contact.</li>
            <li><strong>Exposed Wiring:</strong> Occasionally zapping the player.</li>
            <li><strong>Exposed Steam Pipes:</strong> Constantly damaging the player while in contact.</li>
          </ul>
          <p>
            Beyond these responsibilities, I collaborated with a Sound Designer to
            integrate over 92 unique sounds into the game. This included
            everything from background music to enemy impact sounds, enhancing the
            overall audio experience.
          </p>
          <p>
            Alongside this, I performed weekly testing of all work produced by the
            programming team, reporting and fixing issues found.
          </p>
        </div>
      </div>

      <div className="df-card df-card--stage df-reveal">
        <div className="df-eyebrow">Stage 03</div>
        <h3 className="df-card-title">Hazards &amp; Pickups</h3>
        <div className="df-dual-media">
          <div className="df-media-frame">
            <img
              src="/images/Site Files/Collect.gif"
              alt="Player collecting a powerup pickup"
              className="df-media df-media-zoomable"
              onClick={() => setLightbox({ src: "/images/Site Files/Collect.gif", alt: "Player collecting a powerup pickup" })}
              title="Click to expand"
            />
            <span className="df-media-tag">Powerup</span>
          </div>
          <div className="df-media-frame">
            <img
              src="/images/Site Files/Shock.gif"
              alt="Player being shocked by exposed wiring"
              className="df-media df-media-zoomable"
              onClick={() => setLightbox({ src: "/images/Site Files/Shock.gif", alt: "Player being shocked by exposed wiring" })}
              title="Click to expand"
            />
            <span className="df-media-tag">Shock Hazard</span>
          </div>
        </div>
        <div className="df-card-text" style={{ marginTop: "var(--space-4)" }}>
          <p>Powerups and hazards.</p>
        </div>
      </div>

      <div className="df-card df-card--stage df-reveal">
        <div className="df-eyebrow">Stage 04</div>
        <h3 className="df-card-title">Easter Eggs &amp; Audio</h3>
        <div className="df-dual-media">
          <div className="df-media-frame">
            <img
              src="/images/Site Files/EasterEgg.gif"
              alt="In-game Easter egg"
              className="df-media df-media-zoomable"
              onClick={() => setLightbox({ src: "/images/Site Files/EasterEgg.gif", alt: "In-game Easter egg" })}
              title="Click to expand"
            />
            <span className="df-media-tag">Easter Egg</span>
          </div>
          <div className="df-media-frame">
            <img
              src="/images/Site Files/Sounds.png"
              alt="Sound file list used in the game"
              className="df-media df-media-zoomable"
              style={{ objectFit: "contain", background: "#000" }}
              onClick={() => setLightbox({ src: "/images/Site Files/Sounds.png", alt: "Sound file list used in the game" })}
              title="Click to expand"
            />
            <span className="df-media-tag">Sound List</span>
          </div>
        </div>
        <div className="df-card-text" style={{ marginTop: "var(--space-4)" }}>
          <p>Easter eggs and sound files.</p>
        </div>
      </div>

      <div className="df-card df-card--stage df-reveal">
        <div className="df-eyebrow">Stage 05</div>
        <h3 className="df-card-title">Challenges</h3>
        <div className="df-card-text">
          <p>
            The core challenge of this project stemmed from it being my first
            team-based endeavor. In the past, I had primarily worked on
            game-related projects independently, allowing me to work according to
            my own flow and style.
          </p>
          <p>
            However, transitioning to a team setting required me to focus
            on communication and building team-based relationships, especially
            given the dramatic increase in scope and challenge presented by a
            project involving 23 team members from a range of different
            disciplines.
          </p>
          <p>
            In addition to improving communication, I had to adapt to
            shared programming styles and best practices, which was not something
            I typically considered in my solo projects. Embracing these changes
            significantly benefited me in subsequent settings and future group
            projects.
          </p>
        </div>
      </div>

      <div className="df-card df-reveal">
        <div className="df-vid-vid">
          <div className="df-video">
            <iframe
              src="https://www.youtube.com/embed/e3oTesDvjS0"
              title="Appliance-Defiance gameplay clip 1"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="df-video">
            <iframe
              src="https://www.youtube.com/embed/yy4JpDs6zlo"
              title="Appliance-Defiance gameplay clip 2"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="df-card df-card--stage df-reveal">
        <div className="df-eyebrow">Stage 06</div>
        <h3 className="df-card-title">UI &amp; Enemies</h3>
        <div className="df-dual-media">
          <div className="df-media-frame">
            <img
              src="/images/Site Files/Pause Menu.gif"
              alt="Pause menu with satisfaction bar"
              className="df-media df-media-zoomable"
              onClick={() => setLightbox({ src: "/images/Site Files/Pause Menu.gif", alt: "Pause menu with satisfaction bar" })}
              title="Click to expand"
            />
            <span className="df-media-tag">Pause Menu</span>
          </div>
          <div className="df-media-frame">
            <img
              src="/images/Site Files/Enemies.gif"
              alt="Enemy appliances attacking the player"
              className="df-media df-media-zoomable"
              onClick={() => setLightbox({ src: "/images/Site Files/Enemies.gif", alt: "Enemy appliances attacking the player" })}
              title="Click to expand"
            />
            <span className="df-media-tag">Enemies</span>
          </div>
        </div>
        <div className="df-card-text" style={{ marginTop: "var(--space-4)" }}>
          <p>The in-game pause menu alongside enemy appliances closing in on the player.</p>
        </div>
      </div>

      <div className="df-card df-card--stage df-reveal">
        <div className="df-eyebrow">Stage 07</div>
        <h3 className="df-card-title">Conclusion</h3>
        <div className="df-card-text">
          <p>
            Completing this project stands out as one of my most significant
            achievements in game development to date. As my first team-based
            endeavor, it introduced a new dimension of collaboration, requiring me
            to integrate my work with contributions from various departments to
            produce a cohesive, high-quality game.
          </p>
          <p>
            Despite the challenges, the learning curve and high project
            expectations, I adapted quickly to the team environment. I became
            proficient at meeting deadlines while maintaining the quality of my
            work. A key lesson I learned was to treat my contributions as if they
            were the final touches on the project. This approach ensured that
            nothing was overlooked and that our collective efforts remained
            organized and on track.
          </p>
          <p>
            Overall, this project served as an excellent introduction to
            working with Unreal Blueprint and navigating team dynamics, providing
            invaluable experience for my future endeavors in game development.
          </p>
        </div>
      </div>
      <Footer />

      {lightbox && (
        <div className="df-lightbox" onClick={() => setLightbox(null)}>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="df-lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="df-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDefiance;
