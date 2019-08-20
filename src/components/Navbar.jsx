import React, { Component } from "react";
import styled from "styled-components";

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <div className="navbar-container">
          <div className="logo">Progress React Task</div>
          <ul>
            <a>
              <li>Home</li>
            </a>
            <a>
              <li>About us</li>
            </a>
            <a>
              <li>Login</li>
            </a>
          </ul>
        </div>
      </StyledNavbar>
    );
  }
}
const StyledNavbar = styled.div`
  background-color: rgba(50, 50, 50, 0.8);
  color: #fff;
  padding: 0.5vh 10vw;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  top: 0;
  z-index: 1;

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      display: inline-block;
      padding: 0 15px;
    }
    a {
      color: #fff;
      text-decoration: none;
      cursor: pointer;
    }
    a:hover {
      color: #c2c5cc;
    }
  }
`;

export default Navbar;
