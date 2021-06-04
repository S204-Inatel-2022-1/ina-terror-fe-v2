import React, { useState } from "react";
import axios from "axios";
import Form from "../../Components/Form";

export default function Login() {
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

  return (
    <Form
      title="Login"
      nameLabel="Name"
      passLabel="Password"
      buttonLabel=" Login "
      buttonLabel2="Sign Up"
      createAccount={createAccount}
    />
  );
}
