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
import ProjectImgImgText from "../components/projectComponents/ProjectImgImgText"; // Add this import

const roleInfo = ["Level Designer"];

const tags = ["TF2", "Level Design", "Multiplayer", "Hammer Editor", "Balancing"];


const Maps = [
  {
    src: "/images/Site Files/P4.jpg",
    alt: "Undocking containers area",
    caption: "Undocking Containers",
  },{
    src: "/images/Site Files/P5.jpg",
    alt: "Undocking containers area",
    caption: "Undocking Containers",
  },{
    src: "/images/Site Files/P6.png",
    alt: "Undocking containers area",
    caption: "Undocking Containers",
  },{
    src: "/images/Site Files/P7.png",
    alt: "Undocking containers area",
    caption: "Undocking Containers",
  },
  {
    src: "/images/Site Files/P8.png",
    alt: "Undocking containers area",
    caption: "Undocking Containers",
  },
  {
    src: "/images/Site Files/P3.jpg",
    alt: "Undocking containers area",
    caption: "Undocking Containers",
  },
  {
    src: "/images/Site Files/P2.jpg",
    alt: "Blu side sniper tower",
    caption: "Blu Side Sniper Tower",
  },
  {
    src: "/images/Site Files/P1.jpg",
    alt: "Red side canal",
    caption: "Red Side Canal",
  },
];

const Blockout = [
  {
    src: "/images/Site Files/GIF Sketch Portside Initial.gif",
    alt: "Initial map sketch",
    caption: "Initial Map Sketch",
  },
  {
    src: "/images/Site Files/Portside Initial Plans.jpg",
    alt: "Map design iteration 1",
    caption: "Map Design Iteration 1",
  },
  {
    src: "/images/Site Files/Portside Further Itterations.png",
    alt: "Further tweaks and refining to the map",
    caption: "Further Tweaks and Refining",
  },
  {
    src: "/images/Site Files/Portside Map Itteration 3.jpg",
    alt: "Final map design at in-game scale",
    caption: "Final Map Design to In-Game Scale",
  },

  {
    src: "/images/Site Files/Map1.png",
    alt: "Height map, inner section",
    caption: "Height Map: Inner Section",
  },
  {
    src: "/images/Site Files/Map22.png",
    alt: "Height map, upper sections",
    caption: "Height Map: Upper Sections",
  },
  {
    src: "/images/Site Files/Map33.png",
    alt: "Map buffer zones",
    caption: "Map Buffer Zones",
  },
  {
    src: "/images/Site Files/Info1.png",
    alt: "Health information reference",
    caption: "Health Information",
  },
  {
    src: "/images/Site Files/Info2.png",
    alt: "King of the Hill capture rates reference",
    caption: "KOTH Capture Rates",
  },
  {
    src: "/images/Site Files/Info3.jpg",
    alt: "Core character information reference",
    caption: "Core Character Information",
  },
]

const MapBlockout = [
  {
    src: "/images/Site Files/Development 1_edited.jpg",
    alt: "Rough initial blockout",
    caption: "Rough Initial Blockout",
  },
  {
    src: "/images/Site Files/Development 2.png",
    alt: "Further map blockouts",
    caption: "Further Map Blockouts",
  },
  {
    src: "/images/Site Files/Development 3.png",
    alt: "Further tweaks and refining to the blockout",
    caption: "Further Tweaks and Refining",
  },
  {
    src: "/images/Site Files/Development 4.png",
    alt: "Adding the exterior warehouse",
    caption: "Adding Exterior Warehouse",
  },

]

const responsibility = [
  "Developed a balanced and engaging King of the Hill map for TF2 (Team Fortress 2)",
  "Ran QA testing sessions with players to ensure a fair and balanced experience for all classes",
  "Learned and applied multiplayer level design theory",
  "Published the map on the Steam Workshop",
];

const ProjectDefiance = () => (
  <>
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

    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/B2UbhAX0L9Y?autoplay=1&loop=1&playlist=B2UbhAX0L9Y&mute=1"
      title="Overview"
      minHeight="550px"
      description={
        <>
          I created a King of the Hill map for TF2, now available on the Steam
          Workshop. The development process took 8 weeks, during which I learned
          to use the Hammer Editor from scratch.<br></br>
          <br></br>Designed for 12v12 gameplay, the map underwent continuous
          refinement based on user feedback and testing.
          <br></br>
          <br></br>During testing, I observed matches as an independent
          observer, allowing me to identify player frustrations and refine the
          map design accordingly.
          <br></br>
          <br></br>This project taught me the core fundamentals of level design
          and provided valuable insights into creating an enjoyable TF2 map, as
          well as a wider understanding of multiplayer level design concepts.
          <br></br>
          <br></br>Extra assets will need to be added to your TF2 files to see
          the additional textures and models in-game. The download can be
          found above.
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
          <br></br>Once I had a rough level design, I created a clear, to-scale
          (1:1) map layout before beginning the initial level blockouts.
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
          Following initial game research and planning, I took my first steps
          into learning the Hammer Editor and started on the initial blockout.
          One of the early challenges I faced was grasping the scale of the
          map versus the mockups I had made, which led me to readjust the
          map's scale to better match the typical design of TF2 maps. During
          this stage, it was important to break down work quickly, get
          feedback, and iterate with other playtesters.
        </>
      }
    />

    <ProjectImageTextContainer
      imgSrc="/images/Site Files/MapCutout.png"
      imgAlt="Map cutout view"
      imgStyle={{ maxWidth: "700px" }}
      title="Map Iterations"
    >
      <div>
        Later in the project, many small but impactful changes to the map
        were shaped by player testing. When conducting this testing, it was
        important to observe as an outside observer rather than play as a
        participant, since the way a level designer plays differs drastically
        from how an actual player would, which introduces bias. After every
        test with new players, I collected feedback using Google Forms,
        focusing on key points and areas that needed improvement.
      </div>
    </ProjectImageTextContainer>

    <ProjectTitleDivider title="Map Example Changes" />

    <ProjectImgImgText
      src1="/images/Site Files/Itter1A.png"
      alt1="Courtyard before adding a cover pillar"
      src2="/images/Site Files/Itter1B.png"
      alt2="Courtyard after adding a cover pillar"
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
      alt1="Tower position before backboards were added"
      src2="/images/Site Files/Itter2B.png"
      alt2="Tower position with backboards added"
      title="Tower Backboards"
    >
      Backboards were added to the tower positions, enabling characters like
      Demoman and Soldier to inflict damage on enemies in these spots. This
      adjustment enhances game fairness without compromising the cover typically
      used by players such as Engineer and Sniper.
    </ProjectImgImgText>
    <ProjectImgImgText
      src1="/images/Site Files/Itter3A.png"
      alt1="Lower section before added catwalks"
      src2="/images/Site Files/Itter3B.png"
      alt2="Lower section with catwalks added"
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
      alt1="Sniper sightline before added cover"
      src2="/images/Site Files/Itter4B.png"
      alt2="Sniper sightline with added cover"
      title="Enhanced Protection"
    >
      Additionally, throughout development, it became clear that sniper
      characters dominated the long, open sightlines extending from the spawn
      areas, making it difficult for players to leave safely. To address this,
      we added extra protection and cover, preventing external lanes of play
      from interacting with that channel and improving overall balance.
    </ProjectImgImgText>

    <ProjectTitleDivider title="Map Readability" />

    <ProjectImgImgText
      src1="/images/Site Files/Read1A.png"
      alt1="Map area before added signage"
      src2="/images/Site Files/Read1B.png"
      alt2="Map area with added signage"
      title="Improving Map Readability"
    >
      During development, I noticed that players were confused by certain
      elements of the map, such as water hazards and the locations of exits and
      resupply points near spawn areas. This feedback prompted me to add signage
      throughout the map to improve clarity and guide players more effectively.
    </ProjectImgImgText>
    <ProjectImgImgText
      src1="/images/Site Files/Read2A.png"
      alt1="Map area before texturing"
      src2="/images/Site Files/Read2B.png"
      alt2="Map area after texturing and team-side indicators"
      title="Dividing The Map"
    >
      As my project moved out of the blockout phase, I focused on adding textures and models to enhance the design and overall feel of the map. This not only made the map more visually defined but also improved player navigation by clearly indicating each team's side and where the flow of enemies comes from.
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
          <br></br>As I look ahead, I'm excited to be featured in the university
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
