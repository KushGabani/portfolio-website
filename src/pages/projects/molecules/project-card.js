import React from "react";
import PropImage from "./../atoms/prop-image";
import ProjectHeader from "./../atoms/project-header";
import ProjectDescription from "./../atoms/project-description";
import LearnMore from "./../atoms/learn-more";
import "./../global-css/basics.css";
import "./css/project-card.css";

class ProjectCard extends React.Component {
  render() {
    const projectCard = this.props.isLight
      ? "projectCardLight"
      : "projectCardDark";

    const prCard = this.props.isLight ? "card-light" : "card-dark";
    return (
      <div className={"container-fluid alignSides " + prCard}>
        {this.props.isLight && (
          <PropImage
            isLight={this.props.isLight}
            imgName={this.props.imgName}
          />
        )}

        <div className={projectCard}>
          <ProjectHeader
            isLight={this.props.isLight}
            title={this.props.title}
            tech={this.props.tech}
          />
          <ProjectDescription
            isLight={this.props.isLight}
            desc={this.props.desc}
          />
          <LearnMore
            isLight={this.props.isLight}
            imgName={this.props.imgName}
          />
        </div>

        {!this.props.isLight && (
          <PropImage
            isLight={this.props.isLight}
            imgName={this.props.imgName}
          />
        )}
      </div>
    );
  }
}

export default ProjectCard;
