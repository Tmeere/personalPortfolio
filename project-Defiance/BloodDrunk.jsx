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

const roleInfo = ["Producer / Technical Designer"];

const tags = ["Unreal", "Leadership", "Blueprint", "Jira", "QA", "Github", "Optimzation"];


const FlowDiagrams = [
  {
    src: "/images/Site Files/Flow1.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Flow Diagram",
  },
  {
    src: "/images/Site Files/Flow2.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Flow Diagram",
  },
  {
    src: "/images/Site Files/Flow3.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Flow Diagram",
  },
  {
    src: "/images/Site Files/Flow4.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Flow Diagram",
  },
];

const PlayerDiagrams = [
  {
    src: "/images/Site Files/Dia1.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Joy Ability Diagram",
  },
  {
    src: "/images/Site Files/Dia2.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Fear Ability Diagram",
  },
  {
    src: "/images/Site Files/Dia3.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Rage Ability Diagram",
  },
  {
    src: "/images/Site Files/Dia4.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Sad Ability Diagram",
  },
]
const WallRun = [
  {
    src: "/images/Site Files/WallRun1.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Use of Raycasts for Wall Detection",
  },
  {
    src: "/images/Site Files/WallRun4.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Boosted Jump following wall running",
  }, 
]


const responsibility = [
  "Managing the programming department to meet milestones and deadlines​",
  "Assisting Junior Developers with tasks, teaching new concepts",
  "​Bug Testing and Fixing",
  "Developing Weapon Classes and Sytems",
  "Enemy AI ",
  "Player Mechanics​",
];

const ProjectDefiance = () => (
  <>
    <ScrollToTop />
    <ProjectNavbar />
    <DefianceHeroSection
      title="BloodDrunk"
      showLogo={false}
      videoUrl="https://www.youtube.com/embed/DxV5A0v52A0?autoplay=1&loop=1&playlist=DxV5A0v52A0&mute=1"
      roleInfo={roleInfo}
      leftInfo={responsibility}
      leftTitle="Key Responsibilities"
      background="#181818"
      cardBackground="#232323"
      heroImage="/images/Site Files/PortsideSplash.jpg"
      summary={
        <>
          Go absolutely haywire in this VR arcade splatterfest! BloodDrunk is a
          first-person wave shooter that balances style and skill, encouraging
          player expression. Adopt the role of a bloodthirsty killing machine
          and take out as many thugs as possible in whichever way you fancy, but
          watch your blood meter; you're constantly taking damage!
        </>
      }
      downloadLinks={[
        {
          url: "https://flamingbirdboi.itch.io/blood-drunk",
          label: "Game Download",
          description: "Itch.IO Link",
        },
        {
          url: "/images/Site Files/BDDesignDoc.pdf",
          label: "Design Docs",
          description: "Link to Docs",
        },
      ]}
    />
    <ProjectTagsBar tags={tags} />

    <ProjectImageTextContainer
      imgSrc="/images/Site Files/Wpn.gif"
      imgAlt="BloodDrunk Overview"
      title="Overview"
      imgStyle={{ maxWidth: "450px", width: "100%" }}
    >
      Whether you're steamrolling the cramped corridors of an asylum, leveling
      an office all the way from another building, or bulldozing your way
      through an abandoned meat processing plant - just keep killing! Your life
      depends on it!
      <br />
      <br />
      Seven different weapons. Seven distinct levels. Hordes of enemies. All in
      VR. How long can you last?
    </ProjectImageTextContainer>

    <ProjectImageTextContainer
      imgSrc="/images/Site Files/Wpn2.gif"
      imgAlt="BloodDrunk Team Lead"
      title="Project Leadership & Development"
      imgStyle={{ maxWidth: "450px", width: "100%" }}
    >
      During the summer, I served as the Project Lead for an eight-person team
      developing a VR shooter called BloodDrunk. Selected by Staffordshire
      University, I joined an international team coming from different
      Universities at KAMK (Kajaani University of Applied Sciences) in Finland,
      where we dedicated ourselves to creating an addictive VR Shooter.
      <br />
      <br />
      As the project lead, my primary responsibility was to ensure seamless
      collaboration across all departments. I set goals and deadlines using
      project management tools like Jira and Trello, and I provided mentorship
      and support to junior developers.
      <br />
      <br />
      In addition to my leadership role, I actively contributed to the project
      by designing and developing core gameplay mechanics, enemy AI systems, and
      user interfaces. I also played a key role in crafting level design
      blockouts and refining the overall VR experience.
    </ProjectImageTextContainer>

    <ProjectImageTextContainer
      imgSrc="/images/Site Files/Behaviour.png"
      imgAlt="BloodDrunk Team Lead"
      title="Weapon Systems"
      imgStyle={{ maxWidth: "750px", width: "100%" }}
    >
      One of the first mechanics I developed for BloodDrunk was the weapon
      shooting system. Initially, I aimed to create a straightforward shooting
      mechanic, but as the project progressed, it became clear that a more
      complex, scalable system was necessary to accommodate the diverse range of
      weapons we planned to include.<br></br>
      <br></br>I focused on designing a user-friendly system that would allow
      designers to modify weapon attributes without needing to dive into the
      blueprint code. This system utilized data tables, enabling designers to
      easily adjust values for balancing and other purposes on the fly. This
      approach streamlined the development process and empowered the team to
      iterate quickly.
    </ProjectImageTextContainer>

    <ProjectImgImgContainer
      src1="/images/Site Files/Train1.png"
      alt1="BloodDrunk Overview"
      src2="/images/Site Files/Train.png"
      alt2="BloodDrunk Team Lead"
      img1Style={{ maxWidth: "400px", width: "100%" }}
      img2Style={{ maxWidth: "700px", width: "100%" }}
      text={
        <>
          <b>Data Table Systems:</b> Data table systems were made so a designer
          or VFX Artist could go into the weapon values and quickly change and
          iterate values on the go for the weapon. This sped up development time
          for making further weapons, as no new blueprint would be needed for
          alternate weapons and aided with quickly being able to balance the
          weapons in the game.
          <br />
          <br />
          <b>Shooting Ranges:</b> Shooting ranges were created for designers to
          test Patrolling AI shooting targets. This setup allowed for easy
          evaluation of weapon feel and balance. It was developed during the
          project's early phases, while core mechanics were being refined before
          moving on to level testing.
        </>
      }
    />
    <br></br>

        <ProjectVidAndText
          videoUrl="https://www.youtube.com/embed/ONI7gKVKr3A?autoplay=1&loop=1&playlist=ONI7gKVKr3A&mute=1"
          title=""
          minHeight="400px"
          description={
            <>
              <p>
                Using inheritance, we developed seven unique weapon classes, including both live projectile weapons and standard line trace weapons. A critical consideration in designing these weapons was their overall feel, especially since they were for VR. I focused on haptics and feedback to enhance the dynamics of the weapons. Key elements included:
              </p>
              <ul>
                <li>
                  <b>Weapon Haptics:</b> Providing tactile feedback when shooting, catching, and dropping weapons.
                </li>
                <li>
                  <b>Weapon Visuals:</b> Incorporating realistic gunfire effects and ejected casings.
                </li>
                <li>
                  <b>VFX Laser Pointers:</b> Adding visual helpers for long-range shooting.
                </li>
              </ul>
              <p>
                These elements collectively contributed to a more immersive experience in the VR shooter.
              </p>
            </>
          }
        />

<ProjectImgImgContainer
      src1="/images/Site Files/Train1.png"
      alt1="BloodDrunk Overview"
      src2="/images/Site Files/Train.png"
      alt2="BloodDrunk Team Lead"
      img1Style={{ maxWidth: "400px", width: "100%" }}
      img2Style={{ maxWidth: "700px", width: "100%" }}
      text={
        <>
          
        </>
      }
    />

    <ProjectTextBody
      header={"Conclusion"}
      body={
        <>
          Reflecting on the conclusion of this project, I feel immense pride in
          the results our team achieved and the contributions I made. Leading
          this project was a significant challenge for me, as it required me to
          step into a producer role rather than solely a technical designer. The
          most demanding aspect wasn't the technical side, but rather the
          managerial hurdles of keeping all departments aligned with our weekly
          milestones and supporting their individual goals. I quickly learned
          that the greatest challenges often come from unforeseen circumstances.
          From the start, I prioritized getting to know each team member
          personally to understand their strengths and weaknesses. This
          knowledge allowed me to assign tasks that suited their skills best. I
          discovered that while some team members excelled at working
          independently, others thrived with more guidance. This tailored
          approach significantly enhanced our teamwork and was crucial in
          achieving our goal of developing a VR shooter. ​ At the outset, we
          established key goals: ​ - Improve Unreal Engine understanding - Gain
          VR development experience - Foster teamwork and communication ​ We
          succeeded in creating a vertical slice of our game, and while we met
          these initial objectives, we aspire to go further. We’ve decided to
          continue developing the project independently under our Indie Studio
          "Redmist" with the aim of a commercial release on Steam. Although this
          journey will present its own challenges, we firmly believe our game
          has much more potential than just a vertical slice. ​ After our
          university trip, we set up a Discord channel to facilitate
          collaboration in an international remote setting, focusing on the
          clear objectives of: more levels, more gameplay, and more fun! I’m
          excited about this upcoming phase and all that it entails.
        </>
      }
    />
    <br></br>
    <Footer />
  </>
);

export default ProjectDefiance;
