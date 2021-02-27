import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Project from "./pages/projects/project-page";
import Contact from "./pages/contact/contact-page";
import { Cursor } from "./pages/custom-cursor/cursor";
import Loader from "./pages/loading-animation/loader";
// CSS and Assets
import "./pages/global-css/basics.css";

ReactDOM.render(
  <>
    <Cursor />
    <Loader />
    <Contact />
  </>,
  document.getElementById("root")
);
// ReactDOM.render(
//   <Router>
//     <Cursor />
//     <Loader />
//     <Switch>
//       <Route exact path="/">
//         <Project />
//       </Route>
//       <Route exact path="/portfolio-website">
//         <Project />
//       </Route>
//       <Route exact path="/portfolio-website/contact">
//         <Contact />
//       </Route>
//     </Switch>
//   </Router>,
//   document.getElementById("root")
// );
