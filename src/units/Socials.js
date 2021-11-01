import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

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

const Socials = () => (
  <Social>
    <SocialIcon>
      <StaticImage
        className={"socials"}
        src="./../assets/Github.png"
        alt={"Github"}
      />
    </SocialIcon>
    <SocialIcon>
      <StaticImage
        className={"socials"}
        src="./../assets/LinkedIn.png"
        alt={"LinkedIn"}
      />
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
      <StaticImage
        className={"socials"}
        src="./../assets/Instagram.png"
        alt={"Instagram"}
      />
    </SocialIcon>
  </Social>
);
export default Socials;
