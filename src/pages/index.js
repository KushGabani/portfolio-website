import React from "react";
import Project from "./projects/project-page.js";
import Loader from "./loading-animation/loader";
import "./global-css/basics.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Loader />
        <Project />
      </div>
    );
  }
}

export default App;
