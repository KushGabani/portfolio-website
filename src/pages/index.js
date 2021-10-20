import * as React from "react";
import styled from "styled-components";

import { colors } from "../colors";
import "@fontsource/nothing-you-could-do";

import GlobalStyle from "../GlobalStyle";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

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
    <Wrapper>
      <NavBar />
      <HeroSection />
    </Wrapper>
  </React.Fragment>
);
export default IndexPage;
