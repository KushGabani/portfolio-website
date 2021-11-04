import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";

const ArchiveRow = ({ year, title, collaborated, tags }) => {
  return (
    <tr className={"row"}>
      <td className={"year"}>{year}</td>
      <td className={"title"}>{title}</td>
      <td className={"collaborated"}>{collaborated}</td>
      <td className="tags">
        {tags
          .map((item) => item)
          .reduce((acc, x) => (acc === null ? [x] : [acc, <Dot />, x]), null)}
      </td>
    </tr>
  );
};

const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${colors.white};
  opacity: 0.5;
  margin: 0 0.5rem;

  @media all and (min-width: 2000px) {
    width: 8px;
    height: 8px;
    margin: 0 0.7rem;
  }
`;

export default ArchiveRow;
