import React from "react"
import "./css/nav.css"
import "./../global-css/basics.css"

class NavBar extends React.Component {
  render() {
    return (
      <div
        className="nav-bar container-fluid alignLeft"
        style={{ height: "10rem" }}
      >
        <p className="pageTitle">
          <b>WORK</b>
        </p>
      </div>
    )
  }
}

export default NavBar
