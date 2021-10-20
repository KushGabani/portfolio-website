import React from "react";

// CSS and Assets
import "./css/local.css";
import "./../../global-css/basics.css";
import MapImage from "./../../../assets/mapProp2.png";
import Location from "./../../../assets/icons/location.svg";

const FindMeProp = () => {
  return (
    <div className="left-side-container">
      <img src={MapImage} alt="map image alt" className="mapImage" />
      <a
        href="https://www.google.com/maps/place/Trikamnagar-1,+Varachha,+Surat,+Gujarat/@21.2027211,72.8454884,17z/data=!3m1!4b1!4m5!3m4!1s0x3be04eff117f1ff5:0x513e26e54ad864cb!8m2!3d21.2023799!4d72.8478554"
        target="_blank"
        rel="noreferrer"
      >
        <div className="mapButton alignCenter">
          <span className="innerText">Find me on Google Maps </span>
          <img src={Location} alt="location icon" className="location" />
        </div>
      </a>
    </div>
  );
};

export default FindMeProp;
