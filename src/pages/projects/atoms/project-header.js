import React from "react";

// CSS and Assets
import "./css/local.css";
const ProjectHeader = ({ isLight, projectTitle, projectTech }) => {
  return (
    <>
      <p className="project-title">{projectTitle}</p>
      <div className={"tech-stack " + (isLight ? "ts-light" : "ts-dark")}>
        <span>{projectTech[0].toUpperCase()}</span>
        <div className="dot"></div>
        <span>{projectTech[1].toUpperCase()}</span>
        <div className="dot"></div>
        <span>{projectTech[2].toUpperCase()}</span>
      </div>
    </>
  );
};

export default ProjectHeader;
