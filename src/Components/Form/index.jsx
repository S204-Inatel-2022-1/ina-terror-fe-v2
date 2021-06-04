import React from "react";
import { Wrapper, Note, NoteMenu } from "./style";
import img from "../../assets/note.png";
import logo from "../../assets/logo.png";

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
    event.preventDefault();

    if (this.state.name && this.state.password) { //Evitar contas com Strings vazias
      alert(
        "Pronto " + this.state.name + " conta criada."
      );
      this.props.createAccount(this.state.name, this.state.password);
    } else {
      alert(
        "Erro,o campo de nome ou senha estão vazios"
      )
    }
  }


  render() {
    return (
      <Wrapper>
        <img src={logo} alt="" />
        <Note>
          <NoteMenu>
            <p>
              <strong>{this.props.title}</strong>
            </p>

            <form onSubmit={this.handleSubmit}>
              <label>
                {this.props.nameLabel}:
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </label>
              <label>
                {this.props.passLabel}:
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePassChange}
                />
              </label>

              <input type="submit" value={this.props.buttonLabel} />
            </form>
            <button onClick={this.props.handleLogin}>{this.props.buttonLabel2}</button>
          </NoteMenu>
        </Note>
      </Wrapper>
    );
  }
}
