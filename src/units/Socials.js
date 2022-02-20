import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";

const Socials = () => {
  const socialData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github
          linkedin
        }
      }
    }
  `);
  return (
    <Social>
      <a
        href={socialData.site.siteMetadata.github}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <SocialIcon>
          <FaGithub />
        </SocialIcon>
      </a>
      <a
        href={socialData.site.siteMetadata.linkedin}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <SocialIcon>
          <FaLinkedin />
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
