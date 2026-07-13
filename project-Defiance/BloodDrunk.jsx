import React, { useEffect, useRef, useState } from "react";
import ProjectHero from "../components/projectComponents/ProjectHeroSection";
import ProjectTagsBar from "../components/projectComponents/ProjectTagsBar";
import ProjectNavbar from "../components/projectComponents/ProjectNavbar";
import ProjectImageCarousel from "../components/projectComponents/ProjectImageCarousel";
import Footer from "../components/footer";
import ScrollToTop from "../src/ScrollToTop";
import "./BloodDrunk.css";

const roleInfo = ["Producer / Technical Designer"];

const tags = ["Unreal", "Leadership", "Blueprint", "Jira", "QA", "GitHub", "Optimization"];


const FlowDiagrams = [
  {
    src: "/images/Site Files/Flow1.png",
    alt: "Flow diagram 1",
    caption: "Flow Diagram 1",
  },
  {
    src: "/images/Site Files/Flow2.png",
    alt: "Flow diagram 2",
    caption: "Flow Diagram 2",
  },
  {
    src: "/images/Site Files/Flow3.png",
    alt: "Flow diagram 3",
    caption: "Flow Diagram 3",
  },
  {
    src: "/images/Site Files/Flow4.png",
    alt: "Flow diagram 4",
    caption: "Flow Diagram 4",
  },
];

const responsibility = [
  "Managing the programming department to meet milestones and deadlines",
  "Assisting junior developers with tasks, teaching new concepts",
  "Bug testing and fixing",
  "Developing weapon classes and systems",
  "Enemy AI",
  "Player mechanics",
];

const ProjectDefiance = () => {
  const pageRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const targets = pageRef.current.querySelectorAll(".bd-reveal");
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
    <div className="bd-page" ref={pageRef}>
      <ScrollToTop />
      <ProjectNavbar />
      <ProjectHero
        title="BloodDrunk"
        showLogo={false}
        videoUrl="https://www.youtube.com/embed/DxV5A0v52A0?autoplay=1&loop=1&playlist=DxV5A0v52A0&mute=1"
        roleInfo={roleInfo}
        leftInfo={responsibility}
        leftTitle="Key Responsibilities"
        background="#181818"
        cardBackground="#232323"
        heroImage="/images/Site Files/BloodSplash.png"
        summary={
          <>
            Go absolutely haywire in this VR arcade splatterfest! BloodDrunk is a
            first-person wave shooter that balances style and skill, encouraging
            player expression. Adopt the role of a bloodthirsty killing machine
            and take out as many thugs as possible in whichever way you fancy, but
            watch your blood meter; you're constantly taking damage!
          </>
        }
        downloadLinks={[
          {
            url: "https://flamingbirdboi.itch.io/blood-drunk",
            label: "Game Download",
            description: "Itch.IO Link",
          },
          {
            url: "/images/Site Files/BDDesignDoc.pdf",
            label: "Design Docs",
            description: "Link to Docs",
          },
        ]}
      />
      <ProjectTagsBar tags={tags} />

      <div className="bd-card bd-card--stage bd-media-text bd-reveal">
        <div className="bd-media-frame">
          <img
            src="/images/Site Files/Wpn.gif"
            alt="Weapon shooting mechanic gameplay"
            className="bd-media"
          />
        </div>
        <div>
          <div className="bd-eyebrow">Stage 01</div>
          <h3 className="bd-card-title">Overview</h3>
          <div className="bd-card-text">
            <p>
              Whether you're steamrolling the cramped corridors of an asylum, leveling
              an office all the way from another building, or bulldozing your way
              through an abandoned meat processing plant - just keep killing! Your life
              depends on it!
            </p>
            <p>
              Seven different weapons. Seven distinct levels. Hordes of enemies. All in
              VR. How long can you last?
            </p>
          </div>
        </div>
      </div>

      <div className="bd-card bd-card--stage bd-media-text bd-flip bd-reveal">
        <div className="bd-media-frame">
          <img
            src="/images/Site Files/Wpn2.gif"
            alt="BloodDrunk team collaborating on gameplay systems"
            className="bd-media"
          />
        </div>
        <div>
          <div className="bd-eyebrow">Stage 02</div>
          <h3 className="bd-card-title">Project Leadership & Development</h3>
          <div className="bd-card-text">
            <p>
              During the summer, I served as the Project Lead for an eight-person team
              developing a VR shooter called BloodDrunk. Selected by Staffordshire
              University, I joined an international team coming from different
              universities at KAMK (Kajaani University of Applied Sciences) in Finland,
              where we dedicated ourselves to creating an addictive VR shooter.
            </p>
            <p>
              As the project lead, my primary responsibility was to ensure seamless
              collaboration across all departments. I set goals and deadlines using
              project management tools like Jira and Trello, and I provided mentorship
              and support to junior developers.
            </p>
            <p>
              In addition to my leadership role, I actively contributed to the project
              by designing and developing core gameplay mechanics, enemy AI systems, and
              user interfaces. I also played a key role in crafting level design
              blockouts and refining the overall VR experience.
            </p>
          </div>
        </div>
      </div>

      <div className="bd-card bd-card--stage bd-media-text bd-reveal">
        <div className="bd-media-frame">
          <img
            src="/images/Site Files/Behaviour.png"
            alt="Weapon system data table"
            className="bd-media"
          />
        </div>
        <div>
          <div className="bd-eyebrow">Stage 03</div>
          <h3 className="bd-card-title">Weapon Systems</h3>
          <div className="bd-card-text">
            <p>
              One of the first mechanics I developed for BloodDrunk was the weapon
              shooting system. Initially, I aimed to create a straightforward shooting
              mechanic, but as the project progressed, it became clear that a more
              complex, scalable system was necessary to accommodate the diverse range of
              weapons we planned to include.
            </p>
            <p>
              I focused on designing a user-friendly system that would allow
              designers to modify weapon attributes without needing to dive into the
              blueprint code. This system utilized data tables, enabling designers to
              easily adjust values for balancing and other purposes on the fly. This
              approach streamlined the development process and empowered the team to
              iterate quickly.
            </p>
          </div>
        </div>
      </div>

      <div className="bd-title-bar bd-reveal">
        <h2>Planning & Systems Flow</h2>
      </div>
      <div className="bd-card bd-reveal">
        <div className="bd-card-text">
          Before locking in any single system, I mapped out how the core
          gameplay loop and supporting systems would connect, from player
          input through to enemy response and the blood-meter feedback loop.
          These flow diagrams kept the team aligned as new weapons, enemies,
          and levels were added throughout production.
        </div>
      </div>
      <ProjectImageCarousel images={FlowDiagrams} />

      <div className="bd-card bd-card--stage bd-reveal">
        <div className="bd-eyebrow">Stage 04</div>
        <h3 className="bd-card-title">Testing & Balancing Tools</h3>
        <div className="bd-dual-media">
          <div className="bd-media-frame">
            <img
              src="/images/Site Files/Train1.png"
              alt="AI shooting range test setup"
              className="bd-media bd-media-zoomable"
              onClick={() => setLightbox({ src: "/images/Site Files/Train1.png", alt: "AI shooting range test setup" })}
              title="Click to expand"
            />
            <span className="bd-media-tag">Shooting Range</span>
          </div>
          <div className="bd-media-frame">
            <img
              src="/images/Site Files/Train.png"
              alt="Weapon data table values"
              className="bd-media bd-media-zoomable"
              style={{ objectFit: "contain", background: "#000" }}
              onClick={() => setLightbox({ src: "/images/Site Files/Train.png", alt: "Weapon data table values" })}
              title="Click to expand"
            />
            <span className="bd-media-tag">Data Table</span>
          </div>
        </div>
        <div className="bd-card-text" style={{ marginTop: "var(--space-4)" }}>
          <p>
            <b>Data Table Systems:</b> Data table systems were made so a designer
            or VFX Artist could go into the weapon values and quickly change and
            iterate values on the go for the weapon. This sped up development time
            for making further weapons, as no new blueprint would be needed for
            alternate weapons and aided with quickly being able to balance the
            weapons in the game.
          </p>
          <p>
            <b>Shooting Ranges:</b> Shooting ranges were created for designers to
            test Patrolling AI shooting targets. This setup allowed for easy
            evaluation of weapon feel and balance. It was developed during the
            project's early phases, while core mechanics were being refined before
            moving on to level testing.
          </p>
        </div>
      </div>

      <div className="bd-card bd-card--stage bd-video-text bd-reveal">
        <div className="bd-video">
          <iframe
            src="https://www.youtube.com/embed/ONI7gKVKr3A?autoplay=1&loop=1&playlist=ONI7gKVKr3A&mute=1"
            title="Weapon Design"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div>
          <div className="bd-eyebrow">Stage 05</div>
          <h3 className="bd-card-title">Weapon Design</h3>
          <div className="bd-card-text">
            <p>
              Using inheritance, we developed seven unique weapon classes, including both live projectile weapons and standard line trace weapons. A critical consideration in designing these weapons was their overall feel, especially since they were for VR. I focused on haptics and feedback to enhance the dynamics of the weapons. Key elements included:
            </p>
            <ul>
              <li>
                <b>Weapon Haptics:</b> Providing tactile feedback when shooting, catching, and dropping weapons.
              </li>
              <li>
                <b>Weapon Visuals:</b> Incorporating realistic gunfire effects and ejected casings.
              </li>
              <li>
                <b>VFX Laser Pointers:</b> Adding visual helpers for long-range shooting.
              </li>
            </ul>
            <p>
              These elements collectively contributed to a more immersive experience in the VR shooter.
            </p>
          </div>
        </div>
      </div>

      <div className="bd-card bd-card--stage bd-reveal">
        <div className="bd-eyebrow">Stage 06</div>
        <h3 className="bd-card-title">Conclusion</h3>
        <div className="bd-card-text">
          <p>
            Reflecting on the conclusion of this project, I feel immense pride in
            the results our team achieved and the contributions I made. Leading
            this project was a significant challenge for me, as it required me to
            step into a producer role rather than solely a technical designer. The
            most demanding aspect wasn't the technical side, but rather the
            managerial hurdles of keeping all departments aligned with our weekly
            milestones and supporting their individual goals. I quickly learned
            that the greatest challenges often come from unforeseen circumstances.
          </p>
          <p>
            From the start, I prioritized getting to know each team member
            personally to understand their strengths and weaknesses. This
            knowledge allowed me to assign tasks that suited their skills best —
            I discovered that while some team members excelled at working
            independently, others thrived with more guidance. This tailored
            approach significantly enhanced our teamwork and was crucial in
            achieving our goal of developing a VR shooter.
          </p>
          <p>
            At the outset, we established three key goals:
          </p>
          <ul>
            <li>Improve our Unreal Engine understanding</li>
            <li>Gain VR development experience</li>
            <li>Foster teamwork and communication</li>
          </ul>
          <p>
            We succeeded in creating a vertical slice of our game, and while we
            met these initial objectives, we aspire to go further. We've decided
            to continue developing the project independently under our indie
            studio, "Redmist," with the aim of a commercial release on Steam.
            Although this journey will present its own challenges, we firmly
            believe our game has much more potential than just a vertical slice.
          </p>
          <p>
            After our university trip, we set up a Discord channel to facilitate
            collaboration in an international remote setting, focusing on clear
            objectives: more levels, more gameplay, and more fun! I'm excited
            about this upcoming phase and all that it entails.
          </p>
        </div>
      </div>
      <Footer />

      {lightbox && (
        <div className="bd-lightbox" onClick={() => setLightbox(null)}>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="bd-lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="bd-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDefiance;
