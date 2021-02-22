import React from "react";
import "./css/local.css";

class HamMenu extends React.Component {
  render() {
    let clicked = false;
    return (
      <div
        class="menu-icon"
        onClick={() => {
          const checkbox = document.querySelector(".menu-icon__checkbox");
          const leftCont = document.querySelector(".left-bar-container");
          const rightCont = document.querySelector(".right-bar-container");
          const leftContent = document.querySelector(".left-bar-content");
          const rightContent = document.querySelector(".right-bar-content");
          const topLine = document.querySelector("#top");
          const bottomLine = document.querySelector("#bottom");
          if (!clicked) {
            topLine.className = "rotatedTop";
            bottomLine.className = "rotatedBottom";
            document.querySelector(".sub-menu-container").style.display =
              "block";

            setTimeout(() => {
              leftCont.className = "left-bar-container after-animation-left";
              rightCont.className = "right-bar-container after-animation-right";
            }, 100);

            setTimeout(() => {
              leftContent.style.display = "flex";
              rightContent.style.display = "flex";
            }, 400);
            document.querySelector(".menu").style.opacity = "1";
            clicked = true;
            checkbox.checked = true;
            console.log("clicked");
          } else {
            topLine.className = "";
            bottomLine.className = "";
            document.querySelector(".menu").style.opacity = "0";
            leftContent.style.display = "none";
            rightContent.style.display = "none";
            leftCont.className = "left-bar-container";
            rightCont.className = "right-bar-container";
            setTimeout(() => {
              document.querySelector(".sub-menu-container").style.display =
                "none";
            }, 500);
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
  }
}

export default HamMenu;
