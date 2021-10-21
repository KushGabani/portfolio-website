// noinspection CssNoGenericFontName

import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { colors } from "../Colors";
import "@fontsource/work-sans";
import "@fontsource/nothing-you-could-do";
import "../typography.css";
import Socials from "../units/Socials";

const HeroWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1100px) {
    justify-content: center;
  }
`;

const Left = styled.div`
  margin-right: 5rem;
  position: relative;

  &:before {
    position: absolute;
    top: -5rem;
    left: -8rem;
    content: "<brief>";
    font-size: 3rem;
    opacity: 0.15;
    font-family: "Nothing You Could Do";
  }

  &:after {
    content: "</brief>";
    position: absolute;
    bottom: -7rem;
    left: -9rem;
    font-size: 3rem;
    opacity: 0.15;
    font-family: "Nothing You Could Do";
  }

  @media only screen and (max-width: 1100px) {
    margin: 0;
  }

  @media only screen and (max-width: 650px) {
    margin-left: 5rem;
    margin-right: 1.5rem;
    &:before {
      top: -4rem;
      left: -1rem;
      font-size: 2rem;
    }

    &:after {
      bottom: -4rem;
      left: -1rem;
      font-size: 2rem;
    }
  }
`;

const Info = styled.div``;
const Name = styled.span`
  font-family: "Work Sans";
  font-weight: bold;
  font-size: 4rem;
  line-height: 6rem;
  color: ${colors.white};
  @media only screen and (max-width: 650px) {
    font-size: 2.8rem;
  }
`;
const Tag = styled.p`
  font-family: "Work Sans SemiBold";
  font-size: 2.2rem;
  color: #7b7b7b;
  @media only screen and (max-width: 650px) {
    font-size: 1.8rem;
  }
`;

const Desc = styled.div`
  margin: 4rem 0;
  font-size: 1rem;
  line-height: 33px;
  padding: 0.2rem 0 0.2rem 2rem;
  border-left: 1px solid #c8c8c8;

  @media only screen and (max-width: 650px) {
    margin: 3rem 0;
    font-size: 1rem;
    line-height: 30px;
  }
`;

const Outline = styled.div`
  max-width: max-content;
  padding: 0.2rem;
  border: 1.5px solid transparent;
  transition: 0.3s all ease-in;

  &:hover {
    border: 1.5px solid ${colors.white};
  }
`;

const ResumeButton = styled.button`
  color: ${colors.black};
  font-family: "sf_monosemibold";
  padding: 0.5rem 2rem;
  font-size: 1.1rem;
  border-radius: 0;
  border: none;
  background-color: ${colors.white};
  transition: 0.3s all ease-in;

  &:hover {
    background-color: transparent;
    color: ${colors.white};
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 4rem;
  color: #c8c8c8;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

const Mail = styled.p`
  margin: 2rem 0;
  font-family: "sf_monoregular";
  font-size: 1.2rem;
`;


const HeroSection = () => {
  const metaData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          description
          tag
          mail
        }
      }
    }
  `);

  return (
    <HeroWrapper>
      <Left>
        <Info>
          <Name>
            {metaData.site.siteMetadata.name}
            <span style={{ color: `${colors.orange}` }}>;</span>
          </Name>
          <Tag>{metaData.site.siteMetadata.tag}</Tag>
        </Info>
        <Desc>
          <p style={{ "max-width": "600px" }}>
            {metaData.site.siteMetadata.description}
          </p>
        </Desc>
        <Outline>
          <ResumeButton>.resume()</ResumeButton>
        </Outline>
      </Left>
      <Right>
        <StaticImage
          src={"./../assets/homeprop.svg"}
          alt={"prop"}
          width={600}
        />

        <Mail>{metaData.site.siteMetadata.mail}</Mail>
        <Socials />
      </Right>
    </HeroWrapper>
  );
};

export default HeroSection;
