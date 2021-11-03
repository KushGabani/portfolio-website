import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Social = styled.ol`
  display: flex;
  list-style: none;
`;
const SocialIcon = styled.li`
  margin: 0 1rem;

  @media only screen and (min-width: 2000px) {
    margin: 0 1.5rem;
    .socials {
      width: 2.4rem;
      height: 2.3rem;
    }
  }
`;

const Socials = () => {
  const links = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          github
          linkedin
          instagram
        }
      }
    }
  `);

  return (
    <Social>
      <SocialIcon>
        <a href={links.site.siteMetadata.github}>
          <StaticImage
            className={"socials"}
            src="./../assets/Github.png"
            alt={"Github"}
          />
        </a>
      </SocialIcon>
      <SocialIcon>
        <a href={links.site.siteMetadata.linkedin}>
          <StaticImage
            className={"socials"}
            src="./../assets/LinkedIn.png"
            alt={"LinkedIn"}
          />
        </a>
      </SocialIcon>
      <SocialIcon>
        <StaticImage
          className={"socials"}
          src="./../assets/Twitter.png"
          alt={"Twitter"}
        />
      </SocialIcon>
      <SocialIcon>
        <StaticImage
          className={"socials"}
          src="./../assets/Medium.png"
          alt={"Medium"}
        />
      </SocialIcon>
      <SocialIcon>
        <StaticImage
          className={"socials"}
          src="./../assets/Pinterest.png"
          alt={"Pinterest"}
        />
      </SocialIcon>
      <SocialIcon>
        <a href={links.site.siteMetadata.instagram}>
          <StaticImage
            className={"socials"}
            src="./../assets/Instagram.png"
            alt={"Instagram"}
          />
        </a>
      </SocialIcon>
    </Social>
  );
};
export default Socials;
