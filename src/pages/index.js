import React from "react";
// import Project from "./projects/project-page";
import Contact from "./contact/contact-page";
import "./global-css/basics.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper alignCenter">
        <Contact />
      </div>
    );
  }
}

export default App;
