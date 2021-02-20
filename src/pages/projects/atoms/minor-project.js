import React from "react"
import "./css/minor-pr.css"
import "./../global-css/basics.css"

class MinorProject extends React.Component {
  render() {
    const [mp1, mp2, mp3] = this.props.projectNames
    const [l1, l2, l3] = this.props.links
    return (
      <div className="extraSerialsOrange alignCenter">
        <span className="subSerial">{this.props.serial}</span>
        <div
          className="hiddenProjects alignCenter"
          style={{ flexDirection: "column", color: "black" }}
        >
          <span className="minorProjectText">{this.props.minorTitle}</span>
          <div className="alignCenter" style={{ flexDirection: "column" }}>
            <a
              href={`https://github.com/KushGabani/${l1}`}
              className="subLink"
              target="_blank"
              rel="noreferrer"
            >
              <p className="subProjectText">{mp1}</p>
            </a>
            <a
              href={`https://github.com/KushGabani/${l2}`}
              className="subLink"
              target="_blank"
              rel="noreferrer"
            >
              <p className="subProjectText">{mp2}</p>
            </a>
            <a
              href={`https://github.com/KushGabani/${l3}`}
              className="subLink"
              target="_blank"
              rel="noreferrer"
            >
              <p className="subProjectText">{mp3}</p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default MinorProject
