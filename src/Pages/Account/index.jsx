import React from "react";
import axios from "axios";
import { Wrapper, Note, NoteMenu } from "./style";
import { useHistory } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", oldPassword: "", newPassword: "" };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNewPassChange = this.handleNewPassChange.bind(this);
    this.handleOldPassChange = this.handleOldPassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleOldPassChange(event) {
    this.setState({ oldPassword: event.target.value });
  }

  handleNewPassChange(event) {
    this.setState({ newPassword: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const name = this.state.name;
    const password = this.state.newPassword;

    axios
      .put(`http://localhost:8000/api/info/${name}/?password=${password}`)
      .then(function (response) {
        const info = response.data;
        console.log(info);
        alert(info);
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });
    
  }


  handleDelete(name, password) {
    axios
      .delete(`http://localhost:8000/api/info/${name}`)
      .then(function (response) {
        const info = response.data;
        console.log(info);
        alert(info);
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });
  }

  
  render() {
    return (
      <Wrapper>
        <Note>
          <NoteMenu>
            <p>
              <strong>Account</strong>
            </p>

            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={this.state.oldPassword}
                  onChange={this.handleOldPassChange}
                />
              </label>
              <label>
                New Password:
                <input
                  type="password"
                  value={this.state.newPassword}
                  onChange={this.handleNewPassChange}
                />
              </label>

              <input type="submit" value="Update Account" />
            </form>
            <button
              onClick={() =>
                this.handleDelete(this.state.name, this.state.OldPassword)
              }
            >
              Delete Account
            </button>

          </NoteMenu>
        </Note>
      </Wrapper>
    );
  }
}

