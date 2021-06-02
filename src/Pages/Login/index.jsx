import React from "react";
import Emf from "../Emf";
import { Wrapper, Note } from "./style";
import img from "../../assets/note.png";
import logo from "../../assets/logo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: "" };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePassChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "Um nome foi enviado: " +
        this.state.name +
        "\nUma senha foi enviado: " +
        this.state.password
    );
    event.preventDefault();
  }

  render() {
    return (
      <Wrapper>
        <img src={logo} alt="" />
        <Note>
          <form onSubmit={this.handleSubmit}>
            <label>
              Nome:
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </label>
            <label>
              Senha:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePassChange}
              />
            </label>

            <input type="submit" value="Enviar" />
          </form>
        </Note>
      </Wrapper>
    );
  }
}
