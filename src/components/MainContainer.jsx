import React, { Component } from "react";
import data from "../data.json";
import Navbar from "./Navbar";
import ItemCard from "./ItemCard";
import styled from "styled-components";

class MainContainer extends Component {
  state = { data: data.projects.slice(0, 20) };

  componentDidMount() {
    window.onscroll = () => {
      const offset = document.documentElement.scrollTop + window.innerHeight;
      const height = document.documentElement.offsetHeight;
      const secondBatchOfData = data.projects.slice(21, 44);

      if (offset === height) {
        if (this.state.data.length < 44) {
          this.setState({
            data: this.state.data.concat(secondBatchOfData)
          });
        }
      }
    };
  }

  render() {
    return (
      <MainWrapper>
        <Navbar />
        <div className="title-container">
          <h1>Progress React Task</h1>
        </div>
        {this.state.data.map(data => (
          <ItemCard {...data} />
        ))}
      </MainWrapper>
    );
  }
}
const MainWrapper = styled.div`
  background-image: linear-gradient(to right, #d4a4ea, #02f);
  background-size: cover;
  text-align: center;

  h1 {
    margin-top: 0;
    line-height: 6;
  }
`;

export default MainContainer;
