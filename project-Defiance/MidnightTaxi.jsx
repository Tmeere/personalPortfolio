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

const roleInfo = ["Lead Game Designer"];

const contributions = [
  "Developed core gameplay mechanics",
  "Implemented multiplayer features",
  "Designed immersive environments",
  "Optimized performance for smooth gameplay",
];

const tags = ["Unity", "Multiplayer", "Game Design", "C#", "Level Design"];

const carouselImages = [
  {
    src: "/images/midnight-taxi-demo.png",
    alt: "Midnight Taxi Gameplay Screenshot 1",
    caption: "Gameplay: Picking up a passenger",
  },
  {
    src: "/images/midnight-taxi-demo-2.png",
    alt: "Midnight Taxi Gameplay Screenshot 2",
    caption: "Gameplay: Navigating through the city",
  },
  // Add more images as needed
];

const ProjectDefiance = () => (
  <>
    <ProjectNavbar /> {/* <-- Use your custom navbar here */}
    <DefianceHeroSection
      videoUrl="https://www.youtube.com/embed/AyeXuVhHfwk?autoplay=1&mute=1&loop=1&playlist=AyeXuVhHfwk&controls=0&showinfo=0&modestbranding=1&rel=0"
      roleInfo={roleInfo}
      rightInfo={contributions}
      leftTitle="Project Details"
      rightTitle="Key Contributions"
      background="#181818"
      cardBackground="#232323"
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
          For this project I was a part of a 23 person team with the collective
          goal of making a Narrative Choice Based driving game. During this 8
          week project I was the Tech Lead for the programming department of the
          team. My core responsibilities as lead were to ensure the programming
          team were to meet goals as per Jira deadlines, provide instruction,
          support and mentoring to Junior programmers on the team, as well as
          organize weekly standup meetings with seniors from other departments
          to ensure a coherent team.
          <br />
          <br />
          Outside of project management related tasks I was also primarily
          responsible for core gameplay factors such as the taxi car mechanics,
          as well as making the events manager system that was made designer
          friendly.
        </>
      }
    />
    <ProjectTitleDivider title="Contributions" />
    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/xHGUWTkJpNY"
      title=""
      minHeight="200px"
      description={
        <>
          For the project, my initial tasks involved creating the framework for
          the car in the game. This included implementing the basic functions a
          car would need, as well as additional components specific to the game
          mechanics. I began with a basic Car Template that could accelerate and
          decelerate, and a first-person cam that could look around to the left
          or right with limited range, ensuring the player primarily faces
          forward.During this initial proof of concept, I added a simple debug
          key to toggle the headlights with the dialogue mechanic selector to
          showcase the car's behavior.
        </>
      }
    />
    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/xHGUWTkJpNY"
      title=""
      minHeight="200px"
      description={
        <>
          As the car was developed and iterated on in the early stages of the
          project, new components and changes were introduced to enhance player
          control and improve the car's functionality. I focused on making a cam
          that moves in a 180-degree cone, while keeping the Y-axis movement
          locked. Additionally, features like a steering wheel were added that
          are animated and work as intended. The steering wheel movement is
          constrained by comparing the current rotation to the allowed end
          rotation and factoring in the player's input. When the player releases
          the steering input, the wheel smoothly returns to its standard
          position.
        </>
      }
    />
    <ProjectImageContainer
      src="/images/midnight-taxi-demo.png"
      alt="Midnight Taxi Gameplay Screenshot"
    />
    <ProjectVidAndText
      videoUrl="https://www.youtube.com/embed/xHGUWTkJpNY"
      title=""
      flip={true}
      minHeight="200px"
      description={
        <>
          As the taxi development progressed, maintaining a clean workflow
          became essential due to the project's collaborative nature and the
          need for multiple team members to access the taxi. To achieve this, we
          broke the project down into Child Actor components and collapsed nodes
          when the taxi required Blueprint access. By treating each component as
          a child actor, we reduced the risk of merge errors and it became
          easier communication between Blueprints. The project was segmented
          into chunks and thoroughly commented / Categorized to make it clear
          for both the tech team and people unfamiliar with blueprint.
          Additionally, I organized all variables and components into categories
          to streamline the code. This was encouraged for everyone working on
          the taxi to ensure a clean and orderly workflow going forward.
        </>
      }
    />
    <ProjectTitleDivider title="Clean Workflows" divider={true} />
    <ProjectImgTextImg
      leftImgSrc="/images/midnight-taxi-demo.png"
      leftImgAlt="Midnight Taxi Gameplay Screenshot Left"
      rightImgSrc="/images/midnight-taxi-demo-2.png"
      rightImgAlt="Midnight Taxi Gameplay Screenshot Right"
    >
      <div>
        As the taxi development progressed, maintaining a clean workflow became
        essential due to the project's collaborative nature and the need for
        multiple team members to access the taxi. To achieve this, we broke the
        project down into Child Actor components and collapsed nodes when the
        taxi required Blueprint access. By treating each component as a child
        actor, we reduced the risk of merge errors and it became easier
        communication between Blueprints. The project was segmented into chunks
        and thoroughly commented / Categorized to make it clear for both the
        tech team and people unfamiliar with blueprint. Additionally, I
        organized all variables and components into categories to streamline the
        code. This was encouraged for everyone working on the taxi to ensure a
        clean and orderly workflow going forward.
      </div>
    </ProjectImgTextImg>
    <ProjectImgTextImg
      leftImgSrc="/images/midnight-taxi-demo.png"
      leftImgAlt="Midnight Taxi Gameplay Screenshot Left"
      rightImgSrc="/images/midnight-taxi-demo-2.png"
      rightImgAlt="Midnight Taxi Gameplay Screenshot Right"
    >
      <div>
        As the taxi development progressed, maintaining a clean workflow became
        essential due to the project's collaborative nature and the need for
        multiple team members to access the taxi. To achieve this, we broke the
        project down into Child Actor components and collapsed nodes when the
        taxi required Blueprint access. By treating each component as a child
        actor, we reduced the risk of merge errors and it became easier
        communication between Blueprints. The project was segmented into chunks
        and thoroughly commented / Categorized to make it clear for both the
        tech team and people unfamiliar with blueprint. Additionally, I
        organized all variables and components into categories to streamline the
        code. This was encouraged for everyone working on the taxi to ensure a
        clean and orderly workflow going forward.
      </div>
    </ProjectImgTextImg>
    <ProjectImgSideBySideComponent
      leftImgSrc="/images/midnight-taxi-demo.png"
      leftImgAlt="Midnight Taxi Gameplay Screenshot Left"
      leftImgText="Gameplay: Picking up a passenger"
      rightImgSrc="/images/midnight-taxi-demo-2.png"
      rightImgAlt="Midnight Taxi Gameplay Screenshot Right"
      rightImgText="Gameplay: Navigating through the city"
    />
    <ProjectImageCarousel images={carouselImages} />
  </>
);

export default ProjectDefiance;
