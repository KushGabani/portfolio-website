import React from "react";
import { createGlobalStyle } from "styled-components";
import { colors } from "./Colors";

import "./typography.css";

const Style = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: ${colors.white};
    -ms-overflow-style: none;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }

  body, html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    background-color: white;
    font-family: "sf_monoregular", monospace;
  }

  ::-moz-selection {
    background-color: rgba(253, 89, 0, 0.6);
  }

  ::selection {
    background-color: rgba(253, 89, 0, 0.6);
  }
`;

const GlobalStyle = () => <Style />;

export default GlobalStyle;
