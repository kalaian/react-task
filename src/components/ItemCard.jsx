import React, { Component } from "react";
import styled from "styled-components";

class ItemCard extends Component {
  state = { isToggled: false };

  convertToDate = date => {
    return new Date(1000 * date).toDateString();
  };

  render() {
    return (
      <StyledItemCard isToggled={this.state.isToggled}>
        <div className="label">
          <p>company: {this.props.company_name}</p>
          <div
            className="show-more"
            onClick={() => this.setState({ isToggled: true })}
          >
            Show more
          </div>
          <div
            className="show-less"
            onClick={() => this.setState({ isToggled: false })}
          >
            Show less
          </div>
        </div>
        <div className="container">
          <div className="content">
            <h2 className="title">{this.props.title}</h2>
            <p>location: {this.props.location_city}</p>
            <p>publish date: {this.convertToDate(this.props.publish_date)}</p>
            <p>contact name: {this.props.contact_name}</p>
            <p>id: {this.props.id}</p>
            <p>comments: {this.props.comments}</p>
            <div className="body-text">{this.props.description}</div>
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
  height: ${props => (props.isToggled ? "500px" : "150px")};
  margin: 20px;
  padding: 0 20px;
  position: relative;
  text-align: center;
  width: 390px;
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
