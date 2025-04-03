import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Import the background image (Make sure it's in the correct path inside /src/assets)
import backgroundImage from "./istockphoto-1820694690-612x612.jpg";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #ff8c00;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 8px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: #ff8c00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #e07b00;
    transform: scale(1.08);
    box-shadow: 0 4px 10px rgba(255, 140, 0, 0.3);
  }
`;

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.length > 0) {
      navigate("/login"); // ✅ If users exist, go to Login
    } else {
      navigate("/signup"); // ✅ Otherwise, go to Signup
    }
  };

  return (
    <LandingContainer>
      <Title>Welcome to Recipe Book</Title>
      <Subtitle>Discover and share amazing recipes.</Subtitle>
      <Button onClick={handleGetStarted}>Get Started</Button>
    </LandingContainer>
  );
};

export default LandingPage;