import React, { useState } from "react";
import axios from "axios";
import Form from "../../Components/Form";
import { useHistory } from "react-router-dom"

export default function Login() {
  const history = useHistory();
  function createAccount(name, password) {
    console.log(name, password)
    axios
      .post("http://127.0.0.1:8000/api/info/", {
        user: name,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log("rodou aqui")
  }

  function createAccount(name, password) {
    axios
      .post("http://127.0.0.1:8000/api/info/", {
        user: name,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log("rodou aqui")
  }

  function handleLogin() {
    history.push("/menu")
  }

  return (
    <Form
      title="Login"
      nameLabel="Name"
      passLabel="Password"
      buttonLabel="Criar conta"
      buttonLabel2="Entrar"
      createAccount={createAccount}
      handleLogin={handleLogin}
    />
  );
}
