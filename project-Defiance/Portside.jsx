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
  
  {
    src: "/images/Site Files/Map1.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Height Map Inner Section",
  },
  {
    src: "/images/Site Files/Map22.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Height Map Upper Sections",
  },
  {
    src: "/images/Site Files/Map33.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Map Buffer Zones",
  },
  {
    src: "/images/Site Files/Info1.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Health Information",
  },
  {
    src: "/images/Site Files/Info2.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "KOTH Capture Rates",
  },
  {
    src: "/images/Site Files/Info3.jpg",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Core Character Information",
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
          url: "/images/Site Files/DesignDocPort.pdf",
          label: "Level Design Doc",
          description: "Map Decisions",
        },
        {
          url: "/images/Site Files/DevLogPort.pdf",
          label: "Development Log",
          description: "Improvement / Itterations",
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

    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/B2UbhAX0L9Y?autoplay=1&loop=1&playlist=B2UbhAX0L9Y&mute=1"
      title="Overview"
      minHeight="550px"
      description={
        <>
          I created a King of the Hill map for TF2, now available on the Steam
          Workshop. The development process took 8 weeks, during which I learned
          to use the Hammer Editor from scratch.<br></br>
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
          <br></br>Extra Assets will need to be added to TF2 files to see
          additional textures and models in game. Download can be found above
        </>
      }
    />

    <ProjectImageCarousel images={Maps} />
    <ProjectImageCarousel images={MapBlockout} />


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

    <ProjectTitleDivider title="Map Example Changes" />

    <ProjectImgImgText
      src1="/images/Site Files/Itter1A.png"
      alt1="Placeholder 1"
      src2="/images/Site Files/Itter1B.png"
      alt2="Placeholder 2"
      title="Improving Courtyard"
    >
      The long exposed sightline made it hard for medium to short-range
      characters to use this area without being shot from afar by long-range
      characters. Adding a pillar provides cover, enabling safer approaches and
      requiring snipers to play more aggressively if they want to use the long
      channel, as it increases their risk.
    </ProjectImgImgText>
    <ProjectImgImgText
      src1="/images/Site Files/Itter2A.png"
      alt1="Placeholder 1"
      src2="/images/Site Files/Itter2B.png"
      alt2="Placeholder 2"
      title="Tower Backboards"
    >
      Backboards were added to the tower positions, enabling characters like
      Demoman and Soldier to inflict damage on enemies in these spots. This
      adjustment enhances game fairness without compromising the cover typically
      used by players such as Engineer and Sniper.
    </ProjectImgImgText>
    <ProjectImgImgText
      src1="/images/Site Files/Itter3A.png"
      alt1="Placeholder 1"
      src2="/images/Site Files/Itter3B.png"
      alt2="Placeholder 2"
      title="Adding Height"
    >
      To encourage more diverse combat in the lower sections of the map,
      additional catwalks were added. This change increased the map's
      verticality, enabling players to execute more dynamic plays and providing
      characters like Medic and Engineer with more options for movement and
      setup.
    </ProjectImgImgText>
    <ProjectImgImgText
      src1="/images/Site Files/Itter4A.png"
      alt1="Placeholder 1"
      src2="/images/Site Files/Itter4B.png"
      alt2="Placeholder 2"
      title="Enhanced Protection"
    >
      Additionally, throughout development, it became clear that sniper
      characters dominated the long, open sightlines extending from the spawn
      areas, making it difficult for players to leave safely. To address this,
      we added extra protection and cover, preventing external lanes of play
      from interacting with that channel and improving overall balance.
    </ProjectImgImgText>

    <ProjectTitleDivider title="Map Readibility" />

    <ProjectImgImgText
      src1="/images/Site Files/Read1A.png"
      alt1="Placeholder 1"
      src2="/images/Site Files/Read1B.png"
      alt2="Placeholder 2"
      title="Improving Map Readibility"
    >
      During development, I noticed that players were confused by certain
      elements of the map, such as water hazards and the locations of exits and
      resupply points near spawn areas. This feedback prompted me to add signage
      throughout the map to improve clarity and guide players more effectively.
    </ProjectImgImgText>
    <ProjectImgImgText
      src1="/images/Site Files/Read2A.png"
      alt1="Placeholder 1"
      src2="/images/Site Files/Read2B.png"
      alt2="Placeholder 2"
      title="Dividing The Map"
    >
      As my project moved out of the blockout phase, I focused on adding textures and models to enhance the design and overall feel of the map. This not only made the map more visually defined but also improved player navigation by clearly indicating each teams side, and where the flow of enemies comes from.
    </ProjectImgImgText>

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
          it proved crucial in shaping the final result.<br></br>
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
