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
import ProjectImgImgText from "../components/projectComponents/ProjectImgImgText"; // Add this import
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

const MapBlockout = [
  {
    src: "/images/Site Files/Development 1_edited.jpg",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Rough Initial Blockout",
  },
  {
    src: "/images/Site Files/Development 2.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Further Map Blockouts",
  },
  {
    src: "/images/Site Files/Development 3.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Further Tweaks and refining",
  },
  {
    src: "/images/Site Files/Development 4.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Adding Exterior Warehouse",
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

    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/9U1u3Cp41hk?autoplay=1&loop=1&playlist=9U1u3Cp41hk&mute=1"
      title="Overview"
      minHeight="250px"
      description={
        <>
          I created a King of the Hill map for TF2, now available on the Steam
          Workshop. The development process took 8 weeks, during which I learned
          to use the Hammer Editor from scratch. ​<br></br>
          <br></br>Designed for 15v15 gameplay, the map underwent continuous
          refinement based on user feedback and testing.
          <br></br>
          <br></br>During testing, I observed matches as an independent
          observer, allowing me to identify player frustrations and refine the
          map design accordingly.
          <br></br>
          <br></br>This project taught me the core fundamentals of level design
          and provided valuable insights into creating an enjoyable TF2 map
          aswell as a wider understanding of multiplayer level design concepts.
          <br></br>
          <br></br>You can find my map on the Steam Workshop here. ​<br></br>
          <br></br>Extra Assets will need to be added to TF2 files to see
          additional textures and models in game. Download can be found here
        </>
      }
    />

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

    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/9U1u3Cp41hk?autoplay=1&loop=1&playlist=9U1u3Cp41hk&mute=1"
      title="Initial Development"
      minHeight="250px"
      description={
        <>
          Following initial game research and planning I started some initial
          steps into learning the hammer editor and starting some of the initial
          blockout. I found one of the initial challenges I had with this
          project was grasping scale of maps vs the mockups I made, this had me
          readjusting the scaling of the map to more accommodate the the typical
          design of TF map. During this stage it was important to breakdown work
          quickly, get feedback and iterate and test with other play testers
        </>
      }
    />

    <ProjectImgImgText
      src1="/images/Site Files/MapCutout.png"
      alt1="Placeholder 1"
      src2="/images/Site Files/MapCutout.png"
      alt2="Placeholder 2"
      title="Test Render"
    >
      If you see this, the component is working!
    </ProjectImgImgText>

    <ProjectImageTextContainer
      imgSrc="/images/Site Files/MapCutout.png"
      imgAlt="Satisfaction Mechanic UI"
      imgStyle={{ maxWidth: "700px" }}
      title="Map Itterations"
    >
      <div>
        Down the line in the project I found myself many small and impactful
        changes from the map shaped from player testing. When doing this testing
        It was important to conduct testing from an position of an observer and
        not as a player, as the way the level designer would play versus and
        actual player would be drastically different and thus bias, after every
        test with new players each time I conduct google feedback forms
        discussing points of feedback and areas that needed imrproving
      </div>
    </ProjectImageTextContainer>

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
    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/C_CVLGR7aIU?autoplay=1&loop=1&playlist=C_CVLGR7aIU&mute=1"
      title="Conclusions"
      minHeight="350px"
      description={
        <>
          Overall, I am very pleased with the outcome of this project, achieving
          the goals I set out to learn the Hammer Editor, publish a map to the
          Steam Workshop, and understand multiplayer level design.
          <br></br>
          <br></br>Reflecting on the experience, I realize that iteration and
          extensive player testing are essential for developing a successful
          level. Initially, I underestimated the impact of player feedback, but
          it proved crucial in shaping the final result. ​<br></br>
          <br></br>As I look ahead, I’m excited to be featured in the university
          highlights for this project. This recognition inspires me to continue
          refining my skills and exploring new opportunities in level design.
        </>
      }
    />
    <br></br>
    <Footer />
  </>
);

export default ProjectDefiance;
