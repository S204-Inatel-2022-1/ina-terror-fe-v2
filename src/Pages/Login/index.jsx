import React, { useState } from "react";
import axios from "axios";
import Form from "../../Components/Form";
import { useHistory } from "react-router-dom";
import { createAccount } from "./../../api/api";
import { handleLogin } from "./../../api/api";

export default function Login() {
  const history = useHistory();
  return (
    <Form
      title="Login"
      nameLabel="Name"
      passLabel="Password"
      buttonLabel="Criar conta"
      buttonLabel2="Entrar"
      createAccount={createAccount}
      handleLogin={handleLogin}
      history={history}
    />
  );
}
