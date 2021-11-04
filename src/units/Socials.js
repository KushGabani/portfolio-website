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

const Socials = () => (
  <Social>
    <SocialIcon>
      <FaGithub />
    </SocialIcon>
    <SocialIcon>
      <FaLinkedin />
    </SocialIcon>
    <SocialIcon>
      <FaTwitter />
    </SocialIcon>
    <SocialIcon>
      <FaMediumM />
    </SocialIcon>
    <SocialIcon>
      <FaPinterest />
    </SocialIcon>
    <SocialIcon>
      <FaInstagram />
    </SocialIcon>
  </Social>
);

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
