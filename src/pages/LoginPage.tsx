import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "./istockphoto-1165465588-612x612.jpg"; // ✅ Import Background Image

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
`;

const FormWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8); // ✅ Dark overlay for better readability
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  width: 350px;
  text-align: center;
`;

const Title = styled.h2`
  color: #ff8c00;
  font-size: 2rem;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ff8c00;
  border-radius: 5px;
  font-size: 1rem;
  background: #2c2c2c;
  color: white;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  font-size: 1.1rem;
  color: white;
  background: #ff8c00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #e07b00;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
`;

const SignupText = styled.p`
  margin-top: 15px;
  color: white;

  a {
    color: #ff8c00;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let user = users.find(
      (user: { email: string; password: string }) => user.email === email && user.password === password
    );

    if (user) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/home");
    } else {
      setError("Invalid email or password. Try again.");
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Login</Title>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <ErrorText>{error}</ErrorText>}
          <Button type="submit">Login</Button>
          <SignupText>
            Don't have an account? <a onClick={() => navigate("/signup")}>Sign Up</a>
          </SignupText>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
