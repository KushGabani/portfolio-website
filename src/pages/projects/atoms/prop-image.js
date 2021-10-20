import React from "react";
import "./../../global-css/basics.css";
import "./css/local.css";
import P1 from "./../../../assets/P1.png";
import P2 from "./../../../assets/P2.png";
import P3 from "./../../../assets/P3.png";
import P4 from "./../../../assets/P4.png";
import P5 from "./../../../assets/P5.png";

const PropImage = ({ imgName }) => {
  const image =
    imgName === "P1.png"
      ? P1
      : imgName === "P2.png"
      ? P2
      : imgName === "P3.png"
      ? P3
      : imgName === "P4.png"
      ? P4
      : P5;

  return (
    <>
      <img
        src={image}
        alt="Project Prop"
        className="prop-image"
        style={imgName === "P3.png" ? { width: "25%" } : {}}
      />
    </>
  );
};

export default PropImage;
