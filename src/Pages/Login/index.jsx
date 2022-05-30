import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createAccount } from "./../../api/api";
import { handleLogin } from "./../../api/api";
import { Wrapper, Note, NoteMenu } from "./style";
import logo from "../../assets/logo.png";

export default function Login() {
  const history = useHistory();

  const [name, setName] = useState();
  const [pass, setPass] = useState();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handlePassChange(event) {
    setPass(event.target.value);
  }

  async function handleLogin() {
    const response = await handleLogin(name, pass);

    console.log(response);

    if (response == true) {
      alert("Login realizado com sucesso!");
      history.push("/menu");
    } else {
      alert("Login ou senha incorretos!");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (name && pass) {
      const result = await createAccount(name, pass);
      if (result === true) {
        alert("Conta criada com sucesso!");
      } else {
        alert("Erro ao criar conta!");
      }
    } else {
      alert("Preencha todos os campos!");
    }
  }

  return (
    <Wrapper>
      <img src={logo} alt="" />
      <Note>
        <NoteMenu>
          <p>
            <strong>Login</strong>
          </p>

          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
              Senha:
              <input type="password" value={pass} onChange={handlePassChange} />
            </label>

            <input type="submit" value="Criar conta" />
          </form>
          <button onClick={() => handleLogin()}>Entrar</button>
        </NoteMenu>
      </Note>
    </Wrapper>
  );
}
