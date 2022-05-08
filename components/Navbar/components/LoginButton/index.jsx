import React from "react";
import { LoginButtonContainer, LoginButtonText } from "./styles";

const LoginButton = ({ onClick }) => {
  return (
    <LoginButtonContainer>
      <LoginButtonText>Login</LoginButtonText>
    </LoginButtonContainer>
  );
};

export default LoginButton;
