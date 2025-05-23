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
      title="Emo Edge"
      showLogo={false}
      videoUrl="https://www.youtube.com/embed/idcMbMSL6Rk?autoplay=1&loop=1&playlist=idcMbMSL6Rk&mute=1"
      roleInfo={roleInfo}
      leftInfo={responsibility}
      leftTitle="Key Responsibilities"
      background="#181818"
      cardBackground="#232323"
      heroImage="/images/Site Files/EmoSplash.png"
      summary={
        <>
          Stay fast, go room to room killing enemies in this high octane shooter, speed is key. Complete the level before the timer runs out. Match the enemy aspect should you intend to cause harm!
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

    <ProjectTextBody
      header={"Development Of Movement Mechanics"}
      body={
        <>
          Alongside the shooting mechanics for the game, developments in the movement aspect included a range of mechanics, those being:
          <ul>
            <li>Sliding</li>
            <li>Wall Running</li>
            <li>Grapple Points</li>
            <li>Dodging</li>
          </ul>
          When making these systems, while it was important to create each mechanic, it was even more important from a design point of view that each of the mechanics worked together well in tandem.
        </>
      }
    />

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

    <br></br>
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
    <ProjectVideoAndImg
      videoUrl="https://www.youtube.com/embed/irWZA0EgGqU?autoplay=1&mute=1&loop=1&playlist=irWZA0EgGqU&start=81"
      imgSrc="/images/Site Files/AI.png"
      imgAlt="Dash Mechanic Example 1"
      title="Dash Mechanic Visuals"
      imgStyle={{ height: "300px", objectFit: "contain" }}
    ></ProjectVideoAndImg>

    <ProjectImageTextContainer
      imgSrc="/images/Site Files/AIState.png"
      imgAlt="AI State Machine Diagram"
      title="AI System: State Machine Approach"
      imgStyle={{ maxWidth: "900px", width: "100%" }}
    >
      With the option of two approaches, those being:
      <ul>
        <li>Finite State Machines</li>
        <li>Behavior Trees</li>
      </ul>
      With the two options having both pros and cons, I decided to go forward
      with the finite state machines. This came down to needing to cover a range
      of new topics for this project under a constrained timeline, as well as
      wanting to cover a range of AI states quickly under one class. After
      various levels of trial and error, I made 4 different AI States for the 4
      enemy archetypes in the game.
      <br />
      <br />
      The state selector is dictated by an Enum variable for what behavior is
      going to play.
    </ProjectImageTextContainer>
    <ProjectImageCarousel
      images={[
        {
          src: "/images/Site Files/AIMeth1.png",
          alt: "AI Method Example 1",
          caption: "Taking many commands, executing many responses",
        },
        {
          src: "/images/Site Files/AIMeth2.png",
          alt: "AI Method Example 2",
          caption: "Taking many commands, filtering, and executing one",
        },
      ]}
    />
    <ProjectTextBody
      header={"AI Improvement"}
      body={
        <>
          When I first developed the AI, I encountered issues stemming from
          nested timers conflicting with each other within the blueprint. This
          resulted in incorrect states being triggered at the wrong times. To
          resolve this, I revamped the structure by converting nearly all events
          into tasks. Now, each task must be completed before the next function
          can fire or be triggered again. This is mostly controlled by bools and
          gates.
        </>
      }
    />

    <ProjectImageCarousel
      images={[
        {
          src: "/images/Site Files/AIBev1.png",
          alt: "AI Method Example 1",
          caption: "AI Behaviour",
        },
        {
          src: "/images/Site Files/AIBev2.png",
          alt: "AI Method Example 2",
          caption: "AI Behaviour",
        },
        {
          src: "/images/Site Files/AIBev3.png",
          alt: "AI Method Example 2",
          caption: "AI Behaviour",
        },
        {
          src: "/images/Site Files/AIBev4.png",
          alt: "AI Method Example 2",
          caption: "AI Behaviour",
        },
      ]}
    />

    <ProjectImageCarousel
      images={[
        {
          src: "/images/Site Files/BP1.png",
          alt: "AI Method Example 1",
          caption: "AI Behaviour BP",
        },
        {
          src: "/images/Site Files/BP2.png",
          alt: "AI Method Example 2",
          caption: "AI Behaviour BP",
        },
        {
          src: "/images/Site Files/BP3.png",
          alt: "AI Method Example 2",
          caption: "AI Behaviour BP",
        },
        {
          src: "/images/Site Files/BP4.png",
          alt: "AI Method Example 2",
          caption: "AI Behaviour BP",
        },
      ]}
    />

    <ProjectTitleDivider title="Animation System Development" />

    <ProjectImgImgContainer
      src1="/images/Site Files/Anim1.png"
      alt1="First Image Alt Text"
      src2="/images/Site Files/Anim2.png"
      alt2="Second Image Alt Text"
      title="AI Visual Examples"
      text={
        <>
          As the project scaled up in scope and new challenges arose, I wanted
          to tackle understanding how to use animation state machines across all
          the game's entities. With this in mind, I made a total of 3 different
          animation behaviors in the game:
          <br></br>
          <br></br>
          <ul>
            <li>Enemy AI</li>
            <li>First Person Animation</li>
            <li>Lower Body Legs</li>
          </ul>
          <br />
          One of the interesting challenges arrived from attempting both leg
          animations and first person arm animations for the player. This had me
          breaking them into two different components and animating their
          behaviors separately rather than under one shared tree. For the legs,
          the upper torso is hidden, only allowing for the player to be seen
          from the waist down.
        </>
      }
      img1Style={{ height: "300px", objectFit: "contain" }}
      img2Style={{ height: "300px", objectFit: "contain" }}
    />
    <ProjectTitleDivider title="Level Design" />

    <ProjectTextBody
      header={"Level Itteration"}
      body={
        <>
          While it wasn't a primary goal, level design was paramount towards
          showcasing off a high octane shooter. Different maps were made over
          the projects cycle
          <br></br>
          <br></br>Initially these started as testing ground for the player
          mechanics. From here full levels were made. These were user tested and
          iterated on, in the final state 2 levels were made to showcase all the
          gameplay mechanics
        </>
      }
    />
    <br></br>

    <ProjectImgImgContainer
      src1="/images/Site Files/Lvl1.png"
      alt1="First Image Alt Text"
      src2="/images/Site Files/Lvl2.png"
      alt2="Second Image Alt Text"
      title="AI Visual Examples"
      text={
        <>
          Initial Room prototypes for the game this included an testing room and
          pratice map
        </>
      }
      img1Style={{ height: "300px", objectFit: "contain" }}
      img2Style={{ height: "300px", objectFit: "contain" }}
    />
    <br></br>

    <ProjectImgImgContainer
      src1="/images/Site Files/Lvl3.png"
      alt1="First Image Alt Text"
      src2="/images/Site Files/Lvl4.png"
      alt2="Second Image Alt Text"
      title="AI Visual Examples"
      text={
        <>
          Initial Room prototypes for the game this included an testing room and
          pratice map
        </>
      }
      img1Style={{ height: "300px", objectFit: "contain" }}
      img2Style={{ height: "300px", objectFit: "contain" }}
    />
    <br></br>

    <ProjectImgImgContainer
      src1="/images/Site Files/Room1A.png"
      alt1="First Image Alt Text"
      src2="/images/Site Files/Room1B.png"
      alt2="Second Image Alt Text"
      title="AI Visual Examples"
      img1Style={{ height: "300px", objectFit: "contain" }}
      img2Style={{ height: "300px", objectFit: "contain" }}
    />
    <br></br>

    <ProjectImgImgContainer
      src1="/images/Site Files/Room2A.png"
      alt1="First Image Alt Text"
      src2="/images/Site Files/Room2B.png"
      alt2="Second Image Alt Text"
      title="AI Visual Examples"
      img1Style={{ height: "300px", objectFit: "contain" }}
      img2Style={{ height: "300px", objectFit: "contain" }}
    />
    <br></br>
    <ProjectImgImgContainer
      src1="/images/Site Files/Room3A.png"
      alt1="First Image Alt Text"
      src2="/images/Site Files/Room3B.png"
      alt2="Second Image Alt Text"
      title="AI Visual Examples"
      img1Style={{ height: "300px", objectFit: "contain" }}
      img2Style={{ height: "300px", objectFit: "contain" }}
    />
    <br></br>

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
