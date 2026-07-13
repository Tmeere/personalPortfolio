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
              The player's goal is to restore order to the ship. While they were
              in cryosleep, the ship's appliances came to life and began
              wreaking havoc.
            </p>
            <p>
              Save your crewmates, shoot the appliances, save the ship.
              This was a collaborative project with a 23-person team spanning
              art, design, animation, and programming. My role was Junior
              Programmer — implementing gameplay features from design and
              handling core bug testing and fixing.
            </p>
            <p>
              It was a fun, insightful experience that taught me teamwork,
              communication, and how to work effectively as part of a group.
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
          <p>Alongside pickups, I designed and integrated a range of traps, including:</p>
          <ul>
            <li><strong>Exploding Barrels:</strong> Harming nearby enemies on contact.</li>
            <li><strong>Exposed Wiring:</strong> Occasionally zapping the player.</li>
            <li><strong>Exposed Steam Pipes:</strong> Constantly damaging the player while in contact.</li>
          </ul>
          <p>
            Beyond this, I worked with a sound designer to integrate over 92
            unique sounds — everything from background music to enemy impact
            sounds — for a much richer audio experience.
          </p>
          <p>
            I also ran weekly QA passes on everything the programming team
            produced, reporting and fixing issues as they came up.
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
            The core challenge of this project was that it was my first
            team-based endeavor. I'd mostly worked on games independently
            before, at my own pace and in my own style.
          </p>
          <p>
            Moving to a team setting meant focusing on communication and
            building relationships, especially given the jump in scope with 23
            team members across a range of disciplines.
          </p>
          <p>
            I also had to adapt to shared programming styles and best
            practices — something I'd rarely had to think about in solo
            projects. Embracing that shift paid off significantly in later
            team settings.
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
            Completing this project is one of my most significant achievements
            in game development to date. As my first team-based endeavor, it
            pushed me to integrate my work with contributions from across
            departments into one cohesive, high-quality game.
          </p>
          <p>
            Despite the learning curve and high project expectations, I
            adapted quickly to the team environment and got good at meeting
            deadlines without sacrificing quality. A key lesson: treat every
            contribution as if it were the final touch on the project. That
            mindset kept nothing overlooked and kept our collective effort
            organized.
          </p>
          <p>
            Overall, this project was an excellent introduction to Unreal
            Blueprint and team dynamics alike, and it gave me experience I'll
            carry into every future project.
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
