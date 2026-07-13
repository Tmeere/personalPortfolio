import React, { useEffect, useRef, useState } from "react";
import ProjectHero from "../components/projectComponents/ProjectHeroSection";
import ProjectTagsBar from "../components/projectComponents/ProjectTagsBar";
import ProjectNavbar from "../components/projectComponents/ProjectNavbar";
import ProjectImageCarousel from "../components/projectComponents/ProjectImageCarousel";
import Footer from "../components/footer";
import ScrollToTop from "../src/ScrollToTop";
import "./Portside.css";

const roleInfo = ["Level Designer"];

const tags = ["TF2", "Level Design", "Multiplayer", "Hammer Editor", "Balancing"];

const Maps = [
  { src: "/images/Site Files/P4.jpg", alt: "Undocking containers area", caption: "Undocking Containers" },
  { src: "/images/Site Files/P5.jpg", alt: "Undocking containers area", caption: "Undocking Containers" },
  { src: "/images/Site Files/P6.png", alt: "Undocking containers area", caption: "Undocking Containers" },
  { src: "/images/Site Files/P7.png", alt: "Undocking containers area", caption: "Undocking Containers" },
  { src: "/images/Site Files/P8.png", alt: "Undocking containers area", caption: "Undocking Containers" },
  { src: "/images/Site Files/P3.jpg", alt: "Undocking containers area", caption: "Undocking Containers" },
  { src: "/images/Site Files/P2.jpg", alt: "Blu side sniper tower", caption: "Blu Side Sniper Tower" },
  { src: "/images/Site Files/P1.jpg", alt: "Red side canal", caption: "Red Side Canal" },
];

const Blockout = [
  { src: "/images/Site Files/GIF Sketch Portside Initial.gif", alt: "Initial map sketch", caption: "Initial Map Sketch" },
  { src: "/images/Site Files/Portside Initial Plans.jpg", alt: "Map design iteration 1", caption: "Map Design Iteration 1" },
  { src: "/images/Site Files/Portside Further Itterations.png", alt: "Further tweaks and refining to the map", caption: "Further Tweaks and Refining" },
  { src: "/images/Site Files/Portside Map Itteration 3.jpg", alt: "Final map design at in-game scale", caption: "Final Map Design to In-Game Scale" },
  { src: "/images/Site Files/Map1.png", alt: "Height map, inner section", caption: "Height Map: Inner Section" },
  { src: "/images/Site Files/Map22.png", alt: "Height map, upper sections", caption: "Height Map: Upper Sections" },
  { src: "/images/Site Files/Map33.png", alt: "Map buffer zones", caption: "Map Buffer Zones" },
  { src: "/images/Site Files/Info1.png", alt: "Health information reference", caption: "Health Information" },
  { src: "/images/Site Files/Info2.png", alt: "King of the Hill capture rates reference", caption: "KOTH Capture Rates" },
  { src: "/images/Site Files/Info3.jpg", alt: "Core character information reference", caption: "Core Character Information" },
];

const MapBlockout = [
  { src: "/images/Site Files/Development 1_edited.jpg", alt: "Rough initial blockout", caption: "Rough Initial Blockout" },
  { src: "/images/Site Files/Development 2.png", alt: "Further map blockouts", caption: "Further Map Blockouts" },
  { src: "/images/Site Files/Development 3.png", alt: "Further tweaks and refining to the blockout", caption: "Further Tweaks and Refining" },
  { src: "/images/Site Files/Development 4.png", alt: "Adding the exterior warehouse", caption: "Adding Exterior Warehouse" },
];

const responsibility = [
  "Developed a balanced and engaging King of the Hill map for TF2 (Team Fortress 2)",
  "Ran QA testing sessions with players to ensure a fair and balanced experience for all classes",
  "Learned and applied multiplayer level design theory",
  "Published the map on the Steam Workshop",
];

const CompareCard = ({ stage, title, src1, alt1, src2, alt2, children, onZoom }) => (
  <div className="pt-card pt-card--stage pt-reveal">
    {stage && <div className="pt-eyebrow">{stage}</div>}
    <h3 className="pt-card-title">{title}</h3>
    <div className="pt-compare">
      <div className="pt-media-frame">
        <img
          src={src1}
          alt={alt1}
          className="pt-media pt-media-zoomable"
          onClick={() => onZoom({ src: src1, alt: alt1 })}
          title="Click to expand"
        />
        <span className="pt-media-tag pt-media-tag--before">Before</span>
      </div>
      <div className="pt-media-frame">
        <img
          src={src2}
          alt={alt2}
          className="pt-media pt-media-zoomable"
          onClick={() => onZoom({ src: src2, alt: alt2 })}
          title="Click to expand"
        />
        <span className="pt-media-tag pt-media-tag--after">After</span>
      </div>
      <div className="pt-card-text">{children}</div>
    </div>
  </div>
);

const ProjectDefiance = () => {
  const pageRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const targets = pageRef.current.querySelectorAll(".pt-reveal");
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
    <div className="pt-page" ref={pageRef}>
      <ScrollToTop />
      <ProjectNavbar />
      <ProjectHero
        title="Portside"
        showLogo={false}
        videoUrl="https://www.youtube.com/embed/gganVfSJ7M4?autoplay=1&loop=1&playlist=gganVfSJ7M4&mute=1"
        roleInfo={roleInfo}
        leftInfo={responsibility}
        leftTitle="Key Responsibilities"
        background="#181818"
        cardBackground="#232323"
        heroImage="/images/Site Files/PortsideSplash.jpg"
        summary={
          <>
            Fight on this KOTH map for control of the Port. Two ships enter, one
            will leave... <br />
            -Hammer Editor
          </>
        }
        downloadLinks={[
          {
            url: "/images/Site Files/DesignDocPort.pdf",
            label: "Level Design Doc",
            description: "Map Decisions",
          },
          {
            url: "/images/Site Files/DevLogPort.pdf",
            label: "Development Log",
            description: "Improvements / Iterations",
          },
          {
            url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3062704992&searchtext=Portsidei",
            label: "Download Link",
            description: "Linked On Steam",
          },
          {
            url: "/images/Site Files/ExtraAssets.zip",
            label: "Extra Assets/Textures",
            description: "Map Extra Assets & Textures",
          },
        ]}
      />
      <ProjectTagsBar tags={tags} />

      <div className="pt-card pt-card--stage pt-video-text pt-reveal">
        <div className="pt-video">
          <iframe
            src="https://www.youtube.com/embed/B2UbhAX0L9Y?autoplay=1&loop=1&playlist=B2UbhAX0L9Y&mute=1"
            title="Overview"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div>
          <div className="pt-eyebrow">Stage 01</div>
          <h3 className="pt-card-title">Overview</h3>
          <div className="pt-card-text">
            <p>
              I created a King of the Hill map for TF2, now live on the Steam
              Workshop. It took 8 weeks, during which I learned the Hammer
              Editor from scratch.
            </p>
            <p>Designed for 12v12 gameplay, the map underwent continuous refinement based on user feedback and testing.</p>
            <p>
              During testing, I observed matches as an independent observer,
              which let me spot player frustrations and refine the map design
              accordingly.
            </p>
            <p>
              This project taught me the core fundamentals of level design
              and gave me valuable insight into what makes a TF2 map enjoyable,
              along with a wider understanding of multiplayer level design.
            </p>
            <p>
              You'll need to add the extra assets to your TF2 files to see the
              additional textures and models in-game — the download is linked
              above.
            </p>
          </div>
        </div>
      </div>

      <ProjectImageCarousel images={Maps} />
      <ProjectImageCarousel images={MapBlockout} />

      <div className="pt-title-bar pt-reveal">
        <h2>Research &amp; Planning</h2>
      </div>

      <div className="pt-card pt-card--stage pt-reveal">
        <div className="pt-eyebrow">Stage 02</div>
        <h3 className="pt-card-title">Initial Stages</h3>
        <div className="pt-card-text">
          <p>
            In the early stages, I focused on researching map design
            philosophies for team-based shooters, particularly existing TF2
            maps. Understanding these principles first was essential — it's
            what kept me from building a subpar map. I analyzed maps from TF2,
            Overwatch, and Valorant for a broader sense of map theory, and
            studied gameplay fundamentals like character health and abilities
            to keep the design well-rounded.
          </p>
          <p>
            From there, I moved through several stages of map design,
            starting with simple sketches that went through multiple
            iterations. Once I had a clearer vision, I moved into the Hammer
            Editor to develop the map further.
          </p>
          <p>
            At this stage, it was essential to build in a lane structure —
            three main pathways (short, medium, and long) with distinct areas
            for different character classes. A map that accommodates every
            class goes a long way toward balanced gameplay.
          </p>
          <p>
            Once I had a rough level design, I created a clear, to-scale
            (1:1) map layout before beginning the initial level blockouts.
          </p>
        </div>
      </div>

      <ProjectImageCarousel images={Blockout} />

      <div className="pt-card pt-card--stage pt-video-text pt-reveal">
        <div className="pt-video">
          <iframe
            src="https://www.youtube.com/embed/9U1u3Cp41hk?autoplay=1&loop=1&playlist=9U1u3Cp41hk&mute=1"
            title="Initial Development"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div>
          <div className="pt-eyebrow">Stage 03</div>
          <h3 className="pt-card-title">Initial Development</h3>
          <div className="pt-card-text">
            <p>
              With research and planning done, I took my first steps into the
              Hammer Editor and started the initial blockout. One early
              challenge was scale — my mockups didn't quite match reality, so
              I readjusted to better fit typical TF2 map proportions. At this
              stage, breaking work into small chunks and iterating quickly
              with other playtesters mattered most.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-card pt-card--stage pt-media-text pt-flip pt-reveal">
        <div className="pt-media-frame">
          <img src="/images/Site Files/MapCutout.png" alt="Map cutout view" className="pt-media" />
        </div>
        <div>
          <div className="pt-eyebrow">Stage 04</div>
          <h3 className="pt-card-title">Map Iterations</h3>
          <div className="pt-card-text">
            <p>
              Later in the project, small but impactful changes were shaped
              almost entirely by player testing. I made a point of observing
              as an outsider rather than playing myself, since a level
              designer plays very differently from an actual player — playing
              it myself would have introduced bias. After every test, I
              collected feedback through Google Forms, focused on key pain
              points.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-title-bar pt-reveal">
        <h2>Map Example Changes</h2>
      </div>

      <CompareCard
        stage="Stage 05"
        title="Improving Courtyard"
        src1="/images/Site Files/Itter1A.png"
        alt1="Courtyard before adding a cover pillar"
        src2="/images/Site Files/Itter1B.png"
        alt2="Courtyard after adding a cover pillar"
        onZoom={setLightbox}
      >
        <p>
          The long, exposed sightline made this area unusable for medium- and
          short-range characters without getting picked off from afar. Adding
          a pillar gave them cover, forcing snipers to play more aggressively
          — and accept more risk — if they wanted to hold the long channel.
        </p>
      </CompareCard>

      <CompareCard
        stage="Stage 06"
        title="Tower Backboards"
        src1="/images/Site Files/Itter2A.png"
        alt1="Tower position before backboards were added"
        src2="/images/Site Files/Itter2B.png"
        alt2="Tower position with backboards added"
        onZoom={setLightbox}
      >
        <p>
          Backboards at the tower positions let characters like Demoman and
          Soldier hit enemies in these spots, improving fairness without
          taking away the cover Engineer and Sniper rely on.
        </p>
      </CompareCard>

      <CompareCard
        stage="Stage 07"
        title="Adding Height"
        src1="/images/Site Files/Itter3A.png"
        alt1="Lower section before added catwalks"
        src2="/images/Site Files/Itter3B.png"
        alt2="Lower section with catwalks added"
        onZoom={setLightbox}
      >
        <p>
          Additional catwalks in the lower sections encourage more diverse
          combat. The extra verticality opens up more dynamic plays, giving
          characters like Medic and Engineer more options for movement and
          setup.
        </p>
      </CompareCard>

      <CompareCard
        stage="Stage 08"
        title="Enhanced Protection"
        src1="/images/Site Files/Itter4A.png"
        alt1="Sniper sightline before added cover"
        src2="/images/Site Files/Itter4B.png"
        alt2="Sniper sightline with added cover"
        onZoom={setLightbox}
      >
        <p>
          It became clear during development that snipers dominated the long,
          open sightlines out of spawn, making it hard for players to leave
          safely. We added extra protection and cover to cut that channel off
          from external lanes of play, improving overall balance.
        </p>
      </CompareCard>

      <div className="pt-title-bar pt-reveal">
        <h2>Map Readability</h2>
      </div>

      <CompareCard
        stage="Stage 09"
        title="Improving Map Readability"
        src1="/images/Site Files/Read1A.png"
        alt1="Map area before added signage"
        src2="/images/Site Files/Read1B.png"
        alt2="Map area with added signage"
        onZoom={setLightbox}
      >
        <p>
          Playtesting showed players were confused by certain map elements —
          water hazards, exits, resupply points near spawn. That feedback led
          me to add signage throughout the map to improve clarity and guide
          players more effectively.
        </p>
      </CompareCard>

      <CompareCard
        stage="Stage 10"
        title="Dividing The Map"
        src1="/images/Site Files/Read2A.png"
        alt1="Map area before texturing"
        src2="/images/Site Files/Read2B.png"
        alt2="Map area after texturing and team-side indicators"
        onZoom={setLightbox}
      >
        <p>
          As the project moved out of the blockout phase, I focused on
          textures and models to sharpen the map's look and feel. Beyond
          visual polish, this improved navigation by clearly indicating each
          team's side and where the enemy flow comes from.
        </p>
      </CompareCard>

      <div className="pt-card pt-card--stage pt-video-text pt-reveal">
        <div className="pt-video">
          <iframe
            src="https://www.youtube.com/embed/C_CVLGR7aIU?autoplay=1&loop=1&playlist=C_CVLGR7aIU&mute=1"
            title="Conclusions"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div>
          <div className="pt-eyebrow">Stage 11</div>
          <h3 className="pt-card-title">Conclusions</h3>
          <div className="pt-card-text">
            <p>
              Overall, I'm very pleased with this project's outcome — I set
              out to learn the Hammer Editor, publish a map to the Steam
              Workshop, and understand multiplayer level design, and I
              managed all three.
            </p>
            <p>
              Looking back, iteration and extensive player testing turned out
              to be essential to a successful level. I underestimated the
              impact of player feedback at first, but it proved crucial in
              shaping the final result.
            </p>
            <p>
              As I look ahead, I'm excited to be featured in the university
              highlights for this project. This recognition inspires me to continue
              refining my skills and exploring new opportunities in level design.
            </p>
          </div>
        </div>
      </div>
      <Footer />

      {lightbox && (
        <div className="pt-lightbox" onClick={() => setLightbox(null)}>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="pt-lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="pt-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDefiance;
