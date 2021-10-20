import React from "react";

// CSS and Assets
import "./css/local.css";

const LearnMore = ({ isLight }) => {
  if (isLight) {
    return (
      <a>
        <div className="btn-strip lm-light">
          <div className="btn-container btn-light">LEARN MORE</div>
        </div>
      </a>
    );
  } else {
    return (
      <a>
        <div className="btn-strip lm-dark">
          <div className="btn-container btn-dark">LEARN MORE</div>
        </div>
      </a>
    );
  }
};

export default LearnMore;
