import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Label from "../units/Label";
import { colors } from "../Colors";

import "./../typography.css";
import Socials from "../units/Socials";

const Contact = (props) => {
  return (
    <Container>
      <Left>
        <StaticImage src={"./../assets/contactprop.png"} alt={"Contact Prop"} />
      </Left>
      <Right>
        <Label text={props.text} className={"contact"} />
        <LabelWrapper className={"contact"}>
          <LabelText>
            Get in <span style={{ color: `${colors.orange}` }}>touch</span>
          </LabelText>
          <Subtitle>GOT A PROJECT? TELL ME EVERYTHING</Subtitle>
          <a href={"mailto:kushgabz2687@gmail.com"} target={"_blank"} style={{textDecoration: "none"}} rel={"noreferrer"}>
            <ReachButton>REACH ME!</ReachButton>
          </a>

          <ContactInfo className={"contact"}>
            <hr />
            <span>kushgabz2687@gmail.com</span>
            <hr />
          </ContactInfo>
        </LabelWrapper>
        <div style={{ marginBottom: "0.7rem" }}>
          <Socials />
        </div>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media all and (max-width: 1000px) {
    justify-content: center;
    padding: 5rem 0;
  }
`;

const Left = styled.div`
  position: relative;

  @media all and (max-width: 1000px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media all and (max-width: 600px) {
    width: 100%;
  }
`;

const LabelWrapper = styled.div`
  margin: 12rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 1000px) {
    margin: 10rem 0;
  }
`;

const LabelText = styled.p`
  color: #e8e8e8;
  font-family: "playfair_black", serif;
  font-size: 5rem;

  @media all and (max-width: 600px) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.p`
  line-height: 2rem;
  font-family: "worksans_thin", sans-serif;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.5);

  @media all and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const ReachButton = styled.div`
  margin: 2.5rem;
  border: 1px solid ${colors.white};
  padding: 0.8rem 1.2rem;
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-family: "worksans_medium", sans-serif;
  letter-spacing: 0.2em;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-family: "worksans_regular", sans-serif;
  color: ${colors.lightgray};
  opacity: 0.5;
  transition: opacity 0.2s ease-in;

  hr {
    width: 105%;
    margin: 0.5rem 0;
    background-color: ${colors.lightgray};
    opacity: 0.5;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export default Contact;
