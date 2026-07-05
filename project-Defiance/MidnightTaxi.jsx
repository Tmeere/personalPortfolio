import React from "react";
import ProjectHero from "../components/projectComponents/ProjectHeroSection";
import ProjectTagsBar from "../components/projectComponents/ProjectTagsBar";
import ProjectNavbar from "../components/projectComponents/ProjectNavbar"; // <-- Use your custom navbar
import ProjectVidAndText from "../components/projectComponents/ProjectVidAndText"; // <-- Add this import
import ProjectTitleDivider from "../components/projectComponents/ProjectTitleDivider"; // <-- Add this import
import ProjectImageContainer from "../components/projectComponents/ProjectImageContainer"; // <-- Add this import
import ProjectImgTextImg from "../components/projectComponents/ProjectImgTextImg"; // <-- Add this import
import ProjectImageCarousel from "../components/projectComponents/ProjectImageCarousel"; // Add this import
import ProjectVideoAndImg from "../components/projectComponents/ProjectVideoAndImg"; // Add this import
import ProjectImageTextContainer from "../components/projectComponents/ProjectImageTextContainer";
import ProjectTextBody from "../components/projectComponents/ProjectTextBody";
import ProjectVidVidComponent from "../components/projectComponents/ProjectVidVidComponent";
import Footer from "../components/footer"; // <-- Add this import
import ProjectImgImgContainer from "../components/projectComponents/ProjectImgImgContainer"; // Add this import
import ProjectGifGrid from "../components/projectComponents/ProjectGifGrid";
import ScrollToTop from "../src/ScrollToTop";

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

const ProjectDefiance = () => (
  <>
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
    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/0ClcqXRz6fA"
      title="Overview"
      minHeight="475px"
      description={
        <>
          In the shadowy rural town of Georgetown, players take on the role of a
          newly minted taxi driver tasked with navigating a series of intriguing
          challenges. The primary objective is to transport passengers from one
          location to another, all while engaging in choice-based dialogue.
          Making the right decisions is crucial, as keeping passengers satisfied
          is key to avoiding dire consequences—especially with a dangerous
          killer on the loose.
          <br />
          <br />
          For this project, I was part of a 23-person team with the collective
          goal of making a narrative, choice-based driving game. During this
          8-week project, I was the Tech Lead for the programming department.
          My core responsibilities as lead were to ensure the programming team
          met their goals per Jira deadlines, provide instruction, support,
          and mentoring to junior programmers, and organize weekly standup
          meetings with seniors from other departments to keep the team
          coherent.
          <br />
          <br />
          Outside of project-management tasks, I was also primarily
          responsible for core gameplay systems such as the taxi car
          mechanics, as well as building the designer-friendly events manager
          system.
        </>
      }
    />
    <ProjectTitleDivider title="Contributions" />
    <ProjectTitleDivider title="Initial Car Mechanics" divider={true} />
    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/xHGUWTkJpNY"
      title=""
      minHeight="250px"
      description={
        <>
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
        </>
      }
    />
    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/tNArlyTHVvE"
      title=""
      minHeight="250px"
      description={
        <>
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
        </>
      }
    />
    <ProjectImageContainer
      src="/images/Site Files/SteeringWheelGraph.png"
      alt="Steering wheel blueprint graph"
    />
    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/5BhUijqFuxE"
      title=""
      flip={true}
      minHeight="300px"
      description={
        <>
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
        </>
      }
    />
    <ProjectImgImgContainer
      src1="/images/Site Files/CameraMovement.png"
      text="Clamping camera movement based on min and max yaw/pitch values"
      alt1="Camera yaw/pitch clamping values"
      src2="/images/Site Files/SteeringClamp.png"
      alt2="Steering angle clamp values"
      img1Style={{ maxHeight: "500px", width: "100%" }} // Smaller left image
      img2Style={{ maxHeight: "450px", width: "100%" }} // Bigger right image
    />
    <ProjectTitleDivider title="Clean Workflows" divider={true} />

    <ProjectImgTextImg
      leftImgSrc="/images/Site Files/SeperateEvents.png"
      leftImgAlt="Separated Blueprint event components"
      rightImgSrc="/images/Site Files/Categories.png"
      rightImgAlt="Blueprint variables organized into categories"
    >
      <div>
        As the taxi development progressed, maintaining a clean workflow became
        essential due to the project's collaborative nature and the need for
        multiple team members to access the taxi.
        <br />
        <br />
        To achieve this, we broke the project down into Child Actor components
        and collapsed nodes when the taxi required Blueprint access. By treating
        each component as a child actor, we reduced the risk of merge errors
        and communication between Blueprints became easier.
        <br />
        <br />
        The project was segmented into chunks and thoroughly commented and
        categorized to make it clear for both the tech team and people
        unfamiliar with Blueprint.
        <br />
        <br />
        Additionally, I organized all variables and components into categories
        to streamline the code. This was encouraged for everyone working on the
        taxi to ensure a clean and orderly workflow going forward.
      </div>
    </ProjectImgTextImg>
    <ProjectTitleDivider title="Readability" divider={true} />
    <ProjectVideoAndImg
      videoUrl="https://www.youtube.com/embed/i_dw2gM5KcA"
      imgSrc="/images/Site Files/MaterialOutline.png"
      imgAlt="Midnight Taxi Event System"
      text="As the taxi systems became more in-depth, complex lighting and material effects were added to core components to promote readability."
      videoTitle="Midnight Taxi Demo Video"
    />
    <ProjectTitleDivider title="Satisfaction Mechanic" divider={true} />
    <ProjectImageTextContainer
      imgSrc="/images/Site Files/SatisfactionMeter.jpg"
      imgAlt="Satisfaction Mechanic UI"
      imgStyle={{ maxWidth: "500px" }}
    >
      <div>
        In addition to handling the basic car mechanics, I developed the
        satisfaction mechanic for the game. This mechanic directly impacted the
        final score a player received. If a player made poor decisions or drove
        badly, their satisfaction would decrease. Conversely, making smart
        choices and driving skillfully would lead to a rising satisfaction
        meter. Initially, the satisfaction mechanic was a straightforward system
        where collisions with objects would affect the meter. However, it
        evolved to integrate with nearly every interactive element in the game,
        including:
        <ul>
          <li>Decision Making</li>
          <li>Colliding with Objects</li>
          <li>Using or Not Using Car Components</li>
        </ul>
      </div>
    </ProjectImageTextContainer>
    <ProjectVidVidComponent
      videoSrc1="https://www.youtube.com/embed/_uVpnzPl_pw"
      videoSrc2="https://www.youtube.com/embed/eHYnzPHY9Og"
    />

    <ProjectImgImgContainer
      src1="/images/Site Files/EventTree.png"
      text="The satisfaction bar updates smoothly based on the new input value over time, with sounds tied to the decisions made."
      alt1="Satisfaction event tree, part 1"
      src2="/images/Site Files/EventTree2.png"
      alt2="Satisfaction event tree, part 2"
    />

    <ProjectTitleDivider title="Passenger Mirror" divider={true} />
    <ProjectImageTextContainer
      imgSrc="/images/Site Files/Faces.png"
      imgAlt="Satisfaction Mechanic UI"
      imgStyle={{ maxWidth: "500px" }}
    >
      <div>
        Initially during the project, we wanted to reflect seeing the
        passenger and their reactions to your actions in the game via a
        mirror. We initially did some 3D facial scans that were optimized down
        to respectable tri counts and would implement live passengers in the
        back using a rendered camera projecting onto a plane. While this
        worked, we quickly learned it was demanding and consumed far too many
        frames.<br></br><br></br>For this reason, I researched the issue and
        worked with the concept art team to change the system from a
        3D-render-based mirror to a sprite-based UI animation mirror, built as
        a spatial widget. <br></br><br></br>Each passenger has three facial
        expressions — happy, neutral, and angry — and the expression shown is
        chosen based on the player's current satisfaction level.
      </div>
    </ProjectImageTextContainer>

    <ProjectImgImgContainer
      src1="/images/Site Files/Mirror.png"
      text="Play events based on true bools. Condition checks ensure the designer has set up the manager properly."
      alt1="Passenger mirror UI"
      src2="/images/Site Files/Murderer.png"
      alt2="Murderer character reveal"
      img1Style={{ maxHeight: "400px", width: "100%" }}
      img2Style={{ maxHeight: "500px", width: "100%" }}
    />
    <ProjectVideoAndImg
      videoUrl="https://www.youtube.com/embed/Z_lQwUEksc8"
      imgSrc="/images/Site Files/UISetup.png"
      imgAlt="Midnight Taxi Event System"
      text="To enhance the dynamic feel of the mirror and create a more immersive experience, I designed it with three components: a foreground, a background, and animated passenger images. The passenger and front seat animations were specifically included to make the mirror feel less static and more engaging."
      videoTitle="Midnight Taxi Demo Video"
    />
    <ProjectImgImgContainer
      src1="/images/Site Files/PassAnim.png"
      text="Implementing this approach significantly improved the project's performance, boosting the frame rate by approximately 15 frames. This upgrade contributed greatly to the overall game experience."
      alt1="Passenger animation setup"
      src2="/images/Site Files/UISprite.png"
      alt2="UI sprite setup for the mirror"
      img1Style={{ maxHeight: "500px", width: "100%" }}
      img2Style={{ maxHeight: "550px", width: "100%" }}
    />


    <ProjectTitleDivider title="Event System Manager" divider={true} />
    <ProjectImageTextContainer
      imgSrc="/images/Site Files/EventManager.png"
      imgAlt="Satisfaction Mechanic UI"
      imgStyle={{ maxWidth: "500px" }}
    >
      <div>
        In addition to handling the driving mechanics for the game, I was
        responsible for developing the events manager system, which controls all
        external gameplay factors. This system encompasses a variety of
        environmental and interactive elements, including:
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
        Initially, I implemented each event as a separate actor or component.
        However, based on feedback from the design team, it became clear that
        they needed a more unified approach. Designers required better control
        over all components collectively, rather than managing numerous
        individual pieces. To address this, I developed a shared event manager
        system designed to be more designer-friendly and streamline event
        management.
      </div>
    </ProjectImageTextContainer>

    <ProjectImgImgContainer
      src1="/images/Site Files/EditorTool.png"
      text="The manager system is a two-part component consisting of a trigger and a manager. The manager contains construction script code that tells the designer whether the system is set up correctly via red and green sprite indicators, helping streamline the system and make it easier to understand."
      alt1="Event manager editor tool"
      src2="/images/Site Files/EditorGif.gif"
      alt2="Event manager editor tool demo"
    />
    <br></br>
    <ProjectImgImgContainer
      src1="/images/Site Files/EventManagerTree.png"
      text="Play events based on true bools. Condition checks ensure the designer has set up the manager properly."
      alt1="Event manager blueprint tree"
      src2="/images/Site Files/ContstructionScript.png"
      alt2="Construction script for the event manager"
      img1Style={{ maxHeight: "500px", width: "100%" }} // Smaller left image
      img2Style={{ maxHeight: "450px", width: "100%" }} // Bigger right image
    />
    <ProjectTitleDivider title="Game Events" divider={true} />
    <ProjectGifGrid
      gifs={[
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
      ]}
    />

    <ProjectTitleDivider title="Main Menu Interface" divider={true} />
    <ProjectImageTextContainer
      imgSrc="/images/Site Files/TaxiShot.png"
      imgAlt="Satisfaction Mechanic UI"
      imgStyle={{ maxWidth: "700px" }}
    >
      <div>
        One of my final responsibilities was to design the main menu for the
        game, which included several key sections:
        <ul>
          <li>Options Menu</li>
          <li>Asset Pack Level Viewer</li>
          <li>Customizing Bobblehead Section</li>
          <li>Concept Art Page</li>
          <li>Credits Page</li>
        </ul>
        These elements were added towards the end of the project. The Asset Pack
        Level Viewer and Concept Art Page were introduced to allow all artists
        to view their work in the engine, regardless of whether it was directly
        used in the game. To streamline this process, I developed a system using
        data tables for easy content management. Artists could simply name their
        piece, input their name, and upload an image of their artwork. This
        approach aimed to make the Concept Art Page user-friendly and efficient.
      </div>
    </ProjectImageTextContainer>

    <ProjectTextBody
      body={
        <>
          After fleshing out the main menu level, I focused on enhancing its
          visual flair to better reflect the game's Midnight Taxi theme. This
          involved integrating a variety of assets and themed UI elements to
          align with the overall style and atmosphere of the game. I
          collaborated closely with the art team to obtain the necessary artwork
          and incorporated these pieces into the main menu, further refining its
          appearance.
          <br />
          <br />
          These visual improvements significantly enhanced the game's initial
          presentation, making it feel more immersive and polished right from
          the startup.
        </>
      }
    />

    <ProjectVidVidComponent
      videoSrc1="https://www.youtube.com/embed/-lvxUxqdWcQ?start=1"
      videoSrc2="https://www.youtube.com/embed/62uo0us2jeI"
    />

    <ProjectImageCarousel images={UIImages} />
    <ProjectImageCarousel images={EnvirShot} />

    <ProjectTitleDivider title="Conclusion" divider={true} />
    <ProjectTextBody
      body={conclusionText.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
    />
    <br></br>
    <Footer />
  </>
);

export default ProjectDefiance;
