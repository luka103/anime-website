import React from 'react';
import styled from 'styled-components';
import DarkModeToggle from './DarkModeToggle';

const NavigationContainer = styled.div`
  background-color: #333;
  color: #fff;
  padding: 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const NavigationButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const NavigationButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

const Navigation = () => {
  
  return (
    <NavigationContainer>
      <NavigationButtons>
        <NavigationButton onClick={() => window.location.href = '/'}>
          Home
        </NavigationButton>
        <NavigationButton onClick={() => window.location.href = '/about'}>
          About
        </NavigationButton>
      </NavigationButtons>
      <DarkModeToggle />
    </NavigationContainer>
  );
};

export default Navigation;
