import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";
import { Link } from "gatsby";

const Container = styled.div`
  margin: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.lightblack};

  @media all and (max-width: 600px) {
    div {
      display: none;
    }

    justify-content: center;
    font-size: 0.9rem;
  }

  @media all and (min-width: 2000px) {
    font-size: 1.2rem;
  }
`;

const OtherWork = () => (
  <Container>
    <div />
    <Link to={"/archive"}>
      <p>
        View <u>project archive</u>
      </p>
    </Link>
  </Container>
);
export default OtherWork;
