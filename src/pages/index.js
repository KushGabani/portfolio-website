import React from "react";
import Project from "./projects/project-page.js";
import "./projects/global-css/basics.css";

class App extends React.Component {
  render() {
    return (
      <html lang="en">
        <body>
          <Project />
        </body>
      </html>
    );
  }
}

export default App;
