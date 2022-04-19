import React, { useState } from "react";
import { Wrapper, Note, NoteMenu } from "./style";
import img from "../../assets/note.png";
import logo from "../../assets/logo.png";

export default function Form(props) {
  const [name, setName] = useState();
  const [pass, setPass] = useState();

  function handleNameChange(event) {
    setName( event.target.value );
  }

  function handlePassChange(event) {
    setPass(event.target.value );
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (name && pass) {
      //Evitar contas com Strings vazias
      alert("Pronto " + name + pass +" conta criada.");
      props.createAccount(name, pass);
    } else {
      alert("Erro,o campo de nome ou senha estão vazios");
    }
  }

  function handleGoBack(event) {
    event.preventDefault();
    history.push("/menu")
  }

  return (

    <Wrapper>
      <img src={logo} alt="" />
      <Note>
        <NoteMenu>
          <p>
            <strong>{props.title}</strong>
          </p>

          <form onSubmit={handleSubmit}>
            <label>
              {props.nameLabel}:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
              {props.passLabel}:
              <input type="password" value={pass} onChange={handlePassChange} />
            </label>

            <input type="submit" value={props.buttonLabel} />
          </form>
          <button onClick={() => props.handleLogin(name, pass, props.history)}>
            {props.buttonLabel2}
          </button>

        </NoteMenu>
      </Note>
    </Wrapper>
  );
}
