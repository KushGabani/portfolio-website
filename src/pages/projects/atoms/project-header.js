import React from "react"
import "./css/card.css"
import "./../global-css/basics.css"

class ProjectHeader extends React.Component {
  render() {
    const validTech = this.props.isLight
      ? {
          marginTop: "0.2rem",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }
      : {
          marginTop: "0.2rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }

    const [tech1, tech2, tech3] = this.props.tech
    return (
      <div>
        <div className="projectTitle">
          <span className="projectTitleText">{this.props.title}</span>
          <div style={validTech}>
            <span className="projectTech" style={{ paddingLeft: 0 }}>
              {tech1}
            </span>
            <div className="dot alignCenter"></div>
            <span className="projectTech">{tech2}</span>
            <div className="dot alignCenter"></div>
            <span className="projectTech" style={{ paddingRight: 0 }}>
              {tech3}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectHeader
