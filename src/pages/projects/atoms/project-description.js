import React from "react"
import "./css/card.css"

class ProjectDescription extends React.Component {
  render() {
    const validAlign = this.props.isLight
      ? { textAlign: "right" }
      : { textAlign: "left" }
    return (
      <div style={validAlign}>
        <span className="projectDescriptionText">{this.props.desc}</span>
      </div>
    )
  }
}

export default ProjectDescription
