import React from "react";

//Components
import PropImage from "./../atoms/prop-image";
import ProjectHeader from "./../atoms/project-header";
import ProjectDescription from "./../atoms/project-description";
import LearnMore from "./../atoms/learn-more";

// CSS & Assets
import "./css/local.css";

const ProjectCard = ({
  isLight,
  imgName,
  projectTitle,
  projectTech,
  projectDesc,
}) => {
  if (isLight) {
    return (
      <div className="project-strip-container light">
        <PropImage imgName={imgName} />
        <div className="info-card card-light" style={{ color: "#212121" }}>
          <ProjectHeader
            isLight={isLight}
            projectTitle={projectTitle}
            projectTech={projectTech}
          />
          <ProjectDescription desc={projectDesc} />
          <LearnMore isLight={isLight} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="project-strip-container dark">
        <div className="info-card card-dark" style={{ color: "white" }}>
          <ProjectHeader
            isLight={isLight}
            projectTitle={projectTitle}
            projectTech={projectTech}
          />
          <ProjectDescription desc={projectDesc} />
          <LearnMore isLight={isLight} />
        </div>
        <PropImage imgName={imgName} />
      </div>
    );
  }
};

export default ProjectCard;
