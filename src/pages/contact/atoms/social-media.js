import React from "react";
import "./css/local.css";
import Github from "./../../../assets/icons/Github.svg";
import LinkedIn from "./../../../assets/icons/linkedin.svg";
import Pinterest from "./../../../assets/icons/Pinterest.svg";
import Medium from "./../../../assets/icons/Medium.svg";
import Instagram from "./../../../assets/icons/Instagram.svg";
import Twitter from "./../../../assets/icons/Twitter.svg";
import "./../../global-css/basics.css";

class SocialMedia extends React.Component {
  render() {
    return (
      <div className="alignCenter">
        <a
          href="https://github.com/KushGabani"
          target="_blank"
          ref="noreferrer"
        >
          <img src={Github} alt="Github" className="socialMedia" />
        </a>
        <a
          href="https://www.linkedin.com/in/kush-gabani-910b521b0/"
          target="_blank"
          ref="noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" className="socialMedia" />
        </a>
        <a
          href="https://in.pinterest.com/kushgabz2687/"
          target="_blank"
          ref="noreferrer"
        >
          <img src={Pinterest} alt="Pinterest" className="socialMedia" />
        </a>
        <a
          href="https://medium.com/@kushgabz2687/"
          target="_blank"
          ref="noreferrer"
        >
          <img src={Medium} alt="Medium" className="socialMedia" />
        </a>
        <a
          href="https://twitter.com/kaaaafifilmy"
          target="_blank"
          ref="noreferrer"
        >
          <img src={Twitter} alt="Twitter" className="socialMedia" />
        </a>
        <a
          href="https://www.instagram.com/kush.gab/"
          target="_blank"
          ref="noreferrer"
        >
          <img src={Instagram} alt="Instagram" className="socialMedia" />
        </a>
      </div>
    );
  }
}

export default SocialMedia;
