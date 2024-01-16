import React from 'react';
import styled from 'styled-components';
import DarkModeToggle from './DarkModeToggle';

const Navbar = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 0;
  text-align: center;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center; 
`;

const NavItem = styled.li`
  margin: 0;
  margin-right: 10px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 14px; /* Adjusted font size */
`;

const Navigation = () => {
  
  return (
    <Navbar>
      <NavList>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <DarkModeToggle />
        </NavItem>
      </NavList>
    </Navbar>
  );
};

export default Navigation;
