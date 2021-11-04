import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../Colors";
import Card from "../units/Card";
import OtherWork from "../units/OtherWork";
import { graphql, useStaticQuery } from "gatsby";
import sr from "../units/sr";
import { srConfig } from "../scroll-config";

const WorkCards = () => {
  useEffect(() => {
    sr.reveal(".work", srConfig());
  }, []);

  const projects = useStaticQuery(graphql`
    query MyQuery {
      allContentfulWork(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            id
            title
            subtitle
            github
            description
            stack
          }
        }
      }
    }
  `);

  return (
    <Container>
      <TimeLine className={"work"}>
        2017
        <div>
          <hr />
        </div>
        2021
      </TimeLine>
      <CardGrid>
        {projects.allContentfulWork.edges.map((project, index) => (
          <Card
            key={project.node.id}
            index={`0${index + 1}.`}
            title={project.node.title}
            subtitle={project.node.subtitle}
            description={project.node.description}
            stack={project.node.stack}
            githubLink={project.node.github}
          />
        ))}
      </CardGrid>
      <OtherWork />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
`;

const TimeLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 0.8rem;
  color: ${colors.lightgray};
  margin: 2.5rem 2rem 1.5rem 2rem;

  div {
    margin: 0 2rem;
    width: 310px;

    hr {
      border-color: #b4b3b3;
    }
  }

  @media only screen and (max-width: 600px) {
    div {
      margin: 0 1rem;
      width: 150px;
    }
  }

  @media all and (min-width: 2000px) {
    font-size: 1.4rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);

  @media only screen and (max-width: 800px) {
    grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default WorkCards;
