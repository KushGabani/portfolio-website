import React from "react";

// Components
import MinorSquare from "./../atoms/minor-square";

// CSS and Assets
import "./css/local.css";
import { minorProjectData } from "./minor-project-data";

const OtherMinorProject = () => {
  return (
    <div className="otherProjectContainer alignCenter">
      <span className="opHeading">Other Minor Projects</span>
      <div className="minorProject">
        {minorProjectData.map((project) => {
          return (
            <MinorSquare
              key={project.id}
              serial={project.id}
              minorTitle={project.minorTitle}
              projectNames={project.names}
              projectLinks={project.links}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OtherMinorProject;
