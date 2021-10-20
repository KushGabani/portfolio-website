import React from "react";
import LoadGif from "./../../assets/dots-grid.gif";
import "./loader.css";

class Loader extends React.Component {
  render() {
    window.addEventListener("load", () => {
      let loader = document.querySelector(".loader");
      loader.classList.add("hidden");
      console.log("page loaded....");
    });
    return (
      <div className="loader">
        <img src={LoadGif} alt="Loading..." />
      </div>
    );
  }
}

export default Loader;
