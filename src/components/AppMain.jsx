import React, { Component } from "react";
import Routes from "./Routes";
import { createGlobalStyle } from "styled-components";

class AppMain extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Routes />
      </>
    );
  }
}
const GlobalStyle = createGlobalStyle`
body {
 margin: 0;
}

`;
export default AppMain;
