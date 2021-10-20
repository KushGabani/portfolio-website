import React from "react";
import { createGlobalStyle } from "styled-components";
import {colors} from "./colors";

import "./typography.css";

const Style = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: ${colors.white};
  }

  body, html {
    width: 100vw;
    box-sizing: border-box;
    background-color: white;
    font-family: "sf_monoregular", serif;
  }

  ::-moz-selection {
    background-color: rgba(253, 89, 0, 0.5);
  }

  ::selection {
    background-color: rgba(253, 89, 0, 0.5);
  }
`;

const GlobalStyle = () => (
  <Style />
);

export default GlobalStyle;