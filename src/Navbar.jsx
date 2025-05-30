import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import bmw from './bmw.png';

const Nav = styled.nav`
  padding: 16px;
  width: 1000px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  
  position: relative;
`;

const StyledLink = styled(NavLink)`
  width: 100px;
  text-decoration: none;  
  color: white;
  position: relative;
  

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  width: 50px;   
  height: auto;
  position: relative;
  left: -150px;
`;

const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="/" end>
        <Logo src={bmw} alt="Logo" />
      </StyledLink>
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
