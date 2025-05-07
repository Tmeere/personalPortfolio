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

const roleInfo = ["Technical Designer"];

const tags = ["AI", "Unreal", "Blueprint", "Learning", "Animation"];


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
  "Learning and developing AI Characters",
  "Making an High Octane shooter with an complete gameplay loop",
  "Improving technical understanding of blueprint",
  "Developing a set of fun gameplay mechanics",
  "Further Expanding of Unreal Knowledge / Skillset",
];

const ProjectDefiance = () => (
  <>
    <ScrollToTop />
    <ProjectNavbar />
    <DefianceHeroSection
      title="Portside"
      showLogo={false}
      videoUrl="https://www.youtube.com/embed/idcMbMSL6Rk?autoplay=1&loop=1&playlist=idcMbMSL6Rk&mute=1"
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
          url: "/images/Site Files/Emo Edge Making Of.pdf",
          label: "Making Of Document",
          description: "Please Read for full proejct summary",
        },
      ]}
    />
    <ProjectTagsBar tags={tags} />

    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/idcMbMSL6Rk?autoplay=1&loop=1&playlist=idcMbMSL6Rk&mute=1"
      title="Overview"
      minHeight="400px"
      description={
        <>
          In this adrenaline-pumping shooter, you'll navigate through diverse
          rooms and environments, engaging enemies that come at you
          relentlessly. Match your actions with the unique abilities of each
          environment to defeat these foes before the timer runs out.
          <br />
          <br />
          As I embarked on this project, my primary goal was to create an
          engaging game while deepening my understanding of the Unreal Engine. I
          aimed to achieve several key learning outcomes:
          <ul>
            <li>Develop expertise as a Gameplay/Technical Designer</li>
            <li>Further Blueprint development</li>
            <li>Master AI fundamentals, including Finite State Machines</li>
            <li>Understand Animation State Machines</li>
            <li>Implement high-octane movement mechanics</li>
          </ul>
          With these objectives in mind, I set out to create Emo Edge.
        </>
      }
    />
    <ProjectImageContainer
      src="/images/Site Files/GameLoop.jpg"
      alt="Emo Edge Gameplay Showcase"
      caption="Showcase of Emo Edge gameplay and environment"
      summary={
        "When Starting this project I initially made a simplistic game loop to understand what I was aiming for"
      }
    />

    <ProjectImgImgContainer
      src1="/images/Site Files/ProjPlan.png"
      alt1="Emo Edge Gameplay 1"
      src2="/images/Site Files/Inspo.png"
      alt2="Emo Edge Gameplay 2"
      title="Gameplay Highlights"
      text="Alongside this plans were made into similar titles for inspirations as well as planning out the projects timeline and scope"
    />

    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/7oGpFN4gbcg?autoplay=1&loop=1&playlist=7oGpFN4gbcg&mute=1"
      title="Initial Phases"
      minHeight="300px"
      description={
        <>
          In the early stages of the project, I focused on prototyping simple
          line trace functions that would apply damage to the cube only if the
          player was in the correct Enum State.
          <br></br>
          <br></br>Each Aspect featured a unique ability, governed by a mana
          meter that regenerated over time.
          <br></br>
          <br></br>To differentiate each system, the fire modes varied, ranging
          from automatic firing to charged single shots. These modes were all
          managed through the Enum State.
        </>
      }
    />

    <ProjectImageCarousel images={FlowDiagrams} />

    <ProjectTitleDivider title="Combat States Development" />

    <ProjectImgImgContainer
      src1="/images/Site Files/Rage1.png"
      alt1="Example Screenshot 1"
      src2="/images/Site Files/Rage2.gif"
      alt2="Example Screenshot 2"
      title="Development Progress"
      text="Fire Projectile applies an Actor Component that burns the enemy over time (DOT)"
      img2Style={{ height: "400px", objectFit: "cover" }}
    />
    <br></br>
    <ProjectImgImgContainer
      src1="/images/Site Files/Sad2.png"
      alt1="Example Screenshot 1"
      src2="/images/Site Files/Sad1.gif"
      alt2="Example Screenshot 2"
      title="Development Progress"
      text="Fully Automatic Fire, while mouse is held down"
      img2Style={{ height: "390px", objectFit: "cover" }}
    />
    <br></br>
    <ProjectImgImgContainer
      src1="/images/Site Files/Fear2.png"
      alt1="Example Screenshot 1"
      src2="/images/Site Files/Fear1.gif"
      alt2="Example Screenshot 2"
      title="Development Progress"
      text="Constant DOT while in the path of the flame"
      img2Style={{ height: "350px", objectFit: "cover" }}
    />
    <br></br>
    <ProjectImgImgContainer
      src1="/images/Site Files/Joy2.png"
      alt1="Example Screenshot 1"
      src2="/images/Site Files/Joy1.gif"
      alt2="Example Screenshot 2"
      title="Development Progress"
      text="Charged Attack that regains the player mana based on number of enemies hit"
      img2Style={{ height: "390px", objectFit: "cover" }}
    />
    <br></br>
    <ProjectImageCarousel images={PlayerDiagrams} />

    <ProjectImageTextContainer
      imgSrc="/images/Site Files/WallRun.png"
      imgAlt="Player Ability Example"
      title="Wall-Running System: Technical Breakdown"
      imgStyle={{ maxWidth: "600px", width: "100%" }}
    >
      The wall-running component is built using a three-part system for the
      player.
      <br />
      <br />
      When the player jumps, a wall check is performed on either side. This
      check determines if the player is adjacent to a yellow wall, indicating a
      wall-running zone. If so, the player transitions to a new movement mode
      called <b>flying</b>.<br />
      <br />
      During this mode, the player is smoothly tilted towards the wall and
      receives a constant force that propels them along it. The system
      continuously checks to ensure the player remains attached to the wall. If
      they move away or the wall-running ends, the player exits this movement
      mode.
    </ProjectImageTextContainer>

    <ProjectImageTextContainer
      imgSrc="/images/Site Files/Wall Running.gif"
      imgAlt="Player Ability Example"
      title="Wall-Running System: Gameplay Feel"
      imgStyle={{ maxWidth: "600px", width: "100%" }}
    >
      To add more feel to the wall-running system, players receive a boosted
      jump when detaching from the wall. This enhanced jump not only adds to the
      gameplay but also allows a smooth transition into other movement
      mechanics, such as sliding.
      <br />
      <br />
      This integration improves the game's feel throughout all levels and
      encounters, making movement more dynamic and satisfying.
    </ProjectImageTextContainer>

    <ProjectImgImgContainer
      src1="/images/Site Files/WallUI.png"
      alt1="Example Screenshot 1"
      src2="/images/Site Files/WallUI2.png"
      alt2="Example Screenshot 2"
      title="Development Progress"
      text="Wall running opportunities is indicated to the player by the white arrows either side of the crosshair, helping with clearer indication to the player"
      img1Style={{ height: "300px", objectFit: "cover" }}
      img2Style={{ height: "300px", objectFit: "cover" }}
    />

    <ProjectImageCarousel images={WallRun} />

    <ProjectImageTextContainer
      imgSrc="/images/Site Files/WallRunDia.png"
      imgAlt="Player Ability Example"
      title="Sliding: Technical Breakdown"
      imgStyle={{ maxWidth: "700px", width: "100%" }}
    >
      In addition to the wall-running feature, a sliding mechanic was developed
      for the game. Initially, I implemented an actor-checking method to
      determine when the player could slide, similar to the approach used for
      wall running. While this method was functional, it proved to be
      performance-intensive and less versatile for various sloped surfaces.
      <br />
      <br />
      To improve the system, I switched to a floor-checking method. When the
      player crouches, the system checks if the floor's angle exceeds 17
      degrees. This approach is more efficient and adaptable to any sloped
      surface rather than relying on specific objects.
      <br />
      <br />
      To achieve a smooth sliding experience and integrate it seamlessly with
      other movement mechanics, I fine-tuned three key character movement
      variables:
      <br />
      <br />
      <b>Ground Friction:</b> Adjusted to control the drag during sliding.
      <br />
      <b>Gravity Scale:</b> Modified to influence the speed and acceleration of
      the slide.
      <br />
      <b>Walkable Floor Angle:</b> Updated to ensure the sliding mechanic works
      consistently on various slopes.
    </ProjectImageTextContainer>
    <ProjectImgImgContainer
      src1="/images/Site Files/Slide1.png"
      alt1="Sliding Mechanic Example 1"
      src2="/images/Site Files/Slide2.png"
      alt2="Sliding Mechanic Example 2"
      title="Sliding Mechanic Visuals"
      text="Check the floor angle to apply frictionless state to the player during crouch."
      img1Style={{ height: "300px", objectFit: "contain" }}
      img2Style={{ height: "300px", objectFit: "contain" }}
    />
    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/NiXJ4G9YhXc?autoplay=1&loop=1&playlist=NiXJ4G9YhXc&mute=1"
      title="Sliding: Gameplay Feel"
      minHeight="350px"
      description={
        <>
          These adjustments collectively enhance the sliding feel, making it
          both smooth and responsive while complementing the game's other
          movement systems.
          <br />
          <br />
          Alongside these changes to the sliding, small additional components
          were added to the sliding mechanics like FOV changes, camera shakes,
          and tilts to make the sliding feel more impactful.
        </>
      }
    />

    <ProjectImageTextContainer
      imgSrc="/images/Site Files/GrappleDia.jpg"
      imgAlt="Player Ability Example"
      title="Grapple: Technical Breakdown"
      imgStyle={{ maxWidth: "700px", width: "100%" }}
    >
      Through player testing with the initial builds, players found they were
      lacking connectivity between movement-based mechanics and wanted more
      forms of high-octane movement. For this, I looked into making a grapple
      mechanic, similar to Ghostrunner's system.
      <br />
      <br />
      This initially started with a simple lerp vector should a line trace hit
      an actor with the tag "Grapple." However, additional components like
      forces that launch the player after the lerp were added to give further
      movement.
      <br />
      <br />
      Alongside the initial simple lerp, a cable was added to the player and
      bound to the hand. This would appear only when grappling and would bind to
      the end position.
      <br />
      <br />
      Alongside the sliding mechanic, this helped to further connect the
      high-octane movement mechanics.
    </ProjectImageTextContainer>

    <ProjectVideoAndImg
      videoUrl="https://www.youtube.com/embed/CL8S6SieLR0?autoplay=1&loop=1&playlist=CL8S6SieLR0&mute=1"
      imgSrc="/images/Site Files/GrappleShot.png"
      imgAlt="Sliding Mechanic Video Thumbnail"
      title="Sliding Mechanic In Action"
      imgStyle={{ maxWidth: "400px", width: "100%" }}
    ></ProjectVideoAndImg>

    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/D0hg8HAqsAg?autoplay=1&loop=1&playlist=D0hg8HAqsAg&mute=1"
      title="Dashing: Gameplay Feel"
      minHeight="350px"
      description={
        <>
          One of the key player mechanics I developed is the dodging system.
          Players have two dash charges that regenerate while they are idle. By
          using their movement input, players can dash in the desired direction.
          <br></br>
          <br></br>To Improve the feel behind this time dilation and custom time
          dilation is used on the player, alongside this ground friction is used
          to make sure the dodge smooth feels impactful. 
        </>
      }
    />

    <ProjectVideoAndImg
      videoUrl="https://www.youtube.com/embed/iuGoAK1NNyw?autoplay=1&mute=1&loop=1&playlist=iuGoAK1NNyw&start=2"
      imgSrc="/images/Site Files/PickupEmo.png"
      imgAlt="Dash Mechanic Example 1"
      title="Dash Mechanic Visuals"
      imgStyle={{ height: "300px", objectFit: "contain" }}
    >
      Visual demonstration of the dash mechanic in action, highlighting
      direction and time dilation effects.
    </ProjectVideoAndImg>

    <ProjectVideoAndImg
      videoUrl="https://www.youtube.com/embed/eSYDSYbuDAw?autoplay=1&mute=1&loop=1&playlist=eSYDSYbuDAw&start=2"
      imgSrc="/images/Site Files/KickEmo.png"
      imgAlt="Dash Mechanic Example 1"
      title="Dash Mechanic Visuals"
      imgStyle={{ height: "300px", objectFit: "contain" }}
    >
      Visual demonstration of the dash mechanic in action, highlighting
      direction and time dilation effects.
    </ProjectVideoAndImg>
    <ProjectTextBody
      header={""}
      body={
        <>
          In addition to the movement-based mechanics, I also developed combat
          features to complement the shooting system. These include kicking and
          throwing mechanics, which provide players with alternative options
          when they run out of ammo or are engaged with other gameplay elements.
          This added depth ensures players have versatile strategies at their
          disposal during combat.
        </>
      }
    />

    <ProjectTextBody
      header={"AI Development"}
      body={
        <>
          During the project, I had to learn AI prototyping, which was the
          second key component I looked at initially. For initial testing, I
          created a simple AI class and made a cube go to the player's position.
          Although this was a good place to start, it required more, so I got
          into contact with programmers to get some pointers on AI 
        </>
      }
    />

    <ProjectTextBody
      header={"Conclusion"}
      body={
        <>
          Overall, I’m very pleased with the final results of the project. My
          primary goals were to deepen my understanding of Unreal Engine and to
          enhance my skills with Blueprints. This was accomplished through the
          development of a Complex Player Character, Dynamic AI, and various
          mechanics. While the project was a significant success, there are
          several areas where I see room for improvement.
          <br />
          <br />
          Moving forward, I plan to explore more advanced aspects of AI, such as
          behavior trees and complex systems, as I found the challenge of
          learning AI particularly rewarding. Additionally, I intend to focus
          more on optimization. As the player character’s abilities and
          mechanics grew in complexity, performance issues arose. I will work on
          breaking down components and optimizing mechanics like wall running,
          which can become resource-intensive due to frequent use.
          <br />
          <br />
          I’m proud to have achieved the objectives outlined in my initial
          Moscow briefs. This project has successfully advanced my technical
          skills in Unreal Engine and provided valuable insights for future
          endeavors.
        </>
      }
    />
    <br></br>
    <Footer />
  </>
);

export default ProjectDefiance;
