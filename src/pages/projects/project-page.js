import React from "react";

// Components
import ProjectCard from "./molecules/project-card";
import Menu from "./../menu/menu-page";
import OtherMinorProject from "./molecules/other-minor-project";
import Loader from "./../loading-animation/loader";

// CSS and Assets
import "./../global-css/basics.css";
import { projects } from "./project-data";

const Project = () => {
  return (
    <div className="app-wrapper alignCenter">
      <div style={styles.projectPageContainer}>
        <Loader />
        <Menu page="WORK" />
        <div style={{ height: "6rem" }} />
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            isLight={project.id % 2 !== 0 ? true : false}
            imgName={`P${project.id}.png`}
            projectTitle={project.projectTitle}
            projectTech={project.projectTechStack}
            projectDesc={project.projectDescription}
          />
        ))}
        <hr className="divider" />
        <OtherMinorProject />
      </div>
    </div>
  );
};

export default Project;

const styles = {
  projectPageContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    maxWidth: "1600px",
  },
};
