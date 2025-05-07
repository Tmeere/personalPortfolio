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

const roleInfo = ["Junior Programmer"];



const tags = ["Unreal", "Blueprint", "Teamwork", "Jira", "QA", "Github",];

const responsibility = [
  "Developing core gameplay mechanics.",
  "Conducting Q&A bug testing and resolving issues.",
  "Creating tools tailored for designers' needs.",
  "Implementing designer-made sounds and utilizing meta sounds effectively.",
];

const ProjectDefiance = () => (
  <>
    <ScrollToTop />
    <ProjectNavbar />
    <DefianceHeroSection
      title="Appliance-Defiance"
      showLogo={false}
      videoUrl="https://www.youtube.com/embed/og4CZvxNWIA?autoplay=1&loop=1&playlist=og4CZvxNWIA&mute=1"
      roleInfo={roleInfo}
      leftInfo={responsibility}
      leftTitle="Key Responsibilities"
      background="#181818"
      cardBackground="#232323"
      heroImage="/images/Site Files/MidnightTaxiHeroImg.jpg"
      summary="You wake up from Cyro during your long space travel. You wake up with the ship breaking down and the appliances have come to life! Bring order to the ship and defeat the appliances!"
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
    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/3pRzWkop_mw"
      title="Overview"
      minHeight="400px"
      description={
        <>
          In this game, it is the goal of the player to restore order to the
          ship. During the player's time in cryosleep, the ship's appliances
          have come to life and begun to wreak havoc on the ship. <br></br>
          <br></br>Save your crewmates, shoot the appliances, save the shipThis
          project was a collaborative project where I worked with an amazing
          team of 23 People. In this team, we had people with a range of
          backgrounds going from Art, Design, Animation, and Programming During
          this time my role on the team was a Junior Programmer. This task had
          me implementing gameplay features specified by design and doing the
          core bug testing/fixing for the game.<br></br>
          <br></br>This was a fun and insightful experience to teach me
          teamwork, communication, and working in a group environment.
        </>
      }
    />

    <ProjectTitleDivider title="Contributions" />
    <ProjectTextBody
      header={"Overview"}
      body={
        <>
          During this project, I was tasked with designing and implementing
          several core gameplay mechanics, including:
          <ul>
            <li>
              <strong>Health Pickups:</strong> Restoring the player's health.
            </li>
            <li>
              <strong>Ammo Pickups:</strong> Providing ammunition for various
              weapon classes.
            </li>
            <li>
              <strong>Parts Pickups:</strong> Collecting parts necessary for
              upgrading weapons.
            </li>
            <li>
              <strong>Oxygen Pickups/Drain Mechanic:</strong> Managing oxygen
              levels to ensure player survival amidst a draining mechanic.
            </li>
            <li>
              <strong>Spatial UI Objective Markers</strong>
            </li>
          </ul>
          <br />
          In addition to player pickups, I designed and integrated a range of
          traps into the game, such as:
          <ul>
            <li>
              <strong>Exploding Barrels:</strong> Harming nearby enemies on
              contact.
            </li>
            <li>
              <strong>Exposed Wiring:</strong> Occasionally zapping the player.
            </li>
            <li>
              <strong>Exposed Steam Pipes:</strong> Constantly damaging the
              player while in contact.
            </li>
          </ul>
          <br />
          Beyond these responsibilities, I collaborated with a Sound Designer to
          integrate over 92 unique sounds into the game. This included
          everything from background music to enemy impact sounds, enhancing the
          overall audio experience.
          <br />
          <br />
          Alongside this, I performed weekly testing of all work produced by the
          programming team, reporting and fixing issues found.
        </>
      }
    />
    <br></br>
    <ProjectImgImgContainer
      src1="/images/Site Files/Collect.gif"
      text="Powerups and hazards"
      alt1="Taxi Interior View 1"
      src2="/images/Site Files/Shock.gif"
      alt2="Taxi Interior View 2"
      img1Style={{ maxHeight: "500px", width: "100%" }} // Smaller left image
      img2Style={{ maxHeight: "450px", width: "100%" }} // Bigger right image
    />
    <br></br>
    <ProjectImgImgContainer
      src1="/images/Site Files/EasterEgg.gif"
      text="Easter Eggs and Sound Files"
      alt1="Taxi Interior View 1"
      src2="/images/Site Files/Sounds.png"
      alt2="Taxi Interior View 2"
      img1Style={{ maxHeight: "500px", width: "100%" }} // Smaller left image
      img2Style={{ maxHeight: "450px", width: "100%" }} // Bigger right image
    />
    <br></br>
    <ProjectTextBody
      header={"Challenges"}
      body={
        <>
          The core challenge of this project stemmed from it being my first
          team-based endeavor. In the past, I had primarily worked on
          game-related projects independently, allowing me to work according to
          my own flow and style. <br></br>
          <br></br>However, transitioning to a team setting required me to focus
          on communication and building team-based relationships, especially
          given the dramatic increase in scope and challenge presented by a
          project involving 23 team members from a range of different
          disciplines. <br></br>
          <br></br>In addition to improving communication, I had to adapt to
          shared programming styles and best practices, which was not something
          I typically considered in my solo projects. Embracing these changes
          significantly benefited me in subsequent settings and future group
          projects.
        </>
      }
    />
    <ProjectVidVidComponent
      videoSrc1="https://www.youtube.com/embed/e3oTesDvjS0"
      videoSrc2="https://www.youtube.com/embed/yy4JpDs6zlo"
    />
    <ProjectImgImgContainer
      src1="/images/Site Files/Pause Menu.gif"
      text="Satisfaction Bar Updated Smoothly by the new inputted value over time, Sounds based on decisions made."
      alt1="Taxi Interior View 1"
      src2="/images/Site Files/Enemies.gif"
      alt2="Taxi Interior View 2"
    />
    <br></br>
    <ProjectTextBody
      header={"Conclusion"}
      body={
        <>
          ​Completing this project stands out as one of my most significant
          achievements in game development to date. As my first team-based
          endeavor, it introduced a new dimension of collaboration, requiring me
          to integrate my work with contributions from various departments to
          produce a cohesive, high-quality game.<br></br>
          <br></br>Despite the challenges, the learning curve and high project
          expectations, I adapted quickly to the team environment. I became
          proficient at meeting deadlines while maintaining the quality of my
          work. A key lesson I learned was to treat my contributions as if they
          were the final touches on the project. This approach ensured that
          nothing was overlooked and that our collective efforts remained
          organized and on track.<br></br>
          <br></br>Overall, this project served as an excellent introduction to
          working with Unreal Blueprint and navigating team dynamics, providing
          invaluable experience for my future endeavors in game development.
        </>
      }
    />
    <br></br>
    <Footer />
  </>
);

export default ProjectDefiance;
