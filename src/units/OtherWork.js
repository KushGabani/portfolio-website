import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";

const Container = styled.div`
  margin: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.lightblack};

  @media all and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    font-size: 0.9rem;
  }

  @media all and (min-width: 2000px) {
    font-size: 1.2rem;
  }
`;

const OtherWork = () => (
  <Container>
    <p>
      View <u>open-source contributions</u>
    </p>
    <p>
      View <u>project history</u>
    </p>
  </Container>
);

export default OtherWork;
