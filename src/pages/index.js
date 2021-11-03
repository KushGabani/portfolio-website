import * as React from "react";
import styled from "styled-components";

import { colors } from "../Colors";
import "@fontsource/nothing-you-could-do";

import GlobalStyle from "../GlobalStyle";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Label from "../units/Label";
import WorkCards from "../components/WorkCards";

const IndexPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <NavBar />
    <HeroWrapper>
      <HeroSection />
    </HeroWrapper>
    <WorkWrapper>
      <Label text={"work"} />
      <WorkCards />
    </WorkWrapper>
  </React.Fragment>
);

const HeroWrapper = styled.div`
  max-width: 2000px;
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  padding: 7rem 0;
  background-color: ${colors.black};

  @media only screen and (max-width: 300px) {
    height: auto;
  }
`;

const WorkWrapper = styled.div`
  max-width: 2000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin: 0 auto;
  padding: 3rem 0;
  background-color: ${colors.black};

  @media only screen and (max-width: 600px) {
    height: auto;
  }
`;


export default IndexPage;
