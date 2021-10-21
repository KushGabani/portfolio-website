import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Social = styled.ol`
  display: flex;
  list-style: none;
`;
const SocialIcon = styled.li`
  margin: 0 1rem;
`;

const Socials = () => (
  <Social>
    <SocialIcon>
      <StaticImage src="./../assets/Github.svg" alt={"Github"} />
    </SocialIcon>
    <SocialIcon>
      <StaticImage src="./../assets/LinkedIn.svg" alt={"LinkedIn"} />
    </SocialIcon>
    <SocialIcon>
      <StaticImage src="./../assets/Twitter.svg" alt={"Twitter"} />
    </SocialIcon>
    <SocialIcon>
      <StaticImage src="./../assets/Medium.svg" alt={"Medium"} />
    </SocialIcon>
    <SocialIcon>
      <StaticImage src="./../assets/Pinterest.svg" alt={"Pinterest"} />
    </SocialIcon>
    <SocialIcon>
      <StaticImage src="./../assets/Instagram.svg" alt={"Instagram"} />
    </SocialIcon>
  </Social>
);
export default Socials;