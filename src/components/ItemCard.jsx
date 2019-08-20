import React, { Component } from "react";
import styled from "styled-components";

class ItemCard extends Component {
  state = { isToggled: false };

  render() {
    return (
      <StyledItemCard isToggled={this.state.isToggled}>
        <div class="label">
          <p>company: {this.props.company_name}</p>
          <span
            className="show-more"
            onClick={() => this.setState({ isToggled: true })}
          >
            Show more
          </span>
          <span
            className="show-less"
            onClick={() => this.setState({ isToggled: false })}
          >
            Show less
          </span>
        </div>
        <div class="container">
          <div class="content">
            <h2 class="title">Name company</h2>
            <div class="body-text">
              are delivered with the same high quality as decades ago are
              delivered with the same high quality as decades ago are delivered
              with the same high quality as decades ago are delivered with the
              same high quality as decades ago are delivered with the same high
              quality as decades ago
            </div>
          </div>
        </div>
      </StyledItemCard>
    );
  }
}
const StyledItemCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  height: ${props => (props.isToggled ? "500px" : "300px")};
  margin: 20px;
  padding: 0 20px;
  position: relative;
  text-align: center;
  width: 260px;

  position: relative;
  display: inline-block;
  .container {
    display: ${props => (props.isToggled ? "block" : "none")};
  }

  p {
    font-size: 16px;
    font-weight: bold;
  }

  .label {
    .show-less {
      display: ${props => (props.isToggled ? "block" : "none")};
      margin: 40px;
      padding: 10px 20px;
      background: none;
      border-radius: 2px;
      border: solid 1px #343434;
      color: #343434;
      text-align: center;
      transition: 0.25s ease-in-out;
      box-shadow: inset 0 0 0 0 #343434;
      cursor: pointer;

      :hover {
        box-shadow: inset 0px 200px 0px 0px #343434;
        color: #fff;
      }
    }

    .show-more {
      display: ${props => (props.isToggled ? "none" : "block")};
      margin: 40px;
      padding: 10px 20px;
      background: none;
      border-radius: 2px;
      border: solid 1px #343434;
      color: #343434;
      text-align: center;
      transition: 0.25s ease-in-out;
      box-shadow: inset 0 0 0 0 #343434;
      cursor: pointer;

      :hover {
        box-shadow: inset 0px 200px 0px 0px #343434;
        color: #fff;
      }
    }
  }

  .title {
    font-weight: 900;
  }
  .body-text {
    padding: 0 20px;
  }
`;

export default ItemCard;
