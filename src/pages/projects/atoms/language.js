import React from "react"
import "./css/skills.css"

class Language extends React.Component {
  render() {
    return <li className="textStyle">{this.props.langName}</li>
  }
}

export default Language
