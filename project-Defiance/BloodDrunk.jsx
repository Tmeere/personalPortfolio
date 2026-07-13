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
              During the summer, I served as Project Lead for an eight-person team
              developing BloodDrunk, a VR shooter. Selected by Staffordshire
              University, I joined an international team from several universities at
              KAMK (Kajaani University of Applied Sciences) in Finland to build an
              addictive VR shooter together.
            </p>
            <p>
              As lead, my main responsibility was keeping collaboration seamless
              across every department. I set goals and deadlines using tools like
              Jira and Trello, while mentoring junior developers along the way.
            </p>
            <p>
              Beyond leadership, I designed and built core gameplay mechanics, enemy
              AI, and UI, and helped block out levels and refine the overall VR
              experience.
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
              One of the first mechanics I built for BloodDrunk was the weapon
              shooting system. I started with something simple, but as the project
              grew it became clear that the range of weapons we'd planned needed a
              more complex, scalable system.
            </p>
            <p>
              I designed it around data tables, so designers could tweak weapon
              values on the fly without touching blueprint code. That kept
              development fast and let the team iterate on balance quickly.
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
            <b>Data Table Systems:</b> This let a designer or VFX artist open the
            weapon values directly and iterate on the fly. New weapons no longer
            needed a new blueprint, which sped up development and made balancing
            far quicker.
          </p>
          <p>
            <b>Shooting Ranges:</b> These let designers test weapon feel against
            patrolling AI targets. Built early in the project, they gave us a
            controlled space to evaluate and balance weapons before moving on to
            full level testing.
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
              Using inheritance, we built seven unique weapon classes spanning
              live projectile weapons and standard line-trace weapons. Since this
              was VR, feel mattered more than almost anything else, so I focused
              on haptics and feedback. Key elements included:
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
              Together, these elements made the VR shooting feel far more immersive.
            </p>
          </div>
        </div>
      </div>

      <div className="bd-card bd-card--stage bd-reveal">
        <div className="bd-eyebrow">Stage 06</div>
        <h3 className="bd-card-title">Conclusion</h3>
        <div className="bd-card-text">
          <p>
            I'm genuinely proud of what our team achieved on this project, and of
            my own contributions to it. Leading it was a real challenge, since it
            pushed me into a producer role rather than a purely technical one. The
            hardest part wasn't the technical work — it was the managerial side:
            keeping every department aligned to our weekly milestones while
            supporting each person's individual goals. I learned quickly that the
            biggest challenges tend to come from the things you don't see coming.
          </p>
          <p>
            From the start, I made it a priority to get to know each team member
            and understand their strengths and weaknesses. That let me assign
            tasks that actually suited people — some thrived working
            independently, others needed more guidance. Tailoring my approach
            this way made a real difference to how well the team worked together.
          </p>
          <p>
            At the outset, we set three key goals:
          </p>
          <ul>
            <li>Improve our Unreal Engine understanding</li>
            <li>Gain VR development experience</li>
            <li>Foster teamwork and communication</li>
          </ul>
          <p>
            We hit all three and shipped a solid vertical slice, but we want to
            go further. We're continuing development independently under our
            indie studio, "Redmist," aiming for a commercial release on Steam. It
            won't be an easy road, but we firmly believe this game has more in it
            than a vertical slice.
          </p>
          <p>
            After the university trip ended, we set up a Discord to keep
            collaborating remotely across countries, with clear goals: more
            levels, more gameplay, more fun. I'm excited for what comes next.
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
