import React from 'react';
import styled from 'styled-components';
import m5 from '../m5.webp';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  gap: 40px;
  min-height: 100vh;
  flex-wrap: wrap;       
  max-width: 1200px;        
  margin: 0 auto;        
  overflow-y: hidden;   
`;

const TextSection = styled.div`
  max-width: 500px;
  color: white;

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    color: #ccc;
    margin-bottom: 250px;
  }
`;

const CarImage = styled.img`
  width: 100%;          
  max-width: 600px;     
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 200px;
`;

const Home = () => {
  return (
    <Container>
      <TextSection>
        <h1>This is a BMW Website</h1>
        <p>
          Welcome to the ultimate BMW fan site. Here you can explore the latest models,
          innovations, and the unmatched driving experience that BMW delivers.
        </p>
      </TextSection>
      <CarImage src={m5} alt="BMW M5" />
    </Container>
  );
};

export default Home;
