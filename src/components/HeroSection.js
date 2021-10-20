import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.div`;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Left = styled.div``;
const Right = styled.div`
  @media only screen and (max-width: 450px) {
    display: none;
  }
`;

const HeroSection = () => (
    <HeroWrapper>
        <Left><h1>Hello</h1></Left>
        <Right><h1>World</h1></Right>
    </HeroWrapper>
)

export default HeroSection;