import React from "react";
import Project from "./projects/project-page";
import "./global-css/basics.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper alignCenter">
        <Project />
      </div>
    );
  }
}

export default App;
