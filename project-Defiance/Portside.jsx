import React from "react";
import DefianceHeroSection from "../components/projectComponents/ProjectHeroSection";
import ProjectTagsBar from "../components/projectComponents/ProjectTagsBar";
import ProjectNavbar from "../components/projectComponents/ProjectNavbar"; // <-- Use your custom navbar
import ProjectVidAndText from "../components/projectComponents/ProjectVid&Text"; // <-- Add this import
import ProjectTitleDivider from "../components/projectComponents/ProjectTitleDivider"; // <-- Add this import
import ProjectImageContainer from "../components/projectComponents/ProjectImageContainer"; // <-- Add this import
import ProjectImgTextImg from "../components/projectComponents/ProjectImgTextImg"; // <-- Add this import
import ProjectImgSideBySideComponent from "../components/projectComponents/ProjectImgSideBySideComponent"; // <-- Add this import
import ProjectImageCarousel from "../components/projectComponents/ProjectImageCarosel"; // Add this import
import ProjectVideoAndImg from "../components/projectComponents/ProjectVideo&Img"; // Add this import
import ProjectImageTextContainer from "../components/projectComponents/ProjectImageTextContainer";
import ProjectTextBody from "../components/projectComponents/ProjectTextBody";
import ProjectVidVidComponent from "../components/projectComponents/ProjectVidVidComponent";
import Footer from "../components/footer"; // <-- Add this import
import ProjectImgImgContainer from "../components/projectComponents/ProjectImgImgContainer"; // Add this import
import ProjectGifGrid from "../components/projectComponents/ProjectGifGrid";
import ScrollToTop from "../src/ScrollToTop";
import "./MidnightTaxi.css";

const roleInfo = ["Level Designer"];

const tags = ["TF2", "Level Design", "Multiplayer", "Hammer Editor", "Balancing"];

const Projectiles = [
  {
    src: "/images/Site Files/Mini.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Mini Projectile",
  },
  {
    src: "/images/Site Files/Rocket.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Rocket Projectile",
  },
  {
    src: "/images/Site Files/Projectile.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Basic Projectile",
  },
];
const Maps = [
  {
    src: "/images/Site Files/P4.jpg",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Undocking Containers",
  },{
    src: "/images/Site Files/P5.jpg",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Undocking Containers",
  },{
    src: "/images/Site Files/P6.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Undocking Containers",
  },{
    src: "/images/Site Files/P7.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Undocking Containers",
  },
  {
    src: "/images/Site Files/P8.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Undocking Containers",
  },
  {
    src: "/images/Site Files/P3.jpg",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Undocking Containers",
  },
  {
    src: "/images/Site Files/P2.jpg",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Blu Side Sniper Tower",
  },
  {
    src: "/images/Site Files/P1.jpg",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Red Side Canal",
  },
];

const Blockout = [
  {
    src: "/images/Site Files/GIF Sketch Portside Initial.gif",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Initial Map Sketch",
  },
  {
    src: "/images/Site Files/Portside Initial Plans.jpg",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Map Design Itteration 1",
  },
  {
    src: "/images/Site Files/Portside Further Itterations.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Further Tweaks and refining",
  },
  {
    src: "/images/Site Files/Portside Map Itteration 3.jpg",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Final Map Design to Ingame Scale",
  },
  
]

const responsibility = [
  "Developed a balanced and engaging King of the Hill map for TF2 (Team Fortress 2)",
  "Conducted online Q&A sessions with players to ensure a fair and balanced experience for all classes",
  "Gained understanding, learned, and implemented multiplayer level design theory",
  "Published the map on the Steam Workshop",
];

const ProjectDefiance = () => (
  <>
    <ScrollToTop />
    <ProjectNavbar />
    <DefianceHeroSection
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
          Fight on this KOTH map for control of the Port. Two ships enter one
          will leave... <br />
          -Hammer Editor
        </>
      }
      downloadLinks={[
        {
          url: "/MidnightTaxiDesignDoc.pdf",
          label: "Level Design Doc",
          description: "Map Decisions",
        },
        {
          url: "https://group-twenty8.itch.io/midnight-taxi",
          label: "Development Log",
          description: "Improvement / Itterations",
        },
        {
          url: "https://group-twenty8.itch.io/midnight-taxi",
          label: "Download Link",
          description: "Linked On Steam",
        },
      ]}
    />
    <ProjectTagsBar tags={tags} />

    <ProjectImageCarousel images={Maps} />

    <ProjectTitleDivider title="Overview" />

    <ProjectTextBody
      header={"Initial Stages"}
      body={
        <>
          In the early stages of this project, I concentrated on researching map
          design philosophies for team-based shooters, with a particular focus
          on existing maps in games like Team Fortress 2 (TF2). Gaining an
          understanding of these design principles was essential before creating
          a new level, as it helped avoid the pitfalls of developing a subpar
          map. My research involved analyzing the elements of maps in TF2,
          Overwatch, and Valorant to gain a comprehensive understanding of map
          theory. Additionally, I studied common gameplay aspects such as
          character health and abilities to ensure a well-rounded design
          approach. <br></br>
          <br></br>Following this research, I progressed through various stages
          of map design, starting with simple sketches. These early drafts
          underwent multiple iterations, refining the design with each pass.
          Once I had a clearer vision, I moved on to using the Hammer Editor to
          develop the map further.<br></br>
          <br></br>In this stage, it was essential to incorporate a lane
          structure into the map, featuring three main pathways (short, medium,
          and long) and distinct areas for different classes of characters.
          Creating a map that accommodates every character type contributes
          significantly to achieving a balanced gameplay experience.<br></br>
          <br></br>Upon getting an rough level design I made a clear to scale
          map design 1:1 before beginning the initial level blockouts
        </>
      }
    />

<ProjectImageCarousel images={Blockout} />

    <ProjectImageTextContainer
      imgSrc="/images/Site Files/TankBounce.gif"
      imgAlt="Satisfaction Mechanic UI"
      imgStyle={{ maxWidth: "400px" }}
    >
      <div>
        In the game, players start with a default weapon that fires five
        projectiles in quick succession before requiring a reload during a
        cooldown period. <br></br>
        <br></br>The projectiles bounce off surfaces, adding an exciting layer
        of strategy and encouraging more dynamic gameplay.
      </div>
    </ProjectImageTextContainer>
    <ProjectImageTextContainer
      imgSrc="/images/Site Files/TankMove.gif"
      imgAlt="Satisfaction Mechanic UI"
      imgStyle={{ maxWidth: "400px" }}
    >
      <div>
        Tanks utilize classic WASD controls for movement, with W and S for
        forward and backward movement, and A and D for rotation.<br></br>
        <br></br> This design frees up more keyboard space for two players,
        promoting cooperation while encouraging players to carefully consider
        their movement and positioning in the game.
      </div>
    </ProjectImageTextContainer>
    <ProjectImageTextContainer
      imgSrc="/images/Site Files/TankPickup.gif"
      imgAlt="Satisfaction Mechanic UI"
      imgStyle={{ maxWidth: "400px" }}
    >
      <div>
        Tanks can collect various power-ups to gain an edge over their opponent.
        These include:<br></br>
        <br></br> <li>Shield - Temporary Invulnerability</li>{" "}
        <li>Slow Mo - slows enemy</li>
        <li>tank Mine - An On contact tank killer</li> <br></br>These power-ups
        add variety to each match, ensuring that every encounter feels unique
        and strategic.
      </div>
    </ProjectImageTextContainer>

    <ProjectImageCarousel images={Projectiles} />

    <ProjectTextBody
      header={""}
      body={
        <>
          The game includes various projectile classes with differing speeds,
          radii, bounce counts, and ammo. A parent class was created to
          streamline the implementation and balancing of these projectiles,
          ensuring consistent behavior and easy adjustments for enhanced
          gameplay.
        </>
      }
    />
    <ProjectImageTextContainer
      imgSrc="/images/Site Files/SaveData.png"
      imgAlt="C++ Save Actor Constructor Code"
      imgStyle={{ maxWidth: "400px" }}
    >
      <div>
        For the game, I implemented a custom save data system to track scores
        between rounds. While this could have been managed through the Game
        Instance, I aimed to create a dedicated C++ save manager as part of my
        personal deliverables.
      </div>
    </ProjectImageTextContainer>

    <ProjectImgImgContainer
      src1="/images/Site Files/ScoreBoard.png"
      text="UI Scoreboards - First To Five Wins"
      alt1="Taxi Interior View 1"
      src2="/images/Site Files/TankCombat.gif"
      alt2="Taxi Interior View 2"
      img1Style={{ maxHeight: "500px", width: "100%" }} // Smaller left image
      img2Style={{ maxHeight: "350px", width: "100%" }} // Bigger right image
    />
    <br></br>
    <ProjectImgImgContainer
      src1="/images/Site Files/SpawningTank.gif"
      text="A spawn manager was implemented to alternate between weapon pickups and power-ups, with their timing and locations determined randomly. This approach helps keep gameplay varied and constantly changing."
      alt1="Taxi Interior View 1"
      src2="/images/Site Files/SpawnCode.png"
      alt2="Taxi Interior View 2"
      img1Style={{ maxHeight: "500px", width: "100%" }} // Smaller left image
      img2Style={{ maxHeight: "450px", width: "100%" }} // Bigger right image
    />

    <br></br>

    <ProjectTextBody
      header={"Levels"}
      body={
        <>
          Although not the primary focus of this project, I designed three
          distinct levels to enhance gameplay. Key considerations included:
          <ul>
            <li>
              <strong>Power-Up Spawn Locations:</strong> Strategically placing
              power-ups to encourage exploration and dynamic gameplay.
            </li>
            <li>
              <strong>Player Spawn Points:</strong> Ensuring fair starting
              positions that promote balanced competition.
            </li>
            <li>
              <strong>Map Geometry:</strong> Designing the environment to
              facilitate interesting rebounding shots and create tactical
              opportunities.
            </li>
          </ul>
          These elements contribute to varied and engaging gameplay, keeping
          each match fresh and exciting.
        </>
      }
    />
    <br></br>
    <ProjectTextBody
      header={"Project Conclusions"}
      body={
        <>
          With the goal of creating a vertical slice of a tank shooter, I’m
          pleased with the learning outcomes of this project. My aim was to
          effectively integrate C++ and Blueprints, and I gained valuable
          insights into when to use each—essentially clarifying the "fuzzy line"
          between the two.A significant takeaway has been the development of
          Blueprint Function Libraries. Creating custom nodes in C++ for
          functionalities not available in Blueprints has proven extremely
          beneficial. I plan to expand on this approach in future projects by
          building a more extensive library.This experience has not only
          enhanced my C++ skills but also deepened my understanding of Unreal
          Engine. Overall, the project has served as a clear guide for
          determining when to leverage C++ in my work.
        </>
      }
    />
    <br></br>
    <Footer />
  </>
);

export default ProjectDefiance;
