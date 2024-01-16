import React from 'react';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const AboutContainer = styled.div`
  max-width: 800px;
  padding: 20px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const AboutHeading = styled.h2`
  color: #3e4095;
  margin-bottom: 20px;
`;

const AboutContent = styled.p`
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 15px;
  color: #333;
`;

const AboutPage = () => {
  return (
    <CenteredContainer>
      <AboutContainer>
        <AboutHeading>About Us</AboutHeading>
        <AboutContent>
          Welcome to our amazing anime website! We are passionate about bringing you the best anime content
          and creating an immersive experience for anime enthusiasts.
        </AboutContent>
        <AboutContent>
          Our mission is to provide a platform where you can discover, explore, and enjoy a wide variety of
          anime titles. Whether you're a seasoned anime fan or just starting your journey, we've got something
          special for you.
        </AboutContent>
      </AboutContainer>
    </CenteredContainer>
  );
};

export default AboutPage;
