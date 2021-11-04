import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import OpenSourceCard from "../units/OpenSourceCard";

const OpenSource = () => {
  const sources = useStaticQuery(graphql`
    query {
      allContentfulOpenSource(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            index
            name
            link
          }
        }
      }
    }
  `);

  return (
    <Container>
      <CardGrid>
        {sources.allContentfulOpenSource.edges.map((card, index) => (
          <OpenSourceCard
            key={index}
            index={card.node.index}
            label={card.node.name}
            link={card.node.link}
          />
        ))}
      </CardGrid>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardGrid = styled.div`
  margin-top: 3.5rem;
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

export default OpenSource;
