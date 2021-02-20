import React from "react";
import "./css/card.css";

class LearnMore extends React.Component {
  render() {
    const validBtn = this.props.isLight ? "btn" : "btnDark";
    const validLearnMore = this.props.isLight
      ? "learnMoreWhite"
      : "learnMoreDark";

    return (
      <div className={validBtn}>
        <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
          <div className={validLearnMore}>
            <span className="moreBtn">LEARN MORE</span>
          </div>
        </a>
      </div>
    );
  }
}

export default LearnMore;
