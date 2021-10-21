// noinspection CssNoGenericFontName

import React from "react";
import { createGlobalStyle } from "styled-components";
import {colors} from "./Colors";

import "@fontsource/azeret-mono"

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
    font-family: "Azeret Mono";
  }

  ::-moz-selection {
    background-color: rgba(253, 89, 0, 0.6);
  }

  ::selection {
    background-color: rgba(253, 89, 0, 0.6);
  }
`;

const GlobalStyle = () => (
  <Style />
);

export default GlobalStyle;