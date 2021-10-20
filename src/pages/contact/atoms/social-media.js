import React from "react";

// CSS and Assets
import "./css/local.css";
import "./../../global-css/basics.css";
import Github from "./../../../assets/icons/Github.svg";
import LinkedIn from "./../../../assets/icons/linkedin.svg";
import Pinterest from "./../../../assets/icons/Pinterest.svg";
import Medium from "./../../../assets/icons/Medium.svg";

const SocialMedia = () => {
  const smLinks = [
    {
      platform: Github,
      link: "https://github.com/KushGabani",
    },
    {
      platform: LinkedIn,
      link: "https://www.linkedin.com/in/kush-gabani-910b521b0/",
    },
    {
      platform: Pinterest,
      link: "https://in.pinterest.com/kushgabz2687/",
    },
    {
      platform: Medium,
      link: "https://medium.com/@kushgabz2687/",
    },
  ];
  return (
    <div className="social-media">
      {smLinks.map((sm) => {
        return (
          <a href={sm.link.toString()} target="_blank">
            <img
              src={sm.platform}
              alt="Social Media Icons"
              className="sm-icon"
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
