import React from "react";
import "./../global-css/basics.css";
import avi from "./../../../assets/Prop2.png";

class Avatar extends React.Component {
  render() {
    return (
      <div className="alignCenter">
        <img
          src={avi}
          style={{ borderRadius: "50%" }}
          alt="Avatar"
          width="150"
        />
      </div>
    );
  }
}

export default Avatar;
