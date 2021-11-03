import React from "react";
import styled from "styled-components";
import { colors } from "../Colors";

const Text = styled.p`
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: 500;

  color: #e9e7e7;
  span {
    color: ${colors.orange};
  }

  @media all and (min-width: 2000px) {
    font-size: 2.8rem;
  }
`;

const Label = ({ text }) => (
  <Text>
    .{text}
    <span>()</span>
  </Text>
);

export default Label;
