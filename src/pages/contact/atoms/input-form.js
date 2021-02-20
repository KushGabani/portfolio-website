import React from "react";
import "./css/local.css";

class InputForm extends React.Component {
  render() {
    return (
      <div className="form-wrapper">
        <div className="indicator" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0",
            padding: "0",
          }}
        >
          <div class="serial firstInput">
            <span class="steps step1">1/3</span>
            <input
              type="text"
              placeholder="Your Name..."
              autocomplete="off"
              autocapitalize="words"
              class="nameInput"
              id="name"
              onBlur={() => {
                document.querySelector(".step1").style.visibility = "hidden";
                document.querySelector(".secondInput").style.visibility =
                  "visible";
                document.querySelector(".secondInput").style.transition =
                  "all 0.3s linear";
                document.querySelector(".indicator").style.top = "20.5%";
                document.querySelector(".indicator").style.transition =
                  "all 0.3s linear";
              }}
            />
          </div>
          <div class="serial secondInput">
            <span class="steps step2">2/3</span>
            <textarea
              rows="10"
              placeholder={"Hello Kush,\n\n\nRegards,"}
              id="message"
              class="messageInput"
              autocomplete="false"
              spellcheck="false"
              onBlur={() => {
                document.querySelector(".step2").style.visibility = "hidden";
                document.querySelector(".thirdInput").style.visibility =
                  "visible";
                document.querySelector(".thirdInput").style.transition =
                  "all 0.5s linear";
                document.querySelector(".indicator").style.top = "97%";
                document.querySelector(".indicator").style.transition =
                  "all 0.5s linear";
              }}
            ></textarea>
          </div>
          <div class="serial thirdInput">
            <span class="steps step3">3/3</span>
            <div className="btn">
              <div className="learnMoreWhite">
                <span className="moreBtn">REACH ME!</span>
              </div>
            </div>
          </div>
          {/* {document.querySelector(".btn").addEventListener("click", () => {})} */}
        </div>
      </div>
    );
  }
}

export default InputForm;
