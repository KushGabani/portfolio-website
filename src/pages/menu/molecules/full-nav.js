import React from "react";
import HandProp from "./../../../assets/menu-prop.png";
import SocialMedia from "./../../contact/atoms/social-media";
import SeeResume from "./../atoms/see-resume";
import "./../../global-css/basics.css";
import "./css/local.css";

class FullNav extends React.Component {
  render() {
    return (
      <div className="sub-menu-container">
        <div className="left-bar-container">
          <div className="left-bar-content alignCenter">
            <div class="page-title menu">MENU</div>
            <img
              src={HandProp}
              alt="UI prop of a hand"
              width="80%"
              className="hand-prop"
            />
            <div className="reach-me">
              <SocialMedia />
              <SeeResume />
            </div>
          </div>
        </div>
        <div className="right-bar-container">
          <div className="right-bar-content alignCenter">
            <div className="branch home">Home</div>
            <div className="branch work">Work</div>
            <div className="branch about">About</div>
            <div className="branch contact">Contact</div>
          </div>
        </div>
      </div>
    );
  }
}

export default FullNav;
