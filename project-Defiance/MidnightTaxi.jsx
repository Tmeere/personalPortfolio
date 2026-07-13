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

  `Looking ahead, one area I want to improve is planning. As the saying goes, "Minutes of planning save hours of programming." Spending more time understanding design intentions upfront would reduce rework and ensure smoother integration. Additionally, I aim to keep refining my code to ensure it's readable and easy for both designers and other developers to understand and build upon.`,
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
              In the shadowy rural town of Georgetown, players take on the role of a
              newly minted taxi driver tasked with navigating a series of intriguing
              challenges. The primary objective is to transport passengers from one
              location to another, all while engaging in choice-based dialogue.
              Making the right decisions is crucial, as keeping passengers satisfied
              is key to avoiding dire consequences—especially with a dangerous
              killer on the loose.
            </p>
            <p>
              For this project, I was part of a 23-person team with the collective
              goal of making a narrative, choice-based driving game. During this
              8-week project, I was the Tech Lead for the programming department.
              My core responsibilities as lead were to ensure the programming team
              met their goals per Jira deadlines, provide instruction, support,
              and mentoring to junior programmers, and organize weekly standup
              meetings with seniors from other departments to keep the team
              coherent.
            </p>
            <p>
              Outside of project-management tasks, I was also primarily
              responsible for core gameplay systems such as the taxi car
              mechanics, as well as building the designer-friendly events manager
              system.
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
              For the project, my initial tasks involved creating the framework
              for the car in the game. This included implementing the basic
              functions a car would need, as well as additional components
              specific to the game mechanics. I began with a basic Car Template
              that could accelerate and decelerate, and a first-person cam that
              could look around to the left or right with limited range, ensuring
              the player primarily faces forward.
            </p>
            <p>
              During this initial proof of concept, I added a simple debug key to
              toggle the headlights with the dialogue mechanic selector to
              showcase the car's behavior.
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
              As the car was developed and iterated on in the early stages of the
              project, new components and changes were introduced to enhance
              player control and improve the car's functionality. I focused on
              making a cam that moves in a 180-degree cone, while keeping the
              Y-axis movement locked. Additionally, features like a steering wheel
              were added that are animated and work as intended.
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
              As the project expanded and new gameplay mechanics were implemented,
              I focused on adding core car components to enhance player
              interaction beyond basic driving.
            </p>
            <ul>
              <li>Window Locks</li>
              <li>Window Controls</li>
              <li>Windshield Wipers</li>
              <li>Controllable Radio</li>
            </ul>
            <p>
              These additions helped quickly broaden the overall game feel by
              introducing interactive features that weren't strictly tied to
              driving mechanics.
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
              As the taxi development progressed, maintaining a clean workflow became
              essential due to the project's collaborative nature and the need for
              multiple team members to access the taxi.
            </p>
            <p>
              To achieve this, we broke the project down into Child Actor components
              and collapsed nodes when the taxi required Blueprint access. By treating
              each component as a child actor, we reduced the risk of merge errors
              and communication between Blueprints became easier.
            </p>
            <p>
              The project was segmented into chunks and thoroughly commented and
              categorized to make it clear for both the tech team and people
              unfamiliar with Blueprint.
            </p>
            <p>
              Additionally, I organized all variables and components into categories
              to streamline the code. This was encouraged for everyone working on the
              taxi to ensure a clean and orderly workflow going forward.
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
              In addition to handling the basic car mechanics, I developed the
              satisfaction mechanic for the game. This mechanic directly impacted the
              final score a player received. If a player made poor decisions or drove
              badly, their satisfaction would decrease. Conversely, making smart
              choices and driving skillfully would lead to a rising satisfaction
              meter. Initially, the satisfaction mechanic was a straightforward system
              where collisions with objects would affect the meter. However, it
              evolved to integrate with nearly every interactive element in the game,
              including:
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
              Initially during the project, we wanted to reflect seeing the
              passenger and their reactions to your actions in the game via a
              mirror. We initially did some 3D facial scans that were optimized down
              to respectable tri counts and would implement live passengers in the
              back using a rendered camera projecting onto a plane. While this
              worked, we quickly learned it was demanding and consumed far too many
              frames.
            </p>
            <p>
              For this reason, I researched the issue and
              worked with the concept art team to change the system from a
              3D-render-based mirror to a sprite-based UI animation mirror, built as
              a spatial widget.
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
            To enhance the dynamic feel of the mirror and create a more immersive
            experience, I designed it with three components: a foreground, a
            background, and animated passenger images. The passenger and front seat
            animations were specifically included to make the mirror feel less
            static and more engaging.
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
            Implementing this approach significantly improved the project's
            performance, boosting the frame rate by approximately 15 frames. This
            upgrade contributed greatly to the overall game experience.
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
              In addition to handling the driving mechanics for the game, I was
              responsible for developing the events manager system, which controls all
              external gameplay factors. This system encompasses a variety of
              environmental and interactive elements, including:
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
              Initially, I implemented each event as a separate actor or component.
              However, based on feedback from the design team, it became clear that
              they needed a more unified approach. Designers required better control
              over all components collectively, rather than managing numerous
              individual pieces. To address this, I developed a shared event manager
              system designed to be more designer-friendly and streamline event
              management.
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
            The manager system is a two-part component consisting of a trigger and a
            manager. The manager contains construction script code that tells the
            designer whether the system is set up correctly via red and green sprite
            indicators, helping streamline the system and make it easier to
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
              These elements were added towards the end of the project. The Asset Pack
              Level Viewer and Concept Art Page were introduced to allow all artists
              to view their work in the engine, regardless of whether it was directly
              used in the game. To streamline this process, I developed a system using
              data tables for easy content management. Artists could simply name their
              piece, input their name, and upload an image of their artwork. This
              approach aimed to make the Concept Art Page user-friendly and efficient.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-card mt-card--stage mt-reveal">
        <div className="mt-eyebrow">Stage 18</div>
        <h3 className="mt-card-title">Menu Polish</h3>
        <div className="mt-card-text">
          <p>
            After fleshing out the main menu level, I focused on enhancing its
            visual flair to better reflect the game's Midnight Taxi theme. This
            involved integrating a variety of assets and themed UI elements to
            align with the overall style and atmosphere of the game. I
            collaborated closely with the art team to obtain the necessary artwork
            and incorporated these pieces into the main menu, further refining its
            appearance.
          </p>
          <p>
            These visual improvements significantly enhanced the game's initial
            presentation, making it feel more immersive and polished right from
            the startup.
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
