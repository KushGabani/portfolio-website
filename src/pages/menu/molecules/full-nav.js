import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

// Components
import SocialMedia from "./../../contact/atoms/social-media";
import SeeResume from "./../atoms/see-resume";

// CSS and Assets
import "./css/local.css";
import "./../../global-css/basics.css";
import HandProp from "./../../../assets/menu-prop.png";

const FullNav = () => {
  return (
    <div className="main-menu-container">
      <div className="left-sub-container">
        <div className="left-bar-content">
          <div className="reach-footer alignCenter">
            <img src={HandProp} alt="UI prop of a hand" className="hand-prop" />
            <div className="alignCenter" style={{ flexDirection: "column" }}>
              <SocialMedia />
              <SeeResume />
            </div>
          </div>
        </div>
      </div>
      <div className="right-sub-container">
        <div className="right-bar-content alignCenter">
          <div className="branch home">Home</div>
          <Link to="/work" style={{ textDecoration: "none" }}>
            <div className="branch work">Work</div>
          </Link>
          <div className="branch about">About</div>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <div className="branch contact">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullNav;
