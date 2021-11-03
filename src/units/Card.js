import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";
import { StaticImage } from "gatsby-plugin-image";

const Card = ({ index, title, subtitle, description, stack, githubLink }) => (
  <a href={githubLink} style={{textDecoration: "none"}}>
    <Container>
      <CardHeader>
        <Index>{index}</Index>
        <StaticImage src={"./../assets/Github.png"} alt={"Github"} />
      </CardHeader>
      <CardBody>
        {title}
        <br />
        {subtitle}
      </CardBody>
      <CardDescription>{description}</CardDescription>
      <Stack>
        {stack.map((item) => (
          <StackItem>{item}</StackItem>
        ))}
      </Stack>
    </Container>
  </a>
);

const Container = styled.div`
  margin: 0.7rem 0.5rem 0.5rem 0.5rem;
  border-radius: 8px;
  background-color: ${colors.lightblack};
  max-width: 16rem;
  padding: 1.5rem;
  transition: 0.1s margin ease-in;

  @media all and (min-width: 600px) {
    &:hover {
      margin-top: 0.5rem;
      filter: drop-shadow(0 5px 20px rgba(0, 0, 0, 0.1));
    }
  }

  @media all and (min-width: 2000px) {
    margin: 1rem 0.8rem 0.8rem 0.8rem;
    &:hover {
      margin-top: 0.8rem;
      filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.15));
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Index = styled.span`
  font-family: "worksans_semibold", sans-serif;
  -webkit-text-stroke: 1px ${colors.orange};
  letter-spacing: 0.025em;
  color: transparent;
  font-size: 2.5rem;

  @media all and (max-width: 300px) {
    font-size: 2rem;
  }

  @media all and (min-width: 2000px) {
    font-size: 3rem;
  }
`;

const CardBody = styled.p`
  margin: 1rem 0;
  font-size: 1.4rem;
  font-family: "worksans_semibold", sans-serif;
  line-height: 27px;

  @media all and (max-width: 300px) {
    font-size: 1.3rem;
  }

  @media all and (min-width: 2000px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const CardDescription = styled.p`
  font-family: "worksans_regular", sans-serif;
  font-size: 1rem;
  color: ${colors.lightgray};

  @media all and (max-width: 300px) {
    font-size: 0.9rem;
  }
`;

const Stack = styled.ul`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  list-style: none;
`;

const StackItem = styled.li`
  font-size: 0.8rem;
  color: white;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }

  @media all and (max-width: 300px) {
    font-size: 0.7rem;
  }

  @media all and (min-width: 2000px) {
    font-size: 1rem;
    margin-right: 0.8rem;
  }
`;

export default Card;
