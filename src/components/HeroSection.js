// noinspection CssNoGenericFontName

import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { colors } from "../Colors";
import "@fontsource/work-sans";
import "@fontsource/nothing-you-could-do";
import "./../typography.css";
import Socials from "../units/Socials";

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
          <p>{metaData.site.siteMetadata.description}</p>
        </Desc>
        <Outline>
          <ResumeButton>.resume()</ResumeButton>
        </Outline>
      </Left>
      <Middle>
        <StaticImage src={"./../assets/down-array.png"} alt={"more svg"} />
      </Middle>
      <Right>
        <StaticImage
          className={`hero-image`}
          src={"./../assets/homeprop.png"}
          alt={"prop"}
        />

        <Mail>{metaData.site.siteMetadata.mail}</Mail>
        <Socials />
      </Right>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  @media only screen and (max-width: 1100px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Left = styled.div`
  position: relative;

  &:before {
    position: absolute;
    top: -5rem;
    left: -4rem;
    content: "<brief>";
    font-size: 3rem;
    opacity: 0.15;
    font-family: "Nothing You Could Do";
  }

  &:after {
    content: "</brief>";
    position: absolute;
    bottom: -7rem;
    left: -4rem;
    font-size: 3rem;
    opacity: 0.15;
    font-family: "Nothing You Could Do";
  }

  @media only screen and (max-width: 1100px) {
    margin: 0;
  }

  @media only screen and (max-width: 650px) {
    margin: 0 2.5rem;
    &:before {
      content: "";
    }

    &:after {
      content: "";
    }
  }
`;

const Info = styled.div``;
const Name = styled.span`
  font-family: "Work Sans SemiBold";
  font-size: 3rem;
  line-height: 4rem;
  color: ${colors.white};
  @media only screen and (max-width: 650px) {
    font-size: 2.8rem;
  }

  @media only screen and (min-width: 2000px) {
    font-size: 4rem;
    line-height: 6rem;
  }
`;
const Tag = styled.p`
  font-family: "Work Sans SemiBold";
  font-size: 1.8rem;
  color: #7b7b7b;
  @media only screen and (max-width: 650px) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 2000px) {
    font-size: 2.5rem;
  }
`;

const Desc = styled.div`
  margin: 4rem 0;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.2rem 0 0.2rem 2rem;
  border-left: 1px solid #c8c8c8;

  p {
    max-width: 500px;
  }

  @media only screen and (max-width: 650px) {
    margin: 3rem 0;
    font-size: 1rem;
    line-height: 30px;
  }

  @media only screen and (min-width: 2000px) {
    font-size: 1.5rem;
    line-height: 2rem;
    p {
      max-width: 800px;
    }
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
  font-family: "sf_monomedium";
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
  color: #c8c8c8;
  .hero-image {
    width: 470px;
    height: 470px;
  }
  @media only screen and (max-width: 1100px) {
    display: none;
  }

  @media only screen and (min-width: 2000px) {
    .hero-image {
      width: 600px;
      height: 600px;
    }
  }
`;

const Mail = styled.p`
  margin: 2rem 0;
  font-family: "sf_monoregular";
  font-size: 1.3rem;

  @media only screen and (min-width: 2000px) {
    font-size: 1.7rem;
  }
`;

const Middle = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export default HeroSection;
