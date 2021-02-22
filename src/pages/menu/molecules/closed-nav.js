import React from "react";
import HamMenu from "./../atoms/ham-menu";
import "./css/local.css";

class ClosedNav extends React.Component {
  render() {
    return (
      <div className="strip-container">
        <div className="nav-wrapper">
          <a>
            <HamMenu />
          </a>
          <div className="page-title">{this.props.page}</div>
        </div>
      </div>
    );
  }
}

export default ClosedNav;
