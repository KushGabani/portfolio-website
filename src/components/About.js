import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../Colors";
import { graphql, useStaticQuery } from "gatsby";

const About = () => {
  const [current, setCurrent] = useState(0);

  const experience = useStaticQuery(graphql`
    query {
      allContentfulExperience(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            id
            name
            org
            date
            perf
          }
        }
      }
    }
  `);

  console.log(experience);

  return (
    <Wrapper>
      <SelectableWrapper>
        {experience.allContentfulExperience.edges.map((item, i) => (
          <Selectable
            onClick={() => setCurrent(i)}
            style={{
              borderLeft: `2px solid ${
                current === i ? colors.orange : "transparent"
              }`,
            }}
          >
            {item.node.name}
          </Selectable>
        ))}
      </SelectableWrapper>
      <DescWrapper>
        <p style={{ fontFamily: "worksans_regular", fontSize: "1.5rem" }}>
          {experience.allContentfulExperience.edges[current].node.name}{" "}
          <span
            style={{
              color: colors.lightgray,
              fontSize: "1rem",
            }}
          >
            @{experience.allContentfulExperience.edges[current].node.org}
          </span>
        </p>
        <p
          style={{
            color: colors.lightgray,
            fontSize: "14px",
            marginTop: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          {experience.allContentfulExperience.edges[current].node.date}
        </p>
        <ul
          style={{
            maxWidth: "600px",
            fontSize: "1rem",
            fontFamily: "sf_monoregular",
            letterSpacing: "0.03em",
          }}
        >
          {experience.allContentfulExperience.edges[current].node.perf.map(
            (desc) => (
              <li style={{ margin: "1rem 0", listStyleType: "square" }}>
                {desc}
              </li>
            )
          )}
        </ul>
      </DescWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 3rem;
  display: flex;
  height: 15rem;
`;

const SelectableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Selectable = styled.div`
  padding: 1rem 1.2rem;
  color: ${colors.white};
  font-size: 1rem;
  transition: 0.2s all ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${colors.lightblack};
  }
`;

const DescWrapper = styled.div`
  padding: 1rem 0 1rem 5rem;
`;

export default About;
