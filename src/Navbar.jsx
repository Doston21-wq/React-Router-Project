import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #0077cc;
  padding: 16px;
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 500;

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      <StyledLink to="/about">
        About
      </StyledLink>
      <StyledLink to="/contact">
        Contact
      </StyledLink>
    </Nav>
  );
};

export default Navbar;
