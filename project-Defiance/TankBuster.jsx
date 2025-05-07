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

const roleInfo = ["Programmer"];

const tags = ["Unreal", "C++", "Blueprint", "OOP", "QA", "Local Multiplayer", "Blueprint"];

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
    src: "/images/Site Files/Map.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Level 1",
  },
  {
    src: "/images/Site Files/Map2.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Level 2",
  },
  {
    src: "/images/Site Files/Map3.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Level 3",
  },
];

const responsibility = [
  "Developing a Local Multiplayer Game.",
  "Improving C++ / Blueprint understanding.",
  "Making a complete game loop tank shooter.",
  "Creating a project using C++ and Blueprint relations.",
];

const ProjectDefiance = () => (
  <>
    <ScrollToTop />
    <ProjectNavbar />
    <DefianceHeroSection
      title="Tank Busters"
      showLogo={false}
      videoUrl="https://www.youtube.com/embed/YN8mKNWFo1Y?autoplay=1&loop=1&playlist=YN8mKNWFo1Y&mute=1"
      roleInfo={roleInfo}
      leftInfo={responsibility}
      leftTitle="Key Responsibilities"
      background="#181818"
      cardBackground="#232323"
      heroImage="/images/Site Files/TankBck.jpg"
      summary="Get ready for an intense showdown in this top-down tank shooter! Strategically use various weapons and abilities to outmaneuver and defeat your opponent. First to three victories takes the crown! Use the terrain to your advantage—bounce projectiles off walls and catch your rival off guard. Think fast and aim true!"
    />
    <ProjectTagsBar tags={tags} />
    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/1JkDUQ9k9t0"
      title="Overview"
      minHeight="400px"
      description={
        <>
          In this competitive local multiplayer tank game, players engage in
          intense head-to-head battles across multiple maps, racing to achieve
          three wins. Only one player can emerge victorious. Drawing inspiration
          from "Tank Trouble," I set out to develop a C++ local multiplayer tank
          shooter. <br></br>
          <br></br>The goal was to create an engaging three-level experience
          where two friends could compete against each other using a single
          keyboard. <br></br>
          <br></br>For this project, I focused on building a straightforward
          tank shooter that leverages C++ in conjunction with Blueprints. This
          involved creating a custom library of Blueprint nodes from C++,
          allowing for a seamless integration of gameplay mechanics. This
          endeavor also served as an exploration of the classic "Fuzzy
          Line"—determining the optimal balance between tasks best suited for
          C++ and those handled by Blueprints.
        </>
      }
    />

    <ProjectTitleDivider title="Contributions" />
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
    <ProjectImageCarousel images={Maps} />

    <ProjectTextBody
      header={"Levels"}
      body={
        <>
          Although not the primary focus of this project, I designed three
          distinct levels to enhance gameplay. Key considerations included:
          <ul>
            <li>
              <strong>Power-Up Spawn Locations:</strong> Strategically placing power-ups to encourage exploration and dynamic gameplay.
            </li>
            <li>
              <strong>Player Spawn Points:</strong> Ensuring fair starting positions that promote balanced competition.
            </li>
            <li>
              <strong>Map Geometry:</strong> Designing the environment to facilitate interesting rebounding shots and create tactical opportunities.
            </li>
          </ul>
          These elements contribute to varied and engaging gameplay, keeping each match fresh and exciting.
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
