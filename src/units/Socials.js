import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMediumM,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";

const Socials = () => {
  const socialData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github
          linkedin
          instagram
          pinterest
        }
      }
    }
  `);
  return (
    <Social>
      <a href={socialData.site.siteMetadata.github} target={"_blank"} rel={"noreferrer"}>
        <SocialIcon>
          <FaGithub />
        </SocialIcon>
      </a>
      <a href={socialData.site.siteMetadata.linkedin} target={"_blank"} rel={"noreferrer"}>
        <SocialIcon>
          <FaLinkedin />
        </SocialIcon>
      </a>
      <SocialIcon>
        <FaTwitter />
      </SocialIcon>
      <SocialIcon>
        <FaMediumM />
      </SocialIcon>
      <a href={socialData.site.siteMetadata.pinterest} target={"_blank"} rel={"noreferrer"}>
        <SocialIcon>
          <FaPinterest />
        </SocialIcon>
      </a>
      <a href={socialData.site.siteMetadata.instagram} target={"_blank"} rel={"noreferrer"}>
        <SocialIcon>
          <FaInstagram />
        </SocialIcon>
      </a>
    </Social>
  );
};

const Social = styled.ol`
  display: flex;
  list-style: none;
`;
const SocialIcon = styled.li`
  margin: 0 1rem;

  svg {
    width: 25px;
    height: 25px;
  }

  @media only screen and (min-width: 2000px) {
    margin: 0 1.5rem;
    .socials {
      width: 2.4rem;
      height: 2.3rem;
    }
  }
`;

export default Socials;
