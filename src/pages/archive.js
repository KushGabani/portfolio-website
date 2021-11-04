import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";
import GlobalStyle from "../GlobalStyle";
import NavBar from "../components/NavBar";
import ArchiveTable from "../components/ArchiveTable";
import OpenSource from "../components/OpenSource";

const Archive = () => (
  <React.Fragment>
    <GlobalStyle />
    <NavBar />
    <PageWrapper>
      <div>
        <ArchiveContainer>
          <p className={"heading"}>Project Archive</p>
          <p className={"subheading"}>
            a history of projects and contributions
          </p>
        </ArchiveContainer>
        <ArchiveTable />

        <ArchiveContainer>
          <p className={"heading"}>Open Source Contributions</p>
          <p className={"subheading"}>significant open source contributions</p>
        </ArchiveContainer>
        <OpenSource />
      </div>
    </PageWrapper>
  </React.Fragment>
);

const PageWrapper = styled.div`
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0 3rem 0;
  margin: 0 auto;
  max-width: 1950px;

  @media all and (max-width: 450px) {
    div {
      margin: 0 0.6rem;
    }
  }
`;

const ArchiveContainer = styled.div`
  font-family: "worksans_regular", sans-serif;
  font-style: normal;
  color: ${colors.white};
  margin-left: 1rem;

  .heading {
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    margin-bottom: 0.7rem;
  }

  .subheading {
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    opacity: 0.6;
  }

  @media all and (min-width: 2000px) {
    .subheading {
      font-size: 2rem;
    }

    .heading {
      font-size: 4rem;
      margin-bottom: 1.5rem;
    }
  }

  @media all and (max-width: 450px) {
    text-align: center;
    padding-bottom: 2rem;
    margin-top: 3rem;
    .heading {
      font-size: 2rem;
    }

    .subheading {
      font-size: 1rem;
    }
  }
`;

export default Archive;
