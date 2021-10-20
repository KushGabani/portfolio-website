import React from "react";

// CSS and Assets
import "./css/local.css";
import "./../../global-css/basics.css";

const InputForm = () => {
  return (
    <div className="form-wrapper">
      <div className="indicator" />
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Your Name..."
          autocomplete="off"
          autocapitalize="words"
          class="nameInput"
          id="name"
          onBlur={() => {
            document.querySelector(".indicator").style.top = "27%";
          }}
        />
        <textarea
          rows="8"
          placeholder={"Hello Kush,\n\n\nRegards,"}
          id="message"
          class="messageInput"
          autocomplete="false"
          spellcheck="false"
          onBlur={() => {
            document.querySelector(".indicator").style.top = "83%";
          }}
        ></textarea>
        <div className="reach-me-btn">REACH ME!</div>
      </div>
    </div>
  );
};

export default InputForm;
