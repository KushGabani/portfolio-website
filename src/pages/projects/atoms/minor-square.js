import React from "react";

// CSS and Assets
import "./css/local.css";
import "./../../global-css/basics.css";

const MinorSquare = ({ serial, minorTitle, projectNames, projectLinks }) => {
  let otherProjectDetails = [];
  for (let i = 0; i < 3; i++) {
    otherProjectDetails.push({
      title: projectNames[i],
      link: projectLinks[i],
    });
  }
  return (
    <div className="squareContainer alignCenter">
      <span className="subSerial">{serial}</span>
      <div className="hiddenContainer alignCenter">
        <div
          style={{
            display: "flex",
            textAlign: "center",
          }}
        >
          <span className="minorProjectCategory">{minorTitle}</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          {otherProjectDetails.map((project) => {
            return (
              <a
                href={`https://github.com/KushGabani/${project.link}`}
                className="subLink"
                target="_blank"
                rel="noreferrer"
              >
                <span className="subProjectText">{project.title}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MinorSquare;
