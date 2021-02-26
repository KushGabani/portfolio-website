import React from "react";

// Components
import ProjectCard from "./molecules/project-card";
import { Cursor } from "./../custom-cursor/cursor";
import Loader from "./../loading-animation/loader";
import OtherMinorProject from "./molecules/other-minor-project";

// CSS and Assets
import "./../global-css/basics.css";
import { projects } from "./project-data";

const Project = () => {
  return (
    <>
      <Cursor />
      <Loader />
      <div style={styles.projectPageContainer}>
        {projects.map((project) => (
          <ProjectCard
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
    </>
  );
};

export default Project;

const styles = {
  projectPageContainer: {
    width: "100%",
    height: "100%",
    maxWidth: "1600px",
  },
};
