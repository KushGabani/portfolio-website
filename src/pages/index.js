import * as React from "react";
import styled from "styled-components";

import { colors } from "../Colors";
import "@fontsource/nothing-you-could-do";

import GlobalStyle from "../GlobalStyle";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AnimatedCursor from "react-animated-cursor";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 2000px;
  margin: 0 auto;
  background-color: ${colors.black};
`;

const IndexPage = () => (
  <React.Fragment>
    <GlobalStyle />
    <AnimatedCursor innerSize={8} outerSize={15} color="253, 89, 0" />
    <Wrapper>
      <NavBar />
      <HeroSection />
    </Wrapper>
  </React.Fragment>
);
export default IndexPage;
