import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { colors } from "../Colors";
import ArchiveRow from "../units/ArchiveRow";

const ArchiveTable = () => {
  const archiveQuery = useStaticQuery(graphql`
    {
      allContentfulArchive(sort: { order: DESC, fields: createdAt }) {
        edges {
          node {
            id
            year
            title
            collaborators
            stack
            link
          }
        }
      }
    }
  `);
  return (
    <TableWrapper className={"table"}>
      <th>Year</th>
      <th>Title</th>
      <th className={"collaborated"}>Collaborated</th>
      <th className={"tags"}>Tags</th>
      <tbody>
        {archiveQuery.allContentfulArchive.edges.map((archive) => (
          <ArchiveRow
            year={archive.node.year}
            title={archive.node.title}
            collaborated={archive.node.collaborators === 0 ? "" : "✓"}
            tags={archive.node.stack}
          />
        ))}
      </tbody>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  font-size: 1rem;
  width: 100%;
  font-family: "worksans_light", sans-serif;
  border-collapse: collapse;

  margin: 4rem 0;

  @media all and (min-width: 2000px) {
    margin: 6rem 0;
  }

  th {
    font-weight: 500;
    font-family: "worksans_medium", sans-serif;
    letter-spacing: 0.05em;
    font-size: 1.1rem;
  }

  tr {
    &:hover,
    &:focus {
      background-color: #313131;

      td {
        color: #ffffff;
      }
    }
  }

  @media all and (min-width: 2000px) {
    th {
      font-size: 1.8rem;
    }

    td {
      font-size: 1.5rem;
    }
  }

  @media all and (max-width: 768px) {
    .tags {
      display: none;
    }
  }

  @media all and (max-width: 450px) {
    .collaborated {
      display: none;
    }

    th {
      font-size: 0.9rem;
    }

    td {
      font-size: 0.8rem;
    }
  }

  th,
  td {
    padding: 10px 1.5rem;
    text-align: left;

    &:first-child {
      padding-left: 20px;
    }

    &:last-child {
      padding-right: 20px;
    }
  }

  tr {
    cursor: pointer;
    transition: 0.1s background-color ease-in;

    td:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    td:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  td {
    &.title {
      line-height: 1.5rem;
    }

    &.year {
      padding-right: 20px;
      text-align: center;
      color: ${colors.orange};
      line-height: 1.5rem;

      @media (max-width: 768px) {
        padding-right: 10px;
      }
    }

    &.collaborated {
      text-align: center;
      padding-right: 20px;
      line-height: 1.5rem;

      @media (max-width: 768px) {
        padding-right: 10px;
      }
    }

    &.tags {
      line-height: 1.5rem;
      display: flex;
      justify-content: start;
      align-items: center;
    }

    @media all and (max-width: 768px) {
      &.tags {
        display: none;
      }
    }

    @media all and (max-width: 450px) {
      &.collaborated {
        display: none;
      }
    }
  }
`;

export default ArchiveTable;
