import React from "react";

// Components
import HamMenu from "./../atoms/ham-menu";

// CSS and Assets
import "./css/local.css";
import "./../../global-css/basics.css";

const ClosedNav = ({ page }) => {
  return (
    <div className="strip-container alignCenter">
      <a>
        <HamMenu page={page} />
      </a>
      <span className="nav-title">{page}</span>
    </div>
  );
};

export default ClosedNav;
