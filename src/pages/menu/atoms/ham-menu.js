import React from "react";

// CSS and Assets
import "./css/local.css";

const HamMenu = ({ page }) => {
  let clicked = false;
  return (
    <div
      class="menu-icon"
      onClick={() => {
        const checkbox = document.querySelector(".menu-icon__checkbox");
        const leftCont = document.querySelector(".left-sub-container");
        const rightCont = document.querySelector(".right-sub-container");
        const leftContent = document.querySelector(".left-bar-content");
        const rightContent = document.querySelector(".right-bar-content");
        if (!clicked) {
          document.querySelector(".main-menu-container").style.display = "flex";
          document.querySelector(".nav-title").innerHTML = "MENU";
          setTimeout(() => {
            leftCont.className = "left-sub-container after-animation-left";
            rightCont.className = "right-sub-container after-animation-right";
          }, 100);

          setTimeout(() => {
            leftContent.style.display = "flex";
            rightContent.style.display = "flex";
          }, 300);

          clicked = true;
          checkbox.checked = true;
        } else {
          leftContent.style.display = "none";
          rightContent.style.display = "none";
          leftCont.className = "left-sub-container";
          rightCont.className = "right-sub-container";
          setTimeout(() => {}, 300);
          setTimeout(() => {
            document.querySelector(".main-menu-container").style.display =
              "none";
          }, 500);
          document.querySelector(".nav-title").innerHTML = page;
          checkbox.checked = false;
          clicked = false;
        }
      }}
    >
      <input class="menu-icon__checkbox" type="checkbox" />
      <div>
        <span id="top"></span>
        <span id="bottom"></span>
      </div>
    </div>
  );
};

export default HamMenu;
