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
html {
  height: 100%;
}
body {
 height: 100%;
 margin: 0;
}
#root{
height:100%;
}
`;
export default AppMain;
