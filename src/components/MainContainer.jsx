import React, { Component } from "react";
import data from "../data.json";
import Navbar from "./Navbar";
import styled from "styled-components";

class MainContainer extends Component {
  state = { data: data.projects };

  render() {
    return (
      <MainWrapper>
        <Navbar />
        <div className="title-container">
          <h1>Projects</h1>
        </div>
      </MainWrapper>
    );
  }
}
const MainWrapper = styled.div`
  background-image: linear-gradient(to right, #d4a4ea, #02f);
  background-size: cover;
  width: 100%;
  height: 100vh;
  text-align: center;

  h1 {
    margin-top: 0;
    line-height: 6;
  }
`;

export default MainContainer;
