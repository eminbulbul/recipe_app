import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import { useNavigate } from "react-router-dom";
import meal from "../../assets/meal.svg";

const Login = () => {
  const navigate = useNavigate();
  const user = {
    username: "user",
  };
  const siteyeGir = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header> {"<Chef Emin's/>"}Recipe </Header>

        <StyledForm onSubmit={siteyeGir}>
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password" required />

          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
