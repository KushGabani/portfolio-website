import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../Colors";
import sr from "./sr";
import { srConfig } from "../scroll-config";

const OpenSourceCard = ({ index, label, link }) => {
  useEffect(() => {
    sr.reveal(".card", srConfig());
  }, []);
  return (
    <a href={link} style={{ textDecoration: "none",  margin: 0 }}>
      <CardContainer className={"card"}>
        <p className={"index"}>0{index}.</p>
        <p className={"label"}>{label}</p>
      </CardContainer>
        <Empty />
    </a>
  );
};

const CardContainer = styled.div`
  margin: 1rem 0.5rem 0.5rem 0.5rem;
  width: 14rem;
  background-color: ${colors.lightblack};
  padding: 0.7rem;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;

  .index {
    font-family: "worksans_semibold", sans-serif;
    -webkit-text-stroke: 1px ${colors.orange};
    letter-spacing: 0.025em;
    color: transparent;
    font-size: 3.5rem;
  }

  .label {
    margin-top: 1.3rem;
    font-size: 1.5rem;
    font-family: "worksans_semibold", sans-serif;
  }

  @media all and (max-width: 450px) {
    margin: 0;
  }
  
  @media all and (max-width: 300px) {
    width: 80vw;
    .label {
      font-size: 1.3rem;
    }

    .index {
      font-size: 2rem;
    }
  }

  @media all and (min-width: 2000px) {
    .label {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    .index {
      font-size: 3rem;
    }
  }

  @media all and (min-width: 500px) {
    &:hover {
      background-color: ${colors.white};
      margin-top: 0.5rem;

      .index {
        -webkit-text-stroke: 2px ${colors.black};
      }

      .label {
        color: ${colors.black};
      }
    }
  }
`;

const Empty = styled.div`
  height: 1rem;
  display: none;

  @media all and (max-width: 450px) {
    display: grid;
  }
`;

export default OpenSourceCard;
