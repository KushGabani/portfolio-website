import React from "react";
import "./css/local.css";

class PrimaryDetails extends React.Component {
  render() {
    return (
      <div className="primaryDetailContainer">
        <p className="mobile">+91 8140244500</p>
        <hr style={{ opacity: "20%" }} />
        <p className="email">kushgabz2687@gmail.com</p>
      </div>
    );
  }
}

export default PrimaryDetails;
