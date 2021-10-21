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
      <StaticImage src="./../assets/Github.png" alt={"Github"} />
    </SocialIcon>
    <SocialIcon>
      <StaticImage src="./../assets/LinkedIn.png" alt={"LinkedIn"} />
    </SocialIcon>
    <SocialIcon>
      <StaticImage src="./../assets/Twitter.png" alt={"Twitter"} />
    </SocialIcon>
    <SocialIcon>
      <StaticImage src="./../assets/Medium.png" alt={"Medium"} />
    </SocialIcon>
    <SocialIcon>
      <StaticImage src="./../assets/Pinterest.png" alt={"Pinterest"} />
    </SocialIcon>
    <SocialIcon>
      <StaticImage src="./../assets/Instagram.png" alt={"Instagram"} />
    </SocialIcon>
  </Social>
);
export default Socials;