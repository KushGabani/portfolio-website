import React from "react";

// Components
import ClosedNav from "./molecules/closed-nav.js";
import FullNav from "./molecules/full-nav.js";

const Menu = ({ page }) => {
  return (
    <div>
      <ClosedNav page={page} />
      <FullNav />
    </div>
  );
};

export default Menu;
