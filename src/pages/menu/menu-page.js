import React from "react";
import ClosedNav from "./molecules/closed-nav.js";
import FullNav from "./molecules/full-nav.js";

class MenuPage extends React.Component {
  render() {
    return (
      <div>
        <ClosedNav page={this.props.page} />
        <FullNav />
      </div>
    );
  }
}

export default MenuPage;
