import React from 'react';
import styled from 'styled-components';
import bmw from '../bmw.png'; 

const AboutContainer = styled.section`
  /* background-color: #111; */
  color: #eee;              
  padding: 60px 20px;
  max-width: 800px;
  margin: 0 auto ;
  margin-left: -10px;
  margin-top: 100px;
  border-radius: 12px;
  position: relative;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #ccc;
  margin-left: 80px;
  margin-top: -200px;
  text-align: justify;
`;

const Img = styled.img`
  width: 200px;   
  height: auto;
  position: relative;
  left: 1000px;
  top: -20px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    position: static;
    display: block;
    margin: 0 auto 20px auto;
    left: 0;
    top: 0;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About BMW</Title>
      <Img src={bmw} alt="BMW logo" />
      <Text>
        Founded in 1916, BMW has established itself as a global leader in luxury vehicles and
        high-performance engineering. Known for their innovative technology, sleek design, and
        unparalleled driving dynamics, BMW cars represent the ultimate blend of style and substance.
        From the iconic M series to the latest electric models, BMW continues to push the boundaries
        of automotive excellence, delivering vehicles that excite the senses and inspire passion.
      </Text>
    </AboutContainer>
  );
};

export default About;
