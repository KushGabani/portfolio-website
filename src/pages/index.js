import * as React from "react";
import styled from "styled-components";

import { colors } from "../Colors";
import GlobalStyle from "../GlobalStyle";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Label from "../units/Label";
import WorkCards from "../components/WorkCards";
import Contact from "../components/Contact";
import KBarCommand from "../components/KBarCommand";
import { Helmet } from "react-helmet";
import resume from "./../assets/resume.pdf";
import About from "../components/About";

const IndexPage = () => {
  return (
    <KBarCommand>
      <Helmet title="KG | Home" />
      <GlobalStyle />
      <a href={resume} target="_blank" rel="noreferrer" id="resume" />
      <NavBar fromArchive={false} />
      <HeroWrapper id={"home"}>
        <HeroSection />
      </HeroWrapper>
      <WorkWrapper id={"work"}>
        <Label text={"work"} />
        <WorkCards />
      </WorkWrapper>
      <AboutWrapper id={"about"}>
        <Label text={"about"} />
        <About />
      </AboutWrapper>
      <ContactWrapper id={"contact"}>
        <Contact text={"contact"} />
      </ContactWrapper>
    </KBarCommand>
  );
};

const HeroWrapper = styled.div`
  max-width: 2000px;
  display: flex;
  flex-flow: column;
  margin: 0 auto;
  padding: 5rem 0;
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

const AboutWrapper = styled.div`
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

const ContactWrapper = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  background-color: ${colors.black};
`;

export default IndexPage;
