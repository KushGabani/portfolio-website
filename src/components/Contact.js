import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Label from "../units/Label";
import { colors } from "../Colors";

import "./../typography.css";
import Socials from "../units/Socials";
import { FaMapPin } from "react-icons/fa";

const Contact = (props) => {
  return (
    <Container>
      <Left>
        <StaticImage src={"./../assets/contactprop.png"} alt={"Contact Prop"} />
        <LocationButton>
          <a
            href={
              "https://www.google.com/maps/place/Trikamnagar-1,+Varachha,+Surat,+Gujarat/@21.2027236,72.8465827,18z/data=!3m1!4b1!4m5!3m4!1s0x3be04eff117f1ff5:0x513e26e54ad864cb!8m2!3d21.2023799!4d72.8478554"
            }
            target={"_blank"}
          >
            <ButtonText>Find me on Google Maps</ButtonText>
          </a>
          <FaMapPin />
        </LocationButton>
      </Left>
      <Right>
        <Label text={props.text} className={"contact"} />
        <LabelWrapper className={"contact"}>
          <LabelText>
            Get in <span style={{ color: `${colors.orange}` }}>touch</span>
          </LabelText>
          <Subtitle>GOT A PROJECT? TELL ME EVERYTHING</Subtitle>
          <a href={"mailto:gabani.p.kush@gmail.com"} target={"_blank"} style={{textDecoration: "none"}} rel={"noreferrer"}>
            <ReachButton>REACH ME!</ReachButton>
          </a>

          <ContactInfo className={"contact"}>
            <span>+91 8140244500</span>
            <hr />
            <span>gabani.p.kush@gmail.com</span>
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

const LocationButton = styled.div`
  background-color: ${colors.black};
  border-radius: 6px;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 3rem;
  bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    margin: 0.5rem;
  }
`;

const ButtonText = styled.p`
  font-size: 1.1rem;
  margin: 0 0.5rem;
  font-family: "playfair_bold", serif;
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
