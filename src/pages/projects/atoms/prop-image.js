import React from "react";
import "./../global-css/basics.css";
import "./css/card.css";
import P1 from "./../../../assets/P1.png";
import P2 from "./../../../assets/P2.png";
import P3 from "./../../../assets/P3.png";
import P4 from "./../../../assets/P4.png";
import P5 from "./../../../assets/P5.png";
import P6 from "./../../../assets/P6.png";

class PropImage extends React.Component {
  constructor(props) {
    super(props);
    this.image = "";
    if (this.props.imgName == "P1.png") this.image = P1;
    else if (this.props.imgName == "P2.png") this.image = P2;
    else if (this.props.imgName == "P3.png") this.image = P3;
    else if (this.props.imgName == "P4.png") this.image = P4;
    else if (this.props.imgName == "P5.png") this.image = P5;
    else this.image = P6;
  }
  render() {
    const imgClass = this.props.isLight ? "img-light" : "img-dark";

    return (
      <div className={"alignCenter " + imgClass}>
        <img src={this.image} alt="Project Prop" height="100%" />
      </div>
    );
  }
}

export default PropImage;
