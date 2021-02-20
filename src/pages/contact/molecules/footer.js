import React from "react";
import PrimaryDetails from "./../atoms/primary-details";
import SocialMedia from "./../atoms/social-media";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <PrimaryDetails />
        <SocialMedia />
      </div>
    );
  }
}

export default Footer;
