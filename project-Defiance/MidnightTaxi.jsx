import React, { useEffect, useRef, useState } from "react";
import ProjectHero from "../components/projectComponents/ProjectHeroSection";
import ProjectTagsBar from "../components/projectComponents/ProjectTagsBar";
import ProjectNavbar from "../components/projectComponents/ProjectNavbar";
import ProjectImageCarousel from "../components/projectComponents/ProjectImageCarousel";
import Footer from "../components/footer";
import ScrollToTop from "../src/ScrollToTop";
import "./MidnightTaxi.css";

const roleInfo = ["Lead Game Designer"];

const tags = ["Unreal", "Blueprint", "Leadership", "Jira", "QA", "GitHub", "Optimization"];

const UIImages = [
  {
    src: "/images/Site Files/UI1.png",
    alt: "Concept: Initial interior taxi designs",
    caption: "Concept: Initial Interior Taxi Designs",
  },
  {
    src: "/images/Site Files/UI2.png",
    alt: "UI: Chapter selector based on nights",
    caption: "UI: Chapter Selector Based On Nights",
  },
  {
    src: "/images/Site Files/UI3.png",
    alt: "Intro cutscene title card that appears on launch",
    caption: "Intro Cutscene: Title Card That Appears on Launch",
  },
  {
    src: "/images/Site Files/UI4.png",
    alt: "Layout: controls layout presented to player",
    caption: "Layout: Controls Layout Presented To Player",
  },
];
const EnvirShot = [
  {
    src: "/images/Site Files/Envir.png",
    alt: "Level design: map shot 1",
    caption: "Level Design: Map Shots",
  },
  {
    src: "/images/Site Files/Envir2.png",
    alt: "Level design: map shot 2",
    caption: "Level Design: Map Shots",
  },
  {
    src: "/images/Site Files/Envir3.png",
    alt: "Level design: map shot 3",
    caption: "Level Design: Map Shots",
  },
  {
    src: "/images/Site Files/Envir4.png",
    alt: "Level design: map shot 4",
    caption: "Level Design: Map Shots",
  },
];

const conclusionText = [
  `I'm proud of the final outcome of our collaborative project, both in terms of team performance and my personal contributions. One of the initial challenges was identifying the strengths of each team member. Some of our junior members, while experienced in Unity and programming, initially struggled to adapt to Unreal's Blueprint system.`,

  `To support those less familiar with Unreal, I dedicated time early in the project to explain tasks and approaches in detail. This not only helped others get up to speed with Blueprints but also fostered a more collaborative and supportive environment. In the end, we successfully leveraged each team member's strengths to deliver a great result.`,

  `Cross-department communication was a key strength. As the project progressed, our ability to give and receive feedback across different disciplines significantly improved. This allowed for smoother implementation of changes and more cohesive collaboration. It truly felt like our progress was shaped by shared contributions rather than individual voices.`,

  `Within the tech team, senior members communicated exceptionally well. They balanced handling their responsibilities while supporting both juniors and other seniors, contributing to a high-performing team dynamic.`,

  `Early on, I found it difficult to set up sprints and manage workflow collaboratively, as I was more accustomed to working independently. However, as the project evolved, I introduced weekly stand-up meetings to improve visibility across teams. This helped us align on goals and maintain accountability. Initially, our lack of coordination led to misaligned outcomes, but sprint planning helped bring clarity and structure.`,

  `Mid-week check-ins between the Tech and Design teams were also crucial. Since we only met once weekly in person, these extra sessions helped surface concerns early and kept us on track, preventing miscommunication or delays.`,

  `Looking ahead, one area I want to improve is planning. As the saying goes, "Minutes of planning save hours of programming." Spending more time understanding design intentions upfront would reduce rework and ensure smoother integration. I also aim to keep refining my code so it stays readable and easy for both designers and other developers to understand and build upon.`,
];

const responsibility = [
  "Managing the programming department to meet milestones and deadlines",
  "Assisting junior developers with tasks, teaching new concepts",
  "Bug testing and fixing",
  "Developing main menu interfaces",
  "Taxi driving mechanics",
  "Satisfaction mechanic",
  "Events manager system",
  "Optimizing game performance",
];

const taxiEvents = [
  {
    src: "/images/Site Files/TaxiEvents.gif",
    alt: "Window fog event",
    caption: "Window Fog Event",
  },
  {
    src: "/images/Site Files/TaxiEvents2.gif",
    alt: "Fog event",
    caption: "Fog Event",
  },
  {
    src: "/images/Site Files/TaxiEvents3.gif",
    alt: "Fallen tree event",
    caption: "Fallen Tree Event",
  },
  {
    src: "/images/Site Files/TaxiEvents4.gif",
    alt: "Police car event",
    caption: "Police Car Event",
  },
];

const ProjectDefiance = () => {
  const pageRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const targets = pageRef.current.querySelectorAll(".mt-reveal");
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
    <div className="mt-page" ref={pageRef}>
      <ScrollToTop />
      <ProjectNavbar />
      <ProjectHero
        title=""
        showLogo={true}
        videoUrl="https://www.youtube.com/embed/AyeXuVhHfwk?autoplay=1&mute=1&loop=1&playlist=AyeXuVhHfwk&controls=0&showinfo=0&modestbranding=1&rel=0"
        roleInfo={roleInfo}
        leftInfo={responsibility}
        leftTitle="Key Responsibilities"
        background="#181818"
        cardBackground="#232323"
        heroImage="/images/Site Files/MidnightTaxiHeroImg.jpg"
        summary="Step into the world of a newly recruited taxi driver navigating the winding roads of a small town. But be warned, beneath the seemingly peaceful facade lies a dark secret—a killer is on the loose, and you're caught right in the middle of it!"
        downloadLinks={[
          {
            url: "/MidnightTaxiDesignDoc.pdf",
            label: "Design Doc",
            description: "Design Decisions",
          },
          {
            url: "https://group-twenty8.itch.io/midnight-taxi",
            label: "Download Game",
            description: "Linked On Itch.IO",
          },
        ]}
      />
      <ProjectTagsBar tags={tags} />

      <div className="mt-card mt-card--stage mt-video-text mt-reveal">
        <div className="mt-video">
          <iframe
            src="https://www.youtube.com/embed/0ClcqXRz6fA"
            title="Overview"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div>
          <div className="mt-eyebrow">Stage 01</div>
          <h3 className="mt-card-title">Overview</h3>
          <div className="mt-card-text">
            <p>
              In the shadowy rural town of Georgetown, players step into the role
              of a newly minted taxi driver navigating a series of intriguing
              challenges. The core objective: transport passengers from A to B
              while engaging in choice-based dialogue. Choosing wisely matters —
              keeping passengers satisfied is what keeps you safe from the killer
              on the loose.
            </p>
            <p>
              I was part of a 23-person team building a narrative, choice-based
              driving game over 8 weeks. As Tech Lead for the programming
              department, my core responsibilities were keeping the team on
              track against Jira deadlines, mentoring junior programmers, and
              running weekly standups with seniors from other departments to
              keep everyone aligned.
            </p>
            <p>
              Outside of project management, I was also primarily responsible
              for core gameplay systems like the taxi car mechanics, plus
              building the designer-friendly events manager system.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-title-bar mt-reveal">
        <h2>Contributions</h2>
      </div>
      <div className="mt-title-bar mt-reveal">
        <h2>Initial Car Mechanics</h2>
      </div>

      <div className="mt-card mt-card--stage mt-video-text mt-reveal">
        <div className="mt-video">
          <iframe
            src="https://www.youtube.com/embed/xHGUWTkJpNY"
            title="Car Framework"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div>
          <div className="mt-eyebrow">Stage 02</div>
          <h3 className="mt-card-title">Car Framework</h3>
          <div className="mt-card-text">
            <p>
              My initial task was building the car framework — the basic
              functions a car needs, plus components specific to the game's
              mechanics. I started with a basic car template that could
              accelerate and decelerate, and a first-person camera with limited
              left/right range so the player stays facing mostly forward.
            </p>
            <p>
              For this proof of concept, I added a debug key to toggle the
              headlights alongside the dialogue mechanic selector, to showcase
              the car's behavior.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-card mt-card--stage mt-video-text mt-flip mt-reveal">
        <div className="mt-video">
          <iframe
            src="https://www.youtube.com/embed/tNArlyTHVvE"
            title="Camera & Steering Wheel"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div>
          <div className="mt-eyebrow">Stage 03</div>
          <h3 className="mt-card-title">Camera &amp; Steering Wheel</h3>
          <div className="mt-card-text">
            <p>
              As the car was iterated on in the early stages, I introduced new
              components to improve player control. I built a camera that moves
              within a 180-degree cone while keeping the Y-axis locked, and
              added an animated, fully-functional steering wheel.
            </p>
            <p>
              The steering wheel movement is constrained by comparing the current
              rotation to the allowed end rotation and factoring in the player's
              input. When the player releases the steering input, the wheel
              smoothly returns to its standard position.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-card mt-reveal">
        <img
          src="/images/Site Files/SteeringWheelGraph.png"
          alt="Steering wheel blueprint graph"
          className="mt-single-media mt-media-zoomable"
          onClick={() => setLightbox({ src: "/images/Site Files/SteeringWheelGraph.png", alt: "Steering wheel blueprint graph" })}
          title="Click to expand"
        />
      </div>

      <div className="mt-card mt-card--stage mt-video-text mt-flip mt-reveal">
        <div className="mt-video">
          <iframe
            src="https://www.youtube.com/embed/5BhUijqFuxE"
            title="Interactive Car Components"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div>
          <div className="mt-eyebrow">Stage 04</div>
          <h3 className="mt-card-title">Interactive Car Components</h3>
          <div className="mt-card-text">
            <p>
              As the project expanded, I added core car components to give
              players more to interact with beyond basic driving.
            </p>
            <ul>
              <li>Window Locks</li>
              <li>Window Controls</li>
              <li>Windshield Wipers</li>
              <li>Controllable Radio</li>
            </ul>
            <p>
              These additions quickly broadened the game's feel with
              interactive features that went beyond pure driving.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-card mt-card--stage mt-reveal">
        <div className="mt-eyebrow">Stage 05</div>
        <h3 className="mt-card-title">Camera &amp; Steering Clamps</h3>
        <div className="mt-dual-media">
          <div className="mt-media-frame">
            <img
              src="/images/Site Files/CameraMovement.png"
              alt="Camera yaw/pitch clamping values"
              className="mt-media mt-media-zoomable"
              style={{ objectFit: "contain", background: "#000" }}
              onClick={() => setLightbox({ src: "/images/Site Files/CameraMovement.png", alt: "Camera yaw/pitch clamping values" })}
              title="Click to expand"
            />
            <span className="mt-media-tag">Camera Clamp</span>
          </div>
          <div className="mt-media-frame">
            <img
              src="/images/Site Files/SteeringClamp.png"
              alt="Steering angle clamp values"
              className="mt-media mt-media-zoomable"
              style={{ objectFit: "contain", background: "#000" }}
              onClick={() => setLightbox({ src: "/images/Site Files/SteeringClamp.png", alt: "Steering angle clamp values" })}
              title="Click to expand"
            />
            <span className="mt-media-tag">Steering Clamp</span>
          </div>
        </div>
        <div className="mt-card-text" style={{ marginTop: "var(--space-4)" }}>
          <p>Clamping camera movement based on min and max yaw/pitch values.</p>
        </div>
      </div>

      <div className="mt-title-bar mt-reveal">
        <h2>Clean Workflows</h2>
      </div>

      <div className="mt-card mt-card--stage mt-reveal">
        <div className="mt-eyebrow">Stage 06</div>
        <h3 className="mt-card-title">Blueprint Organization</h3>
        <div className="mt-flanked">
          <img
            src="/images/Site Files/SeperateEvents.png"
            alt="Separated Blueprint event components"
            className="mt-media mt-media-zoomable"
            style={{ objectFit: "contain", background: "#000" }}
            onClick={() => setLightbox({ src: "/images/Site Files/SeperateEvents.png", alt: "Separated Blueprint event components" })}
            title="Click to expand"
          />
          <div className="mt-card-text">
            <p>
              As taxi development progressed, a clean workflow became essential
              — the project was collaborative, and multiple team members needed
              access to the same taxi blueprint.
            </p>
            <p>
              We broke the project into Child Actor components and collapsed
              nodes wherever the taxi needed Blueprint access. Treating each
              component as its own child actor reduced merge conflicts and made
              communication between Blueprints easier.
            </p>
            <p>
              The project was segmented into chunks and thoroughly commented and
              categorized to make it clear for both the tech team and people
              unfamiliar with Blueprint.
            </p>
            <p>
              I also organized all variables and components into categories to
              streamline the code, and encouraged the same discipline from
              everyone else working on the taxi.
            </p>
          </div>
          <img
            src="/images/Site Files/Categories.png"
            alt="Blueprint variables organized into categories"
            className="mt-media mt-media-zoomable"
            style={{ objectFit: "contain", background: "#000" }}
            onClick={() => setLightbox({ src: "/images/Site Files/Categories.png", alt: "Blueprint variables organized into categories" })}
            title="Click to expand"
          />
        </div>
      </div>

      <div className="mt-title-bar mt-reveal">
        <h2>Readability</h2>
      </div>

      <div className="mt-card mt-card--stage mt-reveal">
        <div className="mt-eyebrow">Stage 07</div>
        <h3 className="mt-card-title">Material Readability</h3>
        <div className="mt-video-img">
          <div className="mt-video">
            <iframe
              src="https://www.youtube.com/embed/i_dw2gM5KcA"
              title="Midnight Taxi Demo Video"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-media-frame">
            <img
              src="/images/Site Files/MaterialOutline.png"
              alt="Midnight Taxi Event System"
              className="mt-media mt-media-zoomable"
              onClick={() => setLightbox({ src: "/images/Site Files/MaterialOutline.png", alt: "Midnight Taxi Event System" })}
              title="Click to expand"
            />
          </div>
        </div>
        <div className="mt-card-text" style={{ marginTop: "var(--space-4)" }}>
          <p>
            As the taxi systems became more in-depth, complex lighting and material
            effects were added to core components to promote readability.
          </p>
        </div>
      </div>

      <div className="mt-title-bar mt-reveal">
        <h2>Satisfaction Mechanic</h2>
      </div>

      <div className="mt-card mt-card--stage mt-media-text mt-reveal">
        <div className="mt-media-frame">
          <img
            src="/images/Site Files/SatisfactionMeter.jpg"
            alt="Satisfaction Mechanic UI"
            className="mt-media"
          />
        </div>
        <div>
          <div className="mt-eyebrow">Stage 08</div>
          <h3 className="mt-card-title">Satisfaction Mechanic</h3>
          <div className="mt-card-text">
            <p>
              Alongside the car mechanics, I developed the satisfaction
              mechanic, which directly impacted a player's final score. Poor
              decisions or bad driving dropped it; smart choices and skillful
              driving raised it. It started as a simple system tied to object
              collisions, but evolved to integrate with nearly every
              interactive element in the game, including:
            </p>
            <ul>
              <li>Decision Making</li>
              <li>Colliding with Objects</li>
              <li>Using or Not Using Car Components</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-card mt-reveal">
        <div className="mt-vid-vid">
          <div className="mt-video">
            <iframe
              src="https://www.youtube.com/embed/_uVpnzPl_pw"
              title="Satisfaction mechanic clip 1"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-video">
            <iframe
              src="https://www.youtube.com/embed/eHYnzPHY9Og"
              title="Satisfaction mechanic clip 2"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="mt-card mt-card--stage mt-reveal">
        <div className="mt-eyebrow">Stage 09</div>
        <h3 className="mt-card-title">Satisfaction Event Tree</h3>
        <div className="mt-dual-media">
          <div className="mt-media-frame">
            <img
              src="/images/Site Files/EventTree.png"
              alt="Satisfaction event tree, part 1"
              className="mt-media mt-media-zoomable"
              style={{ objectFit: "contain", background: "#000" }}
              onClick={() => setLightbox({ src: "/images/Site Files/EventTree.png", alt: "Satisfaction event tree, part 1" })}
              title="Click to expand"
            />
            <span className="mt-media-tag">Event Tree 1</span>
          </div>
          <div className="mt-media-frame">
            <img
              src="/images/Site Files/EventTree2.png"
              alt="Satisfaction event tree, part 2"
              className="mt-media mt-media-zoomable"
              style={{ objectFit: "contain", background: "#000" }}
              onClick={() => setLightbox({ src: "/images/Site Files/EventTree2.png", alt: "Satisfaction event tree, part 2" })}
              title="Click to expand"
            />
            <span className="mt-media-tag">Event Tree 2</span>
          </div>
        </div>
        <div className="mt-card-text" style={{ marginTop: "var(--space-4)" }}>
          <p>
            The satisfaction bar updates smoothly based on the new input value over
            time, with sounds tied to the decisions made.
          </p>
        </div>
      </div>

      <div className="mt-title-bar mt-reveal">
        <h2>Passenger Mirror</h2>
      </div>

      <div className="mt-card mt-card--stage mt-media-text mt-reveal">
        <div className="mt-media-frame">
          <img
            src="/images/Site Files/Faces.png"
            alt="Passenger facial expression sprites"
            className="mt-media"
          />
        </div>
        <div>
          <div className="mt-eyebrow">Stage 10</div>
          <h3 className="mt-card-title">Passenger Mirror</h3>
          <div className="mt-card-text">
            <p>
              Early in the project, we wanted a mirror that reflected the
              passenger's reactions to the player's choices. We started with 3D
              facial scans optimized down to a reasonable tri count, rendering
              a live passenger onto a plane via a secondary camera. It worked,
              but we quickly learned it was far too demanding on frame rate.
            </p>
            <p>
              So I worked with the concept art team to switch from a
              3D-render-based mirror to a sprite-based UI animation mirror,
              built as a spatial widget.
            </p>
            <p>
              Each passenger has three facial
              expressions — happy, neutral, and angry — and the expression shown is
              chosen based on the player's current satisfaction level.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-card mt-card--stage mt-reveal">
        <div className="mt-eyebrow">Stage 11</div>
        <h3 className="mt-card-title">Mirror &amp; Reveal</h3>
        <div className="mt-dual-media">
          <div className="mt-media-frame">
            <img
              src="/images/Site Files/Mirror.png"
              alt="Passenger mirror UI"
              className="mt-media mt-media-zoomable"
              onClick={() => setLightbox({ src: "/images/Site Files/Mirror.png", alt: "Passenger mirror UI" })}
              title="Click to expand"
            />
            <span className="mt-media-tag">Passenger Mirror</span>
          </div>
          <div className="mt-media-frame">
            <img
              src="/images/Site Files/Murderer.png"
              alt="Murderer character reveal"
              className="mt-media mt-media-zoomable"
              onClick={() => setLightbox({ src: "/images/Site Files/Murderer.png", alt: "Murderer character reveal" })}
              title="Click to expand"
            />
            <span className="mt-media-tag">Murderer Reveal</span>
          </div>
        </div>
        <div className="mt-card-text" style={{ marginTop: "var(--space-4)" }}>
          <p>The passenger mirror UI, and the killer's reveal once suspicion is confirmed.</p>
        </div>
      </div>

      <div className="mt-card mt-card--stage mt-reveal">
        <div className="mt-eyebrow">Stage 12</div>
        <h3 className="mt-card-title">Mirror UI Setup</h3>
        <div className="mt-video-img">
          <div className="mt-video">
            <iframe
              src="https://www.youtube.com/embed/Z_lQwUEksc8"
              title="Midnight Taxi Demo Video"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-media-frame">
            <img
              src="/images/Site Files/UISetup.png"
              alt="Midnight Taxi Event System"
              className="mt-media mt-media-zoomable"
              onClick={() => setLightbox({ src: "/images/Site Files/UISetup.png", alt: "Midnight Taxi Event System" })}
              title="Click to expand"
            />
          </div>
        </div>
        <div className="mt-card-text" style={{ marginTop: "var(--space-4)" }}>
          <p>
            To make the mirror feel more dynamic, I designed it with three
            layers: a foreground, a background, and animated passenger
            images. The passenger and front-seat animations specifically kept
            the mirror from feeling static.
          </p>
        </div>
      </div>

      <div className="mt-card mt-card--stage mt-reveal">
        <div className="mt-eyebrow">Stage 13</div>
        <h3 className="mt-card-title">Passenger Animation &amp; Sprites</h3>
        <div className="mt-dual-media">
          <div className="mt-media-frame">
            <img
              src="/images/Site Files/PassAnim.png"
              alt="Passenger animation setup"
              className="mt-media mt-media-zoomable"
              style={{ objectFit: "contain", background: "#000" }}
              onClick={() => setLightbox({ src: "/images/Site Files/PassAnim.png", alt: "Passenger animation setup" })}
              title="Click to expand"
            />
            <span className="mt-media-tag">Passenger Animation</span>
          </div>
          <div className="mt-media-frame">
            <img
              src="/images/Site Files/UISprite.png"
              alt="UI sprite setup for the mirror"
              className="mt-media mt-media-zoomable"
              style={{ objectFit: "contain", background: "#000" }}
              onClick={() => setLightbox({ src: "/images/Site Files/UISprite.png", alt: "UI sprite setup for the mirror" })}
              title="Click to expand"
            />
            <span className="mt-media-tag">UI Sprite</span>
          </div>
        </div>
        <div className="mt-card-text" style={{ marginTop: "var(--space-4)" }}>
          <p>
            This approach significantly improved performance, boosting the
            frame rate by roughly 15 frames — a big contributor to the overall
            game feel.
          </p>
        </div>
      </div>

      <div className="mt-title-bar mt-reveal">
        <h2>Event System Manager</h2>
      </div>

      <div className="mt-card mt-card--stage mt-media-text mt-reveal">
        <div className="mt-media-frame">
          <img
            src="/images/Site Files/EventManager.png"
            alt="Events manager system overview"
            className="mt-media"
            style={{ objectFit: "contain", background: "#000" }}
          />
        </div>
        <div>
          <div className="mt-eyebrow">Stage 14</div>
          <h3 className="mt-card-title">Event System Manager</h3>
          <div className="mt-card-text">
            <p>
              Alongside the driving mechanics, I was responsible for the events
              manager system, which controls all external gameplay factors — a
              range of environmental and interactive elements, including:
            </p>
            <ul>
              <li>Police Car Event</li>
              <li>Falling Tree Event</li>
              <li>Burning Car Event</li>
              <li>Activate/Deactivate Fog</li>
              <li>Activate/Deactivate Window Fog</li>
              <li>Activate/Deactivate Rain</li>
              <li>NPC Pedestrian Event</li>
              <li>NPC Shooter Event</li>
            </ul>
            <p>
              I initially implemented each event as a separate actor or
              component, but design-team feedback made it clear they needed a
              more unified approach — better control over everything
              collectively, rather than juggling numerous individual pieces.
              So I built a shared, designer-friendly event manager system to
              streamline the whole workflow.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-card mt-card--stage mt-reveal">
        <div className="mt-eyebrow">Stage 15</div>
        <h3 className="mt-card-title">Editor Tool</h3>
        <div className="mt-dual-media">
          <div className="mt-media-frame">
            <img
              src="/images/Site Files/EditorTool.png"
              alt="Event manager editor tool"
              className="mt-media mt-media-zoomable"
              style={{ objectFit: "contain", background: "#000" }}
              onClick={() => setLightbox({ src: "/images/Site Files/EditorTool.png", alt: "Event manager editor tool" })}
              title="Click to expand"
            />
            <span className="mt-media-tag">Editor Tool</span>
          </div>
          <div className="mt-media-frame">
            <img
              src="/images/Site Files/EditorGif.gif"
              alt="Event manager editor tool demo"
              className="mt-media mt-media-zoomable"
              onClick={() => setLightbox({ src: "/images/Site Files/EditorGif.gif", alt: "Event manager editor tool demo" })}
              title="Click to expand"
            />
            <span className="mt-media-tag">Editor Demo</span>
          </div>
        </div>
        <div className="mt-card-text" style={{ marginTop: "var(--space-4)" }}>
          <p>
            The manager system has two parts: a trigger and a manager. The
            manager's construction script tells the designer whether
            everything is set up correctly via red and green sprite indicators
            — a small touch that made the whole system much easier to
            understand.
          </p>
        </div>
      </div>

      <div className="mt-card mt-card--stage mt-reveal">
        <div className="mt-eyebrow">Stage 16</div>
        <h3 className="mt-card-title">Manager Blueprint &amp; Construction Script</h3>
        <div className="mt-dual-media">
          <div className="mt-media-frame">
            <img
              src="/images/Site Files/EventManagerTree.png"
              alt="Event manager blueprint tree"
              className="mt-media mt-media-zoomable"
              style={{ objectFit: "contain", background: "#000" }}
              onClick={() => setLightbox({ src: "/images/Site Files/EventManagerTree.png", alt: "Event manager blueprint tree" })}
              title="Click to expand"
            />
            <span className="mt-media-tag">Event Tree</span>
          </div>
          <div className="mt-media-frame">
            <img
              src="/images/Site Files/ContstructionScript.png"
              alt="Construction script for the event manager"
              className="mt-media mt-media-zoomable"
              style={{ objectFit: "contain", background: "#000" }}
              onClick={() => setLightbox({ src: "/images/Site Files/ContstructionScript.png", alt: "Construction script for the event manager" })}
              title="Click to expand"
            />
            <span className="mt-media-tag">Construction Script</span>
          </div>
        </div>
        <div className="mt-card-text" style={{ marginTop: "var(--space-4)" }}>
          <p>
            Play events based on true bools. Condition checks ensure the designer
            has set up the manager properly.
          </p>
        </div>
      </div>

      <div className="mt-title-bar mt-reveal">
        <h2>Game Events</h2>
      </div>
      <div className="mt-card mt-reveal">
        <div className="mt-quad-grid">
          {taxiEvents.map((item, idx) => (
            <div className="mt-media-frame" key={idx}>
              <img src={item.src} alt={item.alt} className="mt-media" />
              {item.caption && <div className="mt-tile-caption">{item.caption}</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-title-bar mt-reveal">
        <h2>Main Menu Interface</h2>
      </div>

      <div className="mt-card mt-card--stage mt-media-text mt-reveal">
        <div className="mt-media-frame">
          <img
            src="/images/Site Files/TaxiShot.png"
            alt="Main menu screenshot"
            className="mt-media"
          />
        </div>
        <div>
          <div className="mt-eyebrow">Stage 17</div>
          <h3 className="mt-card-title">Main Menu Interface</h3>
          <div className="mt-card-text">
            <p>One of my final responsibilities was to design the main menu for the game, which included several key sections:</p>
            <ul>
              <li>Options Menu</li>
              <li>Asset Pack Level Viewer</li>
              <li>Customizing Bobblehead Section</li>
              <li>Concept Art Page</li>
              <li>Credits Page</li>
            </ul>
            <p>
              These were added towards the end of the project. The Asset Pack
              Level Viewer and Concept Art Page let every artist view their
              work in-engine, whether or not it made it into the game. I built
              this around data tables for easy content management — artists
              just named their piece, added their name, and uploaded an image,
              keeping the whole page simple and efficient.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-card mt-card--stage mt-reveal">
        <div className="mt-eyebrow">Stage 18</div>
        <h3 className="mt-card-title">Menu Polish</h3>
        <div className="mt-card-text">
          <p>
            After fleshing out the main menu level, I focused on its visual
            flair, integrating themed assets and UI elements that matched the
            game's atmosphere. I worked closely with the art team to source
            the artwork and weave it into the menu.
          </p>
          <p>
            These visual touches made a real difference to the game's first
            impression, feeling immersive and polished right from startup.
          </p>
        </div>
      </div>

      <div className="mt-card mt-reveal">
        <div className="mt-vid-vid">
          <div className="mt-video">
            <iframe
              src="https://www.youtube.com/embed/-lvxUxqdWcQ?start=1"
              title="Main menu clip 1"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-video">
            <iframe
              src="https://www.youtube.com/embed/62uo0us2jeI"
              title="Main menu clip 2"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <ProjectImageCarousel images={UIImages} />
      <ProjectImageCarousel images={EnvirShot} />

      <div className="mt-title-bar mt-reveal">
        <h2>Conclusion</h2>
      </div>
      <div className="mt-card mt-card--stage mt-reveal">
        <div className="mt-eyebrow">Stage 19</div>
        <h3 className="mt-card-title">Conclusion</h3>
        <div className="mt-card-text">
          {conclusionText.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
      <Footer />

      {lightbox && (
        <div className="mt-lightbox" onClick={() => setLightbox(null)}>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="mt-lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="mt-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDefiance;
