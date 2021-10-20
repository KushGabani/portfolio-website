import React from "react";

// Components
import SocialMedia from "./../atoms/social-media";

// CSS and Assets
import "./css/local.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="primary-details">
        <span className="mobile">+91 8140244500</span>
        <hr />
        <span className="email">kushgabz2687@gmail.com</span>
      </div>
      <SocialMedia />
    </div>
  );
};

export default Footer;
