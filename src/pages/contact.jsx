import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  max-width: 500px;
  margin: 5px auto;
  padding: 40px 30px;
margin-left:300px;

  color: #f0f0f0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #00fff7;
  text-shadow: 0 0 8px #00fff7;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px 20px;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  background: #203a43;
  color: #00fff7;
  box-shadow: inset 0 0 8px #00fff7;
  transition: 0.3s ease all;

  &::placeholder {
    color: #00fff7cc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 15px #00fff7, inset 0 0 10px #00fff7;
    background: #2c5364;
  }
`;

const TextArea = styled.textarea`
  padding: 15px 20px;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  resize: vertical;
  min-height: 120px;
  background: #203a43;
  color: #00fff7;
  box-shadow: inset 0 0 8px #00fff7;
  transition: 0.3s ease all;

  &::placeholder {
    color: #00fff7cc;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 15px #00fff7, inset 0 0 10px #00fff7;
    background: #2c5364;
  }
`;

const Button = styled.button`
  padding: 15px;
  font-size: 1.2rem;
  border-radius: 12px;
  border: none;
  background: #00fff7;
  color: #0f2027;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 0 20px #00fff7;
  transition: 0.3s ease all;

  &:hover {
    background: #00ccc4;
    box-shadow: 0 0 30px #00ccc4;
    color: #e0f7f7;
  }
`;

const SuccessMessage = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #4BB543;
  font-weight: 600;
  text-shadow: 0 0 5px #4BB543;
`;

const Contact = () => {
 

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <Form >
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
         
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
        
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
      
    </ContactContainer>
  );
};

export default Contact;
