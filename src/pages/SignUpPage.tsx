import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  background: rgba(0, 0, 0, 0.8); // ✅ Slight dark overlay for better readability
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
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
`;

const LoginText = styled.p`
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

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Minimum 3 characters").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .matches(/[A-Z]/, "Must include at least 1 uppercase letter")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must include at least 1 special character")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      let users = JSON.parse(localStorage.getItem("users") || "[]");

      if (users.some((user: { email: string }) => user.email === values.email)) {
        alert("Email already registered! Try logging in.");
        return;
      }

      users.push({ name: values.name, email: values.email, password: values.password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful! Please login.");
      navigate("/login");
    },
  });

  return (
    <Container>
      <FormWrapper>
        <Title>Signup</Title>
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && <ErrorText>{formik.errors.name}</ErrorText>}

          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && <ErrorText>{formik.errors.email}</ErrorText>}

          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && <ErrorText>{formik.errors.password}</ErrorText>}

          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && <ErrorText>{formik.errors.confirmPassword}</ErrorText>}

          <Button type="submit">Signup</Button>

          <LoginText>
            Already have an account? <a onClick={() => navigate("/login")}>Login</a>
          </LoginText>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Signup;
