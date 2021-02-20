import React from "react";
import Project from "./projects/project-page.js";
import "./global-css/basics.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Project />
      </div>
    );
  }
}

export default App;
