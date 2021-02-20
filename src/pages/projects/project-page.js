import React from "react"
import NavBar from "./atoms/nav-bar"
import Skills from "./molecules/skills"
import ProjectCard from "./molecules/project-card"
import OtherProject from "./molecules/other-project"
import "./global-css/basics.css"

class Project extends React.Component {
  render() {
    const projectTitles = [
      "PROJECT ETHER",
      "CARTOON CHARACTER AUTOMATION",
      "THREE BEAN BARISTA",
      "GAME OF THRONES NETWORK ANALYSIS",
      "ORANGE DOT",
    ]
    const projectTechStack = [
      ["TENSORFLOW", "JAVASCRIPT", "NODE.JS"],
      ["TENSORFLOW", "JAVASCRIPT", "FLASK"],
      ["C#", "ASP.NET", "SQL"],
      ["PYTHON", "NETWORKX", "DATA SCIENCE"],
      ["TWITTER API", "NODE.JS", "SOCKET.IO"],
    ]
    const projectDescriptions = [
      `A utility web application to predict a spectrum of critical diseases
    with well-trained Machine Learning models with just a click. Divided
    into 3 modules is this project, that classifies among a pool of
    diseases f  rom Asthma to Parkinson's disease with a relatively high
    accuracy.`,
      `A deep learning project with the functionality to recognise 20 characters from an image using DCNNs, and generate dialogues for episodes as long as needed from given context with LSTMs. Along with these live demo(s) are Training phase visualizations, Analysis and model statistics.`,
      `A beginner's take client-side desktop application using C# for a cafe shop that serves coffee, tea and other snacks.`,
      `A network analysis of Game Of Thrones with algorithms such as Page Rank Algorithm, Centralities and some more. A Song Of Ice And Fire consists of around 187 characters and a very high number of weighted edges, making a total of thousands interactions. It makes it a very vast area to analyse.`,
      `A web application to gather data from tweets according to your search queries. Simple and efficient to compile data for Natural Language Processing (NLP) purposes. All the gathered data then can be downloaded in a text file in json format.`,
    ]

    let projectStrip = []
    for (let i = 0; i < 5; i++) {
      if (i % 2) {
        projectStrip.push(
          <ProjectCard
            isLight={false}
            title={projectTitles[i]}
            tech={projectTechStack[i]}
            imgName={`P${i + 1}.png`}
            desc={projectDescriptions[i]}
          />
        )
      } else {
        projectStrip.push(
          <ProjectCard
            isLight={true}
            title={projectTitles[i]}
            tech={projectTechStack[i]}
            imgName={`P${i + 1}.png`}
            desc={projectDescriptions[i]}
          />
        )
      }
    }

    return (
      <div style={{ margin: "0", padding: "0" }}>
        <NavBar />

        <Skills />

        <div className="dividerContainer">
          <hr className="divider" />
        </div>

        {projectStrip}

        <div className="dividerContainer">
          <hr className="divider" />
        </div>

        <div className="alignCenter" style={{ margin: "4rem 0" }}>
          <span style={{ fontFamily: "Caveat", fontSize: "50px" }}>
            Other Projects
          </span>
        </div>
        <OtherProject />
      </div>
    )
  }
}

export default Project
