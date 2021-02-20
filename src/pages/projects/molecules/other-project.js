import React from "react"
import MinorProject from "./../atoms/minor-project"
import "./../global-css/basics.css"

class OtherProject extends React.Component {
  render() {
    const minorTitles = ["P5.js", "Machine Learning", "Python & React"]
    const projectNames = [
      ["Double Pendulum Visualization", "Flappy Bird", "Snake Game"],
      [
        "Numeric Digit Classifier",
        "Heart Disease Classifier",
        "Bulldozer Price Prediction",
      ],
      ["Ether Scraper", "Instagram Clone (in progress)", ""],
    ]
    const projectLinks = [
      [
        "Double-Pendulum-Visualization",
        "Flappy-Bird-p5.js",
        "Snake-Game-p5.js",
      ],
      [
        "Numeric-Digit-Classifier",
        "Heart-Disease-With-Machine-Learning",
        "Predicting-Bulldozer-prices-using-Machine-Learning",
      ],
      ["EtherScraper", "Instagram-clone"],
    ]

    let allMinorProjects = []
    for (let i = 0; i < 3; i++) {
      allMinorProjects.push(
        <MinorProject
          serial={i + 1}
          minorTitle={minorTitles[i]}
          projectNames={projectNames[i]}
          links={projectLinks[i]}
        />
      )
    }

    return <div className="alignCenter">{allMinorProjects}</div>
  }
}

export default OtherProject
