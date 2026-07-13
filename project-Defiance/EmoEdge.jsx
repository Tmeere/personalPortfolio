import React, { useEffect, useRef, useState } from "react";
import ProjectHero from "../components/projectComponents/ProjectHeroSection";
import ProjectTagsBar from "../components/projectComponents/ProjectTagsBar";
import ProjectNavbar from "../components/projectComponents/ProjectNavbar";
import ProjectImageCarousel from "../components/projectComponents/ProjectImageCarousel";
import Footer from "../components/footer";
import ScrollToTop from "../src/ScrollToTop";
import "./EmoEdge.css";

const roleInfo = ["Technical Designer"];

const tags = ["AI", "Unreal", "Blueprint", "Learning", "Animation"];

const FlowDiagrams = [
  { src: "/images/Site Files/Flow1.png", alt: "Flow diagram 1", caption: "Flow Diagram 1" },
  { src: "/images/Site Files/Flow2.png", alt: "Flow diagram 2", caption: "Flow Diagram 2" },
  { src: "/images/Site Files/Flow3.png", alt: "Flow diagram 3", caption: "Flow Diagram 3" },
  { src: "/images/Site Files/Flow4.png", alt: "Flow diagram 4", caption: "Flow Diagram 4" },
];

const PlayerDiagrams = [
  { src: "/images/Site Files/Dia1.png", alt: "Joy ability diagram", caption: "Joy Ability Diagram" },
  { src: "/images/Site Files/Dia2.png", alt: "Fear ability diagram", caption: "Fear Ability Diagram" },
  { src: "/images/Site Files/Dia3.png", alt: "Rage ability diagram", caption: "Rage Ability Diagram" },
  { src: "/images/Site Files/Dia4.png", alt: "Sad ability diagram", caption: "Sad Ability Diagram" },
];

const WallRun = [
  { src: "/images/Site Files/WallRun1.png", alt: "Use of raycasts for wall detection", caption: "Use of Raycasts for Wall Detection" },
  { src: "/images/Site Files/WallRun4.png", alt: "Boosted jump following wall running", caption: "Boosted Jump Following Wall Running" },
];

const AIMethod = [
  { src: "/images/Site Files/AIMeth1.png", alt: "Taking many commands, executing many responses", caption: "Taking many commands, executing many responses" },
  { src: "/images/Site Files/AIMeth2.png", alt: "Taking many commands, filtering, and executing one", caption: "Taking many commands, filtering, and executing one" },
];

const AIBehaviour = [
  { src: "/images/Site Files/AIBev1.png", alt: "AI behavior tree, section 1", caption: "AI Behaviour 1" },
  { src: "/images/Site Files/AIBev2.png", alt: "AI behavior tree, section 2", caption: "AI Behaviour 2" },
  { src: "/images/Site Files/AIBev3.png", alt: "AI behavior tree, section 3", caption: "AI Behaviour 3" },
  { src: "/images/Site Files/AIBev4.png", alt: "AI behavior tree, section 4", caption: "AI Behaviour 4" },
];

const AIBlueprint = [
  { src: "/images/Site Files/BP1.png", alt: "AI behavior Blueprint, part 1", caption: "AI Behaviour Blueprint 1" },
  { src: "/images/Site Files/BP2.png", alt: "AI behavior Blueprint, part 2", caption: "AI Behaviour Blueprint 2" },
  { src: "/images/Site Files/BP3.png", alt: "AI behavior Blueprint, part 3", caption: "AI Behaviour Blueprint 3" },
  { src: "/images/Site Files/BP4.png", alt: "AI behavior Blueprint, part 4", caption: "AI Behaviour Blueprint 4" },
];

const responsibility = [
  "Learning and developing AI characters",
  "Building a high-octane shooter with a complete gameplay loop",
  "Improving technical understanding of Blueprint",
  "Developing a set of fun gameplay mechanics",
  "Further expanding my Unreal Engine knowledge and skillset",
];

const StageText = ({ stage, title, children }) => (
  <div className="ee-card ee-card--stage ee-reveal">
    {stage && <div className="ee-eyebrow">{stage}</div>}
    <h3 className="ee-card-title">{title}</h3>
    <div className="ee-card-text">{children}</div>
  </div>
);

const StageMedia = ({ stage, title, src, alt, contain, flip, children }) => (
  <div className={`ee-card ee-card--stage ee-media-text ${flip ? "ee-flip" : ""} ee-reveal`}>
    <div className="ee-media-frame">
      <img src={src} alt={alt} className="ee-media" style={contain ? { objectFit: "contain", background: "#000" } : undefined} />
    </div>
    <div>
      {stage && <div className="ee-eyebrow">{stage}</div>}
      <h3 className="ee-card-title">{title}</h3>
      <div className="ee-card-text">{children}</div>
    </div>
  </div>
);

const StageVideo = ({ stage, title, videoUrl, children }) => (
  <div className="ee-card ee-card--stage ee-video-text ee-reveal">
    <div className="ee-video">
      <iframe src={videoUrl} title={title} allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>
    <div>
      {stage && <div className="ee-eyebrow">{stage}</div>}
      <h3 className="ee-card-title">{title}</h3>
      <div className="ee-card-text">{children}</div>
    </div>
  </div>
);

const StageVideoImg = ({ stage, title, videoUrl, img, onZoom, children }) => (
  <div className="ee-card ee-card--stage ee-reveal">
    {stage && <div className="ee-eyebrow">{stage}</div>}
    <h3 className="ee-card-title">{title}</h3>
    <div className="ee-video-img">
      <div className="ee-video">
        <iframe src={videoUrl} title={title} allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <div className="ee-media-frame">
        <img
          src={img.src}
          alt={img.alt}
          className="ee-media ee-media-zoomable"
          style={img.contain ? { objectFit: "contain", background: "#000" } : undefined}
          onClick={() => onZoom({ src: img.src, alt: img.alt })}
          title="Click to expand"
        />
      </div>
    </div>
    {children && <div className="ee-card-text" style={{ marginTop: "var(--space-4)" }}>{children}</div>}
  </div>
);

const StageDual = ({ stage, title, media1, media2, onZoom, children }) => (
  <div className="ee-card ee-card--stage ee-reveal">
    {stage && <div className="ee-eyebrow">{stage}</div>}
    <h3 className="ee-card-title">{title}</h3>
    <div className="ee-dual-media">
      <div className="ee-media-frame">
        <img
          src={media1.src}
          alt={media1.alt}
          className="ee-media ee-media-zoomable"
          style={media1.contain ? { objectFit: "contain", background: "#000" } : undefined}
          onClick={() => onZoom({ src: media1.src, alt: media1.alt })}
          title="Click to expand"
        />
        <span className="ee-media-tag">{media1.tag}</span>
      </div>
      <div className="ee-media-frame">
        <img
          src={media2.src}
          alt={media2.alt}
          className="ee-media ee-media-zoomable"
          style={media2.contain ? { objectFit: "contain", background: "#000" } : undefined}
          onClick={() => onZoom({ src: media2.src, alt: media2.alt })}
          title="Click to expand"
        />
        <span className="ee-media-tag">{media2.tag}</span>
      </div>
    </div>
    {children && <div className="ee-card-text" style={{ marginTop: "var(--space-4)" }}>{children}</div>}
  </div>
);

const ProjectDefiance = () => {
  const pageRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const targets = pageRef.current.querySelectorAll(".ee-reveal");
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
    <div className="ee-page" ref={pageRef}>
      <ScrollToTop />
      <ProjectNavbar />
      <ProjectHero
        title="Emo Edge"
        showLogo={false}
        videoUrl="https://www.youtube.com/embed/idcMbMSL6Rk?autoplay=1&loop=1&playlist=idcMbMSL6Rk&mute=1"
        roleInfo={roleInfo}
        leftInfo={responsibility}
        leftTitle="Key Responsibilities"
        background="#181818"
        cardBackground="#232323"
        heroImage="/images/Site Files/EmoSplash.png"
        summary={
          <>
            Stay fast and clear room after room in this high-octane shooter —
            speed is everything. Complete the level before the timer runs out,
            and match your aspect to the enemy's if you want to deal damage!
          </>
        }
        downloadLinks={[
          {
            url: "/images/Site Files/Emo Edge Making Of.pdf",
            label: "Making Of Document",
            description: "Please read for the full project summary",
          },
        ]}
      />
      <ProjectTagsBar tags={tags} />

      <StageVideo stage="Stage 01" title="Overview" videoUrl="https://www.youtube.com/embed/idcMbMSL6Rk?autoplay=1&loop=1&playlist=idcMbMSL6Rk&mute=1">
        <p>
          In this adrenaline-pumping shooter, you'll navigate diverse rooms
          and environments, engaging enemies that come at you relentlessly.
          Match your abilities to each environment to take these foes down
          before the timer runs out.
        </p>
        <p>
          My primary goal for this project was to create an engaging game
          while deepening my understanding of Unreal Engine, with a few key
          learning outcomes in mind:
        </p>
        <ul>
          <li>Develop expertise as a Gameplay/Technical Designer</li>
          <li>Further Blueprint development</li>
          <li>Master AI fundamentals, including Finite State Machines</li>
          <li>Understand Animation State Machines</li>
          <li>Implement high-octane movement mechanics</li>
        </ul>
        <p>With these objectives in mind, I set out to create Emo Edge.</p>
      </StageVideo>

      <div className="ee-card ee-reveal">
        <img
          src="/images/Site Files/GameLoop.jpg"
          alt="Emo Edge Gameplay Showcase"
          className="ee-single-media ee-media-zoomable"
          onClick={() => setLightbox({ src: "/images/Site Files/GameLoop.jpg", alt: "Emo Edge Gameplay Showcase" })}
          title="Click to expand"
        />
        <div className="ee-card-text" style={{ marginTop: "var(--space-4)", textAlign: "center" }}>
          <p>When starting this project, I built a simple game loop first, to understand what I was aiming for.</p>
        </div>
      </div>

      <StageDual
        stage="Stage 02"
        title="Gameplay Highlights"
        onZoom={setLightbox}
        media1={{ src: "/images/Site Files/ProjPlan.png", alt: "Project plan and timeline sketch", tag: "Project Plan", contain: true }}
        media2={{ src: "/images/Site Files/Inspo.png", alt: "Inspiration reference for similar titles", tag: "Inspiration", contain: true }}
      >
        <p>Alongside this, I researched similar titles for inspiration and mapped out the project's timeline and scope.</p>
      </StageDual>

      <StageVideo stage="Stage 03" title="Initial Phases" videoUrl="https://www.youtube.com/embed/7oGpFN4gbcg?autoplay=1&loop=1&playlist=7oGpFN4gbcg&mute=1">
        <p>
          In the early stages, I focused on prototyping simple line-trace
          functions that applied damage to the cube only when the player was
          in the correct Enum State.
        </p>
        <p>Each Aspect featured a unique ability, governed by a mana meter that regenerated over time.</p>
        <p>
          Each system's fire mode varied — from automatic firing to charged
          single shots — all managed through the Enum State.
        </p>
      </StageVideo>

      <ProjectImageCarousel images={FlowDiagrams} />

      <div className="ee-title-bar ee-reveal">
        <h2>Combat States Development</h2>
      </div>

      <StageDual
        stage="Stage 04"
        title="Rage Aspect"
        onZoom={setLightbox}
        media1={{ src: "/images/Site Files/Rage1.png", alt: "Rage aspect ability icon", tag: "Icon", contain: true }}
        media2={{ src: "/images/Site Files/Rage2.gif", alt: "Rage aspect fire projectile in action", tag: "In Action" }}
      >
        <p>Fire Projectile applies an Actor Component that burns the enemy over time (DOT).</p>
      </StageDual>

      <StageDual
        stage="Stage 05"
        title="Sad Aspect"
        onZoom={setLightbox}
        media1={{ src: "/images/Site Files/Sad2.png", alt: "Sad aspect ability icon", tag: "Icon", contain: true }}
        media2={{ src: "/images/Site Files/Sad1.gif", alt: "Sad aspect automatic fire in action", tag: "In Action" }}
      >
        <p>Fully automatic fire while the mouse is held down.</p>
      </StageDual>

      <StageDual
        stage="Stage 06"
        title="Fear Aspect"
        onZoom={setLightbox}
        media1={{ src: "/images/Site Files/Fear2.png", alt: "Fear aspect ability icon", tag: "Icon", contain: true }}
        media2={{ src: "/images/Site Files/Fear1.gif", alt: "Fear aspect flame damage-over-time in action", tag: "In Action" }}
      >
        <p>Constant damage-over-time while standing in the path of the flame.</p>
      </StageDual>

      <StageDual
        stage="Stage 07"
        title="Joy Aspect"
        onZoom={setLightbox}
        media1={{ src: "/images/Site Files/Joy2.png", alt: "Joy aspect ability icon", tag: "Icon", contain: true }}
        media2={{ src: "/images/Site Files/Joy1.gif", alt: "Joy aspect charged attack in action", tag: "In Action" }}
      >
        <p>A charged attack that regains player mana based on the number of enemies hit.</p>
      </StageDual>

      <ProjectImageCarousel images={PlayerDiagrams} />

      <StageText stage="Stage 08" title="Movement Mechanics">
        <p>Alongside the shooting mechanics, I developed a range of movement mechanics, including:</p>
        <ul>
          <li>Sliding</li>
          <li>Wall Running</li>
          <li>Grapple Points</li>
          <li>Dodging</li>
        </ul>
        <p>
          Building these systems meant not just implementing each mechanic
          individually, but making sure they all worked well together from a
          design perspective.
        </p>
      </StageText>

      <StageMedia stage="Stage 09" title="Wall-Running System: Technical Breakdown" src="/images/Site Files/WallRun.png" alt="Player Ability Example">
        <p>The wall-running component is built using a three-part system for the player.</p>
        <p>
          When the player jumps, a wall check runs on either side to see if
          they're adjacent to a yellow wall — a wall-running zone. If so, the
          player transitions into a new movement mode called <b>flying</b>.
        </p>
        <p>
          During this mode, the player tilts smoothly toward the wall and
          receives a constant force propelling them along it. The system
          continuously checks that they remain attached — if they move away
          or the run ends, they exit the mode.
        </p>
      </StageMedia>

      <StageMedia stage="Stage 10" title="Wall-Running System: Gameplay Feel" src="/images/Site Files/Wall Running.gif" alt="Player Ability Example" flip>
        <p>
          To add more feel to wall running, players get a boosted jump when
          detaching from the wall — one that also smooths the transition into
          other movement mechanics like sliding.
        </p>
        <p>
          This makes movement feel more dynamic and satisfying across every
          level and encounter.
        </p>
      </StageMedia>

      <StageDual
        stage="Stage 11"
        title="Development Progress"
        onZoom={setLightbox}
        media1={{ src: "/images/Site Files/WallUI.png", alt: "Wall-running indicator UI, inactive state", tag: "Inactive" }}
        media2={{ src: "/images/Site Files/WallUI2.png", alt: "Wall-running indicator UI, active state", tag: "Active" }}
      >
        <p>Wall-running opportunities are indicated to the player by white arrows on either side of the crosshair, giving a clear visual cue.</p>
      </StageDual>

      <ProjectImageCarousel images={WallRun} />

      <StageMedia stage="Stage 12" title="Sliding: Technical Breakdown" src="/images/Site Files/WallRunDia.png" alt="Player Ability Example">
        <p>
          Alongside wall running, I developed a sliding mechanic. I first used
          an actor-checking method similar to wall running's approach, but it
          proved performance-intensive and less versatile across sloped
          surfaces.
        </p>
        <p>
          I switched to a floor-checking method instead: when the player
          crouches, the system checks whether the floor's angle exceeds 17
          degrees. It's more efficient and works on any sloped surface,
          rather than relying on specific objects.
        </p>
        <p>
          To achieve a smooth sliding experience and integrate it seamlessly with
          other movement mechanics, I fine-tuned three key character movement
          variables:
        </p>
        <p>
          <b>Ground Friction:</b> Adjusted to control the drag during sliding.
          <br />
          <b>Gravity Scale:</b> Modified to influence the speed and acceleration of the slide.
          <br />
          <b>Walkable Floor Angle:</b> Updated to ensure the sliding mechanic works consistently on various slopes.
        </p>
      </StageMedia>

      <StageDual
        stage="Stage 13"
        title="Sliding Mechanic Visuals"
        onZoom={setLightbox}
        media1={{ src: "/images/Site Files/Slide1.png", alt: "Sliding Mechanic Example 1", tag: "Slide Visual 1", contain: true }}
        media2={{ src: "/images/Site Files/Slide2.png", alt: "Sliding Mechanic Example 2", tag: "Slide Visual 2", contain: true }}
      >
        <p>Check the floor angle to apply frictionless state to the player during crouch.</p>
      </StageDual>

      <StageVideo stage="Stage 14" title="Sliding: Gameplay Feel" videoUrl="https://www.youtube.com/embed/NiXJ4G9YhXc?autoplay=1&loop=1&playlist=NiXJ4G9YhXc&mute=1">
        <p>
          Together, these adjustments make sliding feel smooth and
          responsive, complementing the game's other movement systems.
        </p>
        <p>
          I also layered on small touches like FOV changes, camera shakes,
          and tilts to make the slide feel more impactful.
        </p>
      </StageVideo>

      <StageMedia stage="Stage 15" title="Grapple: Technical Breakdown" src="/images/Site Files/GrappleDia.jpg" alt="Player Ability Example" flip>
        <p>
          Player testing on the initial builds showed players wanted better
          connectivity between movement mechanics and more high-octane
          movement options. That led me to build a grapple mechanic, similar
          to Ghostrunner's system.
        </p>
        <p>
          It started as a simple lerp vector triggered when a line trace hit
          an actor tagged "Grapple." I later added launch forces after the
          lerp for extra movement.
        </p>
        <p>
          I also attached a cable to the player's hand that appears only
          while grappling, bound to the grapple's end position.
        </p>
        <p>Combined with sliding, this helped tie the high-octane movement mechanics together.</p>
      </StageMedia>

      <StageVideoImg
        stage="Stage 16"
        title="Grapple Mechanic In Action"
        videoUrl="https://www.youtube.com/embed/CL8S6SieLR0?autoplay=1&loop=1&playlist=CL8S6SieLR0&mute=1"
        img={{ src: "/images/Site Files/GrappleShot.png", alt: "Grapple mechanic in action" }}
        onZoom={setLightbox}
      />

      <StageVideo stage="Stage 17" title="Dashing: Gameplay Feel" videoUrl="https://www.youtube.com/embed/D0hg8HAqsAg?autoplay=1&loop=1&playlist=D0hg8HAqsAg&mute=1">
        <p>
          One of the key player mechanics I developed is the dodge system.
          Players have two dash charges that regenerate while idle, and dash
          in whichever direction they're moving.
        </p>
        <p>To sell the feel, I applied custom time dilation and adjusted ground friction, making the dodge feel smooth and impactful.</p>
      </StageVideo>

      <StageVideoImg
        stage="Stage 18"
        title="Dash Mechanic Visuals"
        videoUrl="https://www.youtube.com/embed/iuGoAK1NNyw?autoplay=1&mute=1&loop=1&playlist=iuGoAK1NNyw&start=2"
        img={{ src: "/images/Site Files/PickupEmo.png", alt: "Dash mechanic in action", contain: true }}
        onZoom={setLightbox}
      >
        <p>Visual demonstration of the dash mechanic in action, highlighting direction and time dilation effects.</p>
      </StageVideoImg>

      <StageVideoImg
        stage="Stage 19"
        title="Kick Mechanic Visuals"
        videoUrl="https://www.youtube.com/embed/eSYDSYbuDAw?autoplay=1&mute=1&loop=1&playlist=eSYDSYbuDAw&start=2"
        img={{ src: "/images/Site Files/KickEmo.png", alt: "Kick mechanic in action", contain: true }}
        onZoom={setLightbox}
      >
        <p>Visual demonstration of the kick mechanic in action, used as a melee option when players run out of ammo.</p>
      </StageVideoImg>

      <StageText stage="Stage 20" title="Melee Options">
        <p>
          Alongside the movement mechanics, I developed combat features to
          complement the shooting system — kicking and throwing mechanics
          that give players alternative options when they're out of ammo.
          This added depth gives players more versatile strategies in combat.
        </p>
      </StageText>

      <StageText stage="Stage 21" title="AI Development">
        <p>
          AI prototyping was the second key component I tackled early on. For
          initial testing, I built a simple AI class that moved a cube to the
          player's position. It was a good starting point, but I needed more,
          so I reached out to programmers for pointers on AI development.
        </p>
      </StageText>

      <StageVideoImg
        stage="Stage 22"
        title="AI Behavior Demo"
        videoUrl="https://www.youtube.com/embed/irWZA0EgGqU?autoplay=1&mute=1&loop=1&playlist=irWZA0EgGqU&start=81"
        img={{ src: "/images/Site Files/AI.png", alt: "AI behavior demonstration", contain: true }}
        onZoom={setLightbox}
      />

      <StageMedia stage="Stage 23" title="AI System: State Machine Approach" src="/images/Site Files/AIState.png" alt="AI State Machine Diagram" contain>
        <p>I had two approaches to choose from:</p>
        <ul>
          <li>Finite State Machines</li>
          <li>Behavior Trees</li>
        </ul>
        <p>
          Weighing the pros and cons, I went with finite state machines — I
          had a range of new topics to learn under a tight timeline, and
          wanted to implement several AI states quickly within one class.
          After some trial and error, I built four distinct AI states for the
          game's four enemy archetypes.
        </p>
        <p>The state selector is dictated by an Enum variable for what behavior is going to play.</p>
      </StageMedia>

      <ProjectImageCarousel images={AIMethod} />

      <StageText stage="Stage 24" title="AI Improvement">
        <p>
          When I first built the AI, nested timers conflicted with each other
          inside the blueprint, triggering incorrect states at the wrong
          times. To fix this, I revamped the structure, converting nearly all
          events into tasks — each one must complete before the next function
          can fire, controlled mostly through bools and gates.
        </p>
      </StageText>

      <ProjectImageCarousel images={AIBehaviour} />
      <ProjectImageCarousel images={AIBlueprint} />

      <div className="ee-title-bar ee-reveal">
        <h2>Animation System Development</h2>
      </div>

      <StageDual
        stage="Stage 25"
        title="Animation State Machines"
        onZoom={setLightbox}
        media1={{ src: "/images/Site Files/Anim1.png", alt: "Enemy AI animation state machine", tag: "Enemy AI", contain: true }}
        media2={{ src: "/images/Site Files/Anim2.png", alt: "Player animation state machine", tag: "Player", contain: true }}
      >
        <p>
          As the project scaled up, I wanted to properly understand animation
          state machines across all the game's entities. I ended up building
          three distinct animation behaviors:
        </p>
        <ul>
          <li>Enemy AI</li>
          <li>First Person Animation</li>
          <li>Lower Body Legs</li>
        </ul>
        <p>
          One interesting challenge came from handling both leg animations
          and first-person arm animations for the player. I ended up
          splitting them into two separate components animated
          independently, rather than one shared tree — for the legs, the
          upper torso is hidden so the player only sees themselves from the
          waist down.
        </p>
      </StageDual>

      <div className="ee-title-bar ee-reveal">
        <h2>Level Design</h2>
      </div>

      <StageText stage="Stage 26" title="Level Iteration">
        <p>
          Level design wasn't a primary goal, but it was essential for
          showcasing a high-octane shooter. Several maps were built over the
          project's development cycle.
        </p>
        <p>
          They started as testing grounds for the player mechanics, then
          grew into full levels. These were user-tested and iterated on, and
          the final version shipped with two levels showcasing all the
          gameplay mechanics.
        </p>
      </StageText>

      <StageDual
        stage="Stage 27"
        title="Level Prototypes"
        onZoom={setLightbox}
        media1={{ src: "/images/Site Files/Lvl1.png", alt: "Testing room prototype", tag: "Testing Room", contain: true }}
        media2={{ src: "/images/Site Files/Lvl2.png", alt: "Practice map prototype", tag: "Practice Map", contain: true }}
      >
        <p>Initial room prototypes for the game, including a testing room and a practice map.</p>
      </StageDual>

      <StageDual
        stage="Stage 28"
        title="Additional Level Prototypes"
        onZoom={setLightbox}
        media1={{ src: "/images/Site Files/Lvl3.png", alt: "Room prototype variant 1", tag: "Variant 1", contain: true }}
        media2={{ src: "/images/Site Files/Lvl4.png", alt: "Room prototype variant 2", tag: "Variant 2", contain: true }}
      >
        <p>Additional room prototypes used for early testing and iteration.</p>
      </StageDual>

      <StageDual
        stage="Stage 29"
        title="Level Room 1"
        onZoom={setLightbox}
        media1={{ src: "/images/Site Files/Room1A.png", alt: "Level room 1, screenshot 1", tag: "Room 1 – A", contain: true }}
        media2={{ src: "/images/Site Files/Room1B.png", alt: "Level room 1, screenshot 2", tag: "Room 1 – B", contain: true }}
      />

      <StageDual
        stage="Stage 30"
        title="Level Room 2"
        onZoom={setLightbox}
        media1={{ src: "/images/Site Files/Room2A.png", alt: "Level room 2, screenshot 1", tag: "Room 2 – A", contain: true }}
        media2={{ src: "/images/Site Files/Room2B.png", alt: "Level room 2, screenshot 2", tag: "Room 2 – B", contain: true }}
      />

      <StageDual
        stage="Stage 31"
        title="Level Room 3"
        onZoom={setLightbox}
        media1={{ src: "/images/Site Files/Room3A.png", alt: "Level room 3, screenshot 1", tag: "Room 3 – A", contain: true }}
        media2={{ src: "/images/Site Files/Room3B.png", alt: "Level room 3, screenshot 2", tag: "Room 3 – B", contain: true }}
      />

      <StageText stage="Stage 32" title="Conclusion">
        <p>
          Overall, I'm very pleased with the final results. My primary goals
          were to deepen my understanding of Unreal Engine and sharpen my
          Blueprint skills, and building a complex player character, dynamic
          AI, and a range of mechanics delivered on that. It was a
          significant success, though there are still areas I see room to
          improve.
        </p>
        <p>
          Moving forward, I plan to explore more advanced AI, like behavior
          trees, since I found learning AI particularly rewarding. I also
          want to focus more on optimization — as the player's abilities and
          mechanics grew in complexity, performance issues crept in, and I'll
          be breaking down components and optimizing resource-intensive
          mechanics like wall running.
        </p>
        <p>
          I'm proud to have hit the objectives outlined in my initial MoSCoW
          briefs. This project advanced my technical skills in Unreal Engine
          and gave me insights I'll carry into future projects.
        </p>
      </StageText>

      <Footer />

      {lightbox && (
        <div className="ee-lightbox" onClick={() => setLightbox(null)}>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="ee-lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="ee-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDefiance;
