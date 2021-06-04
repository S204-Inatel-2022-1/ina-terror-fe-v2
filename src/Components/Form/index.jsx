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
    alert(
      "Um nome foi enviado: " +
        this.state.name +
        "\nUma senha foi enviado: " +
        this.state.password
    );
    event.preventDefault();

    this.props.createAccount(this.state.name, this.state.password)
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
            <button>{this.props.buttonLabel2}</button>
          </NoteMenu>
        </Note>
      </Wrapper>
    );
  }
}
