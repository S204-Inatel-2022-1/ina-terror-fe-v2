import React, { useState } from "react";
import axios from "axios";
import Form from "../../Components/Form";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  function createAccount(name, password) {
    console.log(name, password);
    axios
      .post("http://localhost:8000/api/info/", {
        user: name,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("rodou aqui");
  }

  

  function handleLogin(name, password) {
    axios
      .get(`http://localhost:8000/api/info/${name}?password=${password}`)
      .then(function (response) {
        const info = response.data;
        
        console.log(info);
        if (info.user == name) {
          console.log("true");
          history.push("/menu")
          
        }
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      })
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
