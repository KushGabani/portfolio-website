import React from "react"
import Avatar from "./../atoms/avatar"
import LanguageSet from "./language-set.js"
import "./../global-css/basics.css"
import "./css/skill-set.css"

class Skills extends React.Component {
  render() {
    return (
      <div className="skillContainer">
        <Avatar />

        <div className="skillSet">
          <div className="skills alignCenter">
            <LanguageSet
              langList={[
                "PYTHON",
                "JAVASCRIPT",
                "MACHINE LEARNING",
                "NEURAL NETWORK",
                "REACT",
                "NODE.JS",
              ]}
            />
          </div>
          <div className="skills alignCenter">
            <LanguageSet
              langList={[
                "GATSBY.JS",
                "JQUERY",
                "C#",
                "JAVA",
                "PHP",
                "FLASK",
                "SQL",
              ]}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
